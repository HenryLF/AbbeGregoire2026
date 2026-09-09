// Barrel export for the shared document components.
//
// Note: `Problem` exists in both TextBlock.tsx (an OL with a "Problème:" header)
// and Exercice.tsx (a titled .problem block). The TextBlock one keeps the plain
// name; the Exercice one is re-exported as `ExerciceProblem`. Either can also be
// reached unambiguously via a deep import, e.g. `@components/Exercice`.

export { Document, type DocumentProps } from "./Document";

export { Img, QR } from "./Image";
export { Call, Circle, Details, Problem, type DetailsProps, type TextBlockProps } from "./TextBlock";

// Callout blocks, document title and the inline `Exemple` list. Promoted into
// the shared layer while resolving C004/C006/C011 — these five names had no
// canonical counterpart and previously lived only in the parked TextBlock forks.
export { Digression, Exemple, Note, Rappel, Title, type NoteProps } from "./Note";

export {
  Doc,
  Exercice,
  Options,
  Problem as ExerciceProblem,
  SubQuestions,
  TP,
  type OptionsProps,
  type SubQuestionProps,
} from "./Exercice";

export { Interval, type IntervalProps } from "./Interval";

export {
  A,
  B,
  F,
  Fx,
  K,
  N,
  T,
  Th,
  UnderScriptFactory,
  X,
} from "./EquationSymbols";
export { AutoTable } from "./ExempleEquation";
export {
  ImportantEquation,
  ImportantEquatioWithDetails,
} from "./ImportantEquation";
export { TrueFalse } from "./TrueFalse";

export { Arrow, type ArrowProps } from "./Arrow";

// `Options` (also exported by Exercice.tsx) and `TrueFalse` (also exported by
// TrueFalse.tsx) are unrelated components from a different source file —
// barrel-name collision, not a version conflict (see N001 for the pattern).
export {
  Options as Stat1VarOptions,
  TrueFalse as Stat1VarTrueFalse,
} from "./Options";
