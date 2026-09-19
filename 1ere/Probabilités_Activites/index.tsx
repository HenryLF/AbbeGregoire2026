import {
  Call,
  Doc,
  Document,
  Exercice,
  Options,
  QR,
  SubQuestions,
  TP,
} from "@components";
import {
  Block,
  BlockBox,
  DotLine,
  Entry,
  H1,
  LaTeX,
  LI,
  PageBreak,
  Table,
  UL,
} from "@weasyprint-tsx/ui";
import type { ComponentChild } from "preact";
import "./index.css";

/* ---------------------------------------------------------------------------
   Activité 1 — « Jeux de dé »
   --------------------------------------------------------------------------- */

function RegleTable({
  title,
  s1,
  s2,
  issue,
}: {
  title: string;
  s1: number;
  s2: number;
  issue: string;
}) {
  const parties = [
    "1re partie",
    "2e partie",
    "3e partie",
    "4e partie",
    "5e partie",
  ];
  const vide = Array.from({ length: 5 }, () => "");
  return (
    <Table
      className=" w-9/10 mx-auto"
      orientation="row"
      contentClass="min-w-5"
      cellFontSize="11"
      headerFontSize="13"
    >
      <Entry content={parties} cellBg="var(--wsx--table--header-color)">
        {title}
      </Entry>
      <Entry content={vide}>Nombre de fois où la somme est « {s1} »</Entry>
      <Entry content={vide}>Nombre de fois où la somme est « {s2} »</Entry>
      <Entry
        content={Array.from({ length: 5 }, () => (
          <>▢</>
        ))}
      >
        {issue}
      </Entry>
    </Table>
  );
}

// Case barrée de la moitié inférieure du tableau des sommes (combinaisons
// déjà dénombrées dans la moitié supérieure).
function Crossed() {
  return (
    <svg className="crossed" viewBox="0 0 20 20" preserveAspectRatio="none">
      <rect width="20" height="20" fill="#b2c3eb98" />
      <line x1="0" y1="20" x2="20" y2="0" stroke="black" stroke-width="0.4" />
    </svg>
  );
}

// Tableau des sommes possibles avec deux dés : seule la moitié supérieure est à
// compléter, la moitié inférieure (doublons) est barrée.
function SommesTable() {
  const des = [1, 2, 3, 4, 5, 6];
  const donnees: Record<string, number> = { "1-1": 2, "1-2": 3, "2-2": 4 };
  return (
    <Table
      className="dice-grid w-full mx-auto"
      headerClass="min-w-5"
      contentClass="h-8! w-8! text-center aspect-square"
    >
      {[
        <Entry content={des} cellBg="var(--wsx--table--header-color)">
          +
        </Entry>,
        ...des.map((col) => (
          <Entry
            content={des.map((row) =>
              col < row ? <Crossed /> : (donnees[`${row}-${col}`] ?? ""),
            )}
          >
            {col}
          </Entry>
        )),
      ]}
    </Table>
  );
}

// Dénombrement des combinaisons donnant chaque somme, à remplir d'après le
// tableau des sommes.
function CombinaisonsTable() {
  const sommes = Array.from({ length: 11 }, (_, k) => k + 2);
  return (
    <Table
      className="combinaisons w-full text-xs"
      cellFontSize="11px"
      headerClass="px-5"
      contentClass=" min-w-1/15"
      orientation="row"
    >
      <Entry
        content={sommes}
        cellBg="var(--wsx--table--header-color)"
        contentClass="text-center"
      >
        Somme
      </Entry>
      <Entry content={sommes.map(() => "")}>
        Nombre de combinaisons différentes possibles
      </Entry>
    </Table>
  );
}

