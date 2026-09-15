import { Document, ImportantEquation, Problem } from "@/components";
import {
  DotLine,
  H1,
  H2,
  H3,
  LaTeX,
  LI,
  PageBreak,
  UL,
} from "@weasyprint-tsx/ui";
import "./index.css";

export default function NombresEtEnsemblesDocument() {
  return (
    <Document title="Nombres et Calculs">
      <H1>Puissances ou Exposant</H1>
      <div className="text">
        En mathématiques, on note la multiplication d'un nombre par lui-même un
        certain nombre de fois, <ImportantEquation tex="a^n" inline /> où{" "}
        <LaTeX tex="a" /> peut être n'importe quel nombre réel, et{" "}
        <LaTeX tex="n" /> est un nombre entier appelé <strong>exposant</strong>{" "}
        ou <strong>puissance</strong>.
      </div>
      <div className="text">
        Ainsi <LaTeX tex="5^{4}" /> se dit : <DotLine width={"12cm"} />
        et représente : <DotLine />
      </div>
      <div className="text">
        L'exposant peut aussi être négatif,
        <ImportantEquation tex="a^{\color{red}{-}n}" inline /> représente le
        nombre obtenu en divisant par <LaTeX tex="a" /> <LaTeX tex="n" /> fois.
      </div>

      <div className="text">
        Ainsi <LaTeX tex="5^{-4}" /> se dit : <DotLine width={"12cm"} />
        et représente : <DotLine />
      </div>
      <H2>Opérations sur les puissances</H2>
      <H3>Multiplication</H3>
      <Problem>
        Quelle est la valeur de <LaTeX tex="5^3 \times 5^2" />
        <DotLine count={3} />
      </Problem>
      <p>On en déduit que:</p>
      <div className="important-equation mx-auto ">
        <div className="text">
          Soit <LaTeX tex="a" /> un nombre réel, <LaTeX tex="n" /> et{" "}
          <LaTeX tex="m" /> deux nombres entiers relatifs, alors :
        </div>
        <LaTeX className="block!" tex="\large a^{n} \times a^{m} = a^{n+m}" />
      </div>

      <H3>Division</H3>
      <Problem>
        Quelle est la valeur de <LaTeX tex="\large \frac{5^6}{5^4}" />
        <DotLine count={3} />
      </Problem>
      <p>On en déduit que:</p>
      <div className="important-equation mx-auto ">
        <div className="text">
          Soit <LaTeX tex="a" /> un nombre réel, <LaTeX tex="n" /> et{" "}
          <LaTeX tex="m" /> deux nombres entiers relatifs, alors :
        </div>
        <LaTeX
          className="block!"
          tex="\huge \frac{a^{n}}{a^{m}} = \Large   a^{n-m}"
        />
      </div>
      <PageBreak />
      <H3>Puissance de fractions</H3>
      <Problem>
        Quelle est la valeur de{" "}
        <LaTeX tex="\large \left(\frac{2}{3}\right)^2" />
        <DotLine count={3} />
      </Problem>
      <p>On en déduit que:</p>
      <div className="important-equation mx-auto ">
        <div className="text">
          Soient <LaTeX tex="a" /> et <LaTeX tex="b" /> deux nombres réels,{" "}
          <LaTeX tex="n" /> un entier relatif, alors :
        </div>
        <LaTeX
          className="block!"
          tex="\huge \left( \frac{a}{b} \right) ^n = \frac{a^n}{b^n}"
        />
      </div>

      <H3>Puissance de puissance</H3>
      <Problem>
        Quelle est la valeur de <LaTeX tex="(5^3)^2" />
        <DotLine count={3} />
      </Problem>
      <p>On en déduit que:</p>
      <div className="important-equation mx-auto ">
        <div className="text">
          Soit <LaTeX tex="a" /> un nombre réel, <LaTeX tex="n" /> et{" "}
          <LaTeX tex="m" /> deux nombres entiers relatifs, alors :
        </div>
        <LaTeX className="block!" tex="\large (a^{n})^{m} = a^{n\times m}" />
      </div>

      <div className={"important-equation"}>
        Autrement dit :
        <UL>
          <LI>
            lorsque je multiplie le même nombre à deux puissances différentes,{" "}
            <DotLine width={"6cm"} />
            <DotLine />
          </LI>

          <LI>
            <DotLine width={"17cm"} />
            <DotLine />
          </LI>

          <LI>
            <DotLine width={"17cm"} />
            <DotLine />
          </LI>

          <LI>
            <DotLine width={"17cm"} />
            <DotLine />
          </LI>
        </UL>
      </div>
    </Document>
  );
}
