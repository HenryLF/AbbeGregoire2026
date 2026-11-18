import { suitesAct1GeoGebra, suitesEx1Stairs } from "@assets/index";
import { Img } from "@components/atoms/Img";
import { P } from "@components/atoms/Texts";
import { Activites } from "@components/doctype/Activites";
import { Call, Exercice, SubQuestion, TP } from "@components/section/Exercice";
import {
  type ComponentProps,
  DotLine,
  Flex,
  LaTeX,
  LI,
  PageBreak,
  UL,
} from "zefpdf-lab/ui";
import "../1ere.css";

const U = ({
  children,
  index = "n",
  ...props
}: ComponentProps & { index?: string | number }) => {
  const tex = children?.toString();
  return <LaTeX tex={`u_{${index}}${tex ?? ""}`} />;
};

const exSuite = (n: number = 9) =>
  Array.from({ length: n }, (_, k) => 1 + k * 5);

export default function () {
  return (
    <Activites title="Suites arithmétiques">
      <TP title="Construction de marches de piscine">
        <Flex>
          <div className="flex-3/4">
            <P>
              Un fabricant d'escaliers pour piscines imagine une forme semi-
              circulaire dessinée ci-contre. Il prévoit que des marches
              régulièrement espacées. Sur son premier croquis, il prévoit que :
            </P>
            <Flex justify="center" gap="2mm">
              {["A'A = 1 m", "B'B = 1,4 m", "C'C = 1,8 m", "D’D = 2,2 m"].map(
                (t) => (
                  <LaTeX tex={t} />
                ),
              )}
            </Flex>
            <LI>Quel espacement, en cm, est prévu entre chaque marche ?</LI>
            <DotLine count={2} />
          </div>
          <Img src={suitesAct1GeoGebra} className="flex-1/3" />
        </Flex>
        <SubQuestion mainLI="Avant de construire ce type de modèle, le fabricant a besoin de l'étudier grâce à un plan conçu sur le logiciel GeoGebra.">
          <LI>
            Placer les points{" "}
            {["A(0,5 ; 0)", " B(0,7 ; 0)", " C(0,9 ; 0) ", " D(1,1 ; 0)"].map(
              (t) => (
                <LaTeX tex={t} />
              ),
            )}
          </LI>
          <LI>
            Avec la roulette de la souris, zoomer sur l’ensemble de ces points.
          </LI>
        </SubQuestion>
        <LI>
          Construire le symétrique de chaque point par rapport à l’axe des
          ordonnées. Pour cela, cliquer sur le bouton « symétrie axiale » puis
          sur le point A et enfin sur l’axe des ordonnées : le point A’,
          symétrique de A, s’affiche. Faire de même pour les points B, C et D.
        </LI>
        <SubQuestion indent={"5mm"}>
          <LI>
            Tracer le demi-cercle de diamètre [A'A] en cliquant sur l'outil «
            Demi-cercle » puis sur A' et A.
          </LI>
          <LI>
            b. Faire de même pour les demi-cercles de diamètre [B'B], [C'C] et
            [D'D].
          </LI>
        </SubQuestion>
        <Call>Faire vérifier la construction</Call>
        <LI>
          Mesurer le périmètre de chaque demi-cercle en cliquant sur le bouton «
          distance ou longueur » puis sur chacun des demi-cercles : la
          circonférence s'affiche.
        </LI>
        <UL>
          <Flex wrap gap="1mm">
            {["AA'", "BB'", "CC'", "DD'"].map((t) => (
              <LI className={"w-48/100"}>
                Périmetre du demi-cercle{" "}
                <LaTeX tex={`\\overset{~{\\large\\frown}}{${t}}`} />
                <DotLine width={"2cm"} />
              </LI>
            ))}
          </Flex>
        </UL>
        <LI>
          En observant bien les quatre résultats précédents, prévoir (sans
          utiliser le logiciel), quel serait le périmètre d'une marche
          supplémentaire telle que <LaTeX tex="EE' = 2,6 m" />. On explicitera
          clairement le raisonnement.
        </LI>
        <DotLine count={4} />
        <LI>Construire la marche supplémentaire à l'aide du logiciel.</LI>
        <Call>Appel n°2 : Faire vérifier la construction</Call>
        <LI>Confirmer ou infirmer la prévision faite à la question 6.</LI>
        <DotLine count={2} />
      </TP>
      <PageBreak />
      <Exercice title="Escalier en béton">
        <Img src={suitesEx1Stairs} className={"float-right w-[6cm]"} />
        <P>
          L'entreprise GUINETP est chargée de livrer un escalier en béton dont
          les marches s'allongent au fur et à mesure de façon régulière comme
          indiqué sur le plan (vue de dessus) ci-contre. Les cotes indiquées
          correspondent aux longueurs de chacune des marches, en cm. La largeur
          des marches est de 35 cm.
        </P>
        <SubQuestion
          mainLI={
            <>
              On note <LaTeX tex="l_1" /> la longueur de la 1re marche,{" "}
              <LaTeX tex="l_2" /> la longueur de la 2e marche, etc.
            </>
          }
        >
          <LI>
            Justifier que (<LaTeX tex="l_n" />) est une suite arithmétique dont
            on donnera la raison et le premier terme.
          </LI>
          <DotLine count={3} />
          <LI>
            Donner l'expression de (<LaTeX tex="l_n" />) en fonction du premier
            terme.
          </LI>
          <DotLine count={2} />

          <LI>Quelle est la longueur de la 7ème marche ? de la 8ème ?</LI>
          <DotLine count={2} />
        </SubQuestion>

        <SubQuestion indent={"5mm"}>
          <LI>Combien cet escalier a-t-il de marches ?</LI>
          <DotLine count={3} />
          <LI>Quelle est la longueur de l'escalier ?</LI>
          <DotLine count={3} />
        </SubQuestion>
      </Exercice>
    </Activites>
  );
}
