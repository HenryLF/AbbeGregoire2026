import { P, S } from "@components/atoms/Texts";
import { MiniEval } from "@components/doctype/MiniEval";
import { DotLine, Options } from "zefpdf-lab/ui/Inputs";
import { LaTeX } from "zefpdf-lab/ui/LaTeX";
import { Flex } from "zefpdf-lab/ui/Layout";
import { LI, OL } from "zefpdf-lab/ui/List";
import { Table, TEntry } from "zefpdf-lab/ui/Table";
import "./index.css";

const title = "Statistiques - 3ème";

const notes = [4, 7, 8, 6, 3, 9, 9, 7, 9, 4, 7, 9, 1, 3, 3];

export default function () {
  return (
    <MiniEval title={title} lang="fr">
      <div className="break-inside-avoid my-2">
        <Flex justify="space-between" align="center" gap="1cm">
          <S>{title}</S>
          <div className="w-1/2">
            Nom : <DotLine inline />
          </div>
        </Flex>
        <OL>
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
            Quelle est l'<S>étendue</S> de cette série statistique ?
            <DotLine width="9cm" />
          </LI>
          <LI>
            <LaTeX tex="7" /> est la valeur telle que la moitié des
            observations sont en dessous et l'autre moitié au-dessus, c'est :
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
        </OL>
      </div>
    </MiniEval>
  );
}
