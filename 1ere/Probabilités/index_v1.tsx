import { venn_incompatibles, venn_intersection, venn_single } from "@assets";
import { Document, Exemple, Img, ImportantEquation, Note } from "@components";
import {
  Block,
  BlockBox,
  DotLine,
  Entry,
  H1,
  H2,
  LaTeX,
  LI,
  Table,
  UL,
} from "@weasyprint-tsx/ui";
import "./index.css";

function ProbabiliteEvenement() {
  return (
    <>
      <H1>Probabilité d’un événement</H1>
      <H2>Langage des probabilités</H2>
      <UL>
        <LI>
          Une expérience <DotLine inline width="3cm" /> est une expérience où le{" "}
          <DotLine inline width="3cm" /> décide de plusieurs résultats
          possibles.
        </LI>
        <LI>
          Chacun des <DotLine inline width="4cm" /> d’une expérience aléatoire
          est une <DotLine inline width="2cm" /> de l’expérience. Un événement
          réalisé par une seule issue est un{" "}
          <strong>événement élémentaire</strong>.
        </LI>
        <LI>
          L’univers des possibles est l’ensemble des événements élémentaires
          possibles (résultats d’une expérience aléatoire). On le note{" "}
          <LaTeX tex="\Omega" />.
        </LI>
        <LI>
          Un <DotLine inline width="4cm" /> <LaTeX tex="A" /> est une partie de
          l’ensemble <LaTeX tex="\Omega" /> des événements élémentaires.
        </LI>
      </UL>

      <H2>Probabilité d’un événement</H2>
      <div className="text">
        À chaque issue de l’univers <LaTeX tex="\Omega" />, on attribue une
        probabilité <LaTeX tex="p" /> qui est un nombre compris entre{" "}
        <DotLine inline width="1cm" /> et <DotLine inline width="1cm" />.<br />{" "}
        Si <LaTeX tex="p = 1" /> alors l’événement est certain, si{" "}
        <LaTeX tex="p = 0" /> alors l’événement est impossible.
      </div>
      <div className="h-15"></div>
      <H2>Équiprobabilité</H2>
      <div className="text">
        Soit un événement <LaTeX tex="A" />, faisant partie de l’univers{" "}
        <LaTeX tex="\Omega" />, dont les événements élémentaires ont tous la
        même probabilité (on dit qu’ils sont <strong>équiprobables</strong>), on
        a alors :
      </div>
      <ImportantEquation
        fontSize={18}
        className="pt-8!"
        numberFormat={false}
        tex={`p(A) = \\large \\frac{ \\hspace{5cm}}{}`}
      />
      <div className="text">
        Le nombre de cas possibles est le nombre d’éléments de{" "}
        <LaTeX tex="\Omega" />.
      </div>
    </>
  );
}

