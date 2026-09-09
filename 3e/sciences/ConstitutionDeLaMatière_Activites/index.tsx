import { crossword_atoms, ex_atome_be } from "@/assets";
import { Document, Exercice, Img } from "@/components";
import { Block, BlockBox, H1, LI, OL } from "@weasyprint-tsx/ui";
import "./index.css";

export default function ConstitutionDeLaMatiereActivitesDocument() {
  return (
    <Document title="Constitution de la Matière - Activités">
      <H1>Atomes</H1>
      <Exercice title="Mots croisés">
        <p className="question">Complète la grille de mots-croisés.</p>
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
    </Document>
  );
}
