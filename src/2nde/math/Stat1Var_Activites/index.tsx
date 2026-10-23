import boite1 from "@assets/statistics/boite1.jpg";
import boite2 from "@assets/statistics/boite2.jpg";
import excelDiagramExemple from "@assets/statistics/excel-diagram-exemple.png";
import excelDiagramIcon from "@assets/statistics/excel-diagram-icon.png";
import exempleCalc from "@assets/statistics/exemple-calc.png";
import exempleCalc2 from "@assets/statistics/exemple-calc2.png";
import penteHuez from "@assets/statistics/pente-huez.png";
import profilMonteeHuez from "@assets/statistics/profil-montee-huez.png";
import pyramideSalaires from "@assets/statistics/pyramide-salaires.png";
import routeLittoral from "@assets/statistics/route-littoral.jpg";
import { Circle } from "@components/atoms/Decorator";
import { Img } from "@components/atoms/Img";
import { Qr } from "@components/atoms/Qr";
import { Details, P, S } from "@components/atoms/Texts";
import { Activites } from "@components/doctype/Activites";
import { Doc } from "@components/section/Doc";
import {
  Call,
  Exercice,
  SubQuestion,
  TP,
} from "@components/section/Exercice";
import { Chart, ChartObj } from "zefpdf-lab/ui/Chart";
import { DotLine, Options } from "zefpdf-lab/ui/Inputs";
import { LaTeX } from "zefpdf-lab/ui/LaTeX";
import { Flex } from "zefpdf-lab/ui/Layout";
import { LI, OL, toLowerAlpha, UL } from "zefpdf-lab/ui/List";
import { PageBreak } from "zefpdf-lab/ui/Pages";
import { Table, TEntry, THeader } from "zefpdf-lab/ui/Table";
import { H1, H2 } from "zefpdf-lab/ui/Titles";
import {
  c_plomb_labels,
  c_plomb_values,
  db_labels,
  db_values,
  h_pile_route_littoral,
  serie1,
  serie2,
  serie3,
  serie4,
} from "./datasets";
import "./index.css";

// Chart.js defaults for this document.
ChartObj.defaults.font.size = 22;
ChartObj.defaults.scales.category.title = {
  ...ChartObj.defaults.scales.category.title,
  font: { size: 32 },
  display: true,
};
ChartObj.defaults.scales.linear.title = {
  ...ChartObj.defaults.scales.category.title,
  font: { size: 32 },
  display: true,
};
ChartObj.defaults.scales.linear.beginAtZero = true;
ChartObj.defaults.backgroundColor = [
  "#cc5803",
  "#07a0c3",
  "#f0c808",
  "#731dd8",
  "#dd1c1a",
  "#2c497f",
  "#ff01fb",
  "#45cb85",
  "#efd9ce",
  "#dba8ac",
];
ChartObj.defaults.elements.bar.borderColor = "#000";
ChartObj.defaults.elements.bar.borderWidth = 2;
ChartObj.defaults.elements.bar.borderRadius = 20;
ChartObj.defaults.elements.arc.borderColor = "#000";
ChartObj.defaults.elements.arc.borderWidth = 2;
ChartObj.defaults.elements.arc.offset = 20;
ChartObj.defaults.elements.line.borderColor = "#000";
ChartObj.defaults.elements.line.borderWidth = 2;
ChartObj.defaults.plugins.legend.display = false;

const alphaDot = (n: number) => `${toLowerAlpha(n)}.)`;

// 12 values per row (old AutoTable itemPerRow={12})
const pileRows = Array.from(
  { length: Math.ceil(h_pile_route_littoral.length / 12) },
  (_, k) => h_pile_route_littoral.slice(k * 12, (k + 1) * 12),
);

