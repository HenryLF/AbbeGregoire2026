import crosswordAtoms from "@assets/chemistry/crossword-atoms.png";
import exAtomeBe from "@assets/chemistry/ex-atome-be.png";
import polypropylene from "@assets/chemistry/polypropylene.png";
import polystyrene from "@assets/chemistry/polystyrene.png";
import { Circle } from "@components/atoms/Decorator";
import { Img } from "@components/atoms/Img";
import { Qr } from "@components/atoms/Qr";
import { P, S } from "@components/atoms/Texts";
import { Activites } from "@components/doctype/Activites";
import { Doc } from "@components/section/Doc";
import { Exercice } from "@components/section/Exercice";
import { LaTeX } from "zefpdf-lab/ui/LaTeX";
import { Flex } from "zefpdf-lab/ui/Layout";
import { LI, OL, toLowerAlpha, UL } from "zefpdf-lab/ui/List";
import { PageBreak } from "zefpdf-lab/ui/Pages";
import { H1 } from "zefpdf-lab/ui/Titles";
import "./index.css";

const alphaMarker = (n: number) => toLowerAlpha(n) + ".)";

const Ce = ({ tex }: { tex: string }) => (
  <LaTeX noFormatNumber tex={`\\mathrm{${tex}}`} />
);

export default function ConstitutionDeLaMatiereActivitesDocument() {
  return (
    <Activites title="Constitution de la Matière" lang="fr">
      <H1>Atomes</H1>
      <Exercice title="Mots croisés">
        <P>Complète la grille de mots croisés.</P>
        <Flex gap="5mm" align="center">
          <Img src={crosswordAtoms} className="flex-1" />
          <div className="flex-1">
            <S>Verticalement</S>
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
            <S>Horizontalement</S>
            <OL>
              <LI count={4}>
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
          </div>
        </Flex>
      </Exercice>

      <Exercice title="Utilisation du tableau périodique">
        <P>À l'aide du tableau périodique :</P>
        <LI>Donne le symbole de l'atome qui a pour numéro atomique Z = 26.</LI>
        <LI>Donne le symbole de l'atome qui a 7 protons dans son noyau.</LI>
        <LI>Donne le nom et le symbole de l'atome qui possède 8 électrons.</LI>
      </Exercice>

      <Exercice title="Reconnaître l'atome">
        <P>
          Un de ces schémas représente l'atome de béryllium. Lequel ? Justifie
          ton choix à l'aide du tableau périodique et donne le symbole de cet
          atome.
        </P>
        <Img src={exAtomeBe} className="w-1/2 mx-auto" />
      </Exercice>
      <PageBreak />

      <H1>Molécules</H1>
      <Exercice title="De symboles à constituants">
        <P>
          Pour chaque molécule, donne le nom et le nombre de chaque atome qui la
          constitue, puis le nombre total d'atomes.
        </P>
        <div className="columns-4">
          {["CO_2", "CH_4", "NH_3", "C_2H_6O"].map((tex) => (
            <LI>
              <Ce tex={tex} />
            </LI>
          ))}
        </div>
      </Exercice>

      <Exercice title="De constituants à symbole" marker={alphaMarker}>
        <P>Écris la formule chimique de chaque molécule décrite ci-dessous.</P>
        <div className="columns-2">
          <LI>
            1 atome de soufre (<Ce tex="S" />) et 2 atomes d'oxygène (
            <Ce tex="O" />
            ).
          </LI>
          <LI>
            2 atomes d'hydrogène (<Ce tex="H" />) et 1 atome de soufre.
          </LI>
          <LI>
            1 atome d'hydrogène et 1 atome de chlore (<Ce tex="Cl" />
            ).
          </LI>
          <LI>1 atome de carbone, 1 d'hydrogène et 3 de chlore.</LI>
        </div>
      </Exercice>

      <H1>Ions</H1>
      <Exercice title="Notation des ions" marker={alphaMarker}>
        <P>
          Pour chacun de ces ions, est-ce un cation ou un anion ? Donne la
          charge et le nombre d'électrons perdus ou gagnés.
        </P>
        <div className="columns-3">
          {["Na^+", "Cl^-", "Ca^{2+}", "O^{2-}", "Al^{3+}", "F^-"].map(
            (tex) => (
              <LI>
                <Ce tex={tex} />
              </LI>
            ),
          )}
        </div>
      </Exercice>

      <H1 marker="•">Activité documentaire</H1>

      <Doc caption="définition des polymères" className="w-full">
        <Flex gap="3mm" align="start">
          <div className="flex-1">
            Les <S>polymères</S> sont des substances dont les molécules sont
            constituées d’un très grand nombre de maillons identiques ou
            similaires reliés entre eux par de longues chaînes. En termes
            simples : un polymère est comme une longue chaîne composée de
            nombreuses « unités » identiques appelées <S>monomères</S>. Il
            existe différents types de polymères :
          </div>
          <Qr href="https://www.youtube.com/watch?v=frXu-CEdscM" size={60}>
            vidéo
          </Qr>
        </Flex>
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
      </Doc>
      <Flex gap="3mm" align="start">
        <Doc caption="Le polypropylène" className="flex-1">
          <P>
            Le <S>polypropylène</S> (PP) est un plastique résistant et léger
            utilisé principalement dans l'emballage alimentaire, l'industrie
            automobile et les objets du quotidien. C'est notamment le plastique
            des pots de yaourts. On donne une représentation de sa structure :
          </P>
          <Img src={polypropylene} />
        </Doc>
        <Doc caption="Le polystyrène" className="flex-1">
          <P>
            Le <S>polystyrène</S> (PS) est un plastique léger et isolant utilisé
            principalement dans l'emballage, l'isolation des bâtiments et la
            vaisselle jetable. Sous sa forme expansée, c'est notamment le
            plastique blanc des barquettes alimentaires et des calages de
            protection. On donne une représentation de sa structure :
          </P>
          <Img src={polystyrene} />
        </Doc>
      </Flex>

      <P>
        <em>Prendre connaissance des documents et regarder la vidéo.</em>
      </P>
      <P>
        <em>
          Pour chacun des plastiques des documents <Circle>2</Circle> et{" "}
          <Circle>3</Circle>, identifier les monomères et donner leur symbole
          chimique.
        </em>
      </P>
    </Activites>
  );
}
