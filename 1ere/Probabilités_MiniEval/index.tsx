import { venn_intersection } from "@/assets";
import { Img } from "@/components";
import { MiniEval } from "@/components/MiniEval";
import { Options } from "@/components/Options";
import { Block, BlockBox, LaTeX, LI } from "@weasyprint-tsx/ui";
import "./index.css";

export default function () {
  return (
    <MiniEval title="Probabilités - 1ère">
      <LI>
        Je lance un dés à 12 faces, quel est la probabilité d'obtenir un 12 ou
        un 6.
      </LI>
      <Options>
        {["\\frac{1}{12}", "\\frac{1}{2}", "20 \\%", "\\frac{2}{12}"].map(
          (e) => (
            <LaTeX tex={e} />
          ),
        )}
      </Options>
      <LI>
        Je lance un dés à 6 faces, quel est la probabilité d'obtenir un nombre
        pair.
      </LI>

      <Options>
        {["\\frac{1}{2}", "75\\%", "25 \\%", "\\frac{4}{6}"].map((e) => (
          <LaTeX tex={e} />
        ))}
      </Options>
      {["A \\cap B", "A \\cup B"].map((tex) => (
        <BlockBox>
          <Block ratio={3}>
            <LI>
              Sur le schéma ci contre indiquer la zone correspondant à{" "}
              <LaTeX tex={tex} />
            </LI>
          </Block>
          <Img src={venn_intersection} className={"w-5/8 mr-auto "} />
        </BlockBox>
      ))}

      <LI>
        Que signifie <LaTeX tex="\overline{A}" /> ?
      </LI>

      <Options fontWeight="normal" columns={2}>
        <>
          L'événement <LaTeX tex="A" /> se réalise deux fois.
        </>

        <>
          L'évenement <LaTeX tex="A" /> est certain.
        </>

        <>
          L'évenement <LaTeX tex="A" /> est impossible.
        </>

        <>
          Tout les cas où <LaTeX tex="A" /> ne se réalise pas.
        </>
      </Options>
    </MiniEval>
  );
}
