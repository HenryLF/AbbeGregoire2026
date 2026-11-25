import {
  suitesAct1GeoGebra,
  suitesActPavageB3,
  suitesActPavageB4,
  suitesActPavageB47,
  suitesActPavageScheme,
  suitesActPavageTableBegin,
  suitesActPavageTableEnd,
  suitesBridge,
  suitesConcrete,
  suitesErosion,
  suitesEx1Stairs,
  suitesExcelTable,
} from "@assets/index";
import { Img } from "@components/atoms/Img";
import { Note, P } from "@components/atoms/Texts";
import { Activites } from "@components/doctype/Activites";
import { Call, Exercice, SubQuestion, TP } from "@components/section/Exercice";
import {
  type ComponentProps,
  DotLine,
  Flex,
  LaTeX,
  LI,
  Options,
  PageBreak,
  UL,
} from "zefpdf-lab/ui";
import "../1ere.css";

const U = ({
  children,
  index = "n",
  ...props
}: ComponentProps & { index?: string | number }) => {
  const tex = children?.toString();
  return <LaTeX tex={`u_{${index}}${tex ?? ""}`} />;
};

const exSuite = (n: number = 9) =>
  Array.from({ length: n }, (_, k) => 1 + k * 5);

export default function () {
  return (
    <Activites title="Suites arithmétiques">
      <TP title="Construction de marches de piscine">
        <Flex>
          <div className="flex-3/4">
            <P>
              Un fabricant d'escaliers pour piscines imagine une forme semi-circulaire dessinée ci-contre. Il prévoit des marches
              régulièrement espacées. Sur son premier croquis, il prévoit que :
            </P>
            <Flex justify="center" gap="2mm">
              {["A'A = 1 m", "B'B = 1,4 m", "C'C = 1,8 m", "D’D = 2,2 m"].map(
                (t) => (
                  <LaTeX tex={t} />
                ),
              )}
            </Flex>
            <LI>Quel espacement, en cm, est prévu entre chaque marche ?</LI>
            <DotLine count={2} />
          </div>
          <Img src={suitesAct1GeoGebra} className="flex-1/3" />
        </Flex>
        <SubQuestion mainLI="Avant de construire ce type de modèle, le fabricant a besoin de l'étudier grâce à un plan conçu sur le logiciel GeoGebra.">
          <LI>
            Placer les points{" "}
            {["A(0,5 ; 0)", " B(0,7 ; 0)", " C(0,9 ; 0) ", " D(1,1 ; 0)"].map(
              (t) => (
                <LaTeX tex={t} />
              ),
            )}
          </LI>
          <LI>
            Avec la roulette de la souris, zoomer sur l’ensemble de ces points.
          </LI>
        </SubQuestion>
        <LI>
          Construire le symétrique de chaque point par rapport à l’axe des
          ordonnées. Pour cela, cliquer sur le bouton « symétrie axiale » puis
          sur le point A et enfin sur l’axe des ordonnées : le point A’,
          symétrique de A, s’affiche. Faire de même pour les points B, C et D.
        </LI>
        <SubQuestion indent={"5mm"}>
          <LI>
            Tracer le demi-cercle de diamètre [A'A] en cliquant sur l'outil «
            Demi-cercle » puis sur A' et A.
          </LI>
          <LI>
            b. Faire de même pour les demi-cercles de diamètre [B'B], [C'C] et
            [D'D].
          </LI>
        </SubQuestion>
        <Call>Faire vérifier la construction</Call>
        <LI>
          Mesurer le périmètre de chaque demi-cercle en cliquant sur le bouton «
          distance ou longueur » puis sur chacun des demi-cercles : la
          circonférence s'affiche.
        </LI>
        <UL>
          <Flex wrap gap="1mm">
            {["AA'", "BB'", "CC'", "DD'"].map((t) => (
              <LI className={"w-48/100"}>
                Périmètre du demi-cercle{" "}
                <LaTeX tex={`\\overset{~{\\large\\frown}}{${t}}`} />
                <DotLine width={"2cm"} />
              </LI>
            ))}
          </Flex>
        </UL>
        <LI>
          En observant bien les quatre résultats précédents, prévoir (sans
          utiliser le logiciel), quel serait le périmètre d'une marche
          supplémentaire telle que <LaTeX tex="EE' = 2,6 m" />. On explicitera
          clairement le raisonnement.
        </LI>
        <DotLine count={2} />
        <LI>Construire la marche supplémentaire à l'aide du logiciel.</LI>
        <Call>Appel n°2 : Faire vérifier la construction</Call>
        <LI>Confirmer ou infirmer la prévision faite à la question 6.</LI>
        <DotLine count={1} />
      </TP>

      <Exercice title="Programmation de tableur">
        <Img src={suitesExcelTable} className={"float-right w-[5cm] ml-2"} />
        <P>
          On considère une suite (<U />) de premier terme <U index={1}>= 10</U>.
        </P>
        <P>
          Dans la cellule B3 d'un tableur, on entre la formule{" "}
          <span className="border border-black px-1">=B2+3,5</span>.
        </P>
        <LI>
          Quel terme de la suite obtient-on ainsi et quelle est la valeur de ce
          terme ?
        </LI>
        <DotLine count={2} />
        <LI>
          On recopie vers le bas la formule précédente jusqu'à la cellule B7.
          Quelle formule apparaît dans la cellule B4 ? <DotLine inline />
        </LI>
        <LI>
          Donner la raison <LaTeX tex="r" /> de cette suite arithmétique.{" "}
          <DotLine inline />
        </LI>
        <LI>
          Exprimer <U /> en fonction de <LaTeX tex="n" />. <DotLine inline />
        </LI>
        <LI>
          Quel est le sixième terme de la suite (<U />) ? <DotLine inline />
        </LI>
      </Exercice>

      <Exercice title="Ventes de logiciels">
        <P>
          Une société commercialise des logiciels. La première année (année 0),
          les ventes sont de 100 000 unités. Les ventes augmentent de 7 000
          unités par an.
        </P>
        <P>
          On appelle <U index={0} /> les ventes de logiciels l'année 0,{" "}
          <U index={1} /> les ventes l'année 1, …, <U /> les ventes l'année{" "}
          <LaTeX tex="n" />.
        </P>
        <Note title="Attention !" className={"table mx-auto!"}>
          Ici, la suite commence au rang 0 : le premier terme est{" "}
          <U index={0} /> et non <U index={1} />.
        </Note>
        <LI>
          Combien vaut <U index={0} /> ? <DotLine inline />
        </LI>
        <LI>
          Calculer <U index={1} />, <U index={2} /> et <U index={3} />.
        </LI>
        <DotLine count={2} />
        <LI>
          Calculer le nombre de logiciels vendus l'année 15, si la tendance se
          poursuit.
        </LI>
        <DotLine count={2} />
      </Exercice>

      <Exercice title="Achat d'un ordinateur">
        <P>
          Un étudiant désire acheter un ordinateur coûtant 1 200 €. Au 1
          <sup>er</sup> janvier, il dispose d'un capital initial de 750 €. En
          faisant des économies, il arrive à placer 50 € de plus chaque mois sur
          son compte.
        </P>
        <P>
          On appelle <U index={1} /> la valeur du capital disponible le 1
          <sup>er</sup> janvier : <U index={1}>= 750</U>. On appelle{" "}
          <U index={2} /> la valeur du capital au 1<sup>er</sup> février,{" "}
          <U index={3} /> le capital au 1<sup>er</sup> mars et <U index={4} />{" "}
          le capital au 1<sup>er</sup> avril.
        </P>
        <LI>
          Calculer <U index={2} />, <U index={3} /> et <U index={4} />.
        </LI>
        <DotLine count={2} />
        <LI>
          Exprimer <U /> en fonction de <LaTeX tex="n" />. <DotLine inline />
        </LI>
        <LI>
          Calculer <U index={8} />. À quelle date correspond ce capital ?
        </LI>
        <DotLine count={2} />
        <LI>
          Déterminer, en justifiant, le rang <LaTeX tex="n" /> à partir duquel
          le capital atteint 1 200 €.
        </LI>
        <DotLine count={3} />
        <LI>
          En déduire la date à laquelle l'étudiant pourra acheter son
          ordinateur.
        </LI>
        <DotLine count={3} />
      </Exercice>
      <PageBreak />
      <Exercice title="Érosion">
        <Img src={suitesErosion} className={"float-right w-[6cm] ml-2"} />
        <P>
          Sur le littoral français, les modifications du climat dues au
          réchauffement climatique entraînent un recul des terres par érosion.
          Le recul moyen a été estimé par endroits à 4 m par an.
        </P>
        <P>Une route départementale est située à 115 m de la plage.</P>
        <P>
          Le service urbanisme de la mairie calcule le nombre d'années qu'il
          reste avant que la route soit attaquée par la marée.
        </P>
        <P>
          La première année la mer est à 115 m de la route, la deuxième année à
          111 m, puis 107 m, puis 103 m et ainsi de suite.
        </P>
        <P>On considère la suite de nombres : 115 ; 111 ; 107 ; 103.</P>
        <LI>
          Montrer que cette suite de nombres est une suite arithmétique dont on
          précisera la raison.
        </LI>
        <DotLine count={2} />
        <LI>
          On admet que la distance entre la route et la mer est donnée par les
          termes d'une suite arithmétique de premier terme{" "}
          <U index={1}>= 115</U> et de raison <LaTeX tex="r = -4" />. Déterminer
          la relation entre <U />, <U index={1} /> et <LaTeX tex="n" /> :
        </LI>
        <Options columns={4}>
          {[
            "u_n = u_1 + 4n",
            "u_n = u_1 + 4(n-1)",
            "u_n = u_1 - 4(n-1)",
            "u_n = u_1 + (n-4)",
          ].map((tex) => (
            <LaTeX tex={tex} />
          ))}
        </Options>
        <LI>
          Indiquer la distance entre la mer et la route la 15<sup>e</sup> année.
        </LI>
        <DotLine count={2} />
        <LI>
          Déterminer le rang de l'année où la route sera à 3 m de la plage.
        </LI>
        <DotLine count={3} />
      </Exercice>

      <Exercice title="Escalier en béton">
        <Img src={suitesEx1Stairs} className={"float-right w-[6cm]"} />
        <P>
          L'entreprise GUINETP est chargée de livrer un escalier en béton dont
          les marches s'allongent au fur et à mesure de façon régulière comme
          indiqué sur le plan (vue de dessus) ci-contre. Les cotes indiquées
          correspondent aux longueurs de chacune des marches, en cm. La largeur
          des marches est de 35 cm.
        </P>
        <SubQuestion
          mainLI={
            <>
              On note <LaTeX tex="l_1" /> la longueur de la 1re marche,{" "}
              <LaTeX tex="l_2" /> la longueur de la 2e marche, etc.
            </>
          }
        >
          <LI>
            Justifier que (<LaTeX tex="l_n" />) est une suite arithmétique dont
            on donnera la raison et le premier terme.
          </LI>
          <DotLine count={3} />
          <LI>
            Donner l'expression de (<LaTeX tex="l_n" />) en fonction du premier
            terme.
          </LI>
          <DotLine count={2} />

          <LI>Quelle est la longueur de la 7<sup>e</sup> marche ? de la 8<sup>e</sup> ?</LI>
          <DotLine count={2} />
        </SubQuestion>

        <SubQuestion indent={"5mm"}>
          <LI>Combien cet escalier a-t-il de marches ?</LI>
          <DotLine count={3} />
          <LI>Quelle est la longueur de l'escalier ?</LI>
          <DotLine count={3} />
        </SubQuestion>
      </Exercice>

      <TP title="Production de ciment">
        <Img src={suitesConcrete} className={"float-right w-[6cm] ml-2"} />
        <P>
          En 2019, l'usine CIMENT DE QUATTRO a produit 273 000 sacs de ciment.
          Ces dernières années, la production a augmenté régulièrement de 15 000
          sacs par an. Le responsable de production veut savoir si l'usine
          pourra supporter longtemps cette augmentation de production.
        </P>
        <SubQuestion
          mainLI={
            <>
              <b>Modélisation de l'évolution de la production</b>
              <br />
              On note <U index={1} /> la production de l'année 2019.
            </>
          }
        >
          <LI>Calculer la production de l'année 2020.</LI>
          <DotLine count={1} />
          <LI>
            Le nombre de sacs de ciment produit chaque année par l'entreprise
            constitue une suite arithmétique. Indiquer le premier terme{" "}
            <U index={1} /> et la raison <LaTeX tex="r" /> de cette suite.
            <div className="inline-block">
              <Flex justify="center" gap="1cm">
                <span>
                  <U index={1}>=</U> <DotLine width="4cm" />
                </span>
                <span>
                  <LaTeX tex="r =" /> <DotLine width="4cm" />
                </span>
              </Flex>
            </div>
          </LI>
          <LI>
            Calculer la production <U index={4} /> prévue en 2022.
          </LI>
          <DotLine count={1} />
          <LI>
            Choisir la formule permettant le calcul de <U index={4} />.
          </LI>
          <Options columns={4}>
            {[
              "u_4 = u_1 + 4r",
              "u_4 = u_1 + 3r",
              "u_4 = 4u_1 + r",
              "u_4 = 3u_1 + r",
            ].map((tex) => (
              <LaTeX tex={tex} />
            ))}
          </Options>
          <LI>
            Écrire la relation entre <U /> et <LaTeX tex="n" />.{" "}
            <DotLine inline />
          </LI>
        </SubQuestion>
        <SubQuestion mainLI={<b>Prévision de production</b>}>
          <LI>
            Calculer le 8<sup>e</sup> terme de cette suite. <DotLine inline />
          </LI>
          <LI>En déduire la production prévue en 2026.</LI>
          <DotLine count={1} />
          <LI>
            Soit la fonction <LaTeX tex="f" /> définie par{" "}
            <LaTeX tex="f(n) = 258000 + 15000n" /> pour tout <LaTeX tex="n" />{" "}
            entier tel que <LaTeX tex="n \geqslant 1" />. Utiliser le mode
            tableur de la calculatrice graphique pour déterminer les 10 premiers
            termes de la suite (<U />) tel que <U>= f(n)</U>.
          </LI>
          <Call>Faire vérifier le tableau de la calculatrice</Call>
          <LI>
            L'entreprise CIMENT DE QUATTRO a une capacité de production maximale
            annuelle de 450 000 sacs. En supposant que la production continue
            d'augmenter de 15 000 unités par an, déterminer l'année où la
            production atteindra 450 000 sacs de ciment. On explicitera
            clairement la méthode utilisée.
          </LI>
          <DotLine count={3} />
          <Call>Faire vérifier l'année</Call>
        </SubQuestion>
      </TP>

      <Exercice title="Pont passerelle">
        <Img src={suitesBridge} className={"float-right w-[8cm] ml-2"} />
        <P>
          Dans un parc municipal, un pont passerelle est installé pour franchir
          un bassin d'eau. Ce pont est porté par deux câbles de portée fixés au
          centre du tablier et sur des poteaux en béton situés sur les rives du
          bassin d'eau.
        </P>
        <P>
          Le tablier est horizontal et est soutenu par 38 haubans verticaux
          fixés aux câbles obliques.
        </P>
        <P>
          La suite de nombres (<U />) correspond aux longueurs de 19 haubans
          verticaux du côté gauche du pont et la suite de nombres (
          <LaTeX tex="v_n" />) correspond aux longueurs de 19 haubans verticaux
          du côté droit du pont.
        </P>
        <SubQuestion
          mainLI={
            <>
              Pour le côté gauche du pont :
              <UL marker="•">
                <LI>
                  le premier hauban mesure 9,5 m, on note <U index={1}>= 9,5</U>{" "}
                  ;
                </LI>
                <LI>
                  le deuxième hauban mesure 9 m, on note <U index={2}>= 9</U> ;
                </LI>
                <LI>
                  le troisième hauban mesure 8,5 m, on note{" "}
                  <U index={3}>= 8,5</U> ;
                </LI>
              </UL>
            </>
          }
        >
          <LI>
            Montrer que cette suite de nombres est une suite arithmétique dont
            on précisera la raison.
          </LI>
          <DotLine count={2} />
          <LI>
            Indiquer le calcul à réaliser pour passer d'un terme <U /> au
            suivant <U index="n+1" />. <DotLine inline />
          </LI>
          <LI>
            Calculer <U index={19} />.
          </LI>
          <DotLine count={2} />
          <LI>
            En déduire la longueur du dernier hauban du côté gauche du pont.
          </LI>
          <DotLine count={1} />
        </SubQuestion>
        <SubQuestion
          mainLI={
            <>
              Pour le côté droit du pont :
              <UL marker="•">
                <LI>
                  le premier hauban mesure 0,3 m, on note{" "}
                  <LaTeX tex="v_1 = 0,3" /> ;
                </LI>
                <LI>
                  le deuxième hauban mesure 0,6 m, on note{" "}
                  <LaTeX tex="v_2 = 0,6" /> ;
                </LI>
                <LI>
                  le troisième hauban mesure 0,9 m, on note{" "}
                  <LaTeX tex="v_3 = 0,9" /> ;
                </LI>
              </UL>
            </>
          }
        >
          <LI>
            Montrer que cette suite de nombres est une suite arithmétique dont
            on précisera la raison.
          </LI>
          <DotLine count={2} />
          <LI>
            Indiquer le calcul à réaliser pour passer d'un terme{" "}
            <LaTeX tex="v_n" /> au suivant <LaTeX tex="v_{n+1}" />.{" "}
            <DotLine inline />
          </LI>
          <LI>
            Calculer <LaTeX tex="v_{19}" />, puis en déduire la longueur du
            dernier hauban du côté droit du pont.
          </LI>
          <DotLine count={2} />
          <LI>
            Calculer la longueur totale des haubans du côté droit{" "}
            <LaTeX tex="S_{19}" /> en utilisant la formule{" "}
            <LaTeX tex="S_n = \dfrac{n \times (v_1 + v_n)}{2}" />.
          </LI>
          <DotLine count={2} />
        </SubQuestion>
      </Exercice>
      <PageBreak />
      <Exercice title="Concession automobile">
        <P>
          En janvier, un jeune diplômé décide d'ouvrir une concession
          automobile. Ce premier mois, il vend 3 voitures. Ensuite, chaque mois
          il vendra 2 voitures de plus que le mois précédent.
        </P>
        <LI>
          Définir une suite arithmétique (<U />) de premier terme{" "}
          <U index={1} /> (ventes de janvier) qui permette de déterminer le
          nombre de voitures vendues chaque mois.
        </LI>
        <DotLine count={2} />
        <LI>
          Combien de voitures vendra-t-il en février ? en mai ? en décembre ?
        </LI>
        <DotLine count={2} />
        <LI>Combien de voitures aura-t-il vendu au cours de la 1re année ?</LI>
        <DotLine count={3} />
        <LI>Combien de voitures aura-t-il vendu en 5 ans ?</LI>
        <DotLine count={2} />
        <LI>Combien de voitures aura-t-il vendu au cours de la 3e année ?</LI>
        <DotLine count={3} />
      </Exercice>

      <TP title="Dallage d'une place">
        <Img
          src={suitesActPavageScheme}
          className={"float-right w-[5cm] ml-2"}
        />
        <P>
          Dans un village, une place carrée de 15 m de côté doit être pavée.
        </P>
        <P>
          La partie centrale de la place est un carré de 1,5 m, réservé pour un
          espace vert.
        </P>
        <P>
          On pose des pavés blancs carrés de 15 cm de côté, joints compris, sur
          toute la surface à l'exception des diagonales qui seront en pavés
          noirs de même dimension (voir le <b>début</b> du croquis ci-contre…{" "}
          <u>tous les pavés ne sont pas dessinés !</u>).
        </P>
        <P>
          La première rangée posée est celle qui borde le carré intérieur
          réservé pour l'espace vert.
        </P>
        <SubQuestion
          mainLI={
            <b>
              <u>L'étude porte d'abord sur un quart de la place.</u>
            </b>
          }
        >
          <LI>
            Déterminer combien de rangées de pavés blancs sont nécessaires pour
            daller tout le 1<sup>er</sup> quart de la place.
          </LI>
          <DotLine count={3} />
          <LI>Déterminer le nombre de pavés blancs de :</LI>
          <Flex wrap gap="2mm" className="ml-[1cm]">
            {[
              ["1", "re"],
              ["2", "e"],
              ["3", "e"],
              ["4", "e"],
              ["5", "e"],
            ].map(([n, e]) => (
              <span className="w-[30%]">
                • la {n}
                <sup>{e}</sup> rangée : <DotLine width="2cm" />
              </span>
            ))}
          </Flex>
          <Call>Faire vérifier les nombres de pavés</Call>
          <LI>
            On obtient alors les cinq premiers termes d'une suite (<U />
            ). Écrire le début de cette suite :
          </LI>
          <P className="text-center">
            ( <DotLine width="2.5cm" /> ; <DotLine width="2.5cm" /> ;{" "}
            <DotLine width="2.5cm" /> ; <DotLine width="2.5cm" /> ;{" "}
            <DotLine width="2.5cm" /> )
          </P>
          <LI>
            Déterminer :{" "}
            {[1, 2, 3, 4, 5].map((k) => (
              <>
                <U index={k}>=</U> <DotLine width="1.3cm" />
                {k < 5 ? " ; " : ""}
              </>
            ))}
          </LI>
          <LI>
            Quelle est l'opération mathématique qui permet de calculer les différents
            termes de la suite à partir du précédent ? <DotLine inline />
          </LI>
          <LI>Écrire une relation :</LI>
          <UL className={"columns-2"} indent={0}>
            {[2, 3, 4, 5].map((k) => (
              <LI>
                entre <U index={k} /> et <U index={k - 1} /> :{" "}
                <U index={k}>=</U> <DotLine inline />
              </LI>
            ))}
          </UL>
          <LI>
            Déterminer la valeur de <U index={6} /> : <U index={6}>=</U>{" "}
            <DotLine inline />
          </LI>
        </SubQuestion>

        <Flex gap="3mm">
          <div className="flex-1">
            <SubQuestion
              mainLI={
                <b>
                  On souhaite utiliser un tableur pour calculer les 45 premiers
                  termes de cette suite.
                </b>
              }
            >
              <LI>
                Compléter le tableur ci-contre avec la valeur du 1<sup>er</sup>{" "}
                terme en B2.
              </LI>
              <LI>
                Comment programme-t-on la cellule B3 pour que le tableur calcule
                le 2<sup>e</sup> terme de la suite à partir du 1<sup>er</sup> ?
                <Img
                  src={suitesActPavageB3}
                  className="w-[9cm] inline-block align-middle mx-2"
                />
              </LI>
              <LI>
                Comment programme-t-on la cellule B4 pour que le tableur calcule
                le 3<sup>e</sup> terme de la suite à partir du 2<sup>e</sup> ?
                <Img
                  src={suitesActPavageB4}
                  className="w-[9cm] inline-block align-middle mx-2"
                />
              </LI>
              <LI>Utiliser le tableur pour calculer les 45 premiers termes.</LI>
              <Call>Faire vérifier la programmation des cellules</Call>
              <LI>
                Comment programme-t-on la cellule B47 pour que le tableur
                calcule la somme des 45 premiers termes ?
                <Img
                  src={suitesActPavageB47}
                  className="w-[9cm] inline-block align-middle mx-2"
                />
              </LI>
              <LI>Utiliser le tableur pour déterminer cette somme.</LI>
              <Call>Faire vérifier la somme</Call>
            </SubQuestion>
          </div>
          <div className="w-[5.5cm]">
            <Img src={suitesActPavageTableBegin} className="w-full" />
            <P className="text-center">[…]</P>
            <Img src={suitesActPavageTableEnd} className="w-full" />
          </div>
        </Flex>

        <SubQuestion>
          <LI>
            Quel est le nombre de pavés blancs nécessaires pour paver le quart
            de la place ?
          </LI>
          <DotLine count={2} />
          <LI>
            Quel est le nombre de pavés blancs nécessaires pour paver la place
            ?{" "}
          </LI>
          <DotLine count={2} />

          <LI>
            Quel est le nombre de pavés noirs nécessaires pour paver la place
            ?{" "}
          </LI>
          <DotLine count={3} />

          <LI>Combien de pavés y a-t-il sur la place ?</LI>
          <DotLine count={4} />
        </SubQuestion>
      </TP>
    </Activites>
  );
}
