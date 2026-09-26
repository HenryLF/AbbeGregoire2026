import { protractor_full_circle } from "@/assets";
import { Details, Doc, Document, Img, SubQuestions, TP } from "@/components";
import {
  Block,
  BlockBox,
  Chart,
  DotLine,
  Entry,
  LI,
  Table,
  UL,
} from "@weasyprint-tsx/ui";
import "./index.css";

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
        Elève n°
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
        Effectifs et Fréquences - genre de films préférés
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
              legend: { display: false },
              title: { text: title, display: true },
            },
          },
        }}
      />
    </>
  );
};

export default function () {
  return (
    <Document title="Statistiques - Activités">
      <TP title="Différentes visualisations pour différentes séries statistiques">
        <LI>Réalisons un sondage dans la classe et completons le tableau :</LI>
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
                associé à un nombre.
              </LI>
              <LI>
                Une observation <strong>qualitative</strong> est une
                caractéristique ou une opignon.
              </LI>
            </UL>
          </div>
          <div
            style={{ "--wsx--dotline--line-height": "5mm" }}
          >
            <em>Pour des fleurs :</em> le nombre de pétales est une
            observation <DotLine width={"3cm"} /> tandis que la couleur est une
            observation <DotLine width={"3cm"} /> .
          </div>
        </Doc>
        <LI>Pour ces deux séries statistiques:</LI>
        <SubQuestions count={2}>
          <LI>Les observations sont-elles qualitatives ou quantitative ?</LI>
          <LI>
            Peut-on représenter ces séries statistiques par un diagramme en
            barre ?
          </LI>
        </SubQuestions>

        <LI>Remplir les tableaux suivants :</LI>

        <SubQuestions count={3}>
          <LI>
            L'<strong>effectif</strong> correspond au nombre de fois on on a
            obtenue un observation spécifique.
          </LI>

          <LI>
            La <strong>frequence</strong> correspond au nombre de fois on on a
            obtenue un observation spécifique divisé par le nombre total
            d'observation. C'est a dire la proportion de cette observation dans
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
          Tracer les diagrammes de type camenberg, on pourra calculer les angles
          en faisant des produit en croix.
        </LI>
        <BlockBox>
          {[filmGenre, filmType].map((labels) => (
            <>
              <Img
                src={protractor_full_circle}
                className={"w-13/24 mx-auto"}
                align="right"
              />
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
                  content={[
                    ...Array(labels.length).fill(<DotLine />),
                    "1 (100%)",
                  ]}
                >
                  Frequence
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
        <LI>Commenter les résultats obtenues.</LI>
        <LI>
          Quand utilisera t'on un diagramme cammenberg plutot qu'un diagramme en
          bar.
        </LI>
      </TP>
    </Document>
  );
}
