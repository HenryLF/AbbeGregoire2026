import "./graphConfig";

import abriPiscine from "@assets/functions/abri-piscine.png";
import solid1 from "@assets/functions/solid1.png";
import solid2 from "@assets/functions/solid2.png";
import { Circle } from "@components/atoms/Decorator";
import { Img } from "@components/atoms/Img";
import { P } from "@components/atoms/Texts";
import { Activites } from "@components/doctype/Activites";
import { Exercice } from "@components/section/Exercice";
import { Chart } from "zefpdf-lab/ui/Chart";
import { DotLine } from "zefpdf-lab/ui/Inputs";
import { LaTeX } from "zefpdf-lab/ui/LaTeX";
import { Flex } from "zefpdf-lab/ui/Layout";
import { LI } from "zefpdf-lab/ui/List";
import { PageBreak } from "zefpdf-lab/ui/Pages";
import { Table, TD, TEntry, THeader } from "zefpdf-lab/ui/Table";
import { H1 } from "zefpdf-lab/ui/Titles";
import HelperPage from "./HelperPage";
import "./index.css";
import TP_Proportion from "./TP_Proportion";
import TP_Representation from "./TP_Representation";
import TP_Variation from "./TP_Variation";

const X = () => <LaTeX tex="x" />;
const R = () => <LaTeX tex="R" />;
const F = () => <LaTeX tex="f" />;

const dot = () => <DotLine />;

const solidCurves = [
  (x: number) => x,
  (x: number) => Math.sin((x * Math.PI) / 2 - Math.PI / 2) + 1,
  (x: number) => (x < 1 ? x : (x - 1) / 2 + 1),
  (x: number) => (x < 1 ? x / 2 : x - 1 + 1 / 2),
  (x: number) => ((2 - x / 2) * x) / 2,
  (x: number) => ((x / 2) * x) / 2,
];

