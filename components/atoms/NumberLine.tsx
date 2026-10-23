import type { ComponentChildren } from "preact";
import type { ComponentProps } from "zefpdf-lab/ui/utils";
import { range } from "./Interval";
import { Details } from "./Texts";

export interface NumberLineProps extends ComponentProps {
  min?: number;
  max?: number;
  step?: number;
  tickLabel?: (value: number) => ComponentChildren;
  /** axis name, right of the arrow */
  label?: ComponentChildren;
  strokeWidth?: number;
  /** tick label size, in viewBox units */
  fontSize?: number;
  width?: string | number;
  align?: "center" | "justify" | "left" | "right";
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
  align = "right",
  children,
  className,
  style,
}: NumberLineProps) {
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
    <div className={className} style={style}>
      <svg
        viewBox={`0 0 ${arrowTip + pad + labelWidth} ${cy + tickHalf + fontSize + 10}`}
        width={width}
        xmlns="http://www.w3.org/2000/svg"
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
        {range(min, max, step).map((value) => (
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
      {children && <Details align={align}>{children}</Details>}
    </div>
  );
}
