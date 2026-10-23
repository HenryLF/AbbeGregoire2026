import dispersion from "@assets/statistics/dispersion.svg";
import quartiles from "@assets/statistics/quartiles.svg";
import { Img } from "@components/atoms/Img";
import { Details, Important, Note, P, S } from "@components/atoms/Texts";
import { Cours } from "@components/doctype/Cours";
import { Problem } from "@components/section/Exercice";
import { Chart, ChartObj } from "zefpdf-lab/ui/Chart";
import { DotLine } from "zefpdf-lab/ui/Inputs";
import { LaTeX } from "zefpdf-lab/ui/LaTeX";
import { Flex } from "zefpdf-lab/ui/Layout";
import { LI, UL } from "zefpdf-lab/ui/List";
import { PageBreak } from "zefpdf-lab/ui/Pages";
import { Table, TEntry, THeader } from "zefpdf-lab/ui/Table";
import { H1, H2 } from "zefpdf-lab/ui/Titles";
import "./index.css";

// Chart.js defaults for this document.
ChartObj.defaults.font.size = 22;
ChartObj.defaults.scales.category.title = {
  ...ChartObj.defaults.scales.category.title,
  font: { size: 32 },
  display: true,
};
ChartObj.defaults.scales.linear.title = {
  ...ChartObj.defaults.scales.category.title,
  font: { size: 32 },
  display: true,
};
ChartObj.defaults.scales.linear.beginAtZero = true;
ChartObj.defaults.backgroundColor = [
  "#cc5803",
  "#07a0c3",
  "#f0c808",
  "#731dd8",
  "#dd1c1a",
];
ChartObj.defaults.elements.bar.borderColor = "#000";
ChartObj.defaults.elements.bar.borderWidth = 2;
ChartObj.defaults.elements.bar.borderRadius = 20;
ChartObj.defaults.elements.arc.borderColor = "#000";
ChartObj.defaults.elements.arc.borderWidth = 2;
ChartObj.defaults.elements.arc.offset = 20;
ChartObj.defaults.elements.line.borderColor = "#000";
ChartObj.defaults.elements.line.borderWidth = 2;
ChartObj.defaults.plugins.legend.display = false;

const dataSet = [1.62, 1.67, 1.71, 1.6, 1.78, 1.67, 1.74, 1.8, 1.69, 1.76];
const bins = [
  { label: "[1,60 ; 1,65[", low: 1.6, high: 1.65 },
  { label: "[1,65 ; 1,70[", low: 1.65, high: 1.7 },
  { label: "[1,70 ; 1,75[", low: 1.7, high: 1.75 },
  { label: "[1,75 ; 1,80[", low: 1.75, high: 1.8 },
  { label: "[1,80 ; 1,85[", low: 1.8, high: 1.85 },
];

const dataSetFreq = bins.map(
  (bin) => dataSet.filter((val) => val >= bin.low && val < bin.high).length,
);

const graphTypes: { t: "bar" | "pie" | "line"; lgd: string }[] = [
  { t: "bar", lgd: "Diagramme en bâton" },
  { t: "pie", lgd: "Diagramme circulaire" },
  { t: "line", lgd: "Diagramme à ligne brisée" },
];

const classLabel = (k: number) =>
  `[${(1.6 + k * 0.05).toFixed(2)};\\: ${(1.6 + (k + 1) * 0.05).toFixed(2)}[`;

