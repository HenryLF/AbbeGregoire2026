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
  Entry,
  H1,
  H2,
  LaTeX,
  LI,
  Table,
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
            Je dispose d'une urne contenant 3 balles rouges et 3 balles vertes ;
            pour chaque couleur, les balles sont numérotées de 1 à 3.
          </p>
          <p>
            Lorsque je tire une balle au hasard, c'est la chance qui décide
            quelle balle va sortir. C'est ce qu'on appelle une{" "}
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
          Urne contenant des balles
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
          </LI>
        ))}
      </UL>
      <NumberLine
        max={1}
        step={1 / 6}
        tickLabel={(k) => (k == 1 || k == 0 ? k : "")}
        className="mt-[1.35cm]"
      >
        Échelle de probabilité
      </NumberLine>
      <p>
        Deux événements qui ont la même probabilité sont dits{" "}
        <strong>équiprobables</strong>.
      </p>
      <div className="text">
        Ici j'ai la même probabilité de tirer chacune de mes balles, les{" "}
        <DotLine width={"8cm"} /> de mon expérience sont donc{" "}
        <strong>équiprobables</strong>. Dans ce cas, la probabilité d'un
        événement <LaTeX tex="A" /> est donnée par la formule :
      </div>
      <ImportantEquation
        fontSize={24}
        className="pt-8!"
        numberFormat={false}
        tex={`p(A) = \\large \\frac{ \\hspace{5cm}}{}`}
      />
      <Problem>
        <div className="text">
          Notons les événements <LaTeX tex="V" /> : "La balle tirée est verte",
          et <LaTeX tex="\textcircled{2}" /> : "La balle tirée porte le numéro
          2".
        </div>
        {["V", "\\textcircled{2}"].map((tex) => (
          <>
            <LI>
              Calculer la probabilité <LaTeX tex={`p(${tex})`} /> ("p de{" "}
              <LaTeX tex={tex} />
              ") de l'événement <LaTeX tex={tex} /> :
            </LI>
            <DotLine count={3} />
          </>
        ))}
      </Problem>
      <Note headerText="À retenir :">
        <LaTeX tex="\text{ev. elem.} = \text{issues de base}" />,{" "}
        <LaTeX tex='\text{Proba} = \frac{\text{ nbr.de cas "content"}}{\text{nbr. total de cas} } \text{(entre 0 et 1 ou en \%)}' />
      </Note>
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
        Pour notre tirage de balles, décrire l'événement{" "}
        <LaTeX tex="V \cap \textcircled{2}" />, indiquer quelles balles
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
        correspondant à A <strong>OU</strong> B.{" "}
        <em className={"text-xs "}>
          Attention, contrairement au "ou" français qui est exclusif ("fromage
          ou dessert mais pas les deux"), le "ou" des maths est inclusif
          ("fromage, dessert ou les deux").
        </em>
      </div>
      <div className="text">
        <LaTeX tex="A \cup B" /> regroupe tous les événements élémentaires qui
        sont <DotLine width={"8cm"} />
      </div>
      <Problem>
        Pour notre tirage de balles, décrire l'événement{" "}
        <LaTeX tex="V \cup \overline{\textcircled{2}}" />, indiquer quelles
        balles correspondent à quel événement et donner sa probabilité.
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
        <LaTeX tex="\overline{A} = pas\:A" />, <LaTeX tex="\cap = ET " />,{" "}
        <LaTeX tex="\cup = OU^+ " />.
      </Note>
      <H2>Tableaux croisés</H2>
      <div className="text">
        On peut utiliser des tableaux croisés pour rassembler les données
        concernant deux caractères.
      </div>
      <Problem>
        Remplir le tableau avec le nombre de balles correspondant à chaque
        événement.
        <Table className="w-5/6 mx-auto" contentClass="min-w-1/4 p-5">
          <Entry
            cellBg="var(--wsx--table--header-color)"
            contentClass="font-bold"
            content={[
              <LaTeX tex="\textcircled{1}" />,
              <LaTeX tex="\textcircled{2}" />,
              <LaTeX tex="\textcircled{3}" />,
              "Total",
            ]}
          >
            {""}
          </Entry>
          <Entry content={Array(4).fill(<DotLine />)}>
            <LaTeX tex="V" />
          </Entry>
          <Entry content={Array(4).fill(<DotLine />)}>
            <LaTeX tex="\overline{V}" />
          </Entry>
          <Entry content={Array(4).fill(<DotLine />)}>Total</Entry>
        </Table>
      </Problem>
      <H1>Probabilité conditionnelle</H1>
      <div className="text">
        Dans certains cas, il se peut que l'on dispose d'informations
        incomplètes sur le résultat d'une expérience aléatoire. On peut par
        exemple savoir qu'un événement <LaTeX tex="A" /> est réalisé, mais se
        demander quelle est la probabilité qu'un événement <LaTeX tex="B" /> le
        soit aussi.
      </div>
      <div className="text">
        On notera alors <LaTeX tex="p_A(B)" /> (dire "probabilité de B sachant
        A"), la probabilité que <LaTeX tex="B" /> se réalise alors que l'on SAIT
        que <LaTeX tex="A" /> s'est réalisé.
      </div>
      <Problem>
        Le tirage des balles dans l'urne a lieu dans la salle voisine. Lionel,
        qui annonce les résultats, crie : "La balle 2 est sortie".
        <LI>
          Sur le tableau ci-dessus, indiquer dans quelle colonne/ligne on se
          trouve.
        </LI>
        <LI>
          Donner <LaTeX tex="p_{\textcircled{2}}(V)" />, la probabilité que la
          balle de Lionel soit verte.
        </LI>
        <DotLine count={2} />
      </Problem>
      <div className="text">
        En fait, lorsque je regarde <LaTeX tex="p_A(B)" />, tout se passe comme
        si l'événement <LaTeX tex="A" /> était le nouvel{" "}
        <DotLine width={"4.5cm"} />
        <DotLine width={"5cm"} />, les issues qui réalisent <LaTeX tex="B" />{" "}
        sont donc celles qui appartiennent à : <DotLine width={"5cm"} /> donc à{" "}
        <DotLine width={"3cm"} />.
      </div>
      <p>Ainsi on a la formule :</p>
      <ImportantEquation
        fontSize={16}
        numberFormat={false}
        className="pt-5!"
        tex={`p_A(B) = \\frac{\\hspace{3cm}}{}`}
      />

      <Note headerText="À retenir :">
        Tableau croisé <LaTeX tex="=" /> faire le « carré magique »,
        proba. de <LaTeX tex="B" /> sachant <LaTeX tex="A" /> <LaTeX tex="=" />{" "}
        <LaTeX tex="A" /> devient le nouvel univers.
      </Note>

      <Problem text={"Exercice type CCF :"}>
        Sur une ligne de production de drones, les drones produits peuvent avoir
        deux défauts.
        <UL className={"columns-2"}>
          <LI>
            <LaTeX tex="A" /> : ailes tordues
          </LI>
          <LI>
            <LaTeX tex="F" /> : fuselage fissuré
          </LI>
        </UL>
        <BlockBox>
          <Table className={"w-full"} contentClass="min-w-1/4">
            <Entry
              contentClass="font-bold"
              cellBg="var(--wsx--table--header-color)"
              content={[
                <LaTeX tex="F" />,
                <LaTeX tex="\overline{F}" />,
                "Total",
              ]}
            >
              {""}
            </Entry>
            <Entry content={[<DotLine />, 8, <DotLine />]}>
              <LaTeX tex="A" />
            </Entry>
            <Entry content={[<DotLine />, <DotLine />, 350]}>
              <LaTeX tex="\overline{A}" />
            </Entry>

            <Entry content={[<DotLine />, 485, 500]}>Total</Entry>
          </Table>
          <Block>
            <LI>
              Décrire <LaTeX tex="\overline{A}" /> et donner sa
              probabilité.{" "}
            </LI>
            <LI>Compléter le tableau.</LI>
            <LI>
              Donner la probabilité qu'un drone pris au hasard soit défectueux
              (défaut <LaTeX tex="A" /> ou <LaTeX tex="F" />
              ).
            </LI>
          </Block>
        </BlockBox>
        <LI>
          Sachant qu'un drone a les ailes tordues, quelle est la probabilité que
          son fuselage soit fissuré ?
        </LI>
      </Problem>
    </Document>
  );
}
