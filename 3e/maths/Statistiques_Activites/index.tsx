import { protractor_full_circle } from "@/assets";
import {
  Details,
  Doc,
  Document,
  Exercice,
  Img,
  Note,
  SubQuestions,
  TP,
} from "@/components";
import {
  Block,
  BlockBox,
  Chart,
  DotLine,
  Entry,
  LaTeX,
  LI,
  PageBreak,
  Table,
  UL,
} from "@weasyprint-tsx/ui";
import ChartJS from "chart.js/auto";
import "./index.css";

ChartJS.defaults.plugins.legend.display = false;

const filmGenre = ["Action", "Comédie", "Romance"];

const filmType = ["Animation", "Live-Action"];

const PoolTable = () => (
  <>
    <Table
      orientation="row"
      className="w-full"
      contentClass="px-1 min-w-[1.2cm]"
    >
      <Entry content={Array.from({ length: 11 }, (_, k) => k + 1)}>
        Élève n°
      </Entry>
      <Entry content={Array(11).fill(<DotLine />)}>Genre de film</Entry>
      <Entry content={Array(11).fill(<DotLine />)}>Type de film</Entry>
    </Table>
    <Details align="right">Sondage de classe - films préférés</Details>
  </>
);

const FrequencyTables = () => (
  <BlockBox>
    <Block ratio={1.2}>
      <Table
        orientation="row"
        className="w-full"
        contentClass="min-w-1/5 px-1 "
      >
        <Entry
          content={[...filmGenre, <span class="font-bold">Total</span>]}
          cellBg="var(--wsx--table--header-color)"
        >
          Genre de film
        </Entry>
        <Entry content={Array(4).fill(<DotLine />)}>Effectif</Entry>
        <Entry content={Array(4).fill(<DotLine />)}>Fréquence</Entry>
      </Table>
      <Details align="right">
        Effectifs et fréquences - genre de films préférés
      </Details>
    </Block>

    <>
      <Table
        orientation="row"
        className="w-full"
        contentClass=" px-1 min-w-1/4"
      >
        <Entry
          content={[...filmType, <span class="font-bold">Total</span>]}
          cellBg="var(--wsx--table--header-color)"
        >
          Type de film
        </Entry>
        <Entry content={Array(3).fill(<DotLine />)}>Effectif</Entry>
        <Entry content={Array(3).fill(<DotLine />)}>Fréquence</Entry>
      </Table>
      <Details align="right">Effectifs - type de films préférés</Details>
    </>
  </BlockBox>
);

const BlankBarChart = ({
  labels: lab,
  title,
}: {
  labels: "genre" | "type";
  title: string;
}) => {
  const labels = lab == "genre" ? filmGenre : filmType;
  return (
    <>
      <Chart
        height={150}
        width={400}
        className="mx-auto w-3/4"
        config={{
          type: "bar",
          data: {
            labels,
            datasets: [
              {
                data: Array(labels.length).fill(7),
                backgroundColor: "transparent",
              },
            ],
          },
          options: {
            plugins: {
              title: { text: title, display: true },
            },
          },
        }}
      />
    </>
  );
};

/* ---------------------------------------------------------------------------
   Exercices
   --------------------------------------------------------------------------- */

const mois = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
const fr = (x: number) => x.toLocaleString("fr");

function Cafe() {
  return (
    <Exercice title="Consomation de café">
      <BlockBox>
        <Chart
          className="float-right"
          width={300}
          height={150}
          config={{
            type: "bar",
            data: {
              labels: Array.from({ length: 6 }, (_, k) => k + 1),
              datasets: [
                {
                  data: [10, 22, 14, 17, 7, 5],
                  backgroundColor: [
                    "#550055aa",
                    "#005555aa",
                    "#000055aa",
                    "#550000aa",
                    "#005500aa",
                    "#555500aa",
                  ],
                },
              ],
            },
            options: {
              scales: {
                x: {
                  title: { display: true, text: "Nombre de cafés" },
                },
                y: {
                  max: 24,
                  ticks: {
                    stepSize: 1,
                    callback(tickValue, index, ticks) {
                      return `${tickValue}%`;
                    },
                  },
                },
              },
            },
          }}
        />
        <Block ratio={2}>
          <p>
            On a demandé à des personnes le nombre de cafés qu'elles boivent
            dans la journée. Ce diagramme représente les résultats de cette
            enquête.
          </p>
          <LI>Déterminer la médiane de cette série.</LI>
          <LI>Interpréter ce résultat par une phrase.</LI>
        </Block>
      </BlockBox>
    </Exercice>
  );
}

