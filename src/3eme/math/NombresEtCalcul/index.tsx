import exA2_2abB2 from "@assets/algebra/ex-a2-2ab-b2.svg";
import { Img } from "@components/atoms/Img";
import { Important, Note, P, S } from "@components/atoms/Texts";
import { Cours } from "@components/doctype/Cours";
import { Problem } from "@components/section/Exercice";
import { DotLine } from "zefpdf-lab/ui/Inputs";
import { LaTeX } from "zefpdf-lab/ui/LaTeX";
import { Flex } from "zefpdf-lab/ui/Layout";
import { LI, OL, toLowerAlpha, UL } from "zefpdf-lab/ui/List";
import { Page, PageBreak } from "zefpdf-lab/ui/Pages";
import { H1, H2, H3 } from "zefpdf-lab/ui/Titles";
import "./index.css";

const a = <LaTeX tex="a" />;
const n = <LaTeX tex="n" />;
const m = <LaTeX tex="m" />;

const SoitANM = () => (
  <P>
    Soit {a} un nombre réel, {n} et {m} deux nombres entiers relatifs, alors :
  </P>
);

const alphaMarker = (k: number) => toLowerAlpha(k) + ".)";

export default function NombresEtCalcul() {
  return (
    <Cours title="Nombres et Calculs" lang="fr">
      <H1>Puissances ou Exposant</H1>
      <P>
        En mathématiques, on note la multiplication d'un nombre par lui-même un
        certain nombre de fois,{" "}
        <Important>
          <LaTeX tex="a^n" />
        </Important>{" "}
        où {a} peut être n'importe quel nombre réel, et {n} est un nombre
        entier appelé <S>exposant</S> ou <S>puissance</S>.
      </P>
      <P>
        Ainsi <LaTeX tex="5^{4}" /> se dit :{" "}
        <DotLine width="12cm" />
        et représente : <DotLine />
      </P>
      <P>
        L'exposant peut aussi être négatif,
        <Important>
          <LaTeX tex="a^{\color{red}{-}n}" />
        </Important>{" "}
        représente le nombre obtenu en divisant par {a} {n} fois.
      </P>
      <P>
        Ainsi <LaTeX tex="5^{-4}" /> se dit :{" "}
        <DotLine width="12cm" />
        et représente : <DotLine />
      </P>

      <H2>Opérations sur les puissances</H2>
      <H3>Multiplication</H3>
      <Problem>
        Quelle est la valeur de <LaTeX tex="5^3 \times 5^2" />
        <DotLine count={3} />
      </Problem>
      <P>On en déduit que:</P>
      <Important className="mx-auto">
        <SoitANM />
        <LaTeX tex="\large a^{n} \times a^{m} = a^{n+m}" />
      </Important>

      <H3>Division</H3>
      <Problem>
        Quelle est la valeur de <LaTeX tex="\large \frac{5^6}{5^4}" />
        <DotLine count={3} />
      </Problem>
      <P>On en déduit que:</P>
      <Important className="mx-auto">
        <SoitANM />
        <LaTeX tex="\huge \frac{a^{n}}{a^{m}} = \Large a^{n-m}" />
      </Important>

      <PageBreak />
      <H3>Puissance de fractions</H3>
      <Problem>
        Quelle est la valeur de{" "}
        <LaTeX tex="\large \left(\frac{2}{3}\right)^2" />
        <DotLine count={3} />
      </Problem>
      <P>On en déduit que:</P>
      <Important className="mx-auto">
        <P>
          Soient {a} et <LaTeX tex="b" /> deux nombres réels, {n} un entier
          relatif, alors :
        </P>
        <LaTeX tex="\huge \left( \frac{a}{b} \right) ^n = \frac{a^n}{b^n}" />
      </Important>

      <H3>Puissance de puissance</H3>
      <Problem>
        Quelle est la valeur de <LaTeX tex="(5^3)^2" />
        <DotLine count={3} />
      </Problem>
      <P>On en déduit que:</P>
      <Important className="mx-auto">
        <SoitANM />
        <LaTeX tex="\large (a^{n})^{m} = a^{n\times m}" />
      </Important>

      <Important>
        Autrement dit :
        <UL>
          <LI>
            lorsque je multiplie le même nombre à deux puissances différentes,{" "}
            <DotLine width="6cm" />
            <DotLine />
          </LI>
          {Array.from({ length: 3 }, () => (
            <LI>
              <DotLine width="17cm" />
              <DotLine />
            </LI>
          ))}
        </UL>
      </Important>

      <PageBreak />
      <H1>Développement</H1>
      <H2>Distributivité</H2>
      <Important className="w-8/10 mx-auto">
        <P align="center">
          Lorsque je multiplie une addition entre parenthèses, je peux
          distribuer la multiplication sur les termes de mon addition.
        </P>
        <LaTeX tex="k\times(a+b) = k \times a + k \times b" displayMode />
      </Important>
      <Problem>
        <OL marker={alphaMarker}>
          <Flex>
            {["3(x+7) =", "-5x(2x-3) ="].map((tex) => (
              <LI className="flex-1">
                <LaTeX tex={tex} /> <DotLine width="4cm" />
                <DotLine count={3} />
              </LI>
            ))}
          </Flex>
        </OL>
      </Problem>

      <H2>Double distributivité</H2>
      <Important className="w-8/10 mx-auto">
        <P align="center">
          Lorsque je multiplie deux additions entre parenthèses, on a :
        </P>
        <LaTeX tex="(a+b)\times(c+d) = ac + ad + bc + bd" displayMode />
      </Important>
      <Problem>
        <OL marker={alphaMarker}>
          <LI>
            <LaTeX tex="(4x-3)(2x+5) =" />{" "}
            <DotLine width="13cm" />
            <DotLine count={3} />
          </LI>
        </OL>
      </Problem>

      <PageBreak />
      <H1>Identités remarquables</H1>
      <H2>
        Carré d'une somme <LaTeX tex="(a + b)^2" />
      </H2>
      <Note title="Rappel :">
        La surface d'un rectangle de côtés <LaTeX tex="l" /> et{" "}
        <LaTeX tex="h" /> est <LaTeX tex="S = l \times h" />
      </Note>
      <Problem>
        {a} et <LaTeX tex="b" /> sont des nombres positifs. On cherche à
        calculer l'aire du carré de côté <LaTeX tex="a + b" />.
        <Flex gap="5mm">
          <UL className="flex-[2]">
            <LI>
              Visuellement <DotLine width="8.5cm" />
              <DotLine count={4} />
            </LI>
            <LI>
              En utilisant la formule{" "}
              <DotLine width="7cm" />
              <DotLine count={4} />
            </LI>
          </UL>
          <Img src={exA2_2abB2} className="flex-1" />
        </Flex>
      </Problem>
      <P>On en déduit que :</P>
      <Important>
        <LaTeX tex="(a+b)^2 = {\color{grey} \dots \dots \dots \dots \dots \dots}" />
      </Important>

      <H2>
        Carré d'une différence <LaTeX tex="(a - b)^2" />
      </H2>
      <DotLine count={4} />
      <P>Ainsi :</P>
      <Important>
        <LaTeX tex="(a-b)^2 = {\color{grey} \dots \dots \dots \dots \dots \dots}" />
      </Important>

      <H2>
        Différence de carrés <LaTeX tex="a^2 - b^2" />
      </H2>
      <LaTeX tex="(a-b)\times (a+b)" />
      <DotLine count={4} />
      <Important>
        <LaTeX tex="a^2 - b^2 = {\color{grey} \dots \dots \dots \dots \dots \dots}" />
      </Important>

      <Page page="blank">
        <Flex dir="column" align="center" gap="1cm">
          {Array.from({ length: 4 }, () => (
            <Flex gap="1cm">
              {Array.from({ length: 3 }, () => (
                <Img src={exA2_2abB2} className="w-[5cm]" />
              ))}
            </Flex>
          ))}
        </Flex>
      </Page>
    </Cours>
  );
}
