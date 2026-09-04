import {
  boite1,
  boite2,
  exemple_calc,
  exemple_calc2,
  pente_huez,
  profil_montee_huez,
  pyramide_salaires,
  route_littoral,
} from "@assets";
import {
  AutoTable,
  Call,
  Circle,
  Details,
  Doc,
  Exercice,
  Img,
  Stat1VarOptions as Options,
  SubQuestions,
  TP,
} from "@components";
import {
  Block,
  BlockBox,
  Chart,
  DotLine,
  Entry,
  H1,
  H2,
  LI,
  LaTeX,
  OL,
  Page,
  PageBreak,
  Stack,
  Table,
  UL,
  toLowerAlphabetical,
} from "@weasyprint-tsx/ui";
import { Chart as ChartJS } from "chart.js/auto";
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

// Chart.js defaults for this document (inlined from the original project's
// src/graph.config.ts side-effect module — small enough to keep as a single
// top-of-file block rather than a separate file).
ChartJS.defaults.font.size = 22;
ChartJS.defaults.scales.category.title = {
  ...ChartJS.defaults.scales.category.title,
  font: { size: 32 },
  display: true,
};

ChartJS.defaults.scales.linear.title = {
  ...ChartJS.defaults.scales.category.title,
  font: { size: 32 },
  display: true,
};

ChartJS.defaults.scales.linear.beginAtZero = true;

