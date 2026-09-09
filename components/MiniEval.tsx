import { OL, Stack } from "@weasyprint-tsx/ui";
import { PropsWithChildren } from "preact/compat";
import { Document } from "./Document";
import s from "./MiniEval.module.css";
interface MiniEvalProps extends PropsWithChildren {
  title?: string;
  count?: number;
  gap?: number | string;
}

export function MiniEval({ title, count = 4, children, gap }: MiniEvalProps) {
  return (
    <Document title={title}>
      <Stack gap={gap}>
        {Array.from({ length: count }, () => (
          <div className={s.container}>
            <div className={s.title}>{title}</div>
            <OL className={s.ol}>{children}</OL>
          </div>
        ))}
      </Stack>
    </Document>
  );
}
