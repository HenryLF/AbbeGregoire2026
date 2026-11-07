import { P, S } from "@components/atoms/Texts";
import { MiniEval } from "@components/doctype/MiniEval";
import { DotLine, LaTeX, LI, Options, Table, TEntry } from "zefpdf-lab/ui";
import "./index.css";

const notes = [4, 7, 8, 6, 3, 9, 9, 7, 9, 4, 7, 9, 1, 3, 3];
export default function () {
  return (
    <MiniEval title="Statistiques">
      <P>
        Voici les notes données par les clients d'un restaurant sur un site
        internet.
      </P>
      <Table className="w-full my-2">
        <TEntry header="Notes" content={notes} />
      </Table>

      <LI>
        Quel est le <S>minimum</S> de cette série statistique ?
        <DotLine width="9cm" />
      </LI>
      <LI>
        Quel est le <S>maximum</S> de cette série statistique ?
        <DotLine width="9cm" />
      </LI>
      <LI>
        <LaTeX tex="9" /> est la note donnée le plus souvent, il s'agit de :
      </LI>
      <Options>
        {"la médiane"}
        {"la moyenne"}
        {"la classe"}
        {"la classe modale"}
      </Options>
      <LI>
        <LaTeX tex="7" /> est la valeur telle que la moitié des observations
        sont en dessous et l'autre moitié au-dessus, c'est :
      </LI>
      <Options>
        {"la médiane"}
        {"la moyenne"}
        {"le centre"}
        {"le milieu"}
      </Options>
      <LI>
        La somme des observations divisée par leur nombre est d'environ{" "}
        <LaTeX tex="5.9" />, c'est :
      </LI>
      <Options>
        {"le milieu"}
        {"la médiane"}
        {"le centre"}
        {"la moyenne"}
      </Options>
    </MiniEval>
  );
}
