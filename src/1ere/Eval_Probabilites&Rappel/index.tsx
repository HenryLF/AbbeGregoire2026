import { geometryThales, geometryThalesPyramide } from "@assets/index";
import { Img } from "@components/atoms/Img";
import { Important, Note, P, S } from "@components/atoms/Texts";
import {
  EvalExercice,
  Evaluation,
  NoteBox,
  NoteLines,
} from "@components/doctype/Evaluation";
import { SubQuestion } from "@components/section/Exercice";
import {
  DotLine,
  Flex,
  LaTeX,
  LI,
  PageBreak,
  Table,
  TEntry,
  THeader,
  UL,
} from "zefpdf-lab/ui";
import { Chart } from "zefpdf-lab/ui/Chart";
import "./index.css";

export default function () {
  return (
    <Evaluation title="Probabilité & Rappels">
      <EvalExercice title="Efficacité de Vaccin">
        <P>
          On cherche à évaluer l'efficacité de deux vaccins contre la grippe{" "}
          <em>Vaccinox</em> et <em>Grippavax</em>. Pour cela une étude a été
          réalisée sur un échantillon de 500 personnes : 300 ont reçu le vaccin{" "}
          <em>Vaccinox</em>, 100 ont reçu le vaccin <em>Grippavax</em> et les
          autres ont reçu un <S>placebo</S> (une injection sans aucun effet).
          Voici les résultats obtenus :
        </P>
        <UL>
          <LI>Au total 64 personnes ont attrapé la grippe ;</LI>
          <LI>
            Parmi les personnes qui sont tombées malades, 24 avaient reçu le
            vaccin <em>Vaccinox</em> et 20 le vaccin <em>Grippavax</em>.
          </LI>
        </UL>
        <P>
          Dans la suite on notera <LaTeX tex="M" /> : "la personne a attrapé la
          grippe", <LaTeX tex="V" /> : "la personne a reçu le vaccin{" "}
          <em>Vaccinox</em>", <LaTeX tex="G" /> : "la personne a reçu le vaccin{" "}
          <em>Grippavax</em>" et <LaTeX tex="N" /> : "la personne a reçu le
          placebo".
        </P>
        <LI>
          Décrire par une phrase l'événement <LaTeX tex="\overline{M}" />
        </LI>
        <DotLine />
        <SubQuestion mainLI="Remplir le tableau croisé">
          <Table className="table-fixed w-8/9 mx-auto">
            <THeader
              content={[
                null,
                <LaTeX tex="M" />,
                <LaTeX tex="\overline{M}" />,
                "Total",
              ]}
            />
            <TEntry
              header={<LaTeX tex="V" />}
              content={Array(3).fill(<DotLine />)}
            />
            <TEntry
              header={<LaTeX tex="G" />}
              content={Array(3).fill(<DotLine />)}
            />
            <TEntry
              header={<LaTeX tex="N" />}
              content={Array(3).fill(<DotLine />)}
            />
            <TEntry
              header={"Total"}
              content={[...Array(2).fill(<DotLine />), <LaTeX tex="500" />]}
            />
          </Table>
          <Flex>
            <LI>
              Remplir le tableau ci-dessus avec les résultats de la première
              étude.
            </LI>
            <NoteBox points={1} />
          </Flex>
          <Flex>
            <LI>Compléter le tableau ci-dessus.</LI>
            <NoteBox points={1} />
          </Flex>
        </SubQuestion>
        <LI>
          Calculer la probabilité <LaTeX tex="p(V)" /> qu'une personne tirée au
          hasard ait reçu le vaccin.
        </LI>
        <NoteLines lines={3} points={1} />

        <LI>
          Calculer la probabilité <LaTeX tex="p(M)" /> qu'une personne tirée au
          hasard ait attrapé la grippe.
        </LI>
        <NoteLines lines={3} points={1} />

        <LI>
          Calculer la probabilité <LaTeX tex="p(G)" /> qu'une personne ait reçu
          le vaccin <em>Grippavax</em>
        </LI>
        <NoteLines lines={3} points={1} />
        <PageBreak />
        <LI>
          Calculer la probabilité <LaTeX tex="p(M\cap V)" /> qu'une personne ait
          reçu le vaccin <em>Vaccinox</em> et soit tombée malade.
        </LI>
        <NoteLines lines={3} points={1} />

        <LI>
          Calculer la probabilité <LaTeX tex="p(M\cap G)" /> qu'une personne ait
          reçu le vaccin <em>Grippavax</em> et soit tombée malade.
        </LI>
        <NoteLines lines={3} points={1} />

        <Note title="Rappel :" className="float-right table">
          <LaTeX tex="p_A(B) =  {\large \frac{p(A\cap B)}{p(A)}}" />
        </Note>
        <SubQuestion>
          <LI>
            Calculer la probabilité <LaTeX tex="p_V(M)" /> soit tombée malade{" "}
            <S>sachant</S> qu'elle ait reçu le vaccin <em>Vaccinox</em> .
          </LI>

          <NoteLines lines={3} points={1} />

          <LI>
            Calculer la probabilité <LaTeX tex="p_G(M)" /> soit tombée malade{" "}
            <S>sachant</S> qu'elle ait reçu le vaccin <em>Grippavax</em> .
          </LI>

          <NoteLines lines={3} points={1} />

          <LI>
            Calculer la probabilité <LaTeX tex="p_N(M)" /> qu'une personne soit
            tombée malade <S>sachant</S> qu'elle n'a reçu aucun vaccin (groupe
            placebo).
          </LI>

          <NoteLines lines={3} points={1} />
        </SubQuestion>
        <LI>
          Un élève compare <LaTeX tex="p(M\cap V)" /> et{" "}
          <LaTeX tex="p(M\cap G)" /> et affirme que <em>Vaccinox</em> est le
          moins efficace des deux vaccins. A-t-il raison ? Justifier.
        </LI>
        <NoteLines lines={4} points={1} />
        <LI>
          Conclure : quel est le vaccin le plus efficace ? Que peut-on dire du
          vaccin <em>Grippavax</em> ?
        </LI>
        <NoteLines lines={4} points={1} />
      </EvalExercice>

      <EvalExercice title="Théorème de Thalès">
        <P>
          Maxime visite le plateau de Gizeh et veut calculer la hauteur de la
          pyramide de Khéops, comme l'aurait fait Thalès selon la légende. La
          distance entre le centre de la base <LaTeX tex="H" /> et le bord de la
          pyramide <LaTeX tex="B" /> est <LaTeX tex="HB = 115" /> m.
        </P>
        <P>
          Maxime, qui mesure <LaTeX tex="1.80" /> m, se place de sorte que
          l'extrémité de son ombre coïncide avec celle de l'ombre de la
          pyramide. Il mesure alors son ombre : <LaTeX tex="2.40" /> m, puis
          l'ombre de la pyramide qui dépasse de la base : <LaTeX tex="80" /> m.
        </P>
        <Img src={geometryThalesPyramide} className="mx-auto w-4/5" />
        <P className="text-center">
          <em>La figure n'est pas à l'échelle.</em>
        </P>

        <P>
          Les points <LaTeX tex="H" />, <LaTeX tex="B" />, <LaTeX tex="M" /> et{" "}
          <LaTeX tex="O" /> sont alignés, ainsi que <LaTeX tex="O" />,{" "}
          <LaTeX tex="T" /> et <LaTeX tex="S" />. <LaTeX tex="H" /> est le
          centre de la base et <LaTeX tex="B" /> le milieu d'un de ses côtés.
        </P>
        <LI>
          Donner la longueur <LaTeX tex="OH" />
        </LI>

        <NoteLines lines={3} points={1} />
        <Flex>
          <Note title="Rappel :" className=" ">
            <Flex align="center">
              <div className="flex-1/2">
                <P align="center">On rappelle le théorème de Thalès :</P>
                <LaTeX
                  displayMode
                  tex="\large \frac{AB}{AD} = \frac{BC}{DE} = \frac{AC}{AE}"
                />
                <P>
                  Dans ce cas on peut faire un produit en croix, c'est-à-dire :{" "}
                  <LaTeX tex="AD = \large  \frac{AB \times DE}{BC}" />
                </P>
              </div>
              <div className="flex-1/2">
                <Img src={geometryThales} className="w-7/9 mx-auto" />
              </div>
            </Flex>
          </Note>

          <LI>
            Écrire le théorème de Thalès pour notre problème c'est-à-dire la
            relation entre <LaTeX tex="OT" />, <LaTeX tex="SH" />,{" "}
            <LaTeX tex="OM" />
            et <LaTeX tex="OH" />.
            <NoteLines lines={5} points={2} />
          </LI>
        </Flex>

        <LI>
          En déduire la hauteur <LaTeX tex="SH" /> de la pyramide.
        </LI>
        <NoteLines lines={3} points={2} />
      </EvalExercice>

      <EvalExercice title="Achat en gros et fonction affine">
        <P>
          Sur un site internet, Léa veut acheter des cartouches d'encre. Deux
          vendeurs proposent le même modèle :
        </P>
        <UL>
          <LI>
            <S>Vendeur 1</S> : <LaTeX tex="10" /> € la cartouche, plus{" "}
            <LaTeX tex="50" /> € de frais de port ;
          </LI>
          <LI>
            <S>Vendeur 2</S> : <LaTeX tex="20" /> € la cartouche, plus{" "}
            <LaTeX tex="10" /> € de frais de port.
          </LI>
        </UL>
        <P>
          On note <LaTeX tex="x" /> le nombre de cartouches achetées.
        </P>
        <Chart
          width={1000}
          height={480}
          className="mx-auto w-4/5"
          config={{
            type: "scatter",
            data: { datasets: [{ data: [] }] },
            options: {
              scales: {
                x: {
                  type: "linear",
                  min: 0,
                  max: 10,
                  ticks: { stepSize: 1 },
                  grid: { color: "#999" },
                  title: {
                    display: true,
                    font: { size: 16 },
                    text: "Nombre de cartouches x",
                  },
                },
                y: {
                  min: 0,
                  max: 180,
                  ticks: { stepSize: 10 },
                  grid: { color: "#999" },
                  title: {
                    display: true,
                    font: { size: 16 },
                    text: "Prix total (€)",
                  },
                },
              },
              plugins: { legend: { display: false } },
            },
          }}
        />

        <SubQuestion mainLI="Vendeur 1">
          <LI>
            Calculer le prix payé chez le vendeur 1 pour <LaTeX tex="2" />{" "}
            cartouches, puis pour <LaTeX tex="8" /> cartouches.
          </LI>
          <NoteLines lines={2} points={1} />
          <Flex>
            <LI>
              Placer ces deux points sur le graphique et tracer la droite qui
              les relie.
            </LI>
            <NoteBox points={1} />
          </Flex>
          <LI>
            Lire graphiquement le prix de <LaTeX tex="3" /> cartouches chez le
            vendeur 1.
          </LI>
          <NoteLines points={1} />
        </SubQuestion>

        <SubQuestion mainLI="Vendeur 2">
          <LI>
            Calculer le prix payé chez le vendeur 2 pour <LaTeX tex="2" />{" "}
            cartouches, puis pour <LaTeX tex="8" /> cartouches.
          </LI>
          <NoteLines lines={2} points={1} />
          <Flex>
            <LI>
              Placer ces deux points sur le même graphique et tracer la droite
              qui les relie.
            </LI>
            <NoteBox points={1} />
          </Flex>
          <LI>
            Lire les coordonnées du point d'intersection des deux droites. Que
            représentent-elles ?
          </LI>
          <NoteLines lines={2} points={1} />
        </SubQuestion>

        <LI>
          Conclure : selon le nombre de cartouches achetées, quel vendeur Léa
          doit-elle choisir ?
        </LI>
        <NoteLines lines={2} points={1} />
      </EvalExercice>

      <EvalExercice title="Calcul algébrique">
        <SubQuestion mainLI="Puissances :" indent={0}>
          <Flex gap={"1mm"}>
            <div className={"flex-1"}>
              <LI>
                Calculer <LaTeX tex="A = 3^2 + 2^3" />
              </LI>
              <NoteLines lines={2} points={0.5} />
            </div>
            <div className={"flex-1"}>
              <LI>
                <LaTeX tex="B = 10^3 \times 10^2" /> (donner le résultat sous la
                forme <LaTeX tex="10^n" />)
              </LI>
              <NoteLines lines={2} points={0.5} />
            </div>
          </Flex>
          <Note title="Rappel :">
            L'<S>écriture scientifique</S> d'un nombre est de la forme{" "}
            <LaTeX tex="a \times 10^n" /> où <LaTeX tex="a" /> a un seul chiffre
            (non nul) avant la virgule et <LaTeX tex="n" /> est un entier. Par
            exemple : <LaTeX tex="3200 = 3.2 \times 10^3" />.
          </Note>
          <LI>
            Donner l'écriture scientifique de <LaTeX tex="C = 45000" />
          </LI>
          <NoteLines lines={2} points={0.5} />
        </SubQuestion>

        <Important className={"w-full"}>
          <UL indent={0}>
            <LI className={"not-italic!"}>
              Développer (ou distribuer), c'est multiplier le nombre devant la
              parenthèse par chaque terme à l'intérieur :{" "}
            </LI>
            <LaTeX tex="k(a + b) = k \times a + k \times b" />.
            <LI className={"not-italic!"}>
              Réduire, c'est regrouper les termes de même nature (les{" "}
              <LaTeX tex="x" /> ensemble, les nombres ensemble). Par exemple
              :{" "}
            </LI>
            <LaTeX tex="4(x + 2) + x = 4x + 8 + x = 5x + 8" />.
          </UL>
        </Important>
        <SubQuestion mainLI="Développer et réduire :">
          <Flex className={"flex-wrap"} justify="space-evenly">
            {[
              { tex: "D = 3(x + 4)", points: 1 },
              { tex: "E = 5(2x - 3)", points: 1 },
              { tex: "F = -2(3x - 1)", points: 1 },
              { tex: "G = 2(x + 1) + 3x", points: 1 },
              // { tex: "H = 3(2x + 1) - 4x", points: 1 },
              // { tex: "I = 2(x + 3) + 5(x - 1)", points: 1 },
            ].map(({ tex, points }) => (
              <div className="w-19/40">
                <LI>
                  <LaTeX tex={tex} />
                </LI>
                <NoteLines lines={4} points={points} />
              </div>
            ))}
          </Flex>
        </SubQuestion>

        <SubQuestion mainLI="Résoudre les équations suivantes :">
          <Flex gap={"1mm"}>
            <div className={"flex-1"}>
              <LI>
                <LaTeX tex="3x + 5 = 20" />
              </LI>
              <NoteLines lines={4} points={1.5} />
            </div>
            <div className={"flex-1"}>
              <LI>
                <LaTeX tex="2x - 4 = x + 3" />
              </LI>
              <NoteLines lines={4} points={1.5} />
            </div>
          </Flex>
        </SubQuestion>
      </EvalExercice>
    </Evaluation>
  );
}
