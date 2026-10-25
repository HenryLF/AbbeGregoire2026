import algebraExParcelle from "@assets/algebra/ex-parcelle.svg";
import buildingLadder from "@assets/geometry/building-ladder.png";
import sandCastle from "@assets/geometry/sand-castle.png";
import { AnswerBox } from "@components/atoms/AnswerBox";
import { Img } from "@components/atoms/Img";
import { Details, P } from "@components/atoms/Texts";
import {
    EvalExercice,
    Evaluation,
    NoteBox,
    Summary,
    sumPoints,
} from "@components/doctype/Evaluation";
import { Doc } from "@components/section/Doc";
import { SubQuestion } from "@components/section/Exercice";
import { Chart } from "zefpdf-lab/ui/Chart";
import { DotLine } from "zefpdf-lab/ui/Inputs";
import { LaTeX } from "zefpdf-lab/ui/LaTeX";
import { Flex } from "zefpdf-lab/ui/Layout";
import { LI, UL } from "zefpdf-lab/ui/List";
import { PageBreak } from "zefpdf-lab/ui/Pages";
import { Table, TEntry } from "zefpdf-lab/ui/Table";
import "./index.css";

const listUnit = ["m", "dm", "cm", "mm"];

function UnitTable({ dim = 3 }: { dim?: number }) {
  return (
    <table className="border-collapse my-5 mx-auto">
      <tr>
        {listUnit.map((e) => (
          <td
            colSpan={dim}
            className="border-solid border border-t-0 first:border-l-0 last:border-r-0 text-center font-bold px-2"
          >
            {e}
            {dim > 1 ? <sup>{dim}</sup> : null}
          </td>
        ))}
      </tr>
      <tr>
        {Array.from({ length: listUnit.length * dim }, () => (
          <td className="h-10 w-6 border-solid border border-b-0 first:border-l-0 last:border-r-0" />
        ))}
      </tr>
    </table>
  );
}

const players = ["EDI", "ABD", "MMD", "ZOE", "LIN", "KAY", "MAX"];
const scores = [140, 120, 160, 180, 420, 120, 140];

// Barème : les questions de synthèse (modélisation, expression littérale,
// conclusion, interprétation) valent un peu plus que les questions de calcul.
const bareme = {
  pythagore: { schema: 1, relation: 2, calcul: 2 },
  volume: {
    base: 1.5,
    surfaceTour: 1.5,
    volumeTour: 1.5,
    expressionV: 1,
    calculV: 1,
    conversion: 1,
    conclusion: 1.5,
  },
  surface: {
    parking: 1,
    maison: 1,
    totale: 2,
    jardinSMP: 1,
    jardinX: 1.5,
    calcul: { 10: 1, 20: 1 },
  },
  stat: { diagramme: 1, moyenne: 1.5, mediane: 1.5, commentaire: 2 },
};

