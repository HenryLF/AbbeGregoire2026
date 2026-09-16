import {
  crossword_atoms,
  ex_atome_be,
  polypropylene,
  polystyrene,
} from "@/assets";
import {
  Circle,
  Details,
  Digression,
  Document,
  Exercice,
  Img,
  QR,
} from "@/components";
import {
  Block,
  BlockBox,
  H1,
  LaTeX,
  LI,
  OL,
  PageBreak,
  toLowerAlphabetical,
  UL,
} from "@weasyprint-tsx/ui";
import "./index.css";

export default function ConstitutionDeLaMatiereActivitesDocument() {
  return (
    <Document title="Constitution de la Matière - Activités">
      <H1>Atomes</H1>
      <Exercice title="Mots croisés">
        <p className="question">Complète la grille de mots croisés.</p>
        <BlockBox>
          <Img src={crossword_atoms} className={""} />
          <Block ratio={1} className="text-[10px]">
            <strong>Verticalement</strong>
            <OL>
              <LI>
                Particule électriquement neutre appartenant au noyau d'un atome.
              </LI>
              <LI>Assemblage d'atomes liés entre eux.</LI>
              <LI>Astre sphérique, en orbite autour d'une étoile.</LI>
              <LI>
                Lettre majuscule, suivie parfois d'une minuscule, représentant
                un élément chimique.
              </LI>
            </OL>
            <strong>Horizontalement</strong>
            <OL>
              <LI value={4}>
                Particule chargée négativement se trouvant autour du noyau d'un
                atome.
              </LI>
              <LI>
                Particule chargée positivement appartenant au noyau d'un atome.
              </LI>
              <LI>Particule formant le noyau d'un atome.</LI>
              <LI>
                Astre produisant sa propre énergie lumineuse et thermique.
              </LI>
              <LI>
                Espèce chimique simple, électriquement neutre, constituant la
                matière.
              </LI>
            </OL>
          </Block>
        </BlockBox>
      </Exercice>

      <Exercice title="Utilisation du tableau périodique">
        <p>À l'aide du tableau périodique :</p>
        <LI>Donne le symbole de l'atome qui a pour numéro atomique Z = 26.</LI>
        <LI> Donne le symbole de l'atome qui a 7 protons dans son noyau.</LI>
        <LI>Donne le nom et le symbole de l'atome qui possède 8 électrons.</LI>
      </Exercice>

      <Exercice title="Reconnaître l'atome">
        <p>
          Un de ces schémas représente l'atome de béryllium. Lequel ? Justifie
          ton choix à l'aide du tableau périodique et donne le symbole de cet
          atome.
        </p>
        <Img src={ex_atome_be} className={"w-3/4 mx-auto"} />
      </Exercice>
      <PageBreak />

      <H1>Molécules</H1>
      <Exercice title="De symboles à constituants">
        <p>
          Pour chaque molécule, donne le nom et le nombre de chaque atome qui la
          constitue, puis le nombre total d'atomes.
        </p>
        <div className="columns-4">
          <LI>
            <LaTeX chemical tex="CO2" />
          </LI>
          <LI>
            <LaTeX chemical tex="CH4" />
          </LI>
          <LI>
            <LaTeX chemical tex="NH3" />
          </LI>
          <LI>
            <LaTeX chemical tex="C2H6O" />
          </LI>
        </div>
      </Exercice>

      <Exercice
        title="De constituants à symbole"
        format={toLowerAlphabetical}
        separator=".)"
      >
        <p>Écris la formule chimique de chaque molécule décrite ci-dessous.</p>
        <div className="columns-2" style={{ "--wsx--list--indent": 0 }}>
          <LI>
            1 atome de soufre (
            <LaTeX chemical tex="S" />
            ) et 2 atomes d'oxygène (
            <LaTeX chemical tex="O" />
            ).
          </LI>
          <LI>
            2 atomes d'hydrogène (
            <LaTeX chemical tex="H" />) et 1 atome de soufre.
          </LI>
          <LI>
            1 atome d'hydrogène et 1 atome de chlore (
            <LaTeX chemical tex="Cl" />
            ).
          </LI>
          <LI>1 atome de carbone, 1 d'hydrogène et 3 de chlore.</LI>
        </div>
      </Exercice>

      <H1>Ions</H1>
      <Exercice
        title="Notation des ions"
        format={toLowerAlphabetical}
        separator=".)"
      >
        <div className="question">
          Pour chacun de ces ions, est-ce un cation ou un anion ? Donne la
          charge et le nombre d'électrons perdus ou gagnés.
        </div>
        <div className="columns-3">
          <LI>
            <LaTeX chemical tex="Na+" />
          </LI>
          <LI>
            <LaTeX chemical tex="Cl-" />
          </LI>
          <LI>
            <LaTeX chemical tex="Ca^2+" />
          </LI>
          <LI>
            <LaTeX chemical tex="O^2-" />
          </LI>
          <LI>
            <LaTeX chemical tex="Al^3+" />
          </LI>
          <LI>
            <LaTeX chemical tex="F-" />
          </LI>
        </div>
      </Exercice>
      <H1 marker="&bull;">Activité documentaire</H1>

      <Digression>
        <div className="table float-right">
          <QR
            href="https://www.youtube.com/watch?v=frXu-CEdscM"
            className="w-15"
            align="right"
          >
            vidéo
          </QR>
        </div>
        Les <strong> polymères</strong> sont des substances dont les molécules
        sont constituées d’un très grand nombre de maillons identiques ou
        similaires reliés entre eux par de longues chaînes. En termes simples :
        un polymère est comme une longue chaîne composée de nombreuses « unités
        » identiques appelées <strong>monomères</strong>. Il existe différents
        types de polymères :
        <UL>
          <LI>Naturel : créé par la nature (ADN, caoutchouc, cellulose...).</LI>
          <LI>
            Artificiel : polymère naturel modifié par l’homme pour améliorer ses
            propriétés (viscose, nitrocellulose...).
          </LI>
          <LI>
            Synthétique : complètement artificiel et qui n’existe pas dans la
            nature (nylon, polyéthylène...).
          </LI>
        </UL>
      </Digression>
      <Details align="right">
        Doc <Circle>1</Circle> : définition des polymères
      </Details>
      <BlockBox>
        <>
          <Digression>
            <p>
              Le <strong>polypropylène</strong> (PP) est un plastique résistant
              et léger utilisé principalement dans l'emballage alimentaire,
              l'industrie automobile et les objets du quotidien. C'est notamment
              le plastique des pots de yaourts. On donne une représentation de
              sa structure :
            </p>
            <Img src={polypropylene} />
          </Digression>

          <Details align="right">
            Doc <Circle>2</Circle> : Le polypropylène
          </Details>
        </>

        <>
          <Digression>
            <p>
              Le <strong>polystyrène</strong> (PS) est un plastique léger et
              isolant utilisé principalement dans l'emballage, l'isolation des
              bâtiments et la vaisselle jetable. Sous sa forme expansée, c'est
              notamment le plastique blanc des barquettes alimentaires et des
              calages de protection. On donne une représentation de sa structure
              :
            </p>
            <Img src={polystyrene} />
          </Digression>
          <Details align="right">
            Doc <Circle>3</Circle> : Le polystyrène
          </Details>
        </>
      </BlockBox>

      <div className="text italic">
        Prendre connaissance des documents et regarder la vidéo.
      </div>

      <div className="text italic">
        Pour chacun des plastiques des documents <Circle>2</Circle> et{" "}
        <Circle>3</Circle>, identifier les monomères et donner leur symbole
        chimique.
      </div>
    </Document>
  );
}