function Temperatures() {
  const mexico = [
    12.4, 14.1, 16.2, 17.4, 18.4, 17.7, 16.7, 16.8, 16.3, 15.1, 13.9, 12,
  ];
  const barcelone = [
    9.5, 10.3, 12.4, 14.6, 17.7, 21.5, 24.3, 24.3, 21.8, 17.6, 13.5, 10.3,
  ];
  return (
    <Exercice title="Températures de deux villes">
      <div className="text">
        Voici les températures moyennes mensuelles de deux villes, en degrés
        Celsius.
      </div>
      <Table
        orientation="row"
        className="w-full my-2"
        contentClass="px-1 text-center"
      >
        <Entry content={mois} cellBg="var(--wsx--table--header-color)">
          Mois
        </Entry>
        <Entry content={mexico.map(fr)}>Mexico</Entry>
        <Entry content={barcelone.map(fr)}>Barcelone</Entry>
      </Table>
      <BlockBox gap={"2mm"} align="top">
        <Block>
          <LI>Pour chacune de ces deux villes :</LI>
          <SubQuestions count={1}>
            <LI>calculer l’étendue de la série des températures ;</LI>

            <LI>estimer la température moyenne annuelle ;</LI>

            <LI>déterminer la médiane de la série.</LI>
          </SubQuestions>
        </Block>
        <Block ratio={1.2}>
          <LI value={2}>Quels calculs permettent d’affirmer :</LI>
          <SubQuestions count={2}>
            <LI>« Il fait plus chaud à Barcelone qu’à Mexico » ?</LI>
            <LI>« Les écarts de températures sont moindres à Mexico » ?</LI>
            <LI>
              « Dans ces deux villes, la température est supérieure à 16 °C la
              moitié au moins de l’année » ?
            </LI>
          </SubQuestions>
        </Block>
      </BlockBox>
    </Exercice>
  );
}

function EntretienVoitures() {
  // Ordre horaire du diagramme du sujet : A, E, C, D, B.
  const secteurs = [
    { depense: 600, couleur: "#e0303c" },
    { depense: 3600, couleur: "#f2a33a" },
    { depense: 1800, couleur: "#f2cf3a" },
    { depense: 5400, couleur: "#7cb342" },
    { depense: 3000, couleur: "#2f80c8" },
  ];
  return (
    <Exercice title="Entretien de voitures">
      <div className="text">
        Une entreprise a dépensé en tout 14 400 € en 2001 pour l’entretien de
        ses voitures.
      </div>
      <LI>Compléter le tableau ci-dessous.</LI>
      <Table
        orientation="row"
        className="w-full my-2"
        contentClass="min-w-[1.5cm] text-center"
      >
        <Entry
          content={["A", "B", "C", "D", "E"]}
          cellBg="var(--wsx--table--header-color)"
        >
          Marque de voitures
        </Entry>
        <Entry content={["2", "3", "3", "4", "8"]}>Nombre de voitures</Entry>
        <Entry content={["300", "1 000", "", "1 350", "450"]}>
          Dépense par voiture (en €)
        </Entry>
        <Entry content={Array(5).fill("")}>Dépense totale (en €)</Entry>
      </Table>
      <BlockBox align="middle">
        <Block ratio={4}>
          <LI>Calculer la dépense moyenne pour l’entretien d’une voiture.</LI>

          <LI>
            Les dépenses d’entretien ont été représentées dans le diagramme
            circulaire ci-contre, mais la légende a été effacée. Rétablir cette
            légende.
          </LI>
        </Block>
        <Block>
          <Chart
            height={200}
            width={200}
            className="mx-auto w-3/4"
            config={{
              type: "pie",
              data: {
                labels: secteurs.map(() => ""),
                datasets: [
                  {
                    data: secteurs.map((s) => s.depense),
                    backgroundColor: secteurs.map((s) => s.couleur),
                  },
                ],
              },
              options: {
                plugins: {
                  tooltip: { enabled: false },
                },
              },
            }}
          />
        </Block>
      </BlockBox>

      <Note headerText="Aide :" className="text-xs">
        Dans un diagramme circulaire, les angles sont proportionnels aux
        effectifs et l’effectif total correspond à 360°.
      </Note>
    </Exercice>
  );
}

