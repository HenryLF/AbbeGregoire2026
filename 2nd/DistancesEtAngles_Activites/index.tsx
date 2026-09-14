import {
  area_shape,
  area_shapes,
  armoire,
  casier_bouteille,
  champ,
  ex_solid,
  fox_and_rabbit,
  pythagore_arabe,
  triangle,
  triangle_ang,
  triangles_rect,
  volume_shapes,
} from "@assets";
import { Document, Exercice, Img } from "@components";
import {
  Block,
  BlockBox,
  DotLine,
  Entry,
  H1,
  LaTeX,
  LI,
  OL,
  Table,
  toLowerAlphabetical,
} from "@weasyprint-tsx/ui";
import "./index.css";
import { GGB_HEXAGONE, GGB_PENTAGONE, TPPolygone } from "./TP_Polygone";

const listUnit = [
  "km",
  "hm",
  "dam",
  <strong>m</strong>,
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
    <table className="border-collapse mx-auto">
      <tr>
        {listUnit.map((e) => (
          <td
            colSpan={dim}
            className="border-solid border border-t-0 first:border-l-0 last:border-r-0 w-10 text-center font-bold px-2"
          >
            {e && (
              <>
                {e}
                {dim > 1 ? <sup>{dim}</sup> : null}
              </>
            )}
          </td>
        ))}
      </tr>
      {Array(rows)
        .fill(0)
        .map((_) => (
          <tr>
            {Array.from({ length: 13 * dim }, (_) => (
              <td className="h-10 border-solid border border-y-0 first:border-l-0 last:border-r-0" />
            ))}
          </tr>
        ))}
    </table>
  );
}

