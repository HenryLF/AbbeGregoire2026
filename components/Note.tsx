import { joinClasses, UL } from "@weasyprint-tsx/ui";
import { ComponentChildren, ComponentProps } from "preact";
import { PropsWithChildren } from "preact/compat";
import styles from "./Note.module.css";

// Callout blocks (`Note`, `Rappel`, `Digression`), the document `Title`, and the
// inline `Exemple` list. These have their own CSS module rather than living in
// TextBlock.module.css because both sheets define `.header` for different things.

// `header` is widened from preact's own string-only `<div header>` attribute to
// arbitrary children, so it has to be omitted from the base props first.
export interface NoteProps extends Omit<ComponentProps<"div">, "header"> {
  header?: ComponentChildren;
  headerText?: string;
}

export function Note({
  header,
  headerText = "Note:",
  children,
  className,
  ...props
}: NoteProps) {
  return (
    <div className={joinClasses(className, styles.note)} {...props}>
      {header ?? (
        <div className={styles.header}>
          <strong>{headerText}</strong>
        </div>
      )}
      {children}
    </div>
  );
}

export function Rappel({
  children,
  header,
  headerText = "Rappel:",
  className,
  ...props
}: NoteProps) {
  return (
    <div className={joinClasses(className, styles.rappel)} {...props}>
      {header ?? (
        <div className={styles.header}>
          <strong>{headerText}</strong>
        </div>
      )}
      {children}
    </div>
  );
}

export function Digression({
  children,
  header,
  headerText,
  className,
  ...props
}: NoteProps) {
  return (
    <div className={joinClasses(className, styles.digression)} {...props}>
      {(header ?? headerText) ? (
        <div className={styles.header}>
          <strong>{headerText}</strong>
        </div>
      ) : undefined}
      {children}
    </div>
  );
}

export function Exemple({
  children,
  className,
  ...props
}: ComponentProps<"div">) {
  return (
    <div
      className={joinClasses(className, "text-xs italic px-[5mm]")}
      {...props}
    >
      <span className={"border-solid border-0 border-b-2"}>Exemple: </span>
      <UL>{children}</UL>
    </div>
  );
}

export function Title({ children }: PropsWithChildren) {
  return <h1 className={styles.title}>{children}</h1>;
}
