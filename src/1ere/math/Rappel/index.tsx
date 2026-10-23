import armoire from "@assets/geometry/armoire.png";
import eclipseLune from "@assets/geometry/eclipse-lune.png";
import pythagore from "@assets/geometry/pythagore.png";
import slantedRect from "@assets/geometry/slanted-rect.png";
import thales from "@assets/geometry/thales.png";
import thalesOrbit from "@assets/geometry/thales-orbit.png";
import graph from "@assets/functions/graph.png";
import { Img } from "@components/atoms/Img";
import { Details, Important, Note, P, S } from "@components/atoms/Texts";
import { Cours } from "@components/doctype/Cours";
import { Problem } from "@components/section/Exercice";
import type { ComponentChildren } from "preact";
import { DotLine } from "zefpdf-lab/ui/Inputs";
import { LaTeX } from "zefpdf-lab/ui/LaTeX";
import { Flex } from "zefpdf-lab/ui/Layout";
import { LI, UL } from "zefpdf-lab/ui/List";
import { Page } from "zefpdf-lab/ui/Pages";
import { H1, H2, H3, H4 } from "zefpdf-lab/ui/Titles";
import { Table, TEntry, THeader } from "zefpdf-lab/ui/Table";
import "./index.css";

const X = () => <LaTeX tex="x" />;
const F = () => <LaTeX tex="f" />;
const Fx = ({ x = "x" }: { x?: string }) => <LaTeX tex={`f(${x})`} />;
const A = () => <LaTeX tex="a" />;
const B = () => <LaTeX tex="b" />;
const N = () => <LaTeX tex="N" />;

/** Old `<DotLine>prefix</DotLine>`: a prefix followed by dots to the end of the line. */
function Fill({ children }: { children?: ComponentChildren }) {
  return (
    <div>
      {children} <DotLine inline />
    </div>
  );
}

/** Old `AutoTable itemPerRow={n}`: a wrapping grid of `n` cells per row. */
function Grid({
  n = 3,
  children,
}: {
  n?: number;
  children: ComponentChildren[];
}) {
  const width = n === 1 ? "w-full" : n === 2 ? "w-1/2" : "w-1/3";
  return (
    <Flex className="flex-wrap my-2" align="center">
      {children.map((child) => (
        <div className={`${width} px-2`}>{child}</div>
      ))}
    </Flex>
  );
}

function Lines({ children, count }: { children: ComponentChildren; count: number }) {
  return (
    <div>
      <Fill>{children}</Fill>
      <DotLine count={count} />
    </div>
  );
}

