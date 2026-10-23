import { Details, P, S } from "@components/atoms/Texts";
import { Cours } from "@components/doctype/Cours";
import { Chart } from "zefpdf-lab/ui/Chart";
import { DotLine } from "zefpdf-lab/ui/Inputs";
import { Flex } from "zefpdf-lab/ui/Layout";
import { LI, UL } from "zefpdf-lab/ui/List";
import { Page, PageBreak } from "zefpdf-lab/ui/Pages";
import { Table, TEntry, THeader } from "zefpdf-lab/ui/Table";
import { H1, H2 } from "zefpdf-lab/ui/Titles";
import "./index.css";

const ObservationTable = () => (
  <div className="w-9/10 mx-auto">
    <Table className="w-full">
      <THeader
        content={["Élève n°", ...Array.from({ length: 11 }, (_, k) => k + 1)]}
      />
      <TEntry
        header="Taille (cm)"
        content={Array.from({ length: 11 }, () => (
          <DotLine width="1.1cm" />
        ))}
      />
    </Table>
    <Details align="right">Tailles des élèves - Série statistique</Details>
  </div>
);

const BlankChart = () => (
  <div className="w-9/10 mx-auto">
    <Chart
      className="w-full"
      height={400}
      width={800}
      config={{
        type: "bar",
        data: {
          labels: Array.from({ length: 11 }, (_, k) => k + 1),
          datasets: [
            {
              data: Array.from({ length: 11 }, () => 200),
              backgroundColor: "transparent",
            },
          ],
        },
        options: {
          scales: {
            y: {
              min: 120,
              ticks: { stepSize: 5 },
              title: { display: true, text: "Taille (cm)" },
            },
            x: {
              title: { display: true, text: "Élèves" },
            },
          },
          plugins: {
            legend: { display: false },
          },
        },
      }}
    />
    <Details align="right">Tailles des élèves - Graphique en barres</Details>
  </div>
);

const IndicatorTable = () => (
  <div className="w-9/10 mx-auto">
    <Table className="w-full">
      <THeader
        content={["Indicateur", "Minimum", "Maximum", "Étendue", "Moyenne", "Médiane"]}
      />
      <TEntry
        header="Valeur"
        content={Array.from({ length: 5 }, () => (
          <DotLine width="2.5cm" />
        ))}
      />
    </Table>
    <Details align="right">Tailles des élèves - Indicateurs statistiques</Details>
  </div>
);

const indicateurs: [string, string][] = [
  ["Minimum", "Le "],
  ["Maximum", "Le "],
  ["Étendue", "L'"],
  ["Moyenne", "La "],
  ["Médiane", "La "],
];

export default function Statistiques() {
  return (
    <Cours title="Statistiques" lang="fr">
      <H1>Définitions</H1>
      <P>
        La <S>statistique</S> est la science de la collecte, la visualisation
        et l'analyse de données. Elle cherche à expliquer et/ou prédire des
        phénomènes en se basant sur des observations réelles.
      </P>

      <P>Exemples d'utilisation des statistiques :</P>
      <UL>
        {Array.from({ length: 4 }, () => (
          <LI>
            <DotLine width="17.5cm" />
          </LI>
        ))}
      </UL>

      <H1>Collecte de données</H1>
      <P>Mesurons les tailles des élèves de la classe :</P>
      <ObservationTable />
      <P>
        Chaque mesure est une <S>observation</S>, l'ensemble des mesures est
        une <S>série statistique</S>.
      </P>

      <H1>Visualisation</H1>
      <P>On peut observer les résultats des mesures dans un graphique :</P>
      <BlankChart />
      <P>
        Ce type de graphique s'appelle un <S>diagramme en barres</S>.
      </P>

      <H1>Indicateurs</H1>
      <P>
        Plutôt que de regarder toute la série statistique, on peut calculer des{" "}
        <S>indicateurs statistiques</S> qui vont décrire nos données.
      </P>
      <IndicatorTable />

      <PageBreak />
      {indicateurs.map(([t, art]) => (
        <>
          <H2>{t}</H2>
          <P>
            {art}
            <S>{t.toLowerCase()}</S> représente :{" "}
            <DotLine count={2} />
          </P>
        </>
      ))}

      <Page page="blank">
        <Flex dir="column" align="center" gap="3mm">
          {Array.from({ length: 2 }, () => (
            <Flex dir="column" align="center" gap="1mm" className="w-full">
              <ObservationTable />
              <BlankChart />
              <IndicatorTable />
            </Flex>
          ))}
        </Flex>
      </Page>
    </Cours>
  );
}
