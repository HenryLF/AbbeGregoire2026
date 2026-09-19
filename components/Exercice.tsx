import type { OlProps, UlProps } from "@weasyprint-tsx/ui";
import {
  H2,
  LI,
  OL,
  UL,
  joinClasses,
  mergeStyle,
  toLowerAlphabetical,
} from "@weasyprint-tsx/ui";
import { toChildArray } from "preact";
import { PropsWithChildren } from "preact/compat";
import "./Exercice.css";
interface ExerciceProps extends OlProps {
  title?: string;
}

export function Exercice({
  title = "",
  children,
  className,
  start,
  format,
  separator,
  spacing,
  indent,
  ...props
}: ExerciceProps) {
  return (
    <div className={joinClasses(className, "exercice")} {...props}>
      <H2>{title}</H2>
      <OL
        {...{
          start,
          format,
          separator,
          spacing,
          indent,
        }}
      >
        {children}
      </OL>
    </div>
  );
}

export function TP({ title, children, className, ...props }: ExerciceProps) {
  return (
    <div className={joinClasses(className, "tp")} {...props}>
      <H2>{title}</H2>
      <OL>{children}</OL>
    </div>
  );
}

export function Doc({ children, className, ...props }: ExerciceProps) {
  return (
    <div className={joinClasses(className, "document")} {...props}>
      {children}
    </div>
  );
}

export interface OptionsProps extends UlProps {
  columns?: number;
}
export function Options({
  columns,
  style,
  className,
  children,
  indent=0,
  ...props
}: OptionsProps) {
  const childs = toChildArray(children).map((child) => <LI>{child}</LI>);
  const css = mergeStyle(style, {
    columnCount: columns ?? childs.length,
  });
  return (
    <UL
      marker="&#9634;"
      className={joinClasses("options", className)}
      indent={indent}
      style={css}
      children={childs}
      {...props}
    />
  );
}

export interface SubQuestionProps extends PropsWithChildren {
  count: number;
}
export function SubQuestions({ children, count }: SubQuestionProps) {
  return (
    <OL
      className="subquestion"
      format={(s) => `${count}.${toLowerAlphabetical(s)}`}
      separator=")"
    >
      {children}
    </OL>
  );
}