function NotesControle() {
  return (
    <Exercice title="Notes d’un contrôle">
      <div className="text">
        Voici un diagramme en barres des notes d’un contrôle noté sur 5 pour une
        classe de 25 élèves.
      </div>
      <BlockBox>
        <Block>
          <LI>Calculer la moyenne des notes de la classe.</LI>

          <LI>Quelle est la médiane des notes de la classe ?</LI>

          <LI>
            Calculer la fréquence des notes inférieures ou égales à 3 points sur
            5.
          </LI>
        </Block>
        <Chart
          height={200}
          width={500}
          className="w-full"
          config={{
            type: "bar",
            data: {
              labels: ["0/5", "1/5", "2/5", "3/5", "4/5", "5/5"],
              datasets: [
                {
                  data: [1, 2, 4, 3, 7, 8],
                  backgroundColor: "#f6be7a",
                  borderColor: "#000",
                  borderWidth: 1.5,
                },
              ],
            },
            options: {
              scales: {
                y: {
                  min: 0,
                  max: 10,
                  ticks: { stepSize: 2 },
                  title: { display: true, text: "Effectif" },
                },
                x: { title: { display: true, text: "Note" } },
              },
            },
          }}
        />
      </BlockBox>

      <Note headerText="Aide :" className="text-xs">
        Pour déterminer une fréquence, on calcule le quotient{" "}
        <LaTeX tex="\dfrac{\text{Effectif}}{\text{Effectif total}}" />.
      </Note>
    </Exercice>
  );
}

function TemperaturesNimes() {
  // Valeurs relevées sur le graphique du sujet (arrondies à l'unité).
  const nimes = [9, 9, 11, 17, 19, 22, 24, 23, 20, 15, 10, 7];
  return (
    <Exercice title="Températures à Nîmes">
      <div className="text">
        Ce graphique indique, pour la ville de Nîmes, les températures moyennes
        mensuelles (en degrés Celsius) arrondies à l’unité, pour l’année 2007.
      </div>
      <Chart
        height={250}
        width={600}
        className="mx-auto w-3/4 my-2"
        config={{
          type: "line",
          data: {
            labels: mois,
            datasets: [
              {
                data: nimes,
                borderColor: "#2f6fb5",
                backgroundColor: "#2f6fb5",
                pointRadius: 3,
                // cubicInterpolationMode: "monotone",
              },
            ],
          },
          options: {
            scales: {
              y: {
                min: 0,
                max: 25,
                ticks: {
                  stepSize: 1,
                  autoSkip: false,
                  callback: (v) => (Number(v) % 5 === 0 ? v : ""),
                },
                title: { display: true, text: "En °C" },
              },
              x: { title: { display: true, text: "Mois" } },
            },
            plugins: { legend: { display: false } },
          },
        }}
      />
      <Details align="right">Source : www.météo-midi.fr</Details>
      <LI>Calculer l’étendue, puis la moyenne de cette série.</LI>

      <LI>
        Déterminer la médiane de cette série. Interpréter ce résultat par une
        phrase.
      </LI>
    </Exercice>
  );
}

function CoupeDuMonde() {
  return (
    <Exercice title="Coupe du monde de football">
      <div className="text">
        Ce diagramme présente la répartition des buts marqués par match pendant
        la Coupe du monde de football 2006.
      </div>
      <Chart
        height={250}
        width={600}
        className="mx-auto w-3/4 my-2"
        config={{
          type: "bar",
          data: {
            labels: [0, 1, 2, 3, 4, 5, 6],
            datasets: [
              {
                data: [7, 11, 19, 12, 11, 2, 2],
                backgroundColor: "#d6452b",
                barPercentage: 0.12,
              },
            ],
          },
          options: {
            scales: {
              y: {
                min: 0,
                max: 20,
                ticks: {
                  stepSize: 1,
                  autoSkip: false,
                  callback: (v) => (Number(v) % 4 === 0 ? v : ""),
                },
                title: { display: true, text: "Nombre de matchs" },
              },
              x: {
                title: { display: true, text: "Nombre de buts marqués" },
              },
            },
            plugins: { legend: { display: false } },
          },
        }}
      />
      <LI>Combien de matchs ont été joués ?</LI>

      <LI>
        Déterminer le nombre médian <LaTeX tex="M" /> de buts marqués par match.
      </LI>

      <LI>
        Calculer l’arrondi, à l’unité, du pourcentage de matchs où le nombre de
        buts marqués est inférieur ou égal à <LaTeX tex="M" />, puis supérieur
        ou égal à <LaTeX tex="M" />.
      </LI>

      <LI>
        Calculer le nombre moyen de buts marqués par match en arrondissant au
        dixième.
      </LI>
    </Exercice>
  );
}

