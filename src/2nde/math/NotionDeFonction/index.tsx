import decrEx from "@assets/functions/decr-ex.png";
import functionEx from "@assets/functions/function-ex.svg";
import graphEx from "@assets/functions/graph-ex.svg";
import incrEx from "@assets/functions/incr-ex.svg";
import minmaxEx from "@assets/functions/minmax-ex.svg";
import pptEx from "@assets/functions/ppt-ex.svg";
import varEx from "@assets/functions/var-ex.svg";
import { Img } from "@components/atoms/Img";
import { Important, P, S } from "@components/atoms/Texts";
import { Cours } from "@components/doctype/Cours";
import { Problem } from "@components/section/Exercice";
import { Chart } from "zefpdf-lab/ui/Chart";
import { DotLine } from "zefpdf-lab/ui/Inputs";
import { LaTeX } from "zefpdf-lab/ui/LaTeX";
import { Flex } from "zefpdf-lab/ui/Layout";
import { LI, UL } from "zefpdf-lab/ui/List";
import { Table, TD, TEntry } from "zefpdf-lab/ui/Table";
import { H1, H2 } from "zefpdf-lab/ui/Titles";
import "./index.css";

const X = () => <LaTeX tex="x" />;
const F = ({ x = "x" }: { x?: string }) => <LaTeX tex={`f(${x})`} />;
const F_ = () => <LaTeX tex="f" />;

