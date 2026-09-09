import {
  armoire,
  eclipse_lune,
  graph,
  pythagore,
  slantedRect,
  thales,
  thales_orbit,
} from "@assets";
import {
  A,
  AutoTable,
  B,
  Digression,
  Document,
  F,
  Fx,
  ImportantEquation,
  N,
  Note,
  Problem,
  Rappel,
  X,
} from "@components";
import {
  Block,
  BlockBox,
  DotLine,
  Entry,
  H1,
  H2,
  H3,
  H4,
  LaTeX,
  LI,
  OL,
  Page,
  Table,
  UL
} from "@weasyprint-tsx/ui";
import "./index.css";

function NombresEtCalculs() {
  return (
    <>
      <H1>Nombres et Calculs</H1>
      <H2>Représentation des nombres</H2>
      <H3>Fraction</H3>
      <p>
        Une fraction c'est juste une division ! Mais parfois c'est plus simple
        de la garder pour plus tard par exemple dire pour 1 divisé par 3 (ou 1
        tiers) plutôt que 0,3333333333333.....
      </p>
      <p>
        On appelle le nombre divisé (noté au-dessus) le{" "}
        <strong>numérateur</strong> et le diviseur le{" "}
        <strong>dénominateur</strong>. Attention, toutes les fractions ne
        représentent pas des nombres différents :{" "}
        <em>
          si le numérateur et le dénominateur ont un multiple commun la fraction
          est <strong>réductible</strong> (c.-à-d. que l'on peut l'écrire sous
          une forme plus simple).
        </em>
      </p>
      <AutoTable className="text-xl" itemPerRow={2}>
        <LaTeX tex="\frac{1}{6} = 0,166\:666\:666\:666\:... " />
        <DotLine>
          <LaTeX tex="\frac{1}{2} = " />
        </DotLine>
        <DotLine>
          <LaTeX>{"\\frac{20}{100} = "}</LaTeX>
        </DotLine>
        <DotLine>
          <LaTeX tex="\frac{24}{64} = " />
        </DotLine>
      </AutoTable>
      <Note>
        Les pourcentages sont juste des fractions avec 100 pour dénominateur.{" "}
        <br /> Ex :
        <DotLine count={1} className="w-1/2">
          <LaTeX tex="82\% = \frac{82}{100} = " />
        </DotLine>
      </Note>
      <H3>Puissances et notation scientifique</H3>
      <p>
        Les <strong>puissances</strong> ou <strong>exposants</strong> sont une
        façon de simplifier l'écriture de multiplication du même nombre.
      </p>
      <AutoTable>
        <LaTeX tex="8 \times 8 \times 8 \times 8 = 8^4" className="mr-10" />
        <DotLine count={1}>
          <LaTeX tex="2 \times 2 \times 2 =" />
        </DotLine>
        <DotLine count={1}>
          <LaTeX tex="10^5 = " />
        </DotLine>
      </AutoTable>
      <p>
        Pour représenter de très grands ou très petits nombres on utilise la{" "}
        <strong>notation scientifique</strong>, c'est{" "}
        <em>un nombre décimal que l'on multiplie par une puissance de 10</em>.
        Cela revient à ajouter des zéros après ou avant le nombre que l'on
        multiplie.
      </p>
      <AutoTable>
        <LaTeX tex="8 \times 10^4 = 80\:000" />
        <DotLine count={1}>
          <LaTeX tex="5 \times 10^2 =" />
        </DotLine>
        <DotLine count={1}>
          <LaTeX tex="6\:200\:000 = " />
        </DotLine>
        <LaTeX tex="3 \times 10^{-2} = 0,03" />
        <DotLine count={1} className="">
          <LaTeX tex="6 \times 10^{-4} =" />
        </DotLine>
        <DotLine count={1}>
          <LaTeX tex="0,000\:05 = " />
        </DotLine>
      </AutoTable>
      <Note>
        Pour les puissances de 10 négatives on compte le 0 avant la virgule !
      </Note>
      <Note>
        Par convention le nombre décimal que l'on multiplie{" "}
        <span className="details">(la mantisse mais osef)</span> ne doit avoir
        qu'un seul chiffre avant la virgule.
      </Note>
      <H4>Opérations sur les puissances</H4>
      <AutoTable itemPerRow={2}>
        <ImportantEquation tex="a^n \times a^m = \color{grey}.................." />
        <ImportantEquation tex="(a^n)^m = \color{grey}.................." />
        <div>
          <DotLine>Ex : <LaTeX tex="71^2 \times 71^3 = " /></DotLine>
          <DotLine count={2} />
        </div>
        <div>
          <DotLine>Ex : <LaTeX tex="(49^2)^3 = " /></DotLine>
          <DotLine count={2} />
        </div>
      </AutoTable>
      <ImportantEquation tex="\frac{a^n}{a^m} = \color{grey}.................." />

      <DotLine>Ex : <LaTeX tex="\frac{10^6}{10^5} = " /></DotLine>
      <DotLine count={1} />
      <H3>Les racines</H3>
      <p>
        Les racines ou radicaux sont l'opération inverse de la puissance, en
        pratique on utilise surtout la racine de 2 ou racine carrée. Ce n'est
        pas facile à calculer pour tous les nombres, en général on utilise la
        calculette.
      </p>
      <div className="text">
        Retiens juste que :{" "}
        <em>
          Multiplier la <strong>racine carrée</strong> d'un nombre <X /> par
          elle-même est égal à ce nombre <X />.{" "}
        </em>
        <ImportantEquation tex="\sqrt{a} \times \sqrt{a} = (\sqrt{a}) ^ 2 = a " />
      </div>
      <Digression headerText="Théorème de Pythagore">
        <p>
          Le théorème de Pythagore donne la relation entre les côtés d'un{" "}
          <em>triangle rectangle</em>.
        </p>
        <div className="columns-2">
          <img src={pythagore} className="mr-auto ml-auto w-2/3" />
          <ImportantEquation tex="BC^2 &= AB^2 + AC^2 \\ \footnotesize (hypotenuse)^2 &\footnotesize = (cote 1)^2 + (cote 2)^2 " />
        </div>
      </Digression>
      <Problem>
        <p>
          Peut-on renverser l'armoire comme sur le schéma ? (sans abîmer ni le
          plafond, ni l'armoire)
        </p>
        <BlockBox >
          <Block>
            <img src={armoire} />
          </Block>
          <Block ratio={2}>
            <DotLine count={5} />
          </Block>
        </BlockBox>
      </Problem>
      <H2>Calcul algébrique</H2>
      <Note headerText="Trigger Warning:">
        À partir de maintenant on va commencer à utiliser des lettres (a , b , x
        , y) pour représenter des nombres.{" "}
        <em>
          {" "}
          Pas de panique, une lettre est un nombre comme les autres, on ne
          connait juste pas sa valeur{" "}
        </em>{" "}
        et en général c'est ce qu'on veut calculer.
      </Note>
      <H3>Distributivité</H3>
      <p>
        Comme le nom l'indique, on peut distribuer une multiplication sur une
        addition :
      </p>
      <LaTeX tex="a \times (b + c) = a\times b + a\times c" displayMode />
      <AutoTable>
        <LaTeX
          tex="5\times (x + 2) &= 5x + 5 \times 2 \\ &= 5x + 10"
          aligned
        />
        <div>
          <DotLine><LaTeX tex="12\times (x + 3) = " /></DotLine>
          <DotLine count={1} />
        </div>

        <div>
          <DotLine><LaTeX tex="x\times (x+1) =" /></DotLine>
          <DotLine count={1} />
        </div>
      </AutoTable>
      <p>On peut également distribuer la multiplication de deux additions :</p>
      <LaTeX
        tex="(a + b) \times (c + d) = a \times c + a \times d + b \times c + b \times d"
        displayMode
      />
      <AutoTable itemPerRow={2}>
        <LaTeX
          tex="(5 + y )\times (x + 2) &= 5x + 5 \times 2 + y\times x + 2y \\
                                      &= 5x + 10  + x \times y + 2y
               "
          aligned
        />
        <div>
          <DotLine><LaTeX tex=" (x + 7) (x + 3) = " /></DotLine>
          <DotLine count={1} />
        </div>
      </AutoTable>
      <H4 marker="•">Cas particulier : Opposé d'une expression</H4>
      <p>
        <strong>
          On parle de l'opposé d'une expression lorsque celle-ci est multipliée
          par -1
        </strong>
        . Souvent on ne note pas le <strong>1</strong> mais seulement le signe{" "}
        <strong>-</strong>.
      </p>
      <p>
        Mais du coup s'
        <em>il s'agit d'une multiplication, on peut la distribuer </em>.
      </p>
      <DotLine className=" text-center mt-5 mb-5">
        <LaTeX tex="- (a + b - c) = (-1) \times (a + b - c ) " />
      </DotLine>
      <DotLine count={2} className=" text-center mt-5 mb-5" />
      <Rappel>
        <ul>
          <li>
            Multiplier un nombre négatif par un nombre positif donne un nombre
            négatif
          </li>
          <li>Multiplier deux nombres négatifs donne un nombre positif</li>
        </ul>
      </Rappel>
      <H3>Factorisation</H3>
      <p>
        C'est l'inverse de la distribution, si je trouve un multiple commun
        entre les deux termes d'une addition, on peut le "sortir".
      </p>
      <ImportantEquation tex="a \times b + c\times a  = a \times (b + c)" />
      <AutoTable itemPerRow={2}>
        <LaTeX
          tex="15x + 5 &= 5\times 3x + 5 \times 1  \\
                      &= 5 (3x+ 1)"
          aligned
        />
        <div>
          <DotLine><LaTeX tex="5x + 12x = " /></DotLine>
          <DotLine count={1} />
        </div>

        <div>
          <DotLine><LaTeX tex="4 + 12x = " /></DotLine>
          <DotLine count={1} />
        </div>

        <div>
          <DotLine><LaTeX tex="21 + 35x = " /></DotLine>
          <DotLine count={1} />
        </div>
      </AutoTable>
      <H3>Identités remarquables</H3>
      <p>
        Il y a 3 formes d'équations que l'on peut distribuer de manière
        quasi automatique, il s'agit des <strong>identités remarquables</strong>.
      </p>
      <ImportantEquation tex="(a + b ) ^2 = a^2 + 2a\times b + b^2" />
      <DotLine><span className="details">Démonstration :</span></DotLine>
      <DotLine count={3} />
      <ImportantEquation tex="(a - b ) ^2 = a^2 - 2a\times b + b^2" />
      <DotLine><span className="details">Démonstration :</span></DotLine>
      <DotLine count={3} />
      <ImportantEquation tex="(a + b ) (a-b) = a^2 - b ^ 2" />
      <DotLine><span className="details">Démonstration :</span></DotLine>
      <DotLine count={3} />
      <H3>Résoudre une équation</H3>
      <p>
        C'est la base de l'algèbre, on écrit une expression avec une inconnue,
        le but du jeu est de retrouver la (<em>ou les</em>) valeur(s) de cette
        inconnue.
      </p>
      <div className="text">
        Par exemple :
        <LaTeX tex="2x = 6" />
        revient à se poser la question : <br />
        <em>
          Par quel nombre dois-je remplacer <X /> pour que l'expression soit
          vraie ?
        </em>{" "}
        <br />
        Ou bien :{" "}
        <em className="mr-2">
          Quel nombre <X /> multiplié par 2 est égal à 6 ?
        </em>{" "}
        <div className="inline mt-4">
          <DotLine width="50%">
            Réponse : <X /> est égal à{" "}
          </DotLine>
        </div>
      </div>
      <p>
        Il existe une méthode infaillible pour résoudre des équations simples :{" "}
        <strong>on isole l'inconnue d'un seul côté du signe égal</strong>.{" "}
      </p>
      <div className="text">
        Pour cela on va "annuler" les opérations que subit <X /> dans le sens
        inverse, c'est-à-dire en commençant par la dernière. Cela revient à
        réaliser l'opération inverse des deux côtés du signe égal.
      </div>
      <Rappel>
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
      </Rappel>
      <Note>
        Pour dire que 2 expressions sont équivalentes on utilise le signe{" "}
        <LaTeX tex="\Harr" />.
      </Note>
      <DotLine>
        <LaTeX
          tex="2x + 5 &= 55 \\
        \Harr 2x + 5 \textcolor{blue}{-5} &= 55 \textcolor{blue}{-5}
        "
          aligned
        />
      </DotLine>
      <DotLine count={2} />
      <AutoTable itemPerRow={2}>
        <div>
          <DotLine><LaTeX tex="2x - 5 = 60 \Harr" /></DotLine>
          <DotLine count={2} />
        </div>
        <div>
          <DotLine><LaTeX tex="(x + 5) \times 2 = 150 \Harr" /></DotLine>
          <DotLine count={2} />
        </div>
        <div>
          <DotLine><LaTeX tex="33x - 10 = 101 \Harr" /></DotLine>
          <DotLine count={2} />
        </div>
        <div>
          <DotLine><LaTeX tex="x^2 - 36 = 0 \Harr" /></DotLine>
          <DotLine count={2} />
        </div>
      </AutoTable>
      <AutoTable>
        <div>
          <DotLine>Si <LaTeX tex="( x - 15 ) (3x + 30 ) = 0" /> alors :</DotLine>
          <DotLine count={2} />
        </div>
      </AutoTable>
      <Note>
        Si la multiplication de deux nombres est égale à 0, un de ces deux
        nombres est forcément égal à 0 !
      </Note>
    </>
  );
}

