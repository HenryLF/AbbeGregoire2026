import brush from "@assets/algebra/brush.png";
import { AnswerBox } from "@components/atoms/AnswerBox";
import hammer from "@assets/algebra/hammer.png";
import paint from "@assets/algebra/paint.png";
import parpaing from "@assets/algebra/parpaing.png";
import shoes1 from "@assets/algebra/shoes1.png";
import shoes2 from "@assets/algebra/shoes2.png";
import shoes3 from "@assets/algebra/shoes3.png";
import truck1 from "@assets/algebra/truck1.png";
import truck2 from "@assets/algebra/truck2.png";
import truck3 from "@assets/algebra/truck3.png";
import { Circle } from "@components/atoms/Decorator";
import { Img } from "@components/atoms/Img";
import { Interval } from "@components/atoms/Interval";
import { P, S } from "@components/atoms/Texts";
import { Activites } from "@components/doctype/Activites";
import { Call, Exercice, SubQuestion, TP } from "@components/section/Exercice";
import type { ComponentChildren } from "preact";
import { DotLine, Options } from "zefpdf-lab/ui/Inputs";
import { LaTeX } from "zefpdf-lab/ui/LaTeX";
import { Flex } from "zefpdf-lab/ui/Layout";
import { LI, UL } from "zefpdf-lab/ui/List";
import { Table, TEntry, THeader } from "zefpdf-lab/ui/Table";
import { H1 } from "zefpdf-lab/ui/Titles";
import "./index.css";

const X = () => <LaTeX tex="x" />;

/** Small inline picture used in the "image equations". */
const Pic = ({ src, width }: { src: string; width: string }) => (
  <Img src={src} style={{ width }} />
);

/** One "image equation": numbered badge followed by its content. */
function ImgEquation({
  n,
  children,
}: {
  n: number;
  children: ComponentChildren;
}) {
  return (
    <Flex align="center" gap="1.5mm" className="mb-[1mm]">
      <Circle>{n}</Circle>
      {children}
    </Flex>
  );
}

/** Answer boxes, `columns` per row, each starting with `tex ⇔`. */
function AnswerBoxes({
  items,
  height,
  columns,
}: {
  items: string[];
  height: string;
  columns: number;
}) {
  return (
    <Flex className="flex-wrap">
      {items.map((tex) => (
        <div className="px-1" style={{ width: `${100 / columns}%` }}>
          <AnswerBox height={height}>
            <LaTeX tex={`${tex} \\Harr`} />
          </AnswerBox>
        </div>
      ))}
    </Flex>
  );
}

const choices = [
  "x + 1",
  "x - 1",
  "x + 2",
  "x - 2",
  "\\large \\frac{x}{2}",
  "2x",
];

const intervals: [string, number, string, number, string][] = [
  ["[", 2, ";", 15, "]"],
  ["]", -6, ";", 6, "["],
  ["]", 4, ";", 7.5, "]"],
  ["[", 25, ";", 50, "["],
  ["]", 8, ";", 9.8, "]"],
];

