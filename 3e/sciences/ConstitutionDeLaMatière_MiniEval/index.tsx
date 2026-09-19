import { MiniEval } from "@/components/MiniEval";
import { Options } from "@/components/Options";
import { LaTeX, LI } from "@weasyprint-tsx/ui";
import "./index.css";

export default function () {
  return (
    <MiniEval title="Atomes et Molécules" gap={"1cm"}>
      <LI>
        Un électron est une particule élémentaire portant une charge électrique
        :
      </LI>
      <Options>
        <>positive</>
        <>négative</>
        <>pas de charge</>
      </Options>

      <LI>Le numéro atomique d'un élément correspond à :</LI>
      <Options>
        <>son nombre de protons</>
        <>son nombre d'électrons</>
        <>sa charge électrique</>
      </Options>

      <LI>
        La molécule de <LaTeX tex="CO2" chemical /> est composée de :
      </LI>
      <Options columns={2}>
        <>
          1 oxygène (
          <LaTeX tex="O" chemical />) et 2 hydrogènes (
          <LaTeX tex="H" chemical />)
        </>
        <>
          1 oxygène (
          <LaTeX tex="O" chemical />) et 2 carbones (
          <LaTeX tex="C" chemical />)
        </>
        <>
          2 oxygènes (
          <LaTeX tex="O" chemical />) et 1 carbone (
          <LaTeX tex="C" chemical />)
        </>
        <>
          1 oxygène (
          <LaTeX tex="O" chemical />) et 1 carbone (
          <LaTeX tex="C" chemical />)
        </>
      </Options>

      <LI>
        Pour l'ion suivant <LaTeX tex="HO-" chemical />, laquelle de ces
        affirmations est <em>fausse</em> :
      </LI>
      <Options>
        <>C'est un anion</>
        <>Il porte une charge -</>
        <>C'est une molécule qui a gagné un électron</>
        <>C'est un cation</>
      </Options>

      <LI>
        Quelle est la charge de l'ion suivant : <LaTeX tex="Fe^3+" chemical />
      </LI>
      <Options>
        <>il n'est pas chargé</>
        <>3 charges positives</>
        <>2 charges positives</>
        <>2 charges négatives</>
      </Options>
    </MiniEval>
  );
}
