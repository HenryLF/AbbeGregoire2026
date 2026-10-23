import "@styles/cours.css";
import { Document, type DocumentProps } from "zefpdf-lab/ui/Document";

export function Cours({ children, ...props }: DocumentProps) {
  return (
    <Document {...props}>
      {children}
    </Document>
  );
}