function NombresEtCalculs() {
  return (
    <>
      <H1>Nombres et Calculs</H1>
      <H2>Représentation des nombres</H2>
      <H3>Fraction</H3>
      <P>
        Une fraction c'est juste une division ! Mais parfois c'est plus simple
        de la garder pour plus tard par exemple dire pour 1 divisé par 3 (ou 1
        tiers) plutôt que 0,3333333333333.....
      </P>
      <P>
        On appelle le nombre divisé (noté au-dessus) le <S>numérateur</S> et le
        diviseur le <S>dénominateur</S>. Attention, toutes les fractions ne
        représentent pas des nombres différents :{" "}
        <em>
          si le numérateur et le dénominateur ont un multiple commun la fraction
          est <S>réductible</S> (c.-à-d. que l'on peut l'écrire sous une forme
          plus simple).
        </em>
      </P>
      <Grid n={2}>
        <LaTeX tex="\frac{1}{6} = 0.166\:666\:666\:666\:... " />
        <Fill>
          <LaTeX tex="\frac{1}{2} = " />
        </Fill>
        <Fill>
          <LaTeX tex="\frac{20}{100} = " />
        </Fill>
        <Fill>
          <LaTeX tex="\frac{24}{64} = " />
        </Fill>
      </Grid>
      <Note>
        Les pourcentages sont juste des fractions avec 100 pour dénominateur.
        <div className="w-1/2">
          Ex : <LaTeX tex="82\% = \frac{82}{100} = " />
          <DotLine inline />
        </div>
      </Note>
      <H3>Puissances et notation scientifique</H3>
      <P>
        Les <S>puissances</S> ou <S>exposants</S> sont une façon de simplifier
        l'écriture de multiplication du même nombre.
      </P>
      <Grid>
        <LaTeX tex="8 \times 8 \times 8 \times 8 = 8^4" />
        <Fill>
          <LaTeX tex="2 \times 2 \times 2 =" />
        </Fill>
        <Fill>
          <LaTeX tex="10^5 = " />
        </Fill>
      </Grid>
      <P>
        Pour représenter de très grands ou très petits nombres on utilise la{" "}
        <S>notation scientifique</S>, c'est{" "}
        <em>un nombre décimal que l'on multiplie par une puissance de 10</em>.
        Cela revient à ajouter des zéros après ou avant le nombre que l'on
        multiplie.
      </P>
      <Grid>
        <LaTeX tex="8 \times 10^4 = 80\:000" />
        <Fill>
          <LaTeX tex="5 \times 10^2 =" />
        </Fill>
        <Fill>
          <LaTeX tex="6\:200\:000 = " />
        </Fill>
        <LaTeX tex="3 \times 10^{-2} = 0.03" />
        <Fill>
          <LaTeX tex="6 \times 10^{-4} =" />
        </Fill>
        <Fill>
          <LaTeX tex="0.000\:05 = " />
        </Fill>
      </Grid>
      <Note>
        Pour les puissances de 10 négatives on compte le 0 avant la virgule !
      </Note>
      <Note>
        Par convention le nombre décimal que l'on multiplie (la mantisse mais
        osef) ne doit avoir qu'un seul chiffre avant la virgule.
      </Note>
      <H4>Opérations sur les puissances</H4>
      <Grid n={2}>
        <Important>
          <LaTeX tex="a^n \times a^m = \color{grey}.................." />
        </Important>
        <Important>
          <LaTeX tex="(a^n)^m = \color{grey}.................." />
        </Important>
        <Lines count={2}>
          Ex : <LaTeX tex="71^2 \times 71^3 = " />
        </Lines>
        <Lines count={2}>
          Ex : <LaTeX tex="(49^2)^3 = " />
        </Lines>
      </Grid>
      <Important>
        <LaTeX tex="\frac{a^n}{a^m} = \color{grey}.................." />
      </Important>
      <Lines count={1}>
        Ex : <LaTeX tex="\frac{10^6}{10^5} = " />
      </Lines>
      <H3>Les racines</H3>
      <P>
        Les racines ou radicaux sont l'opération inverse de la puissance, en
        pratique on utilise surtout la racine de 2 ou racine carrée. Ce n'est
        pas facile à calculer pour tous les nombres, en général on utilise la
        calculette.
      </P>
      <P>
        Retiens juste que :{" "}
        <em>
          Multiplier la <S>racine carrée</S> d'un nombre <X /> par elle-même est
          égal à ce nombre <X />.{" "}
        </em>
      </P>
      <Important>
        <LaTeX tex="\sqrt{a} \times \sqrt{a} = (\sqrt{a}) ^ 2 = a " />
      </Important>
      <Note title="Théorème de Pythagore">
        <P>
          Le théorème de Pythagore donne la relation entre les côtés d'un{" "}
          <em>triangle rectangle</em>.
        </P>
        <Flex align="center" gap="5mm">
          <div className="w-1/2">
            <Img src={pythagore} className="w-2/3 mx-auto" />
          </div>
          <div className="w-1/2">
            <Important>
              <LaTeX tex="\begin{aligned} BC^2 &= AB^2 + AC^2 \\ \footnotesize (\text{hypotenuse})^2 &\footnotesize = (\text{cote 1})^2 + (\text{cote 2})^2 \end{aligned}" />
            </Important>
          </div>
        </Flex>
      </Note>
      <Problem>
        <P>
          Peut-on renverser l'armoire comme sur le schéma ? (sans abîmer ni le
          plafond, ni l'armoire)
        </P>
        <Flex align="center" gap="5mm">
          <Img src={armoire} className="w-1/3" />
          <div className="flex-1">
            <DotLine count={5} />
          </div>
        </Flex>
      </Problem>
      <H2>Calcul algébrique</H2>
      <Note title="Trigger Warning:">
        À partir de maintenant on va commencer à utiliser des lettres (a , b , x
        , y) pour représenter des nombres.{" "}
        <em>
          Pas de panique, une lettre est un nombre comme les autres, on ne
          connait juste pas sa valeur
        </em>{" "}
        et en général c'est ce qu'on veut calculer.
      </Note>
      <H3>Distributivité</H3>
      <P>
        Comme le nom l'indique, on peut distribuer une multiplication sur une
        addition :
      </P>
      <LaTeX tex="a \times (b + c) = a\times b + a\times c" displayMode />
      <Grid>
        <LaTeX tex="\begin{aligned} 5\times (x + 2) &= 5x + 5 \times 2 \\ &= 5x + 10 \end{aligned}" />
        <Lines count={1}>
          <LaTeX tex="12\times (x + 3) = " />
        </Lines>
        <Lines count={1}>
          <LaTeX tex="x\times (x+1) =" />
        </Lines>
      </Grid>
      <P>On peut également distribuer la multiplication de deux additions :</P>
      <LaTeX
        tex="(a + b) \times (c + d) = a \times c + a \times d + b \times c + b \times d"
        displayMode
      />
      <Grid n={2}>
        <LaTeX tex="\begin{aligned} (5 + y )\times (x + 2) &= 5x + 5 \times 2 + y\times x + 2y \\ &= 5x + 10  + x \times y + 2y \end{aligned}" />
        <Lines count={1}>
          <LaTeX tex=" (x + 7) (x + 3) = " />
        </Lines>
      </Grid>
      <H4 marker="•">Cas particulier : Opposé d'une expression</H4>
      <P>
        <S>
          On parle de l'opposé d'une expression lorsque celle-ci est multipliée
          par -1
        </S>
        . Souvent on ne note pas le <S>1</S> mais seulement le signe <S>-</S>.
      </P>
      <P>
        Mais du coup s'
        <em>il s'agit d'une multiplication, on peut la distribuer </em>.
      </P>
      <div className="my-5">
        <Lines count={2}>
          <LaTeX tex="- (a + b - c) = (-1) \times (a + b - c ) " />
        </Lines>
      </div>
      <Note title="Rappel :">
        <UL>
          <LI>
            Multiplier un nombre négatif par un nombre positif donne un nombre
            négatif
          </LI>
          <LI>Multiplier deux nombres négatifs donne un nombre positif</LI>
        </UL>
      </Note>
      <H3>Factorisation</H3>
      <P>
        C'est l'inverse de la distribution, si je trouve un multiple commun
        entre les deux termes d'une addition, on peut le "sortir".
      </P>
      <Important>
        <LaTeX tex="a \times b + c\times a  = a \times (b + c)" />
      </Important>
      <Grid n={2}>
        <LaTeX tex="\begin{aligned} 15x + 5 &= 5\times 3x + 5 \times 1  \\ &= 5 (3x+ 1) \end{aligned}" />
        <Lines count={1}>
          <LaTeX tex="5x + 12x = " />
        </Lines>
        <Lines count={1}>
          <LaTeX tex="4 + 12x = " />
        </Lines>
        <Lines count={1}>
          <LaTeX tex="21 + 35x = " />
        </Lines>
      </Grid>
      <H3>Identités remarquables</H3>
      <P>
        Il y a 3 formes d'équations que l'on peut distribuer de manière quasi
        automatique, il s'agit des <S>identités remarquables</S>.
      </P>
      {[
        "(a + b ) ^2 = a^2 + 2a\\times b + b^2",
        "(a - b ) ^2 = a^2 - 2a\\times b + b^2",
        "(a + b ) (a-b) = a^2 - b ^ 2",
      ].map((tex) => (
        <>
          <Important>
            <LaTeX tex={tex} />
          </Important>
          <Details align="left">Démonstration :</Details>
          <DotLine count={4} />
        </>
      ))}
      <H3>Résoudre une équation</H3>
      <P>
        C'est la base de l'algèbre, on écrit une expression avec une inconnue,
        le but du jeu est de retrouver la (<em>ou les</em>) valeur(s) de cette
        inconnue.
      </P>
      <P>
        Par exemple : <LaTeX tex="2x = 6" /> revient à se poser la question :{" "}
        <br />
        <em>
          Par quel nombre dois-je remplacer <X /> pour que l'expression soit
          vraie ?
        </em>{" "}
        <br />
        Ou bien :{" "}
        <em>
          Quel nombre <X /> multiplié par 2 est égal à 6 ?
        </em>{" "}
        Réponse : <X /> est égal à <DotLine width="30%" />
      </P>
      <P>
        Il existe une méthode infaillible pour résoudre des équations simples :{" "}
        <S>on isole l'inconnue d'un seul côté du signe égal</S>.
      </P>
      <P>
        Pour cela on va "annuler" les opérations que subit <X /> dans le sens
        inverse, c'est-à-dire en commençant par la dernière. Cela revient à
        réaliser l'opération inverse des deux côtés du signe égal.
      </P>
      <Note title="Rappel :">
        <UL>
          <LI>
            La soustraction est l'opération inverse de l'addition (et
            vice-versa).
          </LI>
          <LI>
            La division est l'opération inverse de la multiplication (et
            vice-versa).
          </LI>
        </UL>
      </Note>
      <Note>
        Pour dire que 2 expressions sont équivalentes on utilise le signe{" "}
        <LaTeX tex="\Harr" />.
      </Note>
      <Lines count={2}>
        <LaTeX tex="\begin{aligned} 2x + 5 &= 55 \\ \Harr 2x + 5 \textcolor{blue}{-5} &= 55 \textcolor{blue}{-5} \end{aligned}" />
      </Lines>
      <Grid n={2}>
        <Lines count={2}>
          <LaTeX tex="2x - 5 = 60 \Harr" />
        </Lines>
        <Lines count={2}>
          <LaTeX tex="(x + 5) \times 2 = 150 \Harr" />
        </Lines>
        <Lines count={2}>
          <LaTeX tex="33x - 10 = 101 \Harr" />
        </Lines>
        <Lines count={2}>
          <LaTeX tex="x^2 - 36 = 0 \Harr" />
        </Lines>
      </Grid>
      <Lines count={2}>
        Si <LaTeX tex="( x - 15 ) (3x + 30 ) = 0" /> alors :
      </Lines>
      <Note>
        Si la multiplication de deux nombres est égale à 0, un de ces deux
        nombres est forcément égal à 0 !
      </Note>
    </>
  );
}