function JeuxDeDe() {
  return (
    <TP title="Jeux de dés">
      <Doc className="text-[10px]">
        Rafaël et Louis jouent aux dés. Rafaël est fort en maths, Louis pas.
        Rafaël fixe les règles suivantes. « ..on lance chacun quinze fois deux
        dés et on fait la somme des points qu’ils donnent. Si la somme est sept,
        je marque un point, si la somme est quatre, tu marques un point. Le
        vainqueur est celui qui a marqué le plus de points à l’issue des trente
        lancers de dés ». Ils font en tout cinq parties et Louis part furieux en
        s’écriant que Rafaël triche. Louis raconte ce qui s’est passé à son
        professeur de maths préféré … qui sourit, puis il lui dit : «.. retourne
        jouer avec Rafaël mais maintenant, tu lui dis que tu gagnes lorsque la
        somme fait 6 et qu’il gagne lui lorsque la somme fait 3 ». Louis propose
        ces nouvelles règles à Rafaël, qui ne veut pas jouer car il dit qu’il
        est presque sûr de perdre.
      </Doc>

      <div className="float-right">
        <QR
          href="https://1drv.ms/x/c/3c96ca2a0c5556d2/IQD_e_1gJxAkQ6GrXksMqb_hAco4-45Y6xzEjr0aYTRPsps?e=lENfgn"
          className={"w-[2cm]"}
        >
          Fichier Excel
        </QR>
      </div>

      <SubQuestions count={1}>
        <LI>
          Pour un dé équilibré, la probabilité d’obtenir chaque face est-elle
          identique ?
          <Options columns={2}>
            {"OUI"}
            {"NON"}
          </Options>
        </LI>
        <LI>
          Pour l’ensemble d’une partie, combien y a-t-il eu de lancers de deux
          dés ?
        </LI>
        <Options columns={4}>
          {"2"}
          {"15"}
          {"30"}
          {"60"}
        </Options>
      </SubQuestions>

      <LI value={2}>
        On souhaite dans un premier temps tester les deux scénarios
        expérimentalement à l’aide du tableur.
      </LI>
      <SubQuestions count={2}>
        <LI>
          Quelle formule permet de simuler la somme d’un lancer de deux dés ?
        </LI>
        <Options columns={2} className="text-xs">
          {"=2*ALEA.ENTRE.BORNES(1;6)"}
          {"=ALEA.ENTRE.BORNES(1;6)+ALEA.ENTRE.BORNES(1;6)"}
          {"=ALEA.ENTRE.BORNES(1;12)"}
          {"=ALEA.ENTRE.BORNES(1;6)"}
        </Options>
        <LI>
          Ouvrir le fichier Excel et programmer les cellules B3 à F8 pour
          simuler les tirages.
        </LI>
        <LI>
          Programmer la cellule E10 avec la formule « =NB.SI(B3:F8;7) », puis
          programmer la cellule E12.
        </LI>
        <Call>Faire vérifier la simulation des tirages</Call>
        <LI>
          La touche « F9 » permet de relancer les tirages. Simuler cinq parties
          et noter les résultats obtenus :
        </LI>
        <RegleTable title="PREMIERE REGLE" s1={7} s2={4} issue="Rafaël gagne" />
        <LI>
          Programmer la « feuille n°2 » du tableur pour simuler une partie avec
          la deuxième règle.
        </LI>
        <Call>
          Faire vérifier la simulation des tirages, puis simuler cinq parties et
          noter les résultats obtenus :
        </Call>
        <RegleTable title="DEUXIEME REGLE" s1={6} s2={3} issue="Rafaël perd" />
        <LI>
          Les simulations expérimentales confirment-elles la situation décrite ?
          <Options columns={2}>
            {"OUI"}
            {"NON"}
          </Options>
        </LI>
      </SubQuestions>

      <SubQuestions count={3}>
        <BlockBox align="top">
          <SommesTable />
          <Block ratio={2}>
            <LI>
              Effectuer ci-dessous toutes les sommes qu’il est possible
              d’obtenir, puis dénombrer les combinaisons.
            </LI>
            <CombinaisonsTable />
            <LI>Conclure quant à la stratégie adoptée par Rafaël.</LI>
            <DotLine count={2} />
          </Block>
        </BlockBox>
      </SubQuestions>
      <DotLine />
    </TP>
  );
}

/* ---------------------------------------------------------------------------
   Activité 2 — « Représentations graphiques »
   --------------------------------------------------------------------------- */

// Diagramme de Venn vierge : l'ensemble des 80 ouvriers, le chantier Nord et le
// chantier Sud. `labelled` ajoute les légendes de l'énoncé.
function Venn({ labelled = false }: { labelled?: boolean }) {
  return (
    <svg className="venn" viewBox="0 0 200 120">
      <ellipse
        cx="100"
        cy="60"
        rx="94"
        ry="54"
        fill="none"
        stroke="black"
        stroke-width="1.5"
      />
      <ellipse
        cx="88"
        cy="68"
        rx="58"
        ry="30"
        fill="none"
        stroke={"#cc5803"}
        stroke-width="1.5"
        transform="rotate(-10 88 68)"
      />
      <ellipse
        cx="132"
        cy="52"
        rx="36"
        ry="26"
        fill="none"
        stroke={"#07a0c3"}
        stroke-width="1.5"
      />
      {labelled && (
        <>
          <text x="52" y="72" font-size="11" fill="#cc5803">
            Nord
          </text>
          <text x="135" y="42" font-size="11" fill="#07a0c3">
            Sud
          </text>
          <text x="50" y="24" font-size="11">
            80 ouvriers
          </text>
        </>
      )}
    </svg>
  );
}

function EvenementsTable({
  evenements,
}: {
  evenements: { nom: string; texte: string; proba: string }[];
}) {
  return (
    <Table
      className="evenements w-full my-1"
      contentClass="align-top min-w-1/4"
    >
      {evenements.map(({ nom, texte, proba }) => (
        <Entry
          content={[
            <Venn />,
            <div>
              <LaTeX tex={`p(${proba}) = `} /> <DotLine inline width="2cm" />
            </div>,
          ]}
        >
          <div>
            Événement <LaTeX tex={nom} />
          </div>
          <div className="font-normal text-xs">{texte}</div>
        </Entry>
      ))}
    </Table>
  );
}

