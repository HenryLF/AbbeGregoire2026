import handraised from "@assets/icons/handraised.png";
import {
  cssString,
  cx,
  ListContext,
  mergeStyle,
  OL,
  toLowerAlpha,
  type ComponentProps,
  type ListProps,
} from "zefpdf-lab/ui";
import { Flex } from "zefpdf-lab/ui/Layout";
import s from "./Exercice.module.css";

export interface ExerciceProps extends ListProps {
  title?: string;
  count?: number;
  /** replaces the "Exercice" / "Activité" / "Problème" header word */
  header?: string;
}

function headerText(header?: string) {
  return header ? cssString(`${header} `) : undefined;
}

export function Exercice({
  title,
  count,
  header,
  style,
  className,
  children,
  ...props
}: ExerciceProps) {
  return (
    <OL
      className={cx(className, s.exercice)}
      style={mergeStyle(style, {
        counterIncrement: "exercice-count",
        counterSet: count ? `exercice-count ${count}` : undefined,
        "--header-text": headerText(header),
      })}
      {...props}
    >
      <div className={s.title}>{title}</div>
      {children}
    </OL>
  );
}

export function TP({
  title,
  count,
  header,
  style,
  className,
  children,
  ...props
}: ExerciceProps) {
  return (
    <OL
      className={cx(className, s.tp)}
      style={mergeStyle(style, {
        counterIncrement: "tp-count",
        counterSet: count ? `tp-count ${count}` : undefined,
        "--header-text": headerText(header),
      })}
      {...props}
    >
      <div className={s.title}>{title}</div>
      {children}
    </OL>
  );
}

export function Problem({
  children,
  title,
  header,
  className,
  style,
  ...props
}: ExerciceProps) {
  return (
    <OL
      className={cx(className, s.problem)}
      style={mergeStyle(style, { "--header-text": headerText(header) })}
      {...props}
    >
      <div className={s.title}>{title}</div>
      {children}
    </OL>
  );
}

export function Call({ className, children, ...props }: ComponentProps) {
  return (
    <Flex align="center" gap="2mm" className={cx(className, s.call)} {...props}>
      <img src={handraised} alt="" className={s.callIcon} />
      <div className={s.callContent}>{children}</div>
    </Flex>
  );
}

export function SubQuestion({
  children,
  marker: propsMarker = (k) => toLowerAlpha(k) + ")",
  count,
  ...props
}: ListProps) {
  return (
    <>
      <ListContext.Consumer>
        {(ctx) => {
          if (!ctx) return children;
          const context = { ...ctx, ...props };
          const n = (ctx.counter.value = count ?? ctx.counter.value + 1);
          const marker =
            typeof context.marker == "string"
              ? context.marker
              : context.marker(n);
          const subMarker =
            typeof propsMarker == "string" ? () => propsMarker : propsMarker;
          return <OL marker={(k) => `${marker}${subMarker(k)}`}>{children}</OL>;
        }}
      </ListContext.Consumer>
    </>
  );
}