export default function Stat1VarDocument() {
  return (
    <Cours title="Statistique à une variable" lang="fr">
      <P>
        La <S>statistique</S> est la science qui <em>recueille</em>,{" "}
        <em>traite</em> et <em>analyse</em> des données pour tirer des
        conclusions générales. Cette année nous étudions les{" "}
        <S>statistiques à une variable</S> c'est-à-dire les séries de données
        où un seul paramètre change.
      </P>
      <Note title="Exemple :">
        <UL>
          <LI>
            La liste des tailles des élèves d'une classe est une série
            statistique à une variable.
          </LI>
          <LI>
            La liste des tailles et du genre des élèves d'une classe est une
            série statistique à deux variables.
          </LI>
          <LI>
            La liste des poids, vitesses maximales et années de production de
            voitures est une série statistique à trois variables.
          </LI>
        </UL>
      </Note>

      <H1>Représentation des séries statistiques</H1>
      <H2>Organisation dans un tableau</H2>
      <Flex gap="5mm" align="start" className="mb-2">
        <div className="flex-1">
          <P>
            Une série statistique à une variable peut être organisée dans un{" "}
            <S>tableau de fréquence</S> qui pour chaque valeur prise par le
            paramètre étudié associe son <S>effectif</S>, le nombre de fois où
            cette valeur a été rencontrée.
          </P>
        </div>
        <div className="flex-1">
          <Table className="mx-auto">
            <THeader
              content={[
                <>
                  Paramètre <LaTeX tex="X" />
                </>,
                <>
                  Effectifs (<LaTeX tex="n_i" />)
                </>,
              ]}
            />
            {[1, 2, 3].map((k) => (
              <TEntry
                content={[<LaTeX tex={`X_${k}`} />, <LaTeX tex={`n_${k}`} />]}
              />
            ))}
            <TEntry
              content={[<S>Total</S>, <LaTeX tex="N = n_1 + n_2 +n_3" />]}
            />
          </Table>
        </div>
      </Flex>
      <Flex gap="5mm" align="start">
        <div className="flex-[1.3]">
          <Table>
            <THeader
              content={[
                "Taille des élèves (en m)",
                <>
                  Centre des classes (<LaTeX tex="x_i" />)
                </>,
                <>
                  Effectifs (<LaTeX tex="n_i" />)
                </>,
              ]}
            />
            {[0, 1, 2, 3, 4].map((k) => (
              <TEntry
                content={[
                  <LaTeX tex={classLabel(k)} />,
                  k === 0 ? <LaTeX tex="\frac{1-0}{2} = 0.5" /> : "",
                  k === 0 ? "2" : "",
                ]}
              />
            ))}
            <TEntry content={["", <S>Total :</S>, ""]} />
          </Table>
        </div>
        <div className="flex-1">
          <P>
            Lorsque le paramètre est <S>mesurable de façon continue</S>{" "}
            (c'est-à-dire <DotLine width="4cm" />{" "}
            <DotLine width="7cm" />
            ), on regroupe les données par <S>classes</S> : ce sont des
            intervalles notés entre crochets <LaTeX tex="[a ; b[" />,{" "}
            <LaTeX tex="a" /> étant <S>inclus</S> (
            <DotLine width="3.5cm" />) dans l’intervalle et{" "}
            <LaTeX tex="b" /> <S>exclu</S> (
            <DotLine width="3.5cm" />) de l’intervalle.
          </P>
        </div>
      </Flex>
      <Problem>
        <P>
          Voici la liste des tailles mesurées pour des élèves :{" "}
          {dataSet.map((k, i) => {
            if (i == dataSet.length - 2)
              return (
                <>
                  <LaTeX tex={`${k}m`} /> et{" "}
                </>
              );
            if (i == dataSet.length - 1)
              return (
                <>
                  <LaTeX tex={`${k}m`} />.
                </>
              );
            return (
              <>
                <LaTeX tex={`${k}m`} />,{" "}
              </>
            );
          })}{" "}
          Compléter le tableau ci-dessus.
        </P>
      </Problem>

      <H2>Représentation graphique</H2>
      <P>
        Une série statistique peut être représentée par différents types de
        graphique :
      </P>
      <Flex gap="3mm" className="mt-2">
        {graphTypes.map(({ t, lgd }) => (
          <div className="flex-1">
            <Chart
              className="w-full h-auto"
              config={{
                type: t,
                data: {
                  labels: bins.map((b) => b.label),
                  datasets: [
                    {
                      label: "Effectifs par groupe de taille",
                      data: dataSetFreq,
                    },
                  ],
                },
                options: {
                  plugins: {
                    legend: { display: t === "pie" },
                  },
                  scales: {
                    x: {
                      display: t !== "pie",
                      title: { text: "Groupes de taille" },
                    },
                    y: {
                      display: t !== "pie",
                      title: { text: "Effectif" },
                    },
                  },
                },
              }}
            />
            <Details align="left">
              <em>{lgd}</em>
            </Details>
            <DotLine count={3} />
          </div>
        ))}
      </Flex>

      <PageBreak />
      <H1>Indicateurs de position</H1>
      <P>
        On peut utiliser plusieurs mesures appelées <S>indicateurs</S> pour
        décrire une série statistique. Ils peuvent être calculés à la main mais
        en pratique on utilise souvent les fonctions statistiques d'un tableur
        ou de la calculatrice.
      </P>
      <H2>Mode</H2>
      <P>
        Le <S>mode</S> est{" "}
        <em>
          la valeur de la variable statistique qui a le plus grand effectif
        </em>{" "}
        (il peut y avoir plusieurs modes).
      </P>
      <Problem>
        <P>
          Dans la série des tailles d'élèves, le mode est{" "}
          <DotLine width="8cm" />.
        </P>
      </Problem>
      <H2>Classe modale</H2>
      <P>
        Dans le cas où la distribution statistique est faite à l’aide de
        classes, la <S>classe modale</S> est la classe qui contient le plus
        grand effectif.
      </P>
      <Problem>
        <P>
          Dans la série des tailles d'élèves, la classe modale est{" "}
          <DotLine width="8cm" />.
        </P>
      </Problem>
      <H2>Moyenne</H2>
      <P>
        La <S>moyenne</S> <LaTeX tex="\overline{x}" /> est la valeur théorique
        qui pourrait remplacer toutes les valeurs de la série sans changer la
        somme totale. On la calcule à l'aide des formules suivantes :
      </P>
      <Important>
        <LaTeX tex="\overline{x} = \frac{somme\: de\: toutes\: les\: valeurs}{nombre\: total\: de\: valeurs\: N} = \frac{X_1\times n_1 + X_2\times n_2  + ...}{N}" />
      </Important>
      <P>C'est-à-dire :</P>
      <UL>
        <LI>
          La somme de toutes les mesures divisée par le nombre de mesures.
        </LI>
        <LI>
          La somme des valeurs des mesures multipliée par leurs effectifs,
          divisée par le nombre total de mesures.
        </LI>
      </UL>
      <P>
        Dans le cas des séries où les caractères sont rangés par classes, on
        convient par approximation que toutes les valeurs appartenant à une même
        classe sont égales à la valeur du centre de classe <LaTeX tex="x_i" />.
      </P>
      <Problem>
        <LI>
          Calculer la taille moyenne des élèves en prenant en compte la série
          totale :
        </LI>
        <DotLine count={2} />
        <LI>
          Calculer la taille moyenne des élèves en prenant en compte la série
          répartie par classe :
        </LI>
        <DotLine count={2} />
      </Problem>
      <H2>Médiane</H2>
      <P>
        La <S>médiane</S> <LaTeX tex="M_e" /> d’une série statistique est le
        nombre qui partage cette série en deux séries de même effectif.{" "}
        <em>
          La moitié des effectifs (50 %) a donc une valeur du caractère en
          dessous ou égale à la valeur médiane et l’autre moitié (50 %) au-dessus
          ou égale.
        </em>
      </P>

      <PageBreak />
      <H2>Les quartiles</H2>
      <P>
        Le <S>premier quartile</S> <LaTeX tex="Q_1" />, la médiane{" "}
        <LaTeX tex="M_e" /> et le <S>troisième quartile</S>{" "}
        <LaTeX tex="Q_3" /> partagent les valeurs ordonnées de la série en
        quatre parties égales.
      </P>
      <UL indent="5mm">
        <LI>
          Le <S>premier quartile</S> <LaTeX tex="Q_1" /> est{" "}
          <em>la plus petite donnée</em> de la série pour laquelle{" "}
          <em>au moins 25 %</em> des données (soit{" "}
          <LaTeX tex="\frac{1}{4}" />) sont inférieures ou égales à{" "}
          <LaTeX tex="Q_1" />.
        </LI>
        <LI>
          Le <S>troisième quartile</S> <LaTeX tex="Q_3" /> est{" "}
          <em>la plus petite donnée</em> de la série pour laquelle{" "}
          <em>au moins 75 %</em> des données (soit{" "}
          <LaTeX tex="\frac{3}{4}" />) sont inférieures ou égales à{" "}
          <LaTeX tex="Q_3" />.
        </LI>
      </UL>
      <Img src={quartiles} />
      <Problem>
        <P>
          On donne le diagramme des effectifs cumulés pour les tailles des
          élèves (attention ce n'est pas le même que les diagrammes en I.2). Sur
          celui-ci indiquer la médiane <LaTeX tex="M_e" /> ainsi que les premier
          et troisième quartiles <LaTeX tex="Q_1" /> et <LaTeX tex="Q_3" />.
        </P>
        <Chart
          className="w-2/3 h-auto mx-auto block"
          config={{
            type: "line",
            data: {
              labels: dataSet.toSorted(),
              datasets: [
                {
                  label: "Mesures",
                  data: Array.from({ length: 10 }, (_, k) => k + 1),
                },
              ],
            },
            options: {
              scales: {
                x: {
                  type: "linear",
                  beginAtZero: false,
                  title: { text: "Taille des élèves (en m)" },
                },
                y: {
                  title: { text: "Effectif cumulé" },
                },
              },
              elements: {
                point: {
                  pointStyle: "circle",
                  backgroundColor: "#000",
                  borderColor: "#000",
                },
              },
            },
          }}
        />
        <Details align="right">
          Diagramme des effectifs cumulés en fonction de la taille des élèves.
        </Details>
      </Problem>

      <PageBreak />
      <H1>Indicateurs de dispersion</H1>
      <P>
        La dispersion d'une série statistique mesure à quel point la série est
        étendue sur une grande plage de valeurs, ou au contraire centrée sur une
        valeur particulière.
      </P>
      <Img src={dispersion} className="w-4/5 mx-auto" />
      <H2>Étendue</H2>
      <P>
        L’<S>étendue</S> d’une série statistique est la différence entre son{" "}
        <S>maximum</S> (sa plus grande valeur) et son <S>minimum</S> (sa plus
        petite valeur).
      </P>
      <H2>Écart-type</H2>
      <P>
        L’<S>écart-type</S> <LaTeX tex="\sigma" /> est un{" "}
        <em>indicateur de dispersion associé à la moyenne</em>. Il traduit une
        moyenne d’écarts autour de la valeur moyenne{" "}
        <LaTeX tex="\overline{x}" />.{" "}
        <em>
          Plus l’écart-type est grand, plus la dispersion des données est
          grande.
        </em>
      </P>
      <H2>Écart interquartile</H2>
      <P>
        L’écart interquartile <LaTeX tex="Q_3 - Q_1" /> est un{" "}
        <em>indicateur de dispersion associé à la médiane</em>. C’est l’écart
        maximal entre les valeurs de la moitié centrale de la série.{" "}
        <em>
          Plus l’écart interquartile Q3 - Q1 est grand, plus la dispersion des
          données est grande
        </em>
        .
      </P>
      <H2>Diagramme en boîte à moustaches</H2>
      <P>
        Le <S>diagramme en boîte à moustaches</S> représente certains
        indicateurs d’une série.
      </P>
      <P>Il est composé :</P>
      <UL>
        <LI>
          d'un rectangle, la « boîte » qui encadre les quartiles{" "}
          <LaTeX tex="Q_1" /> et <LaTeX tex="Q_3" />, et contient la médiane.
        </LI>
        <LI>
          de deux lignes, les « moustaches » qui donnent les valeurs extrêmes
          (minimum et maximum).
        </LI>
      </UL>
      <Problem>
        <P>
          Représenter la boîte à moustaches associée aux tailles des élèves.
        </P>
        <Chart
          className="w-full h-auto"
          height={200}
          config={{
            type: "line",
            data: {
              labels: Array.from({ length: 8 }, (_, n) => 1.55 + n * 0.05),
              datasets: [{ data: Array(7) }],
            },
            options: {
              scales: {
                x: {
                  type: "linear",
                  beginAtZero: false,
                  title: {
                    text: " Taille des élèves (en m)",
                    font: { size: 16 },
                  },
                },
                y: {
                  display: false,
                },
              },
            },
          }}
        />
      </Problem>
    </Cours>
  );
}
