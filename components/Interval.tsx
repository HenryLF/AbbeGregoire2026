import { joinClasses, mergeStyle } from "@weasyprint-tsx/ui";
import { ComponentChildren, ComponentProps } from "preact";
import styles from "./Interval.module.css";

export interface IntervalProps extends Omit<ComponentProps<"div">, "min" | "max"> {
  /** Première graduation de la droite. */
  min?: number;
  /** Dernière graduation de la droite. */
  max?: number;
  /** Pas entre deux graduations. */
  step?: number;
  /** Graduations explicites (remplace min/max/step pour l'affichage). */
  ticks?: number[];
  /** Borne gauche de l'intervalle colorié (-Infinity accepté). */
  from?: number;
  /** Borne droite de l'intervalle colorié (Infinity accepté). */
  to?: number;
  /** Crochet fermé à gauche : `[` (sinon `]`). */
  closedLeft?: boolean;
  /** Crochet fermé à droite : `]` (sinon `[`). */
  closedRight?: boolean;
  /** Formatage des étiquettes de graduation. */
  label?: (value: number) => ComponentChildren;
  /** Légende affichée sous la droite. */
  caption?: ComponentChildren;
}

/** Graduations régulières de `min` à `max`, sans dérive flottante. */
function range(min: number, max: number, step: number): number[] {
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
  label = (value) => value,
  caption,
  className,
  style,
  children,
  ...props
}: IntervalProps) {
  const span = max - min || 1;
  /** Position d'une valeur, en pourcentage de la zone graduée. */
  const percent = (value: number) =>
    ((Math.min(Math.max(value, min), max) - min) / span) * 100;

  /** Abscisse d'une borne : un pourcentage, ou le bord de la droite si infinie. */
  const edge = (value: number | undefined, side: "left" | "right") => {
    if (value === undefined || !Number.isFinite(value)) {
      return side === "left"
        ? "(0% - var(--pad-left))"
        : "(100% + var(--pad-right))";
    }
    return `${percent(value)}%`;
  };

  const hasHighlight = from !== undefined || to !== undefined;
  const left = edge(from, "left");
  const right = edge(to, "right");

  const graduations = ticks ?? range(min, max, step);

  return (
    <div
      className={joinClasses(styles.interval, className)}
      style={mergeStyle(style, {})}
      {...props}
    >
      <div className={styles.track}>
        <div className={styles.axis} />
        <div className={styles.arrow} />

        {hasHighlight && (
          <div
            className={styles.highlight}
            style={{ left: `calc(${left})`, width: `calc(${right} - ${left})` }}
          />
        )}

        {graduations.map((value) => (
          <div
            key={value}
            className={styles.tick}
            style={{ left: `${percent(value)}%` }}
          >
            <span className={styles.label}>{label(value)}</span>
          </div>
        ))}

        {from !== undefined && Number.isFinite(from) && (
          <div
            className={joinClasses(
              styles.bracket,
              closedLeft ? styles.bracket_right : styles.bracket_left,
            )}
            style={{ left: `${percent(from)}%` }}
          />
        )}

        {to !== undefined && Number.isFinite(to) && (
          <div
            className={joinClasses(
              styles.bracket,
              closedRight ? styles.bracket_left : styles.bracket_right,
            )}
            style={{ left: `${percent(to)}%` }}
          />
        )}
      </div>

      {(caption || children) && (
        <div className={styles.caption}>
          {caption}
          {children}
        </div>
      )}
    </div>
  );
}
