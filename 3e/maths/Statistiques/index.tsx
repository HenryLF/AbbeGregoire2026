import { Details, Document } from "@/components";
import {
  Chart,
  DotLine,
  Entry,
  H1,
  H2,
  LI,
  Page,
  PageBreak,
  Stack,
  Table,
  UL,
} from "@weasyprint-tsx/ui";
import "./index.css";

const ObservationTable = () => (
  <>
    <Table
      orientation="row"
      className={"w-9/10 mx-auto"}
      contentClass="min-w-1/13"
    >
      <Entry
        content={Array.from({ length: 11 }, (_, k) => k + 1)}
        cellBg="var(--wsx--table--header-color)"
      >
        Élève n°
      </Entry>
      <Entry content={Array(11).fill(<DotLine />)} contentClass="h-10 px-2">
        Taille (cm)
      </Entry>
    </Table>

    <Details align="right">Tailles des élèves - Série statistique</Details>
  </>
);

const BlankChart = () => (
  <>
    <Chart
      className="w-9/10 mx-auto"
      height={400}
      width={800}
      config={{
        type: "bar",
        data: {
          labels: Array.from({ length: 11 }, (_, k) => k + 1),
          datasets: [
            {
              data: Array.from({ length: 11 }, (_, k) => 200),
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
  </>
);

const IndicatorTable = () => (
  <>
    <Table
      orientation="row"
      contentClass="min-w-1/6"
      className={"w-9/10 mx-auto"}
    >
      <Entry
        content={["Minimum", "Maximum", "Étendue", "Moyenne", "Médiane"]}
        cellBg="var(--wsx--table--header-color)"
      >
        Indicateur
      </Entry>
      <Entry content={Array(5).fill(<DotLine />)} contentClass="h-10 px-2">
        Valeur
      </Entry>
    </Table>
    <Details align="right">
      Tailles des élèves - Indicateurs statistiques{" "}
    </Details>
  </>
);

export default function () {
  return (
    <Document title="Statistiques">
      <H1>Définitions</H1>
      <p>
        La <strong>statistique</strong> est la science de la collecte, la
        visualisation et l'analyse de données. Elle cherche à expliquer et/ou
        prédire des phénomènes en se basant sur des observations réelles.
      </p>

      <p>Exemples d'utilisation des statistiques :</p>
      <UL>
        {Array(4).fill(
          <LI>
            <DotLine width={"17.5cm"} />
          </LI>,
        )}
      </UL>
      <H1>Collecte de données</H1>
      <p>Mesurons les tailles des élèves de la classe :</p>
      <ObservationTable />
      <p>
        Chaque mesure est une <strong>observation</strong>, l'ensemble des
        mesures est une <strong>série statistique</strong>.
      </p>
      <H1>Visualisation</H1>
      <p>On peut observer les résultats des mesures dans un graphique :</p>
      <BlankChart />
      <p>
        Ce type de graphique s'appelle un <strong>diagramme en barres</strong>.
      </p>
      <H1>Indicateurs</H1>
      <p>
        Plutôt que de regarder toute la série statistique, on peut calculer des{" "}
        <strong>indicateurs statistiques</strong> qui vont décrire nos données.
      </p>
      <IndicatorTable />
      <PageBreak />
      {[
        ["Minimum", "Le "],
        ["Maximum", "Le "],
        ["Étendue", "L'"],
        ["Moyenne", "La "],
        ["Médiane", "La "],
      ].map(([t, art]) => (
        <>
          <H2>{t}</H2>
          <p>
            {art}
            <strong>{t.toLowerCase()}</strong> représente :{" "}
            <DotLine count={2} />
          </p>
        </>
      ))}

      <Page page="blank">
        <Stack gap={"1cm"}>
          {Array(2).fill(
            <Stack gap={"5mm"}>
              <ObservationTable />
              <BlankChart />
              <IndicatorTable />
            </Stack>,
          )}
        </Stack>
      </Page>
    </Document>
  );
}
