import {
  Block,
  BlockBox,
  Chart,
  DotLine,
  Entry,
  H1,
  LaTeX,
  LI,
  PageBreak,
  Table,
} from "@weasyprint-tsx/ui";
import { abri_piscine, solid1, solid2 } from "@assets";
import { Circle, Document, Exercice, Img } from "@components";
import "./graphConfig";
import HelperPage from "./HelperPage";
import "./index.css";
import TP_Proportion from "./TP_Proportion";
import TP_Representation from "./TP_Representation";
import TP_Variation from "./TP_Variation";

const X = () => <LaTeX>x</LaTeX>;
const R = () => <LaTeX>R</LaTeX>;
const F = () => <LaTeX>f</LaTeX>;

export default function NotionDeFonctionActivitesDocument() {
  return (
    <Document title="Notion de Fonction - Activités">
      <H1>Représenter une fonction</H1>
      <TP_Representation />
      <Exercice title="Menuiserie - Aluminium">
        <BlockBox>
          <Block ratio={1.5}>
            <div className="text">
              Un artisan doit concevoir un abri de piscine. La face avant de
              l’abri est une portion de disque de rayon R. Le rayon <R /> (en
              cm) dépend de la hauteur de l’abri <X /> (en cm). Ce rayon <R />{" "}
              peut être modélisé par la fonction <F /> définie sur{" "}
              <LaTeX>[100 ; 300]</LaTeX> par :{" "}
              <LaTeX tex="f(x) = \large \frac{20000}{x} + \frac{x}{2}" />
            </div>
          </Block>
          <Img src={abri_piscine} />
        </BlockBox>

        <LI>
          Utiliser la calculatrice pour tracer la représentation graphique de
          la fonction f. On donne les réglages de la fenêtre d’affichage :
          Xmin = 100 ; Xmax = 300 ; Ymin = 180 ; Ymax = 260.
        </LI>
        <BlockBox>
          <Block ratio={1.5}>
            <LI>Est-ce que le rayon augmente si la flèche augmente ?</LI>
            <DotLine />
            <LI>Quelle flèche correspond au rayon minimum ?</LI>
            <DotLine />

            <LI>
              Compléter le tableau de variations de <F />.
            </LI>
          </Block>

          <Table
            orientation="row"
            className={"w-full"}
            contentClass="min-w-1/4"
          >
            <Entry
              content={[100, <DotLine />, 300]}
              cellBg="var(--wsx--table--header-color)"
            >
              <X />
            </Entry>
            <Entry content={[]} className="h-20">
              <F />
            </Entry>
          </Table>
        </BlockBox>
      </Exercice>
      <PageBreak />
      <Exercice title="Remplissage de réservoir">
        <p>On donne les solides suivants :</p>
        <BlockBox gap={0}>
          <Img src={solid1} />
          <Img src={solid2} />
        </BlockBox>
        <div className="text">
          On remplit d’eau ces solides. On note <X /> la hauteur de liquide
          dans le récipient. Pour chaque solide, on s’intéresse à la fonction
          qui à <X /> associe le volume d’eau dans le solide.
        </div>
        <div className="text italic indent-[1cm]">
          Associer chacune des courbes suivantes à un solide.
        </div>
        <BlockBox>
          {[
            (x: number) => x,
            (x: number) => Math.sin((x * Math.PI) / 2 - Math.PI / 2) + 1,
            (x: number) => (x < 1 ? x : (x - 1) / 2 + 1),
            (x: number) => (x < 1 ? x / 2 : x - 1 + 1 / 2),
            (x: number) => ((2 - x / 2) * x) / 2,
            (x: number) => ((x / 2) * x) / 2,
          ].map((fun, k) => (
            <div className="relative">
              <Chart
                height={650}
                width={600}
                config={{
                  type: "line",
                  data: {
                    labels: Array.from({ length: 21 }, (_, k) => k / 10),
                    datasets: [
                      {
                        data: Array.from(
                          { length: 21 },
                          (_, k) => fun(k / 10) * Math.PI,
                        ),
                        borderWidth: 15,
                      },
                    ],
                  },

                  options: {
                    scales: {
                      x: {
                        type: "linear",
                        min: 0,
                        max: 2.1,
                        ticks: {
                          stepSize: 1,
                          font: { size: 32, weight: "bold" },
                        },
                        title: {
                          text: "Hauteur du liquide x",
                          display: k === 0,
                          font: { size: 32, weight: "bold" },
                        },
                      },
                      y: {
                        min: 0,
                        max: 2.1 * Math.PI,
                        ticks: {
                          stepSize: Math.PI,
                          font: { size: 32, weight: "bold", family: "Arial" },
                          callback(tickValue, _, __) {
                            const k =
                              parseFloat(tickValue.toString()) / Math.PI;
                            return k === 0 ? k : `${k} pi`;
                          },
                        },
                        title: {
                          text: "Volume de liquide",
                          display: k === 0,
                          font: { size: 32, weight: "bold" },
                        },
                      },
                    },
                  },
                }}
              />
              <Circle className="absolute bottom-6 right-0 text-xs">
                {k + 1}
              </Circle>
            </div>
          ))}
        </BlockBox>
        <DotLine count={4} />
      </Exercice>
      <H1>Étudier les variations d'une fonction</H1>
      <TP_Variation />

      <Exercice title="Fuites d’eau">
        <div className="text">
          On utilise une fonction <F /> pour modéliser la quantité d’eau
          perdue sur une canalisation d’un réseau d’adduction d’eau potable en
          fonction du moment de la journée.
        </div>
        <BlockBox>
          <Block ratio={1.2}>
            <LI>
              Donner le domaine de définition de la fonction <F />.
            </LI>
            <DotLine />
            <LI>
              Dresser le tableau de variation de la fonction <F />.
            </LI>
            <Table
              orientation="row"
              className="w-full"
              contentClass="min-w-1/5 px-2"
            >
              <Entry
                content={[1, <DotLine />, <DotLine />, <DotLine />]}
                cellBg="var(--wsx--table--header-color)"
              >
                <X />
              </Entry>
              <Entry content={[]} className="h-20">
                <F />
              </Entry>
            </Table>
          </Block>
          <Chart
            config={{
              type: "line",
              data: {
                labels: [1, 3, 9, 15, 18, 20, 22, 24],
                datasets: [
                  {
                    data: [3, 1, 7, 8.5, 11, 8.9, 8, 1],
                  },
                ],
              },
              options: {
                scales: {
                  x: {
                    min: 0,
                    max: 25,
                    type: "linear",
                    ticks: {
                      stepSize: 1,

                      font: { size: 18 },
                    },
                    title: {
                      text: "Temps en heures",
                      display: true,
                      font: { size: 26 },
                    },
                  },
                  y: {
                    min: 0,
                    max: 12,
                    ticks: {
                      font: { size: 18 },
                    },
                    title: {
                      text: "Quantité d'eau perdue (L)",
                      display: true,
                      font: { size: 26 },
                    },
                  },
                },
              },
            }}
          />
        </BlockBox>
      </Exercice>

      <H1>Traduction d’une situation de proportionnalité</H1>
      <TP_Proportion />

      <Exercice title="La voiture électrique est-elle plus économique ?">
        <BlockBox>
          <Block ratio={3}>
            <p>
              <em>
                La voiture électrique a la réputation d’être trois fois plus
                économique en énergie qu’un véhicule classique
              </em>{" "}
              qui, en moyenne, revient en essence à 7,50 € pour 100 km. Le
              prix de l’électricité nécessaire à la charge est noté ci-contre
              en fonction du nombre de km.
            </p>
          </Block>
          <Table className={"text-xs"}>
            <Entry content={[70, 120, 150]}>
              km parcourus <LaTeX tex="n" />
            </Entry>
            <Entry content={["1,54", "2,64", "3,3"]}>
              Prix en € <LaTeX tex="P(n)" />
            </Entry>
          </Table>
        </BlockBox>

        <LI>
          Le prix <LaTeX tex="P(n)" /> et le nombre <LaTeX tex="n" /> de km
          sont-ils proportionnels ? On justifiera la réponse.
        </LI>
        <DotLine count={2} />

        <LI>
          Donner l’expression algébrique liant le prix et le nombre de km
          parcourus : <LaTeX tex="P(n) = a×n" /> en précisant{" "}
          <LaTeX tex="a" />.
          <DotLine width={"15cm"} />
        </LI>

        <LI>
          Calculer le prix pour <LaTeX tex="n=100" />
          <DotLine width={"10cm"} />
        </LI>
        <LI>
          L’affirmation selon laquelle un véhicule électrique coûte 3 fois
          moins en énergie est-elle vraie ?
        </LI>
        <DotLine count={2} />
      </Exercice>
      <HelperPage />
    </Document>
  );
}
