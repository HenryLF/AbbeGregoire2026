import area_shape from "@assets/geometry/area-shape.png";
import area_shapes from "@assets/geometry/area-shapes.png";
import armoire from "@assets/geometry/armoire.png";
import casier_bouteille from "@assets/geometry/casier-bouteille.png";
import champ from "@assets/geometry/champ.svg";
import ex_solid from "@assets/geometry/ex-solid.png";
import fox_and_rabbit from "@assets/geometry/fox-and-rabbit.png";
import pythagore_arabe from "@assets/geometry/pythagore-arabe.jpg";
import triangle_ang from "@assets/geometry/triangle-ang.png";
import triangle from "@assets/geometry/triangle.svg";
import triangles_rect from "@assets/geometry/triangles-rect.png";
import volume_shapes from "@assets/geometry/volume-shapes.png";
import { AnswerBox } from "@components/atoms/AnswerBox";
import { Img } from "@components/atoms/Img";
import { P, S } from "@components/atoms/Texts";
import { Activites } from "@components/doctype/Activites";
import { Exercice } from "@components/section/Exercice";
import type { ComponentChildren } from "preact";
import { PageBreak } from "zefpdf-lab/ui";
import { DotLine } from "zefpdf-lab/ui/Inputs";
import { LaTeX } from "zefpdf-lab/ui/LaTeX";
import { Flex } from "zefpdf-lab/ui/Layout";
import { LI, OL, toLowerAlpha } from "zefpdf-lab/ui/List";
import { TD, TEntry, TH, THeader, Table } from "zefpdf-lab/ui/Table";
import { H1 } from "zefpdf-lab/ui/Titles";
import "./index.css";
import { GGB_HEXAGONE, GGB_PENTAGONE, TPPolygone } from "./TP_Polygone";

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

function UnitTable({ dim = 1, rows = 1 }: { dim?: number; rows?: number }) {
  return (
    <Table className="w-full table-fixed my-2">
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
      {Array.from({ length: rows }, () => (
        <TEntry
          style={{ height: "1cm" }}
          content={Array.from({ length: 13 * dim }, () => (
            <TD />
          ))}
        />
      ))}
    </Table>
  );
}

const subMarker = (n: number) => toLowerAlpha(n) + ".)";

