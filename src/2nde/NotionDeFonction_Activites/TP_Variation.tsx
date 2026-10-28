import type { JSX } from "preact";
import tableauVar1 from "@assets/functions/tableau-var1.png";
import tableauVar2 from "@assets/functions/tableau-var2.png";
import tableauVar3 from "@assets/functions/tableau-var3.png";
import { Circle } from "@components/atoms/Decorator";
import { Img } from "@components/atoms/Img";
import { P } from "@components/atoms/Texts";
import { SubQuestion, TP } from "@components/section/Exercice";
import { Chart, type ChartProps } from "zefpdf-lab/ui/Chart";
import { DotLine } from "zefpdf-lab/ui/Inputs";
import { LaTeX } from "zefpdf-lab/ui/LaTeX";
import { Flex } from "zefpdf-lab/ui/Layout";
import { LI } from "zefpdf-lab/ui/List";
import { Table, TD, TEntry } from "zefpdf-lab/ui/Table";

const F_ = ({ n }: { n: number }) => <LaTeX tex={`f_${n}`} />;

function Graph({ config }: { config: ChartProps["config"] }) {
  return <Chart className="w-full h-auto" config={config} />;
}

function Letters({ letters, gap }: { letters: string[]; gap: string }) {
  return (
    <Flex dir="column" align="center" justify="center" gap={gap}>
      {letters.map((l) => (
        <Circle>{l}</Circle>
      ))}
    </Flex>
  );
}

/** variation table: first row = x values, second row = empty space for arrows */
function VarTable({
  n,
  xs,
  height = "h-25",
}: {
  n: number;
  xs: (string | number | JSX.Element)[];
  height?: string;
}) {
  return (
    <Table className="w-full">
      <TEntry header={<LaTeX tex="x" />} content={xs} />
      <TEntry
        header={<F_ n={n} />}
        className={height}
        content={[<TD colspan={xs.length} />]}
      />
    </Table>
  );
}

