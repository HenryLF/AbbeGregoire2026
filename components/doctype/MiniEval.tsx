import "@styles/minieval.css";
import { DotLine } from "zefpdf-lab/ui";
import { Document, type DocumentProps } from "zefpdf-lab/ui/Document";

interface MiniEvalProps extends DocumentProps {
  count?: number;
}

export function MiniEval({ count = 3, children, ...props }: MiniEvalProps) {
  return (
    <Document {...props}>
      <div className="minieval--container">
        {Array.from({ length: count }, (_, k) => (
          <>
            {k > 0 && <DotLine lineHeight={0} lineStyle="dashed" />}
            <div className="minieval--items">{children}</div>
          </>
        ))}
      </div>
    </Document>
  );
}
