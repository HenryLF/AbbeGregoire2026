import { incertitude, significatif } from "@/assets";
import { Img, ImportantEquation, Problem } from "@/components";
import {
    Block,
    BlockBox,
    DotLine,
    Entry,
    H1,
    H2,
    LaTeX,
    LI,
    OL,
    Table,
    toLowerAlphabetical,
    UL,
} from "@weasyprint-tsx/ui";

export function ApplicationMesure() {
  return (
    <>
      <H1>Application à la prise de mesure</H1>
      <BlockBox>
        <Block ratio={2}>
          <p>
            Dans la vie réelle, lorsque l'on réalise une mesure, celle-ci n'est
            jamais parfaitement exacte. Il existe une{" "}
            <strong>incertitude</strong>, c'est-à-dire une plage de valeurs
            autour de la valeur réelle dans laquelle se situeront les valeurs
            mesurées.
          </p>
          <p>
            Réaliser des statistiques sur les résultats d'une même mesure permet
            d'évaluer la précision et donc la fiabilité de cette mesure.
          </p>
        </Block>
        <Block>
          <Img src={incertitude}></Img>
        </Block>
      </BlockBox>
      <H2>Chiffres significatifs</H2>
      <p>
        Les <strong>chiffres significatifs</strong> d'une valeur sont l'ensemble
        des chiffres qui "portent de l'information".
      </p>
      <BlockBox>
        <Block ratio={2}>
          <p>
            Dans la pratique il s'agit de{" "}
            <em>
              tous les chiffres d'un nombre sauf les zéros avant le premier
              chiffre non nul
            </em>
            .
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
        résultat ne peut pas avoir plus de chiffres significatifs que la mesure
        en elle-même. Autrement dit,{" "}
        <em> on ne peut pas augmenter le nombre de chiffres significatifs</em>.
      </p>
      <Problem>
        <div className="text li">
          Je mesure la longueur d'un rectangle à <LaTeX>L = 10,20 m </LaTeX> et
          sa largeur à <LaTeX>l = 2.5 m</LaTeX>, donner la valeur de l'aire{" "}
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
        <em> est le meilleur estimateur de la valeur de la grandeur étudiée</em>
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
          <LaTeX>h = 15.55mm</LaTeX>, donner un encadrement pour la mesure de la
          hauteur du boulon.
        </LI>
        <DotLine count={3} />
        <LI>
          Dans le manuel d'une sonde de température on lit la phrase suivante,
          <em> "l'incertitude type est égale à 2 % de la valeur mesurée"</em>.
          <OL format={(n) => `${toLowerAlphabetical(n)})`}>
            <LI>
              Si je mesure <LaTeX> 20,0 °C</LaTeX> donner un encadrement pour la
              valeur de la température.
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
            À l'aide de la calculatrice ou d'un tableur calculer le temps moyen
            pour un tour.
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
    </>
  );
}
