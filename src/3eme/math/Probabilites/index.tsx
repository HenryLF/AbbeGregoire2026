import { Important, Note, P, S } from "@components/atoms/Texts";
import { Cours } from "@components/doctype/Cours";
import { DotLine } from "zefpdf-lab/ui/Inputs";
import { LaTeX } from "zefpdf-lab/ui/LaTeX";
import { LI, UL } from "zefpdf-lab/ui/List";
import { H1 } from "zefpdf-lab/ui/Titles";
import { Doc1, Doc2, DocIntro } from "./doc";
import "./index.css";

export default function () {
  return (
    <Cours title="Probabilités" lang="fr">
      <H1>Rappel : Pourcentage</H1>
      <P>
        Un <S>pourcentage</S> permet d'exprimer une fraction ou une proportion
        comme si le total était égal à 100. Autrement dit :
      </P>
      <Important>
        <LaTeX displayMode className="text-[16px]" tex="X\% = \frac{X}{100}" />
      </Important>
      <P>Par exemple :</P>
      <UL className="columns-2" style={{ "--dotline--lineheight": "1cm" }}>
        {["\\frac{1}{2}", "\\frac{18}{25}", "\\frac{15}{10}"].map((t) => (
          <LI>
            <LaTeX tex={`\\large ${t} =`} /> <DotLine inline />
          </LI>
        ))}

        {["20\\%", "75\\%", "12.5\\%"].map((t) => (
          <LI>
            <LaTeX tex={`${t} =`} /> <DotLine inline />
          </LI>
        ))}
      </UL>
      <P>
        Pour appliquer un pourcentage à une grandeur il nous suffit de
        multiplier les deux ensemble :
      </P>
      <div className={"w-7/9 mx-auto text-[16px] my-2"}>
        <LaTeX tex="25 \% de\:80\:€ = \large \frac{25}{100} \times 80 = " />
        <DotLine inline />
      </div>
      <Note>
        On remarque que <LaTeX tex="25 \% de\:80\:€ " /> et{" "}
        <LaTeX tex="80 \% de\:25\:€ " /> sont <DotLine inline /> <DotLine />
      </Note>
      <H1>Langage des probabilités</H1>
      <DocIntro />
      <P>
        En mathématiques on appelle une situation dont le résultat dépend du
        hasard <S>expérience aléatoire</S>, les issues possible de celle-ci sont
        appelées <S>événements élémentaires</S>.
      </P>

      <P>
        L'ensemble de toutes les issues possibles est appelée{" "}
        <S>
          univers <LaTeX tex="\Omega" />
        </S>{" "}
        <em>("oméga" lettre grecque)</em>
      </P>
      <Doc1 />
      <H1>Probabilité d’un événement</H1>
      <P>
        La <S>probabilité</S> <LaTeX tex="p" /> d'un événement est un nombre
        entre 0 et 1 (ou exprimé en %) qui nous renseigne sur les chances que
        cet événement se réalise.
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
