import { Details } from "@components/atoms/Texts";
import type { ComponentChild } from "preact";
import { DotLine } from "zefpdf-lab/ui/Inputs";
import { LaTeX } from "zefpdf-lab/ui/LaTeX";
import { TD, Table, TEntry, THeader } from "zefpdf-lab/ui/Table";

/* Activité 1 — tableau des résultats des cinq parties. */
export function RegleTable({
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
    <Table className="w-9/10 mx-auto">
      <THeader content={[title, ...parties]} />
      <TEntry
        header={`Nombre de fois où la somme est « ${s1} »`}
        content={vide}
      />
      <TEntry
        header={`Nombre de fois où la somme est « ${s2} »`}
        content={vide}
      />
      <TEntry header={issue} content={Array.from({ length: 5 }, () => "▢")} />
    </Table>
  );
}

// Case barrée de la moitié inférieure du tableau des sommes (combinaisons
// déjà dénombrées dans la moitié supérieure).
function Crossed() {
  return (
    <svg
      className="block w-full h-[7mm]"
      viewBox="0 0 20 20"
      preserveAspectRatio="none"
    >
      <rect width="20" height="20" fill="#b2c3eb98" />
      <line x1="0" y1="20" x2="20" y2="0" stroke="black" stroke-width="0.4" />
    </svg>
  );
}

// Tableau des sommes possibles avec deux dés : seule la moitié supérieure est à
// compléter, la moitié inférieure (doublons) est barrée.
export function SommesTable() {
  const des = [1, 2, 3, 4, 5, 6];
  const donnees: Record<string, number> = { "1-1": 2, "1-2": 3, "2-2": 4 };
  return (
    <Table className="w-full mx-auto">
      <THeader content={["+", ...des]} />
      {des.map((row) => (
        <TEntry
          header={row}
          content={des.map((col) => (
            <TD className="h-8 w-8 text-center">
              {col < row ? <Crossed /> : (donnees[`${row}-${col}`] ?? "")}
            </TD>
          ))}
        />
      ))}
    </Table>
  );
}

// Dénombrement des combinaisons donnant chaque somme, à remplir d'après le
// tableau des sommes.
export function CombinaisonsTable() {
  const sommes = Array.from({ length: 11 }, (_, k) => k + 2);
  return (
    <Table className="w-full table-fixed">
      <THeader content={["Somme", ...sommes]} />
      <TEntry
        header="Nombre de combinaisons différentes possibles"
        content={sommes.map(() => "")}
      />
    </Table>
  );
}

/* Activité 2 — diagrammes de Venn. */

// Diagramme de Venn vierge : l'ensemble des 80 ouvriers, le chantier Nord et le
// chantier Sud. `labelled` ajoute les légendes de l'énoncé.
export function Venn({ labelled = false }: { labelled?: boolean }) {
  return (
    <svg className="block w-full h-auto" viewBox="0 0 200 120">
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

export function EvenementsTable({
  evenements,
}: {
  evenements: { nom: string; texte: string; proba: string }[];
}) {
  return (
    <Table className="w-full my-1">
      <THeader
        content={evenements.map(({ nom, texte }) => (
          <>
            <div>
              Événement <LaTeX tex={nom} />
            </div>
            <Details>{texte}</Details>
          </>
        ))}
      />
      <TEntry
        content={evenements.map(() => (
          <Venn />
        ))}
      />
      <TEntry
        content={evenements.map(({ proba }) => (
          <div>
            <LaTeX tex={`p(${proba}) = `} />{" "}
            <DotLine width="2cm" />
          </div>
        ))}
      />
    </Table>
  );
}

/* Activités 3 à 6, exercices — tableau croisé générique. */

// Une colonne d'en-têtes de ligne, puis une colonne par modalité.
// `cells[ligne][colonne]` pré-remplit les cases données.
export function TableauCroise({
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
    <Table className={`table-fixed mx-auto ${className}`}>
      <THeader content={["", ...colonnes]} />
      {lignes.map((ligne, i) => (
        <TEntry
          header={ligne}
          content={colonnes.map((_, j) => (
            <TD className="h-7 text-center">{cells[i]?.[j] ?? ""}</TD>
          ))}
        />
      ))}
    </Table>
  );
}
