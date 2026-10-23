import venn from "@assets/probability/venn-intersection.svg";
import { Img } from "@components/atoms/Img";
import { S } from "@components/atoms/Texts";
import { MiniEval } from "@components/doctype/MiniEval";
import { DotLine, Options } from "zefpdf-lab/ui/Inputs";
import { LaTeX } from "zefpdf-lab/ui/LaTeX";
import { Flex } from "zefpdf-lab/ui/Layout";
import { LI, OL } from "zefpdf-lab/ui/List";
import "./index.css";

const title = "Probabilités - 1ère";

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
          <LI>
            Je lance un dés à 12 faces, quel est la probabilité d'obtenir un 12
            ou un 6.
          </LI>
          <Options>
            {["\\frac{1}{12}", "\\frac{1}{2}", "20 \\%", "\\frac{2}{12}"].map(
              (e) => (
                <LaTeX tex={e} />
              ),
            )}
          </Options>
          <LI>
            Je lance un dés à 6 faces, quel est la probabilité d'obtenir un
            nombre pair.
          </LI>
          <Options>
            {["\\frac{1}{2}", "75\\%", "25 \\%", "\\frac{4}{6}"].map((e) => (
              <LaTeX tex={e} />
            ))}
          </Options>
          {["A \\cap B", "A \\cup B"].map((tex) => (
            <Flex align="center" gap="5mm">
              <div className="flex-[3]">
                <LI>
                  Sur le schéma ci contre indiquer la zone correspondant à{" "}
                  <LaTeX tex={tex} />
                </LI>
              </div>
              <Img src={venn} className="w-1/6" />
            </Flex>
          ))}
          <LI>
            Que signifie <LaTeX tex="\overline{A}" /> ?
          </LI>
          <Options columns={2}>
            <>
              L'événement <LaTeX tex="A" /> se réalise deux fois.
            </>
            <>
              L'événement <LaTeX tex="A" /> est certain.
            </>
            <>
              L'événement <LaTeX tex="A" /> est impossible.
            </>
            <>
              Tous les cas où <LaTeX tex="A" /> ne se réalise pas.
            </>
          </Options>
        </OL>
      </div>
    </MiniEval>
  );
}
