import {
  Block,
  BlockBox,
  LaTeX,
  UL,
  joinClasses,
  mergeStyle,
} from "@weasyprint-tsx/ui";
import { ComponentProps } from "preact";
import "./ImportantEquation.css";

interface EquationProps extends ComponentProps<"div"> {
  tex: string;
  className?: string;
  aligned?: boolean;
  chemical?: boolean;
  inline?: boolean;
  numberFormat?: boolean;
  fontSize?: number;
}

export function ImportantEquation({
  tex,
  className = "",
  aligned = true,
  chemical,
  inline,
  numberFormat,
  fontSize,
  style,
  ...props
}: EquationProps) {
  return (
    <div
      className={joinClasses(
        "important-equation",
        inline ? "important-equation--inline" : "",
        className,
      )}
      style={mergeStyle(style, { fontSize })}
      {...props}
    >
      <LaTeX tex={tex} {...{ aligned, chemical, numberFormat }} />
    </div>
  );
}

export function ImportantEquatioWithDetails({
  tex,
  className = "",
  aligned = true,
  chemical,
  inline,
  fontSize,
  ratio,
  ...props
}: ComponentProps<"div"> & EquationProps & { ratio?: number }) {
  return (
    <BlockBox {...{ className }}>
      <Block>
        <ImportantEquation {...{ tex,fontSize, chemical, aligned, inline }} />
      </Block>
      <Block {...{ ratio }}>
        <UL {...props} />
      </Block>
    </BlockBox>
  );
}
