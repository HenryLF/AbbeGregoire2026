import exParcelle from "@assets/algebra/ex-parcelle.svg";
import { Img } from "@components/atoms/Img";
import { P } from "@components/atoms/Texts";
import { Activites } from "@components/doctype/Activites";
import { Exercice, SubQuestion } from "@components/section/Exercice";
import { LaTeX } from "zefpdf-lab/ui/LaTeX";
import { Flex } from "zefpdf-lab/ui/Layout";
import { LI, OL, toLowerAlpha, UL } from "zefpdf-lab/ui/List";
import { H1 } from "zefpdf-lab/ui/Titles";
import "./index.css";

const alpha = (k: number) => toLowerAlpha(k) + ")";

/** a), b), c)… items laid out on one row */
const AlphaRow = ({
  items,
  className,
}: {
  items: string[];
  className?: string;
}) => (
  <OL marker={alpha} indent={0}>
    <Flex className={className}>
      {items.map((e) => (
        <LI className="flex-1">
          <LaTeX tex={e} />
        </LI>
      ))}
    </Flex>
  </OL>
);

export default function NombresEtCalculActivites() {
  return (
    <Activites title="Nombres et Calculs" lang="fr">
      <H1>Puissances ou Exposant</H1>
      <Exercice title="Calculs de puissances">
        <P>Calculer :</P>
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
        <P>
          Écrire les quotients sous la forme <LaTeX tex="a^{-n}" /> :
        </P>
        <UL indent={0}>
          <Flex>
            {[
              "A = \\large \\frac{1}{3 \\times 3 \\times 3 \\times 3 \\times 3 }",
              "B = \\large \\frac{1}{(-6) \\times(-6) \\times(-6) }",
              "C = \\large \\frac{1}{(-6)^8 \\times(-1)^8 }",
            ].map((e) => (
              <LI className="flex-1">
                <LaTeX tex={e} />
              </LI>
            ))}
          </Flex>
        </UL>
      </Exercice>

      <Exercice title="Écriture décimale">
        <P>Donner l'écriture décimale de chaque nombre.</P>
        <AlphaRow items={["2^3", "(-3)^2", "2^{-1}", "5^{-2}"]} />
      </Exercice>

      <Exercice title="Écriture décimale des puissances de 10">
        <P>Donner l'écriture décimale de chaque nombre.</P>
        <AlphaRow items={["10^3", "10^9", "10^{-1}", "10^{-4}"]} />
      </Exercice>

      <Exercice title="Écrire à l'aide d'une puissance de 10">
        <P>Écrire chaque nombre à l'aide d'une puissance de 10.</P>
        <AlphaRow items={["100000", "1", "0.01", "0.00001"]} />
      </Exercice>

      <Exercice title="Produit de puissances">
        <P>Recopier et compléter.</P>
        <AlphaRow
          items={[
            "2^2 \\times 2^5 = 2^{\\cdots}",
            "3^4 \\times 3^5 = 3^{\\cdots}",
            "10^4 \\times 10 = 10^{\\cdots}",
            "6^{-4} \\times 6^2 = 6^{\\cdots}",
          ]}
        />
      </Exercice>

      <Exercice title="Quotient de puissances">
        <P>Recopier et compléter.</P>
        <OL marker={alpha}>
          <Flex className="flex-wrap">
            {[
              "{\\large \\frac{8^5}{8^3}} = 8^{\\cdots}",
              "{\\large \\frac{7^3}{7}} = 7^{\\cdots}",
              "{\\large \\frac{10^6}{10^{-1}}} = 10^{\\cdots}",
              "{\\large \\frac{5^{-3}}{5^{-6}}} = 5^{\\cdots}",
              "{\\large \\frac{2^2}{2^4}} = 2^{\\cdots}",
              "{\\large \\frac{10^3}{10^6}} = 10^{\\cdots}",
            ].map((e) => (
              <LI className="w-1/3">
                <LaTeX tex={e} />
              </LI>
            ))}
          </Flex>
        </OL>
      </Exercice>

      <Exercice title="Puissance d'une puissance">
        <P>Recopier et compléter.</P>
        <OL marker={alpha} indent={0}>
          <Flex gap="2mm">
            {(
              [
                ["(2^5)^3 = 2^{\\cdots}", "flex-1"],
                ["(3^{-4})^2 = 3^{\\cdots}", "flex-1"],
                ["(10^3)^{-2} = 10^{\\cdots}", "flex-1"],
                ["(3x)^2 = \\dots\\dots\\, x^{\\cdots}", "flex-[1.2]"],
                ["(-2x)^3 = \\dots\\dots\\, x^{\\cdots}", "flex-[1.5]"],
              ] as const
            ).map(([e, size]) => (
              <LI className={size}>
                <LaTeX tex={e} />
              </LI>
            ))}
          </Flex>
        </OL>
      </Exercice>

      <Exercice title="Forme fractionnaire">
        <P>Écrire chaque nombre sous forme fractionnaire.</P>
        <AlphaRow
          items={[
            "\\left({\\large \\frac{3}{4}}\\right)^2",
            "\\left(-{\\large \\frac{5}{2}}\\right)^3",
            "\\left({\\large \\frac{1}{2}}\\right)^4",
            "\\left(-{\\large \\frac{1}{2}}\\right)^4",
          ]}
        />
      </Exercice>

      <H1>Développement</H1>
      <Exercice title="Distributivité simple">
        <P>Développer.</P>
        <AlphaRow items={["2(x - 4)", "-3(2x - 1)", "4(4 - 3t)"]} />
      </Exercice>

      <Exercice title="Double distributivité">
        <P>Développer et réduire.</P>
        <AlphaRow
          items={[
            "(2x + 5)(x + 1)",
            "(2y - 1)(3y + 2)",
            "(x + 7)(3x - 1)",
            "(2t - 3)(2t - 1)",
          ]}
        />
      </Exercice>

      <Exercice title="Développer et réduire">
        <P>Développer et réduire.</P>
        <UL indent={0} className="columns-2">
          {[
            "A = (4x + 1)(x - 4) - 4x(1 - 5x)",
            "B = 2x(3x - 1) - (1 - 4x)\\left({\\large \\frac{1}{2}}x + 1\\right)",
            "C = (7t + 3)(t - 4) - (t - 2)(t + 6)",
            "D = 2x(8x - 1) - (4x - 5)(4x - 1)",
          ].map((e) => (
            <LI>
              <LaTeX tex={e} />
            </LI>
          ))}
        </UL>
      </Exercice>

      <Exercice title="Développer puis calculer">
        <P>
          On donne <LaTeX tex="E = (3x - 5)(2x - 1) - 4(x - 1)" />.
        </P>
        <LI>
          Développer et réduire <LaTeX tex="E" />.
        </LI>
        <LI>
          Pour chacune des valeurs proposées, calculer la valeur de{" "}
          <LaTeX tex="E" /> en précisant l'expression utilisée.
          <OL className="columns-4" indent={0} marker={alpha}>
            {[
              "x = 0",
              "x = -1",
              "x = {\\large \\frac{1}{2}}",
              "x = {\\large \\frac{2}{3}}",
            ].map((e) => (
              <LI>
                <LaTeX tex={e} />
              </LI>
            ))}
          </OL>
        </LI>
      </Exercice>

      <Exercice title="Aire d'une parcelle">
        <Flex>
          <div className="flex-[1.5]">
            <P>Une parcelle est formée :</P>
            <UL indent="1cm">
              <LI>d'un terrain carré de 40 m de côté ;</LI>
              <LI>
                d'un autre terrain carré de côté inconnu <LaTeX tex="x" /> ;
              </LI>
              <LI>d'un terrain coloré en vert ci-dessous.</LI>
            </UL>
            <P>
              Les dimensions sont exprimées en m avec <LaTeX tex="x \leq 40" />.{" "}
              <LaTeX tex="\mathcal{A}" /> désigne l'aire en m² du terrain
              coloré en vert.
            </P>
          </div>
          <Img src={exParcelle} className="flex-1 mx-auto" />
        </Flex>

        <LI>
          Calculer <LaTeX tex="\mathcal{A}" /> lorsque :
          <UL className="columns-3" indent={0}>
            {["x = 20", "x = 30", "x = 40"].map((e) => (
              <LI>
                <LaTeX tex={e} />
              </LI>
            ))}
          </UL>
        </LI>
        <SubQuestion count={2}>
          <LI>
            Trouver deux méthodes différentes pour exprimer{" "}
            <LaTeX tex="\mathcal{A}" /> en fonction de <LaTeX tex="x" />.
          </LI>
          <LI>
            Développer, puis réduire, chacune des deux expressions trouvées.
          </LI>
        </SubQuestion>
      </Exercice>

      <H1>Identités remarquables</H1>

      <Exercice title="Identités remarquables et fractions">
        <P>Développer avec une identité remarquable.</P>
        <AlphaRow
          items={[
            "\\left(x + {\\large \\frac{1}{2}}\\right)^2",
            "\\left(x - {\\large \\frac{1}{4}}\\right)^2",
            "\\left(x + {\\large \\frac{2}{3}}\\right)\\left(x - {\\large \\frac{2}{3}}\\right)",
          ]}
        />
      </Exercice>

      <Exercice title="Produit d'une somme et d'une différence">
        <P>
          On sait que <LaTeX tex="(a + b)(a - b) = a^2 - b^2" />. Développer :
        </P>
        <AlphaRow items={["(x + 9)(x - 9)", "(x - 1)(x + 1)", "(t + 2)(t - 2)"]} />
      </Exercice>
    </Activites>
  );
}
