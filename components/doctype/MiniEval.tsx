import  { S } from "@components/atoms/Texts";
import "@styles/minieval.css";
import { DotLine, Flex, OL } from "zefpdf-lab/ui";
import { Document, type DocumentProps } from "zefpdf-lab/ui/Document";

interface MiniEvalProps extends DocumentProps {
  count?: number;
}

export function MiniEval({ count = 3, title, children, ...props }: MiniEvalProps) {
  return (
    <Document {...props} title={title}>
      <div className="minieval--container">
        {Array.from({ length: count }, (_, k) => (
          <>
            {k > 0 && <DotLine lineHeight={0} lineStyle="dashed" />}
            <div className="minieval--items">
              <Flex justify="space-between">
                <S className="minieval--title">{title}</S>
                <div className="w-1/2">
                  Nom : <DotLine inline />
                </div>
              </Flex>
              <OL>{children}</OL>
            </div>
          </>
        ))}
      </div>
    </Document>
  );
}
