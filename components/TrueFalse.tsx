import { ComponentProps } from "preact";
import { joinClasses } from "@weasyprint-tsx/ui";

export function TrueFalse({ className, ...props }: ComponentProps<"div">) {
  return (
    <div className={joinClasses("inline", className)} {...props}>
      ▢ Vrai ▢ Faux
    </div>
  );
}
