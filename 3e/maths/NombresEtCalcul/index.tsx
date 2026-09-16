import { ex_a2_2ab_b2 } from "@/assets";
import {
  Document,
  Img,
  ImportantEquation,
  Problem,
  Rappel,
} from "@/components";
import {
  Block,
  BlockBox,
  DotLine,
  H1,
  H2,
  H3,
  LaTeX,
  LI,
  Page,
  PageBreak,
  Stack,
  toAlphabetical,
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

      <div className={"important-equation "}>
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
      <PageBreak />
      <H1>Développement</H1>
      <H2>Distributivité</H2>
      <div className="important-equation w-8/10 mx-auto text-center!">
        Lorsque je multiplie une addition entre parenthèses, je peux distribuer
        la multiplication sur les termes de mon addition.
        <LaTeX
          tex="k\times(a+b) = k \times a + k \times b"
          className="block! m-5"
        />
      </div>
      <Problem>
        <BlockBox>
          {["3(x+7) =", "-5x(2x-3) ="].map((tex) => (
            <LI format={(k) => toAlphabetical(k, true) + ".)"}>
              <LaTeX tex={tex} /> <DotLine width={"4cm"} />
              <DotLine count={3} />
            </LI>
          ))}
        </BlockBox>
      </Problem>
      <H2>Double distributivité</H2>
      <div className="important-equation w-8/10 mx-auto text-center!">
        Lorsque je multiplie deux additions entre parenthèses, on a :
        <LaTeX
          tex="(a+b)\times(c+d) = a c + a  d + b  c + b  d"
          className="block! m-5"
        />
      </div>
      <Problem>
        <BlockBox>
          {["(4x-3)(2x+5) ="].map((tex) => (
            <LI format={(k) => toAlphabetical(k, true) + ".)"}>
              <LaTeX tex={tex} /> <DotLine width={"13cm"} />
              <DotLine count={3} />
            </LI>
          ))}
        </BlockBox>
      </Problem>
      <PageBreak />
      <H1>Identités remarquables</H1>
      <H2>
        Carré d'une somme <LaTeX tex="(a + b)^2" />
      </H2>
      <Rappel>
        La surface d'un rectangle de côtés <LaTeX tex="l" /> et{" "}
        <LaTeX tex="h" /> est <LaTeX tex="S = l \times h" />
      </Rappel>
      <Problem>
        <LaTeX tex="a" /> et <LaTeX tex="b" /> sont des nombres positifs. On
        cherche à calculer l'aire du carré de côté <LaTeX tex="a + b" />.
        <BlockBox>
          <UL>
            <LI className="not-italic!">
              Visuellement <DotLine width={"8.5cm"} />
              <DotLine count={4} />
            </LI>

            <LI className="not-italic!">
              En utilisant la formule <DotLine width={"7cm"} />
              <DotLine count={4} />
            </LI>
          </UL>
          <Block ratio={0.5}>
            <Img src={ex_a2_2ab_b2} />
          </Block>
        </BlockBox>
      </Problem>
      <p>On en déduit que :</p>
      <ImportantEquation tex="(a+b)^2 = {\color{grey} \dots \dots \dots \dots \dots \dots}" />
      <H2>
        Carré d'une différence <LaTeX tex="(a - b)^2" />
      </H2>
      <DotLine count={4} />

      <p>Ainsi :</p>
      <ImportantEquation tex="(a-b)^2 = {\color{grey} \dots \dots \dots \dots \dots \dots}" />
      <H2>
        Différence de carrés <LaTeX tex="a^2 - b^2" />
      </H2>
      <LaTeX tex="(a-b)\times (a+b)" />
      <DotLine count={4} />
      <ImportantEquation tex="a^2 - b^2 = {\color{grey} \dots \dots \dots \dots \dots \dots}" />

      <Page page="blank">
        <Stack gap={"1cm"}>
          {Array.from({ length: 4 }, () => (
            <BlockBox gap={"1cm"}>
              {Array.from({ length: 3 }, () => (
                <Img src={ex_a2_2ab_b2} className="w-[5cm] inline" />
              ))}
            </BlockBox>
          ))}
        </Stack>
      </Page>
    </Document>
  );
}
