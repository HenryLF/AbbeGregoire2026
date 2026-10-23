import aire_carre from "@assets/geometry/aire-carre.png";
import aire_circ from "@assets/geometry/aire-circ.png";
import aire_rect from "@assets/geometry/aire-rect.png";
import aire_tri from "@assets/geometry/aire-tri.png";
import cone from "@assets/geometry/cone.png";
import cube from "@assets/geometry/cube.png";
import cylinder from "@assets/geometry/cylinder.png";
import ex_tri from "@assets/geometry/ex-tri.png";
import parallep from "@assets/geometry/parallep.png";
import pyramid from "@assets/geometry/pyramid.png";
import pythagore from "@assets/geometry/pythagore.png";
import sphere from "@assets/geometry/sphere.png";
import { AnswerBox } from "@components/atoms/AnswerBox";
import { Img } from "@components/atoms/Img";
import { Details, Important, Note, P, S } from "@components/atoms/Texts";
import { Cours } from "@components/doctype/Cours";
import { Problem } from "@components/section/Exercice";
import type { ComponentChildren } from "preact";
import { DotLine } from "zefpdf-lab/ui/Inputs";
import { LaTeX } from "zefpdf-lab/ui/LaTeX";
import { Flex } from "zefpdf-lab/ui/Layout";
import { LI } from "zefpdf-lab/ui/List";
import { TD, TEntry, TH, THeader, Table } from "zefpdf-lab/ui/Table";
import { H1, H2, H6 } from "zefpdf-lab/ui/Titles";
import "./index.css";

const listUnit: ComponentChildren[] = [
  "km",
  "hm",
  "dam",
  <S>m</S>,
  "dm",
  "cm",
  "mm",
  null,
  null,
  "µm",
  null,
  null,
  "nm",
];

function UnitTable({ dim = 1 }: { dim?: number }) {
  return (
    <Table className="w-full table-fixed my-5">
      <THeader
        content={listUnit.map((e) => (
          <TH colspan={dim}>
            {e && (
              <>
                {e}
                {dim > 1 ? <sup>{dim}</sup> : null}
              </>
            )}
          </TH>
        ))}
      />
      <TEntry
        style={{ height: "1cm" }}
        content={Array.from({ length: 13 * dim }, () => (
          <TD />
        ))}
      />
    </Table>
  );
}

const areas: { img: string; type: string; spe: ComponentChildren }[] = [
  {
    img: aire_carre,
    type: "carré",
    spe: (
      <>
        côté <LaTeX tex="a" />
      </>
    ),
  },
  {
    img: aire_rect,
    type: "rectangle",
    spe: (
      <>
        largeur <LaTeX tex="l" /> et longueur <LaTeX tex="L" />
      </>
    ),
  },
  {
    img: aire_circ,
    type: "cercle",
    spe: (
      <>
        rayon <LaTeX tex="r" />
      </>
    ),
  },
  {
    img: aire_tri,
    type: "triangle",
    spe: (
      <>
        base <LaTeX tex="b" /> et hauteur <LaTeX tex="H" />
      </>
    ),
  },
];

const volumes: { img: string; type: string; spe: ComponentChildren }[] = [
  {
    img: cube,
    type: "un cube",
    spe: (
      <>
        côté <LaTeX tex="c" />
      </>
    ),
  },
  {
    img: parallep,
    type: "un pavé droit",
    spe: (
      <>
        largeur <LaTeX tex="l" /> longueur <LaTeX tex="L" /> et hauteur{" "}
        <LaTeX tex="h" />
      </>
    ),
  },
  {
    img: sphere,
    type: "une sphère",
    spe: (
      <>
        rayon <LaTeX tex="r" />
      </>
    ),
  },
  {
    img: cylinder,
    type: "un cylindre",
    spe: (
      <>
        rayon <LaTeX tex="r" /> et hauteur <LaTeX tex="h" />
      </>
    ),
  },
  {
    img: pyramid,
    type: "une pyramide",
    spe: (
      <>
        base d'aire <LaTeX tex="B" /> et hauteur <LaTeX tex="h" />
      </>
    ),
  },
  {
    img: cone,
    type: "un cône",
    spe: (
      <>
        base de rayon <LaTeX tex="r" /> et hauteur <LaTeX tex="h" />
      </>
    ),
  },
];

