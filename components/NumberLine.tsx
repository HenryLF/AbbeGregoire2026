import { ComponentChildren, ComponentProps } from "preact";
import { Details } from "./TextBlock";

export interface NumberLineProps extends Omit<
  ComponentProps<"svg">,
  "min" | "max" | "label"
> {
  /** Première graduation. */
  min?: number;
  /** Dernière graduation. */
  max?: number;
  /** Pas entre deux graduations. */
  step?: number;
  /** Formatage des étiquettes de graduation. */
  tickLabel?: (value: number) => ComponentChildren;
  /** Nom de l'axe, affiché à droite de la flèche. */
  label?: ComponentChildren;
  /** Épaisseur des traits. */
  strokeWidth?: number;
  /** Taille du texte des graduations (unités du viewBox). */
  fontSize?: number;
  align?: "right" | "left" | "center";
}

/** Graduations régulières de `min` à `max`, sans dérive flottante. */
function range(min: number, max: number, step: number): number[] {
  if (step <= 0 || !Number.isFinite(step)) return [min, max];
  const count = Math.round((max - min) / step);
  return Array.from({ length: count + 1 }, (_, i) =>
    Number((min + i * step).toFixed(6)),
  );
}

export function NumberLine({
  min = 0,
  max = 10,
  step = 1,
  tickLabel = (value) => value.toLocaleString("fr"),
  label,
  strokeWidth = 1.5,
  fontSize = 12,
  width = "100%",
  children,
  align = "right",
  ...props
}: NumberLineProps) {
  const ticks = range(min, max, step);

  const pad = 10;
  const tickStart = pad + 10;
  const tickEnd = 470;
  const arrowTip = tickEnd + 45;
  const labelWidth = label ? 40 : 0;
  const cy = 20;
  const tickHalf = 6;
  const headLength = 12;
  const headHalf = 6;

  const span = max - min || 1;
  const x = (value: number) =>
    tickStart + ((value - min) / span) * (tickEnd - tickStart);

  return (
    <>
      <svg
        viewBox={`0 0 ${arrowTip + pad + labelWidth} ${cy + tickHalf + fontSize + 10}`}
        width={width}
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <line
          x1={pad}
          y1={cy}
          x2={arrowTip - headLength + 2}
          y2={cy}
          stroke="black"
          stroke-width={strokeWidth}
        />
        <polygon
          points={`${arrowTip},${cy} ${arrowTip - headLength},${cy - headHalf} ${arrowTip - headLength},${cy + headHalf}`}
          fill="black"
        />
        {ticks.map((value) => (
          <g key={value}>
            <line
              x1={x(value)}
              y1={cy - tickHalf}
              x2={x(value)}
              y2={cy + tickHalf}
              stroke="black"
              stroke-width={strokeWidth}
            />
            <text
              x={x(value)}
              y={cy + tickHalf + fontSize + 4}
              text-anchor="middle"
              font-size={fontSize}
            >
              {tickLabel(value)}
            </text>
          </g>
        ))}
        {label && (
          <text
            x={arrowTip + 6}
            y={cy}
            dominant-baseline="middle"
            font-size={fontSize}
          >
            {label}
          </text>
        )}
      </svg>
      <Details align={align}>{children}</Details>
    </>
  );
}
