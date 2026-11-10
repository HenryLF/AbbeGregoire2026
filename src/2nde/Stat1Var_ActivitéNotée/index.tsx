import { statisticsBoiteMoustacheEx } from "@assets/index";
import { Img } from "@components/atoms/Img";
import { Qr } from "@components/atoms/Qr";
import { P, S } from "@components/atoms/Texts";
import {
    EvalExercice,
    Evaluation,
    NoteBox,
} from "@components/doctype/Evaluation";
import { Call, SubQuestion } from "@components/section/Exercice";
import {
    Chart,
    DotLine,
    Flex,
    LI,
    PageBreak,
    Table,
    TEntry,
    THeader,
} from "zefpdf-lab/ui";
import "../2nd.css";

export default function () {
  return (
    <Evaluation
      title="Activité notée - Saut à la perche"
      hideNoteCorrection
    >
      <EvalExercice hideNoteBox>
        <Flex align="center">
          <P>
            Le tableau excel "Saut_Perche_JO_2024.xls" donne les résultats de
            l'épreuve de saut à la perche des JO 2024 (voir qr-code ci-contre).
          </P>
          <Qr href="https://drive.monlycee.net/s/aWRmMg-XYipYSTg" />
        </Flex>
        <Table className="table-fixed w-full">
          <THeader
            content={[
              "Indicateurs",
              "Moyenne",
              "Ecart-type",
              "Médiane",
              "Premier Quartile",
              "Troisième Quartile",
              "Minimum",
              "Maximum",
            ]}
          />
          <TEntry header="Formule" content={Array(7).fill(<DotLine />)} />
          <TEntry header="Qualification" content={Array(7).fill(<DotLine />)} />
          <TEntry header="Finale" content={Array(7).fill(<DotLine />)} />
        </Table>
        <SubQuestion mainLI="Utiliser internet pour chercher les réponses aux questions suivantes :">
          <LI>
            A quoi correspond l'écart type d'une série statistique, que
            mesure-t-il ?{" "}
          </LI>
          <DotLine count={6} />

          <LI>
            A quoi correspondent les premier et troisième quartile d'une série
            statistique ?{" "}
          </LI>
          <DotLine count={6} />
          <LI>
            Pour chacun des indicateurs statistiques, rechercher la formule
            excel permettant de le calculer.
          </LI>
        </SubQuestion>
        <Call>Faire vérifier les résultats de la recherche.</Call>
        <NoteBox points={3} />

        <LI>
          Pour les deux phases de la compétition, utiliser les formules
          précédentes pour calculer les différents indicateurs.
        </LI>

        <Call>Faire vérifier le tableau excel.</Call>
        <NoteBox points={3} />
        <PageBreak />
        <SubQuestion mainLI={`Réalisation d'un diagramme "boite à moustache"`}>
          <LI>
            Sur le graphique vide en ci-dessous, pour chacune des phases de la
            compétition, indiquer le maximum et le minimum par une croix, relier
            ces croix par une ligne horizontale.
          </LI>
          <LI>
            Toujours sur le graphique, tracer des rectangles allant du premier
            quartile au troisième quartile.
          </LI>

          <LI>
            À l'intérieur de ces rectangles tracer deux barres verticales
            indiquant la médiane et la moyenne.{" "}
            <S>UTILISER 2 COULEURS DIFFÉRENTES</S>.
          </LI>
        </SubQuestion>

        <Flex gap={"1mm"}>
          <P>Voici à quoi doit ressembler le résultat final:</P>
          <Img src={statisticsBoiteMoustacheEx} className={"w-5/9 mx-auto"} />
        </Flex>

        <Chart
          config={{
            type: "bar",
            data: {
              datasets: [
                {
                  data: [],
                },
              ],
            },
            options: {
              scales: {
                x: {
                  type: "linear",
                  min: 5.35,
                  max: 6.35,
                  ticks: {
                    stepSize: 0.05,
                    font: { size: 10 },
                    align: "end",
                  },
                },
                y: {
                  type: "category",
                  labels: ["", "Qualification", "Finale", ""],
                },
              },
              plugins: {
                legend: { display: false },
              },
            },
          }}
        />
        <NoteBox points={3} />

        <LI>
          Comparer les deux boites à moustache ainsi que les valeurs obtenues
          pour les écart-type, dans quelle phase de la compétition les athlètes
          se sont-ils plus démarqués les uns des autres ?
        </LI>

        <DotLine count={6} />
        <NoteBox points={1} />
      </EvalExercice>
    </Evaluation>
  );
}
