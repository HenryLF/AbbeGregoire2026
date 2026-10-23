import { cx, mergeStyle, type ComponentProps } from "zefpdf-lab/ui/utils";
import s from "./Doc.module.css";

export interface DocProps extends ComponentProps {
  count?: number;
  caption?: string;
}

export function Doc({
  children,
  className,
  style,
  count,
  caption,
  ...props
}: DocProps) {
  return (
    <div
      className={cx(className, s.container)}
      style={mergeStyle(style, {
        counterIncrement: "doc-count",
        counterSet: count ? `doc-count ${count}` : undefined,
      })}
      {...props}
    >
      {children}
      {caption && <div className={s.caption}>{caption}</div>}
    </div>
  );
}