export default function DistancesEtAnglesActivitesDocument() {
  return (
    <Activites title="Distances et Angles" lang="fr">
      <H1>Distances</H1>

      <Exercice title="Lapin et renard">
        <Img src={fox_and_rabbit} className="mx-auto" align="right">
          Position du lapin et du renard
        </Img>
        <LI>
          À l'aide du schéma, donner les positions :
          <OL marker={subMarker}>
            <LI>
              de la ligne de départ :
              <DotLine inline />
            </LI>
            <LI>
              du renard :
              <DotLine inline />
            </LI>
            <LI>
              du lapin :
              <DotLine inline />
            </LI>
          </OL>
        </LI>
        <LI>
          Calculer les distances parcourues depuis la ligne de départ par :
          <OL marker={subMarker}>
            <LI>
              le renard : <DotLine inline />
            </LI>
            <LI>
              le lapin : <DotLine inline />
            </LI>
          </OL>
        </LI>
        <LI>
          Comment calculer la distance entre deux points connaissant leur
          position ?
        </LI>
        <DotLine count={2} />
        <LI>Calculer la distance entre le lapin et le renard.</LI>
        <DotLine />
      </Exercice>

      <Exercice title="Conversion de distances">
        <P>À l’aide du tableau de conversion des longueurs, compléter :</P>
        <UnitTable rows={4} />
        {[
          ["5hm", "m", "km", "dm"],
          ["3.7m", "dam", "cm", "mm"],
          ["5.2mm", "cm", "\\mu m", "nm"],
          ["190dm", "m", "km", "cm"],
        ].map((list) => (
          <LI>
            {list.map((unit, k) => {
              if (k == 0) return <LaTeX tex={unit} />;
              return (
                <>
                  = <DotLine width="4cm" /> <LaTeX tex={unit} />
                </>
              );
            })}
          </LI>
        ))}
      </Exercice>
      <PageBreak />

      <Exercice title="Grande Roue">
        <P>
          À l’Exposition universelle de Paris en 1900, on pouvait monter dans la
          Grande Roue. Elle avait un diamètre de 93 m. Quelle distance avait-on
          parcourue en faisant :
        </P>
        <LI>un tour de roue ?</LI>
        <DotLine count={2} />
        <LI>dix tours de roue ?</LI>
        <DotLine count={2} />
      </Exercice>

      <Exercice title="Hypoténuse">
        <P>Identifier l'hypoténuse de chacun des triangles ci-dessous :</P>
        <Flex gap="5mm" align="center">
          <Img src={triangles_rect} className="flex-1" />
          <div className="flex-[1.8]">
            <DotLine count={6} />
          </div>
        </Flex>
      </Exercice>

      <Exercice title="Pythagore">
        <LI>
          Le triangle DEF est rectangle en D avec DE=6 cm et DF=8 cm. Calculer
          EF.
        </LI>
        <DotLine count={3} />
        <LI>
          Le triangle KLM est rectangle en K avec KL=5 cm et KM=7 cm. Calculer
          LM.
        </LI>
        <DotLine count={3} />
      </Exercice>

      <Exercice title="Déménagement">
        <Flex gap="5mm" align="center">
          <Img src={armoire} className="flex-1" />
          <div className="flex-[2.2]">
            <P>
              Peut-on renverser l'armoire comme sur le schéma ? (sans abîmer ni
              le plafond, ni l'armoire)
            </P>
            <DotLine count={3} />
          </div>
        </Flex>
        <DotLine count={3} />
      </Exercice>
      <PageBreak />

      <H1>Aires et Surfaces</H1>
      <Exercice title="Calcul d'aire">
        <P>Trouver l'aire de chacune des formes suivantes.</P>
        <Flex gap="5mm" align="center">
          <Img src={area_shapes} className="flex-1" />
          <div className="flex-[1.5]">
            <DotLine count={5} />
          </div>
        </Flex>
        <DotLine count={3} />
      </Exercice>

      <Exercice title="Une figure énigmatique">
        <P>Trouver l’aire de la partie colorée.</P>
        <Flex gap="5mm" align="center">
          <Img src={area_shape} className="flex-1" />
          <div className="flex-[1.5]">
            <DotLine count={5} />
          </div>
        </Flex>
      </Exercice>

      <Exercice title="Une preuve de Pythagore">
        <Flex gap="5mm" align="start">
          <Img src={pythagore_arabe} className="flex-[0.5]">
            Traduction arabe des « Commentaires » d'Euclide
          </Img>
          <div className="flex-1">
            <P>
              Le théorème de Pythagore est connu sous différents noms depuis le
              Ve siècle av. J.-C.
            </P>
            <LI>Reproduire le schéma du manuscrit.</LI>
            <AnswerBox height="9cm">
              <Flex justify="center" align="start">
                <Img src={triangle} className="w-3/10 mt-30" />
              </Flex>
            </AnswerBox>
          </div>
        </Flex>
        <PageBreak />
        <LI>Rappeler l'énoncé du théorème de Pythagore.</LI>
        <DotLine count={3} />
        <LI>
          On donne les longueurs suivantes <LaTeX tex="[AB] = 3cm" />,{" "}
          <LaTeX tex="[AC] = 4cm" /> et <LaTeX tex="[BC] = 5cm" />, calculer
          l'aire des carrés formés par chacun des côtés.
        </LI>
        <DotLine count={5} />
        <LI>
          Que remarque-t-on ? Est-ce cohérent avec le théorème de Pythagore ?
        </LI>
        <DotLine count={5} />
      </Exercice>

      <Exercice title="Aire et cadastre">
        <P>
          L'<S>hectare</S> (symbole : ha) est une unité de mesure de superficie.{" "}
          <em>
            Un hectare équivaut à une surface carrée de 100 mètres de côté.
          </em>
        </P>
        <LI>
          Calculer la surface en m<sup>2</sup> équivalente à 1 hectare.
        </LI>
        <DotLine count={2} />
        <LI>
          Voici le plan (pas à l'échelle) d'un champ de 3 hectares, retrouver
          les dimensions manquantes (en mètres).
        </LI>
        <Flex gap="5mm" align="center">
          <div className="flex-2">
            <DotLine count={4} />
          </div>
          <Img align="right" className="flex-1" src={champ}>
            Plan du champ
          </Img>
        </Flex>
        <DotLine count={4} />
      </Exercice>
      <PageBreak />
      <H1>Volumes et Solides</H1>

      <Exercice title="Calcul de volume">
        <P>Trouver le volume de chacune des formes suivantes.</P>
        <Flex gap="5mm" align="center">
          <Img src={volume_shapes} className="flex-1" />
          <div className="flex-1">
            <DotLine count={3} />
          </div>
        </Flex>
        <DotLine count={3} />
      </Exercice>

      <Exercice title="Volume d’un casier à bouteilles">
        <P>
          Un casier à bouteilles en plastique a la forme d'un pavé droit
          contenant neuf compartiments cylindriques, de diamètre 10 cm chacun,
          traversant le pavé dans toute sa profondeur.
        </P>
        <Flex gap="5mm" align="center">
          <Img src={casier_bouteille} className="flex-1">
            Schéma du casier à bouteilles
          </Img>
          <div className="flex-2">
            <LI>
              Calculer le volume du pavé droit à partir duquel a été formé le
              casier.
            </LI>
            <DotLine count={3} />
          </div>
        </Flex>
        <LI>Calculer le volume intérieur d'un compartiment.</LI>
        <DotLine count={3} />
        <LI>En déduire le volume de plastique.</LI>
        <DotLine count={3} />
      </Exercice>

      <Exercice title="Volume d'un solide">
        <LI marker="">
          Ce solide est composé d'un cube et d'un cône de révolution. Calculer
          une valeur approchée à l'unité près du volume, en cm
          <sup>3</sup>, de ce solide.
        </LI>
        <Flex gap="5mm" align="center">
          <Img src={ex_solid} className="flex-1" />
          <div className="flex-2">
            <DotLine count={5} />
          </div>
        </Flex>
      </Exercice>

      <H1>Angles</H1>
      <Exercice title="Conversion d'angles">
        <LI>
          Rappeler la relation entre un angle <LaTeX tex="\theta" /> exprimé en
          degré et sa valeur <LaTeX tex="\widehat{a}" /> exprimée en radian.
        </LI>
        <DotLine count={2} />
        <LI>Compléter le tableau suivant :</LI>
        <Table className="w-4/5 mx-auto">
          <TEntry
            header={
              <>
                <LaTeX tex="\theta" /> (degrés)
              </>
            }
            content={[244, null, 120, null, 217, null, 261, null, 340].map(
              (k) => (k ? <LaTeX tex={`${k}°`} /> : <DotLine />),
            )}
          />
          <TEntry
            header={
              <>
                <LaTeX tex="\widehat{a}" /> (radians)
              </>
            }
            content={[
              null,
              "\\large \\frac{38\\pi}{ 36}",
              null,
              "\\large \\frac{56\\pi}{ 36}",
              null,
              "\\large \\frac{50\\pi}{ 45}",
              null,
              "\\large \\frac{22\\pi}{ 15}",
              null,
            ].map((k) => (k ? <LaTeX tex={k} /> : <DotLine />))}
          />
        </Table>
        <LI>Donner les valeurs des angles du triangle ABC en degrés.</LI>
        <Flex gap="5mm" align="center">
          <Img src={triangle_ang} className="flex-1" />
          <div className="flex-[2.5]">
            <DotLine count={3} />
          </div>
        </Flex>
      </Exercice>

      <TPPolygone
        nom="l'hexagone"
        cote="3.5"
        coteFigure="4.5"
        href={GGB_HEXAGONE}
      />
      <TPPolygone
        nom="le pentagone"
        cote="5"
        coteFigure="5"
        href={GGB_PENTAGONE}
      />
    </Activites>
  );
}