export default function PremierDegreActivitesDocument() {
  return (
    <Activites title="Résolution de problèmes du 1er degré" lang="fr">
      <H1>Équation du premier degré</H1>
      <TP title="Réflexions mentales ...">
        <LI>Compléter la case manquante.</LI>
        <Flex className="flex-wrap">
          {[
            <>
              <Pic src={hammer} width="1.3cm" /> +
              <Pic src={hammer} width="1.3cm" /> +
              <Pic src={hammer} width="1.3cm" /> = 9
            </>,
            <>
              <Pic src={hammer} width="1.3cm" /> +
              <Pic src={brush} width="1.2cm" /> +
              <Pic src={brush} width="1.2cm" /> = 13
            </>,
            <>
              <Pic src={hammer} width="1.3cm" /> +
              <Pic src={brush} width="1.2cm" /> +
              <Pic src={paint} width="1.1cm" /> = 22
            </>,
            <>
              <Pic src={hammer} width="1.3cm" /> x
              <Pic src={brush} width="1.2cm" /> -
              <Pic src={paint} width="1.1cm" /> = ???
            </>,
          ].map((child, k) => (
            <div className="w-1/2">
              <ImgEquation n={k + 1}>{child}</ImgEquation>
            </div>
          ))}
        </Flex>
        <DotLine count={4} />
        <LI>Compléter la case manquante.</LI>
        <Flex gap="3mm">
          {[
            {
              child: (
                <>
                  <Pic src={truck1} width="0.7cm" /> = 30
                </>
              ),
              ratio: 1,
            },
            {
              child: (
                <>
                  <Pic src={truck2} width="0.7cm" /> = 50
                </>
              ),
              ratio: 1,
            },
            {
              child: (
                <>
                  3 x <Pic src={truck1} width="0.7cm" /> +
                  <Pic src={truck3} width="0.7cm" /> =
                  <Pic src={truck2} width="0.7cm" /> + 5 x
                  <Pic src={truck3} width="0.7cm" />
                </>
              ),
              ratio: 3,
            },
            {
              child: (
                <>
                  <Pic src={truck3} width="0.7cm" /> = ?
                </>
              ),
              ratio: 1,
            },
          ].map(({ child, ratio }, k) => (
            <div style={{ flex: ratio }}>
              <ImgEquation n={k + 1}>{child}</ImgEquation>
            </div>
          ))}
        </Flex>
        <DotLine count={5} />
      </TP>
      <Exercice title="Équations de base">
        <AnswerBoxes
          columns={3}
          height="2.5cm"
          items={[
            "3=6+x",
            "42 = 6x",
            "6x = 9",
            "4+x=2",
            "x + 2 = 1245",
            "{\\large \\frac{x}{2}} = 80",
            "1 = 0.8 + x",
            "23  = {\\large \\frac{x}{56}}",
            "3+x =8",
          ]}
        />
      </Exercice>

      <Exercice title="Manipulation d'équations">
        <AnswerBoxes
          columns={3}
          height="3.5cm"
          items={[
            "6x - 5 = 19",
            "3x + 12 = -9",
            "3x - 1 = 8",
            "28 - 8x = 12",
            "x + 5 = 3x - 7",
            "4x - 5 = 3x + 9",
            "9x + 8 = 13x - 1",
            "3x - 5 = x - 7",
            "18 + 3x = 32 - 5x",
          ]}
        />
      </Exercice>

      <Exercice title="Terrains d'arbres">
        <P>
          La construction d’une portion d’autoroute doit passer sur un terrain
          dont les arbres devront être déracinés avant de pouvoir faire le
          terrassement. Le propriétaire de la portion fait l’inventaire des{" "}
          <em>2 500 arbres</em> qu’on peut y trouver. Le terrain contient{" "}
          <em>quatre fois plus de chênes que de châtaigniers</em> et{" "}
          <em>500 autres arbres</em> différents.{" "}
          <S>
            Le propriétaire veut connaitre le nombre de chênes et le nombre de
            châtaigniers.
          </S>
        </P>
        <LI>
          On appelle <X /> le nombre de châtaigniers. Choisir, parmi les
          propositions suivantes, la manière d’écrire le nombre de chênes :
        </LI>
        <Options>
          {["x + 4", "4x", "\\large \\frac{x}{2}", "4-x"].map((tex) => (
            <LaTeX tex={tex} />
          ))}
        </Options>
        <DotLine />
        <LI>
          Sachant que :{" "}
          <LaTeX
            noFormatNumber
            tex="\text{nombre de châtaigniers} + \text{nombre de chênes} + \text{nombre des autres arbres} = \text{nombre total d’arbres}"
          />
          , choisir parmi les équations suivantes celle qui traduit le problème
          à résoudre.
        </LI>
        <Options>
          {[
            "x + 40 - 500 = 2500",
            "x + 4x + 500 + 2500 = 0",
            "x + 4x + 500 = 2500",
          ].map((tex) => (
            <LaTeX tex={tex} />
          ))}
        </Options>
        <DotLine />
        <LI>Résoudre l’équation choisie.</LI>
        <DotLine count={4} />
        <LI>
          Répondre au problème en déduisant le nombre de chênes et de
          châtaigniers.
        </LI>
        <DotLine count={2} />
      </Exercice>

      <Exercice title="Consommations à un bar">
        <P>
          Cinq ouvriers sont à une terrasse d’un café. Ils commandent 2 cafés et
          3 sodas. Le prix du soda est le double de celui du café et l’addition
          s’élève à 12 €. On note <X /> le prix d’un café.
        </P>
        <LI>
          Exprimer en fonction de <X /> le prix d’un soda.
        </LI>
        <DotLine />
        <LI>
          Exprimer en fonction de <X /> le prix de 3 sodas.
        </LI>
        <DotLine />
        <LI>
          Écrire l’équation qui traduit la commande de 2 cafés et de 3 sodas
          pour 12 €.
        </LI>
        <DotLine count={2} />
        <LI>Résoudre l’équation trouvée à la question précédente.</LI>
        <DotLine count={3} />
        <LI>Quel est le prix d’un café et celui d’un soda ?</LI>
        <DotLine count={2} />
      </Exercice>

      <Exercice title="Le 3 000 mètres">
        <P>
          En athlétisme, le record du monde masculin du 3 000 m est détenu
          depuis 2024 par Jakob Ingebrigtsen. <br />
          Pour franchir la ligne d’arrivée du 3 000 m, il est nécessaire de
          parcourir 7 tours de stade et 200 m.
        </P>
        <LI marker="">Quelle est la longueur d’un tour de stade ?</LI>
        <DotLine count={5} />
      </Exercice>

      <TP title="Ventes de chaussures de sécurité">
        <Flex gap="3mm" align="center">
          <P className="flex-[2]">
            Un magasin de chaussures de sécurité propose trois types de modèles
            S1, S2 et S3. À la fin de la journée,{" "}
            <em>27 ventes ont été réalisées</em>. Il y a eu{" "}
            <em>2 fois plus de modèles S3 que de S1 </em> et{" "}
            <em> une paire de plus du modèle S1 que du modèle S2</em>.
          </P>
          <Flex gap="3mm" align="end" className="flex-1">
            {[shoes1, shoes2, shoes3].map((img, k) => (
              <Img src={img} align="center" className="w-1/3">
                Chaussure S{k + 1}
              </Img>
            ))}
          </Flex>
        </Flex>
        <P align="center">
          <S>
            On cherche à déterminer combien de chaque type de modèles ont été
            vendus.
          </S>
        </P>
        <LI>
          Soit <X /> le nombre de paires de chaussures de sécurité de modèle S1
          vendues.
        </LI>
        <SubQuestion count={1}>
          <LI>
            Exprimer le nombre de chaussures de modèle S2 vendues en fonction de{" "}
            <X /> :
          </LI>
          <Options>
            {choices.map((tex) => (
              <LaTeX tex={tex} />
            ))}
          </Options>
          <LI>
            Exprimer le nombre de chaussures de modèle S3 vendues en fonction de
            x :
          </LI>
          <Options>
            {choices.map((tex) => (
              <LaTeX tex={tex} />
            ))}
          </Options>
          <LI>
            En déduire l’équation à résoudre pour répondre au problème posé :
          </LI>
          <DotLine count={2} />
        </SubQuestion>
        <Call>Faire vérifier la mise en équation du problème</Call>
        <LI>On dispose du fichier Libre Office CALC « CHAUSSURES.ods ».</LI>
        <SubQuestion count={2}>
          <LI>
            Numéroter de 1 à 27 le nombre de paires de chaussures de modèle S1
            dans la colonne A.
          </LI>
          <LI>Saisir en B2 la formule correcte : </LI>
          <Options>
            <>« =A2 - 1 »</>
            <>« =2*A2 »</>
          </Options>
          <LI>Saisir en C2 la formule correcte : </LI>
          <Options>
            <>« =A2 - 1 »</>
            <>« =2*A2 »</>
          </Options>
          <LI>
            Saisir une formule en D2 pour calculer le total des paires de
            chaussures de sécurité vendues.
          </LI>
          <LI>
            Sélectionner les cellules A2 à D2, puis les copier jusqu’à la ligne
            28.
          </LI>
        </SubQuestion>
        <Call>Faire vérifier le tableau.</Call>
        <LI>
          Déterminer la solution de l’équation à l’aide du tableau obtenu. <X />{" "}
          = <DotLine width="3cm" />
        </LI>
        <LI>Répondez à la question du problème.</LI>
        <DotLine count={3} />
      </TP>

      <H1>Inéquations du premier degré</H1>
      <TP title="Notion d'intervalle">
        <P>
          Un intervalle de valeurs se note entre crochets. Il existe cependant
          deux sortes de crochets :
        </P>
        <UL indent="5mm">
          <LI>
            les crochets « fermés », comme par exemple <LaTeX tex="[3 ; 5]" /> :
            cet intervalle représente tous les nombres compris entre 3 et 5, les
            nombres 3 et 5 inclus (= compris) ;
          </LI>
          <LI>
            les crochets « ouverts », comme par exemple <LaTeX tex="]2 ; 8[" />{" "}
            : cet intervalle représente tous les nombres compris entre 2 et 8,
            les nombres 2 et 8 exclus (= non compris).
          </LI>
        </UL>
        <SubQuestion count={1}>
          {intervals.map((arr) => (
            <LI>
              Dans l'intervalle <LaTeX tex={arr.join("")} /> :
              <UL indent={0} className="columns-2 ml-2">
                <LI>
                  {arr[1].toLocaleString("fr")} est-il{" "}
                  <S>compris / non compris</S>,
                </LI>
                <LI>
                  {arr[3].toLocaleString("fr")} est-il{" "}
                  <S>compris / non compris</S>
                </LI>
              </UL>
            </LI>
          ))}
          <LI>
            L’écriture <LaTeX tex="[9 ; 3[" /> est-elle correcte ? Si non, la
            réécrire correctement
          </LI>
          <DotLine />
          <LI>
            Écrire l’intervalle des nombres compris entre 5 et 15, avec 5 inclus
            et 15 exclu.
          </LI>
          <DotLine />
          <LI>
            Écrire l’intervalle des nombres compris entre -8 et -6, avec -8
            exclu et -6 inclus.
          </LI>
          <DotLine />
          <LI>
            Écrire l’intervalle des nombres compris entre 4 et 2, avec 4 inclus
            et 2 inclus.
          </LI>
          <DotLine />
        </SubQuestion>
        <Flex gap="3mm" align="center">
          <div className="flex-[2]">
            <LI count={2}>
              On peut représenter un intervalle sur une droite graduée.
              L’exemple ci-contre traduit l’intervalle <LaTeX tex="[2 ; 3[" />.
              Compléter le tableau suivant :
            </LI>
          </div>
          <Interval
            className="flex-1"
            min={0}
            max={5}
            from={2}
            to={3}
            closedRight={false}
          />
        </Flex>
        <Table className="w-8/10 mx-auto">
          <THeader content={["Représentation graphique", "Intervalle"]} />
          <TEntry
            content={[
              <Interval from={0} to={3} />,
              <DotLine />,
            ]}
          />
          <TEntry
            content={[
              <Interval min={-6} max={2} from={-5} to={-3.5} />,
              <DotLine />,
            ]}
          />
          <TEntry
            content={[<Interval min={-4} max={4} />, <LaTeX tex="]-2;1]" />]}
          />
        </Table>
        <LI>
          La notation <LaTeX tex="\infty" /> se lit « infini ». L’infini du côté
          des nombres négatifs se note <LaTeX tex="-\infty" /> et l’infini côté
          positif <LaTeX tex="+\infty" />.{" "}
          <em>
            Attention, on associe systématiquement un crochet ouvert avec le
            symbole <LaTeX tex="\infty" /> dans un intervalle.
          </em>
        </LI>
        <Table className="w-8/10 mx-auto my-2">
          <THeader content={["Représentation graphique", "Intervalle"]} />
          <TEntry
            content={[
              <Interval from={0} to={Infinity} />,
              <DotLine />,
            ]}
          />
          <TEntry
            content={[
              <Interval from={-Infinity} to={3} />,
              <DotLine />,
            ]}
          />
          <TEntry
            content={[
              <Interval min={-4} max={4} />,
              <LaTeX tex="]-\infty ; - 1.5[" />,
            ]}
          />
          <TEntry
            content={[
              <Interval min={-4} max={4} />,
              <LaTeX tex="[-2.5 ; +\infty[" />,
            ]}
          />
        </Table>
        <P>
          Les deux membres d’une inéquation sont séparés par un des signes
          suivants : <LaTeX tex="<" />, <LaTeX tex=">" />, <LaTeX tex="\le" />{" "}
          ou <LaTeX tex="\ge" />. La solution d’une inéquation est un ensemble
          de nombres, noté par un (ou plusieurs) intervalle(s).
        </P>
        <Flex gap="3mm" align="center">
          <div className="flex-[2]">
            <LI>
              L’inéquation <LaTeX tex="x > 2" /> a pour solution l’intervalle{" "}
              <LaTeX tex="]2 ; +\infty[" /> dont la représentation graphique est
              donnée ci-contre :<br />
              Traduire les résultats d’inéquations suivants, en intervalle, puis
              en représentation graphique :
            </LI>
          </div>
          <Interval className="flex-1" from={2} to={Infinity} />
        </Flex>
        <Table className="w-9/10 mx-auto">
          <THeader
            content={["Inéquation", "Intervalle", "Représentation graphique"]}
          />
          {["x<3", "x \\le 1.5", "x > 2.5", "x \\ge -0.5", "1 < x < 2.5"].map(
            (tex) => (
              <TEntry content={[<LaTeX tex={tex} />, "", <Interval />]} />
            ),
          )}
        </Table>
      </TP>

      <Exercice title="Palette de parpaing">
        <Flex gap="3mm" align="center">
          <div className="flex-[3]">
            <P>
              Un parpaing peut être assimilé à un parallélépipède rectangle dont
              les dimensions sont données ci-contre.
            </P>
            <LI>
              Calculer le volume (en m<sup>3</sup>) d’un parpaing.
              <br />
              On rappelle que : <LaTeX tex="V = L\times l \times h" />
            </LI>
            <DotLine count={2} />
          </div>
          <Img align="right" src={parpaing} className="flex-1">
            Dimensions d'un parpaing
          </Img>
        </Flex>
        <LI>
          Un mètre cube (m<sup>3</sup>) de béton pèse{" "}
          <LaTeX tex="\rho =2200\,kg/m^3" />, calculer la masse d'un parpaing.
        </LI>
        <DotLine count={2} />
        <LI>
          On souhaite élever une palette chargée de parpaings. On considère que
          la masse de la palette vide est de 30 kg et que celle d’un parpaing
          est de 8 kg. Donner la masse d'une palette en fonction de <X /> le
          nombre de parpaings chargés.
        </LI>
        <DotLine count={3} />
        <LI>
          Afin de ne pas dépasser la capacité de charge d’un chariot, il est
          nécessaire que la masse à soulever lors de l’élévation à une grande
          hauteur, ne dépasse pas 1 000 kg. Traduire cette contrainte par une
          inéquation puis la résoudre.
        </LI>
        <DotLine count={4} />
      </Exercice>

      <Exercice title="Frais kilométriques">
        <P>
          Une entreprise de travaux publics propose pour le remboursement des
          frais kilométriques hebdomadaires de ses chefs de chantier deux
          options :
        </P>
        <UL marker="• Option">
          <LI>
            <Circle>A</Circle> : Forfait de 60 € + 0,32 € par kilomètre;
          </LI>
          <LI>
            <Circle>B</Circle> : Forfait de 90 € + 0,17 € par kilomètre.
          </LI>
        </UL>
        <P align="center" className="w-8/10 mx-auto">
          <S>
            Problématique : On cherche à déterminer l’option la plus avantageuse
            en fonction du nombre de kilomètres parcourus
          </S>
        </P>

        <LI>Pour une distance parcourue de 120 km.</LI>
        <SubQuestion count={1}>
          <LI>
            Calculer pour les deux options les frais remboursés en une semaine.
          </LI>
          <UL marker="• Option" indent={0}>
            <LI>
              <Circle>A</Circle> <DotLine width="12cm" />
            </LI>
            <LI>
              <Circle>B</Circle> <DotLine width="12cm" />
            </LI>
          </UL>
          <LI>
            Quelle est dans ce cas l'option la plus rentable pour le chef de
            chantier.
          </LI>
          <DotLine />
        </SubQuestion>

        <LI>Pour une distance parcourue de 275 km.</LI>
        <SubQuestion count={2}>
          <LI>
            Calculer pour les deux options les frais remboursés en une semaine.
          </LI>
          <UL marker="• Option" indent={0}>
            <LI>
              <Circle>A</Circle> <DotLine width="12cm" />
            </LI>
            <LI>
              <Circle>B</Circle> <DotLine width="12cm" />
            </LI>
          </UL>
          <LI>
            Quelle est dans ce cas l'option la plus rentable pour le chef de
            chantier.
          </LI>
          <DotLine />
        </SubQuestion>

        <LI>
          On désigne par <X /> le nombre de kilomètres parcourus en une semaine
          par le chef de chantier.
        </LI>
        <SubQuestion count={3}>
          <LI>
            Donner la relation permettant de calculer les frais remboursés{" "}
            <LaTeX tex="F_A" /> en fonction de <X /> dans l'option{" "}
            <Circle>A</Circle>.
          </LI>
          <DotLine />
          <LI>
            Donner la relation permettant de calculer les frais remboursés{" "}
            <LaTeX tex="F_B" /> en fonction de <X /> dans l'option{" "}
            <Circle>B</Circle>.
          </LI>
          <DotLine />
          <LI>Donner une inéquation traduisant la problématique.</LI>
          <DotLine count={2} />
        </SubQuestion>

        <LI>Résoudre l'inéquation et répondre à la problématique.</LI>
        <DotLine count={5} />
      </Exercice>
    </Activites>
  );
}
