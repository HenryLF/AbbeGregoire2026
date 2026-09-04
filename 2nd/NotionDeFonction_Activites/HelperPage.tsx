import {
    Block,
    BlockBox,
    H1,
    H2,
    H6,
    LI,
    OL,
    Page,
    UL,
} from "@weasyprint-tsx/ui";
import styles from "./HelperPage.module.css";
export default function HelperPage() {
  return (
    <Page className={styles.page}>
      <H1>Aide Calculatrice</H1>
      <H2 count={1}>Tableau de valeurs d’une fonction</H2>

      <BlockBox>
        <Block>
          <H6>CASIO</H6>
          <OL>
            <LI>Pour saisir la fonction :</LI>
            <UL>
              <LI>Choisir le menu « TABLE »</LI>
              <LI>Saisir l’expression de la ou les fonctions</LI>
            </UL>
            <LI>Pour paramétrer le tableau :</LI>
            <UL>
              <LI>Appuyer sur la touche de fonction qui correspond à «SET»</LI>
              <LI>Saisir la valeur de x du début du tableau dans « Start »</LI>
              <LI>Saisir la valeur de x de fin du tableau dans « End » ;</LI>
              <LI>
                Saisir la valeur du pas (plus petit écart entre chaque valeur de
                x) dans « Step ».
              </LI>
            </UL>
            <LI>Pour voir le tableau de valeurs :</LI>
            <UL>
              <LI>Appuyer sur la touche de fonction « TABL »</LI>
            </UL>
          </OL>
        </Block>

        <Block>
          <H6>Texas Instrument</H6>

          <OL>
            <LI>Pour saisir la fonction :</LI>
            <UL>
              <LI>Appuyer sur la touche</LI>
              <LI>Saisir l’expression de la ou les fonctions</LI>
            </UL>
            <LI>Pour paramétrer le tableau :</LI>
            <UL>
              <LI>Appuyer sur la touche «déf table»</LI>
              <LI>Saisir la valeur de x du début du tableau dans « DébTbl »</LI>
              <LI>
                Saisir la valeur du pas (écart entre chaque valeur de x) dans «
                Pas »
              </LI>
            </UL>
            <LI>Pour voir le tableau de valeurs :</LI>
            <UL>
              <LI>Appuyer sur la touche « table »</LI>
            </UL>
          </OL>
        </Block>
      </BlockBox>

      <H2>Représentation graphique d’une fonction</H2>

      <BlockBox>
        <Block>
          <H6>CASIO</H6>
          <OL>
            <LI>Pour saisir la fonction :</LI>
            <UL>
              <LI>Choisir le menu « GRAPH »</LI>
              <LI>Saisir la (ou les) fonction(s)</LI>
            </UL>
            <LI>Pour paramétrer la fenêtre graphique :</LI>
            <UL>
              <LI>Appuyer sur « V-Windows »</LI>
              <LI>Saisir les paramètres en validant avec ▼</LI>
            </UL>
            <LI>Pour afficher la ou les courbes :</LI>
            <UL>
              <LI>À partir de la zone de paramétrage de l’écran : « EXE »</LI>
              <LI>
                À partir de la saisie des fonctions : Appuyer sur la touche de
                fonction « DRAW »
              </LI>
            </UL>
          </OL>
        </Block>

        <Block>
          <H6>Texas Instrument</H6>

          <OL>
            <LI>Pour saisir la fonction :</LI>
            <UL>
              <LI>Appuyer sur la touche « f(x) »</LI>
              <LI>Saisir la (ou les) fonction(s)</LI>
            </UL>
            <LI>Pour paramétrer la fenêtre graphique :</LI>
            <UL>
              <LI>Appuyer sur « fenêtre »</LI>
              <LI>Saisir les paramètres</LI>
            </UL>
            <LI>Pour afficher la ou les courbes :</LI>
            <UL>
              <LI>Appuyer sur « graphe »</LI>
            </UL>
          </OL>
        </Block>
      </BlockBox>

      <H2>Lecture graphique des valeurs d’une fonction</H2>

      <BlockBox>
        <Block>
          <H6>CASIO</H6>
          <UL>
            <LI>Appuyer sur la touche « TRACE »</LI>
            <LI>Se déplacer sur la courbe avec les flèches ◀ et ▶</LI>
            <LI>
              Passer d’une courbe à l’autre courbe avec les flèches ▼ et ▲
            </LI>
          </UL>
        </Block>

        <Block>
          <H6>Texas Instrument</H6>

          <UL>
            <LI>Appuyer sur la touche « trace »</LI>
            <LI>Se déplacer sur la courbe avec les flèches ◀ et ▶</LI>
            <LI>
              Passer d’une courbe à l’autre courbe avec les flèches ▼ et ▲
            </LI>
          </UL>
        </Block>
      </BlockBox>

      <H2>Minimum ou Maximum d’une fonction</H2>

      <BlockBox>
        <Block>
          <H6>CASIO</H6>
          <UL>
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
        </Block>

        <Block>
          <H6>Texas Instrument</H6>

          <UL>
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
        </Block>
      </BlockBox>
    </Page>
  );
}
