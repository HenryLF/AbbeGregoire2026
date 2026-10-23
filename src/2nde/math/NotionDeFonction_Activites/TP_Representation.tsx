import exCalc1 from "@assets/functions/ex-calc1.png";
import exCalc2 from "@assets/functions/ex-calc2.png";
import exCalc2_1 from "@assets/functions/ex-calc2-1.png";
import exCalc2_2 from "@assets/functions/ex-calc2-2.png";
import exCalc2_3 from "@assets/functions/ex-calc2-3.png";
import exCalc2_4 from "@assets/functions/ex-calc2-4.png";
import exCalc3 from "@assets/functions/ex-calc3.png";
import exCalc4 from "@assets/functions/ex-calc4.png";
import { Circle } from "@components/atoms/Decorator";
import { Img } from "@components/atoms/Img";
import { Call, SubQuestion, TP } from "@components/section/Exercice";
import { DotLine } from "zefpdf-lab/ui/Inputs";
import { LaTeX } from "zefpdf-lab/ui/LaTeX";
import { Flex } from "zefpdf-lab/ui/Layout";
import { LI } from "zefpdf-lab/ui/List";
import { Table, TEntry } from "zefpdf-lab/ui/Table";

const F_ = ({ n }: { n: number }) => <LaTeX tex={`f_${n}`} />;

function ValueTable({ xs, f }: { xs: number[]; f: string }) {
  return (
    <Table className="w-8/10 mx-auto">
      <TEntry header={<LaTeX tex="x" />} content={xs} />
      <TEntry header={<LaTeX tex={f} />} content={xs.map(() => "")} />
    </Table>
  );
}

function Curves({ imgs, start }: { imgs: string[]; start: number }) {
  return (
    <Flex gap="2mm">
      {imgs.map((img, k) => (
        <div className="relative flex-1">
          <Img src={img} />
          <Circle className="absolute bottom-2 right-2">{k + start}</Circle>
        </div>
      ))}
    </Flex>
  );
}

export default function TP_Representation() {
  return (
    <TP title="Comment utiliser la calculatrice pour représenter des fonctions">
      <LI>
        Soit la fonction <F_ n={1} /> définie sur <LaTeX tex="[-4 ; 4]" /> par{" "}
        <LaTeX tex="f_1(x) = {\large \frac{x}{2}} + 3" />.
      </LI>
      <SubQuestion count={1}>
        <LI>Saisir la définition de la fonction dans la calculatrice.</LI>
        <LI>
          Paramétrer la calculatrice pour qu’elle donne les valeurs prises par
          la fonction f entre -4 et 4 avec un pas de 1.
        </LI>
        <LI>
          Afficher les résultats et compléter le tableau de valeurs suivant:
        </LI>
        <ValueTable xs={Array.from({ length: 9 }, (_, k) => k - 4)} f="f_1(x)" />
        <Call>Faire vérifier les résultats</Call>
      </SubQuestion>
      {[
        { tex: "{\\large \\frac{x^2 + 6}{4}}", min: -9, step: 3 },
        { tex: "{\\large \\frac{10000 }{x + 50}} - x", min: 0, step: 50 },
        { tex: "(16 - x)^2 + 2x", min: 6, step: 2 },
      ].map(({ tex, min, step }, k) => (
        <>
          <LI>
            Soit la fonction <LaTeX tex={`f_${k + 2}`} /> définie sur{" "}
            <LaTeX tex={`[${min};${min + step * 7}]`} /> par
            <LaTeX tex={`f_${k + 2} = ${tex}`} />. Compléter le tableau de
            valeurs suivant :
          </LI>
          <ValueTable
            xs={Array.from({ length: 7 }, (_, n) => min + n * step)}
            f={`f_${k + 2}(x)`}
          />
          <Call>Faire vérifier les résultats</Call>
        </>
      ))}

      <LI>
        Soit la fonction <F_ n={5} /> définie sur <LaTeX tex="[-4 ; 4]" />, par{" "}
        <LaTeX tex="f_5(x) = 5x - 4" />
      </LI>
      <SubQuestion count={5}>
        <LI>
          Saisir à la calculatrice la définition de la fonction, et paramétrer
          la fenêtre graphique avec les réglages : Xmin = -4 ; Xmax = 4 ; Ymin
          = -25 ; Ymax = 20.
        </LI>
        <Call>
          Faire vérifier la représentation graphique sur la calculatrice
        </Call>
        <LI>Quelle est l’allure générale de la courbe ?</LI>
        <DotLine />
      </SubQuestion>

      <LI>
        Soit la fonction <F_ n={6} /> définie sur <LaTeX tex="[-2 ; 7]" />, par{" "}
        <LaTeX tex="f_6(x) = (x - 2)^3 - 4x." />
      </LI>
      <SubQuestion count={6}>
        <LI>
          Utiliser la calculatrice pour tracer la représentation graphique de
          la fonction f6. On donne les réglages de la fenêtre d’affichage :
          Xmin = -2 ; Xmax = 7 ; Ymin = -30 ; Ymax = 20.
        </LI>
        <Call>
          Faire vérifier la représentation graphique sur la calculatrice
        </Call>
        <LI>
          Parmi les courbes ci-dessous quelle est celle obtenue à la
          calculatrice ? <DotLine width="3cm" />
        </LI>
        <Curves imgs={[exCalc1, exCalc2, exCalc3, exCalc4]} start={1} />
      </SubQuestion>

      <LI>
        Soit la fonction <F_ n={7} /> définie sur <LaTeX tex="[-2 ; 7]" />, par{" "}
        <LaTeX tex="f_7(x) =  200 \sqrt{ x + 5}" />
      </LI>
      <SubQuestion count={7}>
        <LI>
          Utiliser le mode tableur de la calculatrice pour remplir le tableau
          de valeurs suivant (arrondir à l’unité) :
        </LI>
        <ValueTable xs={[-5, -4, -2, 0, 4, 6, 10]} f="f_7(x)" />
        <LI>
          Utiliser la calculatrice pour tracer la représentation graphique de
          cette fonction. On donne les réglages de la fenêtre d’affichage :
          Xmin = -5 ; Xmax = 10 ; Ymin = 0 ; Ymax = 800
        </LI>
        <Call>
          Faire vérifier la représentation graphique sur la calculatrice
        </Call>
        <LI>
          Parmi les courbes ci-dessous quelle est celle obtenue à la
          calculatrice ? <DotLine width="3cm" />
        </LI>
        <Curves
          imgs={[exCalc2_1, exCalc2_2, exCalc2_3, exCalc2_4]}
          start={5}
        />
      </SubQuestion>
    </TP>
  );
}