export default function NotionDeFonctionDocument() {
  return (
    <Cours title="Notion de Fonction" lang="fr">
      <H1>Définition</H1>
      <Flex gap="3mm" align="center">
        <div className="flex-[1.5]">
          <P>
            Une <S>fonction</S> est un <em>"programme de calcul"</em> faisant
            correspondre à un nombre <X /> d’un intervalle défini un autre
            nombre noté <F />.
          </P>
          <UL>
            <LI>
              La lettre <X /> est la <S>variable</S>.
            </LI>
            <LI>
              Le nombre <X /> est appelé <S>antécédent</S> de <F />.
            </LI>
            <LI>
              Le nombre <F /> est appelé <S>image</S> de <X />.
            </LI>
          </UL>
        </div>
        <Img src={functionEx} className="flex-1" />
      </Flex>

      <H1>Représentation d'une fonction</H1>
      <H2>Représentation dans un tableau</H2>
      <P>
        Les valeurs prises par une fonction peuvent se représenter dans un
        tableau :
      </P>
      <Table className="w-full">
        <TEntry header={<X />} content={[1, 2, 5, 10, 15, 20]} />
        <TEntry
          header={<LaTeX tex="f(x) = x + 5" />}
          content={Array.from({ length: 6 }, () => (
            <DotLine />
          ))}
        />
      </Table>
      <Problem>
        <em>
          Compléter le tableau pour la fonction <LaTeX tex="f(x) = x + 5" />
        </em>
      </Problem>

      <H2>Représentation graphique</H2>
      <Flex gap="3mm">
        <div className="flex-[2]">
          <P>
            Dans un repère, la représentation graphique d’une fonction <F_ />{" "}
            est l’ensemble des points de coordonnées{" "}
            <LaTeX tex="(x ; f(x))" noFormatNumber />.
          </P>
          <P>
            L’équation de la courbe représentative de la fonction <F_ /> est :
          </P>
          <Important>
            <LaTeX tex="y = f(x)" />
          </Important>
          <P>
            Autrement dit : <DotLine width="9cm" />
          </P>
        </div>
        <Img src={graphEx} className="flex-1" />
      </Flex>
      <DotLine count={2} />

      <H1>Exploitation d'une représentation graphique</H1>
      <H2>Extremums d'une fonction</H2>
      <Flex gap="3mm">
        <div className="flex-[2]">
          <P>
            Soit <F_ /> une fonction définie sur un intervalle{" "}
            <LaTeX tex="[a ; b]" />.
          </P>
          <UL>
            {[
              { def: "maximum", symbol: "M" },
              { def: "minimum", symbol: "m" },
            ].map(({ def, symbol }) => (
              <LI>
                La fonction <F_ /> admet un <S>{def}</S>{" "}
                <LaTeX tex={symbol} /> sur <LaTeX tex="[a ; b]" /> si{" "}
                <LaTeX tex={symbol} /> est la plus{" "}
                <DotLine width="4cm" /> valeur de <F />
              </LI>
            ))}
          </UL>
        </div>
        <Img src={minmaxEx} className="flex-1" />
      </Flex>

      <H2>Variation d'une fonction</H2>
      <P>
        Soit <F_ /> une fonction définie sur un intervalle{" "}
        <LaTeX tex="[a ; b]" />.
      </P>
      <Flex gap="2mm">
        {[
          { def: "croissante", img: incrEx },
          { def: "décroissante", img: decrEx },
        ].map(({ img, def }) => (
          <div className="flex-1">
            <P>
              La fonction <F_ /> est dite <S>{def}</S> si les valeurs de{" "}
              <F /> <DotLine width="4cm" /> quand celles de{" "}
              <X /> augmentent.
            </P>
            <Img src={img} className="mx-auto w-3/7" />
            <P>On a alors :</P>
            <Flex justify="center">
              <LaTeX tex="x_1 \le x_2 \Harr f(x_1) \: {\color{grey} .....} \: f(x_2)" />
            </Flex>
          </div>
        ))}
      </Flex>

      <H2>Tableau de variation</H2>
      <P>
        Le tableau de variation résume les éléments connus concernant la
        fonction <F_ />.
      </P>
      <Flex gap="3mm" align="center">
        <Img src={varEx} className="w-1/3" />
        <Table className="flex-1">
          <TEntry header={<X />} content={[-4, -1, 0, 2, 3, 6]} />
          <TEntry
            header={<F />}
            className="h-30"
            content={[
              <TD className="align-bottom">-1</TD>,
            ]}
          />
        </Table>
      </Flex>
      <Problem>
        <em>
          Compléter le tableau de variation de <F_ />, que remarque-t-on ?
        </em>
        <DotLine />
      </Problem>

      <H1>Traduction d'une situation de proportionnalité</H1>
      <Flex gap="3mm" align="center">
        <div className="flex-4">
          <P>
            Deux grandeurs sont <S>proportionnelles</S> si l’une peut être
            obtenue en multipliant l’autre par un nombre constant, le{" "}
            <S>coefficient de proportionnalité</S>.
          </P>
          <P>
            Les <S>fonctions linéaires</S> traduisent une situation de
            proportionnalité. Leur expression est de la forme :
            <Important>
              <LaTeX tex="f(x) = {\color{grey} ...............}\:\:" />
            </Important>
            où <LaTeX tex="a" /> est le coefficient de proportionnalité.
          </P>
        </div>
        <Img src={pptEx} className="flex-1" />
      </Flex>
      <P>
        La représentation graphique d'une fonction linéaire est une{" "}
        <DotLine width="5cm" />
        <DotLine count={2} />
      </P>

      <Problem>
        <em>
          Chez le marchand de légumes, 3 citrouilles coûtent 9 €, tracer la
          droite représentative du prix en fonction du nombre de citrouilles,
          et déterminer graphiquement le prix de 1 et 4 citrouilles.
        </em>
        <Flex gap="3mm">
          <div className="flex-2">
            <DotLine count={5} />
          </div>
          <div className="flex-1">
            <Chart
              className="w-full h-auto"
              config={{
                type: "line",
                data: {
                  labels: Array.from({ length: 6 }, (_, k) => k),
                  datasets: [
                    {
                      data: Array.from({ length: 6 }, (_, k) => k * 3),
                      showLine: false,
                      pointStyle: false,
                    },
                  ],
                },
                options: {
                  scales: {
                    y: {
                      min: 0,
                      ticks: { stepSize: 3 },
                      title: {
                        text: "Prix en euros",
                        font: { size: 22 },
                        display: true,
                      },
                    },
                    x: {
                      title: {
                        text: "Nombre de citrouilles",
                        font: { size: 22 },
                        display: true,
                      },
                    },
                  },
                  plugins: { legend: { display: false } },
                },
              }}
            />
          </div>
        </Flex>
      </Problem>
    </Cours>
  );
}
