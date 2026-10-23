import "@styles/activites.css";
import { Document, type DocumentProps } from "zefpdf-lab/ui/Document";

export function Activites({ title, children, ...props }: DocumentProps) {
  return (
    <Document title={`${title} - Activités`} {...props}>
      {children}
    </Document>
  );
}