export default function Stat1VarActivitesDocument() {
  return (
    <Activites title="Statistique à une variable" lang="fr">
      <TP title="Universités Parisiennes">
        <Qr
          href="https://drive.monlycee.net/s/aWRmMg-mnko56d7"
          size={60}
          className="float-right m-2"
        >
          Tableau Excel
        </Qr>
        <P>
          On fournit le tableau Excel "UniversitésParis.xlsx" qui contient les
          (vraies) données issues de ParcourSup pour les années 2021 et 2025.
        </P>
        <LI>
          Décrire le contenu du tableau. Quelles informations nous donne-t-il ?
        </LI>
        <DotLine count={3} />
        <LI>
          Dans la cellule "B11", taper la formule "=SOMME(B3:B10)", propager
          cette formule aux cellules "C11" , "D11" et "E11".
        </LI>
        <LI>
          Comment a évolué le nombre de candidats entre 2021 et 2025 ? Calculer
          le nombre de candidats supplémentaires ou en moins entre les deux
          années.
        </LI>
        <DotLine count={3} />
        <LI>
          On souhaite savoir comment se répartissent les candidatures parmi les
          différentes universités. Pour cela entrer dans la cellule "C3" la
          formule "=100*B3/B$11" (attention au signe $ !!). Propager cette
          cellule sur la plage "C3:C10".
        </LI>
        <LI>
          Copier (Ctrl + C) coller (Ctrl + V) la formule de la cellule "C3" dans
          la cellule "E3". Puis propager la formule de la cellule "E3" à la
          plage "E3:E10".
        </LI>
        <LI>
          À l'aide de la fiche disponible en page 9 et de recherches internet,
          tracer les graphiques suivants :
        </LI>
        <SubQuestion count={6}>
          <LI>
            Un diagramme en barres, représentant le nombre de candidats pour
            toutes les universités en 2021 et 2025.
          </LI>
          <LI>
            Un diagramme circulaire, représentant la répartition des candidats
            parmi les universités en 2021.
          </LI>
          <LI>
            Un diagramme circulaire, représentant la répartition des candidats
            parmi les universités en 2025.
          </LI>
        </SubQuestion>
        <LI>
          Observer le diagramme en barres. Les observations sont-elles
          cohérentes avec la réponse à la question 3 ?
        </LI>
        <DotLine count={3} />
        <LI>Comparer les deux diagrammes circulaires. Que constate-t-on ?</LI>
        <DotLine count={3} />
        <LI>Analyser les données et conclure.</LI>
        <DotLine count={4} />
      </TP>

      <PageBreak />
      <H1>Représentation des séries statistiques</H1>
      <Exercice title="Quelles représentations d’une série statistique ?">
        <Flex gap="2.5cm">
          <Flex dir="column" justify="space-around" gap="2mm" className="flex-1">
            {[serie1, serie2, serie3, serie4].map((s) => (
              <Flex align="center" gap="5mm">
                <Table className="w-[6cm] mx-auto">
                  <THeader content={[s.label_txt, s.data_txt]} />
                  {s.labels.map((label, k) => (
                    <TEntry content={[label, s.data[k]]} />
                  ))}
                </Table>
                <span>&bull;</span>
              </Flex>
            ))}
          </Flex>
          <Flex dir="column" gap="1mm" className="flex-1">
            {[serie3, serie4, serie1, serie2].map((s) => (
              <div>
                <Flex align="center" gap="5mm">
                  <span>&bull;</span>
                  <Chart
                    className="w-[6.5cm] h-auto"
                    config={{
                      type: s.type,
                      data: {
                        labels: s.labels,
                        datasets: [{ data: s.data }],
                      },
                      options: {
                        plugins: { legend: { display: s.type == "pie" } },
                      },
                    }}
                  />
                </Flex>
                <DotLine lineHeight="1.5em" />
              </div>
            ))}
          </Flex>
        </Flex>

        <LI>
          Associer les tableaux statistiques suivants et leur(s)
          représentation(s) graphique(s) et attribuer leur type à chacun.
        </LI>
        <SubQuestion count={2}>
          <LI>
            Quelle est la signification de la notation mathématique{" "}
            <LaTeX tex="[5 ; 10[" /> ?
          </LI>
          <Options columns={2}>
            {"Entre 5 et 10"}
            {"5 et 10 inclus"}
            {"5 inclus et 10 exclus"}
            {"5 et 10 exclus"}
          </Options>
          <LI>Quel nom porte cette notation ?</LI>
          <Options columns={2}>
            {"un couple"}
            {"un ensemble"}
            {"un intervalle"}
            {"des coordonnées"}
          </Options>
        </SubQuestion>
      </Exercice>

      <Exercice title="Répartition des salariés des travaux publics">
        <P>
          Le graphique ci-contre donne la répartition des salariés par catégorie
          professionnelle dans le secteur des travaux publics (ETAM = Employés,
          Techniciens et Agents de Maîtrise).
        </P>
        <Flex gap="3mm" align="center">
          <div className="flex-[1.8]">
            <LI marker="•">
              Cocher les interprétations correctes de ce graphique
            </LI>
            <Options columns={1}>
              <>Le nombre d’ouvriers a baissé</>
              <>Les ouvriers représentent plus de la moitié des effectifs</>
              <>
                Les entreprises recherchent une montée en qualification de leur
                personnel
              </>
              <>Le secteur des travaux publics a plus recruté en 2017</>
            </Options>
          </div>
          <div className="flex-1">
            <Chart
              className="w-full h-auto"
              config={{
                type: "bar",
                data: {
                  labels: ["Ouvriers", "ETAM", "Cadres"],
                  datasets: [
                    {
                      label: "2008",
                      data: [60, 26, 14],
                      backgroundColor: "orange",
                    },
                    {
                      label: "2017",
                      data: [54, 29, 17],
                      backgroundColor: "blue",
                    },
                  ],
                },
                options: {
                  plugins: {
                    legend: { display: true },
                  },
                  scales: {
                    y: { title: { text: "Proportion des salariés (%)" } },
                  },
                },
              }}
            />
          </div>
        </Flex>
        <DotLine count={5} />
      </Exercice>

      <Exercice title="Performances de deux buteurs">
        <P>
          Durant la dernière coupe du monde deux joueurs se sont démarqués par
          leur talent de buteur, voici le nombre de buts inscrits par chacun.
        </P>
        <Table className="w-9/10 mx-auto">
          <THeader
            content={[
              "Match n°",
              ...Array.from({ length: 10 }, (_, k) => k + 1),
            ]}
          />
          <TEntry
            header="Mionel Lessi"
            content={[0, 3, 2, 0, 0, 4, 1, 5, 3, 0]}
          />
          <TEntry
            header="Lilian M’Kappe"
            content={[1, 2, 3, 3, 1, 3, 2, 2, 0, 1]}
          />
        </Table>
        <LI>
          Calculer le nombre moyen de buts par rencontre pour ces deux joueurs.
        </LI>
        <DotLine count={4} />
        <LI>
          Compléter le tableau et tracer le diagramme en bâtons correspondant.
        </LI>
        <Flex gap="3mm" align="center">
          <div className="flex-1">
            <Table className="w-full">
              <THeader
                content={[
                  "Nombre de buts",
                  ...Array.from({ length: 6 }, (_, k) => k),
                ]}
              />
              {["Mionel Lessi", "Lilian M’Kappe"].map((name) => (
                <TEntry
                  header={name}
                  content={Array.from({ length: 6 }, () => (
                    <DotLine />
                  ))}
                />
              ))}
            </Table>
          </div>
          <div className="flex-[1.2]">
            <Chart
              className="w-full h-auto"
              config={{
                type: "bar",
                data: {
                  labels: Array.from({ length: 6 }, (_, k) => k.toString()),
                  datasets: [
                    {
                      label: "none",
                      data: [4],
                      backgroundColor: "transparent",
                      borderColor: "transparent",
                    },
                  ],
                },
              }}
            />
          </div>
        </Flex>
        <LI>
          Conclure quant aux performances de ces deux joueurs, peut-on
          distinguer un "meilleur buteur" ? En quoi ces deux joueurs
          diffèrent-ils ?
        </LI>
        <DotLine count={5} />
      </Exercice>

      <H1>Indicateurs de position</H1>
      <TP title="La montée de l’Alpe d’Huez">
        <P>
          Haut lieu du Tour de France cycliste, l’Alpe d’Huez et ses 21 virages
          constituent l’étape incontournable du passage de la Grande Boucle. En
          moyenne, près de 300 cyclistes gravissent chaque jour cette montée
          mythique. Plus de 6 000 cyclotouristes participent chaque année à
          l’épreuve de la Marmotte (début juillet) et 2 000 d’entre eux
          reçoivent un diplôme officialisant leur temps de montée. L’Alpe
          d’Huez, au cœur de l’Oisans, est vraiment le temple du vélo et c’est
          surtout la course à réaliser au moins une fois dans sa vie !
        </P>
        <Flex gap="3mm">
          <div className="flex-[0.9]">
            <Doc caption="Profil de la montée de l’Alpe d’Huez" count={1}>
              <Img src={profilMonteeHuez} />
            </Doc>
          </div>
          <Flex dir="column" gap="2mm" className="flex-1">
            <Doc caption="Notion de dénivelé">
              <P>
                Le <S>dénivelé</S> est la différence d’altitude entre deux
                points. Il représente une hauteur.
              </P>
            </Doc>
            <Doc caption="Notion de pente exprimée en pourcentage">
              <LaTeX tex="\text{Pente} {\small(\text{en} \%)} = {\large \frac{\text{dénivelé}}{\text{distance}\,\text{parcourue}}} \times 100" />
              <P>(où les distances sont exprimées dans la même unité)</P>
            </Doc>
            <Doc caption="Profil de la montée de l’Alpe d’Huez">
              <Img src={penteHuez} />
            </Doc>
          </Flex>
        </Flex>
        <LI>
          Avant de recevoir le précieux diplôme officialisant le temps de leur
          montée, les cyclotouristes ont à leur disposition de nombreux
          renseignements plus précis que les précédents pour préparer leur
          ascension. Compléter les informations manquantes en t'appuyant sur les
          documents <Circle>1</Circle>, <Circle>2</Circle> et{" "}
          <Circle>3</Circle>.
        </LI>
        <UL marker="•" className="columns-2">
          <LI>nombre de virages : 21 ;</LI>
          <LI>altitude de départ (Bourg d’Oisans) : 717 m ;</LI>
          <LI>
            altitude d’arrivée (Alpe d’Huez) :
            <DotLine width="5cm" lineHeight="1em" /> m ;
          </LI>
          <LI>
            dénivelé :
            <DotLine width="5cm" lineHeight="1em" /> ;
          </LI>
          <LI>distance à parcourir : 14 454 m ;</LI>
          <LI>
            pente moyenne :
            <DotLine width="5cm" lineHeight="1em" /> ;
          </LI>
          <LI>pente maximale : 14 % ;</LI>
          <LI>
            record de la montée : 37 min 35 s (par Marco Pantani, en 1997) à une
            vitesse moyenne de 23 km/h.
          </LI>
        </UL>
        <DotLine count={4} />
        <Call>Faire vérifier la pente moyenne en %</Call>
        <LI>
          Au long de la montée, 21 panneaux rythment l’effort du cycliste dans
          un compte à rebours de plus de 14 km sur un dénivelé très important !
          Expliquer les différences de couleur sur le document{" "}
          <Circle>4</Circle> sur les tronçons de la montée en complétant la
          phrase suivante :
        </LI>
        <P align="center" className="w-9/10 mx-auto">
          « La couleur rouge correspond à des tronçons où les pentes sont{" "}
          <DotLine width="5cm" lineHeight="1em" /> »
        </P>
        <Qr
          href="https://drive.monlycee.net/s/aWRmMg-oJMynTsn"
          size={60}
          className="float-right m-2"
        >
          Tableau Excel
        </Qr>
        <LI>
          On dispose du fichier « ALPE HUEZ.ods » où ont été saisis les
          distances et altitudes des différents tronçons du versant Sud.
        </LI>
        <SubQuestion count={3}>
          <LI>
            Quelle formule faut-il saisir dans la cellule C3 pour calculer la
            distance du 1er tronçon ?
          </LI>
          <Options>
            {`"= B1 + C1"`}
            {`"= B1 - C1"`}
            {`"= C1 - B1"`}
          </Options>
          <LI>
            Quelle formule faut-il saisir dans la cellule C4 pour calculer le
            dénivelé du 1er tronçon ?
          </LI>
          <Options>
            {`"= B2 + C2"`}
            {`"= B2 - C2"`}
            {`"= C2 - B2"`}
          </Options>
          <LI>
            Effectuer les calculs des différentes distances et dénivelés de
            chacun des tronçons.
          </LI>
          <LI>
            Quelle formule faut-il saisir dans la cellule C5 pour calculer la
            pente du 1er tronçon ?
          </LI>
          <Options>
            {`"= C4*100/C2"`}
            {`"= C2*100/C4"`}
            {`"= C4*100/C3"`}
            {`"= C3*100/C4"`}
          </Options>
          <LI>
            Effectuer les calculs des différentes pentes moyennes de chacun des
            tronçons.
          </LI>
          <Call>Faire vérifier les pentes moyennes</Call>
          <LI>
            Sur le document <Circle>4</Circle>, à quoi correspondent les valeurs
            indiquées au pied de chaque barre ?
          </LI>
          <DotLine count={2} />
          <LI>
            La pente moyenne du versant Sud est de 7,79 %. Peut-on retrouver
            dans le cas présent la pente moyenne de la montée à partir de la
            pente moyenne de chaque tronçon ?
            <Options columns={2} className="w-1/3">
              {"OUI"}
              {"NON"}
            </Options>
          </LI>
          <DotLine count={4} />
        </SubQuestion>
      </TP>

      <Exercice title="Pyramide des salaires en France">
        <Flex gap="3mm" align="center">
          <div className="flex-[1.5]">
            <P>
              Le graphique ci-dessus donne la distribution des salaires NETS en
              France métropolitaine pour l’année 2022.
            </P>
            <LI>
              Quel pourcentage de salariés gagnent moins de 2 000 € NETS
              mensuels ?
            </LI>
            <DotLine count={1} />
            <LI>
              Quel pourcentage de salariés gagnent plus de 4 000 € NETS mensuels
              ?
            </LI>
            <DotLine count={1} />
            <LI>
              Le salaire médian est de 2 091 € NETS mensuels. Quelle est la
              signification de ce montant ?
            </LI>
            <Options columns={1}>
              <>le SMIC (Salaire Minimum de Croissance) est de 2 091 €</>
              <>la moitié des Français gagnent plus de 2 091 €</>
              <>un quart des salariés gagnent plus de 2 091 €</>
              <>la moitié des salariés gagnent moins de 2 091 €</>
              <>la retraite minimale est de 2 091 €</>
            </Options>
            <LI>
              En 2022, un salarié du secteur privé percevait en moyenne 2 630 €
              nets par mois. Comment expliquer une moyenne significativement
              supérieure au salaire médian de 2 091 € ?
            </LI>
          </div>
          <Img src={pyramideSalaires} className="flex-1" />
        </Flex>
        <DotLine count={4} />
      </Exercice>

      <H1>Indicateur de dispersion</H1>
      <TP title="Nouvelle route du littoral">
        <P>
          Sur l’île de la Réunion, la nouvelle route du littoral est une voie en
          pleine mer pour relier les villes de l’île en 2020.{" "}
          <em>
            L’architecte de ce projet souhaite, pour des raisons esthétiques,
            que 75 % des piles aient une hauteur inférieure à 40 m et que
            l’étendue associée à ces hauteurs ne dépasse pas 6 m
          </em>
          . On donne ci-dessous les hauteurs, en mètres, des piles constituant
          une portion de cette route.
        </P>
        <Flex gap="3mm" align="center">
          <div className="flex-1">
            <Doc
              count={1}
              caption="Hauteur des piles de la route du littoral (en m)"
            >
              <Table cellPadding="1mm">
                {pileRows.map((row) => (
                  <TEntry content={row} />
                ))}
              </Table>
            </Doc>
          </div>
          <Img src={routeLittoral} align="right" className="flex-[0.5]">
            Nouvelle Route du Littoral
          </Img>
        </Flex>
        <PageBreak />
        <LI>
          À partir du tableau, donner le nombre de piles sur cette portion de
          route.
        </LI>
        <DotLine count={2} />
        <LI>
          Utiliser les fonctionnalités statistiques de la calculatrice pour
          déterminer les indicateurs (arrondir à 0,01 près).
        </LI>
        <Details align="right">
          <em>
            On saisira toutes les données des six colonnes suivantes dans la
            première colonne de la calculatrice et on affectera l’effectif « 1 »
            à toutes les valeurs dans la deuxième colonne de la calculatrice.
          </em>
        </Details>
        <OL marker={alphaDot} indent="1cm">
          <LI>
            la moyenne : <LaTeX tex="\overline{x} =" />
            <DotLine width="3.8cm" lineHeight="1em" />;
          </LI>
          <LI>
            la médiane : <LaTeX tex="Me =" />
            <DotLine width="3.8cm" lineHeight="1em" />;
          </LI>
          <LI>
            le 1er quartile : <LaTeX tex="Q_1 =" />
            <DotLine width="3.8cm" lineHeight="1em" />;
          </LI>
          <LI>
            le 3e quartile : <LaTeX tex="Q_3 =" />
            <DotLine width="3.8cm" lineHeight="1em" />;
          </LI>
        </OL>
        <LI>
          Choisir la boîte à moustaches qui représente correctement cette série
          statistique :
        </LI>
        <Options>
          <Img src={boite1} className="w-full" />
          <Img src={boite2} className="w-full" />
        </Options>
        <LI>
          L’étude de cette portion de route répond-elle aux contraintes
          architecturales ? On précisera la réponse.
        </LI>
        <DotLine count={4} />
      </TP>

      <Exercice title="Canalisation en plomb">
        <P>
          La consommation d’eau chargée en plomb venant d’anciennes
          canalisations peut provoquer des troubles du système cérébral. On
          étudie ici la concentration en plomb dans l’eau du robinet de
          logements de la région parisienne.
        </P>
        <Flex gap="3mm" align="start">
          <Table className="flex-1">
            <THeader
              content={[
                <>
                  Concentration <br />
                  (en μg/L)
                </>,
                "Nombre de logements",
                "Centre de classes",
              ]}
            />
            {c_plomb_labels.map((label, k) => (
              <TEntry
                content={[
                  label,
                  c_plomb_values[k],
                  <DotLine />,
                ]}
              />
            ))}
          </Table>
          <div className="flex-[0.8]">
            <LI>Déterminer :</LI>
            <OL marker={alphaDot} indent="1cm">
              <LI>Le nombre total de logements étudiés.</LI>
              <DotLine />
              <LI>La concentration moyenne en plomb (arrondir à 0,1 près).</LI>
            </OL>
            <DotLine count={3} />
          </div>
        </Flex>
        <LI>
          Sachant que la concentration moyenne en France est de 10 μg/L,
          indiquer si les canalisations des logements testés sont plutôt
          rénovées ou encore vétustes.
        </LI>
        <DotLine count={2} />
      </Exercice>

      <Exercice title="Contrôle d’isolation acoustique d’une nouvelle construction">
        <Flex gap="3mm" align="center">
          <div className="flex-[1.2]">
            <P>
              Une fois la construction d’un immeuble terminée, on souhaite
              vérifier la qualité de son isolement acoustique par rapport aux
              bruits extérieurs (l’immeuble est situé près d’une route à forte
              circulation). Pour cela, on effectue, à différentes heures, dans
              chacune des 74 chambres et séjours, des mesures du niveau
              d’intensité acoustique à l’aide d’un sonomètre. Les résultats
              présentés dans le tableau ci-contre correspondent, pour chacune
              des pièces, aux niveaux d'intensité acoustique maximum
              enregistrés.
            </P>
          </div>
          <Table className="flex-1">
            <THeader
              content={[
                <>
                  Niveau d’intensité <br /> acoustique (en dB)
                </>,
                "Centre de classes",
                "Nombre de pièces",
              ]}
            />
            {db_labels.map((label, k) => (
              <TEntry
                content={[
                  label,
                  <DotLine lineHeight="1.2em" />,
                  db_values[k],
                ]}
              />
            ))}
          </Table>
        </Flex>
        <LI>
          Quel est le pourcentage de pièces ayant un niveau d’intensité
          acoustique strictement inférieur à 30 dB ?
        </LI>
        <DotLine count={3} />
        <LI>
          Calculer la moyenne <LaTeX tex="\overline{x}" /> et l’écart-type{" "}
          <LaTeX tex="\sigma" /> de la série statistique obtenue en considérant
          que chaque mesure est égale à la valeur centrale de la classe dans
          laquelle elle est répertoriée (les résultats seront arrondis au dB).
        </LI>
        <LI>
          L’isolement acoustique est jugé bon si les conditions suivantes sont
          simultanément remplies :
          <UL marker="•" className="columns-2">
            <LI>
              le niveau acoustique moyen <LaTeX tex="\overline{x}" /> est
              inférieur à 30 dB ;
            </LI>
            <LI>
              l’écart-type <LaTeX tex="\sigma" /> est inférieur à 9 dB.
            </LI>
          </UL>
          L’isolement acoustique de l’immeuble peut-il être jugé bon ?
        </LI>
        <Options>
          {"OUI"}
          {"NON"}
        </Options>
      </Exercice>

      <PageBreak />
      <H1 marker="">Utilisation de la calculatrice graphique</H1>
      <H2 marker="">CASIO</H2>
      <OL>
        <LI>
          <S>Pour saisir les données statistiques :</S>
        </LI>
        <UL marker="•" indent="2em">
          <LI>
            Choisir le menu « STAT », et saisir les données dans les deux
            colonnes List1 et List2.
          </LI>
        </UL>
        <LI>
          <S>Pour afficher les indicateurs :</S>
        </LI>
        <UL marker="•" indent="2em">
          <LI>Choisir le menu contextuel « CALC »</LI>
          <LI>
            Vérifier la configuration en choisissant « SET » : List1 doit être
            choisie pour « 1Var XList » et List2 pour « 1Var Freq ».
          </LI>
          <LI>Choisir ensuite « 1VAR »</LI>
        </UL>
      </OL>
      {/* <H2 marker="">Texas Instrument</H2>
      <OL>
        <LI><S>Pour saisir les données statistiques :</S></LI>
        <UL marker="•" indent="2em">
          <LI>
            Appuyer sur stats, puis « EDIT » puis « 1 » et saisir les données
            dans les colonnes L1 et L2.
          </LI>
        </UL>
        <LI><S>Pour afficher les indicateurs :</S></LI>
        <UL marker="•" indent="2em">
          <LI>Appuyer sur la touche stats</LI>
          <LI>Choisir « CALC » puis « Stats 1-Var »</LI>
          <LI>
            Affecter « L1 » à « List » puis « L2 » à « Freq ». « L2 » se
            trouve en bleu au-dessus de la touche 2.
          </LI>
          <LI>Choisir « Calculs »</LI>
        </UL>
      </OL> */}
      <H1 marker="">Utilisation du tableur</H1>
      <H2 marker="">Pour créer une formule dans le tableur</H2>
      <P>
        Commencer la formule par le signe égal « = », suivi des éléments à
        calculer (opérandes), lesquels sont séparés par des opérateurs de calcul
        (+ , - , * , / ...). Les opérandes peuvent être des constantes ou des
        cellules (A1, B10…).
      </P>
      <Img src={exempleCalc} className="mx-auto w-6/10" align="center">
        La cellule C1 contient le résultat de la somme des cellules A1 et B1
      </Img>
      <H2 marker="">Pour recopier une formule</H2>
      <P>
        <em>
          Pour recopier une formule vers le bas par exemple de la cellule A2 à
          la cellule A15
        </em>{" "}
        : Sélectionner la cellule A2 contenant la formule à recopier, placer la
        souris dans le coin inférieur droit de cette cellule (sur le{" "}
        <em>carré noir</em>). Cliquer et sans relâcher le clic, faire glisser la
        souris jusqu’à la cellule A15. La formule contenue dans la cellule A2
        est ainsi recopiée jusqu’à la cellule A15.
      </P>
      <Img src={exempleCalc2} className="mx-auto w-6/10" align="center">
        On peut "recopier" une formule de manière intelligente en faisant un
        clic-glissé.
      </Img>
      <H2 marker="">Pour représenter un graphique</H2>
      <P>
        Dans la colonne A du tableur saisir les valeurs de x. Dans la colonne B
        du tableur saisir les valeurs de y. Sélectionner toutes les valeurs
        saisies puis cliquer sur l’icône « diagramme » :{" "}
        <Img src={excelDiagramIcon} className="inline-block w-8" /> Dans la
        fenêtre qui s’affiche (voir ci-dessous), choisir le type de graphique.
      </P>
      <Img src={excelDiagramExemple} className="mx-auto w-7/10" />
    </Activites>
  );
}
