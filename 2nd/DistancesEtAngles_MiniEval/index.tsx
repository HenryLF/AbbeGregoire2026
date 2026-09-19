import { parallep } from "@/assets";
import { Img } from "@/components";
import { MiniEval } from "@/components/MiniEval";
import { Options } from "@/components/Options";
import { Block, BlockBox, LaTeX, LI } from "@weasyprint-tsx/ui";
import "./index.css";

export default function () {
  return (
    <MiniEval title="Distances et Angles - 2nd" count={3} gap={"4mm"}>
      <LI>
        Parmi les unités suivantes, laquelle ne correspond pas à une distance ?
      </LI>
      <Options>
        <>
          <LaTeX>km</LaTeX>
        </>
        <>
          <LaTeX>hm</LaTeX>
        </>
        <>
          <LaTeX>nm</LaTeX>
        </>
        <>
          <LaTeX>m^2</LaTeX>
        </>
      </Options>

      <LI>
        Le <strong>périmètre</strong> d'un cercle correspond à :
      </LI>
      <Options fontWeight="normal">
        <>la longueur de son contour</>
        <>la distance entre son centre et le bord</>
        <>la plus grande longueur entre ses bords</>
        <>sa surface</>
      </Options>

      <LI>
        La <strong>surface</strong> d'un cercle de rayon <LaTeX tex="r" /> est
        donnée par la formule :
      </LI>
      <Options fontWeight="normal">
        <LaTeX tex="\pi r^2" />
        <LaTeX tex="2 \pi r" />
        <LaTeX tex="\large \frac{r^2}{\pi}" />
        <LaTeX tex="2 \pi r^3" />
      </Options>

      <LI>Calculer la surface d'un carré de 100 m de côté.</LI>

      <Options fontWeight="normal">
        <LaTeX tex="100 m^2" />
        <LaTeX tex="10000 m^2" />
        <LaTeX tex="10000 cm^2" />
        <LaTeX tex="1000 m^2" />
      </Options>
      <BlockBox>
        <Block ratio={4}>
          <LI>Le volume du pavé droit ci-contre est donné par la relation :</LI>
          <Options fontWeight="normal">
            <LaTeX tex="l \times L \times h" />
            <LaTeX tex="3  \times l^2" />
            <LaTeX tex="l^3" />
            <LaTeX tex="(l+L+h)^3" />
          </Options>
        </Block>
        <Img src={parallep} className={"mx-auto"} />
      </BlockBox>
    </MiniEval>
  );
}