function RepresentationsGraphiques() {
  return (
    <TP title="Représentations graphiques">
      <BlockBox align="middle" gap="3mm">
        <Block ratio={1.6}>
          <Doc>
            Une entreprise de travaux publics est constituée de 80 ouvriers.
            Certains ont travaillé sur un gros chantier découpé en deux tranches
            : le chantier Nord et le chantier Sud. 34 ouvriers de ces ouvriers
            ont travaillé sur le chantier Nord, 25 ont travaillé sur le chantier
            Sud et une équipe de 12 ouvriers a travaillée sur les deux.
          </Doc>
        </Block>
        <Block>
          <Venn labelled />
        </Block>
      </BlockBox>

      <LI>
        Le diagramme ci-contre schématise la situation. Combien d’ouvriers n’ont
        travaillés <strong>QUE</strong> sur le chantier Sud ?{" "}
      </LI>
      <DotLine count={2} />
      <LI>
        On choisit au hasard un ouvrier de l’entreprise. Pour chacun des sept
        événements suivants, colorier la partie du diagramme correspondante,
        puis attribuer les probabilités suivantes :
      </LI>
      <div className="text-center my-2">
        {[
          "\\frac{33}{80}",
          "\\frac{17}{40}",
          "\\frac{13}{80}",
          "\\frac{5}{16}",
          "\\frac{47}{80}",
          "\\frac{3}{20}",
          "\\frac{11}{16}",
        ].map((tex) => (
          <span className="proba-chip">
            <LaTeX tex={tex} />
          </span>
        ))}
      </div>
      <EvenementsTable
        evenements={[
          {
            nom: "N",
            texte: "Ouvrier qui a travaillé sur le chantier Nord",
            proba: "N",
          },
          {
            nom: "S",
            texte: "Ouvrier qui a travaillé sur le chantier Sud",
            proba: "S",
          },
          {
            nom: "\\overline{S}",
            texte: "Ouvrier qui n’a pas travaillé sur le chantier Sud",
            proba: "\\overline{S}",
          },
          {
            nom: "C",
            texte: "Ouvrier qui a uniquement travaillé sur le chantier Nord",
            proba: "C",
          },
        ]}
      />
      <EvenementsTable
        evenements={[
          {
            nom: "D",
            texte: "Ouvrier qui a uniquement travaillé sur le chantier Sud",
            proba: "D",
          },
          {
            nom: "N \\cap S",
            texte: "Ouvrier qui a travaillé sur les chantiers Nord et Sud",
            proba: "N \\cap S",
          },
          {
            nom: "N \\cup S",
            texte: "Ouvrier qui a travaillé sur le chantier Nord ou Sud",
            proba: "N \\cup S",
          },
          {
            nom: "\\overline{N \\cup S}",
            texte:
              "Ouvrier qui n’a travaillé ni sur le chantier Nord ni sur le Sud",
            proba: "\\overline{N \\cup S}",
          },
        ]}
      />

      <LI>
        Conjecturer une relation générale de calcul de la probabilité{" "}
        <LaTeX tex="p(\overline{S})" /> en reliant avec la bonne relation :
      </LI>
      <BlockBox align="middle" gap="5mm">
        <Block />

        <Block>
          <LaTeX tex="p(\overline{S})" /> ▢
        </Block>
        <Block />
        <Block>
          <Options columns={1}>
            <LaTeX tex="= p(N) \times p(S)" />
            <LaTeX tex="= p(N) + p(S)" />
            <LaTeX tex="= 1 - p(S)" />
          </Options>
        </Block>
        <Block />
      </BlockBox>
    </TP>
  );
}

/* ---------------------------------------------------------------------------
   Activité 3 — « Utilisation d’un tableau croisé pour calculer des
   probabilités »
   --------------------------------------------------------------------------- */

// Tableau croisé générique : une colonne d'en-têtes de ligne, puis une colonne
// par modalité. `cells[ligne][colonne]` pré-remplit les cases données.
function TableauCroise({
  colonnes,
  lignes,
  cells = [],
  className = "",
}: {
  colonnes: ComponentChild[];
  lignes: ComponentChild[];
  cells?: ComponentChild[][];
  className?: string;
}) {
  return (
    <Table
      className={`table-fixed mx-auto ${className}`}
      contentClass="h-7! text-center"
      cellFontSize="11"
      headerFontSize="12"
    >
      {[
        <Entry content={lignes} cellBg="var(--wsx--table--header-color)">
          {""}
        </Entry>,
        ...colonnes.map((col, j) => (
          <Entry content={lignes.map((_, i) => cells[i]?.[j] ?? "")}>
            {col}
          </Entry>
        )),
      ]}
    </Table>
  );
}

const M = <LaTeX tex="M" />;
const NonM = <LaTeX tex="\overline{M}" />;
const F = <LaTeX tex="F" />;
const NonF = <LaTeX tex="\overline{F}" />;

