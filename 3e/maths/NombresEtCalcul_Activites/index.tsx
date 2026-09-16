import { ex_parcelle } from "@/assets";
import { Document, Exercice, Img, SubQuestions } from "@/components";
import {
  Block,
  BlockBox,
  H1,
  LaTeX,
  LI,
  OL,
  toLowerAlphabetical,
  UL,
} from "@weasyprint-tsx/ui";
import "./index.css";

export default function NombresEtEnsemblesDocument() {
  return (
    <Document title="Nombres et Calculs">
      <H1>Puissances ou Exposant</H1>
      <Exercice title="Calculs de puissances">
        <div className="question">Calculer :</div>
        <UL className="columns-3" indent={0}>
          {[
            "A = (-5)^2",
            "B = -1^2",
            "C = (-1)^2 ",
            "D = -3^3 ",
            "E = (-2)^2 ",
            "F = -7^2",
            "G = (-9)^0",
            "H = -3^2 × (1 - 2)^2",
            "I = (-3 + 8)^3 × (1 - 2)^2",
          ].map((e) => (
            <LI>
              <LaTeX tex={e} />
            </LI>
          ))}
        </UL>
      </Exercice>

      <Exercice title="Exposants négatifs">
        <div className="question">
          Écrire les quotients sous la forme <LaTeX tex="a^{-n}" /> :
        </div>
        <UL indent={0}>
          <BlockBox>
            {[
              "A = \\large \\frac{1}{3 \\times 3 \\times 3 \\times 3 \\times 3 }",
              "B = \\large \\frac{1}{(-6) \\times(-6) \\times(-6) }",
              "C = \\large \\frac{1}{(-6)^8 \\times(-1)^8 }",
            ].map((e) => (
              <LI>
                <LaTeX tex={e} />
              </LI>
            ))}
          </BlockBox>
        </UL>
      </Exercice>
      <Exercice title="Écriture décimale">
        <div className="question">
          Donner l'écriture décimale de chaque nombre.
        </div>
        <BlockBox>
          {["2^3", "(-3)^2", "2^{-1}", "5^{-2}"].map((e) => (
            <LI indent={0} format={(k) => toLowerAlphabetical(k) + ")"}>
              <LaTeX tex={e} />
            </LI>
          ))}
        </BlockBox>
      </Exercice>

      <Exercice title="Écriture décimale des puissances de 10">
        <div className="question">
          Donner l'écriture décimale de chaque nombre.
        </div>
        <BlockBox>
          {["10^3", "10^9", "10^{-1}", "10^{-4}"].map((e) => (
            <LI indent={0} format={(k) => toLowerAlphabetical(k) + ")"}>
              <LaTeX tex={e} />
            </LI>
          ))}
        </BlockBox>
      </Exercice>

      <Exercice title="Écrire à l'aide d'une puissance de 10">
        <div className="question">
          Écrire chaque nombre à l'aide d'une puissance de 10.
        </div>
        <BlockBox>
          {["100\\,000", "1", "0.01", "0.00001"].map((e) => (
            <LI indent={0} format={(k) => toLowerAlphabetical(k) + ")"}>
              <LaTeX tex={e} />
            </LI>
          ))}
        </BlockBox>
      </Exercice>

      <Exercice title="Produit de puissances">
        <div className="question">Recopier et compléter.</div>
        <BlockBox>
          {[
            "2^2 \\times 2^5 = 2^{\\cdots}",
            "3^4 \\times 3^5 = 3^{\\cdots}",
            "10^4 \\times 10 = 10^{\\cdots}",
            "6^{-4} \\times 6^2 = 6^{\\cdots}",
          ].map((e) => (
            <LI indent={0} format={(k) => toLowerAlphabetical(k) + ")"}>
              <LaTeX tex={e} />
            </LI>
          ))}
        </BlockBox>
      </Exercice>

      <Exercice title="Quotient de puissances">
        <div className="question">Recopier et compléter.</div>
        <BlockBox basis={3}>
          {[
            "{\\large \\frac{8^5}{8^3}} = 8^{\\cdots}",
            "{\\large \\frac{7^3}{7}} = 7^{\\cdots}",
            "{\\large \\frac{10^6}{10^{-1}}} = 10^{\\cdots}",
            "{\\large \\frac{5^{-3}}{5^{-6}}} = 5^{\\cdots}",
            "{\\large \\frac{2^2}{2^4}} = 2^{\\cdots}",
            "{\\large \\frac{10^3}{10^6}} = 10^{\\cdots}",
          ].map((e) => (
            <LI format={(k) => toLowerAlphabetical(k) + ")"}>
              <LaTeX tex={e} />
            </LI>
          ))}
        </BlockBox>
      </Exercice>

      <Exercice title="Puissance d'une puissance">
        <div className="question">Recopier et compléter.</div>
        <BlockBox gap={"2mm"}>
          {[
            ["(2^5)^3 = 2^{\\cdots}", 1],
            ["(3^{-4})^2 = 3^{\\cdots}", 1],
            ["(10^3)^{-2} = 10^{\\cdots}", 1],
            ["(3x)^2 = \\dots\\dots\\, x^{\\cdots}", 1.2],
            ["(-2x)^3 = \\dots\\dots\\, x^{\\cdots}", 1.5],
          ].map(([e, k]) => (
            <Block ratio={k as number}>
              <LI indent={0} format={(k) => toLowerAlphabetical(k) + ")"}>
                <LaTeX tex={e as string} />
              </LI>
            </Block>
          ))}
        </BlockBox>
      </Exercice>

      <Exercice title="Forme fractionnaire">
        <div className="question">
          Écrire chaque nombre sous forme fractionnaire.
        </div>
        <BlockBox>
          {[
            "\\left({\\large \\frac{3}{4}}\\right)^2",
            "\\left(-{\\large \\frac{5}{2}}\\right)^3",
            "\\left({\\large \\frac{1}{2}}\\right)^4",
            "\\left(-{\\large \\frac{1}{2}}\\right)^4",
          ].map((e) => (
            <LI indent={0} format={(k) => toLowerAlphabetical(k) + ")"}>
              <LaTeX tex={e} />
            </LI>
          ))}
        </BlockBox>
      </Exercice>

      <H1>Développement</H1>
      <Exercice title="Distributivité simple">
        <div className="question">Développer.</div>
        <BlockBox>
          {["2(x - 4)", "-3(2x - 1)", "4(4 - 3t)"].map((e) => (
            <div>
              <LI indent={0} format={(k) => toLowerAlphabetical(k) + ")"}>
                <LaTeX tex={e} />
              </LI>
            </div>
          ))}
        </BlockBox>
      </Exercice>

      <Exercice title="Double distributivité">
        <div className="question">Développer et réduire.</div>
        <BlockBox>
          {[
            "(2x + 5)(x + 1)",
            "(2y - 1)(3y + 2)",
            "(x + 7)(3x - 1)",
            "(2t - 3)(2t - 1)",
          ].map((e) => (
            <div>
              <LI indent={0} format={(k) => toLowerAlphabetical(k) + ")"}>
                <LaTeX tex={e} />
              </LI>
            </div>
          ))}
        </BlockBox>
      </Exercice>

      <Exercice title="Développer et réduire">
        <div className="question">Développer et réduire.</div>
        <UL indent={0} className="columns-2">
          {[
            "A = (4x + 1)(x - 4) - 4x(1 - 5x)",
            "B = 2x(3x - 1) - (1 - 4x)\\left({\\large \\frac{1}{2}}x + 1\\right)",
            "C = (7t + 3)(t - 4) - (t - 2)(t + 6)",
            "D = 2x(8x - 1) - (4x - 5)(4x - 1)",
          ].map((e) => (
            <div>
              <LI>
                <LaTeX tex={e} />
              </LI>
            </div>
          ))}
        </UL>
      </Exercice>

      <Exercice title="Développer puis calculer">
        <div className="question">
          On donne <LaTeX tex="E = (3x - 5)(2x - 1) - 4(x - 1)" />.
        </div>
        <LI>
          Développer et réduire <LaTeX tex="E" />.
        </LI>
        <LI>
          Pour chacune des valeurs proposées, calculer la valeur de{" "}
          <LaTeX tex="E" /> en précisant l'expression utilisée.
          <OL
            className="columns-4"
            indent={0}
            format={(k) => toLowerAlphabetical(k)}
            separator=")"
          >
            {[
              "x = 0",
              "x = -1",
              "x = {\\large \\frac{1}{2}}",
              "x = {\\large \\frac{2}{3}}",
            ].map((e) => (
              <div>
                <LI>
                  <LaTeX tex={e} />
                </LI>
              </div>
            ))}
          </OL>
        </LI>
      </Exercice>

      <Exercice title="Aire d'une parcelle">
        <BlockBox>
          <Block className="text" ratio={1.5}>
            Une parcelle est formée :
            <UL indent={"1cm"}>
              <LI>d'un terrain carré de 40 m de côté ;</LI>
              <LI>
                d'un autre terrain carré de côté inconnu <LaTeX tex="x" /> ;
              </LI>
              <LI>d'un terrain coloré en vert ci-dessous.</LI>
            </UL>
            <div className="text">
              Les dimensions sont exprimées en m avec <LaTeX tex="x \leq 40" />.{" "}
              <LaTeX tex="\mathcal{A}" /> désigne l'aire en m² du terrain coloré
              en vert.
            </div>
          </Block>
          <Img src={ex_parcelle} className="w-9/10 mx-auto" />
        </BlockBox>

        <LI>
          Calculer <LaTeX tex="\mathcal{A}" /> lorsque :
          <UL className="columns-3" indent={0}>
            {["x = 20", "x = 30", "x = 40"].map((e) => (
              <div>
                <LI>
                  <LaTeX tex={e} />
                </LI>
              </div>
            ))}
          </UL>
        </LI>
        <SubQuestions count={2}>
          <LI>
            Trouver deux méthodes différentes pour exprimer{" "}
            <LaTeX tex="\mathcal{A}" /> en fonction de <LaTeX tex="x" />.
          </LI>
          <LI>
            Développer, puis réduire, chacune des deux expressions trouvées.
          </LI>
        </SubQuestions>
      </Exercice>

      <H1>Identités remarquables</H1>

      <Exercice title="Identités remarquables et fractions">
        <div className="question">
          Développer avec une identité remarquable.
        </div>
        <BlockBox>
          {[
            "\\left(x + {\\large \\frac{1}{2}}\\right)^2",
            "\\left(x - {\\large \\frac{1}{4}}\\right)^2",
            "\\left(x + {\\large \\frac{2}{3}}\\right)\\left(x - {\\large \\frac{2}{3}}\\right)",
          ].map((e) => (
            <LI indent={0} format={(k) => toLowerAlphabetical(k) + ")"}>
              <LaTeX tex={e} />
            </LI>
          ))}
        </BlockBox>
      </Exercice>

      <Exercice title="Produit d'une somme et d'une différence">
        <div className="question">
          On sait que <LaTeX tex="(a + b)(a - b) = a^2 - b^2" />. Développer :
        </div>
        <BlockBox>
          {["(x + 9)(x - 9)", "(x - 1)(x + 1)", "(t + 2)(t - 2)"].map((e) => (
            <LI indent={0} format={(k) => toLowerAlphabetical(k) + ")"}>
              <LaTeX tex={e} />
            </LI>
          ))}
        </BlockBox>
      </Exercice>
    </Document>
  );
}