function OperationsEvenements() {
  return (
    <>
      <H1>Opérations sur les événements</H1>
      <H2>Événements contraires</H2>
      <BlockBox align="middle">
        <Block ratio={2}>
          <div className="text">
            L’événement contraire d’un événement <LaTeX tex="A" /> est noté{" "}
            <DotLine inline width="1.5cm" /> (ils n’ont aucun événement
            élémentaire commun). On a alors :
          </div>
          <ImportantEquation
            className="py-2!"
            tex={`p(\\overline{A}) = \\hspace{4cm}`}
            numberFormat={false}
          />
        </Block>
        <Block>
          <Img src={venn_single} className="w-8/10 mx-auto" />
        </Block>
      </BlockBox>

      <H2>Intersection d’événements</H2>
      <div className="text">
        L’intersection de deux événements <LaTeX tex="A" /> et <LaTeX tex="B" />{" "}
        est l’événement constitué des issues qui réalisent à la fois l’événement{" "}
        <LaTeX tex="A" /> <DotLine inline width="1.5cm" /> l’événement{" "}
        <LaTeX tex="B" />. On note cette intersection <LaTeX tex="A" />{" "}
        <DotLine inline width="1cm" /> <LaTeX tex="B" /> (et on lit «{" "}
        <DotLine inline width="3cm" /> »).
      </div>
      <Img src={venn_intersection} className="w-1/3 mx-auto" />

      <H2>Réunion d’événements</H2>
      <div className="text">
        La réunion de deux événements <LaTeX tex="A" /> et <LaTeX tex="B" /> est
        l’événement constitué des issues qui réalisent l’événement{" "}
        <LaTeX tex="A" /> <DotLine inline width="1.5cm" /> l’événement{" "}
        <LaTeX tex="B" />. On note cette réunion <LaTeX tex="A" />{" "}
        <DotLine inline width="1cm" /> <LaTeX tex="B" /> (et on lit «{" "}
        <DotLine inline width="3cm" /> »).
      </div>
      <div className="text">
        Dans ce cas, on a :{" "}
        <ImportantEquation
          inline
          numberFormat={false}
          fontSize={18}
          tex={`p(A \\cup B) = \\hspace{6cm}`}
        />
      </div>
      <BlockBox align="middle" gap="1mm" className="mb-10">
        <Block ratio={4}>
          <Img src={venn_intersection} className="w-full" />
        </Block>
        <Block className="text-center text-xl">=</Block>
        <Block ratio={4}>
          <Img src={venn_intersection} className="w-full" />
        </Block>
        <Block className="text-center text-xl">+</Block>
        <Block ratio={4}>
          <Img src={venn_intersection} className="w-full" />
        </Block>
        <Block className="text-center text-xl">−</Block>
        <Block ratio={4}>
          <Img src={venn_intersection} className="w-full" />
        </Block>
      </BlockBox>

      <H2>Événements incompatibles</H2>
      <BlockBox align="middle">
        <Block ratio={2}>
          <div className="text">
            Deux événements <LaTeX tex="A" /> et <LaTeX tex="B" /> sont
            incompatibles lorsqu’ils n’ont <DotLine inline width="4cm" />.
          </div>
          <Exemple>
            <LI>
              les événements « obtenir pile » et « obtenir face » lors du jet
              d’une pièce de monnaie.
            </LI>
          </Exemple>
        </Block>
        <Block>
          <Img src={venn_incompatibles} className="w-8/10 mx-auto" />
        </Block>
      </BlockBox>
      <div className="text">
        Soient deux événements <LaTeX tex="A" /> et <LaTeX tex="B" />{" "}
        incompatibles, la probabilité qu’un des deux événements au moins soit
        réalisé est notée <LaTeX tex="p(A \cup B)" /> :
      </div>
      <ImportantEquation tex="p(A \cup B) = p(A) + p(B)" />
      <Note>
        Il va de soi que lorsque <LaTeX tex="A" /> et <LaTeX tex="B" /> sont
        incompatibles, <LaTeX tex="p(A \cap B) = 0" />.
      </Note>

      <H2>Tableaux croisés</H2>
      <div className="text">
        On peut utiliser des tableaux croisés pour rassembler les données
        concernant deux caractères.
      </div>
      <Table className="w-2/3 mx-auto">
        <Entry content={[<LaTeX tex="B" />, <LaTeX tex="\overline{B}" />, ""]}>
          {""}
        </Entry>
        <Entry
          content={[
            <LaTeX tex="p(A \cap B)" />,
            <LaTeX tex="p(A \cap \overline{B})" />,
            <LaTeX tex="p(A)" />,
          ]}
        >
          <LaTeX tex="A" />
        </Entry>
        <Entry
          content={[
            <LaTeX tex="p(\overline{A} \cap B)" />,
            <LaTeX tex="p(\overline{A} \cap \overline{B})" />,
            <LaTeX tex="p(\overline{A})" />,
          ]}
        >
          <LaTeX tex="\overline{A}" />
        </Entry>
        <Entry
          content={[<LaTeX tex="p(B)" />, <LaTeX tex="p(\overline{B})" />, "1"]}
        >
          {""}
        </Entry>
      </Table>
    </>
  );
}

function ProbabilitesConditionnelles() {
  return (
    <>
      <H1>Fréquences et probabilités conditionnelles</H1>
      <div className="text">
        Lors d’une situation recensant plusieurs événements, la{" "}
        <strong>fréquence conditionnelle</strong> de l’événement{" "}
        <LaTeX tex="B" /> sachant que <LaTeX tex="A" /> est réalisé, est notée{" "}
        <LaTeX tex="f_A(B)" /> et est telle que :
      </div>
      <ImportantEquation
        fontSize={18}
        tex={`f_A(B) = \\frac{\\text{Nombre de cas r{\\char"E9}alisant {\\char"E0} la fois } A \\text{ et } B}{\\text{Nombre de cas total de } A}`}
      />
      <div className="text">
        Soient <LaTeX tex="A" /> et <LaTeX tex="B" /> deux événements d’une
        expérience aléatoire d’univers <LaTeX tex="\Omega" />, de probabilités
        non nulles. La probabilité de réalisation de{" "}
        <strong>
          <LaTeX tex="B" /> sachant que <LaTeX tex="A" /> est réalisé
        </strong>{" "}
        est notée <LaTeX tex="p_A(B)" /> et on a :
      </div>
      <ImportantEquation
        fontSize={16}
        numberFormat={false}
        className="pt-5!"
        tex={`p_A(B) = \\frac{\\hspace{3cm}}{}`}
      />
      <div className="text">
        <LaTeX tex="p_A(B)" /> se lit « probabilité de <LaTeX tex="B" /> sachant{" "}
        <LaTeX tex="A" /> ».
      </div>
      <Note headerText="Attention :">
        Il faut bien distinguer que{" "}
        <strong>
          « <LaTeX tex="A" /> et <LaTeX tex="B" /> » n’est pas la même chose que
          « <LaTeX tex="B" /> sachant <LaTeX tex="A" /> »
        </strong>
        .
      </Note>
    </>
  );
}

export default function () {
  return (
    <Document title="Probabilités">
      <ProbabiliteEvenement />
      <OperationsEvenements />
      <ProbabilitesConditionnelles />
    </Document>
  );
}