function TableauCroiseCasques() {
  return (
    <TP title="Utilisation d’un tableau croisé pour calculer des probabilités">
      <Doc className="text-[10px]">
        Une usine fabrique des casques de chantier. Deux défauts sont possibles
        lors de la fabrication : un défaut de moulage du casque et un défaut au
        niveau de la fixation. Lors du contrôle qualité, on teste un lot de 1
        000 casques de chantier pris au hasard dans la production. On obtient
        les résultats suivants :
        <UL>
          <LI>20 casques ont un défaut de moulage ;</LI>
          <LI>30 casques ont un défaut de fixation ;</LI>
          <LI>10 casques ont les deux types de défaut.</LI>
        </UL>
        On prélève au hasard un casque parmi les 1 000 testés et on considère
        les événements suivants :
        <UL>
          <LI>
            <LaTeX tex="M" /> : « Le casque a un défaut de moulage » ;
          </LI>
          <LI>
            <LaTeX tex="F" /> : « Le casque a un défaut de fixation ».
          </LI>
        </UL>
      </Doc>

      <SubQuestions count={1}>
        <LI>
          Traduire par une phrase l’événement <LaTeX tex="\overline{M}" /> :
        </LI>
        <DotLine />
        <LI>
          Traduire par une phrase l’événement <LaTeX tex="\overline{F}" /> :
        </LI>
        <DotLine />
      </SubQuestions>

      <LI value={2}>Compléter le tableau croisé suivant :</LI>
      <TableauCroise
        className="w-8/10"
        colonnes={[
          <>
            {M}
            <div className="font-normal text-[9px]">A un défaut de moulage</div>
          </>,
          NonM,
          "Total",
        ]}
        lignes={[
          <>
            {F}
            <div className="font-normal text-[9px]">
              A un défaut de fixation
            </div>
          </>,
          NonF,
          "Total",
        ]}
      />
      <Call>Faire vérifier le tableau croisé</Call>

      <SubQuestions count={3}>
        <LI>
          Colorier les deux cases du 1<sup>er</sup> tableau ci-dessous qui
          correspondent à l’événement <LaTeX tex="M" />, puis les deux cases du
          2<sup>e</sup> tableau qui correspondent à l’événement{" "}
          <LaTeX tex="F" />.
        </LI>
        <BlockBox gap="1cm" className="my-2">
          <Block>
            <TableauCroise
              className="w-full"
              colonnes={[M, NonM]}
              lignes={[F, NonF]}
            />
          </Block>
          <Block>
            <TableauCroise
              className="w-full"
              colonnes={[M, NonM]}
              lignes={[F, NonF]}
            />
          </Block>
        </BlockBox>

        <BlockBox align="middle" gap="1cm">
          <Block ratio={1.3}>
            <LI>
              Compléter chacune des cases blanches du tableau ci-contre avec les
              étiquettes suivantes :
            </LI>
            <div className="text-center my-2">
              {[
                "M \\cap F",
                "\\overline{M} \\cap \\overline{F}",
                "\\overline{M} \\cap F",
                "M \\cap \\overline{F}",
              ].map((tex) => (
                <span className="proba-chip">
                  <LaTeX tex={tex} />
                </span>
              ))}
            </div>
          </Block>
          <Block>
            <TableauCroise
              className="w-full"
              colonnes={[M, NonM]}
              lignes={[F, NonF]}
            />
          </Block>
        </BlockBox>

        <BlockBox align="middle" gap="1cm">
          <Block ratio={1.3}>
            <LI>
              Compléter le tableau ci-contre en coloriant, parmi les cases
              blanches, celles qui correspondent à l’événement{" "}
              <LaTeX tex="M \cup F" />.
            </LI>
          </Block>
          <Block>
            <TableauCroise
              className="w-full"
              colonnes={[M, NonM]}
              lignes={[F, NonF]}
            />
          </Block>
        </BlockBox>
      </SubQuestions>

      <SubQuestions count={4}>
        <LI>
          Calculer les probabilités <LaTeX tex="p(M)" /> et <LaTeX tex="p(F)" />{" "}
          :
        </LI>
        <BlockBox className="answers">
          <Block>
            <LaTeX tex="p(M) = " />
            <DotLine inline width="4cm" />
          </Block>
          <Block>
            <LaTeX tex="p(F) = " />
            <DotLine inline width="4cm" />
          </Block>
        </BlockBox>
        <LI>
          Définir par une phrase l’événement <LaTeX tex="M \cap F" /> :
        </LI>
        <DotLine />
        <LI>
          Calculer la probabilité <LaTeX tex="p(M \cap F)" /> :
        </LI>
        <DotLine />
      </SubQuestions>
    </TP>
  );
}

/* ---------------------------------------------------------------------------
   Activité 5 — « Probabilités sur le chantier »
   --------------------------------------------------------------------------- */

