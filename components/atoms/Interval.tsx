import type { ComponentChildren } from "preact";
import { cx, type ComponentProps } from "zefpdf-lab/ui/utils";
import s from "./Interval.module.css";

export interface IntervalProps extends ComponentProps {
  min?: number;
  max?: number;
  step?: number;
  /** explicit graduations, replace min/max/step */
  ticks?: number[];
  /** left bound of the highlighted interval (-Infinity allowed) */
  from?: number;
  /** right bound of the highlighted interval (Infinity allowed) */
  to?: number;
  closedLeft?: boolean;
  closedRight?: boolean;
  label?: (value: number) => ComponentChildren;
}

export function range(min: number, max: number, step: number): number[] {
  if (step <= 0 || !Number.isFinite(step)) return [min, max];
  const count = Math.round((max - min) / step);
  return Array.from({ length: count + 1 }, (_, i) =>
    Number((min + i * step).toFixed(6)),
  );
}

export function Interval({
  min = -2,
  max = 5,
  step = 1,
  ticks,
  from,
  to,
  closedLeft = true,
  closedRight = true,
  label = (value) => value.toLocaleString("fr"),
  className,
  children,
  ...props
}: IntervalProps) {
  const span = max - min || 1;
  const percent = (value: number) =>
    ((Math.min(Math.max(value, min), max) - min) / span) * 100;

  // An infinite bound runs to the end of the axis.
  const edge = (value: number | undefined, side: "left" | "right") => {
    if (value === undefined || !Number.isFinite(value)) {
      return side === "left"
        ? "(0% - var(--pad-left))"
        : "(100% + var(--pad-right))";
    }
    return `${percent(value)}%`;
  };

  const left = edge(from, "left");
  const right = edge(to, "right");

  return (
    <div className={cx(className, s.interval)} {...props}>
      <div className={s.track}>
        <div className={s.axis} />
        <div className={s.arrow} />

        {(from !== undefined || to !== undefined) && (
          <div
            className={s.highlight}
            style={{ left: `calc(${left})`, width: `calc(${right} - ${left})` }}
          />
        )}

        {(ticks ?? range(min, max, step)).map((value) => (
          <div
            key={value}
            className={s.tick}
            style={{ left: `${percent(value)}%` }}
          >
            <span className={s.label}>{label(value)}</span>
          </div>
        ))}

        {from !== undefined && Number.isFinite(from) && (
          <div
            className={cx(
              s.bracket,
              closedLeft ? s.bracket_right : s.bracket_left,
            )}
            style={{ left: `${percent(from)}%` }}
          />
        )}

        {to !== undefined && Number.isFinite(to) && (
          <div
            className={cx(
              s.bracket,
              closedRight ? s.bracket_left : s.bracket_right,
            )}
            style={{ left: `${percent(to)}%` }}
          />
        )}
      </div>

      {children && <div className={s.caption}>{children}</div>}
    </div>
  );
}
