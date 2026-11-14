import type { ComponentChild } from "preact";
import { cx, mergeStyle, type ComponentProps } from "zefpdf-lab/ui/utils";
import s from "./Texts.module.css";
export interface TextProps extends ComponentProps {
  align?: "center" | "justify" | "left" | "right";
  color?: string;
  indent?: string | number;
  size?: string | number;
}

function mergeTextStyle(textProps: TextProps) {
  const { style, align, size, color, indent } = textProps;
  return mergeStyle(style, {
    color,
    textAlign: align,
    "--text-indent": indent,
    "--text-fontsize": size,
  });
}

export function P({ className, ...props }: TextProps) {
  return (
    <div
      {...props}
      className={cx(className, s.text)}
      style={mergeTextStyle(props)}
    />
  );
}

export function S({ className, ...props }: TextProps) {
  return (
    <strong
      {...props}
      className={cx(className, s.strong)}
      style={mergeTextStyle(props)}
    />
  );
}

export function It({ className, ...props }: TextProps) {
  return (
    <span
      {...props}
      style={mergeTextStyle(props)}
      className={cx(className, s.italic)}
    />
  );
}

export function Details({
  className,
  align = "center",
  style,
  ...props
}: TextProps) {
  return (
    <div
      className={cx(className, s.details)}
      style={mergeStyle(style, { textAlign: align })}
      {...props}
    />
  );
}

export function Note({
  title = "Remarque:",
  children,
  color,
  className,
  style,
}: TextProps & { title?: ComponentChild }) {
  return (
    <div
      className={cx(className, s.note)}
      style={mergeStyle(style, {
        "--strong--color": color,
      })}
    >
      <S color={color} className={s.noteTitle}>
        {title}
      </S>
      {children}
    </div>
  );
}

export function Important({ className, style, color, ...props }: TextProps) {
  return (
    <div
      style={mergeStyle(style, { "--strong--color": color })}
      className={cx(className, s.important)}
      {...props}
    />
  );
}
