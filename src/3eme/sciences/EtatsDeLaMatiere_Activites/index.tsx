import {
  chemistryButter,
  chemistryOil,
  chemistryPropane,
  chemistryStateChangeCurves,
  chemistryStateChangeMolecules,
} from "@assets/index";
import { Img } from "@components/atoms/Img";
import { Important, P, S } from "@components/atoms/Texts";
import { Activites } from "@components/doctype/Activites";
import { Doc } from "@components/section/Doc";
import { Exercice, SubQuestion } from "@components/section/Exercice";
import { DotLine } from "zefpdf-lab/ui";
import { Chart } from "zefpdf-lab/ui/Chart";
import { LaTeX } from "zefpdf-lab/ui/LaTeX";
import { Flex } from "zefpdf-lab/ui/Layout";
import { LI, UL } from "zefpdf-lab/ui/List";
import { Table, TEntry, THeader } from "zefpdf-lab/ui/Table";
import "../sciences.css";

// Température (°C) d'un solide sorti du congélateur, en fonction du temps (min)
const heatingCurve = [
  { x: 0, y: -15 },
  { x: 1, y: -8 },
  { x: 2, y: -4.5 },
  { x: 3, y: -3 },
  { x: 4, y: -3 },
  { x: 5, y: -3 },
  { x: 6, y: -3 },
  { x: 7, y: -2.5 },
  { x: 8, y: -1 },
  { x: 9, y: 1.5 },
  { x: 10, y: 5 },
];

const HeatingChart = () => (
  <Chart
    className="w-full h-auto"
    width={700}
    height={500}
    config={{
      type: "line",
      data: {
        datasets: [
          {
            data: heatingCurve,
            borderColor: "#1f6f78",
            borderWidth: 4,
            cubicInterpolationMode: "monotone",
            pointStyle: false,
          },
        ],
      },
      options: {
        plugins: { legend: { display: false } },
        scales: {
          x: {
            type: "linear",
            min: 0,
            max: 10,
            ticks: { stepSize: 1, font: { size: 22 } },
            title: {
              display: true,
              text: "temps (min)",
              font: { size: 24, weight: "bold" },
            },
          },
          y: {
            min: -15,
            max: 10,
            ticks: { stepSize: 5, font: { size: 22 } },
            title: {
              display: true,
              text: "température (°C)",
              font: { size: 24, weight: "bold" },
            },
          },
        },
      },
    }}
  />
);

const SubstancesTable = () => (
  <Table className="w-2/3 mx-auto text-center" headerBg="#e0e0e0" cellBg="#fff">
    <THeader
      content={[
        "Substance",
        "Température de fusion (en °C)",
        "Température de vaporisation (en °C)",
      ]}
    />
    <TEntry header="eau pure" content={["0", "100"]} />
    <TEntry header="cyclohexane" content={["6", "81"]} />
    <TEntry header="huile d'olive" content={["-3", "300"]} />
    <TEntry header="acide stéarique" content={["69", "383"]} />
  </Table>
);

