import { LaTeX as Eq } from "@weasyprint-tsx/ui";

export const X = () => <Eq tex="x" />;

interface SymbolProps {
  children?: string;
}

export function UnderScriptFactory(txt: string, init?: string) {
  return function ({ children = init }: SymbolProps) {
    return <Eq tex={children ? `${txt}_{${children}}` : txt} />;
  };
}

export const Fx = ({ children = "x" }: SymbolProps) => (
  <Eq tex={`f(${children})`} />
);
export const F = () => <Eq tex="f" />;

export const A = UnderScriptFactory("a");
export const B = UnderScriptFactory("b");
export const N = UnderScriptFactory("N");
export const T = UnderScriptFactory("T");
export const K = UnderScriptFactory("K");

export const Th = UnderScriptFactory("\\large \\theta");