export default function TP_Variation() {
  return (
    <TP title="Notion de tableau de variation">
      <LI>
        On donne la représentation graphique de la fonction <F_ n={1} />{" "}
        définie sur <LaTeX tex="[-3.5 ; 0.5]" /> suivante :
      </LI>
      <Flex gap="3mm" align="center">
        <div className="flex-[1.2]">
          <P>
            Le tableau de variation associé à la fonction traduit les
            différentes variations par des flèches, où les valeurs prises par
            la fonction sont précisées au moment des changements de variation.
            Parmi les tableaux de variations ci-contre, choisir celui de la
            fonction <F_ n={1} />.
          </P>
          <Graph
            config={{
              type: "line",
              data: {
                labels: [-3.5, -1.5, 0.5],
                datasets: [{ data: [2, -2, 2] }],
              },
              options: {
                scales: {
                  y: {
                    min: -2,
                    max: 2.5,
                    ticks: { stepSize: 1 },
                    position: { x: 0 },
                  },
                  x: {
                    type: "linear",
                    min: -4,
                    max: 1,
                    ticks: { stepSize: 0.5 },
                    position: { y: 0 },
                  },
                },
              },
            }}
          />
        </div>
        <Letters letters={["A", "B", "C", "D"]} gap="2cm" />
        <Img src={tableauVar1} className="flex-1" />
      </Flex>

      <Flex gap="3mm" align="center">
        <div className="flex-1">
          <LI>
            On donne la représentation graphique de la fonction <F_ n={2} />{" "}
            définie sur <LaTeX tex="[0 ; 25]" /> suivante, parmi les 3
            tableaux de variations ci-contre, choisir celui qui correspond à la
            fonction <F_ n={2} />.
          </LI>
          <Graph
            config={{
              type: "line",
              data: {
                labels: Array.from({ length: 51 }, (_, k) => k),
                datasets: [
                  {
                    data: Array.from({ length: 51 }, (_, k) => Math.sqrt(k)),
                    borderColor: "green",
                  },
                ],
              },
              options: {
                scales: {
                  y: { min: 0, max: 5.5, ticks: { stepSize: 1 } },
                  x: {
                    type: "linear",
                    min: 0,
                    max: 25,
                    ticks: { stepSize: 5 },
                  },
                },
              },
            }}
          />
        </div>
        <Letters letters={["A", "B", "C"]} gap="1.5cm" />
        <Img src={tableauVar2} className="flex-1" />
      </Flex>

      <Flex gap="3mm" align="center">
        <div className="flex-1">
          <LI>
            On donne la représentation graphique de la fonction <F_ n={3} />{" "}
            définie sur <LaTeX tex="[-2 ; 3]" /> suivante, parmi les 3 tableaux
            de variations ci-contre, choisir celui qui correspond à la fonction{" "}
            <F_ n={3} />.
          </LI>
          <Graph
            config={{
              type: "line",
              data: {
                labels: [-2, -1, 0, 1, 3],
                datasets: [{ data: [-1, 1, 0, -1.5, 0], borderColor: "purple" }],
              },
              options: {
                scales: {
                  x: {
                    type: "linear",
                    min: -2,
                    max: 3,
                    ticks: { stepSize: 1 },
                    position: { y: 0 },
                  },
                  y: { ticks: { stepSize: 0.5 }, position: { x: 0 } },
                },
              },
            }}
          />
        </div>
        <Letters letters={["A", "B", "C"]} gap="1.5cm" />
        <Img src={tableauVar3} className="flex-1" />
      </Flex>

      <Flex gap="3mm" align="center">
        <div className="flex-[1.5]">
          <LI>
            On donne la représentation graphique de la fonction <F_ n={4} />{" "}
            définie sur <LaTeX tex="[-2 ; 3]" /> suivante. Dresser le tableau
            de variations de la fonction <F_ n={4} /> :
          </LI>
          <VarTable n={4} xs={[-2, -1, 1, 3]} />
        </div>
        <div className="flex-1">
          <Graph
            config={{
              type: "line",
              data: {
                labels: [-2, -1, 1, 3],
                datasets: [
                  { data: [0.5, -1.5, -0.5, 1, -0.5], borderColor: "red" },
                ],
              },
              options: {
                scales: {
                  x: {
                    type: "linear",
                    min: -2,
                    max: 3,
                    ticks: { stepSize: 1 },
                    position: { y: 0 },
                  },
                  y: { ticks: { stepSize: 0.5 }, position: { x: 0 } },
                },
              },
            }}
          />
        </div>
      </Flex>

      <Flex gap="3mm" align="center">
        <div className="flex-[1.5]">
          <LI>
            On donne la représentation graphique de la fonction <F_ n={5} />{" "}
            définie sur <LaTeX tex="[-3 ; 2]" /> suivante. Dresser le tableau
            de variations de la fonction <F_ n={5} /> :
          </LI>
          <VarTable
            n={5}
            xs={[
              -3,
              <DotLine />,
              -1,
              <DotLine />,
              2,
            ]}
          />
        </div>
        <div className="flex-1">
          <Graph
            config={{
              type: "line",
              data: {
                labels: [-3, -2, -1, 0.5, 2],
                datasets: [{ data: [-1, 1, 0, 1, -1], borderColor: "orange" }],
              },
              options: {
                scales: {
                  x: {
                    type: "linear",
                    min: -3,
                    max: 2,
                    ticks: { stepSize: 1 },
                    position: { y: 0 },
                  },
                  y: { ticks: { stepSize: 0.5 }, position: { x: 0 } },
                },
              },
            }}
          />
        </div>
      </Flex>

      <Flex gap="3mm" align="center">
        <div className="flex-[1.5]">
          <LI>
            Une station pompe l’eau d’une rivière pour la transformer ensuite
            en eau potable. Lors d’une pollution, elle doit interrompre ses
            prélèvements le temps que la vague de pollution soit évacuée par le
            courant. On suppose qu’à partir de l’alerte, donnée à l’instant 0,
            la concentration en polluant P, exprimée en milligrammes par litres
            (mg/L), dépend du temps <LaTeX tex="x" /> exprimé en heures suivant
            une fonction <F_ n={6} /> définie sur <LaTeX tex="[0 ; 7]" /> dont
            on donne la courbe représentative.
          </LI>
        </div>
        <div className="flex-1">
          <Graph
            config={{
              type: "line",
              data: {
                labels: [0, 2, 4, 6.5],
                datasets: [{ data: [0, 40, 20, 4], borderColor: "yellow" }],
              },
              options: {
                scales: {
                  x: {
                    type: "linear",
                    min: 0,
                    max: 7,
                    ticks: { stepSize: 1 },
                    title: { text: "Temps en heures" },
                  },
                  y: {
                    min: 0,
                    max: 60,
                    ticks: { stepSize: 10 },
                    title: { text: "Concentration en mg/L" },
                  },
                },
              },
            }}
          />
        </div>
      </Flex>

      <SubQuestion count={6}>
        <Flex gap="3mm">
          <div className="flex-1">
            <LI>
              Dresser le tableau de variations de <F_ n={6} />.
            </LI>
            <VarTable
              n={6}
              xs={Array.from({ length: 3 }, () => (
                <DotLine />
              ))}
            />
          </div>
          <div className="flex-1">
            <LI>
              Au bout de combien de temps la concentration de polluant est-elle
              maximale ?
            </LI>
            <DotLine />
            <LI>Préciser la valeur de cette concentration maximale.</LI>
            <DotLine />
          </div>
        </Flex>
      </SubQuestion>
    </TP>
  );
}
