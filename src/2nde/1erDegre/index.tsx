import exIntervalle from "@assets/algebra/ex-intervalle.png";
import { AnswerBox } from "@components/atoms/AnswerBox";
import numberLine from "@assets/algebra/number-line.png";
import { Img } from "@components/atoms/Img";
import { Important, P, S } from "@components/atoms/Texts";
import { Cours } from "@components/doctype/Cours";
import { Problem } from "@components/section/Exercice";
import { Chart } from "zefpdf-lab/ui/Chart";
import { DotLine } from "zefpdf-lab/ui/Inputs";
import { LaTeX } from "zefpdf-lab/ui/LaTeX";
import { Flex } from "zefpdf-lab/ui/Layout";
import { LI, UL } from "zefpdf-lab/ui/List";
import { PageBreak } from "zefpdf-lab/ui/Pages";
import { H1, H2 } from "zefpdf-lab/ui/Titles";
import "./index.css";

/** Answer boxes, two per row, each starting with `tex ⇔`. */
function AnswerBoxes({ items, height }: { items: string[]; height: string }) {
  return (
    <Flex className="flex-wrap">
      {items.map((s) => (
        <div className="w-1/2 px-1">
          <AnswerBox height={height}>
            <LaTeX tex={`${s} \\Harr`} />
          </AnswerBox>
        </div>
      ))}
    </Flex>
  );
}

const ineqEx = ["3x \\gt 2", "3x \\ge 2", "3x \\lt 2", "3x \\le 2"].map(
  (s, k) => {
    if (k == 0) return <LaTeX tex={s} />;
    if (k == 3)
      return (
        <>
          {" "}
          et <LaTeX tex={s} />
        </>
      );
    return (
      <>
        , <LaTeX tex={s} />
      </>
    );
  },
);