function Proportionnalite() {
  return (
    <>
      <H1>Proportionnalité</H1>
      <P>
        On dit que deux grandeurs sont <S>proportionnelles</S> lorsque{" "}
        <em>
          les valeurs de l’une sont obtenues en multipliant les valeurs de
          l’autre par un même nombre
        </em>{" "}
        (non nul, c.-à-d. différent de 0), appelé{" "}
        <S>coefficient de proportionnalité</S>.
      </P>
      <Details>
        On le note avec le symbole <LaTeX tex="\propto" />.
      </Details>
      <Important>
        <LaTeX tex="X \propto Y \Harr X = a \times Y \Harr \frac{X}{Y} = a " />
      </Important>
      <P>
        C'est typiquement le cas pour les quantités dans une recette de cuisine,
        ou les prix chez le marchand ou au supermarché (par exemple le prix au
        kilo est le coefficient de proportionnalité entre le prix à payer et la
        quantité achetée).
      </P>
      <P>
        Pour résoudre ce type de problème on dispose d'un outil très pratique :{" "}
        <S>le produit en croix</S>.
      </P>
      <Flex align="center" gap="5mm">
        <div className="w-1/2">
          <Table className="w-1/2 mx-auto">
            <THeader content={[<LaTeX tex="a" />, <LaTeX tex="b" />]} />
            <TEntry content={[<LaTeX tex="n" />, <LaTeX tex="x ?" />]} />
          </Table>
        </div>
        <div className="w-1/2">
          <Important>
            <LaTeX tex="x = \frac{b \times n}{a}" />
          </Important>
        </div>
      </Flex>
      <Lines count={1}>Autrement dit :</Lines>

      <Problem>
        <P>Voici les ingrédients d'un gâteau pour 4 personnes :</P>
        <Table className="w-4/5 mx-auto">
          <THeader content={["", "Farine", "Œuf", "Sucre", "Noix"]} />
          <TEntry header="2 personnes" content={["...", "...", "...", "..."]} />
          <TEntry header="4 personnes" content={["30g", "2", "80g", "80g"]} />
          <TEntry header="9 personnes" content={["...", "...", "...", "..."]} />
          <TEntry header="15 personnes" content={["...", "...", "...", "..."]} />
        </Table>
        <LI className="break-inside-avoid">
          Calculer les quantités pour 2 personnes. Cela revient à diviser les
          quantités pour 4 personnes par{" "}
          <DotLine width="25mm" />, c'est la même chose que
          multiplier par <DotLine width="25mm" />.
        </LI>
        <LI className="break-inside-avoid">
          Quelles sont les proportions (le coefficient de proportionnalité) de
          farine par œuf ? De sucre par noix ? De sucre par œuf ?
          <DotLine count={3} />
        </LI>
        <LI className="break-inside-avoid">
          Combien d'œufs pour 9 et 15 personnes ?
          <DotLine count={3} />
        </LI>
        <LI className="break-inside-avoid">
          Utiliser les coefficients de proportionnalité calculés à la question 2
          pour remplir le tableau.
          <DotLine count={3} />
        </LI>
      </Problem>

      <Note title="Théorème de Thalès">
        <Flex align="center" gap="5mm">
          <Img src={thales} className="w-1/3" />
          <div className="w-2/3">
            <P>
              Le théorème de Thalès nous dit que quand 2 triangles sont{" "}
              <em>semblables</em> (c'est-à-dire qu'ils ont la même forme) alors
              :
            </P>
            <Important>
              <LaTeX tex="{\color{red}\frac{AB}{AD}} = {\color{blue}\frac{AC}{AE}}= {\color{green}\frac{BC}{DE}}" />
            </Important>
            <P>
              Autrement dit :{" "}
              <em>
                les côtés de deux triangles semblables sont proportionnels deux
                à deux
              </em>{" "}
              le coefficient de proportionnalité est la valeur par laquelle on a
              "étiré" un des côtés.
            </P>
          </div>
        </Flex>
      </Note>
      <Problem title="Cône d'ombre de la Terre">
        <Flex align="center" justify="center" gap="5mm" className="w-3/4 mx-auto">
          <Img src={thalesOrbit} className="w-2/3" />
          <Img src={eclipseLune} className="w-1/4">
            Éclipse lunaire
          </Img>
        </Flex>
        <P>
          L'ombre projetée de la Terre forme un cône dans lequel, si la Lune
          passe, on observe une éclipse lunaire. En utilisant le théorème de
          Thalès, calculer la longueur <LaTeX tex="L" /> du cône d'ombre. On
          donne :
        </P>
        <UL className="columns-2">
          <LI>
            Le rayon de la Terre : <LaTeX tex="R_T = 6\:300\: km" /> ;
          </LI>
          <LI>
            Le rayon du Soleil : <LaTeX tex="R_S = 690\:000\: km" />;
          </LI>
          <LI>
            La distance moyenne Terre-Soleil :{" "}
            <LaTeX tex="D = 1.5\times 10^8 \: km" />.
          </LI>
        </UL>
        <DotLine count={6} />
      </Problem>
    </>
  );
}

