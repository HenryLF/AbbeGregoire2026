import { Important, Note, P, S } from "@components/atoms/Texts";
import { Cours } from "@components/doctype/Cours";
import { DotLine } from "zefpdf-lab/ui/Inputs";
import { LaTeX } from "zefpdf-lab/ui/LaTeX";
import { LI, UL } from "zefpdf-lab/ui/List";
import { H1, H2 } from "zefpdf-lab/ui/Titles";
import { Doc1, Doc2 } from "./doc";
import "./index.css";

export default function () {
  return (
    <Cours title="Probabilités" lang="fr">
      <H1>Probabilité d’un événement</H1>
      <H2>Langage des probabilités</H2>
      <P>
        En mathématiques on appelle une situation dont le résultat dépend du
        hasard <S>expérience aléatoire</S>, les issues possible de celle-ci sont
        appelées <S>événements élémentaires</S>.
      </P>

      <P>
        L'ensemble de toutes les issues possibles est appelée{" "}
        <S>
          univers <LaTeX tex="\Omega" />
        </S>
      </P>
      <Doc1 />
      <H2>Probabilité d’un événement</H2>
      <P>
        La <S>probabilité</S> <LaTeX tex="p" /> d'un événement est un nombre
        entre 0 et 1 qui nous renseigne sur les chances que cet événement se
        réalise.
      </P>
      <UL>
        {["p = 0 ou\\:0\\%", "p = 1 ou\\:100\\%"].map((tex) => (
          <LI>
            Si <LaTeX tex={tex} /> : <DotLine inline lineHeight={"8mm"} />
          </LI>
        ))}
      </UL>

      <P>
        Si tous les événements élémentaires ont la même probabilité alors je
        peux calculer la probabilité d'un événement :
      </P>
      <Important>
        <LaTeX
          displayMode
          noFormatNumber
          tex={`p(A) = \\Large \\frac{ \\hspace{8cm}}{}`}
          className={"mt-5!"}
        />
      </Important>
      <Doc2 />
      <Note title="À retenir :">
        <LaTeX
          noFormatNumber
          tex="\text{événement. elem.} = \text{issues de base}"
        />
        ,{" "}
        <LaTeX
          noFormatNumber
          tex='\text{Proba} = \frac{\text{ nbr.de cas "content"}}{\text{nbr. total de cas} } \text{(entre 0 et 1 ou en \%)}'
        />
      </Note>
    </Cours>
  );
}
