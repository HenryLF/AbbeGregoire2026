import { suitesExArithmetique, suitesPipes } from "@assets/index";
import { Img } from "@components/atoms/Img";
import { Important, Note, P, S } from "@components/atoms/Texts";
import { Cours } from "@components/doctype/Cours";
import { Problem, SubQuestion } from "@components/section/Exercice";
import { toChildArray } from "preact";
import {
  Chart,
  type ComponentProps,
  DotLine,
  Flex,
  H1,
  H2,
  LaTeX,
  PageBreak,
  Table,
  TEntry,
} from "zefpdf-lab/ui";
import { LI, UL } from "zefpdf-lab/ui/List";
import "../1ere.css";

const U = ({
  children,
  index = "n",
  ...props
}: ComponentProps & { index?: string | number }) => {
  const tex = children?.toString();
  return <LaTeX tex={`u_{${index}}${tex ?? ""}`} />;
};

const exSuite = (n: number = 9) =>
  Array.from({ length: n }, (_, k) => 1 + k * 5);

export default function () {
  return (
    <Cours title="Suites arithmétiques">
      <Problem>
        <LI>
          Pour chacune des suites suivantes, expliquer comment elles sont
          construites et compléter les termes manquants.
        </LI>
        <Table className={"table-fixed w-7/9 mx-auto"} borderStyle="none">
          <TEntry
            content={[null, ...Array.from({ length: 8 }, (_, k) => k + 1)]}
            className={"italic text-[8px]!"}
          />
          {[
            [
              ...Array.from({ length: 5 }, (_, k) => 9 + k),
              <DotLine />,
              <DotLine />,
            ],
            [5, 7, 14, 16, 32, <DotLine />, 68, <DotLine />],
            ["A", "Z", "B", "Y", <DotLine />, "X", "D", <DotLine />],
            [21, 16, 11, 6, <DotLine />],
            [2, "C", 3, "D", 5, "F", 6, "G"],
          ].map((content, k) => (
            <TEntry
              header={`Suite n°${k}`}
              content={toChildArray(content)}
              cellPadding={"1mm"}
            />
          ))}
        </Table>
        <P>
          Une <S>suite de nombres</S> est un ensemble de nombres qui se suivent,
          comme par exemple :
        </P>{" "}
        <div class={"table text-[16px] font-bold mx-auto mb-[1cm]"}>
          ({exSuite().join(" ; ")})
        </div>
        <P>
          {" "}
          Le nombre de termes d’une suite est le nombre de nombres que cette
          suite comporte.
        </P>
        <SubQuestion indent={"5mm"}>
          <LI>
            Combien de termes comporte cette suite ? <DotLine inline />
          </LI>
          <P>
            On appelle <U /> le 1er terme de la suite, puis <U index={2} /> le
            2ème terme, <U index={3} /> le 3ème terme, .... puis <U /> le n-ième
            terme.
          </P>
          <LI>
            Quelle est la valeur du 6ème terme ? <DotLine width={"3cm"} />
          </LI>
          <LI>
            Quelle est la valeur de <U index={5} /> et <U index={9} /> ?{" "}
            <U index={5}>=</U> <DotLine width={"4cm"} className={"mr-[1cm]"} />
            <U index={9}>=</U> <DotLine width={"4cm"} />
          </LI>
          <LI>
            {" "}
            Si <LaTeX tex="n= 7" />, quelle est la valeur de <U /> ? <U>=</U>
            <U index={"...."}>=</U>
            <DotLine width={"6cm"} />
          </LI>
          <LI>
            {" "}
            Si <LaTeX tex="n= 5" />, quelle est la valeur de <U index={"n-1"} />{" "}
            ? <U index={"n-1"}>=</U>
            <U index={".........."}>=</U>
            <U index={"...."}>=</U>
            <DotLine width={"6cm"} />
          </LI>
        </SubQuestion>
      </Problem>

      <H1>Suites numériques</H1>
      <H2>Définition</H2>
      <P>
        Une <S> suite numérique</S> (<U />) est définie par une fonction{" "}
        <LaTeX tex="f" /> pour tout entier naturel : <U>=f(n)</U>. Une suite
        numérique est une <DotLine width={"8cm"} /> dont les termes sont notés :{" "}
        {Array.from({ length: 4 }, (_, k) => (
          <>
            <U index={k + 1} />,
          </>
        ))}{" "}
        ..., <U />.
      </P>
      <UL>
        {[
          [1, "premier"],
          [2, "deuxième"],
          ["n", "n-ième"],
        ].map(([n, nn]) => (
          <LI>
            <U index={n} /> est le terme de <DotLine width={"5cm"} /> ({nn}{" "}
            terme).
          </LI>
        ))}
      </UL>
      <P>
        Le terme qui
        <DotLine width={"3cm"} /> <U /> est noté <U index={"n+1"} /> et le terme
        qui <DotLine width={"3cm"} /> <U /> est noté <U index={"n-1"} />. Le
        premier terme d’une suite (<U />) est <U index={0} /> ou <U index={1} />{" "}
        suivant la définition de la suite.
      </P>
      <H2>Sens de variation</H2>
      <P>
        Une suite numérique se représente par un graphique en nuage de points de
        coordonnées (<LaTeX tex="n" /> ; <U />)
      </P>
      <UL>
        {["croissante", "décroissante"].map((k) => (
          <LI>
            La suite numérique est <S>{k}</S> si les valeurs de ses termes
            successifs <DotLine inline />
          </LI>
        ))}
      </UL>
      <Note>
        Il existe plein de familles de suites différentes, cette année nous nous
        intéressons à une famille : <S>les suites arithmétiques</S>.
      </Note>
      <PageBreak />
      <H1>Suites arithmétiques</H1>
      <Problem>
        <LI marker="">
          {" "}
          La suite ci-dessous est un exemple de suite arithmétique, comment
          est-elle construite ?
        </LI>
        <div className={"table mx-auto font-bold text-[14px]"}>
          {exSuite().join(" ; ")}
        </div>
        <DotLine count={2} />
      </Problem>
      <H2>Définition</H2>
      <P>
        Chaque terme d’une suite arithmétique est obtenu à partir du précédent
        par <DotLine width={"5cm"} /> d’un nombre constant appelé <S>raison</S>.
      </P>
      <Img src={suitesExArithmetique} className="w-2/3 mx-auto mb-1" />
      <Flex align="center" justify="start" gap={"2mm"}>
        <div>
          Pour <LaTeX tex="n\ge 1" />:
        </div>
        <Important className={"mx-0!"}>
          <LaTeX displayMode tex="\Large u_{n+1} = \hspace{5cm}" />
        </Important>
        <div>
          où <LaTeX tex="r" /> est la <S>raison</S>
        </div>
      </Flex>
      <H2>
        Expression du terme de rang <LaTeX>n</LaTeX>
      </H2>

      <Problem>
        <LI>
          Pour la suite étudiée : ({exSuite().join("; ")}), donner l'expression
          du second terme <U index={2} /> en fonction du premier terme{" "}
          <U index={1} />.
        </LI>
        <DotLine />
        <LI>
          Donner l'expression du terme de rang 3 <U index={3} /> en fonction du
          terme de rang 2 <U index={2} />.
        </LI>
        <DotLine />

        <LI>
          Dans l'expression précédente, remplacer <U index={2} /> par
          l'expression de <U index={1} /> trouvée en question 1.
        </LI>
        <DotLine count={2} />
        <LI>
          On cherche à calculer <U index={100} />, a-t-on besoin de calculer
          tous les termes précédents ? Donner l'expression de <U index={100} />{" "}
          en fonction de <U index={1} /> puis calculer sa valeur.
        </LI>
        <DotLine count={3} />
      </Problem>

      <Flex align="center" gap={"2mm"}>
        <div>
          Pour <LaTeX tex="n\ge 1" />:
        </div>
        <Important className={"mx-0!"}>
          <LaTeX displayMode tex="\Large u_{n} = \hspace{5cm}" />
        </Important>
        <div>
          où <LaTeX tex="r" /> est la <S>raison</S> et <U index={1} /> est le
          premier terme de la suite.
        </div>
      </Flex>
      <P>
        {" "}
        Ainsi si je connais <DotLine width={"8cm"} /> et{" "}
        <DotLine width={"4cm"} />, je peux calculer tous les termes d'une suite
        arithmétique.
      </P>

      <Note title="Attention !!!">
        Cette formule dépend de savoir si on commence à compter les termes de la
        suite en partant du rang 1 ou du rang 0.
        <br />
        Il arrive parfois que l'on préfère dire que le premier terme de la suite
        est <U index={0} />, on commence à compter à partir de 0 et on aura
        alors <LaTeX tex="u_n = u_0 + n\times r" />. <br />
        Plutôt qu'apprendre les deux formules je vous encourage à réfléchir au
        nombre de fois où l'on ajoute <LaTeX tex="r" /> pour arriver au rang{" "}
        <LaTeX tex="n" /> (<LaTeX tex="n" /> si je pars de 0 et{" "}
        <LaTeX tex="n-1" /> si je pars de 1)
      </Note>
      <PageBreak />
      <H2>Représentations graphiques</H2>
      <P>
        Les termes d’une suite arithmétique sont représentés par des points
        alignés.
      </P>
      <Flex>
        {[
          { u: 3, r: 2 },
          { u: 12, r: -2 },
        ].map(({ u, r }, k) => (
          <div className={"flex-1"}>
            <Chart
              className={"mx-auto"}
              height={300}
              width={300}
              config={{
                type: "scatter",
                data: {
                  labels: [1, 2, 3, 4, 5, 6],
                  datasets: [
                    {
                      data: Array.from({ length: 6 }, (_, k) => u + k * r),
                      pointBackgroundColor: k % 2 ? "red" : "blue",
                      pointBorderColor: "black",
                    },
                  ],
                },
                options: {
                  plugins: { legend: { display: false } },
                  scales: {
                    y: { min: 0, max: 14, ticks: { stepSize: 2 } },
                  },
                },
              }}
            />

            <UL className={"columns-2 text-center mx-auto w-4/5"}>
              <LI>premier terme {u}</LI>
              <LI>raison {r}</LI>
            </UL>
            <div className={"text-center"}>
              Si <LaTeX tex={k % 2 ? "r\\lt 0" : "r\\gt 0"} />
              la suite est <DotLine width={"4cm"} />
            </div>
          </div>
        ))}
      </Flex>
      <H2>
        Somme des <LaTeX tex="n" /> premiers termes
      </H2>
      <Flex align="center" justify="center" gap={"0"}>
        <div>
          La somme des <LaTeX tex="n" /> premiers termes est notée{" "}
          <LaTeX tex="S_n" /> :
        </div>
        <Important>
          <LaTeX tex="S_n = u_1 + u_2 + .... + u_n" />
        </Important>
        <div>ou</div>

        <Important>
          <LaTeX displayMode tex="S_n = \sum_{i=0}^{n} u_i" />
        </Important>
      </Flex>
      <Flex>
        <P>
          Elle se calcule simplement à l’aide du premier et du dernier terme :
        </P>
        <Important className="pt-3!">
          <LaTeX noFormatNumber tex="S_n = \frac{\hspace{3cm}}{}" displayMode />
        </Important>
      </Flex>

      <Problem>
        <Flex gap={"1mm"} align="center">
          <div className="flex-1/3">
            <Img src={suitesPipes} className={"mx-[3mm]"} />
          </div>
          <div className="flex-2/3">
            <P>
              Lorsqu'on empile des canalisations comme sur la photo, le nombre
              de canalisations par étage est donné par une suite arithmétique de
              raison <LaTeX tex="r=-1" /> et dont le premier terme est égal au
              nombre de canalisations du premier étage.
            </P>
            <P>
              On s'interesse à une pile dont le premier étage comporte{" "}
              <U index={0}>=7</U>
              canalisations et qui s'élève sur 5 étages.{" "}
            </P>
          </div>
        </Flex>
        <LI>Combien de canalisations puis-je mettre au second étage ?</LI>
        <DotLine />
        <LI>Combien de canalisations puis-je mettre au troisième étage ?</LI>
        <DotLine />
        <LI>
          Donner l'expression de la suite <U /> qui donne le nombre de
          canalisation pour le n-ième étage et calculer <U index={5} />.{" "}
        </LI>
        <DotLine count={2} />
        <LI>Combien de canalisations sont stockées dans cette pile ?</LI>
        <DotLine count={3} />
      </Problem>
    </Cours>
  );
}