export default function PremierDegreDocument() {
  return (
    <Cours title="Résolution de problèmes du 1er degré" lang="fr">
      <H1>Équation du premier degré</H1>
      <P>
        Une <S>équation</S> est une relation mathématique entre plusieurs
        grandeurs égales, par exemple :
        <LaTeX tex="250 + 85 x = 200 + 90 x" /> est une équation où{" "}
        <LaTeX tex="x" /> est l'<S>inconnue</S>, c'est en général la valeur que
        l'on cherche à calculer.
      </P>
      <P>
        On dit qu'une équation est de degré 1 lorsque son inconnue est élevée à
        la puissance 1 (ici <LaTeX tex="x^1 = x" />
        ).
      </P>
      <Important>
        Résoudre une équation du premier degré, d’inconnue x, c’est trouver{" "}
        <DotLine width="4cm" /> de x pour laquelle{" "}
        <DotLine width="8cm" />.
      </Important>
      <Problem>
        <em>
          Dans <LaTeX tex="250 + 85 x = 200 + 90 x" /> remplacer x par le nombre
          10, qu'observe-t-on ?
        </em>
        <DotLine count={4} />
        On dira alors que <LaTeX tex="x = 10" /> est une{" "}
        <DotLine width="4cm" /> de l'équation{" "}
        <LaTeX tex="250 + 85 x = 200 + 90 x" />
      </Problem>
      <P>
        Pour résoudre une équation simple on cherche à isoler l'inconnue d'un
        côté du signe égal.{" "}
        <em>
          Pour cela je peux additionner, soustraire, multiplier ou diviser{" "}
          <S>des deux côtés du signe égal</S> par la même valeur.
        </em>
      </P>
      <AnswerBoxes
        items={["3+x=4", "x-8 = 6", "2x=8", "{\\large \\frac{x}{2}} = 3"]}
        height="2.5cm"
      />
      <AnswerBoxes
        items={["5x + 2 = 17", "7x + 4 - 2x = x - 5"]}
        height="4.5cm"
      />
      <PageBreak />
      <H1>Inéquation du premier degré</H1>
      <P>
        Une <S>inéquation</S> est une relation mathématique entre plusieurs
        grandeurs qui nous informe sur laquelle est la plus grande, par exemple
        : {ineqEx} sont des inéquations où <LaTeX tex="x" /> est l'
        <S>inconnue</S>.
      </P>
      <Important>
        Résoudre une inéquation du premier degré, d’inconnue x, c’est trouver{" "}
        <DotLine width="5cm" /> de x pour lesquelles{" "}
        <DotLine width="7cm" />.
      </Important>
      <H2>Solution d'une inéquation : les intervalles</H2>
      <P>
        Comme les inéquations ont de multiples solutions il nous faut une
        manière de représenter plusieurs nombres à la fois. On parle alors d'
        <S>intervalle</S>, il s'agit de tous les nombres compris entre deux
        valeurs limites.
      </P>
      <Flex gap="4mm" align="center">
        <UL className="flex-[1.5]">
          <LI>
            <LaTeX tex="\large [a ; b]" /> représente tous les nombres compris
            entre a et b; il est dit <em>fermé</em> car a et b sont inclus dans
            l'intervalle. On note : <LaTeX tex="a \in [a;b]" /> et{" "}
            <LaTeX tex="b \in [a;b]" /> (<LaTeX tex="\in" /> = "appartient à")
          </LI>
          <LI>
            <LaTeX tex="\large ]a ; b[" /> représente tous les nombres compris
            entre a et b <S>mais pas a ni b</S>; il est dit <em>ouvert</em> car
            a et b sont exclus de l'intervalle. On note :{" "}
            <LaTeX tex="a \notin ]a;b[" /> et <LaTeX tex="b \notin ]a;b[" /> (
            <LaTeX tex="\notin" /> = "n'appartient pas") .
          </LI>
        </UL>
        <Img src={exIntervalle} className="flex-1" />
      </Flex>
      <P>
        On note <LaTeX tex="+\infty" /> l'infini positif et{" "}
        <LaTeX tex="-\infty" /> l'infini négatif
      </P>
      <Problem>
        <em>
          Sur les droites suivantes, dessiner l'intervalle correspondant aux
          solutions de l'inéquation et donner la notation entre crochets de
          l'intervalle.
        </em>
        {["x > a", "x \\ge a", "x < a", "x \\le a"].map((s) => (
          <Flex align="center" gap="2mm" className="my-4">
            <span>•</span>
            <span>si</span>
            <LaTeX className="shrink-0" tex={s} />
            <span>alors</span>
            <LaTeX className="shrink-0" tex="x \in" />
            <DotLine width="5cm" />
            <Img src={numberLine} className="w-[10cm] ml-5" />
          </Flex>
        ))}
      </Problem>
      <H2>Résolution d’une inéquation</H2>
      <P>
        Une inéquation se résout avec les mêmes règles que pour les équations,{" "}
        <S>avec une différence :</S>
      </P>
      <Important>
        Lorsque je multiplie (ou divise) des deux côtés d'une inéquation par un
        nombre <DotLine width="3cm" />, l'inéquation va
        changer de sens (<LaTeX tex=">" /> ou <LaTeX tex="\le" /> deviennent{" "}
        <LaTeX tex="<" /> ou <LaTeX tex="\ge" />, et inversement )
      </Important>
      <AnswerBoxes
        items={["8 + x \\le 4", "5x + 3 > 4", "-3 x -1 <11 ", "-4x +7 \\le 0"]}
        height="4cm"
      />
      <Problem>
        Un camion pesant à vide 4 tonnes doit passer sur un pont limité à 12
        tonnes. Le propriétaire du camion cherche à savoir combien de caisses de
        100 kg il peut transporter. On rappelle que :{" "}
        <LaTeX tex="1\,t = 1000\,kg" />.
        <LI>
          Donner une formule permettant de calculer le poids en tonnes du camion
          lorsqu'il transporte x caisses.
        </LI>
        <DotLine count={3} />
        <LI>
          Tracer sur le graphique la courbe représentative de cette formule,
          ainsi que la droite d'équation <LaTeX tex="y = 12" />
        </LI>
        <Chart
          width={1000}
          height={200}
          className="mx-auto"
          config={{
            type: "line",
            data: {
              labels: Array.from({ length: 101 }, (_, k) => k.toString()),
              datasets: [
                {
                  data: Array.from({ length: 101 }, (_, k) => 4 + 0.1 * k),
                  borderColor: "transparent",
                  pointStyle: false,
                },
              ],
            },
            options: {
              scales: {
                x: {
                  min: 0,
                  max: 100,
                  ticks: {
                    callback(value, index) {
                      if (!(index % 5)) return value;
                    },
                  },
                  title: {
                    font: { size: 12 },
                    display: true,
                    text: "Nombre de caisses x",
                  },
                },
                y: {
                  min: 0,
                  max: 14,
                  title: {
                    font: { size: 10 },
                    display: true,
                    text: "Poids du camion y (tonnes)",
                  },
                },
              },
              plugins: {
                legend: { display: false },
              },
            },
          }}
        />
        <LI>
          Quelle inéquation décrit le nombre de caisses que le camion peut
          transporter ? La résoudre.
        </LI>
        <DotLine count={5} />
        <LI>Comparer les solutions obtenues au graphique, qu'observe-t-on ?</LI>
        <DotLine count={3} />
      </Problem>
    </Cours>
  );
}
