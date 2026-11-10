import { Exercice, type ExerciceProps } from "@components/section/Exercice";
import "@styles/evaluation.css";
import { createContext, isValidElement, type VNode } from "preact";
import { useContext } from "preact/hooks";
import { Document, type DocumentProps } from "zefpdf-lab/ui/Document";
import { DotLine } from "zefpdf-lab/ui/Inputs";
import { Flex } from "zefpdf-lab/ui/Layout";
import { LI, OL } from "zefpdf-lab/ui/List";
import { Table, TEntry, THeader } from "zefpdf-lab/ui/Table";
import { cx, type ComponentProps } from "zefpdf-lab/ui/utils";

// Points are written once, on the <NoteBox>es. Before rendering, each
// <EvalExercice> walks its JSX tree to add up its NoteBoxes (title and total
// box), and <Evaluation> walks its own to find the <EvalExercice>s (header
// table and <Summary>). The walk sees every NoteBox written in the JSX,
// including those in props such as `mainLI` or table `content`. A NoteBox
// created inside another component's render is not visible to it (except in
// <NoteLines>, which is looked for too): the exercise then throws, as the boxes
// it renders no longer match the ones it found.

/** French decimal formatting: 1.5 → "1,5". */
export const formatPoints = (n: number) => n.toLocaleString("fr-FR");
export const pts = (n: number) => `${formatPoints(n)} ${n < 2 ? "pt" : "pts"}`;

/** Every vnode of one of `types` in a JSX tree, without looking inside the matches. */
function findElements<P>(
  node: unknown,
  types: unknown[],
  found: VNode<P>[] = [],
) {
  if (Array.isArray(node)) {
    for (const child of node) findElements(child, types, found);
  } else if (isValidElement(node)) {
    if (types.includes(node.type)) found.push(node as VNode<P>);
    else
      for (const value of Object.values(node.props as object))
        findElements(value, types, found);
  }
  return found;
}

const sum = (values: number[]) => values.reduce((acc, v) => acc + v, 0);

/** Points of the NoteBoxes (and NoteLines) written in a JSX tree. */
const notePoints = (node: unknown) =>
  sum(
    findElements<NoteBoxProps>(node, [NoteBox, NoteLines]).map(
      ({ props }) => props.points,
    ),
  );

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

export interface NoteBoxProps extends ComponentProps {
  points: number;
}

/** Grading box for one question. Its points count in the exercise total. */
export function NoteBox({ points, ...props }: NoteBoxProps) {
  const exercice = useContext(ExerciceContext);
  if (exercice) exercice.points += points;
  return <PointsBox points={points} {...props} />;
}

export interface NoteLinesProps extends NoteBoxProps {
  /** number of answer lines, the NoteBox sits at the end of the last one (default 1) */
  lines?: number;
}

/** Dotted answer lines ending with a NoteBox on the last line. */
export function NoteLines({
  points,
  lines = 1,
  className,
  style,
}: NoteLinesProps) {
  return (
    <div className={className} style={style}>
      {lines > 1 && <DotLine count={lines - 1} />}
      <Flex>
        <DotLine className="flex-1" />
        <NoteBox points={points} />
      </Flex>
    </div>
  );
}

/**
 * Rendered after the exercise's NoteBoxes: checks that the boxes rendered
 * match the ones found in the JSX. The check still runs when the box is hidden.
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
      `Exercice "${title}": its NoteBoxes render ${exercice.points} pts but ${points} pts were found in its JSX. ` +
        `Write the NoteBoxes in the exercise's JSX, not inside another component.`,
    );
  if (hidden) return null;
  return <PointsBox points={points} label="Total Exercice" total />;
}

export interface EvalExerciceProps extends ExerciceProps {
  /** not counted in the total of the evaluation */
  bonus?: boolean;
  /** hide the "Total Exercice" box at the end */
  hideNoteBox?: boolean;
}

const exerciceScale = ({ title, bonus, children }: EvalExerciceProps) => ({
  title,
  bonus: !!bonus,
  points: notePoints(children),
});

/** `Exercice` with the sum of its NoteBoxes in the title and a total box at the end. */
export function EvalExercice({
  title,
  bonus,
  hideNoteBox,
  children,
  ...props
}: EvalExerciceProps) {
  const points = notePoints(children);
  return (
    <Exercice
      title={`${title ?? ""} (${bonus ? "bonus : " : ""}${pts(points)})`}
      {...props}
    >
      <ExerciceContext.Provider value={{ points: 0 }}>
        {children}
        <TotalBox title={title} points={points} hidden={hideNoteBox} />
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
  hideNoteCorrection,
}: {
  total: number;
  hideNoteCorrection?: boolean;
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
            hideNoteCorrection
              ? ["Note"]
              : ["Note brute", "Base notation", "Note finale"]
          }
        />
        <TEntry
          content={
            hideNoteCorrection ? [blank(total)] : [blank(total), null, blank(20)]
          }
        />
      </Table>
    </>
  );
}

interface EvaluationProps extends DocumentProps {
  /**
   * the raw score is not rescaled: the synthesis table shows only "Note",
   * out of the total, instead of "Note brute", "Base notation" and "Note finale"
   */
  hideNoteCorrection?: boolean;
}

/** Total = sum of the NoteBoxes of every non-bonus <EvalExercice> it contains. */
export function Evaluation({
  children,
  hideNoteCorrection,
  title,
  ...props
}: EvaluationProps) {
  const exercices = findElements<EvalExerciceProps>(children, [EvalExercice]).map(
    ({ props }) => exerciceScale(props),
  );
  const total = sum(exercices.filter((e) => !e.bonus).map((e) => e.points));
  return (
    <Document title={`${title} - Évaluation`} {...props}>
      <SummaryContext.Provider value={exercices}>
        <Synthesis total={total} hideNoteCorrection={hideNoteCorrection} />
        {children}
      </SummaryContext.Provider>
    </Document>
  );
}
