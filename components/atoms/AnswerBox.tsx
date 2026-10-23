import { cx, mergeStyle, type ComponentProps } from "zefpdf-lab/ui/utils";
import s from "./AnswerBox.module.css";

export interface AnswerBoxProps extends ComponentProps {
  height?: string | number;
}

/** Empty space for a drawing or an answer; children are an optional prompt, top-left. */
export function AnswerBox({ height, className, style, ...props }: AnswerBoxProps) {
  return (
    <div
      className={cx(className, s.box)}
      style={mergeStyle(style, { height })}
      {...props}
    />
  );
}
