import parallep from "@assets/geometry/parallep.png";
import { Img } from "@components/atoms/Img";
import { S } from "@components/atoms/Texts";
import { MiniEval } from "@components/doctype/MiniEval";
import { DotLine, Options } from "zefpdf-lab/ui/Inputs";
import { LaTeX } from "zefpdf-lab/ui/LaTeX";
import { Flex } from "zefpdf-lab/ui/Layout";
import { LI, OL } from "zefpdf-lab/ui/List";
import "./index.css";

const title = "Distances et Angles - 2nd";

export default function () {
  return (
    <MiniEval title={title} lang="fr" count={3}>
      <div className="break-inside-avoid my-[4mm]">
        <Flex justify="space-between" align="center" gap="1cm">
          <S>{title}</S>
          <div className="w-1/2">
            Nom : <DotLine inline />
          </div>
        </Flex>
        <OL>
          <LI>
            Parmi les unités suivantes, laquelle ne correspond pas à une
            distance ?
          </LI>
          <Options>
            <LaTeX tex="km" />
            <LaTeX tex="hm" />
            <LaTeX tex="nm" />
            <LaTeX tex="m^2" />
          </Options>

          <LI>
            Le <S>périmètre</S> d'un cercle correspond à :
          </LI>
          <Options>
            <>la longueur de son contour</>
            <>la distance entre son centre et le bord</>
            <>la plus grande longueur entre ses bords</>
            <>sa surface</>
          </Options>

          <LI>
            La <S>surface</S> d'un cercle de rayon <LaTeX tex="r" /> est donnée
            par la formule :
          </LI>
          <Options>
            <LaTeX tex="\pi r^2" />
            <LaTeX tex="2 \pi r" />
            <LaTeX tex="\large \frac{r^2}{\pi}" />
            <LaTeX tex="2 \pi r^3" />
          </Options>

          <LI>Calculer la surface d'un carré de 100 m de côté.</LI>
          <Options>
            <LaTeX tex="100 m^2" />
            <LaTeX tex="10000 m^2" />
            <LaTeX tex="10000 cm^2" />
            <LaTeX tex="1000 m^2" />
          </Options>

          <Flex align="center" gap="5mm">
            <div className="flex-[4]">
              <LI>
                Le volume du pavé droit ci-contre est donné par la relation :
              </LI>
              <Options>
                <LaTeX tex="l \times L \times h" />
                <LaTeX tex="3  \times l^2" />
                <LaTeX tex="l^3" />
                <LaTeX tex="(l+L+h)^3" />
              </Options>
            </div>
            <Img src={parallep} className="w-1/6" />
          </Flex>
        </OL>
      </div>
    </MiniEval>
  );
}
