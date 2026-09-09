import { dispersion, incertitude, quartiles, significatif } from "@assets";
import {
  Details,
  Document,
  Exemple,
  Img,
  ImportantEquation,
  Problem,
} from "@components";
import {
  Block,
  BlockBox,
  Chart,
  DotLine,
  Entry,
  H1,
  H2,
  labelFunction,
  LaTeX,
  LI,
  OL,
  Table,
  toLowerAlphabetical,
  UL
} from "@weasyprint-tsx/ui";
import { Chart as ChartJs } from "chart.js/auto";
import "./index.css";

ChartJs.defaults.font.size = 22;
ChartJs.defaults.scales.category.title = {
  ...ChartJs.defaults.scales.category.title,
  font: { size: 32 },
  display: true,
};

ChartJs.defaults.scales.linear.title = {
  ...ChartJs.defaults.scales.category.title,
  font: { size: 32 },
  display: true,
};

ChartJs.defaults.scales.linear.beginAtZero = true;

ChartJs.defaults.backgroundColor = [
  "#cc5803",
  "#07a0c3",
  "#f0c808",
  "#731dd8",
  "#dd1c1a",
];

ChartJs.defaults.elements.bar.borderColor = "#000";
ChartJs.defaults.elements.bar.borderWidth = 2;
ChartJs.defaults.elements.bar.borderRadius = 20;

ChartJs.defaults.elements.arc.borderColor = "#000";
ChartJs.defaults.elements.arc.borderWidth = 2;
ChartJs.defaults.elements.arc.offset = 20;

ChartJs.defaults.elements.line.borderColor = "#000";
ChartJs.defaults.elements.line.borderWidth = 2;

ChartJs.defaults.plugins.legend.display = false;

const dataSet = [1.62, 1.67, 1.71, 1.6, 1.78, 1.67, 1.74, 1.8, 1.69, 1.76];
const bins = [
  { label: "[1,60 ; 1,65[", low: 1.6, high: 1.65 },
  { label: "[1,65 ; 1,70[", low: 1.65, high: 1.7 },
  { label: "[1,70 ; 1,75[", low: 1.7, high: 1.75 },
  { label: "[1,75 ; 1,80[", low: 1.75, high: 1.8 },
  { label: "[1,80 ; 1,85[", low: 1.8, high: 1.85 },
];

const dataSetFreq = bins.map((bin) => {
  return dataSet.filter((val) => val >= bin.low && val < bin.high).length;
});