export default function () {
  return (
    <Evaluation
      title="Distances et Angles & Statistiques"
      lang="fr"
      barem={Object.values(bareme).map(sumPoints)}
    >
      <P>Ce contrôle contient 4 exercices.</P>
      <Summary />
      <P>
        Il est volontairement plus long que ce que vous pouvez réaliser en 1
        heure. <strong>C'est une bonne chose</strong>, privilégiez les exercices
        où vous êtes le plus à l'aise, les notes seront redressées au moment de
        la correction.
      </P>

      <EvalExercice title="Pythagore">
        <P>
          Pour un déménagement, Louis cherche à placer une échelle jusqu'à la
          fenêtre du dernier étage d'un immeuble. Il cherche à savoir quelle
          sera la longueur <LaTeX tex="L" /> de l'échelle qu'il doit ramener.
        </P>
        <P>
          Le trottoir fait <LaTeX tex="D = 9 m" /> de largeur, et la fenêtre est
          située à <LaTeX tex="H = 40m" /> de hauteur par rapport à la rue.
        </P>
        <Flex gap="3mm">
          <div className="flex-[2.5]">
            <LI>
              Schématiser ci-dessous le problème posé à l'aide d'un triangle
              rectangle, on indiquera clairement où se trouve l'angle droit et
              la longueur de chacun des côtés.
            </LI>
            <AnswerBox height="5cm" />
          </div>
          <Img src={buildingLadder} className="flex-1" align="right">
            Schéma de l'immeuble
          </Img>
        </Flex>
        <NoteBox points={bareme.pythagore.schema} />
        <LI>
          Écrire la relation donnée par le théorème de Pythagore dans le cas
          étudié.
        </LI>
        <DotLine />
        <NoteBox points={bareme.pythagore.relation} />
        <LI>
          Calculer la longueur <LaTeX tex="L" /> de l'échelle nécessaire pour
          atteindre le dernier étage.
        </LI>
        <DotLine count={3} />
        <NoteBox points={bareme.pythagore.calcul} />
      </EvalExercice>
      <PageBreak />
      <EvalExercice title="Calcul de volume">
        <Flex gap="3mm">
          <div className="flex-[1.5]">
            <P>
              Loris veut construire le château de sable décrit ci-contre, pour
              cela il dispose d'un seau de <LaTeX tex="V_{seau} = 5 L" />. On
              cherche à savoir combien de seaux seront nécessaires pour
              construire le château de sable.
            </P>
            <LI>
              La base du château est un pavé droit avec une base carrée de côté{" "}
              <LaTeX tex="d = 80 cm" /> et une hauteur <LaTeX tex="h = 20 cm" />
              . Calculer le volume <LaTeX tex="V_B" /> de la base du château.
            </LI>
          </div>
          <Img src={sandCastle} className="flex-1" align="right">
            Plan 3D du château de sable
          </Img>
        </Flex>
        <DotLine count={3} />
        <NoteBox points={bareme.volume.base} />

        <LI>Calcul du volume d'une tour</LI>
        <Doc>
          On rappelle la formule pour le calcul du volume d'un cylindre :
          <LaTeX tex="V_{cyl} = S \times a" />, où <LaTeX tex="S" /> est la
          surface de la face circulaire du cylindre et <LaTeX tex="a" /> est la
          hauteur du cylindre.
        </Doc>
        <SubQuestion count={2}>
          <LI>
            Calculer la surface <LaTeX tex="S_T" /> de la face circulaire d'une
            tour. On donne le rayon des tours : <LaTeX tex="r = 10cm" />.
          </LI>
          <DotLine count={2} />
          <NoteBox points={bareme.volume.surfaceTour} />
          <LI>
            En déduire le volume <LaTeX tex="V_T" /> d'une tour sachant qu'elles
            ont une hauteur de : <LaTeX tex="t = 30cm" />.
          </LI>
          <DotLine count={2} />
          <NoteBox points={bareme.volume.volumeTour} />
        </SubQuestion>

        <LI>Calcul du volume total</LI>
        <SubQuestion count={3}>
          <LI>
            Donner l'expression du volume total du château de sable{" "}
            <LaTeX tex="V" /> en fonction de <LaTeX tex="V_T" /> et{" "}
            <LaTeX tex="V_B" />.{" "}
            <em>
              Attention cela veut dire pas de calcul pour l'instant juste la
              relation entre <LaTeX tex="V" />, <LaTeX tex="V_T" /> et{" "}
              <LaTeX tex="V_B" />.
            </em>
          </LI>
          <DotLine count={2} />
          <NoteBox points={bareme.volume.expressionV} />
          <LI>
            Calculer le volume <LaTeX tex="V" /> de sable nécessaire pour le
            château.{" "}
            <em className="text-xs">(Maintenant on fait le calcul.)</em>
          </LI>
          <DotLine count={3} />
          <NoteBox points={bareme.volume.calculV} />
        </SubQuestion>

        <LI>Conclusion.</LI>
        <SubQuestion count={4}>
          <LI>
            À l'aide du tableau de conversion, exprimer le volume{" "}
            <LaTeX tex="V_{seau}" /> du seau en cm
            <sup>3</sup>. On rappelle que <LaTeX tex="1 L = 1 dm^3" />
          </LI>
          <UnitTable />
          <DotLine />
          <NoteBox points={bareme.volume.conversion} />
          <LI>
            Conclure quant au nombre de seaux de sable nécessaires pour la
            construction du château.
          </LI>
          <DotLine count={3} />
          <NoteBox points={bareme.volume.conclusion} />
        </SubQuestion>
      </EvalExercice>

      <EvalExercice title="Calcul de surface">
        <Flex gap="3mm">
          <P className="flex-[1.5]">
            Une parcelle est formée :
            <UL indent="1cm">
              <LI>d'un terrain carré (zone maison) de 40 m de côté ;</LI>
              <LI>
                d'un parking de côté inconnu <LaTeX tex="x" /> ;
              </LI>
              <LI>d'un grand jardin en vert ci-contre.</LI>
            </UL>
            Les dimensions sont exprimées en m avec <LaTeX tex="x \leq 40" />.{" "}
            <LaTeX tex="\mathcal{J}" /> désigne l'aire en m² du terrain coloré
            en vert tandis que <LaTeX tex="\mathcal{S}" /> désignera la surface
            totale du terrain.
          </P>
          <Img src={algebraExParcelle} className="flex-1 my-auto" />
        </Flex>

        <LI>
          Surfaces de la maison et du parking.{" "}
          <em className="text-xs">
            Attention, ici aussi je ne demande pas un calcul car on ne connaît
            pas encore la valeur de <LaTeX tex="x" />, il faut donner les
            relations mathématiques (les "formules") qui permettent de calculer{" "}
            <LaTeX tex="\mathcal{P}" /> et <LaTeX tex="\mathcal{M}" /> à partir
            de <LaTeX tex="x" />.
          </em>
        </LI>
        <SubQuestion count={1}>
          <LI>
            Donner l'expression de <LaTeX tex="\mathcal{P}" /> la surface du
            parking en fonction de <LaTeX tex="x" />.
          </LI>
          <DotLine count={3} />
          <NoteBox points={bareme.surface.parking} />
          <LI>
            Donner l'expression de <LaTeX tex="\mathcal{M}" /> la surface de la
            maison en fonction de <LaTeX tex="x" />.
          </LI>
          <DotLine count={3} />
          <NoteBox points={bareme.surface.maison} />
        </SubQuestion>

        <PageBreak />
        <LI>
          Donner l'expression de la surface totale du terrain{" "}
          <LaTeX tex="\mathcal{S}" /> en fonction de <LaTeX tex="x" />.{" "}
          <em className="text-xs">Toujours pas de calcul.</em>
        </LI>
        <DotLine count={3} />
        <NoteBox points={bareme.surface.totale} />
        <LI>
          Donner l'expression de <LaTeX tex="\mathcal{J}" /> :
        </LI>
        <SubQuestion count={3}>
          <LI>
            En fonction de <LaTeX tex="\mathcal{S}" />,{" "}
            <LaTeX tex="\mathcal{M}" /> et <LaTeX tex="\mathcal{P}" />
          </LI>
          <DotLine count={2} />
          <NoteBox points={bareme.surface.jardinSMP} />
          <LI>
            En fonction de <LaTeX tex="x" />.{" "}
            <em className="text-xs">
              C'est-à-dire remplacer <LaTeX tex="\mathcal{S}" />,{" "}
              <LaTeX tex="\mathcal{M}" /> et <LaTeX tex="\mathcal{P}" /> dans la
              réponse précédente par les expressions des questions 1 et 2.
            </em>
          </LI>
          <DotLine count={2} />
          <NoteBox points={bareme.surface.jardinX} />
        </SubQuestion>

        <LI>
          Calculer la surface <LaTeX tex="\mathcal{J}" /> du jardin pour :{" "}
          <em className="text-xs">
            Maintenant je vais donner des valeurs à <LaTeX tex="x" /> et on va
            pouvoir faire les calculs.
          </em>
        </LI>
        <SubQuestion count={4}>
          {([10, 20] as const).map((x) => (
            <>
              <LI>
                <LaTeX tex={`x = ${x}`} />
              </LI>
              <DotLine count={2} />
              <NoteBox points={bareme.surface.calcul[x]} />
            </>
          ))}
        </SubQuestion>
      </EvalExercice>
      <PageBreak />
      <EvalExercice title="Étude Statistique">
        <P>
          Les élèves de la classe font une compétition de jeu vidéo, chacun des
          élèves joue à tour de rôle et on note son meilleur score sur le
          classement. Voici le tableau des scores à la fin de la compétition.
        </P>
        <Table className="w-4/5 mx-auto text-[10px]">
          <TEntry header="Joueurs (pseudo)" content={players} />
          <TEntry header="Scores" content={scores} />
        </Table>
        <Details align="right" className="italic">
          Tableau des scores
        </Details>
        <LI>
          Tracer le diagramme en bâtons correspondant aux scores des élèves.
        </LI>
        <Chart
          width={800}
          height={400}
          className="w-2/3 mx-auto"
          config={{
            type: "bar",
            data: {
              labels: players,
              datasets: [
                {
                  data: Array(players.length).fill(420),
                  backgroundColor: "transparent",
                },
              ],
            },
            options: {
              scales: {
                y: {
                  min: 100,
                  max: 440,
                  ticks: { stepSize: 20 },
                  title: { display: true, text: "Scores" },
                },
              },
              plugins: { legend: { display: false } },
            },
          }}
        />
        <NoteBox points={bareme.stat.diagramme} />
        <LI>
          Calculer le score <strong>moyen</strong> obtenu par les élèves de la
          classe, représenter la moyenne par une ligne horizontale sur le
          diagramme en bâtons.
        </LI>
        <DotLine count={2} />
        <NoteBox points={bareme.stat.moyenne} />
        <LI>
          Donner le score <strong>médian</strong> obtenu par les élèves de la
          classe, représenter la médiane par une ligne horizontale sur le
          diagramme en bâtons.
        </LI>
        <DotLine count={2} />
        <NoteBox points={bareme.stat.mediane} />
        <LI>
          Commenter la différence observée entre médiane et moyenne, quel élève
          est la cause de ce décalage et pourquoi ?
        </LI>
        <DotLine count={3} />
        <NoteBox points={bareme.stat.commentaire} />
      </EvalExercice>
    </Evaluation>
  );
}