export default function NotionDeFonctionActivitesDocument() {
  return (
    <Activites title="Notion de Fonction" lang="fr">
      <H1>Représenter une fonction</H1>
      <TP_Representation />

      <Exercice title="Menuiserie - Aluminium">
        <Flex gap="3mm" align="center">
          <div className="flex-[1.5]">
            <P>
              Un artisan doit concevoir un abri de piscine. La face avant de
              l’abri est une portion de disque de rayon R. Le rayon <R /> (en
              cm) dépend de la hauteur de l’abri <X /> (en cm). Ce rayon <R />{" "}
              peut être modélisé par la fonction <F /> définie sur{" "}
              <LaTeX tex="[100 ; 300]" /> par :{" "}
              <LaTeX tex="f(x) = \large \frac{20000}{x} + \frac{x}{2}" />
            </P>
          </div>
          <Img src={abriPiscine} className="flex-1" />
        </Flex>

        <LI>
          Utiliser la calculatrice pour tracer la représentation graphique de
          la fonction f. On donne les réglages de la fenêtre d’affichage : Xmin
          = 100 ; Xmax = 300 ; Ymin = 180 ; Ymax = 260.
        </LI>
        <Flex gap="3mm">
          <div className="flex-[1.5]">
            <LI>Est-ce que le rayon augmente si la flèche augmente ?</LI>
            <DotLine />
            <LI>Quelle flèche correspond au rayon minimum ?</LI>
            <DotLine />
            <LI>
              Compléter le tableau de variations de <F />.
            </LI>
          </div>
          <Table className="flex-1">
            <TEntry header={<X />} content={[100, dot(), 300]} />
            <TEntry header={<F />} className="h-20" content={[<TD colspan={3} />]} />
          </Table>
        </Flex>
      </Exercice>

      <PageBreak />
      <Exercice title="Remplissage de réservoir">
        <P>On donne les solides suivants :</P>
        <Flex>
          <Img src={solid1} className="flex-1" />
          <Img src={solid2} className="flex-1" />
        </Flex>
        <P>
          On remplit d’eau ces solides. On note <X /> la hauteur de liquide
          dans le récipient. Pour chaque solide, on s’intéresse à la fonction
          qui à <X /> associe le volume d’eau dans le solide.
        </P>
        <P>
          <em>Associer chacune des courbes suivantes à un solide.</em>
        </P>
        <Flex gap="1mm">
          {solidCurves.map((fun, k) => (
            <div className="relative flex-1">
              <Chart
                className="w-full h-auto"
                height={650}
                width={600}
                config={{
                  type: "line",
                  data: {
                    labels: Array.from({ length: 21 }, (_, n) => n / 10),
                    datasets: [
                      {
                        data: Array.from(
                          { length: 21 },
                          (_, n) => fun(n / 10) * Math.PI,
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
                          callback(tickValue) {
                            const v =
                              parseFloat(tickValue.toString()) / Math.PI;
                            return v === 0 ? v : `${v} pi`;
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
              <Circle className="absolute bottom-6 right-0">{k + 1}</Circle>
            </div>
          ))}
        </Flex>
        <DotLine count={4} />
      </Exercice>

      <H1>Étudier les variations d'une fonction</H1>
      <TP_Variation />

      <Exercice title="Fuites d’eau">
        <P>
          On utilise une fonction <F /> pour modéliser la quantité d’eau perdue
          sur une canalisation d’un réseau d’adduction d’eau potable en
          fonction du moment de la journée.
        </P>
        <Flex gap="3mm">
          <div className="flex-[1.2]">
            <LI>
              Donner le domaine de définition de la fonction <F />.
            </LI>
            <DotLine />
            <LI>
              Dresser le tableau de variation de la fonction <F />.
            </LI>
            <Table className="w-full">
              <TEntry header={<X />} content={[1, dot(), dot(), dot()]} />
              <TEntry
                header={<F />}
                className="h-20"
                content={[<TD colspan={4} />]}
              />
            </Table>
          </div>
          <div className="flex-1">
            <Chart
              className="w-full h-auto"
              config={{
                type: "line",
                data: {
                  labels: [1, 3, 9, 15, 18, 20, 22, 24],
                  datasets: [{ data: [3, 1, 7, 8.5, 11, 8.9, 8, 1] }],
                },
                options: {
                  scales: {
                    x: {
                      min: 0,
                      max: 25,
                      type: "linear",
                      ticks: { stepSize: 1, font: { size: 18 } },
                      title: {
                        text: "Temps en heures",
                        display: true,
                        font: { size: 26 },
                      },
                    },
                    y: {
                      min: 0,
                      max: 12,
                      ticks: { font: { size: 18 } },
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
          </div>
        </Flex>
      </Exercice>

      <H1>Traduction d’une situation de proportionnalité</H1>
      <TP_Proportion />

      <Exercice title="La voiture électrique est-elle plus économique ?">
        <Flex gap="3mm" align="center">
          <div className="flex-[3]">
            <P>
              <em>
                La voiture électrique a la réputation d’être trois fois plus
                économique en énergie qu’un véhicule classique
              </em>{" "}
              qui, en moyenne, revient en essence à 7,50 € pour 100 km. Le prix
              de l’électricité nécessaire à la charge est noté ci-contre en
              fonction du nombre de km.
            </P>
          </div>
          <Table className="flex-1">
            <THeader
              content={[
                <>
                  km parcourus <LaTeX tex="n" />
                </>,
                <>
                  Prix en € <LaTeX tex="P(n)" />
                </>,
              ]}
            />
            <TEntry content={[70, "1,54"]} />
            <TEntry content={[120, "2,64"]} />
            <TEntry content={[150, "3,3"]} />
          </Table>
        </Flex>

        <LI>
          Le prix <LaTeX tex="P(n)" /> et le nombre <LaTeX tex="n" /> de km
          sont-ils proportionnels ? On justifiera la réponse.
        </LI>
        <DotLine count={2} />
        <LI>
          Donner l’expression algébrique liant le prix et le nombre de km
          parcourus : <LaTeX tex="P(n) = a×n" /> en précisant{" "}
          <LaTeX tex="a" />.
          <DotLine width="15cm" />
        </LI>
        <LI>
          Calculer le prix pour <LaTeX tex="n=100" />
          <DotLine width="10cm" />
        </LI>
        <LI>
          L’affirmation selon laquelle un véhicule électrique coûte 3 fois moins
          en énergie est-elle vraie ?
        </LI>
        <DotLine count={2} />
      </Exercice>

      <HelperPage />
    </Activites>
  );
}
