import type { ComponentChildren } from "preact";
import { Flex } from "zefpdf-lab/ui/Layout";
import { LI, OL, UL } from "zefpdf-lab/ui/List";
import { PageBreak } from "zefpdf-lab/ui/Pages";
import { H1, H2, H6 } from "zefpdf-lab/ui/Titles";

function Columns({
  casio,
  texas,
}: {
  casio: ComponentChildren;
  texas: ComponentChildren;
}) {
  return (
    <Flex gap="5mm">
      <div className="flex-1">
        <H6 marker="" className="text-center">
          CASIO
        </H6>
        {casio}
      </div>
      <div className="flex-1">
        <H6 marker="" className="text-center">
          Texas Instrument
        </H6>
        {texas}
      </div>
    </Flex>
  );
}

export default function HelperPage() {
  return (
    <>
      <PageBreak />
      <H1 marker="" className="text-center">
        Aide Calculatrice
      </H1>
      <H2 marker="" count={1}>
        Tableau de valeurs d’une fonction
      </H2>
      <Columns
        casio={
          <OL indent={0}>
            <LI>Pour saisir la fonction :</LI>
            <UL indent="5mm">
              <LI>Choisir le menu « TABLE »</LI>
              <LI>Saisir l’expression de la ou les fonctions</LI>
            </UL>
            <LI>Pour paramétrer le tableau :</LI>
            <UL indent="5mm">
              <LI>Appuyer sur la touche de fonction qui correspond à «SET»</LI>
              <LI>Saisir la valeur de x du début du tableau dans « Start »</LI>
              <LI>Saisir la valeur de x de fin du tableau dans « End » ;</LI>
              <LI>
                Saisir la valeur du pas (plus petit écart entre chaque valeur
                de x) dans « Step ».
              </LI>
            </UL>
            <LI>Pour voir le tableau de valeurs :</LI>
            <UL indent="5mm">
              <LI>Appuyer sur la touche de fonction « TABL »</LI>
            </UL>
          </OL>
        }
        texas={
          <OL indent={0}>
            <LI>Pour saisir la fonction :</LI>
            <UL indent="5mm">
              <LI>Appuyer sur la touche</LI>
              <LI>Saisir l’expression de la ou les fonctions</LI>
            </UL>
            <LI>Pour paramétrer le tableau :</LI>
            <UL indent="5mm">
              <LI>Appuyer sur la touche «déf table»</LI>
              <LI>Saisir la valeur de x du début du tableau dans « DébTbl »</LI>
              <LI>
                Saisir la valeur du pas (écart entre chaque valeur de x) dans «
                Pas »
              </LI>
            </UL>
            <LI>Pour voir le tableau de valeurs :</LI>
            <UL indent="5mm">
              <LI>Appuyer sur la touche « table »</LI>
            </UL>
          </OL>
        }
      />

      <H2 marker="">Représentation graphique d’une fonction</H2>
      <Columns
        casio={
          <OL indent={0}>
            <LI>Pour saisir la fonction :</LI>
            <UL indent="5mm">
              <LI>Choisir le menu « GRAPH »</LI>
              <LI>Saisir la (ou les) fonction(s)</LI>
            </UL>
            <LI>Pour paramétrer la fenêtre graphique :</LI>
            <UL indent="5mm">
              <LI>Appuyer sur « V-Windows »</LI>
              <LI>Saisir les paramètres en validant avec ▼</LI>
            </UL>
            <LI>Pour afficher la ou les courbes :</LI>
            <UL indent="5mm">
              <LI>À partir de la zone de paramétrage de l’écran : « EXE »</LI>
              <LI>
                À partir de la saisie des fonctions : Appuyer sur la touche de
                fonction « DRAW »
              </LI>
            </UL>
          </OL>
        }
        texas={
          <OL indent={0}>
            <LI>Pour saisir la fonction :</LI>
            <UL indent="5mm">
              <LI>Appuyer sur la touche « f(x) »</LI>
              <LI>Saisir la (ou les) fonction(s)</LI>
            </UL>
            <LI>Pour paramétrer la fenêtre graphique :</LI>
            <UL indent="5mm">
              <LI>Appuyer sur « fenêtre »</LI>
              <LI>Saisir les paramètres</LI>
            </UL>
            <LI>Pour afficher la ou les courbes :</LI>
            <UL indent="5mm">
              <LI>Appuyer sur « graphe »</LI>
            </UL>
          </OL>
        }
      />

      <H2 marker="">Lecture graphique des valeurs d’une fonction</H2>
      <Columns
        casio={
          <UL indent="5mm">
            <LI>Appuyer sur la touche « TRACE »</LI>
            <LI>Se déplacer sur la courbe avec les flèches ◀ et ▶</LI>
            <LI>
              Passer d’une courbe à l’autre courbe avec les flèches ▼ et ▲
            </LI>
          </UL>
        }
        texas={
          <UL indent="5mm">
            <LI>Appuyer sur la touche « trace »</LI>
            <LI>Se déplacer sur la courbe avec les flèches ◀ et ▶</LI>
            <LI>
              Passer d’une courbe à l’autre courbe avec les flèches ▼ et ▲
            </LI>
          </UL>
        }
      />

      <H2 marker="">Minimum ou Maximum d’une fonction</H2>
      <Columns
        casio={
          <UL indent="5mm">
            <LI>À partir du graphique, appuyer sur « G-Solv »</LI>
            <LI>
              Appuyer sur la touche de fonction « MIN » pour obtenir le minimum
              ou « MAX » pour obtenir le maximum
            </LI>
            <LI>
              Se déplacer sur la courbe avec les flèches ◀ et ▶ pour passer un
              minimum à l’autre (ou d’un maximum à l’autre) s’il y en a
              plusieurs sur la courbe.
            </LI>
          </UL>
        }
        texas={
          <UL indent="5mm">
            <LI>
              À partir de la fenêtre graphique, appuyer sur la touche « calculs
              », puis choisir dans la liste « minimum » ou « maximum »
            </LI>
            <LI>
              Positionner le curseur avant le minimum ou le maximum cherché et
              valider.
            </LI>
            <LI>
              Positionner le curseur après le minimum ou le maximum cherché
              d’intersection cherché et valider deux fois.
            </LI>
          </UL>
        }
      />
    </>
  );
}
