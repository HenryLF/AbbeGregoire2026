import { probabilityBallbox, probabilityShape } from "@assets/index";
import { Img } from "@components/atoms/Img";
import { NumberLine } from "@components/atoms/NumberLine";
import { Note, P, S } from "@components/atoms/Texts";
import { Problem } from "@components/section/Exercice";
// import "@styles/base.css";
import { Document, DotLine, Flex, LaTeX, LI } from "zefpdf-lab/ui";

export const DocIntro = () => (
  <Problem>
    <Flex gap={"1mm"}>
      <div className="flex-3">
        <P>
          On tire au hasard une forme géométrique parmi l'ensemble suivant :
        </P>
        <LI>Est-il plus probable de tirer un triangle qu'un carré ?</LI>
        <DotLine count={2} />
        <LI>
          A-t-on autant de chance de tirer une forme verte qu'une forme rouge ?
        </LI>
        <DotLine />
      </div>
      <div className="flex-2">
        <Img src={probabilityShape} className="mx-auto" />
      </div>
    </Flex>
    <DotLine />
    <LI>Comment décrire les chances d'obtenir le rectangle rouge ?</LI>{" "}
    <DotLine count={2} />
  </Problem>
);

export const Doc1 = () => (
  <Problem>
    <Flex align="center" gap={"1mm"}>
      <div className="flex-4/5">
        <P>
          On dispose d'une urne contenant 3 balles vertes et 3 balles rouges,
          pour chaque couleur les balles sont numérotées de 1 à 3.
        </P>
        <P>Compléter le texte suivant :</P>
        <P>
          L'action de "Tirer une balle au hasard dans l'urne" constitue une{" "}
          <DotLine inline /> pour celle-ci les événements élémentaires
          correspondent à : <DotLine inline />
          <DotLine />
        </P>
      </div>
      <Img src={probabilityBallbox} className="flex-1/5" />
    </Flex>
    <Note>
      Un <S>événement</S> peut être composé de plusieurs événements élémentaires
      par exemple "Tirer une balle portant le n°2" regroupe les événements
      élémentaires : <DotLine inline />
      <DotLine />
    </Note>
  </Problem>
);

export const Doc2 = () => (
  <Problem>
    <Flex align="center" gap={"1mm"}>
      <div className="flex-4/5">
        <P>
          Toujours avec notre urne et ses 6 balles, on notera <LaTeX tex="V" />{" "}
          l'événement : "La balle tirée est verte",{" "}
          <LaTeX tex="\textcircled{2}" /> : "La balle tirée porte le n°2" et{" "}
          <LaTeX tex="V_2" /> : "On tire une balle verte n°2".
        </P>
        <Flex className="flex-wrap" gap={"1%"}>
          <LI className={"w-[48%] italic"}>
            Justifier que l'on peut utiliser la formule précédente.
          </LI>
          <LI className={"w-[48%] italic"}>
            Calculer <LaTeX tex="p(V)" /> la probabilité de tirer une balle
            verte.
          </LI>

          <LI className={"w-[48%] italic"}>
            Calculer <LaTeX tex="p(\textcircled{2})" /> la probabilité de tirer
            une balle portant le n°2.
          </LI>

          <LI className={"w-[48%] italic"}>
            Calculer <LaTeX tex="p(V_2)" />.
          </LI>
        </Flex>
        <LI>Placer les probabilités calculées sur l'échelle ci-dessous.</LI>
      </div>
      <Img src={probabilityBallbox} className="flex-1/5" />
    </Flex>
    <NumberLine
      max={1}
      step={1 / 6}
      tickLabel={(k) => (k == 1 || k == 0 ? k : "")}
      className="mt-[1.35cm]"
    >
      Échelle de probabilité
    </NumberLine>
  </Problem>
);

export default function () {
  return (
    <Document title=" " style={{ page: "blank" }}>
      <Flex dir="column" gap={"8mm"}>
        <DocIntro />
        <div className="border-b border-dashed" />
        <Doc1 />
        <div className="border-b border-dashed" />
        <Doc2 />
      </Flex>
    </Document>
  );
}
