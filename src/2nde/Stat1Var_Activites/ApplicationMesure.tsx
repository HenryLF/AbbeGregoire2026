// Ported from the old project, where this section existed but was not
// rendered (it is not part of the old Stat1Var.pdf). Import and place
// <ApplicationMesure /> in index.tsx to include it.
import incertitude from "@assets/measurement/incertitude.svg";
import significatif from "@assets/measurement/significatif.svg";
import { Img } from "@components/atoms/Img";
import { Important, P, S } from "@components/atoms/Texts";
import { Problem } from "@components/section/Exercice";
import { DotLine } from "zefpdf-lab/ui/Inputs";
import { LaTeX } from "zefpdf-lab/ui/LaTeX";
import { Flex } from "zefpdf-lab/ui/Layout";
import { LI, OL, toLowerAlpha, UL } from "zefpdf-lab/ui/List";
import { Table, TEntry } from "zefpdf-lab/ui/Table";
import { H1, H2 } from "zefpdf-lab/ui/Titles";

const alpha = (n: number) => `${toLowerAlpha(n)})`;

export function ApplicationMesure() {
  return (
    <>
      <H1>Application à la prise de mesure</H1>
      <Flex gap="5mm" align="center">
        <div className="flex-[2]">
          <P>
            Dans la vie réelle, lorsque l'on réalise une mesure, celle-ci n'est
            jamais parfaitement exacte. Il existe une <S>incertitude</S>,
            c'est-à-dire une plage de valeurs autour de la valeur réelle dans
            laquelle se situeront les valeurs mesurées.
          </P>
          <P>
            Réaliser des statistiques sur les résultats d'une même mesure permet
            d'évaluer la précision et donc la fiabilité de cette mesure.
          </P>
        </div>
        <Img src={incertitude} className="flex-1" />
      </Flex>
      <H2>Chiffres significatifs</H2>
      <P>
        Les <S>chiffres significatifs</S> d'une valeur sont l'ensemble des
        chiffres qui "portent de l'information".
      </P>
      <Flex gap="5mm" align="center">
        <div className="flex-[2]">
          <P>
            Dans la pratique il s'agit de{" "}
            <em>
              tous les chiffres d'un nombre sauf les zéros avant le premier
              chiffre non nul
            </em>
            .
          </P>
        </div>
        <Img src={significatif} className="flex-1" />
      </Flex>
      <P>
        Le{" "}
        <S>nombre de chiffres significatifs d’une valeur indique sa précision</S>{" "}
        : plus la valeur comporte de chiffres significatifs, plus sa précision
        est grande.
      </P>
      <Problem>
        <P>
          Pour chacune des valeurs du tableau donner le nombre de chiffres
          significatifs.
        </P>
        <Table className="mx-auto">
          <TEntry
            header="Nombre"
            content={["0.105", "0.1050", "10.105", "0.0550", "0.045", "10.022"].map(
              (c) => <LaTeX tex={c} />,
            )}
          />
          <TEntry
            header="Chiffres significatifs"
            content={Array(6).fill("")}
          />
        </Table>
      </Problem>
      <P>
        Lorsque l'on fait des calculs avec des valeurs issues de mesures, le
        résultat ne peut pas avoir plus de chiffres significatifs que la mesure
        en elle-même. Autrement dit,{" "}
        <em> on ne peut pas augmenter le nombre de chiffres significatifs</em>.
      </P>
      <Problem>
        <P>
          Je mesure la longueur d'un rectangle à <LaTeX tex="L = 10.20 m" /> et
          sa largeur à <LaTeX tex="l = 2.5 m" />, donner la valeur de l'aire{" "}
          <LaTeX tex="A" /> du rectangle{" "}
          <em>
            en respectant le nombre de chiffres significatifs par le calcul
          </em>
          .
        </P>
        <DotLine count={2} />
      </Problem>
      <H2>Notion d'incertitude</H2>
      <P>
        La <S>moyenne</S> d’une série de mesures indépendantes{" "}
        <em> est le meilleur estimateur de la valeur de la grandeur étudiée</em>
        , le résultat d’une série de mesure s’écrit alors :
      </P>
      <Flex gap="5mm" align="center">
        <Important className="flex-1">
          <LaTeX tex="\large X = \overline{x} \pm  U(x) " />
        </Important>
        <div className="flex-[2.5]">
          <P>Avec :</P>
          <UL>
            <LI>
              <LaTeX tex="\overline{x}" /> est la moyenne de la série de
              mesures.
            </LI>
            <LI>
              <LaTeX tex="U(x)" /> est l'<S>incertitude type</S> qui est une
              mesure de dispersion des valeurs autour de la moyenne.
            </LI>
          </UL>
        </div>
      </Flex>
      <P>
        Autrement dit : on peut estimer avec un bon niveau de confiance que la
        vraie valeur est positionnée dans un encadrement appelé{" "}
        <S>intervalle de confiance</S> :{" "}
        <LaTeX tex="\overline{x} -  U(x) \leq X \leq \overline{x} +  U(x) " />
      </P>
      <P>
        L’incertitude associée à une mesure effectuée avec un instrument peut
        s’évaluer à partir d’indications fournies par le constructeur.
      </P>
      <Problem>
        <LI>
          Je cherche à mesurer un boulon à l'aide d'un pied à coulisse, le
          constructeur indique une incertitude type de{" "}
          <LaTeX tex="U = 0.03 mm" />, je mesure une hauteur de{" "}
          <LaTeX tex="h = 15.55mm" />, donner un encadrement pour la mesure de
          la hauteur du boulon.
        </LI>
        <DotLine count={3} />
        <LI>
          Dans le manuel d'une sonde de température on lit la phrase suivante,
          <em> "l'incertitude type est égale à 2 % de la valeur mesurée"</em>.
          <OL marker={alpha}>
            <LI>
              Si je mesure <LaTeX tex="20.0 \degree C" /> donner un encadrement
              pour la valeur de la température.
            </LI>
            <DotLine count={2} />
            <LI>
              Même question pour <LaTeX tex="150 \degree C" />.
            </LI>
            <DotLine count={2} />
          </OL>
        </LI>
        <LI>
          Voici le temps par tour pour le record du monde d'une course sur
          MarioKart 8 (Baby park) par le joueur{" "}
          <span className="not-italic underline">beat</span>.
        </LI>
        <Table className="mx-auto">
          <TEntry
            header="Tour n°"
            content={Array.from({ length: 7 }, (_, k) => k + 1)}
          />
          <TEntry
            header="Durée (s)"
            content={[11.142, 9.485, 8.706, 8.543, 8.578, 9.274, 9.417].map(
              (k) => <LaTeX tex={k.toString()} />,
            )}
          />
        </Table>
        <OL marker={alpha}>
          <LI>
            À l'aide de la calculatrice ou d'un tableur calculer le temps moyen
            pour un tour.
          </LI>
          <DotLine count={3} />
          <LI>
            À l'aide de la calculatrice ou d'un tableur calculer l'écart-type{" "}
            <LaTeX tex="\sigma" />.
          </LI>
          <DotLine count={3} />
          <LI>
            Dans ce cas, l'incertitude type peut être calculée avec la formule
            suivante{" "}
            <LaTeX tex="U = 1.96 \times \large \frac{\sigma}{\sqrt{N}}" /> où{" "}
            <LaTeX tex="N" /> est le nombre de mesures. Donner un encadrement
            pour le temps nécessaire à un tour de circuit.
          </LI>
          <DotLine count={5} />
        </OL>
      </Problem>
    </>
  );
}
