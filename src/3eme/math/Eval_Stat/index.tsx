import { Note, P, S } from "@components/atoms/Texts";
import {
  EvalExercice,
  Evaluation,
  NoteLines,
} from "@components/doctype/Evaluation";
import { SubQuestion } from "@components/section/Exercice";
import { DotLine, PageBreak } from "zefpdf-lab/ui";
import { Chart } from "zefpdf-lab/ui/Chart";
import { LaTeX } from "zefpdf-lab/ui/LaTeX";
import { Flex } from "zefpdf-lab/ui/Layout";
import { LI } from "zefpdf-lab/ui/List";
import "../math.css";

const bareme = {
  // 12 items -> 6 pts
  arbres: {
    total: 1,
    graph: 3,
  },
  puissances: { item: 0.5 },
  tourDeFrance: {
    min: 1,
    max: 1,
    etendue: 1.5,
    moyenne: 1.5,
    mediane: 1.5,
    interpretationMediane: 1,
    sansCLM: { etendue: 1.5, moyenne: 1.5, mediane: 1.5 },
  },
  formule1: {
    total: 1,
    mediane: 1.5,
    infMedianne: 1.5,
    pourcentages: 1,
    moyenne: 2,
    interpretation: 1,
  },
};

const etapesTDF2008 = [
  195, 165, 195, 30, 230, 195, 160, 175, 220, 155, 165, 170, 180, 180, 215, 155,
  210, 195, 165, 55, 145,
];
const contreLaMontre = [30, 55];

function TourDeFrance() {
  const b = bareme.tourDeFrance;
  return (
    <EvalExercice title="Tour de France 2008">
      <P>
        Voici les distances en km des vingt et une étapes prévues pour le Tour
        de France 2008 :
      </P>
      <P indent={0} className="text-center">
        {etapesTDF2008.join(" – ")}
      </P>
      <SubQuestion>
        <LI>Quel est la distance minimum pour une étape ?</LI>
        <NoteLines lines={1} points={b.min} />
        <LI>Quel est la distance maximum pour une étape ?</LI>
        <NoteLines lines={1} points={b.max} />
        <LI>Calculer l'étendue de cette série.</LI>
        <NoteLines lines={2} points={b.etendue} />
      </SubQuestion>
      <LI>Calculer la moyenne de cette série. Arrondir au km.</LI>
      <NoteLines lines={3} points={b.moyenne} />
      <SubQuestion indent={"5mm"}>
        <LI>Déterminer la médiane de cette série.</LI>
        <NoteLines lines={3} points={b.mediane} />
        <PageBreak />
        <LI>
          Interpréter ce résultat par une phrase.{" "}
          <em>Indice : on peut commencer par "Pour la moitié des étapes..."</em>
        </LI>
        <NoteLines lines={2} points={b.interpretationMediane} />
      </SubQuestion>
      <SubQuestion
        mainLI={`
        Les distances à parcourir pour les deux « contre-la-montre » individuels
        sont ${contreLaMontre[0]} km et ${contreLaMontre[1]} km. Déterminer, sans
        ces deux "contre-la-montre":`}
      >
        {["l'étendue", "la moyenne", "la médiane"].map((t) => (
          <>
            <LI>{t} de la série ;</LI>
            <NoteLines lines={2} points={b.sansCLM.etendue} />
          </>
        ))}
      </SubQuestion>
    </EvalExercice>
  );
}

const arbres = [
  {
    name: "pins",
    count: 47,
  },
  {
    name: "frênes",
    count: 200,
  },
  {
    name: "châtaigniers",
    count: 150,
  },
];

function Graphique() {
  const b = bareme.arbres;
  return (
    <EvalExercice title="Représentation graphique">
      <Flex align="center">
        <div className="flex-4/5">
          <P>
            Dans une forêt on compte {`${arbres[0]?.count} ${arbres[0]?.name}`},{" "}
            {`${arbres[1]?.count} ${arbres[1]?.name}`},{" "}
            {`${arbres[2]?.count} ${arbres[2]?.name}`}.
          </P>
          <LI>Donner le nombre total d'arbres.</LI>
          <NoteLines points={b.total} />
          <LI>
            Sur le diagramme ci-joint, indiquer à quelle couleur correspond
            chacune des espèces d'arbres.
          </LI>
          <NoteLines points={b.graph} lines={2} />
        </div>
        <Flex className="flex-1/5" dir="column" align="center">
          <Chart
            height={150}
            width={150}
            config={{
              type: "pie",
              data: {
                labels: arbres.map((e) => e.name),
                datasets: [
                  {
                    data: arbres.map((e) => e.count),
                    backgroundColor: ["red", "green", "blue", "purple"],
                  },
                ],
              },
              options: {
                plugins: { legend: { display: false } },
              },
            }}
          />
        </Flex>
      </Flex>
    </EvalExercice>
  );
}

