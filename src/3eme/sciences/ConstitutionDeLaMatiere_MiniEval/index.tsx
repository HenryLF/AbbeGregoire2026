import { S } from "@components/atoms/Texts";
import { MiniEval } from "@components/doctype/MiniEval";
import { DotLine, Options } from "zefpdf-lab/ui/Inputs";
import { LaTeX } from "zefpdf-lab/ui/LaTeX";
import { Flex } from "zefpdf-lab/ui/Layout";
import { LI, OL } from "zefpdf-lab/ui/List";
import "./index.css";

const title = "Atomes et Molécules";


export default function () {
  return (
    <MiniEval title={title} lang="fr">
        <Flex justify="space-between" align="center" gap="1cm">
          <S>{title}</S>
          <div className="w-1/2">
            Nom : <DotLine inline />
          </div>
        </Flex>
        <OL>
          <LI>
            Un électron est une particule élémentaire portant une charge
            électrique :
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
            La molécule de <LaTeX chemical tex="CO_2" /> est composée de :
          </LI>
          <Options columns={2}>
            <>
              1 oxygène (<LaTeX chemical tex="O" />) et 2 hydrogènes (<LaTeX chemical tex="H" />)
            </>
            <>
              1 oxygène (<LaTeX chemical tex="O" />) et 2 carbones (<LaTeX chemical tex="C" />)
            </>
            <>
              2 oxygènes (<LaTeX chemical tex="O" />) et 1 carbone (<LaTeX chemical tex="C" />)
            </>
            <>
              1 oxygène (<LaTeX chemical tex="O" />) et 1 carbone (<LaTeX chemical tex="C" />)
            </>
          </Options>

          <LI>
            Pour l'ion suivant <LaTeX chemical tex="HO^-" />, laquelle de ces affirmations
            est <em>fausse</em> :
          </LI>
          <Options columns={2}>
            <>C'est un anion</>
            <>Il porte une charge -</>
            <>C'est une molécule qui a gagné un électron</>
            <>C'est un atome qui a gagné un électron</>
          </Options>

          <LI>
            Quelle est la charge de l'ion suivant : <LaTeX chemical tex="Fe^{3+}" />
          </LI>
          <Options>
            <>il n'est pas chargé</>
            <>3 charges positives</>
            <>2 charges positives</>
            <>2 charges négatives</>
          </Options>
        </OL>
    </MiniEval>
  );
}
