import {
  Block,
  BlockBox,
  Chart,
  DotLine,
  Entry,
  LI,
  LaTeX,
  Stack,
  Table,
} from "@weasyprint-tsx/ui";
import { PropsWithChildren } from "preact/compat";
import { tableau_var1, tableau_var2, tableau_var3 } from "@assets";
import { Circle, Img, SubQuestions, TP } from "@components";

const F_ = ({ children }: PropsWithChildren) => <LaTeX tex={`f_${children}`} />;

export default function () {
  return (
    <TP title="Notion de tableau de variation">
      <LI>
        On donne la représentation graphique de la fonction <F_>1</F_> définie
        sur <LaTeX>[-3,5 ; 0,5]</LaTeX> suivante :
      </LI>
      <BlockBox>
        <Block ratio={1.2}>
          <div className="text">
            Le tableau de variation associé à la fonction traduit les
            différentes variations par des flèches, où les valeurs prises par la
            fonction sont précisées au moment des changements de variation.
            Parmi les tableaux de variations ci-contre, choisir celui de la
            fonction <F_>1</F_>.
          </div>
          <Chart
            config={{
              type: "line",
              data: {
                labels: [-3.5, -1.5, 0.5],
                datasets: [
                  {
                    data: [2, -2, 2],
                  },
                ],
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
        </Block>
        <Block ratio={0.05}>
          <Stack gap="2cm">
            <Circle>A</Circle>
            <Circle>B</Circle>
            <Circle>C</Circle>
            <Circle>D</Circle>
          </Stack>
        </Block>
        <Img src={tableau_var1} />
      </BlockBox>

      <BlockBox>
        <Block>
          <LI>
            On donne la représentation graphique de la fonction <F_>2</F_>{" "}
            définie sur <LaTeX>[0 ; 25]</LaTeX> suivante, parmi les 3 tableaux
            de variations ci-contre, choisir celui qui correspond à la fonction{" "}
            <F_>2</F_>.
          </LI>
          <Chart
            config={{
              type: "line",
              data: {
                labels: Array.from({ length: 51 }, (_, k) => k),
                datasets: [
                  {
                    data: Array.from({ length: 51 }, (_, k) => {
                      return Math.sqrt(k);
                    }),

                    borderColor: "green",
                  },
                ],
              },
              options: {
                scales: {
                  y: {
                    min: 0,
                    max: 5.5,
                    ticks: { stepSize: 1 },
                  },
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
        </Block>
        <Block ratio={0.1}>
          <Stack gap="1.5cm">
            <Circle>A</Circle>
            <Circle>B</Circle>
            <Circle>C</Circle>
          </Stack>
        </Block>
        <Img src={tableau_var2} />
      </BlockBox>

      <BlockBox>
        <Block>
          <LI>
            On donne la représentation graphique de la fonction <F_>3</F_>{" "}
            définie sur <LaTeX>[-2 ; 3]</LaTeX> suivante, parmi les 3 tableaux
            de variations ci-contre, choisir celui qui correspond à la fonction{" "}
            <F_>3</F_>.
          </LI>
          <Chart
            config={{
              type: "line",
              data: {
                labels: [-2, -1, 0, 1, 3],
                datasets: [
                  {
                    data: [-1, 1, 0, -1.5, 0],

                    borderColor: "purple",
                  },
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
                  y: {
                    ticks: { stepSize: 0.5 },
                    position: { x: 0 },
                  },
                },
              },
            }}
          />
        </Block>

        <Block ratio={0.1}>
          <Stack gap="1.5cm">
            <Circle>A</Circle>
            <Circle>B</Circle>
            <Circle>C</Circle>
          </Stack>
        </Block>
        <Img src={tableau_var3} />
      </BlockBox>

      <BlockBox>
        <Block ratio={1.5}>
          <LI>
            On donne la représentation graphique de la fonction <F_>4</F_>{" "}
            définie sur <LaTeX>[-2 ; 3]</LaTeX> suivante. Dresser le tableau de
            variations de la fonction <F_>4</F_> :
          </LI>
          <Table orientation="row" className="w-full" contentClass="min-w-1/5">
            <Entry
              content={[-2, -1, 1, 3]}
              cellBg="var(--wsx--table--header-color)"
            >
              <LaTeX>x</LaTeX>
            </Entry>
            <Entry content={[]} className={"h-25"}>
              <F_>4</F_>
            </Entry>
          </Table>
        </Block>
        <Chart
          config={{
            type: "line",
            data: {
              labels: [-2, -1, 1, 3],
              datasets: [
                {
                  data: [0.5, -1.5, -0.5, 1, -0.5],

                  borderColor: "red",
                },
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
                y: {
                  ticks: { stepSize: 0.5 },
                  position: { x: 0 },
                },
              },
            },
          }}
        />
      </BlockBox>

      <BlockBox>
        <Block ratio={1.5}>
          <LI>
            On donne la représentation graphique de la fonction <F_>5</F_>{" "}
            définie sur <LaTeX>[-3 ; 2]</LaTeX> suivante. Dresser le tableau de
            variations de la fonction <F_>5</F_> :
          </LI>
          <Table
            orientation="row"
            className="w-full"
            contentClass="min-w-1/6 px-2"
          >
            <Entry
              content={[-3, <DotLine />, -1, <DotLine />, 2]}
              cellBg="var(--wsx--table--header-color)"
            >
              <LaTeX>x</LaTeX>
            </Entry>
            <Entry content={[]} className={"h-25"}>
              <F_>5</F_>
            </Entry>
          </Table>
        </Block>
        <Chart
          config={{
            type: "line",
            data: {
              labels: [-3, -2, -1, 0.5, 2],
              datasets: [
                {
                  data: [-1, 1, 0, 1, -1],

                  borderColor: "orange",
                },
              ],
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
                y: {
                  ticks: { stepSize: 0.5 },
                  position: { x: 0 },
                },
              },
            },
          }}
        />
      </BlockBox>
      <BlockBox>
        <Block ratio={1.5}>
          <LI>
            Une station pompe l’eau d’une rivière pour la transformer ensuite en
            eau potable. Lors d’une pollution, elle doit interrompre ses
            prélèvements le temps que la vague de pollution soit évacuée par le
            courant. On suppose qu’à partir de l’alerte, donnée à l’instant 0,
            la concentration en polluant P, exprimée en milligrammes par litres
            (mg/L), dépend du temps <LaTeX>x</LaTeX> exprimé en heures suivant
            une fonction <F_>6</F_>
            définie sur <LaTeX> [0 ; 7]</LaTeX> dont on donne la courbe
            représentative.
          </LI>
        </Block>
        <Chart
          config={{
            type: "line",
            data: {
              labels: [0, 2, 4, 6.5],
              datasets: [
                {
                  data: [0, 40, 20, 4],
                  borderColor: "yellow",
                },
              ],
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
      </BlockBox>

      <SubQuestions count={6}>
        <BlockBox>
          <Block>
            <LI>
              Dresser le tableau de variations de <F_>6</F_>.
            </LI>
            <Table
              orientation="row"
              className="w-full"
              contentClass="min-w-1/4 px-2"
            >
              <Entry
                content={Array(3).fill(<DotLine />)}
                cellBg="var(--wsx--table--header-color)"
              >
                <LaTeX>x</LaTeX>
              </Entry>
              <Entry content={[]} className={"h-25"}>
                <F_>6</F_>
              </Entry>
            </Table>
          </Block>
          <Block>
            <LI>
              {" "}
              Au bout de combien de temps la concentration de polluant est-elle
              maximale ?
            </LI>
            <DotLine />
            <LI> Préciser la valeur de cette concentration maximale.</LI>
            <DotLine />
          </Block>
        </BlockBox>
      </SubQuestions>
    </TP>
  );
}