export default function Stat1VarDocument() {
  return (
    <Document title="Statistique à une variable">
      <p>
        La <strong>statistique</strong> est la science qui <em>recueille</em>,{" "}
        <em>traite</em> et <em>analyse</em> des données pour tirer des
        conclusions générales. Cette année nous étudions les{" "}
        <strong> statistiques à une variable </strong> c'est-à-dire les séries
        de données où un seul paramètre change.
      </p>
      <Exemple>
        <LI>
          La liste des tailles des élèves d'une classe est une série
          statistique à une variable.
        </LI>
        <LI>
          La liste des tailles et du genre des élèves d'une classe est une
          série statistique à deux variables.
        </LI>
        <LI>
          La liste des poids, vitesses maximales et années de production de
          voitures est une série statistique à trois variables.
        </LI>
      </Exemple>
      <H1>Représentation des séries statistiques</H1>
      <H2>Organisation dans un tableau</H2>
      <BlockBox className="mb-2" align="top">
        <Block ratio={1}>
          <p>
            Une série statistique à une variable peut être organisée dans un{" "}
            <strong>tableau de fréquence</strong> qui pour chaque valeur prise
            par le paramètre étudié associe son <strong>effectif</strong>, le
            nombre de fois où cette valeur a été rencontrée.
          </p>
        </Block>
        <Block>
          <Table headerClass="px-[5mm]" className="mx-auto">
            <Entry
              content={[
                ...Array(3)
                  .fill(0)
                  .map((_, k) => <LaTeX>{`X_${k + 1}`}</LaTeX>),
                <span className="font-bold">Total</span>,
              ]}
            >
              Paramètre <LaTeX>X</LaTeX>
            </Entry>
            <Entry
              content={[
                ...Array(3)
                  .fill(0)
                  .map((_, k) => <LaTeX>{`n_${k + 1}`}</LaTeX>),
                <LaTeX>N = n_1 + n_2 +n_3</LaTeX>,
              ]}
            >
              Effectifs (<LaTeX>n_i</LaTeX>)
            </Entry>
          </Table>
        </Block>
      </BlockBox>
      <BlockBox>
        <Block ratio={1.3}>
          <Table headerClass="px-[5mm]">
            <Entry
              content={Array(5)
                .fill(0)
                .map((_, k) => (
                  <LaTeX>{`[${(1.6 + k * 0.05).toFixed(2)};\\: ${(1.6 + (k + 1) * 0.05).toFixed(2)}[`}</LaTeX>
                ))}
            >
              Taille des élèves (en m)
            </Entry>

            <Entry
              content={[
                <LaTeX>{"\\frac{1-0}{2} = 0.5"}</LaTeX>,
                ...Array(4).fill(""),
                <span className="font-bold">Total :</span>,
              ]}
            >
              Centre des classes (<LaTeX>x_i</LaTeX>)
            </Entry>

            <Entry content={[2, ...Array(5).fill("")]}>
              Effectifs (<LaTeX>n_i</LaTeX>)
            </Entry>
          </Table>
        </Block>
        <Block>
          <div className="text">
            Lorsque le paramètre est{" "}
            <strong>mesurable de façon continue</strong> (c'est-à-dire qu'il
            peut prendre <DotLine inline width={"6cm"} />
            ), on regroupe les données par <strong>classes</strong> : ce sont
            des intervalles notés entre crochets <LaTeX>{"[a ; b["}</LaTeX>,{" "}
            <LaTeX>a</LaTeX> étant <strong>inclus</strong> (
            <DotLine inline width="2.5cm" />) dans l’intervalle et{" "}
            <LaTeX>b</LaTeX> <strong>exclu</strong> (
            <DotLine inline width="2.5cm" />) de l’intervalle.
          </div>
        </Block>
      </BlockBox>
      <Problem>
        <div className="text">
          Voici la liste des tailles mesurées pour des élèves :
          {dataSet.map((k, i) => {
            if (i == dataSet.length - 2)
              return (
                <>
                  <LaTeX>{`${k}m`}</LaTeX> et{" "}
                </>
              );
            if (i == dataSet.length - 1)
              return (
                <>
                  <LaTeX>{`${k}m`}</LaTeX>.
                </>
              );
            return (
              <>
                <LaTeX>{`${k}m`}</LaTeX>,{" "}
              </>
            );
          })}{" "}
          Compléter le tableau ci-dessus.
        </div>
      </Problem>
      <H2>Représentation graphique</H2>
      <p>
        Une série statistique peut être représentée par différents types de
        graphique :
      </p>
      <BlockBox className="mt-2">
        {[
          {
            t: "bar",
            lgd: "Diagramme en bâton",
          }, //
          { t: "pie", lgd: "Diagramme circulaire" },
          { t: "line", lgd: "Diagramme à ligne brisée" },
        ].map(({ t, lgd }) => (
          <Block>
            <Chart
              config={{
                type: t as "bar" | "pie" | "line",
                data: {
                  labels: bins.map((b) => b.label),
                  datasets: [
                    {
                      label: "Effectifs par groupe de taille",
                      data: dataSetFreq,
                    },
                  ],
                },
                options: {
                  plugins: {
                    legend: { display: t === "pie" },
                  },
                  scales: {
                    x: {
                      display: t !== "pie",
                      title: { text: "Groupes de taille" },
                    },

                    y: {
                      display: t !== "pie",
                      title: { text: "Effectif" },
                    },
                  },
                },
              }}
            />
            <span className="text-center text-xs">
              <em>{lgd}</em>
            </span>
            <DotLine count={3} />
          </Block>
        ))}
      </BlockBox>
      <H1>Indicateurs de position</H1>
      <p>
        On peut utiliser plusieurs mesures appelées{" "}
        <strong>indicateurs</strong> pour décrire une série statistique. Ils
        peuvent être calculés à la main mais en pratique on utilise souvent
        les fonctions statistiques d'un tableur ou de la calculatrice.
      </p>
      <H2>Mode</H2>
      <p>
        Le <strong>mode</strong> est{" "}
        <em>
          la valeur de la variable statistique qui a le plus grand effectif
        </em>{" "}
        (il peut y avoir plusieurs modes).
      </p>
      <Problem>
        <div className="text">
          Dans la série des tailles d'élèves, le mode est{" "}
          <DotLine inline width={"8cm"} />.
        </div>
      </Problem>
      <H2>Classe modale</H2>
      <p>
        Dans le cas où la distribution statistique est faite à l’aide de
        classes, la <strong>classe modale</strong> est la classe qui contient
        le plus grand effectif.
      </p>
      <Problem>
        <div className="text question block">
          Dans la série des tailles d'élèves, la classe modale est{" "}
          <DotLine inline width={"8cm"} />.
        </div>
      </Problem>
      <H2>Moyenne</H2>
      <div className="text">
        La <strong>moyenne</strong> <LaTeX>{"\\overline{x}"}</LaTeX> est la
        valeur théorique qui pourrait remplacer toutes les valeurs de la série
        sans changer la somme totale. On la calcule à l'aide des formules
        suivantes :
      </div>
      <ImportantEquation tex="\overline{x} = \frac{somme\: de\: toutes\: les\: valeurs}{nombre\: total\: de\: valeurs\: N} = \frac{X_1\times n_1 + X_2\times n_2  + ...}{N}" />
      <p className="m-0">C'est-à-dire :</p>
      <UL>
        <LI>
          La somme de toutes les mesures divisée par le nombre de mesures.
        </LI>
        <LI>
          La somme des valeurs des mesures multipliée par leurs effectifs,
          divisée par le nombre total de mesures.
        </LI>
      </UL>
      <div className="text">
        Dans le cas des séries où les caractères sont rangés par classes, on
        convient par approximation que toutes les valeurs appartenant à une
        même classe sont égales à la valeur du centre de classe{" "}
        <LaTeX>x_i</LaTeX>.
      </div>
      <Problem>
        <LI>
          Calculer la taille moyenne des élèves en prenant en compte la série
          totale :
        </LI>
        <DotLine count={2} />

        <LI>
          Calculer la taille moyenne des élèves en prenant en compte la série
          répartie par classe :
        </LI>
        <DotLine count={2} />
      </Problem>
      <H2>Médiane</H2>
      <div className="text">
        La <strong>médiane</strong> <LaTeX>M_e</LaTeX> d’une série statistique
        est le nombre qui partage cette série en deux séries de même effectif.{" "}
        <em>
          La moitié des effectifs (50 %) a donc une valeur du caractère en
          dessous ou égale à la valeur médiane et l’autre moitié (50 %)
          au-dessus ou égale.
        </em>
      </div>{" "}
      <H2>Les quartiles</H2>
      <div className="text">
        Le <strong>premier quartile</strong> <LaTeX>Q_1</LaTeX>, la médiane{" "}
        <LaTeX>M_e</LaTeX> et le <strong>troisième quartile</strong>{" "}
        <LaTeX>Q_3</LaTeX> partagent les valeurs ordonnées de la série en
        quatre parties égales.
      </div>
      <UL>
        <LI>
          Le <strong>premier quartile</strong> <LaTeX>Q_1</LaTeX> est{" "}
          <em>la plus petite donnée</em> de la série pour laquelle{" "}
          <em>au moins 25 %</em> des données (soit{" "}
          <LaTeX>{"\\frac{1}{4}"}</LaTeX> ) sont inférieures ou égales à{" "}
          <LaTeX>Q_1</LaTeX>.
        </LI>

        <LI>
          Le <strong>troisième quartile</strong> <LaTeX>Q_3</LaTeX> est{" "}
          <em>la plus petite donnée</em> de la série pour laquelle{" "}
          <em>au moins 75 %</em> des données (soit{" "}
          <LaTeX>{"\\frac{3}{4}"}</LaTeX> ) sont inférieures ou égales à{" "}
          <LaTeX>Q_3</LaTeX>.
        </LI>
      </UL>
      <Img src={quartiles} />
      <Problem>
        <div className="questions">
          On donne le diagramme des effectifs cumulés pour les tailles des
          élèves (attention ce n'est pas le même que les diagrammes en I.2).
          Sur celui-ci indiquer la médiane <LaTeX>M_e</LaTeX> ainsi que les
          premier et troisième quartiles <LaTeX>Q_1</LaTeX> et{" "}
          <LaTeX>Q_3</LaTeX>.
        </div>
        <Chart
          className="w-2/3 mx-auto"
          config={{
            type: "line",
            data: {
              labels: dataSet.toSorted(),
              datasets: [
                {
                  label: "Mesures",
                  data: Array.from({ length: 10 }, (_, k) => k + 1),
                },
              ],
            },
            options: {
              scales: {
                x: {
                  type: "linear",
                  beginAtZero: false,
                  title: { text: "Taille des élèves (en m)" },
                },

                y: {
                  title: { text: "Effectif cumulé" },
                },
              },
              elements: {
                point: {
                  pointStyle: "circle",
                  backgroundColor: "#000",
                  borderColor: "#000",
                },
              },
            },
          }}
        />
        <Details align="right">
          Diagramme des effectifs cumulés en fonction de la taille des élèves.
        </Details>
      </Problem>
      
      <H1>Indicateurs de dispersion</H1>
      <p>
        La dispersion d'une série statistique mesure à quel point la série est
        étendue sur une grande plage de valeurs, ou au contraire centrée sur
        une valeur particulière.
      </p>
      <Img src={dispersion} className="w-8/10 mx-auto" />
      <H2>Étendue</H2>
      <div className="text">
        L’<strong>étendue</strong> d’une série statistique est la différence
        entre son <strong>maximum</strong> (sa plus grande valeur) et son{" "}
        <strong>minimum</strong> (sa plus petite valeur).
      </div>
      <H2>Écart-type</H2>
      <div className="text">
        L’<strong>écart-type</strong> <LaTeX>{"\\sigma"}</LaTeX> est un{" "}
        <em>indicateur de dispersion associé à la moyenne</em>. Il traduit une
        moyenne d’écarts autour de la valeur moyenne{" "}
        <LaTeX>{"\\overline{x}"}</LaTeX>.{" "}
        <em>
          Plus l’écart-type est grand, plus la dispersion des données est
          grande.
        </em>
      </div>
      <H2>Écart interquartile</H2>
      L’écart interquartile <LaTeX>Q_3 - Q_1</LaTeX> est un{" "}
      <em>indicateur de dispersion associé à la médiane</em>. C’est l’écart
      maximal entre les valeurs de la moitié centrale de la série.{" "}
      <em>
        Plus l’écart interquartile Q3 - Q1 est grand, plus la dispersion des
        données est grande
      </em>
      .<H2>Diagramme en boîte à moustaches</H2>
      <p>
        Le <strong>diagramme en boîte à moustaches</strong> représente
        certains indicateurs d’une série.
      </p>
      <p className="m-0">Il est composé :</p>
      <UL>
        <LI>
          d'un rectangle, la « boîte » qui encadre les quartiles{" "}
          <LaTeX>Q_1</LaTeX> et <LaTeX>Q_3</LaTeX>, et contient la médiane.
        </LI>
        <LI>
          de deux lignes, les « moustaches » qui donnent les valeurs extrêmes
          (minimum et maximum).
        </LI>
      </UL>
      <Problem>
        <p className="li">
          Représenter la boîte à moustaches associée aux tailles des élèves.
        </p>
        <Chart
          height={200}
          config={{
            type: "line",
            data: {
              labels: labelFunction((k) => 1.55 + k * 0.05, { sample: 7 }),
              datasets: [{ data: Array(7) }],
            },

            options: {
              scales: {
                x: {
                  type: "linear",
                  beginAtZero: false,
                  title: {
                    text: " Taille des élèves (en m)",
                    font: { size: 16 },
                  },
                },
                y: {
                  display: false,
                },
              },
            },
          }}
        />
      </Problem>
      <H1>Application à la prise de mesure</H1>
      <BlockBox>
        <Block ratio={2}>
          <p>
            Dans la vie réelle, lorsque l'on réalise une mesure, celle-ci
            n'est jamais parfaitement exacte. Il existe une{" "}
            <strong>incertitude</strong>, c'est-à-dire une plage de valeurs
            autour de la valeur réelle dans laquelle se situeront les valeurs
            mesurées.
          </p>
          <p>
            Réaliser des statistiques sur les résultats d'une même mesure
            permet d'évaluer la précision et donc la fiabilité de cette
            mesure.
          </p>
        </Block>
        <Block>
          <Img src={incertitude}></Img>
        </Block>
      </BlockBox>
      <H2>Chiffres significatifs</H2>
      <p>
        Les <strong>chiffres significatifs</strong> d'une valeur sont
        l'ensemble des chiffres qui "portent de l'information".
      </p>
      <BlockBox>
        <Block ratio={2}>
          <p>
            Dans la pratique il s'agit de{" "}
            <em>
              tous les chiffres d'un nombre sauf les zéros avant le premier
              chiffre non nul
            </em>.
          </p>
        </Block>
        <Block>
          <Img src={significatif} />
        </Block>
      </BlockBox>
      <p>
        Le{" "}
        <strong>
          {" "}
          nombre de chiffres significatifs d’une valeur indique sa
          précision{" "}
        </strong>
        : plus la valeur comporte de chiffres significatifs, plus sa précision
        est grande.
      </p>
      <Problem>
        <p className="li">
          Pour chacune des valeurs du tableau donner le nombre de chiffres
          significatifs.
        </p>
        <Table
          orientation="row"
          className={"mx-auto"}
          contentClass="min-w-20"
          headerClass="px-2"
        >
          <Entry
            content={[0.105, "0.1050", 10.105, "0.0550", 0.045, 10.022].map(
              (c) => (
                <LaTeX>{c.toString()}</LaTeX>
              ),
            )}
          >
            Nombre
          </Entry>
          <Entry content={Array(6).fill("")}>Chiffres significatifs</Entry>
        </Table>
      </Problem>
      <p>
        Lorsque l'on fait des calculs avec des valeurs issues de mesures, le
        résultat ne peut pas avoir plus de chiffres significatifs que la
        mesure en elle-même. Autrement dit,{" "}
        <em> on ne peut pas augmenter le nombre de chiffres significatifs</em>
        .
      </p>
      <Problem>
        <div className="text li">
          Je mesure la longueur d'un rectangle à <LaTeX>L = 10,20 m </LaTeX>{" "}
          et sa largeur à <LaTeX>l = 2.5 m</LaTeX>, donner la valeur de l'aire{" "}
          <LaTeX>A</LaTeX> du rectangle{" "}
          <em>
            en respectant le nombre de chiffres significatifs par le calcul
          </em>
          .
        </div>
        <DotLine count={2} />
      </Problem>
      <H2>Notion d'incertitude</H2>
      <p>
        La <strong> moyenne </strong>d’une série de mesures indépendantes{" "}
        <em>
          {" "}
          est le meilleur estimateur de la valeur de la grandeur étudiée
        </em>
        , le résultat d’une série de mesure s’écrit alors :
      </p>
      {/* The shared `ImportantEquatioWithDetails` has no lead-in line, so the
          "Avec:" line and the \large sizing this document wants are spelled
          out here rather than pushed into the shared component. */}
      <BlockBox>
        <Block>
          <ImportantEquation tex="\large X = \overline{x} \pm  U(x) " />
        </Block>
        <Block ratio={2.5}>
          <p className="m-0">Avec :</p>
          <UL>
            <LI>
              <LaTeX>{"\\overline{x}"}</LaTeX> est la moyenne de la série de
              mesures.
            </LI>

            <LI>
              <LaTeX>U(x)</LaTeX> est l'<strong>incertitude type</strong> qui
              est une mesure de dispersion des valeurs autour de la moyenne.
            </LI>
          </UL>
        </Block>
      </BlockBox>
      <div className="text">
        Autrement dit : on peut estimer avec un bon niveau de confiance que la
        vraie valeur est positionnée dans un encadrement appelé{" "}
        <strong> intervalle de confiance</strong> :{" "}
        <LaTeX>
          {"\\overline{x} -  U(x) \\leq X \\leq \\overline{x} +  U(x) "}
        </LaTeX>
      </div>
      <p>
        L’incertitude associée à une mesure effectuée avec un instrument peut
        s’évaluer à partir d’indications fournies par le constructeur.
      </p>
      <Problem>
        <LI>
          Je cherche à mesurer un boulon à l'aide d'un pied à coulisse, le
          constructeur indique une incertitude type de{" "}
          <LaTeX>U = 0.03 mm </LaTeX>, je mesure une hauteur de{" "}
          <LaTeX>h = 15.55mm</LaTeX>, donner un encadrement pour la mesure de
          la hauteur du boulon.
        </LI>
        <DotLine count={3} />
        <LI>
          Dans le manuel d'une sonde de température on lit la phrase suivante,
          <em> "l'incertitude type est égale à 2 % de la valeur mesurée"</em>.
          <OL format={(n) => `${toLowerAlphabetical(n)})`}>
            <LI>
              Si je mesure <LaTeX> 20,0 °C</LaTeX> donner un encadrement pour
              la valeur de la température.
            </LI>
            <DotLine count={2} />
            <LI>
              Même question pour <LaTeX> 150 °C</LaTeX>.
            </LI>

            <DotLine count={2} />
          </OL>
        </LI>
        <LI>
          Voici le temps par tour pour le record du monde d'une course sur
          MarioKart 8 (Baby park) par le joueur{" "}
          <span className="not-italic underline">beat</span>.
        </LI>
        <Table
          orientation="row"
          headerClass="px-2"
          contentClass="px-2"
          className="mx-auto"
        >
          <Entry content={Array.from({ length: 7 }, (_, k) => k + 1)}>
            Tour n°
          </Entry>

          <Entry
            content={[11.142, 9.485, 8.706, 8.543, 8.578, 9.274, 9.417].map(
              (k) => (
                <LaTeX>{k.toString()}</LaTeX>
              ),
            )}
          >
            Durée (s)
          </Entry>
        </Table>
        <OL format={(n) => `${toLowerAlphabetical(n)})`}>
          <LI>
            À l'aide de la calculatrice ou d'un tableur calculer le temps
            moyen pour un tour.
          </LI>
          <DotLine count={3} />
          <LI>
            À l'aide de la calculatrice ou d'un tableur calculer l'écart-type{" "}
            <LaTeX>{"\\sigma"}</LaTeX>.
          </LI>

          <DotLine count={3} />

          <LI>
            Dans ce cas, l'incertitude type peut être calculée avec la formule
            suivante{" "}
            <LaTeX>
              {"U = 1.96 \\times \\large \\frac{\\sigma}{\\sqrt{N}}"}
            </LaTeX>{" "}
            où <LaTeX>N</LaTeX> est le nombre de mesures. Donner un encadrement
            pour le temps nécessaire à un tour de circuit.
          </LI>

          <DotLine count={5} />
        </OL>
      </Problem>
    </Document>
  );
}