export default function DistancesEtAnglesActivitesDocument() {
  return (
    <Document title="Distances et Angles - Activités">
      <H1>Distances</H1>

      <Exercice title="Lapin et renard">
        <Img src={fox_and_rabbit} className="mx-auto" align="right">
          Position du lapin et du renard
        </Img>
        <LI>
          À l'aide du schéma, donner les positions :
          <OL
            format={toLowerAlphabetical}
            separator=".)"
            style={{ "--wsx--dotline--line-height": "2em" }}
          >
            <LI>
              de la ligne d'arrivée :
              <DotLine inline width={"13cm"} />
            </LI>

            <LI>
              du renard :
              <DotLine inline width={"14.5cm"} />
            </LI>

            <LI>
              du lapin :
              <DotLine inline width={"15cm"} />
            </LI>
          </OL>
        </LI>
        <LI>
          Calculer les distances parcourues depuis la ligne d'arrivée par :
          <OL
            format={toLowerAlphabetical}
            separator=".)"
            style={{ "--wsx--dotline--line-height": "2em" }}
          >
            <LI>
              le renard : <DotLine width={"14.5cm"} inline />
            </LI>
            <LI>
              le lapin : <DotLine width={"15cm"} inline />
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
        <div className="question">
          À l’aide du tableau de conversion des longueurs, compléter :
        </div>
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
                  =<DotLine inline width={"4cm"} />
                  <LaTeX tex={unit} />
                </>
              );
            })}
          </LI>
        ))}
      </Exercice>
      <Exercice title="Grande Roue">
        <p>
          À l’Exposition universelle de Paris en 1900, on pouvait monter dans la
          Grande Roue. Elle avait un diamètre de 93 m. Quelle distance avait-on
          parcourue en faisant :
        </p>
        <LI>un tour de roue ?</LI>
        <DotLine count={2} />
        <LI>dix tours de roue ?</LI>
        <DotLine count={2} />
      </Exercice>
      <Exercice title="Hypoténuse">
        <p className="question">
          Identifier l'hypoténuse de chacun des triangles ci-dessous :
        </p>
        <BlockBox>
          <Img src={triangles_rect} className="h-40 mx-auto" />
          <Block ratio={1.8}>
            <DotLine count={4} />
          </Block>
        </BlockBox>
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
        <BlockBox>
          <Block>
            <img src={armoire} />
          </Block>
          <Block ratio={2.2}>
            <p className="question">
              Peut-on renverser l'armoire comme sur le schéma ? (sans abîmer ni
              le plafond, ni l'armoire)
            </p>
            <DotLine count={3} />
          </Block>
        </BlockBox>
        <DotLine count={3} />
      </Exercice>
      <H1>Aires et Surfaces</H1>
      <Exercice title="Calcul d'aire">
        <p className="question">
          Trouver l'aire de chacune des formes suivantes.
        </p>
        <BlockBox>
          <Img src={area_shapes} />
          <Block ratio={1.5}>
            <DotLine count={5} />
          </Block>
        </BlockBox>
        <DotLine count={3} />
      </Exercice>

      <Exercice title="Une figure énigmatique">
        <p className="question">Trouver l’aire de la partie colorée.</p>
        <BlockBox>
          <Img src={area_shape} />
          <Block ratio={1.5}>
            <DotLine count={5} />
          </Block>
        </BlockBox>
        <DotLine count={3} />
      </Exercice>

      <Exercice title="Une preuve de Pythagore">
        <BlockBox>
          <Block ratio={0.5}>
            <Img src={pythagore_arabe} className="mx-auto">
              Traduction arabe des « Commentaires » d'Euclide
            </Img>
          </Block>
          <Block>
            <p>
              Le théorème de Pythagore est connu sous différents noms depuis le
              Ve siècle av. J.-C.
            </p>
            <LI>Reproduire le schéma du manuscrit.</LI>
            <div className="h-100 w-full bg-[#e0e0e050] rounded flex justify-center items-start ">
              <Img src={triangle} className="w-3/10 mt-30" />
            </div>
          </Block>
        </BlockBox>
        <LI>Rappeler l'énoncé du théorème de Pythagore.</LI>
        <DotLine count={3} />
        <LI>
          On donne les longueurs suivantes <LaTeX tex="[AB] = 3cm" />,
          <LaTeX tex="[AC] = 4cm" /> et
          <LaTeX tex="[BC] = 5cm" />, calculer l'aire des carrés formés par
          chacun des côtés.
        </LI>
        <DotLine count={5} />
        <LI>
          Que remarque-t-on ? Est-ce cohérent avec le théorème de Pythagore ?
        </LI>
        <DotLine count={5} />
      </Exercice>
      <Exercice title="Aire et cadastre">
        <p>
          L'<strong>hectare</strong> (symbole : ha) est une unité de mesure de
          superficie.{" "}
          <em>
            {" "}
            Un hectare équivaut à une surface carrée de 100 mètres de côté.
          </em>
        </p>
        <LI>
          Calculer la surface en m<sup>2</sup> équivalente à 1 hectare.
        </LI>
        <DotLine count={2} />
        <LI>
          Voici le plan (pas à l'échelle) d'un champ de 3 hectares, retrouver
          les dimensions manquantes (en mètres).
        </LI>
        <BlockBox align="middle">
          <Block ratio={2}>
            <DotLine count={3} />
          </Block>
          <Img align="right" className="mx-auto h-25" src={champ}>
            Plan du champ
          </Img>
        </BlockBox>
        <DotLine count={4} />
      </Exercice>

      <H1>Volumes et Solides</H1>

      <Exercice title="Calcul de volume">
        <p className="question">
          Trouver le volume de chacune des formes suivantes.
        </p>
        <BlockBox>
          <Img src={volume_shapes} />
          <Block ratio={1}>
            <DotLine count={3} />
          </Block>
        </BlockBox>
        <DotLine count={3} />
      </Exercice>
      <Exercice title="Volume d’un casier à bouteilles">
        <p>
          Un casier à bouteilles en plastique a la forme d'un pavé droit
          contenant neuf compartiments cylindriques, de diamètre 10 cm chacun,
          traversant le pavé dans toute sa profondeur.
        </p>
        <BlockBox>
          <Img src={casier_bouteille} className={"h-40 mx-auto"}>
            Schéma du casier à bouteilles
          </Img>
          <Block ratio={2}>
            <LI>
              Calculer le volume du pavé droit à partir duquel a été formé le
              casier.
            </LI>
            <DotLine count={3} />
          </Block>
        </BlockBox>
        <LI>Calculer le volume intérieur d'un compartiment.</LI>
        <DotLine count={3} />
        <LI>En déduire le volume de plastique.</LI>
        <DotLine count={3} />
      </Exercice>

      <Exercice title="Volume d'un solide">
        <LI format={() => ""}>
          Ce solide est composé d'un cube et d'un cône de révolution. Calculer
          une valeur approchée à l'unité près du volume, en cm
          <sup>3</sup>, de ce solide.
        </LI>
        <BlockBox>
          <Img src={ex_solid}></Img>
          <Block ratio={2}>
            <DotLine count={5} />
          </Block>
        </BlockBox>
      </Exercice>

      <H1>Angles</H1>
      <Exercice title="Conversion d'angles">
        <LI>
          Rappeler la relation entre un angle <LaTeX tex="\theta" /> exprimé en
          degré et sa valeur <LaTeX tex="\widehat{a}" /> exprimée en radian.
        </LI>
        <DotLine count={2} />
        <LI>Compléter le tableau suivant :</LI>
        <Table orientation="row" className="w-8/10 mx-auto">
          <Entry
            content={[244, null, 120, null, 217, null, 261, null, 340].map(
              (k) => (k ? <LaTeX tex={`${k}°`} /> : <DotLine />),
            )}
          >
            <LaTeX tex="\theta" /> (degrés){" "}
          </Entry>
          <Entry
            content={[
              null,
              "\\large \\frac{38π}{ 36}",
              null,
              "\\large \\frac{56π}{ 36}",
              null,
              "\\large \\frac{50π}{ 45}",
              null,
              "\\large \\frac{22π}{ 15}",
              null,
            ].map((k) => (k ? <LaTeX tex={k} /> : <DotLine />))}
          >
            <LaTeX tex="\widehat{a}" /> (radians){" "}
          </Entry>
        </Table>
        <LI>Donner les valeurs des angles du triangle ABC en degrés.</LI>
        <BlockBox>
          <Img src={triangle_ang} />
          <Block ratio={2.5}>
            <DotLine count={3} />
          </Block>
        </BlockBox>
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
    </Document>
  );
}
