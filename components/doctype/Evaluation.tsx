import { Exercice, type ExerciceProps } from "@components/section/Exercice";
import "@styles/evaluation.css";
import { cloneElement, createContext, toChildArray, type VNode } from "preact";
import { useContext } from "preact/hooks";
import { Document, type DocumentProps } from "zefpdf-lab/ui/Document";
import { DotLine } from "zefpdf-lab/ui/Inputs";
import { LI, OL } from "zefpdf-lab/ui/List";
import { Table, TEntry, THeader } from "zefpdf-lab/ui/Table";
import { cx, type ComponentProps } from "zefpdf-lab/ui/utils";

// The document keeps its barème in an object, each <NoteBox> reads its entry,
// and <Evaluation> gets one total per <EvalExercice>, in order. They must be
// direct children of <Evaluation>: their title, bonus flag and points are read
// from there, so the header table and <Summary> know them up front.

/** French decimal formatting: 1.5 → "1,5". */
export const formatPoints = (n: number) => n.toLocaleString("fr-FR");
export const pts = (n: number) => `${formatPoints(n)} ${n < 2 ? "pt" : "pts"}`;

export type Bareme = number | { [key: string | number]: Bareme };

/** Sum of every number in a (possibly nested) barème. */
export function sumPoints(bareme: Bareme): number {
  if (typeof bareme === "number") return bareme;
  return Object.values(bareme).reduce<number>(
    (acc, v) => acc + sumPoints(v),
    0,
  );
}

interface ExerciceScale {
  title?: string;
  points: number;
  bonus: boolean;
}

const SummaryContext = createContext<ExerciceScale[]>([]);
/** Points of the NoteBoxes rendered so far in the current exercise. */
const ExerciceContext = createContext<{ points: number } | null>(null);

function PointsBox({
  points,
  label,
  total,
  className,
  style,
}: ComponentProps & { points: number; label?: string; total?: boolean }) {
  return (
    <Table
      className={cx(
        className,
        "evaluation--notebox",
        total && "evaluation--total",
      )}
      style={style}
    >
      <TEntry
        header={label}
        content={[
          <>
            <span className="evaluation--blank" />/ {formatPoints(points)}
          </>,
        ]}
      />
    </Table>
  );
}

/** Grading box for one question. */
export function NoteBox({
  points,
  ...props
}: ComponentProps & { points: number }) {
  const exercice = useContext(ExerciceContext);
  if (exercice) exercice.points += points;
  return <PointsBox points={points} {...props} />;
}

/**
 * Rendered after the exercise's NoteBoxes, so it can check their sum.
 * The check still runs when the box is hidden.
 */
function TotalBox({
  title,
  points,
  hidden,
}: {
  title?: string;
  points: number;
  hidden?: boolean;
}) {
  const exercice = useContext(ExerciceContext);
  if (exercice && Math.abs(exercice.points - points) > 1e-9)
    throw new Error(
      `Exercice "${title}": its NoteBoxes add up to ${exercice.points} but the barème gives ${points}`,
    );
  if (hidden) return null;
  return <PointsBox points={points} label="Total Exercice" total />;
}

export interface EvalExerciceProps extends ExerciceProps {
  /** not counted in the total of the evaluation */
  bonus?: boolean;
  /** set by <Evaluation> from its `barem` */
  points?: number;
  /** show the "Total Exercice" box at the end (default true) */
  totalBox?: boolean;
}

/** `Exercice` with its points in the title and a total box at the end. */
export function EvalExercice({
  title,
  bonus,
  points = 0,
  totalBox = true,
  children,
  ...props
}: EvalExerciceProps) {
  return (
    <Exercice
      title={`${title ?? ""} (${bonus ? "bonus : " : ""}${pts(points)})`}
      {...props}
    >
      <ExerciceContext.Provider value={{ points: 0 }}>
        {children}
        <TotalBox title={title} points={points} hidden={!totalBox} />
      </ExerciceContext.Provider>
    </Exercice>
  );
}

/** Numbered list of the exercises with their points. */
export function Summary({ className, ...props }: ComponentProps) {
  const exercices = useContext(SummaryContext);
  return (
    <OL className={cx(className, "columns-2")} {...props}>
      {exercices.map(({ title, points, bonus }) => (
        <LI>
          {title} ({bonus ? "bonus : " : ""}
          {pts(points)})
        </LI>
      ))}
    </OL>
  );
}

function Synthesis({
  total,
  redressed,
}: {
  total: number;
  redressed: boolean;
}) {
  const blank = (max: number) => (
    <>
      <span className="evaluation--blank" />/ {formatPoints(max)}
    </>
  );
  return (
    <>
      <div className="evaluation--identity">
        <span>
          NOM Prénom : <DotLine width="8cm" lineStyle="dotted" />
        </span>
        <span>
          Classe : <DotLine width="3cm" lineStyle="dotted" />
        </span>
      </div>
      <Table className="evaluation--synthesis">
        <THeader
          content={
            redressed ? ["Note brute", "Base notation", "Note finale"] : ["Note"]
          }
        />
        <TEntry
          content={redressed ? [blank(total), null, blank(20)] : [blank(total)]}
        />
      </Table>
    </>
  );
}

interface EvaluationProps extends DocumentProps {
  /** points of each <EvalExercice>, in order */
  barem: number[];
  /**
   * the raw score is rescaled (default true): the synthesis table shows
   * "Note brute", "Base notation" and "Note finale"; otherwise only "Note", out of the barème total
   */
  redressed?: boolean;
}

export function Evaluation({
  children,
  barem,
  redressed = true,
  title,
  ...props
}: EvaluationProps) {
  const exercices: ExerciceScale[] = [];
  const content = toChildArray(children).map((child) => {
    if ((child as VNode)?.type != EvalExercice) return child;
    const exercice = child as VNode<EvalExerciceProps>;
    const points = barem[exercices.length] ?? 0;
    exercices.push({
      title: exercice.props.title,
      bonus: !!exercice.props.bonus,
      points,
    });
    return cloneElement(exercice, { points });
  });
  if (exercices.length != barem.length)
    throw new Error(
      `Evaluation "${title}": barem has ${barem.length} entries for ${exercices.length} exercices`,
    );
  const total = exercices.reduce((acc, e) => acc + (e.bonus ? 0 : e.points), 0);
  return (
    <Document title={`${title} - Évaluation`} {...props}>
      <SummaryContext.Provider value={exercices}>
        <Synthesis total={total} redressed={redressed} />
        {content}
      </SummaryContext.Provider>
    </Document>
  );
}
