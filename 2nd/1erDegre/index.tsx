import { ex_intervalle, number_line } from "@assets";
import { Document, Img, Problem } from "@components";
import {
  Block,
  BlockBox,
  Chart,
  DotLine,
  H1,
  H2,
  LaTeX,
  LI,
  PageBreak,
  UL,
} from "@weasyprint-tsx/ui";
import "./index.css";

export default function PremierDegreDocument() {
  return (
    <Document title="Résolution de problèmes du 1er degré">
      <H1>Équation du premier degré</H1>
      <div className="text">
        Une <strong>équation</strong> est une relation mathématique entre
        plusieurs grandeurs égales, par exemple :
        <LaTeX>250 + 85 x = 200 + 90 x</LaTeX> est une équation où{" "}
        <LaTeX tex="x" /> est l'<strong>inconnue</strong>, c'est en général la
        valeur que l'on cherche à calculer.
      </div>
      <div className="text">
        On dit qu'une équation est de degré 1 lorsque son inconnue est élevée
        à la puissance 1 (ici <LaTeX>x^1 = x</LaTeX>).
      </div>
      <div className="borderbox text-center w-19/20 mx-auto p-2 font-bold">
        Résoudre une équation du premier degré, d’inconnue x, c’est trouver{" "}
        <DotLine inline width={"4cm"} /> de x pour laquelle{" "}
        <DotLine inline width={"8cm"} />.
      </div>
      <Problem>
        <span className="questions">
          Dans <LaTeX>250 + 85 x = 200 + 90 x</LaTeX> remplacer x par le
          nombre 10, qu'observe-t-on ?
        </span>
        <DotLine count={4} />
        On dira alors que <LaTeX tex="x = 10" /> est une{" "}
        <DotLine inline width={"4cm"} /> de l'équation{" "}
        <LaTeX>250 + 85 x = 200 + 90 x</LaTeX>
      </Problem>
      <p>
        Pour résoudre une équation simple on cherche à isoler l'inconnue d'un
        côté du signe égal.{" "}
        <em>
          Pour cela je peux additionner, soustraire, multiplier ou diviser{" "}
          <span className={"font-bold"}>des deux côtés du signe égal</span>{" "}
          par la même valeur.
        </em>
      </p>
      <BlockBox basis={2}>
        {["3+x=4", "x-8 = 6", "2x=8", "{\\large \\frac{x}{2}} = 3"]
          .map((s) => (
            <div className="borderbox h-25 mb-2 p-2">
              <LaTeX tex={`${s} \\Harr`} />
            </div>
          ))
          .concat(
            ["5x + 2 = 17", "7x + 4 - 2x = x - 5"].map((s) => (
              <div className="borderbox h-45 mb-2 p-2">
                <LaTeX tex={`${s} \\Harr`} />
              </div>
            )),
          )}
      </BlockBox>
      <PageBreak />
      <H1>Inéquation du premier degré</H1>
      <div className="text">
        Une <strong>inéquation</strong> est une relation mathématique entre
        plusieurs grandeurs qui nous informe sur laquelle est la plus grande,
        par exemple : {ineqEx} sont des inéquations où <LaTeX tex="x" /> est l'
        <strong>inconnue</strong>.
      </div>
      <div className="borderbox text-center w-19/20 mx-auto p-2 font-bold">
        Résoudre une inéquation du premier degré, d’inconnue x, c’est trouver
        <DotLine width={"5cm"} /> de x pour lesquelles{" "}
        <DotLine width={"7cm"} />.
      </div>
      <H2>Solution d'une inéquation : les intervalles</H2>
      <p>
        Comme les inéquations ont de multiples solutions il nous faut une
        manière de représenter plusieurs nombres à la fois. On parle alors d'
        <strong>intervalle</strong>, il s'agit de tous les nombres compris
        entre deux valeurs limites.
      </p>
      <BlockBox>
        <Block ratio={1.5}>
          <UL>
            <LI>
              <LaTeX tex="\large [a ; b]" /> représente tous les nombres
              compris entre a et b; il est dit <em>fermé</em> car a et b sont
              inclus dans l'intervalle. On note : <LaTeX tex="a \in [a;b]" />{" "}
              et <LaTeX tex="b \in [a;b]" /> (<LaTeX tex="\in" /> =
              "appartient à")
            </LI>
            <LI>
              <LaTeX tex="\large ]a ; b[" /> représente tous les nombres
              compris entre a et b{" "}
              <span className="font-bold">mais pas a ni b</span>; il est dit{" "}
              <em>ouvert</em> car a et b sont exclus de l'intervalle. On note :{" "}
              <LaTeX tex="a \notin ]a;b[" /> et <LaTeX tex="b \notin ]a;b[" />{" "}
              (<LaTeX tex="\notin" /> = "n'appartient pas") .
            </LI>
          </UL>
        </Block>
        <Img src={ex_intervalle} />
      </BlockBox>
      <div className="text">
        On note <LaTeX tex="+\infty" /> l'infini positif et{" "}
        <LaTeX tex="-\infty" /> l'infini négatif
      </div>
      <Problem>
        <span className="questions">
          Sur les droites suivantes, dessiner l'intervalle correspondant aux
          solutions de l'inéquation et donner la notation entre crochets de
          l'intervalle.
        </span>
        <UL>
          {["x > a", "x \\ge a", "x < a", "x \\le a"].map((s) => (
            <LI className="not-last:mb-10">
              si <LaTeX tex={s} /> alors <LaTeX tex="x \in" />
              <DotLine width={"5cm"} inline />
              <Img src={number_line} className="inline! w-100 ml-5" />
            </LI>
          ))}
        </UL>
      </Problem>
      <H2>Résolution d’une inéquation</H2>
      <p>
        Une inéquation se résout avec les mêmes règles que pour les équations,{" "}
        <strong>avec une différence :</strong>
      </p>

      <div className="borderbox text-center w-8/10 mx-auto p-2 font-bold">
        Lorsque je multiplie (ou divise) des deux côtés d'une inéquation par
        un nombre <DotLine width={"3cm"} inline />, l'inéquation va changer de
        sens (<LaTeX tex=">" /> ou <LaTeX tex="\le" /> deviennent{" "}
        <LaTeX tex="<" /> ou <LaTeX tex="\ge" />, et inversement )
      </div>

      <BlockBox basis={2}>
        {["8 + x \\le 4", "5x + 3 > 4", "-3 x -1 <11 ", "-4x +7 \\le 0"].map(
          (s) => (
            <div className="borderbox h-40 mb-2 p-2">
              <LaTeX tex={`${s} \\Harr`} />
            </div>
          ),
        )}
      </BlockBox>
      <Problem>
        Un camion pesant à vide 4 tonnes doit passer sur un pont limité à 12
        tonnes. Le propriétaire du camion cherche à savoir combien de caisses
        de 100 kg il peut transporter. On rappelle que : <LaTeX tex="1 t = 1000kg" />.
        <LI className="questions">
          Donner une formule permettant de calculer le poids en tonnes du camion
          lorsqu'il transporte x caisses.
        </LI>
        <DotLine count={3} />
        <LI className="questions">
          Tracer sur le graphique la courbe représentative de cette
          formule, ainsi que la droite d'équation <LaTeX>y = 12</LaTeX>
        </LI>
        <Chart
          width={1000}
          height={200}
          className="bg-[#ffffff60] mx-auto"
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
                  title: { font: { size: 12 }, display: true, text: "Nombre de caisses x" }
                },
                y: {
                  min: 0,
                  max: 14,

                  title: { font: { size: 10 }, display: true, text: "Poids du camion y (tonnes)" }
                },
              },
              plugins: {
                legend: { display: false },
              },
            },
          }}
        />
        <LI className="questions">
          Quelle inéquation décrit le nombre de caisses que le camion peut
          transporter ? La résoudre.
        </LI>
        <DotLine count={5} />
        <LI className="questions">
          Comparer les solutions obtenues au graphique, qu'observe-t-on ?
        </LI>
        <DotLine count={3} />
      </Problem>
    </Document>
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