export default function EtatsDeLaMatiereActivitesDocument() {
  return (
    <Activites title="Température et État de la Matière" lang="fr">
      <Exercice title="Température la plus froide sur Terre">
        <P>
          Le 21 juillet 1983, dans la station russe Vostok (Antarctique), des
          scientifiques ont relevé <LaTeX tex="-89.2\ °C" />. C'est la
          température la plus basse relevée par mesure directe sur Terre.
        </P>
        <LI>
          Un journaliste affirmait qu'avec cette mesure on était proche du zéro
          absolu. A-t-il raison ou tort ?
        </LI>
        <LI>Quelle est la valeur de cette température en kelvin ?</LI>
        <LI>
          Cependant un nouveau record de basse température a été mesuré par
          satellite en juin 2018 : <LaTeX tex="175.15\,K" />. Convertir cette
          valeur en Celsius.
        </LI>
      </Exercice>
      <Exercice title="Échelle Fahrenheit" className="break-inside-avoid">
        <Doc className="w-full">
          <P>
            En 1724, l'Allemand Gabriel Fahrenheit développe un thermomètre à
            mercure, le premier à mesurer de manière efficace la température.
            Dans la foulée, il met au point sa propre échelle de températures,
            la plus ancienne encore utilisée. Le physicien définit le point
            froid et le point chaud en fonction de ce qu'il a sous la main :
          </P>
          <UL>
            <LI>
              son zéro sera la température la plus basse mesurée à Dantzig, sa
              ville natale, lors de l'hiver 1708-1709, soit{" "}
              <LaTeX tex="-18\ °C" /> ;
            </LI>
            <LI>
              son point haut sera au départ la température du sang d'un cheval,
              soit <LaTeX tex="38\ °C" />.
            </LI>
          </UL>
        </Doc>
        <P>
          La conversion des degrés Celsius en degrés Fahrenheit est régie par
          l'équation :
        </P>
        <Flex gap="1cm" align="center" justify="center">
          <div className="flex-1">
            <Important>
              <LaTeX displayMode tex="T_f = \theta \times \frac{9}{5} + 32" />
            </Important>
          </div>
          <div className="flex-2">
            Avec :
            <UL>
              <LI>
                <LaTeX tex="T_f" /> la température en degrés Fahrenheit{" "}
                <LaTeX tex="°F" /> ;
              </LI>
              <LI>
                <LaTeX tex="\theta" /> la température en degrés Celsius{" "}
                <LaTeX tex="°C" />.
              </LI>
            </UL>
          </div>
        </Flex>
        <SubQuestion mainLI="Convertir en degrés Fahrenheit les températures suivantes :">
          <Flex gap="5mm">
            {[
              ["-218\\ °C", "azote liquide"],
              ["100\\ °C", "l'eau bout"],
              ["1538\\ °C", "le fer fond"],
            ].map(([tex, label]) => (
              <div className="flex-1">
                <LI>
                  <LaTeX tex={tex} /> : {label}
                </LI>
              </div>
            ))}
          </Flex>
        </SubQuestion>
        <LI>
          Donner l'équation permettant de convertir des degrés Fahrenheit en
          degrés Celsius.
        </LI>
        <LI>
          Joe mesure sa température corporelle à <LaTeX tex="102.5\ °F" />,
          a-t-il de la fièvre ?
        </LI>
      </Exercice>
      <Exercice title="État de la matière">
        <LI marker={" "}>
          Pour chacun des objets suivants, dire si c'est un solide, un liquide ou
          un gaz.
        </LI>
        <Flex justify="space-evenly">
          {[chemistryButter, chemistryOil, chemistryPropane].map((s) => (
            <div className={"w-7/24"}>
              <Img src={s} height="3cm" />
              <DotLine count={2} />
            </div>
          ))}
        </Flex>
      </Exercice>

      <Exercice title="Les changements d'état au quotidien">
        <P className="italic">Cocher la bonne réponse.</P>
        <LI>
          Un matin d'hiver, une fine couche de givre recouvre le pare-brise
          d'une voiture restée dehors : la vapeur d'eau de l'air y est passée
          directement à l'état solide. Comment s'appelle ce changement d'état ?
        </LI>
        <LI>
          Au fond d'un congélateur, des glaçons oubliés pendant plusieurs mois
          ont rapetissé, alors qu'ils n'ont jamais fondu : une partie de la
          glace est passée directement à l'état gazeux. Comment s'appelle ce
          changement d'état ?
        </LI>
        <LI>
          Au petit-déjeuner, on met un morceau de sucre dans un thé chaud, puis
          une noix de beurre dans une poêle chaude. Lequel des deux subit une{" "}
          <S>fusion</S> ?
        </LI>
        <LI>
          En entrant dans une maison chauffée un jour de grand froid, on voit
          les verres de ses lunettes se couvrir de buée. Comment s'appelle ce
          changement d'état ?
        </LI>
      </Exercice>

      <Exercice title="Savoir identifier un changement d'état">
        <P>
          Voici la représentation de molécules lors d'un changement d'état. De
          quel changement d'état s'agit-il ?
        </P>
        <P className="italic">
          Donner <S>son nom</S> et <S>justifier</S> en décrivant{" "}
          <S>avec précision</S> le schéma.
        </P>
        <Img src={chemistryStateChangeMolecules} className="w-1/2 mx-auto" />
      </Exercice>

      <Exercice title="Changement d'état, corps pur et mélange">
        <Img src={chemistryStateChangeCurves} className="w-full my-2" />
        <LI>
          Parmi les courbes ci-dessus, indiquer <u>en justifiant</u> celle(s)
          pouvant représenter l'évolution de la température d'un{" "}
          <S>corps pur</S> lors d'une <S>solidification</S>.
        </LI>
        <LI>
          Parmi les courbes ci-dessus, indiquer <u>en justifiant</u> celle(s)
          pouvant représenter l'évolution de la température d'un <S>mélange</S>{" "}
          lors d'un changement d'état.
        </LI>
      </Exercice>

      <Exercice title="Savoir lire un graphique" className="break-inside-avoid">
        <Flex gap="5mm" align="center">
          <div className="flex-1">
            <P>
              Dans un laboratoire, on sort du congélateur un solide inconnu.
              Pendant qu'il se réchauffe, il fond et l'on mesure sa température.
              Ses variations de température au cours du temps sont représentées
              sur le graphique ci-contre.
            </P>

            <LI>Quel changement d'état s'est-il produit ?</LI>
            <LI>
              Au bout de combien de temps la première goutte de liquide
              apparaît-elle ?
            </LI>
            <LI>
              Au bout de combien de temps le dernier cristal de solide
              disparaît-il ?
            </LI>
            <LI>En déduire la durée du changement d'état.</LI>
          </div>
          <div className="flex-1">
            <HeatingChart />
          </div>
        </Flex>
        <LI>
          Le solide est-il un corps pur ou un mélange ? <S>Justifier</S>.
        </LI>
        <LI>
          Parmi les substances citées dans le tableau ci-dessous, laquelle
          correspond au solide inconnu ?
        </LI>
        <SubstancesTable />
      </Exercice>
    </Activites>
  );
}
