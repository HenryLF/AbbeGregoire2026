import {
  probabilityTicket2e,
  probabilityTicket3e,
  probabilityTicket5e,
} from "@assets/index";
import { Img } from "@components/atoms/Img";
import { Important, It, Note, P, S } from "@components/atoms/Texts";
import { Activites } from "@components/doctype/Activites";
import { Exercice, SubQuestion, TP } from "@components/section/Exercice";
import { DotLine, H4, Options } from "zefpdf-lab/ui";
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
            impair ».
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
            plus grand que 4 ».
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
              <LaTeX tex={nom} /> : "{texte}".
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
        figure : valet, dame ou roi ». Arrondir à 0,01.
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

function JeuxAGratter() {
  return (
    <TP title="Jeux à gratter">
      <Note title="Rappel :">
        Les jeux d'argent <S>ne sont pas des jeux</S>, jouez avec modération ou
        mieux : ne jouez pas (voir conclusion de l'activité).
      </Note>
      <H4>
        Le jeu à 5 € <It>(à réaliser avec le professeur)</It>{" "}
      </H4>
      <Flex>
        <div className="flex-2/3">
          <P>
            On donne la photo du verso d'un ticket à gratter vendu dans le
            commerce à 5€.
          </P>
          <LI>
            Décrire cette expérience aléatoire, quels sont les événements
            élémentaires ?
          </LI>
          <LI>
            À partir des informations disponibles au dos du ticket remplir le
            tableau suivant :
          </LI>
          <Table className={"w-9/10 mx-auto table-fixed"}>
            <TEntry
              header="Lots"
              content={["Perdant", "10€", "200€", <S color="black">Total</S>]}
            />
            <TEntry
              header="Nombre de tickets"
              content={Array(4).fill(<DotLine />)}
            />
          </Table>
          <LI>Calculer le nombre de tickets perdants.</LI>
          <LI>Donner la probabilité d'obtenir un ticket perdant.</LI>
          <LI>En déduire la probabilité d'obtenir un ticket gagnant.</LI>
          <LI>
            Calculer la probabilité de gagner 5€, puis celle de gagner 200€.
          </LI>
          <LI>
            Expliquer comment calculer l'espérance, puis effectuer le calcul
            pour le ticket à 5€.
          </LI>
          <LI>Conclure sur les gains attendus pour ce jeu à gratter.</LI>

          <Important
            className={"w-19/20 mx-auto"}
            style={{ "--text--fontsize": "9px" }}
          >
            <P>
              L'<S>espérance</S> est une grandeur mathématique qui nous permet
              de calculer le résultat moyen pour une expérience aléatoire où
              chaque événement élémentaire est associé à un score. Par exemple
              pour l'expérience suivante : "
              <It>
                Je tire un dé à 6 faces, si j'obtiens 3 je gagne 10€ sinon je
                gagne 2€
              </It>
              " l'espérance sera égale à :{" "}
              <LaTeX tex="\frac{1}{6} \times 10 + \frac{5}{6} \times 2 \approx 3.33 €" />
              , où <LaTeX tex="\frac{1}{6}" /> est la probabilité de gagner 10€
              et <LaTeX tex="\frac{5}{6}" /> est la probabilité de gagner 2€.
            </P>
          </Important>
        </div>
        <Img src={probabilityTicket5e} className={"flex-1/3"} />
      </Flex>
      <H4>
        Un autre ticket <It>(travail en groupe)</It>
      </H4>
      <Flex align="center" justify="space-evenly">
        <Img src={probabilityTicket3e} width="42%">
          Ticket à 3€
        </Img>
        <Img src={probabilityTicket2e} width="42%">
          Ticket à 2€
        </Img>
      </Flex>
      <P>
        Mon groupe travaille sur :{" "}
        <Options className="inline-block columns-2">
          <>Le ticket à 3€</>
          <>Le ticket à 5€</>
        </Options>
      </P>
      <LI>
        Avec les informations au dos de votre ticket, remplir le tableau suivant
        et réaliser les calculs de probabilité.
      </LI>
      <Table className={"w-39/40 mx-auto table-fixed"}>
        <TEntry
          header="Lots"
          content={[
            "Perdant",
            ...Array(8).fill(<DotLine />),
            <S color="black">Total</S>,
          ]}
        />
        <TEntry
          header="Nombre de tickets"
          content={Array(10).fill(<DotLine />)}
        />
        <TEntry header="Probabilité" content={Array(10).fill(<DotLine />)} />
      </Table>
      <LI>Calculer l'espérance et comparer au prix du ticket.</LI>
      <H4>
        Conclusion <It>(mise en commun)</It>
      </H4>
      <LI>
        Faire la synthèse des résultats obtenus pour les 3 tickets,
        qu'observe-t-on ?
      </LI>
    </TP>
  );
}

export default function ProbabilitesActivites() {
  return (
    <Activites title="Probabilités" lang="fr">
      <De />
      <Cartes />
      <Classe />
      <JeuxAGratter />
    </Activites>
  );
}