ChartJS.defaults.backgroundColor = [
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

ChartJS.defaults.elements.bar.borderColor = "#000";
ChartJS.defaults.elements.bar.borderWidth = 2;
ChartJS.defaults.elements.bar.borderRadius = 20;

ChartJS.defaults.elements.arc.borderColor = "#000";
ChartJS.defaults.elements.arc.borderWidth = 2;
ChartJS.defaults.elements.arc.offset = 20;

ChartJS.defaults.elements.line.borderColor = "#000";
ChartJS.defaults.elements.line.borderWidth = 2;

ChartJS.defaults.plugins.legend.display = false;

export default function Document() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>My Document</title>
        <link rel="stylesheet" href="index.css" />
      </head>
      <body>
        <H1>Représentation des séries statistiques</H1>
        <Exercice title="Quelles représentations d’une série statistique ?">
          <BlockBox gap="2.5cm">
            <Block>
              <Stack gap="2mm">
                {[serie1, serie2, serie3, serie4].map((s) => (
                  <div>
                    <Table
                      className={
                        "text-xs inline-block w-[6cm] mx-5 align-middle"
                      }
                    >
                      <Entry content={s.labels}>{s.label_txt}</Entry>
                      <Entry content={s.data}>{s.data_txt}</Entry>
                    </Table>
                    <span>&bull;</span>
                  </div>
                ))}
              </Stack>
            </Block>
            <Block>
              <Stack gap="1mm">
                {[serie3, serie4, serie1, serie2].map((s) => (
                  <div>
                    <span className="align-middle">&bull;</span>
                    <Chart
                      className="w-[6.5cm] inline-block mx-5"
                      config={{
                        type: s.type,
                        data: {
                          labels: s.labels,
                          datasets: [
                            {
                              data: s.data,
                            },
                          ],
                        },
                        options: {
                          plugins: { legend: { display: s.type == "pie" } },
                        },
                      }}
                    />
                    <DotLine lineHeight="1.5em" />
                  </div>
                ))}
              </Stack>
            </Block>
          </BlockBox>

          <LI>
            Associer les tableaux statistiques suivants et leur(s)
            représentation(s) graphique(s) et attribuer leur type à chacun.
          </LI>
          <SubQuestions count={2}>
            <LI>
              Quelle est la signification de la notation mathématique{" "}
              <LaTeX>[5 ; 10[</LaTeX> ?
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
          </SubQuestions>
        </Exercice>

        <Exercice title="Répartition des salariés des travaux publics">
          <p>
            Le graphique ci-contre donne la répartition des salariés par
            catégorie professionnelle dans le secteur des travaux publics (ETAM
            = Employés, Technicien et Agent de Maîtrise).
          </p>
          <BlockBox>
            <Block ratio={1.8}>
              <LI format={() => "•"}>
                Cocher les interprétations correctes de ce graphique
              </LI>
              <Options columns={1}>
                <>Le nombre d’ouvriers a baissé</>
                <>Les ouvriers représentent plus de la moitié des effectifs</>
                <>
                  Les entreprises recherchent une montée en qualification de
                  leur personnel
                </>
                <>Le secteur des travaux publics a plus recruté en 2017</>
              </Options>
            </Block>
            <Chart
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
          </BlockBox>

          <DotLine count={5} />
        </Exercice>

        <Exercice title="Performances de deux buteurs">
          <p>
            Durant la dernière coupe du monde deux joueurs se sont démarqués par
            leur talent de buteur, voici le nombre de buts inscrits par chacun.
          </p>
          <Table
            orientation="row"
            className="w-9/10 mx-auto"
            headerClass="min-w-1"
            contentClass="min-w-5"
          >
            <Entry
              content={Array.from({ length: 10 }, (_, k) => k + 1)}
              cellBg="var(--wsx--table--header-color)"
            >
              Match n°
            </Entry>

            <Entry content={[0, 3, 2, 0, 0, 4, 1, 5, 3, 0]}>Mionel Lessi</Entry>

            <Entry content={[1, 2, 3, 3, 1, 3, 2, 2, 0, 1]}>
              Lilian M’Kappe
            </Entry>
          </Table>

          <LI>
            Calculer le nombre moyen de buts par rencontre pour ces deux
            joueurs.
          </LI>
          <DotLine count={4} />
          <LI>
            Compléter le tableau et tracer le diagramme en bâtons correspondant.
          </LI>
          <BlockBox>
            <Block>
              <Table
                className="w-full"
                contentClass="min-w-5"
                orientation="row"
              >
                <Entry
                  content={Array.from({ length: 6 }, (_, k) => k)}
                  cellBg="var(--wsx--table--header-color)"
                >
                  Nombre de buts
                </Entry>
                <Entry
                  content={Array.from({ length: 6 }, (_) => (
                    <DotLine />
                  ))}
                >
                  Mionel Lessi
                </Entry>
                <Entry
                  content={Array.from({ length: 6 }, (_) => (
                    <DotLine />
                  ))}
                >
                  Lilian M’Kappe
                </Entry>
              </Table>
            </Block>
            <Block ratio={1.2}>
              <Chart
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
            </Block>
          </BlockBox>
          <LI>
            Conclure quant aux performances de ces deux joueurs, peut-on
            distinguer un "meilleur buteur" ? En quoi ces deux joueurs
            diffèrent-ils.
          </LI>
          <DotLine count={5} />
        </Exercice>
        <H1>Indicateurs de position</H1>

        <TP title="La montée de l’Alpe d’Huez ">
          <p>
            Haut lieu du Tour de France cycliste, l’Alpe d’Huez et ses 21
            virages constituent l’étape incontournable du passage de la Grande
            Boucle. En moyenne, près de 300 cyclistes gravissent chaque jour
            cette montée mythique. Plus de 6 000 cyclotouristes participent
            chaque année à l’épreuve de la Marmotte1 (début juillet) et 2 000
            d’entre eux reçoivent un diplôme officialisant leur temps de montée.
            L’Alpe d’Huez, au cœur de l’Oisans, est vraiment le temple du vélo
            et c’est surtout la course à réaliser au moins une fois dans sa vie
            !
          </p>
          <BlockBox>
            <Block ratio={0.9}>
              <Doc>
                <Img src={profil_montee_huez}>
                  Doc<Circle>1</Circle>: Profil de la montée de l’Alpe d’Huez
                </Img>
              </Doc>
            </Block>
            <Stack>
              <Doc>
                <p>
                  Le <strong>dénivelé</strong> est la différence d’altitude
                  entre deux points. Il représente une hauteur.
                </p>
                <Details align="left">
                  Doc<Circle>2</Circle>: Notion de dénivelé
                </Details>
              </Doc>
              <Doc className="max-w-full">
                <LaTeX>
                  {
                    "Pente {\\small(en \\%)} = {\\large \\frac{dénivelé}{distance \\, parcourue}} \\times 100"
                  }
                </LaTeX>
                <p style={{ textIndent: 0 }}>
                  (où les distances sont exprimées dans la même unité)
                </p>
                <Details align="left">
                  Doc<Circle>3</Circle>: Notion de pente exprimée en pourcentage
                </Details>
              </Doc>
              <Doc>
                <Img src={pente_huez}>
                  Doc<Circle>4</Circle>: Profil de la montée de l’Alpe d’Huez
                </Img>
              </Doc>
            </Stack>
          </BlockBox>
          <LI>
            Avant de recevoir le précieux diplôme officialisant le temps de leur
            montée, les cyclotouristes ont à leur disposition de nombreux
            renseignements plus précis que les précédents pour préparer leur
            ascension. Compléter les informations manquantes en t'appuyant sur
            les documents <Circle>1</Circle>, <Circle>2</Circle> et{" "}
            <Circle>3</Circle>.
          </LI>
          <UL marker="•" className="text-xs columns-2 bordered-box">
            <LI>nombre de virages : 21 ;</LI>
            <LI>altitude de départ (Bourg d’Oisans) : 717 m ;</LI>
            <LI>
              altitude d’arrivée (Alpe d’Huez) :
              <DotLine inline width="5cm" lineHeight="1em" /> m ;
            </LI>
            <LI>
              dénivelé :
              <DotLine inline width="5cm" lineHeight="1em" /> ;
            </LI>
            <LI>distance à parcourir : 14 454 m ;</LI>
            <LI>
              pente moyenne :
              <DotLine inline width="5cm" lineHeight="1em" /> ;
            </LI>
            <LI>pente maximale : 14 % ;</LI>
            <LI>
              record de la montée : 37 min 35 s (par Marco Pantani, en 1997) à
              une vitesse moyenne de 23 km/h.
            </LI>
          </UL>
          <DotLine count={4} />
          <Call>Faire vérifier la pente moyenne en %</Call>
          <LI>
            Au long de la montée, 21 panneaux rythment l’effort du cycliste dans
            un compte à rebours de plus de 14 km sur un dénivelé très important
            ! Expliquer les différences de couleur sur le document{" "}
            <Circle>4</Circle> sur les tronçons de la montée en complétant la
            phrase suivante :
          </LI>
          <div className="text-center w-9/10 mx-auto bordered-box">
            «La couleur rouge correspond à des tronçons où les pentes sont{" "}
            <DotLine inline width={"5cm"} lineHeight="1em" />»
          </div>

          <LI>
            On dispose du fichier « ALPE HUEZ.ods » où ont été saisis les
            distances et altitudes des différents tronçons du versant Sud.
            <OL format={toLowerAlphabetical} separator=")">
              <LI>
                Quelle formule faut-il saisir dans la cellule C3 pour calculer
                la distance du 1er tronçon ?
              </LI>
              <Options>
                {`"= B1 + C1"`}
                {`"= B1 - C1"`}
                {`"= C1 - B1"`}
              </Options>
              <LI>
                Quelle formule faut-il saisir dans la cellule C4 pour calculer
                le dénivelé du 1er tronçon ?
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
                Quelle formule faut-il saisir dans la cellule C5 pour calculer
                la pente du 1er tronçon ?
              </LI>
              <Options>
                {`"= C4*100/C2"`}
                {`"= C2*100/C4"`}
                {`"= C4*100/C3"`}
                {`"= C3*100/C4"`}
              </Options>
              <LI>
                Effectuer les calculs des différentes pentes moyennes de chacun
                des tronçons.
              </LI>
              <Call>Faire vérifier les pentes moyennes</Call>
              <LI>
                Sur le document <Circle>4</Circle>, à quoi correspondent les
                valeurs indiquées au pied de chaque barre ?
              </LI>
              <DotLine count={2} />
              <LI>
                La pente moyenne du versant Sud est de 7,79 %. Peut-on retrouver
                dans le cas présent la pente moyenne de la montée à partir de la
                pente moyenne de chaque tronçon ?
              </LI>

              <Options>
                {"OUI"}
                {"NON"}
              </Options>
              <DotLine count={4} />
            </OL>
          </LI>
        </TP>

        <Exercice title="Pyramide des salaires en France">
          <BlockBox>
            <Block ratio={1.5}>
              <p>
                Le graphique ci-dessus donne la distribution des salaires NETS
                en France métropolitaine pour l’année 2022.
              </p>
              <LI>
                Quel pourcentage de salariés gagnent moins de 2 000 € NETS
                mensuels ?
              </LI>
              <DotLine count={1} />
              <LI>
                Quel pourcentage de salariés gagnent plus de 4 000 € NETS
                mensuels ?
              </LI>
              <DotLine count={1} />

              <LI>
                Le salaire médian est de 2 091 € NETS mensuels. Quelle est la
                signification de ce montant ?
              </LI>
              <Options columns={1}>
                <>le SMIC (Salaire MInimum de Croissance) est de 2 091 €</>
                <>la moitié des Français gagnent plus de 2 091 €</>
                <>un quart des salariés gagnent plus de 2 091 €</>
                la moitié des salariés gagnent moins de 2 091 €
                <>la retraite minimale est de 2 091 €</>
              </Options>
              <LI>
                En 2022, un salarié du secteur privé percevait en moyenne 2 630
                € nets par mois. Comment expliquer une moyenne significativement
                supérieure au salaire médian de 2 091 €.
              </LI>
            </Block>
            <Img src={pyramide_salaires} className={""}></Img>
          </BlockBox>
          <DotLine count={4} />
        </Exercice>

        <H1>Indicateur de dispersion</H1>
        <TP title="Nouvelle route du littoral">
          <p>
            Sur l’île de la Réunion, la nouvelle route du littoral est une voie
            en pleine mer pour relier les villes de l’île en 2020.{" "}
            <em>
              L’architecture de ce projet souhaite, pour des raisons
              esthétiques, que 75 % des piles aient une hauteur inférieure à 40
              m et que l’étendue associée à ces hauteurs ne dépasse pas 6 m
            </em>
            . On donne ci-dessous les hauteurs, en mètre, des piles constituant
            une portion de cette route.
          </p>
          <BlockBox>
            <Block>
              <Doc>
                <AutoTable itemPerRow={12}>{h_pile_route_littoral}</AutoTable>
                <Details align="left">
                  Document <Circle>1</Circle>: Hauteur des piles de la route du
                  littoral (en m)
                </Details>
              </Doc>
            </Block>
            <Block ratio={0.5}>
              <Img src={route_littoral} align="right">
                Nouvelle Route du Littoral
              </Img>
            </Block>
          </BlockBox>
          <PageBreak />
          <LI>
            À partir du tableau, donner le nombre de piles sur cette portion de
            route
          </LI>
          <DotLine count={2} />

          <LI>
            Utiliser les fonctionnalités statistiques de la calculatrice pour
            déterminer les indicateurs (arrondir à 0,01 près).
          </LI>
          <p className="text-xs italic text-right">
            On saisira toutes les données des six colonnes suivantes dans la
            première colonne de la calculatrice et on affectera l’effectif « 1 »
            à toutes les valeurs dans la deuxième colonne de la calculatrice.
          </p>
          <OL format={toLowerAlphabetical} separator=".)" indent={"1cm"}>
            <LI>
              la moyenne : <LaTeX>{"\\overline{x} ="}</LaTeX>
              <DotLine inline width={"3.8cm"} lineHeight="1em" />;
            </LI>
            <LI>
              la médiane : <LaTeX>Me =</LaTeX>
              <DotLine inline width={"3.8cm"} lineHeight="1em" />;
            </LI>
            <LI>
              le 1er quartile : <LaTeX>Q_1 =</LaTeX>
              <DotLine inline width={"3.8cm"} lineHeight="1em" />;
            </LI>
            <LI>
              le 3e quartile : <LaTeX>Q_3 =</LaTeX>
              <DotLine inline width={"3.8cm"} lineHeight="1em" />;
            </LI>
          </OL>
          <LI>
            Choisir la boîte à moustache qui représente correctement cette série
            statistique :
          </LI>
          <Options>
            <Img src={boite1} className="h-30" />
            <Img src={boite2} className="h-30" />
          </Options>

          <LI>
            L’étude de cette portion de route répond-elle aux contraintes
            architecturales ? On précisera la réponse.
          </LI>
          <DotLine count={4} />
        </TP>
        <Exercice title="Canalisation en plomb">
          <p>
            La consommation d’eau chargée en plomb venant d’anciennes
            canalisations peut provoquer des troubles du système cérébral. On
            étudie ici la concentration en plomb dans l’eau du robinet de
            logements de la région parisienne.
          </p>
          <BlockBox>
            <Table headerClass="max-w-1/3 px-2" className="text-xs">
              <Entry content={c_plomb_labels}>
                Concentration <br />
                (en μg/L)
              </Entry>
              <Entry content={c_plomb_values}>Nombre de logements</Entry>
              <Entry
                content={c_plomb_values.map((_) => (
                  <DotLine />
                ))}
              >
                Centre de classes
              </Entry>
            </Table>
            <Block ratio={0.8}>
              <LI>Déterminer :</LI>
              <OL format={toLowerAlphabetical} separator=".)" indent={"1cm"}>
                <LI>Le nombre total de logements étudiés.</LI>
                <DotLine />
                <LI>
                  La concentration moyenne en plomb (arrondir à 0,1 près).
                </LI>
              </OL>
              <DotLine count={3} />
            </Block>
          </BlockBox>
          <LI>
            Sachant que la concentration moyenne en France est de 10 μg/L,
            indiquer si les canalisations des logements testés sont plutôt
            rénovées ou encore vétustes.
          </LI>
          <DotLine count={2}></DotLine>
        </Exercice>

        <Exercice title="Contrôle d’isolation acoustique d’une nouvelle construction">
          <BlockBox>
            <Block ratio={1.2}>
              <p>
                Une fois la construction d’un immeuble terminée, on souhaite
                vérifier la qualité de son isolement acoustique par rapport aux
                bruits extérieurs (l’immeuble est situé près d’une route à forte
                circulation). Pour cela, on effectue, à différentes heures, dans
                chacune des 74 chambres et séjours, des mesures du niveau
                d’intensité acoustique à l’aide d’un sonomètre. Les résultats
                présentés dans le tableau ci-contre correspondent, pour chacune
                des pièces, aux niveaux d'intensité acoustique maximum
                enregistré
              </p>
            </Block>
            <Table headerClass="max-w-1/3 px-2" className="text-xs">
              <Entry content={db_labels}>
                Niveau d’intensité <br /> acoustique (en dB)
              </Entry>
              <Entry
                content={db_labels.map((_) => (
                  <DotLine lineHeight="1.2em" />
                ))}
              >
                Centre de classes
              </Entry>
              <Entry content={db_values}>Nombre de pièces</Entry>
            </Table>
          </BlockBox>
          <LI>
            Quel est le pourcentage de pièces ayant un niveau d’intensité
            acoustique strictement inférieur à 30 dB ?
          </LI>
          <DotLine count={3} />
          <LI>
            Calculer la moyenne <LaTeX>{"\\overline{x}"}</LaTeX> et l’écart type{" "}
            <LaTeX>{"\\sigma"}</LaTeX> de la série statistique obtenue en
            considérant que chaque mesure est égale à la valeur centrale de la
            classe dans laquelle elle est répertoriée (les résultats seront
            arrondis au dB).
          </LI>
          <LI>
            L’isolement acoustique est jugé bon si les conditions suivantes sont
            simultanément remplies :
            <UL marker="•" className="columns-2">
              <LI>
                le niveau acoustique moyen <LaTeX>{"\\overline{x}"}</LaTeX> est
                inférieur à 30 dB ;
              </LI>
              <LI>
                l’écart type <LaTeX>{"\\sigma"}</LaTeX> est inférieur à 9 dB.
              </LI>
            </UL>
            L’isolement acoustique de l’immeuble peut-il être jugé bon ?
          </LI>
          <Options>
            {"OUI"}
            {"NON"}
          </Options>
        </Exercice>

        <Page>
          <H1 marker="">Utilisation de la calculatrice graphique</H1>
          <H2 marker="">CASIO</H2>
          <OL>
            <LI className="font-bold">
              Pour saisir les données statistiques :
            </LI>
            <UL marker="•" indent="2em">
              <LI>
                Choisir le menu « STAT », et saisir les données dans les deux
                colonnes List1 et List2.
              </LI>
            </UL>
            <LI className="font-bold">Pour afficher les indicateurs :</LI>

            <UL marker="•" indent="2em">
              <LI>Choisir le menu contextuel « CALC »</LI>
              <LI>
                Vérifier la configuration en choisissant « SET » : List1 doit
                être choisie pour « 1Var XList » et List2 pour « 1Var Freq ».
              </LI>
              <LI>Choisir ensuite « 1VAR »</LI>
            </UL>
          </OL>
          <H2 marker="">Texas Instrument</H2>
          <OL>
            <LI className="font-bold">
              Pour saisir les données statistiques :{" "}
            </LI>
            <UL marker="•" indent="2em">
              <LI>
                Appuyer sur stats, puis « EDIT » puis « 1 » et saisir les
                données dans les colonnes L1 et L2.
              </LI>
            </UL>
            <LI className="font-bold">Pour afficher les indicateurs :</LI>
            <UL marker="•" indent="2em">
              <LI>Appuyer sur la touche stats</LI>
              <LI>Choisir « CALC » puis « Stats 1-Var »</LI>
              <LI>
                Affecter « L1 » à « List » puis « L2 » à « Freq ». « L2 » se
                trouve en bleu au-dessus de la touche 2.
              </LI>
              <LI>Choisir « Calculs »</LI>
            </UL>
          </OL>

          <H1 marker="">Utilisation du tableur LibreOffice Calc</H1>
          <H2 marker="">Pour créer une formule dans le tableur</H2>
          <p>
            Commencer la formule par le signe égal « = », suivi des éléments à
            calculer (opérandes), lesquels sont séparés par des opérateurs de
            calcul (+ , - , * , / ...). Les opérandes peuvent être des
            constantes ou des cellules (A1, B10…).
          </p>
          <Img src={exemple_calc} className={"mx-auto"} align="center">
            La cellule C1 contient le résultat de la somme des cellule A1 et B1
          </Img>
          <H2 marker="">Pour recopier une formule</H2>
          <p>
            <em>
              Pour recopier une formule vers le bas par exemple de la cellule A2
              à la cellule A15{" "}
            </em>{" "}
            : Sélectionner la cellule A2 contenant la formule à recopier, placer
            la souris dans le coin inférieur droit de cette cellule (sur le{" "}
            <em>carré noir</em>). Cliquer et sans relâcher le clic, faire
            glisser la souris jusqu’à la cellule A15. La formule contenue dans
            la cellule A2 est ainsi recopiée jusqu’à la cellule A15.
          </p>

          <Img src={exemple_calc2} className={"mx-auto"} align="center">
            On peut "recopier" une formule de manière intelligente en faisant un
            clic-glissé.
          </Img>
        </Page>
      </body>
    </html>
  );
}
