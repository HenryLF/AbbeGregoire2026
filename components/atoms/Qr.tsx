import { QrCode, type QrCodeProps } from "zefpdf-lab/ui";
import { Details } from "./Texts";

export function Qr({
  href,
  size,
  children,
  align = "center",
  ...props
}: QrCodeProps & {
  align?: "center" | "justify" | "left" | "right";
}) {
  return (
    <div {...props}>
      <QrCode href={href} size={size} />
      {children && <Details align={align}>{children}</Details>}
    </div>
  );
}