function NotesTroisiemeB() {
  const notes = [6, 7, 7, 8, 9, 9, 9, 10, 12, 12, 13, 14, 15];
  return (
    <Exercice title="Notes de 3e B">
      <div className="text">
        Lors d’un contrôle, un groupe d’élèves de 3<sup>e</sup> B a obtenu les
        notes suivantes :
        <div className="text-center my-1">{notes.join(" – ")}.</div>
      </div>
      <LI>Quelle est l’étendue des notes ?</LI>

      <LI>Quelle est la moyenne des notes, arrondie au dixième de point ?</LI>

      <LI>Quelle est la note médiane ?</LI>
    </Exercice>
  );
}

export default function () {
  return (
    <Document title="Statistiques - Activités">
      <TP title="Différentes visualisations pour différentes séries statistiques">
        <LI>Réalisons un sondage dans la classe et complétons le tableau :</LI>
        <SubQuestions count={1}>
          <LI>
            Question 1 : Quel est ton genre de film préféré ? "Action",
            "Comédie" ou "Romance" ?
          </LI>

          <LI>
            Question 2 : Quel est ton type de film préféré ? "Animation" ou "
            <span className="not-italic">Live-Action</span> (avec de vrais
            acteurs)" ?
          </LI>
        </SubQuestions>
        <PoolTable />
        <Doc title="Types d'observation" className="table mx-auto text-xs">
          <div>
            Lorsque l'on collecte des données :
            <UL className="inline-block! align-top" indent={"5mm"}>
              <LI>
                Une observation <strong>quantitative</strong> est une mesure
                associée à un nombre.
              </LI>
              <LI>
                Une observation <strong>qualitative</strong> est une
                caractéristique ou une opinion.
              </LI>
            </UL>
          </div>
          <div style={{ "--wsx--dotline--line-height": "5mm" }}>
            <em>Pour des fleurs :</em> le nombre de pétales est une observation{" "}
            <DotLine width={"3cm"} /> tandis que la couleur est une observation{" "}
            <DotLine width={"3cm"} /> .
          </div>
        </Doc>
        <LI>Pour ces deux séries statistiques :</LI>
        <SubQuestions count={2}>
          <LI>Les observations sont-elles qualitatives ou quantitatives ?</LI>
          <LI>
            Peut-on représenter ces séries statistiques par un diagramme en
            barres ?
          </LI>
        </SubQuestions>

        <LI>Remplir les tableaux suivants :</LI>

        <SubQuestions count={3}>
          <LI>
            L'<strong>effectif</strong> correspond au nombre de fois où l'on a
            obtenu une observation spécifique.
          </LI>

          <LI>
            La <strong>fréquence</strong> correspond au nombre de fois où l'on a
            obtenu une observation spécifique divisé par le nombre total
            d'observations. C'est-à-dire la proportion de cette observation dans
            la série.
          </LI>
        </SubQuestions>
        <FrequencyTables />

        <LI>
          Tracer les diagrammes en barres pour les deux séries statistiques.
        </LI>
        <BlockBox>
          <BlankBarChart
            labels="genre"
            title="Effectifs - diagramme en barres"
          />
          <BlankBarChart
            labels="type"
            title="Effectifs - diagramme en barres"
          />
        </BlockBox>

        <LI>
          Tracer les diagrammes de type camembert, on pourra calculer les angles
          en faisant des produits en croix.
        </LI>
        <BlockBox>
          {[filmGenre, filmType].map((labels) => (
            <>
              <Img
                src={protractor_full_circle}
                className={"w-12/24 mx-auto"}
                align="right"
              >
                {labels.length == 3 ? "Genre de film" : "Type de film"} -
                Diagramme camenbert
              </Img>
              <Table
                orientation="row"
                className="w-full"
                contentClass="px-1 min-w-[1cm]"
              >
                <Entry
                  content={[
                    ...labels,
                    <span className="font-bold">Total</span>,
                  ]}
                >
                  Observation
                </Entry>
                <Entry
                  content={[...Array(labels.length).fill(<DotLine />), "100%"]}
                >
                  Fréquence
                </Entry>
                <Entry
                  content={[...Array(labels.length).fill(<DotLine />), "360°"]}
                >
                  Angle
                </Entry>
              </Table>
            </>
          ))}
        </BlockBox>
        <LI>
          Quand utilisera-t-on un diagramme camembert plutôt qu'un diagramme en
          barres ?
        </LI>
        <LI>Commenter les résultats obtenus.</LI>
      </TP>
      <PageBreak />
      <Cafe />
      <Temperatures />
      <NotesControle />
      <EntretienVoitures />
      <PageBreak />
      <TemperaturesNimes />
      <CoupeDuMonde />
      <NotesTroisiemeB />
    </Document>
  );
}
