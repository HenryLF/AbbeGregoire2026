import { DotLine, OL, Stack, StackChild } from "@weasyprint-tsx/ui";
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
        {Array.from({ length: count * 2 - 1 }, (_, k) =>
          !(k % 2) ? (
            <>
              <header className={s.header}>
                <div className={s.title}>{title}</div>
                <div className={s.name}>
                  Nom : <DotLine width={"50%"} />
                </div>
              </header>
              <div className={s.container}>
                <OL className={s.ol}>{children}</OL>
              </div>
            </>
          ) : (
            <StackChild className="w-8/10 h-0 border-dashed border-0 border-b" />
          ),
        )}
      </Stack>
    </Document>
  );
}
