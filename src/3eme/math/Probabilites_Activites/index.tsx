import { P, S } from "@components/atoms/Texts";
import { Activites } from "@components/doctype/Activites";
import { Exercice, SubQuestion } from "@components/section/Exercice";
import { DotLine } from "zefpdf-lab/ui";
import { LaTeX } from "zefpdf-lab/ui/LaTeX";
import { Flex } from "zefpdf-lab/ui/Layout";
import { LI } from "zefpdf-lab/ui/List";
import { Table, TEntry, THeader } from "zefpdf-lab/ui/Table";
import "./index.css";

const vocabulaire = "« Un événement, L’expérience, L’univers Ω, Une issue »";

/** Table à compléter : une case vide à gauche, l'exemple à droite. */
const VocabTable = ({ exemples }: { exemples: string[] }) => (
  <Table className="w-7/9 mx-auto">
    {exemples.map((ex) => (
      <TEntry header={<DotLine width={"8cm"} />} content={[ex]} />
    ))}
  </Table>
);

function De() {
  return (
    <Exercice title="Lancer d’un dé">
      <P>On lance un dé à 6 faces numérotées de 1 à 6.</P>
      <LI>
        Placer les mots suivants dans la bonne case : <S>{vocabulaire}</S>
      </LI>
      <VocabTable
        exemples={[
          "1 ; 2 ; 3 ; 4 ; 5 ; 6",
          "Obtenir un nombre impair",
          "On lance un dé",
          "3",
        ]}
      />
      <LI>
        Calculer la probabilité <LaTeX tex="p(6)" /> d’obtenir la face 6.
        Arrondir à 0,01.
      </LI>
      <SubQuestion
        mainLI={
          <>
            On considère l’événement <LaTeX tex="A" /> : « obtenir un nombre
            impair".
          </>
        }
      >
        <LI>Déterminer les issues favorables à cet événement.</LI>
        <LI>
          Calculer la probabilité <LaTeX tex="p(A)" /> de l’événement{" "}
          <LaTeX tex="A" />. Arrondir à 0,01.
        </LI>
      </SubQuestion>
      <SubQuestion
        mainLI={
          <>
            On considère l’événement <LaTeX tex="B" /> : « obtenir un nombre
            plus grand que 4".
          </>
        }
      >
        <LI>Déterminer les issues favorables à cet événement.</LI>
        <LI>
          Calculer la probabilité <LaTeX tex="p(B)" /> de l’événement{" "}
          <LaTeX tex="B" />. Arrondir à 0,01.
        </LI>
      </SubQuestion>
    </Exercice>
  );
}

function Cartes() {
  const evenements = [
    { nom: "A", texte: "la carte choisie est la dame de cœur" },
    { nom: "B", texte: "la carte choisie est un cœur" },
    { nom: "C", texte: "la carte choisie est un cœur ou un as" },
  ];
  return (
    <Exercice title="Jeu de 52 cartes">
      <P>On tire une carte au hasard dans un jeu de 52 cartes.</P>
      <LI>
        Placer les mots suivants dans la bonne case : <S>{vocabulaire}</S>
      </LI>
      <VocabTable
        exemples={[
          "Le roi de pique",
          "Tirer une carte au hasard",
          "Les cartes de cœur",
          "Le jeu de cartes",
        ]}
      />
      <LI>Écrire le nombre d’issues possibles lors de cette expérience.</LI>
      <SubQuestion
        indent={0}
        mainLI={
          <>
            Déterminer, pour les événements suivants, le nombre d’issues
            favorables puis calculer leur probabilité. Arrondir à 0,01.
          </>
        }
      >
        <Flex>
          {evenements.map(({ nom, texte }) => (
            <LI>
              <LaTeX tex={nom} />: "{texte}".
            </LI>
          ))}
        </Flex>
      </SubQuestion>
      <P>
        <S>On choisit maintenant une carte parmi les cœurs.</S>
      </P>
      <LI>Écrire le nombre d’issues possibles lors de cette expérience.</LI>
      <LI>
        Calculer la probabilité de l’événement : « la carte choisie est une
        figure : valet, dame ou roi". Arrondir à 0,01.
      </LI>
    </Exercice>
  );
}

function Classe() {
  return (
    <Exercice title="Une classe de 3e" indent={"0"}>
      <Flex align="center" gap="1mm">
        <div className="flex-2/3">
          <P>
            Une classe de 3<sup>e</sup> est composée de 25 élèves. Certains sont
            externes, les autres sont demi-pensionnaires. Le tableau ci-contre
            donne la composition de la classe.
          </P>
          <LI>Compléter le tableau.</LI>
          <P>
            <S>On interroge un élève au hasard.</S>
          </P>
          <LI>Écrire le nombre d’issues possibles lors de cette expérience.</LI>

          <LI>
            Déterminer le nombre d’issues favorables à l’événement{" "}
            <LaTeX tex="A" /> : "l’élève interrogé est une fille".
          </LI>
        </div>
        <Table className="flex-1/3 " style={{ "--dotline--lineheight": "5mm" }}>
          <THeader content={["", "Garçon", "Fille", <S>Total</S>]} />
          <TEntry header="Externe" content={[<DotLine />, "3", <DotLine />]} />
          <TEntry
            header="Demi-pensionnaire"
            content={["9", "11", <DotLine />]}
          />
          <TEntry
            header={<S>Total</S>}
            content={[<DotLine />, <DotLine />, "25"]}
          />
        </Table>
      </Flex>

      <LI>
        Calculer la probabilité <LaTeX tex="p(A)" />. Arrondir à 0,01.
      </LI>
      <LI>
        Déterminer le nombre d’issues favorables à l’événement <LaTeX tex="B" />{" "}
        : "l’élève interrogé est externe".
      </LI>
      <LI>
        Calculer la probabilité <LaTeX tex="p(B)" />. Arrondir à 0,01.
      </LI>
      <LI>
        Déterminer le nombre d’issues favorables à l’événement <LaTeX tex="C" />{" "}
        : "l’élève interrogé est un garçon demi-pensionnaire".
      </LI>
      <LI>
        Calculer la probabilité <LaTeX tex="p(C)" />. Arrondir à 0,01.
      </LI>
    </Exercice>
  );
}

export default function ProbabilitesActivites() {
  return (
    <Activites title="Probabilités" lang="fr">
      <De />
      <Cartes />
      <Classe />
    </Activites>
  );
}
