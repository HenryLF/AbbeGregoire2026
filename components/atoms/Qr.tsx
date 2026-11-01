import { mergeStyle, QrCode, type ComponentProps } from "zefpdf-lab/ui";
import { Details } from "./Texts";

interface QrProps extends ComponentProps {
  size?: string;
  align?: "center" | "justify" | "left" | "right";
  href: string;
}

export function Qr({
  href,
  size = "15mm",
  children,
  align = "center",
  style,
  ...props
}: QrProps) {
  return (
    <a href={href} {...props}>
      <QrCode
        href={href}
        size={200}
        style={mergeStyle(style, {
          height: size,
          width: size,
        })}
      />
      {children && <Details align={align}>{children}</Details>}
    </a>
  );
}
