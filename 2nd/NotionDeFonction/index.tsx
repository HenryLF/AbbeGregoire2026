import {
  decrEx,
  functionEx,
  graphEx,
  incrEx,
  minmaxEx,
  pptEx,
  varEx,
} from "@assets";
import { Document, Img, ImportantEquation, Problem } from "@components";
import {
  Block,
  BlockBox,
  Chart,
  DotLine,
  Entry,
  H1,
  H2,
  LaTeX,
  LI,
  Table,
  UL,
} from "@weasyprint-tsx/ui";
import { PropsWithChildren } from "preact/compat";
import "./index.css";

const X = () => <LaTeX tex="x" />;

const F = ({ children = "x" }: PropsWithChildren) => (
  <LaTeX tex={`f(${children?.toString()})`} />
);
const F_ = () => <LaTeX tex="f" />;

export default function NotionDeFonctionDocument() {
  return (
    <Document title="Notion de Fonction">
      <H1>Définition</H1>
      <BlockBox align="middle">
        <Block className="text" ratio={1.5}>
          Une <strong>fonction</strong> est un <em>"programme de calcul"</em>{" "}
          faisant correspondre à un nombre <X /> d’un intervalle défini un
          autre nombre noté <F />.
          <UL>
            <LI>
              La lettre <X /> est la <strong>variable</strong>.
            </LI>
            <LI>
              Le nombre <X /> est appelé <strong>antécédent</strong> de <F />.
            </LI>
            <LI>
              {" "}
              Le nombre <F /> est appelé <strong>image</strong> de <X />.
            </LI>
          </UL>
        </Block>

        <Img src={functionEx} />
      </BlockBox>
      <H1>Représentation d'une fonction</H1>
      <H2>Représentation dans un tableau</H2>
      <p>
        Les valeurs prises par une fonction peuvent se représenter dans un
        tableau :
      </p>
      <Table
        orientation="row"
        className="w-full"
        contentClass="px-2 min-w-1/8"
      >
        <Entry
          content={[1, 2, 5, 10, 15, 20]}
          cellBg="var(--wsx--table--header-color)"
        >
          <X />
        </Entry>
        <Entry content={Array(6).fill(<DotLine />)}>
          <LaTeX tex="f(x) = x + 5" />
        </Entry>
      </Table>
      <Problem>
        <span className="italic">
          Compléter le tableau pour la fonction <LaTeX tex="f(x) = x + 5" />
        </span>
      </Problem>

      <H2>Représentation graphique</H2>
      <BlockBox>
        <Block ratio={2}>
          <div className="text">
            Dans un repère, la représentation graphique d’une fonction <F_ />{" "}
            est l’ensemble des points de coordonnées{" "}
            <LaTeX tex="(x ; f(x))" />.
          </div>
          <div className="text">
            L’équation de la courbe représentative de la fonction <F_ /> est :
          </div>

          <ImportantEquation tex="y = f(x)" />
          <div className="text">
            Autrement dit : <DotLine width={"9cm"} />
          </div>
        </Block>
        <Img src={graphEx} />
      </BlockBox>
      <DotLine count={2} />
      <H1>Exploitation d'une représentation graphique</H1>
      <H2>Extremums d'une fonction</H2>

      <BlockBox>
        <Block ratio={2}>
          <div className="text">
            Soit <F_ /> une fonction définie sur un intervalle{" "}
            <LaTeX>[a ; b]</LaTeX>.
          </div>
          <UL>
            {[
              { def: "maximum", symbol: "M" },
              { def: "minimum", symbol: "m" },
            ].map(({ def, symbol }) => (
              <LI>
                La fonction <F_ /> admet un <strong>{def}</strong>{" "}
                <LaTeX tex={symbol} /> sur <LaTeX>[a ; b]</LaTeX> si{" "}
                <LaTeX tex={symbol} /> est la plus <DotLine width={"4cm"} />{" "}
                valeur de <F />
              </LI>
            ))}
          </UL>
        </Block>
        <Img src={minmaxEx} />
      </BlockBox>
      <H2>Variation d'une fonction</H2>
      <div className="text">
        Soit <F_ /> une fonction définie sur un intervalle{" "}
        <LaTeX>[a ; b]</LaTeX>.
      </div>
      <BlockBox gap={"2mm"}>
        {[
          { def: "croissante", img: incrEx },
          { def: "décroissante", img: decrEx },
        ].map(({ img, def }, k) => (
          <Block
            className={k === 0 ? "border-r border-solid border-0 pr-1" : ""}
          >
            <div className="text">
              La fonction <F_ /> est dite <strong>{def}</strong> si les
              valeurs de <F /> <DotLine width={"4cm"} /> quand celles de <X />{" "}
              augmentent.
            </div>
            <Img src={img} className="mx-auto w-3/7" />
            <p>On a alors :</p>
            <div className="text-center mx-auto">
              <LaTeX tex="x_1 \le x_2 \Harr f(x_1) \: {\color{grey} .....} \: f(x_2)" />
            </div>
          </Block>
        ))}
      </BlockBox>

      <H2>Tableau de variation</H2>
      <div className="text">
        Le tableau de variation résume les éléments connus concernant la
        fonction <F_ />.
      </div>
      <BlockBox>
        <Block ratio={0.5}>
          <Img src={varEx}></Img>
        </Block>
        <Table orientation="row" className="w-full">
          <Entry
            content={[-4, -1, 0, 2, 3, 6]}
            cellBg="var(--wsx--table--header-color)"
          >
            <X />
          </Entry>
          <Entry content={[-1]} className="h-30" contentClass="align-bottom!">
            <F />
          </Entry>
        </Table>
      </BlockBox>
      <Problem>
        <span className="italic">
          Compléter le tableau de variation de <F_ />, que remarque-t-on ?
        </span>
        <DotLine />
      </Problem>

      <H1>Traduction d'une situation de proportionnalité</H1>
      <BlockBox>
        <Block ratio={4}>
          <div className="text">
            Deux grandeurs sont <strong> proportionnelles</strong> si l’une
            peut être obtenue en multipliant l’autre par un nombre constant,
            le <strong>coefficient de proportionnalité</strong>.{" "}
          </div>
          <div className="text">
            Les <strong>fonctions linéaires</strong> traduisent une situation
            de proportionnalité. Leur expression est de la forme :
            <ImportantEquation
              inline
              tex="f(x) = {\color{grey} ...............}\:\:"
            />
            où <LaTeX>a</LaTeX> est le coefficient de proportionnalité.
          </div>
        </Block>
        <Img src={pptEx} />
      </BlockBox>
      <div className="text">
        La représentation graphique d'une fonction linéaire est une{" "}
        <DotLine width={"5cm"} />
        <DotLine count={2} />
      </div>

      <Problem>
        <span className="italic">
          Chez le marchand de légumes, 3 citrouilles coûtent 9 €, tracer la
          droite représentative du prix en fonction du nombre de citrouilles,
          et déterminer graphiquement le prix de 1 et 4 citrouilles.
        </span>
        <BlockBox>
          <Block ratio={2}>
            <DotLine count={5} />
          </Block>
          <Chart
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
        </BlockBox>
      </Problem>
    </Document>
  );
}