function Puissances() {
  return (
    <>
      <Note title="Attention :" size={"10px"} className={"table  float-right"}>
        La calculatrice est autorisée, mais{" "}
        <S>le détail des calculs doit être écrit !</S>
      </Note>
      <EvalExercice title="Calcul avec des puissances">
        {[
          {
            consigne: "Donner l'écriture décimale de :",
            items: ["10^4", "10^{-3}"],
            point: 0.5,
            line: 1,
          },
          {
            consigne: "Écrire sous la forme d'une puissance de 10 :",
            items: ["100000", "0{,}0001"],
            point: 0.5,
            line: 1,
          },
          {
            consigne:
              "Donner le résultat sous la forme d'une seule puissance :",
            items: ["10^5 \\times 10^{-2}", "2^2 \\times 2^3"],
            point: 1,
            line: 2,
          },
          {
            consigne: "Calculer :",
            items: ["3^2 + 3^3", "5^2 - 2^4"],
            point: 1,
            line: 2,
          },
        ].map(({ consigne, items, point, line }) => (
          <SubQuestion mainLI={consigne}>
            <Flex gap={"3mm"}>
              {items.map((tex) => (
                <div className={"flex-1"}>
                  <LaTeX tex={`${tex}=`} />
                  <DotLine inline />
                  <NoteLines lines={line} points={point} />
                </div>
              ))}
            </Flex>
          </SubQuestion>
        ))}
      </EvalExercice>
    </>
  );
}

const pointsF1 = [0, 1, 4, 5, 6, 8, 10];
const effectifsF1 = [2, 1, 1, 1, 4, 2, 6];
function Formule1() {
  const b = bareme.formule1;
  return (
    <EvalExercice title="Championnat de F1 2007">
      <P>
        Ce diagramme donne la répartition des points obtenus à chaque Grand Prix
        par le champion du monde de F1, Kimi Raikkonen, au cours de la saison
        2007.
      </P>
      <Chart
        width={800}
        height={400}
        className="w-2/3 mx-auto"
        config={{
          type: "bar",
          data: {
            labels: pointsF1,
            datasets: [
              {
                data: effectifsF1,
                backgroundColor: "#802020",
                barPercentage: 0.3,
              },
            ],
          },
          options: {
            scales: {
              x: { title: { display: true, text: "Points" } },
              y: {
                min: 0,
                max: Math.max(...effectifsF1) + 1,
                ticks: { stepSize: 1 },
                title: { display: true, text: "Effectif" },
              },
            },
            plugins: { legend: { display: false } },
          },
        }}
      />
      <LI>
        Combien de Grands Prix ont été disputés par Kimi Raikkonen en 2007 ?
      </LI>
      <NoteLines lines={2} points={b.total} />
      <SubQuestion indent={"5mm"}>
        <LI>
          Déterminer le nombre médian <LaTeX tex="M" /> de points.
        </LI>
        <NoteLines lines={3} points={b.mediane} />
        <LI>
          Interpréter ce résultat par une phrase.{" "}
          <em>
            Indice : on peut commencer par "Pour la moitié des Grands Prix..."
          </em>
        </LI>
        <NoteLines lines={2} points={b.interpretation} />
      </SubQuestion>
      <PageBreak />
      <SubQuestion indent={"5mm"}>
        <LI>
          Pour combien de Grands Prix le pilote a-t-il marqué un nombre de
          points inférieur ou égal à la médiane <LaTeX tex="M" /> ?{" "}
        </LI>
        <NoteLines lines={2} points={b.infMedianne} />
        <LI>
          Calculer l'arrondi, à l'unité, du pourcentage de nombres de points
          inférieurs ou égaux à la médiane <LaTeX tex="M" />.
        </LI>
        <NoteLines lines={3} points={b.pourcentages} />
      </SubQuestion>
      <Note title="Rappel :">
        Pour calculer un pourcentage on peut faire{" "}
        <LaTeX tex="\frac{Effectif}{Total} \times 100" /> , arrondir à l'unité
        veut dire pas de chiffre après la virgule.
      </Note>
      <LI>
        Calculer le nombre moyen de points par Grand Prix. Arrondir au dixième.
      </LI>
      <NoteLines lines={3} points={b.moyenne} />
    </EvalExercice>
  );
}

export default function () {
  return (
    <Evaluation title="Statistiques">
      {Graphique()}
      {Formule1()}
      {TourDeFrance()}
      {Puissances()}
    </Evaluation>
  );
}
