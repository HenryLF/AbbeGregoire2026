import { cx, mergeStyle, type ComponentProps } from "zefpdf-lab/ui";
import s from "./Img.module.css";
import { Details } from "./Texts";

export interface ImgProps extends ComponentProps {
  src: string;
  align?: "center" | "justify" | "left" | "right";
  /** Fixed box for the image (e.g. "3cm"); the picture is scaled to fit inside it. */
  width?: string;
  height?: string;
}

export function Img({
  src,
  className,
  children,
  align,
  width,
  height,
  style,
  ...props
}: ImgProps) {
  return (
    <div
      className={cx(className, s.container)}
      style={mergeStyle(style, width ? { width, flexShrink: 0 } : {})}
      {...props}
    >
      <img
        src={src}
        alt=""
        className={s.img}
        style={
          width || height
            ? { width: "100%", height: height ?? "auto", objectFit: "contain" }
            : undefined
        }
      />
      {children && (
        <Details align={align} className={s.caption}>
          {children}
        </Details>
      )}
    </div>
  );
}
