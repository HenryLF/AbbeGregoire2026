import { DotLine, joinClasses } from "@weasyprint-tsx/ui";
import { ComponentProps } from "preact";
import styles from "./NoteBox.module.css";

// Grading helpers for evaluations: `NoteBox` is the "…… / n pts" box the
// grader fills per question (or per exercise with `total`), `EvalSynthesis` the
// summary table at the top of the copy, used to rescale the raw score.

/** French decimal formatting: 1.5 → "1,5". */
export const formatPoints = (n: number) => n.toLocaleString("fr-FR");

/** Sum of every number in a (possibly nested) points scale. */
export function sumPoints(scale: number | Record<string, unknown>): number {
  if (typeof scale === "number") return scale;
  return Object.values(scale).reduce<number>(
    (acc, v) =>
      acc +
      (typeof v === "number" || (v && typeof v === "object")
        ? sumPoints(v as number | Record<string, unknown>)
        : 0),
    0,
  );
}

export interface NoteBoxProps extends ComponentProps<"table"> {
  points: number;
  /** End-of-exercise variant: emphasised, labelled "Total". */
  total?: boolean;
}

// Placed after a question's answer area: it sits on its own line against the
// right margin, leaving the space to its left free for the grader's comments.
export function NoteBox({ points, total, className, ...props }: NoteBoxProps) {
  return (
    <table
      className={joinClasses(
        className,
        styles.notebox,
        total ? styles.total : undefined,
      )}
      {...props}
    >
      <tr>
        <th>{total ? "Total exercice" : "Note"}</th>
        <td>
          <span className={styles.blank} /> / {formatPoints(points)}
        </td>
      </tr>
    </table>
  );
}

export interface EvalSynthesisProps extends ComponentProps<"table"> {
  /** Total number of points available in the evaluation. */
  total: number;
  correctedTotal?: number;
}

export function EvalSynthesis({
  total,
  correctedTotal = 20,
  className,
  ...props
}: EvalSynthesisProps) {
  return (
    <>
      <div style={{ "--wsx--dotline--line-height": "5mm" }}>
        <div className={"inline"}>
          NOM Prénom: <DotLine width={"8cm"} />
        </div>
        <div className={"inline-block w-40 h-5"} />
        <div className={"text-right inline"}>
          Classe : <DotLine width={"3cm"} />
        </div>
      </div>
      <table className={joinClasses(className, styles.synthesis)} {...props}>
        <thead>
          <tr>
            <th>Note brute</th>
            <th>Base de notation</th>
            <th>Note corrigée</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <span className={styles.blank} /> / {formatPoints(total)}
            </td>
            <td>
              <span className={styles.blank} />
            </td>
            <td>
              <span className={styles.blank} /> / {formatPoints(correctedTotal)}
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