function ProbabilitesSurLeChantier() {
  return (
    <TP title="Probabilités sur le chantier">
      <LI value={1}>
        <strong className="underline text-black!">Défauts de masques</strong>
      </LI>
      <Doc className="text-[9px]">
        Pour se protéger sur un chantier, on peut porter un masque devant la
        bouche et le nez. Ces masques sont fabriqués en grande quantité et
        peuvent présenter deux défauts : un défaut de dimension et un défaut de
        fixation de l’élastique. On considère que la machine qui produit ces
        masques a besoin d’un réglage si plus de 10 % des masques ont au moins
        un défaut. Sur 2 000 masques fabriqués, le contrôle qualité montre que :
        <UL>
          <LI>80 masques présentent un défaut de dimension ;</LI>
          <LI>100 masques présentent un défaut de fixation de l’élastique ;</LI>
          <LI>4 masques présentent les 2 défauts.</LI>
        </UL>
        On tire un masque au hasard parmi les 2 000 masques fabriqués. On note{" "}
        <LaTeX tex="D" /> l’événement « le masque présente un défaut de
        dimension » et <LaTeX tex="E" /> l’événement « le masque présente un
        défaut de fixation de l’élastique ».
      </Doc>

      <SubQuestions count={1}>
        <LI>
          Définir par une phrase l’événement <LaTeX tex="\overline{D}" /> :
        </LI>
        <DotLine />
        <LI>
          Définir par une phrase l’événement <LaTeX tex="D \cap E" /> :
        </LI>
        <DotLine />
        <LI>Calculer les probabilités suivantes :</LI>
        <BlockBox className="answers">
          <Block>
            <LaTeX tex="p(D) = " />
            <DotLine inline width="4cm" />
          </Block>
          <Block>
            <LaTeX tex="p(\overline{D}) = " />
            <DotLine inline width="4cm" />
          </Block>
        </BlockBox>
        <BlockBox align="middle" gap="5mm">
          <Block>
            <LI>Compléter le tableau des effectifs ci-contre.</LI>
            <LI>
              Conclure si la machine fabriquant les masques a besoin d’un
              réglage.
            </LI>
            <DotLine count={2} />
          </Block>
          <Block>
            <TableauCroise
              className="w-full"
              colonnes={[
                <LaTeX tex="D" />,
                <LaTeX tex="\overline{D}" />,
                "Total",
              ]}
              lignes={[
                <LaTeX tex="E" />,
                <LaTeX tex="\overline{E}" />,
                "Total",
              ]}
              cells={[
                ["", "", "100"],
                ["", "", ""],
                ["80", "", "2 000"],
              ]}
            />
          </Block>
        </BlockBox>
      </SubQuestions>
      <LI value={2}>
        <strong className="underline text-black!">Géotextile</strong>
      </LI>
      <Doc className="text-[9px]">
        Une entreprise produit des rouleaux de géotextile. À la sortie de la
        chaîne de fabrication, chaque rouleau peut présenter deux défauts : le
        défaut de résistance mécanique ou le défaut de perméabilité. Lors d’un
        contrôle qualité, on teste un lot de 800 rouleaux prélevés au hasard
        dans la production et on constate que :
        <UL>
          <LI>16 rouleaux présentent le défaut de résistance mécanique ;</LI>
          <LI>12 rouleaux présentent le défaut de perméabilité ;</LI>
          <LI>3 rouleaux présentent les 2 défauts.</LI>
        </UL>
      </Doc>

      <SubQuestions count={2}>
        <LI>Compléter le tableau ci-dessous des résultats du contrôle.</LI>
        <TableauCroise
          className="w-full text-[8px]"
          colonnes={[
            "Rouleau présentant le défaut de résistance mécanique",
            "Rouleau ne présentant pas le défaut de résistance mécanique",
            "Total",
          ]}
          lignes={[
            "Rouleau présentant le défaut de perméabilité",
            "Rouleau ne présentant pas le défaut de perméabilité",
            "Total",
          ]}
          cells={[
            ["", "", ""],
            ["", "", ""],
            ["", "", "800"],
          ]}
        />
        <Call>Faire vérifier le tableau</Call>
        <LI>
          On prélève un rouleau au hasard parmi les 800 rouleaux contrôlés et on
          considère les événements suivants :
          <UL className="text-xs">
            <LI>
              événement <LaTeX tex="R" /> : « le rouleau prélevé présente le
              défaut de résistance mécanique » ;
            </LI>
            <LI>
              événement <LaTeX tex="P" /> : « le rouleau prélevé présente le
              défaut de perméabilité ».
            </LI>
          </UL>
          Calculer les probabilités suivantes :
        </LI>
        <BlockBox className="answers">
          <Block>
            <LaTeX tex="p(R) = " />
            <DotLine inline width="4cm" />
          </Block>
          <Block>
            <LaTeX tex="p(P) = " />
            <DotLine inline width="4cm" />
          </Block>
        </BlockBox>
        <LI>
          Définir par une phrase l’événement <LaTeX tex="R \cap P" /> :
        </LI>
        <DotLine />
        <LI>
          Calculer la probabilité <LaTeX tex="p(R \cap P)" /> :
        </LI>
        <DotLine />
      </SubQuestions>
      <LI value={3}>
        <strong className="underline text-black!">Racle VRD</strong>
      </LI>
      <Doc className="text-[10px]">
        La racle VRD est une racle polyvalente pour répandre, régler et racler
        le bitume, le béton, etc. Elle est composée d’une lame pliée en acier et
        d’un manche en bois. Deux types de défauts ont été constatés sur un
        modèle de racle VRD fabriqué par un fournisseur.
        <UL>
          <LI>
            défaut de type <LaTeX tex="M" /> : défaut sur le manche ;
          </LI>
          <LI>
            défaut de type <LaTeX tex="L" /> : défaut sur la lame.
          </LI>
        </UL>
        Dans un lot de 3 500 racles VRD testé, on a constaté que : 17 racles VRD
        présentaient le défaut de type <LaTeX tex="M" />, 21 racles VRD
        présentaient le défaut de type <LaTeX tex="L" /> et 3 racles VRD
        présentaient les deux types de défaut.
      </Doc>

      <SubQuestions count={3}>
        <LI>Compléter le tableau croisé des effectifs.</LI>
        <TableauCroise
          className="w-8/10"
          colonnes={[M, NonM, "Total"]}
          lignes={[<LaTeX tex="L" />, <LaTeX tex="\overline{L}" />, "Total"]}
          cells={[
            ["", "", ""],
            ["", "", ""],
            ["", "", "3 500"],
          ]}
        />
        <Call>Faire vérifier le tableau</Call>
        <LI>
          On prélève au hasard une racle dans le stock testé. On considère les
          événements suivants :
          <UL>
            <LI>
              <LaTeX tex="M" /> : « la racle VRD présente le défaut de type{" "}
              <LaTeX tex="M" /> » ;
            </LI>
            <LI>
              <LaTeX tex="L" /> : « la racle VRD présente le défaut de type{" "}
              <LaTeX tex="L" /> » ;
            </LI>
            <LI>
              <LaTeX tex="A" /> : « la racle VRD ne présente aucun défaut ».
            </LI>
          </UL>
          Calculer la probabilité <LaTeX tex="p(M)" /> à <LaTeX tex="10^{-4}" />{" "}
          près :
        </LI>
        <DotLine count={2} />
        <LI>
          Calculer la probabilité <LaTeX tex="p(L)" /> :
        </LI>
        <DotLine count={2} />
        <LI>
          Définir par une phrase l’événement <LaTeX tex="M \cap L" /> :
        </LI>
        <DotLine />
        <LI>
          Calculer la probabilité <LaTeX tex="p(M \cap L)" /> à{" "}
          <LaTeX tex="10^{-4}" /> près :
        </LI>
        <DotLine count={2} />
        <LI>
          Calculer la probabilité <LaTeX tex="p(M \cup L)" /> :
        </LI>
        <DotLine count={2} />
        <LI>
          Utiliser la probabilité <LaTeX tex="p(M \cup L)" /> pour déterminer la
          probabilité <LaTeX tex="p(A)" /> :
        </LI>
        <DotLine count={2} />
      </SubQuestions>
    </TP>
  );
}

