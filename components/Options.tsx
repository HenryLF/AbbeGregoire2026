import { BlockBox, joinClasses, mergeStyle } from "@weasyprint-tsx/ui";
import { ComponentProps, toChildArray } from "preact";

export function TrueFalse({
  txt1 = "Vrai",
  txt2 = "Faux",
  className,
  ...props
}: ComponentProps<"div"> & { txt1?: string; txt2?: string }) {
  return (
    <div className={joinClasses("inline font-bold", className)} {...props}>
      ▢ {txt1} ▢ {txt2}
    </div>
  );
}

export function Options({
  children,
  columns,
  inline = false,
  fontWeight = "bold",
  style,
  ...props
}: ComponentProps<"div"> & {
  columns?: number;
  inline?: boolean;
  fontWeight?: string;
}) {
  const childArray = toChildArray(children);
  const css = mergeStyle(style, {
    columnCount: columns ?? childArray.length,
    fontWeight,
    display: inline ? "inline-block" : undefined,
    verticalAlign: inline ? "middle" : undefined,
    padding: "0 1mm",
  });
  return (
    <BlockBox basis={columns}>
      {childArray.map((child) => (
        <div>▢ {child}</div>
      ))}
    </BlockBox>
  );
}
