import ballbox from "@assets/probability/ballbox.svg";
import balls from "@assets/probability/balls.svg";
import { Img } from "@components/atoms/Img";
import { NumberLine } from "@components/atoms/NumberLine";
import { Important, Note, P, S } from "@components/atoms/Texts";
import { Cours } from "@components/doctype/Cours";
import { Problem } from "@components/section/Exercice";
import { DotLine } from "zefpdf-lab/ui/Inputs";
import { LaTeX } from "zefpdf-lab/ui/LaTeX";
import { Flex } from "zefpdf-lab/ui/Layout";
import { LI, UL } from "zefpdf-lab/ui/List";
import { Table, TEntry, THeader } from "zefpdf-lab/ui/Table";
import { H1, H2 } from "zefpdf-lab/ui/Titles";
import "./index.css";

const dots = (n: number) =>
  Array.from({ length: n }, () => <DotLine />);

export default function () {
  return (
    <Cours title="Probabilités" lang="fr">
      <H1>Probabilité d’un événement</H1>
      <H2>Langage des probabilités</H2>
      <Flex gap="5mm" align="center">
        <div className="flex-[3.5]">
          <P>
            Je dispose d'une urne contenant 3 balles rouges et 3 balles vertes ;
            pour chaque couleur, les balles sont numérotées de 1 à 3.
          </P>
          <P>
            Lorsque je tire une balle au hasard, c'est la chance qui décide
            quelle balle va sortir. C'est ce qu'on appelle une{" "}
            <S>expérience aléatoire</S>.
          </P>
          <P>
            Chaque issue possible de mon expérience aléatoire est un{" "}
            <S>événement élémentaire</S>. On appelle l'ensemble (càd le groupe)
            de tous les événements élémentaires l'
            <S>univers des possibles</S> et on le note <LaTeX tex="\Omega" />{" "}
            ("oméga" - lettre grecque).
          </P>
        </div>
        <Img src={ballbox} align="right" className="flex-1">
          Urne contenant des balles
        </Img>
      </Flex>
      <Problem>
        Pour notre expérience aléatoire{" "}
        <DotLine width={"11cm"} /> est un des événements
        élémentaires.
      </Problem>
      <H2>Probabilité d’un événement</H2>
      <P>
        La <S>probabilité</S> <LaTeX tex="p" /> d'un événement est un nombre
        entre 0 et 1 qui nous renseigne sur les chances que cet événement se
        réalise.
      </P>
      <UL>
        {["p = 0", "p = 1"].map((tex) => (
          <LI>
            Si <LaTeX tex={tex} /> :{" "}
            <DotLine width={"16cm"} />
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
      <P>
        Deux événements qui ont la même probabilité sont dits{" "}
        <S>équiprobables</S>.
      </P>
      <P>
        Ici j'ai la même probabilité de tirer chacune de mes balles, les{" "}
        <DotLine width={"8cm"} /> de mon expérience sont donc{" "}
        <S>équiprobables</S>. Dans ce cas, la probabilité d'un événement{" "}
        <LaTeX tex="A" /> est donnée par la formule :
      </P>
      <Important>
        <LaTeX noFormatNumber tex={`p(A) = \\large \\frac{ \\hspace{5cm}}{}`} />
      </Important>
      <Problem>
        <P>
          Notons les événements <LaTeX tex="V" /> : "La balle tirée est verte",
          et <LaTeX tex="\text{\textcircled{2}}" /> : "La balle tirée porte le
          numéro 2".
        </P>
        {["V", "\\text{\\textcircled{2}}"].map((tex) => (
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
      <Note title="À retenir :">
        <LaTeX noFormatNumber tex="\text{ev. elem.} = \text{issues de base}" />,{" "}
        <LaTeX
          noFormatNumber
          tex='\text{Proba} = \frac{\text{ nbr.de cas "content"}}{\text{nbr. total de cas} } \text{(entre 0 et 1 ou en \%)}'
        />
      </Note>
      <H1>Opérations sur les événements</H1>
      <H2>Événement contraire</H2>
      <P>
        L'<S>événement contraire</S> d'un événement <LaTeX tex="A" /> représente
        tous les cas où <LaTeX tex="A" /> ne se réalise pas. On le notera{" "}
        <LaTeX tex="\overline{A}" /> (dire "A barre").{" "}
        <LaTeX tex="\overline{A}" /> n'a aucun événement élémentaire en commun
        avec <LaTeX tex="A" />, on a donc :
        <Important>
          <LaTeX noFormatNumber tex="p(\overline{A}) = \hspace{2cm} " />
        </Important>
      </P>
      <Problem>
        Décrire et donner la probabilité des événements suivants :
        {["\\overline{V}", "\\overline{\\text{\\textcircled{2}}}"].map(
          (tex) => (
            <>
              <LI>
                <LaTeX tex={tex} /> :{" "}
                <DotLine width={"16cm"} />
              </LI>
              <DotLine />
            </>
          ),
        )}
      </Problem>
      <H2>Intersection</H2>
      <P>
        L'<S>intersection</S> de deux événements est la manière mathématique de
        dire que deux événements se réalisent en même temps. Ainsi on notera{" "}
        <LaTeX tex="A \cap B" /> (dire "A inter B") l'événement correspondant à
        A <S>ET</S> B.
      </P>
      <P>
        <LaTeX tex="A \cap B" /> regroupe tous les événements élémentaires qui
        sont <DotLine width={"8cm"} />
      </P>
      <Note title="Note :">
        Il peut arriver que <LaTeX tex="A" /> et <LaTeX tex="B" /> n'aient aucun
        événement élémentaire en commun, dans ce cas :<br />
        <LaTeX noFormatNumber tex="p(A\cap B) = \hspace{1cm}" />, A et B sont
        dits <S>incompatibles</S> <DotLine width={"8cm"} />
      </Note>
      <Problem>
        Pour notre tirage de balles, décrire l'événement{" "}
        <LaTeX tex="V \cap \text{\textcircled{2}}" />, indiquer quelles balles
        correspondent à quel événement et donner sa probabilité.
        <Flex gap="5mm" align="center">
          <Img src={balls} className="flex-1" />
          <div className="flex-[3]">
            <DotLine count={3} />
          </div>
        </Flex>
      </Problem>
      <H2>Union</H2>
      <P>
        L'<S>union</S> de deux événements est la manière mathématique de dire
        que l'un, l'autre ou les deux événements se réalisent. Ainsi on notera{" "}
        <LaTeX tex="A \cup B" /> (dire "A union B") l'événement correspondant à
        A <S>OU</S> B.{" "}
        <em>
          Attention, contrairement au "ou" français qui est exclusif ("fromage
          ou dessert mais pas les deux"), le "ou" des maths est inclusif
          ("fromage, dessert ou les deux").
        </em>
      </P>
      <P>
        <LaTeX tex="A \cup B" /> regroupe tous les événements élémentaires qui
        sont <DotLine width={"8cm"} />
      </P>
      <Problem>
        Pour notre tirage de balles, décrire l'événement{" "}
        <LaTeX tex="V \cup \overline{\text{\textcircled{2}}}" />, indiquer
        quelles balles correspondent à quel événement et donner sa probabilité.
        <Flex gap="5mm" align="center">
          <Img src={balls} className="flex-1" />
          <div className="flex-[3.2]">
            <DotLine count={3} />
          </div>
        </Flex>
      </Problem>
      <P>
        Pour calculer la probabilité de <LaTeX tex="A \cup B" />, on doit bien
        faire attention à : <DotLine width={"7cm"} />
        <DotLine width={"14cm"} />, c'est pour cela que l'on
        a :
      </P>
      <Important className="mb-[7mm]">
        <LaTeX noFormatNumber tex={`p(A \\cup B) = \\hspace{6cm}`} />
      </Important>
      <Note title="À retenir :">
        <LaTeX tex="\overline{A} = pas\:A" />, <LaTeX tex="\cap = ET " />,{" "}
        <LaTeX tex="\cup = OU^+ " />.
      </Note>
      <H2>Tableaux croisés</H2>
      <P>
        On peut utiliser des tableaux croisés pour rassembler les données
        concernant deux caractères.
      </P>
      <Problem>
        Remplir le tableau avec le nombre de balles correspondant à chaque
        événement.
        <Table className="w-5/6 mx-auto">
          <THeader
            content={[
              "",
              <LaTeX tex="V" />,
              <LaTeX tex="\overline{V}" />,
              "Total",
            ]}
          />
          {[
            <LaTeX tex="\text{\textcircled{1}}" />,
            <LaTeX tex="\text{\textcircled{2}}" />,
            <LaTeX tex="\text{\textcircled{3}}" />,
            "Total",
          ].map((header) => (
            <TEntry header={header} content={dots(3)} />
          ))}
        </Table>
      </Problem>
      <H1>Probabilité conditionnelle</H1>
      <P>
        Dans certains cas, il se peut que l'on dispose d'informations
        incomplètes sur le résultat d'une expérience aléatoire. On peut par
        exemple savoir qu'un événement <LaTeX tex="A" /> est réalisé, mais se
        demander quelle est la probabilité qu'un événement <LaTeX tex="B" /> le
        soit aussi.
      </P>
      <P>
        On notera alors <LaTeX tex="p_A(B)" /> (dire "probabilité de B sachant
        A"), la probabilité que <LaTeX tex="B" /> se réalise alors que l'on SAIT
        que <LaTeX tex="A" /> s'est réalisé.
      </P>
      <Problem>
        Le tirage des balles dans l'urne a lieu dans la salle voisine. Lionel,
        qui annonce les résultats, crie : "La balle 2 est sortie".
        <LI>
          Sur le tableau ci-dessus, indiquer dans quelle colonne/ligne on se
          trouve.
        </LI>
        <LI>
          Donner <LaTeX tex="p_{\text{\textcircled{2}}}(V)" />, la probabilité
          que la balle de Lionel soit verte.
        </LI>
        <DotLine count={2} />
      </Problem>
      <P>
        En fait, lorsque je regarde <LaTeX tex="p_A(B)" />, tout se passe comme
        si l'événement <LaTeX tex="A" /> était le nouvel{" "}
        <DotLine width={"4.5cm"} />
        <DotLine width={"5cm"} />, les issues qui réalisent{" "}
        <LaTeX tex="B" /> sont donc celles qui appartiennent à :{" "}
        <DotLine width={"5cm"} /> donc à{" "}
        <DotLine width={"3cm"} />.
      </P>
      <P>Ainsi on a la formule :</P>
      <Important>
        <LaTeX noFormatNumber tex={`p_A(B) = \\frac{\\hspace{3cm}}{}`} />
      </Important>

      <Note title="À retenir :">
        Tableau croisé <LaTeX tex="=" /> faire le « carré magique », proba. de{" "}
        <LaTeX tex="B" /> sachant <LaTeX tex="A" /> <LaTeX tex="=" />{" "}
        <LaTeX tex="A" /> devient le nouvel univers.
      </Note>

      <Problem header="Exercice type CCF">
        Sur une ligne de production de drones, les drones produits peuvent avoir
        deux défauts.
        <UL className="columns-2">
          <LI>
            <LaTeX tex="A" /> : ailes tordues
          </LI>
          <LI>
            <LaTeX tex="F" /> : fuselage fissuré
          </LI>
        </UL>
        <Flex gap="5mm">
          <Table className="flex-1 w-full">
            <THeader
              content={[
                "",
                <LaTeX tex="A" />,
                <LaTeX tex="\overline{A}" />,
                "Total",
              ]}
            />
            <TEntry header={<LaTeX tex="F" />} content={[...dots(3)]} />
            <TEntry
              header={<LaTeX tex="\overline{F}" />}
              content={[8, <DotLine />, 485]}
            />
            <TEntry
              header="Total"
              content={[<DotLine />, 350, 500]}
            />
          </Table>
          <div className="flex-1">
            <LI>
              Décrire <LaTeX tex="\overline{A}" /> et donner sa probabilité.
            </LI>
            <LI>Compléter le tableau.</LI>
            <LI>
              Donner la probabilité qu'un drone pris au hasard soit défectueux
              (défaut <LaTeX tex="A" /> ou <LaTeX tex="F" />
              ).
            </LI>
          </div>
        </Flex>
        <LI>
          Sachant qu'un drone a les ailes tordues, quelle est la probabilité que
          son fuselage soit fissuré ?
        </LI>
      </Problem>
    </Cours>
  );
}