export default function DistancesEtAnglesDocument() {
  return (
    <Cours title="Distances et Angles" lang="fr">
      <H1>Distances</H1>
      <P>
        Les <S>distances</S> sont des longueurs mesurées en mètres (ou dans
        l'une de ses unités multiples).{" "}
        <em>Une distance est toujours positive !</em>
      </P>
      <UnitTable />
      <Details align="right">Tableau de conversion des distances.</Details>

      <H2>Périmètre du cercle</H2>
      <Flex gap="5mm" align="center">
        <div className="flex-4">
          <Note title="Rappel :">
            Le <S>rayon</S> d'un cercle est la distance entre son centre et sa
            bordure. Le <S>diamètre</S> est la plus grande longueur au sein du
            cercle, il est égal à deux fois le rayon.
          </Note>
          <P>
            Le <S>périmètre</S> <LaTeX tex="\mathcal{P}" /> est la longueur du
            contour d'un cercle de rayon <LaTeX tex="r" />. Il est donné par la
            formule :
          </P>
          <Important>
            <LaTeX tex="\mathcal{P} = 2 \pi\: r" />
          </Important>
        </div>
        <Img src={aire_circ} className="w-1/6" />
      </Flex>
      <P>
        Où <LaTeX tex="\pi" /> (se lit « pi ») est un nombre irrationnel (que
        l'on ne peut écrire complètement).{" "}
        <LaTeX tex="\large \pi \approx 3.1415\:...\:...." />
      </P>
      <Problem>
        <P>
          Le diamètre des roues d'une trottinette est de <LaTeX tex="d=10cm" />.
        </P>
        <Flex gap="5mm" align="start">
          <AnswerBox className="flex-1" height="10rem" />
          <div className="flex-3">
            <LI>Faire un schéma du problème.</LI>
            <LI>
              Calculer la distance parcourue par la trottinette en un tour de
              roue.
            </LI>
            <DotLine count={3} />
          </div>
        </Flex>
      </Problem>

      <H2>Théorème de Pythagore</H2>
      <Note title="Rappel :">
        Un <S>triangle rectangle</S> est un triangle dont l'un des angles est un
        angle droit. On appelle le côté le plus long (qui est celui{" "}
        <DotLine width="3cm" /> à l'angle droit) <S>l'hypoténuse</S>.
      </Note>
      <Flex gap="5mm" align="center">
        <Img src={pythagore} className="flex-1" />
        <div className="flex-[1.5]">
          <P>
            Le <S>théorème de Pythagore</S> nous donne la relation entre la
            longueur des trois côtés d'un <S>triangle rectangle</S>.
          </P>
          <Important>
            <S>
              Le carré de la longueur de l'hypoténuse est égal à la somme des
              carrés des deux autres côtés.
            </S>
          </Important>
          <P>
            Autrement dit, pour le triangle ci-contre rectangle en{" "}
            <DotLine width="0.5cm" />
          </P>
          <Important>
            <LaTeX tex="BC^2 = AB^2 + AC^2" />
          </Important>
        </div>
      </Flex>
      <Problem>
        <P>
          Le triangle ABC est rectangle en A. On donne <LaTeX tex="AB=3 cm" />{" "}
          et <LaTeX tex="AC=4 cm" />.
        </P>
        <Flex gap="5mm" align="start">
          <AnswerBox className="flex-1" height="3cm" />
          <div className="flex-[1.5]">
            <LI>Faire un schéma du triangle.</LI>
            <LI>Calculer la longueur BC.</LI>
            <DotLine count={3} />
          </div>
        </Flex>
      </Problem>

      <H1>Aires et Surfaces</H1>
      <P>
        L'<S>aire</S> d'une forme géométrique est la grandeur associée à la
        mesure de sa surface, on l'exprime en mètre carré m<sup>2</sup> (ou dans
        l'une de ses unités multiples).{" "}
        <em>Une aire est toujours positive !</em>
      </P>
      <UnitTable dim={2} />
      <Details align="right">Tableau de conversion des aires.</Details>
      <Note>
        Attention, pour les aires, il faut multiplier par{" "}
        <DotLine width="1cm" /> pour passer au multiple d'unité supérieur.
      </Note>
      <Flex className="flex-wrap" align="start">
        {areas.map(({ img, type, spe }) => (
          <div className="w-1/2 mb-2 break-inside-avoid">
            <H6>Aire d'un {type}</H6>
            <Flex gap="2mm" align="center">
              <Img src={img} className="flex-1" />
              <div className="flex-2">
                L'aire <LaTeX tex={`S_{\\text{${type}}}`} /> d'un {type} de{" "}
                {spe} est égale à :
                <Important>
                  <LaTeX
                    noFormatNumber
                    tex={`S_{\\text{${type}}} = \\hspace{2cm}`}
                  />
                </Important>
              </div>
            </Flex>
          </div>
        ))}
      </Flex>
      <Note>Pour calculer une aire, on multiplie toujours deux distances.</Note>

      <H1>Solides et volumes</H1>
      <P>
        On nomme <S>solide</S> une forme en trois dimensions.
      </P>
      <P>
        Le <S>volume</S> d'une forme géométrique est la grandeur associée à la
        mesure de l'espace qu'elle occupe, on l'exprih-50!e en mètre cube m
        <sup>3</sup> (ou dans l'une de ses unités multiples).{" "}
        <em>Un volume est toujours positif !</em>
      </P>
      <UnitTable dim={3} />
      <Details align="right">Tableau de conversion des volumes.</Details>
      <Note>
        Attention, pour les volumes, il faut multiplier par{" "}
        <DotLine width="2cm" /> pour passer au multiple d'unité supérieur.{" "}
        <br />
        <LaTeX tex="1L = 1dm^3" />, ainsi un mètre cube contient{" "}
        <DotLine width="2cm" /> litres.
      </Note>
      <div className="grid grid-cols-2 gap-x-[6mm] gap-y-[3mm]">
        {volumes.map(({ img, type, spe }) => (
          <div className="break-inside-avoid">
            <H6>Volume d'{type}</H6>
            <Flex gap="4mm" align="center">
              <Img src={img} width="2.8cm" height="2.8cm" />
              <div className="flex-1 min-w-0">
                <div>
                  Le volume d'{type} de {spe} est égal à :
                </div>
                <Important>
                  <LaTeX displayMode noFormatNumber tex={`V = \\hspace{3cm}`} />
                </Important>
              </div>
            </Flex>
          </div>
        ))}
      </div>

      <H1>Angles</H1>
      <P>
        Considérons deux droites (ou segments) se croisant : l'<S>angle</S> est
        une mesure de l'inclinaison de l'une par rapport à l'autre. Il se mesure
        en degré (noté °) ou en radian (noté rad).
      </P>
      <Table className="w-full mx-auto table-fixed">
        <TEntry
          header="Angle en degré"
          content={[0, <DotLine />, 90, 180, <DotLine />, 360]}
        />
        <TEntry
          header="Angle en radian"
          content={[
            0,
            <LaTeX tex="\frac{\pi}{4}" />,
            <DotLine />,
            <LaTeX tex="\pi" />,
            <LaTeX tex="\frac{3\pi}{2}" />,
            <DotLine />,
          ]}
        />
      </Table>
      <Note>
        180° est égal à <LaTeX tex="\pi" /> radians ainsi on peut convertir des
        degrés en radian en utilisant la formule :<br />
        <LaTeX tex="\theta = \frac{\pi}{180} \times a \Harr a = \frac{180}{\pi} \times \theta " />{" "}
        (où <LaTeX tex="a" /> est l'angle en degré et <LaTeX tex="\theta" /> est
        l'angle en radian).
      </Note>
      <Note title="Attention :">
        Les fonctions <LaTeX tex="\sin" />, <LaTeX tex="\cos" /> et{" "}
        <LaTeX tex="\tan" /> prennent des angles comme variables, toujours
        vérifier dans quelle unité l'on travaille avant d'utiliser la
        calculatrice !
      </Note>
      <Important>
        <S className="text-[14px]">
          La somme des angles internes d'un triangle est toujours égale à 180°.
        </S>
      </Important>
      <Problem>
        <Flex gap="5mm" align="start">
          <Img src={ex_tri} className="flex-1/3" />
          <div className="flex-2/3">
            <DotLine count={5} />
          </div>
        </Flex>
      </Problem>
    </Cours>
  );
}
