import "@styles/minieval.css";
import { Document, type DocumentProps } from "zefpdf-lab/ui/Document";

interface MiniEvalProps extends DocumentProps {
  count?: number;
}

export function MiniEval({ count = 3, children, ...props }: MiniEvalProps) {
  return <Document {...props} children={Array(count).fill(children)} />;
}
