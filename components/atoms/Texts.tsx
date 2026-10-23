import type { ComponentChild } from "preact";
import { cx, mergeStyle, type ComponentProps } from "zefpdf-lab/ui/utils";
import s from "./Texts.module.css";
export interface TextProps extends ComponentProps {
  align?: "center" | "justify" | "left" | "right";
  color?: string;
}

export function P({
  className,
  align = "justify",
  style,
  ...props
}: TextProps) {
  return (
    <div
      className={cx(className, s.text)}
      style={mergeStyle(style, { textAlign: align })}
      {...props}
    />
  );
}

export function S({ className, color, style, ...props }: TextProps) {
  return (
    <strong
      className={cx(className, s.strong)}
      style={mergeStyle(style, { "--strong--color": color })}
      {...props}
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
      <S color={color}>{title}</S>
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
