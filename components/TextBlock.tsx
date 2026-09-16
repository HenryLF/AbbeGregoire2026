import handraised from "@assets/handraised.png";
import { joinClasses, mergeStyle, OL } from "@weasyprint-tsx/ui";

import { ComponentChildren, ComponentProps } from "preact";
import { Img } from "./Image";
import styles from "./TextBlock.module.css";

export interface TextBlockProps extends ComponentProps<"div"> {
  text?: ComponentChildren;
}

export function Problem({
  text = "Problème:",
  children,
  className,
  ...props
}: TextBlockProps) {
  return (
    <OL
      className={joinClasses(styles.problem, styles.container, className)}
      {...props}
    >
      <span className={styles.header}>{text}</span>
      {children}
    </OL>
  );
}
export interface DetailsProps extends ComponentProps<"div"> {
  align?: "left" | "right" | "center";
}
export function Details({
  className,
  align = "center",
  style,
  ...props
}: DetailsProps) {
  const css = mergeStyle(style, {
    textAlign: align,
  });
  return (
    <div
      style={css}
      className={joinClasses(className, styles.details)}
      {...props}
    />
  );
}

export function Circle({ style, className, ...props }: ComponentProps<"div">) {
  const css = mergeStyle(style, {
    backgroundColor: "black",
    color: "white",
    fontWeight: "bold",
    aspectRatio: 1,
    height: "auto",
    padding: 5,
    display: "inline",
    borderRadius: "50%",
  });
  return (
    <div style={css} className={joinClasses("circle", className)} {...props} />
  );
}

export function Call({ className, children, ...props }: ComponentProps<"div">) {
  return (
    <div className={joinClasses(styles.call, className)} {...props}>
      <Img src={handraised} className="h-15" />
      <div className={styles.call_content}>{children}</div>
    </div>
  );
}
