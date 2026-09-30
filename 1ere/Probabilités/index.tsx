import { ballbox, balls } from "@assets";
import {
  Document,
  Img,
  ImportantEquation,
  Note,
  NumberLine,
  Problem,
} from "@components";
import {
  Block,
  BlockBox,
  DotLine,
  H1,
  H2,
  LaTeX,
  LI,
  UL,
} from "@weasyprint-tsx/ui";
import "./index.css";

export default function () {
  return (
    <Document title="Probabilités">
      <H1>Probabilité d’un événement</H1>
      <H2>Langage des probabilités</H2>
      <BlockBox>
        <Block ratio={3.5}>
          <p>
            Je dispose d'une urne contenant 3 boules rouges et 3 boules vertes ;
            pour chaque couleur, les boules sont numérotées de 1 à 3.
          </p>
          <p>
            Lorsque je tire une boule au hasard, c'est la chance qui décide
            quelle boule va sortir. C'est ce qu'on appelle une{" "}
            <strong>expérience aléatoire</strong>.
          </p>
          <div className="text">
            Chaque issue possible de mon expérience aléatoire est un{" "}
            <strong>événement élémentaire</strong>. On appelle l'ensemble (càd
            le groupe) de tous les événements élémentaires l'
            <strong>univers des possibles</strong> et on le note{" "}
            <LaTeX tex="\Omega" /> ("oméga" - lettre grecque).
          </div>
        </Block>
        <Img src={ballbox} align="right">
          Urne contenant des boules
        </Img>
      </BlockBox>
      <Problem>
        Pour notre expérience aléatoire <DotLine width={"11cm"} /> est un des
        événements élémentaires.
      </Problem>
      <H2>Probabilité d’un événement</H2>
      <div className="text">
        La <strong>probabilité</strong> <LaTeX tex="p" /> d'un événement est un
        nombre entre 0 et 1 qui nous renseigne sur les chances que cet événement
        se réalise.
      </div>
      <UL>
        {["p = 0", "p = 1"].map((tex) => (
          <LI>
            Si <LaTeX tex={tex} /> : <DotLine width={"16cm"} />
            <DotLine />
          </LI>
        ))}
      </UL>
      <NumberLine
        max={1}
        step={1 / 6}
        tickLabel={(k) => (k == 1 || k == 0 ? k : "")}
        className="mt-[2cm]"
      >
        Échelle de probabilité
      </NumberLine>
      <p>
        Deux événements qui ont la même probabilité sont dits{" "}
        <strong>équiprobables</strong>.
      </p>
      <div className="text">
        Ici j'ai la même probabilité de tirer chacune de mes boules, les{" "}
        <DotLine width={"10cm"} /> de mon expérience sont donc{" "}
        <strong>équiprobables</strong>. Dans ce cas, la probabilité d'un
        événement <LaTeX tex="A" /> est donnée par la formule :
      </div>
      <ImportantEquation
        fontSize={18}
        className="pt-8!"
        numberFormat={false}
        tex={`p(A) = \\large \\frac{ \\hspace{5cm}}{}`}
      />
      <Problem>
        <div className="text">
          Notons les événements <LaTeX tex="V" /> : "La boule tirée est verte",
          et <LaTeX tex="\textcircled{2}" /> : "La boule tirée porte le numéro
          2".
        </div>
        {["V", "\\textcircled{2}"].map((tex) => (
          <>
            <LI>
              Calculer la probabilité <LaTeX tex={`p(${tex})`} /> ("p de{" "}
              <LaTeX tex={tex} />
              ") de l'événement <LaTeX tex={tex} /> :
            </LI>
            <DotLine count={2} />
          </>
        ))}
      </Problem>
      <H1>Opérations sur les événements</H1>

      <H2>Événement contraire</H2>
      <div className="text">
        L'<strong>événement contraire</strong> d'un événement <LaTeX tex="A" />{" "}
        représente tous les cas où <LaTeX tex="A" /> ne se réalise pas. On le
        notera <LaTeX tex="\overline{A}" /> (dire "A barre").{" "}
        <LaTeX tex="\overline{A}" /> n'a aucun événement élémentaire en commun
        avec <LaTeX tex="A" />, on a donc :
        <ImportantEquation
          numberFormat={false}
          inline
          fontSize={16}
          tex="p(\overline{A}) = \hspace{2cm} "
        />
      </div>

      <Problem>
        Décrire et donner la probabilité des événements suivants :
        {["\\overline{V}", "\\overline{\\textcircled{2}}"].map((tex) => (
          <>
            <LI>
              <LaTeX tex={tex} /> : <DotLine width={"16cm"} />
            </LI>
            <DotLine />
          </>
        ))}
      </Problem>
      <H2>Intersection</H2>
      <div className="text">
        L'<strong>intersection</strong> de deux événements est la manière
        mathématique de dire que deux événements se réalisent en même temps.
        Ainsi on notera <LaTeX tex="A \cap B" /> (dire "A inter B") l'événement
        correspondant à A <strong>ET</strong> B.
      </div>
      <div className="text">
        <LaTeX tex="A \cap B" /> regroupe tous les événements élémentaires qui
        sont <DotLine width={"8cm"} />
      </div>
      <Note>
        Il peut arriver que <LaTeX tex="A" /> et <LaTeX tex="B" /> n'aient aucun
        événement élémentaire en commun, dans ce cas :<br />
        <LaTeX numberFormat={false} tex="p(A\cap B) = \hspace{1cm}" />, A et B
        sont dits <strong>incompatibles</strong> <DotLine width={"8cm"} />
      </Note>
      <Problem>
        Pour notre tirage de boules, décrire l'événement{" "}
        <LaTeX tex="V \cap \textcircled{2}" />, indiquer quelles boules
        correspondent à quel événement et donner sa probabilité.
        <BlockBox>
          <Img src={balls} />
          <Block ratio={3}>
            <DotLine count={3} />
          </Block>
        </BlockBox>
      </Problem>
      <H2>Union</H2>
      <div className="text">
        L'<strong>union</strong> de deux événements est la manière mathématique
        de dire que l'un, l'autre ou les deux événements se réalisent. Ainsi on
        notera <LaTeX tex="A \cup B" /> (dire "A union B") l'événement
        correspondant à A <strong>OU</strong> B. <br />
        <em className={"text-xs "}>
          Attention, contrairement au "ou" français ("fromage ou dessert"), le
          "ou" des maths est inclusif ("fromage, dessert ou les deux").
        </em>
      </div>
      <div className="text">
        <LaTeX tex="A \cup B" /> regroupe tous les événements élémentaires qui
        sont <DotLine width={"8cm"} />
      </div>
      <Problem>
        Pour notre tirage de boules, décrire l'événement{" "}
        <LaTeX tex="V \cup \overline{\textcircled{2}}" />, indiquer quelles
        boules correspondent à quel événement et donner sa probabilité.
        <BlockBox>
          <Img src={balls} />
          <Block ratio={3.2}>
            <DotLine count={3} />
          </Block>
        </BlockBox>
      </Problem>
      <div className="text">
        Pour calculer la probabilité de <LaTeX tex="A \cup B" />, on doit bien
        faire attention à : <DotLine width={"7cm"} />
        <DotLine width={"14cm"} />, c'est pour cela que l'on a :
      </div>
      <ImportantEquation
        numberFormat={false}
        fontSize={18}
        tex={`p(A \\cup B) = \\hspace{6cm}`}
        className="mb-[7mm]!"
      />
      <Note headerText="À retenir :">
        <LaTeX tex="\cap = ET " />, <LaTeX tex="\cup = OU " />,{" "}
        <LaTeX tex="\overline{A} = pas\:A" /> et les 3 formules.
      </Note>
    </Document>
  );
}
