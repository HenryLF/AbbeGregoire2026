import { cx, mergeStyle, type ComponentProps } from "zefpdf-lab/ui/utils";
import s from "./Decorator.module.css";

export interface CircleProps extends ComponentProps {
  color?: string;
  bgColor?: string;
  size?: string | number;
}

export function Circle({
  children,
  bgColor = "currentColor",
  color = "white",
  size = "5mm",
  className,
  style,
}: CircleProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={className}
      style={mergeStyle(style, { display: "inline" })}
    >
      <circle cx={50} cy={50} r={50} fill={bgColor} />
      <text
        x={50}
        y={50}
        fill={color}
        font-size={60}
        font-weight="bold"
        text-anchor="middle"
        dominant-baseline="central"
      >
        {children}
      </text>
    </svg>
  );
}

export interface PillProps extends ComponentProps {
  color?: string;
}

export function Pill({ color, className, style, ...props }: PillProps) {
  return (
    <span
      className={cx(className, s.pill)}
      style={mergeStyle(style, { "--pill--color": color })}
      {...props}
    />
  );
}