/* ---------------------------------------------------------------------------
   Activité 6 — « Défaut de canalisations »
   --------------------------------------------------------------------------- */

function DefautDeCanalisations() {
  return (
    <TP title="Défaut de canalisations">
      <Doc className="text-[10px]">
        Deux ateliers, notés 1 et 2, d’une même entreprise produisent chaque
        jour respectivement 1 000 et 800 canalisations d’un même modèle. 2 % des
        canalisations produites par l’atelier 1 et 3 % des canalisations
        produites par l’atelier 2 sont défectueuses.
      </Doc>

      <LI value={1}>
        Compléter le tableau suivant qui décrit la production journalière en
        stock.
      </LI>
      <TableauCroise
        className="w-9/10 text-[9px]"
        colonnes={[
          "canalisations défectueuses",
          "canalisations non défectueuses",
          "Total",
        ]}
        lignes={[
          "canalisations produites par l’atelier 1",
          "canalisations produites par l’atelier 2",
          "Total",
        ]}
        cells={[
          ["", "", ""],
          ["", "", ""],
          ["", "", "1 800"],
        ]}
      />
      <Call>Faire vérifier le tableau</Call>

      <LI value={2}>À partir du tableau précédent, déterminer :</LI>
      <SubQuestions count={2}>
        <LI className="answers">
          La fréquence des canalisations défectueuses en pourcentage, arrondie à{" "}
          <LaTeX tex="10^{-2}" /> près :
        </LI>
        <DotLine />
        <BlockBox align="middle" gap="5mm">
          <Block ratio={1.3}>
            <LI>
              Compléter le tableau de fréquences dites « conditionnelles » en
              pourcentage ci-contre, arrondies à <LaTeX tex="10^{-2}" /> près.
              <UL className="text-xs">
                <LI>
                  <LaTeX tex="f_1" /> est la fréquence des canalisations
                  provenant de l’atelier 1 par rapport à celles qui sont
                  défectueuses.
                </LI>
                <LI>
                  <LaTeX tex="f_2" /> est la fréquence des canalisations
                  provenant de l’atelier 2 par rapport à celles qui sont
                  défectueuses.
                </LI>
              </UL>
            </LI>
          </Block>
          <Block>
            <TableauCroise
              className="w-full text-[9px]"
              colonnes={["fréquence de canalisations défectueuses"]}
              lignes={[
                "canalisations produites par l’atelier 1",
                "canalisations produites par l’atelier 2",
                "Total",
              ]}
              cells={[
                [
                  <>
                    <LaTeX tex="f_1 = " />
                    <DotLine inline width="2cm" />
                  </>,
                ],
                [
                  <>
                    <LaTeX tex="f_2 = " />
                    <DotLine inline width="2cm" />
                  </>,
                ],
                ["100 %"],
              ]}
            />
          </Block>
        </BlockBox>
      </SubQuestions>
      <Call>
        Faire vérifier les fréquences conditionnelles <LaTeX tex="f_1" /> et{" "}
        <LaTeX tex="f_2" />
      </Call>

      <BlockBox align="middle" gap="5mm">
        <Block ratio={1.4}>
          <LI value={3}>
            Un jour donné, on prélève au hasard une canalisation parmi les 1 800
            produites par les deux ateliers. Toutes les canalisations ont la
            même probabilité d’être choisies. On considère les événements
            suivants :
            <UL className="text-xs">
              <LI>
                <LaTeX tex="A_1" /> : « la canalisation prélevée provient de
                l’atelier 1 » ;
              </LI>
              <LI>
                <LaTeX tex="A_2" /> : « la canalisation prélevée provient de
                l’atelier 2 » ;
              </LI>
              <LI>
                <LaTeX tex="D" /> : « la canalisation prélevée est défectueuse
                ».
              </LI>
            </UL>
          </LI>
        </Block>
        <Block>
          <TableauCroise
            className="w-full"
            colonnes={[
              <LaTeX tex="D" />,
              <LaTeX tex="\overline{D}" />,
              "Total",
            ]}
            lignes={[
              <LaTeX tex="A_1" />,
              <LaTeX tex="A_2" />,
              <strong>Total</strong>,
            ]}
            cells={[
              ["20", "980", "1 000"],
              ["24", "776", "800"],
              ["44", "1 756", "1 800"],
            ]}
          />
        </Block>
      </BlockBox>
      <div className="italic font-bold text-center my-1">
        Les résultats suivants seront tous donnés sous forme d’une fraction
        irréductible.
      </div>

      <SubQuestions count={3}>
        <LI className="answers">
          Déterminer à partir du tableau la probabilité <LaTeX tex="p(D)" /> :{" "}
          <LaTeX tex="p(D) = " />
          <DotLine inline width="5cm" />
        </LI>
        <LI>
          On note <LaTeX tex="p_D(A_1)" /> la probabilité d’avoir{" "}
          <LaTeX tex="A_1" /> sachant que <LaTeX tex="D" /> est réalisé. Cette
          probabilité est dite « <strong>probabilité conditionnelle</strong> ».
          Montrer, à partir du tableau, que{" "}
          <LaTeX tex="p_D(A_1) = \frac{5}{11}" />.
        </LI>
        <DotLine />
        <LI className="answers">
          Déterminer à partir du tableau la probabilité{" "}
          <LaTeX tex="p(A_1 \cap D)" /> : <LaTeX tex="p(A_1 \cap D) = " />
          <DotLine inline width="4cm" />
        </LI>
        <LI className="answers">
          Calculer le rapport <LaTeX tex="\frac{p(A_1 \cap D)}{p(D)}" /> :{" "}
          <DotLine inline width="6cm" />
        </LI>
        <LI>
          Conjecturer une relation entre les trois probabilités{" "}
          <LaTeX tex="p(D)" />, <LaTeX tex="p_D(A_1)" /> et{" "}
          <LaTeX tex="p(A_1 \cap D)" /> :
        </LI>
        <Options columns={2} className="text-xs">
          <LaTeX tex="p(D) = p_D(A_1) \times p(A_1 \cap D)" />
          <LaTeX tex="p_D(A_1) = p(D) \times p(A_1 \cap D)" />
          <LaTeX tex="p_D(A_1) = \frac{p(A_1 \cap D)}{p(D)}" />
        </Options>
        <LI>
          Soit la probabilité <LaTeX tex="p_{\overline{D}}(A_2)" />, exprimer
          par une phrase la signification de cette probabilité :
        </LI>
        <BlockBox className={"text-[9px]"}>
          <Block ratio={1.5}>
            <Options columns={1}>
              <>
                C’est la probabilité d’avoir <LaTeX tex="\overline{D}" />{" "}
                sachant que <LaTeX tex="A_2" /> est réalisé
              </>
              <>
                C’est la probabilité d’avoir <LaTeX tex="A_2" /> sachant que{" "}
                <LaTeX tex="\overline{D}" /> est réalisé
              </>
            </Options>
          </Block>
          <Options columns={1}>
            <>
              C’est la probabilité d’avoir <LaTeX tex="\overline{D}" />
            </>
            <>
              C’est la probabilité d’avoir <LaTeX tex="A_2" />
            </>
          </Options>
        </BlockBox>
        <LI className="answers">
          Déterminer à partir du tableau la probabilité{" "}
          <LaTeX tex="p_{\overline{D}}(A_2)" /> :{" "}
          <LaTeX tex="p_{\overline{D}}(A_2) = " />
          <DotLine inline width="4cm" />
        </LI>
      </SubQuestions>
      <Call>
        Faire vérifier la probabilité conditionnelle{" "}
        <LaTeX tex="p_{\overline{D}}(A_2)" />
      </Call>
    </TP>
  );
}

