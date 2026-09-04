import { QrCode, QrCodeProps } from "@weasyprint-tsx/ui";
import { ComponentProps } from "preact";
import { PropsWithChildren } from "preact/compat";
import { Details, type DetailsProps } from "./TextBlock";

export function Img({
  children,
  align = "left",
  ...props
}: ComponentProps<"img"> & DetailsProps & PropsWithChildren) {
  return (
    <>
      <img {...props} />
      {children && <Details align={align}>{children}</Details>}
    </>
  );
}

export function QR({
  children,
  align = "left",
  bgColor = "#e0e0e0",
  ...props
}: QrCodeProps & DetailsProps & PropsWithChildren) {
  return (
    <>
      <QrCode bgColor={bgColor} {...props} />
      {children && <Details align={align}>{children}</Details>}
    </>
  );
}