function Proportionnalité() {
  return (
    <>
      <H1>Proportionnalité</H1>
      <div className="text">
        On dit que deux grandeurs sont <strong>proportionnelles</strong> lorsque
        <em>
          les valeurs de l’une sont obtenues en multipliant les valeurs de
          l’autre par un même nombre{" "}
        </em>
        (non nul, c.-à-d. différent de 0), appelé{" "}
        <strong>coefficient de proportionnalité</strong>.{" "}
        <span className="details">
          On le note avec le symbole <LaTeX tex="\propto" />
        </span>
        .
      </div>
      <ImportantEquation
        className="text-xl"
        tex="X \propto Y \Harr X = a \times Y \Harr \frac{X}{Y} = a "
      />
      <p>
        C'est typiquement le cas pour les quantités dans une recette de cuisine,
        ou les prix chez le marchand ou au supermarché (par exemple le prix au
        kilo est le coefficient de proportionnalité entre le prix à payer et la
        quantité achetée).
      </p>
      <p>
        Pour résoudre ce type de problème on dispose d'un outil très pratique :{" "}
        <strong>le produit en croix </strong>.
      </p>

      <div className={"columns-2 "}>
        <Table
          className={"w-1/2 ml-auto mr-auto"}
          style={{
            "--color-table-cell": "transparent",
            "--color-table-header": "transparent",
          }}
        >
          <Entry content={[<LaTeX tex="n" />]}>
            <LaTeX tex="a" />
          </Entry>

          <Entry content={[<LaTeX tex="x ?" />]}>
            <LaTeX tex="b" />
          </Entry>
        </Table>
        <ImportantEquation tex="x = \frac{b \times n}{a}" className="text-xl" />
      </div>
      <DotLine>Autrement dit :</DotLine>
      <DotLine count={1} />

      <Problem>
        <p>Voici les ingrédients d'un gâteau pour 4 personnes :</p>
        <Table className="ml-auto mr-auto w-8/10">
          <Entry
            style={"--color-table-cell : var(--color-table-header)"}
            content={[
              "2 personnes",
              "4 personnes",
              "9 personnes",
              "15 personnes",
            ]}
          ></Entry>
          <Entry content={["...", "30g", "...", "..."]}>Farine</Entry>
          <Entry content={["...", "2", "...", "..."]}>Œuf</Entry>
          <Entry content={["...", "80g", "...", "..."]}>Sucre</Entry>
          <Entry content={["...", "80g", "...", "..."]}>Noix</Entry>
        </Table>
        <ul>
          <li className={"break-inside-avoid"}>
            <p>
              1. Calculer les quantités pour 2 personnes. Cela revient à diviser
              les quantités pour 4 personnes par
              <span className="text-[grey]">.................</span>, c'est la
              même chose que multiplier par
              <span className="text-[grey]">..............</span>.
            </p>
          </li>

          <li className={"break-inside-avoid"}>
            <p>
              2. Quelles sont les proportions (le coefficient de
              proportionnalité) de farine par œuf ? De sucre par noix ? De
              sucre par œuf ?
            </p>
            <DotLine count={3} />
          </li>

          <li className={"break-inside-avoid"}>
            <p>3. Combien d'œufs pour 9 et 15 personnes ?</p>
            <DotLine count={3} />
          </li>

          <li className={"break-inside-avoid"}>
            <p>
              4. Utiliser les coefficients de proportionnalité calculés à la
              question 2 pour remplir le tableau.
            </p>
            <DotLine count={3} />
          </li>
        </ul>
      </Problem>

      <Digression headerText="Théorème de Thalès">
        <div className="block-box">
          <img src={thales} className="w-1/3 h-auto" />
          <div className="w-2/3">
            <p>
              Le théorème de Thalès nous dit que quand 2 triangles sont{" "}
              <em>semblables</em> (c'est-à-dire qu'ils ont la même forme) alors
              :
            </p>
            <ImportantEquation
              className="text-xl"
              tex="{\color{red}\frac{AB}{AD}} =
               {\color{blue}\frac{AC}{AE}}=
               {\color{green}\frac{BC}{DE}}"
            />
            <p>
              Autrement dit :{" "}
              <em>
                les côtés de deux triangles semblables sont proportionnels deux
                à deux{" "}
              </em>
              le coefficient de proportionnalité est la valeur par laquelle on a
              "étiré" un des côtés.
            </p>
          </div>
        </div>
      </Digression>
      <Problem>
        Cône d'ombre de la Terre
        <div className="w-3/4 block-box ml-auto mr-auto">
          <img src={thales_orbit} className="w-2/3" />
          <div className="w-1/16" />
          <div className="w-1/4 text-center">
            <img src={eclipse_lune} className="w-full" />
            <span className="details italic">Éclipse lunaire</span>
          </div>
        </div>
        <div className="text">
          L'ombre projetée de la Terre forme un cône dans lequel, si la Lune
          passe, on observe une éclipse lunaire. En utilisant le théorème de
          Thalès, calculer la longueur <LaTeX tex="L" /> du cône d'ombre. On
          donne :
          <UL className="columns-2 ml-5">
            <LI>
              Le rayon de la Terre : <LaTeX tex="R_T = 6\:300\: km" /> ;
            </LI>
            <LI>
              Le rayon du Soleil : <LaTeX tex="R_S = 690\:000\: km" />;
            </LI>
            <LI>
              La distance moyenne Terre-Soleil : <br />
              <LaTeX tex="D = 1,5\times 10^8 \: km" className="ml-5" />.
            </LI>
          </UL>
        </div>
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
      <div className="text">
        Soit <F /> une fonction, on note <Fx /> son <strong>image</strong>{" "}
        <em>
          le résultat de <F /> appliqué à <X />
        </em>
        , on dit alors que <X /> est <strong>l'antécédent </strong> de <Fx />.
      </div>
      <ImportantEquation
        tex="\large x \: &\xrightarrow{f}& \: f(x) \\
        \tiny antécédent& &\tiny image
        "
        aligned
      />
      <div className="text">
        Autrement dit : une <strong> fonction </strong> <F /> est une suite
        d'opérations que l'on peut appliquer à un nombre <X />. Par exemple :{" "}
        <LaTeX tex="f(x) = 5x + 2" /> représente l'action de multiplier par 5
        puis ajouter 2. Ici <LaTeX tex="5x + 2" /> est{" "}
        <strong> l'expression </strong> de <F />. Ainsi :
        <AutoTable>
          <LaTeX tex="f(1) &= 5\times 1 + 2\\ &=5 + 2\\ f(1)&=7" aligned />
          <div>
            <DotLine><LaTeX tex="f(0) =" /></DotLine>
            <DotLine count={2} />
          </div>
          <div>
            <DotLine><LaTeX tex="f(59) = " /></DotLine>
            <DotLine count={2} />
          </div>
        </AutoTable>
      </div>
      <Note>
        En fait quand on applique une fonction à un nombre on remplace la
        variable (en général <X />) par ce nombre.{" "}
      </Note>
      <Note headerText="Mais pourquoi ??">
        Parce que souvent en maths on souhaite étudier le comportement d'une
        suite d'opérations, plutôt que son résultat en un point. <br />
        Retiens ceci : <X /> est la <em>variable</em> c'est la grandeur qui
        bouge et dont dépend la valeur de <Fx />.
      </Note>
      <Problem>
        Soit un rectangle de 13 cm sur 20 cm dont on a découpé des carrés de
        côté <X /> à chaque coin.
        <div className="block-box">
          <img src={slantedRect} className="w-1/3" />
          <OL className="pl-5 w-2/3">
            <LI>
              Calculer l'aire <LaTeX tex="A_{tot}" /> du rectangle avant que
              l'on découpe les coins.
            </LI>
            <DotLine count={2} />
          </OL>
        </div>
        <OL start={1}>
          <LI>
            Quelle sera <LaTeX tex="A_{carré}(x)" /> l'aire{" "}
            <em> d'un seul</em> des petits carrés de côté <X /> ?
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
        </OL>
      </Problem>
      <H2>Fonction Affine</H2>
      <H3>Définition</H3>
      <p>
        Une <strong>fonction affine</strong> est une fonction de la forme
        suivante :
      </p>
      <ImportantEquation className="text-xl" tex="f(x) = a \times x + b" />
      <div className="text">
        Où <A /> et <B /> sont des nombres constants. On dit que :
        <UL className="ml-15">
          <LI>
            <A /> est le <strong>coefficient directeur</strong>;
          </LI>
          <LI>
            <B /> est l'<strong>ordonnée à l'origine</strong> c'est la valeur de{" "}
            <Fx>0</Fx>.
          </LI>
        </UL>
      </div>
      <div className="text">
        C'est une des formes de fonction les plus simples, on la retrouve dans
        toutes les situations où l'on a une valeur de départ et une augmentation
        proportionnelle à la variable <X />.
      </div>
      <AutoTable itemPerRow={2}>
        <div>
          <LaTeX tex="f(x) = 58\times x - 5" />

          <div>
            le coefficient directeur est <LaTeX tex="58" /> ; <br />{" "}
            l'ordonnée à l'origine est <LaTeX tex="-5" />.
          </div>
        </div>

        <div>
          <LaTeX tex="f(x) = 2,85\times x " />
          <DotLine className="w-full mb-0!">
            le coefficient directeur est
          </DotLine>
          <DotLine>l'ordonnée à l'origine est</DotLine>
        </div>

        <div>
          <LaTeX tex="f(x) = -205\times x + 4.32" />
          <DotLine className="w-full mb-0!">
            le coefficient directeur est
          </DotLine>
          <DotLine>l'ordonnée à l'origine est</DotLine>
        </div>

        <div>
          <LaTeX tex="f(x) = x^2 + x" />
          <DotLine count={2} />
        </div>
      </AutoTable>

      <Problem>
        <p>
          Sur un site de e-commerce international, les frais de port sont fixés
          à 15€40. Je souhaite acheter un certain nombre d'objets à 5€40 pièce.
        </p>
        <OL>
          <LI>Combien me coutera la livraison de 4 objets ?</LI>
          <DotLine count={2} />
          
          <LI>
            Donner l'expression de la fonction <LaTeX tex="K(n)" /> qui donne
            le prix pour <N /> objets.
          </LI>
          <DotLine count={2} />
          <LI>
            Combien d'objets puis-je acheter pour 60 € ? Cela revient à résoudre
            pour <N /> l'équation <LaTeX tex="K(n) = 60" />.
          </LI>
          <DotLine count={4} />
        </OL>
      </Problem>
      <H3>Représentation graphique</H3>
      <p className="border-box border-red-800! indent-0! text-center!">
        Une fonction affine est toujours représentée sur un graphique par une
        droite qui croise l'axe des ordonnées en son ordonnée à l'origine.{" "}
      </p>
      <p>
        Il suffit donc de connaitre la valeur de la fonction en deux points pour
        tracer sa représentation graphique.
      </p>

      <p>Représenter les fonctions suivantes :</p>
      <AutoTable itemPerRow={2}>
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
      </AutoTable>

      <div className="border-solid border-red-800 p-2 rounded-2xl ">
        <DotLine className="m-0!">
          Le <strong>coefficient directeur</strong> gère
        </DotLine>
        <DotLine count={1} className="m-0!" />

        <DotLine className="m-0!">
          Si le{" "}
          <strong>
            coefficient directeur de la fonction est positif{" "}
            <LaTeX tex="(>\:0)" />{" "}
          </strong>{" "}
          alors
        </DotLine>
        <DotLine count={1} className="m-0!" />

        <DotLine className="m-0!">
          Si le{" "}
          <strong>
            coefficient directeur de la fonction est négatif{" "}
            <LaTeX tex="(<\:0)" />{" "}
          </strong>{" "}
          alors
        </DotLine>
        <DotLine count={1} className="m-0!" />

        <DotLine className="m-0!">
          L'<strong>ordonnée à l'origine</strong> gère
        </DotLine>
        <DotLine count={1} className="m-0!" />
      </div>

      <Page page="landscape">
        <img src={graph} className="m-auto block w-[72%]" />
      </Page>
    </>
  );
}

export default function RappelDocument() {
  return (
    <Document title="Rappel Mathématiques">
      <div className="border-box text-center italic ">
        <span className="details ">
          Cette fiche rappelle les bases de mathématiques nécessaires pour les
          cours de Math/Sciences au lycée. Conserve-la précieusement et
          n'hésite pas à y revenir fréquemment.
        </span>
      </div>
      <NombresEtCalculs />
      <Proportionnalité />
      <Fonctions />
    </Document>
  );
}