/* ---------------------------------------------------------------------------
   Exercices (page 8 du sujet)
   --------------------------------------------------------------------------- */

function RepartitionSalariale() {
  return (
    <Exercice title="Répartition salariale">
      <BlockBox align="middle" gap="5mm">
        <Block ratio={1.3}>
          <div className="text">
            Le tableau ci-contre donne les résultats d’une étude concernant le
            statut des 90 salariés d’une entreprise en fonction du sexe de cette
            personne.
          </div>
        </Block>
        <Block>
          <TableauCroise
            className="w-full"
            colonnes={["Cadre", "Employé", "Total"]}
            lignes={["Femme", "Homme", "Total"]}
            cells={[
              ["13", "16", ""],
              ["", "36", ""],
              ["", "", ""],
            ]}
          />
        </Block>
      </BlockBox>
      <LI value={1}>Compléter le tableau.</LI>
      <LI value={2}>
        On interroge au hasard une personne parmi les 90 salariés. Calculer la
        probabilité que ce soit une femme <strong>sachant que</strong> ce
        salarié est un cadre.
      </LI>
      <DotLine count={4} />
    </Exercice>
  );
}

function Depistage() {
  return (
    <Exercice title="Dépistage">
      <Doc className="text-[10px]">
        Dans un village de 10 000 habitants, suite à un certain nombre de cas
        d’une maladie qui touche habituellement 0,1 % de la population, un
        dépistage systématique est organisé. L’information donnée est « Si vous
        êtes malade, le test sera positif dans 90 % des cas ; si vous n’êtes pas
        malade, le test sera négatif dans 97 % des cas ». On considère les
        événements <LaTeX tex="M" /> : « la personne choisie est malade » et{" "}
        <LaTeX tex="T" /> : « le test est positif ». Vous passez le test et le
        résultat est positif. Vous vous demandez si vous êtes malade.
      </Doc>
      <BlockBox align="middle" gap="5mm">
        <Block ratio={1.4}>
          <LI value={1}>
            Sans faire de calcul, estimer la probabilité que vous soyez vraiment
            malade parmi les propositions données :
          </LI>
          <Options columns={1} indent={"5mm"}>
            {"plus de 90 % de « chance »"}
            {"plus d’une « chance » sur deux"}
            {"moins de 10 % de « chance »"}
          </Options>
        </Block>

        <Block>
          <TableauCroise
            className="w-full"
            colonnes={[
              <LaTeX tex="M" />,
              <LaTeX tex="\overline{M}" />,
              "Total",
            ]}
            lignes={[<LaTeX tex="T" />, <LaTeX tex="\overline{T}" />, "Total"]}
            cells={[
              ["", "", ""],
              ["", "", ""],
              ["", "", "10 000"],
            ]}
          />
        </Block>
      </BlockBox>
      <LI value={2}>Compléter le tableau des effectifs ci-contre.</LI>
      <LI value={3}>
        Calculer la probabilité que la personne choisie ne soit pas malade.
      </LI>
      <DotLine count={2} />
      <LI value={4}>
        Calculer la probabilité que le test soit négatif sachant que la personne
        est malade.
      </LI>
      <DotLine count={2} />
      <LI value={5}>
        Calculer la probabilité d’être malade sachant que la personne a un test
        négatif.
      </LI>
      <DotLine count={2} />
      <LI value={6}>Calculer la probabilité d’avoir un test positif.</LI>
      <DotLine count={2} />
      <LI value={7}>
        Calculer la probabilité d’être malade sachant que la personne a un test
        positif.
      </LI>
      <DotLine count={2} />
      <LI value={8}>
        Confirmer ou infirmer la réponse faite à la question <em>1.</em>
      </LI>
      <DotLine count={2} />
    </Exercice>
  );
}