function Fonctions() {
  return (
    <>
      <H1>Fonctions</H1>
      <H2>Définitions et Exemples</H2>
      <P>
        Soit <F /> une fonction, on note <Fx /> son <S>image</S>{" "}
        <em>
          le résultat de <F /> appliqué à <X />
        </em>
        , on dit alors que <X /> est <S>l'antécédent</S> de <Fx />.
      </P>
      <Important>
        <LaTeX tex="\begin{aligned} \large x \: &\xrightarrow{f}& \: f(x) \\ \tiny \text{antécédent}& &\tiny \text{image} \end{aligned}" />
      </Important>
      <P>
        Autrement dit : une <S>fonction</S> <F /> est une suite d'opérations que
        l'on peut appliquer à un nombre <X />. Par exemple :{" "}
        <LaTeX tex="f(x) = 5x + 2" /> représente l'action de multiplier par 5
        puis ajouter 2. Ici <LaTeX tex="5x + 2" /> est <S>l'expression</S> de{" "}
        <F />. Ainsi :
      </P>
      <Grid>
        <LaTeX tex="\begin{aligned} f(1) &= 5\times 1 + 2\\ &=5 + 2\\ f(1)&=7 \end{aligned}" />
        <Lines count={2}>
          <LaTeX tex="f(0) =" />
        </Lines>
        <Lines count={2}>
          <LaTeX tex="f(59) = " />
        </Lines>
      </Grid>
      <Note>
        En fait quand on applique une fonction à un nombre on remplace la
        variable (en général <X />) par ce nombre.
      </Note>
      <Note title="Mais pourquoi ??">
        Parce que souvent en maths on souhaite étudier le comportement d'une
        suite d'opérations, plutôt que son résultat en un point. <br />
        Retiens ceci : <X /> est la <em>variable</em> c'est la grandeur qui
        bouge et dont dépend la valeur de <Fx />.
      </Note>
      <Problem>
        <P>
          Soit un rectangle de 13 cm sur 20 cm dont on a découpé des carrés de
          côté <X /> à chaque coin.
        </P>
        <Flex align="center" gap="5mm">
          <Img src={slantedRect} className="w-1/3" />
          <div className="w-2/3">
            <LI>
              Calculer l'aire <LaTeX tex="A_{tot}" /> du rectangle avant que
              l'on découpe les coins.
            </LI>
            <DotLine count={2} />
          </div>
        </Flex>
        <LI>
          Quelle sera <LaTeX tex="A_{\text{carré}}(x)" /> l'aire <em>d'un seul</em> des
          petits carrés de côté <X /> ?
        </LI>
        <DotLine count={2} />
        <LI>
          Soit <LaTeX tex="A(x)" /> la fonction qui donne l'aire de la zone
          bleue pour des carrés de côté <X />, quelle est son expression ?
        </LI>
        <DotLine count={3} />
        <LI>Calculer l'aire de la zone bleue pour des carrés de 5 cm.</LI>
        <DotLine count={3} />
        <LI>
          Quelle doit être la valeur de <X /> pour que l'aire de la zone bleue
          soit de 208,16 cm<sup>2</sup> ?
        </LI>
        <DotLine count={3} />
      </Problem>
      <H2>Fonction Affine</H2>
      <H3>Définition</H3>
      <P>
        Une <S>fonction affine</S> est une fonction de la forme suivante :
      </P>
      <Important>
        <LaTeX tex="f(x) = a \times x + b" />
      </Important>
      <P>Où <A /> et <B /> sont des nombres constants. On dit que :</P>
      <UL>
        <LI>
          <A /> est le <S>coefficient directeur</S>;
        </LI>
        <LI>
          <B /> est l'<S>ordonnée à l'origine</S> c'est la valeur de{" "}
          <Fx x="0" />.
        </LI>
      </UL>
      <P>
        C'est une des formes de fonction les plus simples, on la retrouve dans
        toutes les situations où l'on a une valeur de départ et une augmentation
        proportionnelle à la variable <X />.
      </P>
      <Grid n={2}>
        <div>
          <LaTeX tex="f(x) = 58\times x - 5" />
          <div>
            le coefficient directeur est <LaTeX tex="58" /> ; <br />
            l'ordonnée à l'origine est <LaTeX tex="-5" />.
          </div>
        </div>
        <div>
          <LaTeX tex="f(x) = 2.85\times x " />
          <Fill>le coefficient directeur est</Fill>
          <Fill>l'ordonnée à l'origine est</Fill>
        </div>
        <div>
          <LaTeX tex="f(x) = -205\times x + 4.32" />
          <Fill>le coefficient directeur est</Fill>
          <Fill>l'ordonnée à l'origine est</Fill>
        </div>
        <div>
          <LaTeX tex="f(x) = x^2 + x" />
          <DotLine count={2} />
        </div>
      </Grid>

      <Problem>
        <P>
          Sur un site de e-commerce international, les frais de port sont fixés
          à 15€40. Je souhaite acheter un certain nombre d'objets à 5€40 pièce.
        </P>
        <LI>Combien me coutera la livraison de 4 objets ?</LI>
        <DotLine count={2} />
        <LI>
          Donner l'expression de la fonction <LaTeX tex="K(n)" /> qui donne le
          prix pour <N /> objets.
        </LI>
        <DotLine count={2} />
        <LI>
          Combien d'objets puis-je acheter pour 60 € ? Cela revient à résoudre
          pour <N /> l'équation <LaTeX tex="K(n) = 60" />.
        </LI>
        <DotLine count={4} />
      </Problem>
      <H3>Représentation graphique</H3>
      <Important>
        <P align="center">
          Une fonction affine est toujours représentée sur un graphique par une
          droite qui croise l'axe des ordonnées en son ordonnée à l'origine.
        </P>
      </Important>
      <P>
        Il suffit donc de connaitre la valeur de la fonction en deux points pour
        tracer sa représentation graphique.
      </P>

      <P>Représenter les fonctions suivantes :</P>
      <Grid n={2}>
        <div>
          <LaTeX tex="f(x) = 2x + 5" />
          <UL>
            <LI>
              <LaTeX tex="f(0) = 2 \times 0 + 5 = 5" />
            </LI>
            <LI>
              <LaTeX tex="f(10) = 2 \times 10 + 5 = 25" />
            </LI>
          </UL>
        </div>
        <div>
          <LaTeX tex="g(x) = {\large \frac{x}{2}} - 5" />
          <DotLine count={2} />
        </div>
        <div>
          <LaTeX tex="h(x) = x" />
          <DotLine count={2} />
        </div>
        <div>
          <LaTeX tex="k(x) = -2x + 12" />
          <DotLine count={2} />
        </div>
      </Grid>

      <Important className="w-full">
        <Lines count={1}>
          Le <S>coefficient directeur</S> gère
        </Lines>
        <Lines count={1}>
          Si le{" "}
          <S>
            coefficient directeur de la fonction est positif{" "}
            <LaTeX tex="(>\:0)" />
          </S>{" "}
          alors
        </Lines>
        <Lines count={1}>
          Si le{" "}
          <S>
            coefficient directeur de la fonction est négatif{" "}
            <LaTeX tex="(<\:0)" />
          </S>{" "}
          alors
        </Lines>
        <Lines count={1}>
          L'<S>ordonnée à l'origine</S> gère
        </Lines>
      </Important>

      <Page page="landscape">
        <Img src={graph} className="w-[60%] mx-auto" />
      </Page>
    </>
  );
}

export default function RappelDocument() {
  return (
    <Cours title="Rappel Mathématiques" lang="fr">
      <Important>
        <Details>
          <em>
            Cette fiche rappelle les bases de mathématiques nécessaires pour les
            cours de Math/Sciences au lycée. Conserve-la précieusement et
            n'hésite pas à y revenir fréquemment.
          </em>
        </Details>
      </Important>
      <NombresEtCalculs />
      <Proportionnalite />
      <Fonctions />
    </Cours>
  );
}