function JeuxVideos() {
  return (
    <Exercice title="Jeux vidéos">
      <BlockBox align="middle" gap="5mm">
        <Block ratio={1.3}>
          <div className="text">
            Un site de vente propose 2 500 jeux vidéo dont certains sont des
            jeux pour console, le reste étant des jeux pour ordinateur. Les jeux
            sont rangés en deux catégories : les jeux d’action et les autres
            jeux. Le tableau ci-contre donne la répartition.
            <br />
            On choisit par hasard un des jeux proposés sur le site.
          </div>
        </Block>
        <Block>
          <TableauCroise
            className="w-full text-[10px]"
            colonnes={["Jeux pour console", "Jeux pour ordinateur", "Total"]}
            lignes={["Jeux d’action", "Autres jeux", "Total"]}
            cells={[
              ["434", "282", "716"],
              ["886", "898", "1 784"],
              ["1 320", "1 180", "2 500"],
            ]}
          />
        </Block>
      </BlockBox>
      <div>
        On note les événements :
        <UL className={"inline-block! align-top"}>
          <LI>
            <LaTeX tex="O" /> : « Le jeu choisi est un jeu pour ordinateur » ;
          </LI>
          <LI>
            <LaTeX tex="A" /> : « Le jeu choisi est un jeu d’action ».
          </LI>
        </UL>
      </div>

      <SubQuestions count={1}>
        <LI>
          Sachant que le jeu choisi est un jeu pour ordinateur, la probabilité
          que ce ne soit pas un jeu d’action est :
        </LI>
        <Options columns={4}>
          <LaTeX tex="p_O(\overline{A})" />
          <LaTeX tex="p(O)" />
          <LaTeX tex="p(\overline{A})" />
          <LaTeX tex="p_{\overline{A}}(O)" />
        </Options>
        <LI>
          Calculer cette probabilité. On donnera une valeur arrondie à{" "}
          <LaTeX tex="10^{-4}" /> près.
        </LI>
        <DotLine count={4} />
      </SubQuestions>

      <SubQuestions count={2}>
        <LI>
          Sachant que le jeu choisi n’est pas un jeu d’action, la probabilité
          que ce soit un jeu pour console est :
        </LI>
        <Options columns={4}>
          <LaTeX tex="p_{\overline{A}}(\overline{O})" />
          <LaTeX tex="p(\overline{O})" />
          <LaTeX tex="p(\overline{A})" />
          <LaTeX tex="p_{\overline{O}}(\overline{A})" />
        </Options>
        <LI>
          Calculer cette probabilité. On donnera une valeur arrondie à{" "}
          <LaTeX tex="10^{-4}" /> près.
        </LI>
        <DotLine count={4} />
      </SubQuestions>
    </Exercice>
  );
}

export default function ProbabilitesActivitesDocument() {
  return (
    <Document title="Probabilités - Activités">
      <H1>Probabilité d’un événement</H1>
      <JeuxDeDe />
      <H1>Opérations sur les événements</H1>
      <RepresentationsGraphiques />
      <TableauCroiseCasques />
      <PageBreak />
      <ProbabilitesSurLeChantier />
      <PageBreak />
      <H1>Fréquences et probabilités conditionnelles</H1>
      <DefautDeCanalisations />
      <RepartitionSalariale />
      <Depistage />
      <JeuxVideos />
    </Document>
  );
}
