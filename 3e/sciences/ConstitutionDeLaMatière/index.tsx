import { atom, periodicTable } from "@/assets";
import { Document, Img } from "@/components";
import {
  DotLine,
  Entry,
  H1,
  H2,
  LaTeX,
  LI,
  Page,
  Table,
  UL,
} from "@weasyprint-tsx/ui";
import "./index.css";

const listUnit = [
  ["G", "Giga"],
  null,
  null,
  ["M", "Méga"],
  null,
  null,
  ["k", "Kilo"],
  null,
  null,
  ["?", "(base)"],
  null,
  null,
  ["m", "Milli"],
  null,
  null,
  ["µ", "Micro"],
  null,
  null,
  ["n", "Nano"],
];

function UnitTable() {
  return (
    <table className="border-collapse mt-2 mb-5 mx-auto ">
      <tr>
        {listUnit.map((e) => (
          <td className="border-solid border border-y-0 first:border-l-0 last:border-r-0 w-10 text-center font-bold px-2">
            {e?.at(0)}
          </td>
        ))}
      </tr>
      <tr>
        {listUnit.map((e) => (
          <td className="border-solid border border-t-0 first:border-l-0 last:border-r-0 w-10 text-center  px-2">
            {e?.at(1)}
          </td>
        ))}
      </tr>
      <tr>
        {Array.from(listUnit, (_) => (
          <td className="h-20 border-solid border border-b-0 first:border-l-0 last:border-r-0" />
        ))}
      </tr>
    </table>
  );
}

export default function ConstitutionDeLaMatiereDocument() {
  return (
    <Document title="Constitution de la Matière">
      <Page>
        <Img src={atom}>Schéma d'un atome</Img>
        <Img src={periodicTable}>Tableau périodique</Img>
      </Page>
      <H1>Atomes</H1>
      <p>
        Les <strong>atomes</strong> sont les briques élémentaires de la matière.
        Ils sont constitués d'un <strong>noyau</strong> chargé positivement
        autour duquel gravitent des <strong>électrons</strong> chargés
        négativement.
      </p>
      <H2>Électrons</H2>
      <p>
        Les <strong>électrons</strong> sont des particules élémentaires
        portant une charge négative.
      </p>
      <div className="text">
        La masse d'un électron est de <LaTeX tex="m_{e^-} = 10^{-30}\:kg" />, sa
        taille est estimée à <LaTeX tex="d_{e^-} = 10^{-22}\:m" />
      </div>
      <H2>Noyau atomique</H2>
      <p>
        Le noyau atomique est constitué de particules élémentaires appelées{" "}
        <strong>nucléons</strong>, il en existe deux types :
      </p>
      <UL>
        <LI>
          Les <strong>protons</strong> portent une charge positive;
        </LI>
        <LI>
          Les <strong>neutrons</strong> ne sont pas chargés;
        </LI>
      </UL>
      <p>Pour un atome, on appellera :</p>
      <UL>
        <LI>
          Le <strong>numéro atomique</strong> noté <LaTeX tex="Z" />, le nombre
          de protons dans le noyau;
        </LI>
        <LI>
          Le <strong>nombre de masse</strong> noté <LaTeX tex="A" />, le nombre
          total de nucléons dans le noyau;
        </LI>
      </UL>
      <div className="text">
        Les nucléons ont une masse de <LaTeX tex="m_{_{N}} = 10^{-27}\:kg" /> et
        une taille de <LaTeX tex="d_{_{N}} = 10^{-15}\:m" />
      </div>
      <div className="text important-equation">
        Un atome est <em> électriquement neutre</em> (il possède autant de
        charges positives que de charges négatives), il possédera donc :
        <DotLine width={"17.4cm"} />
        <DotLine />
      </div>
      <Img src={atom} className="w-3/4 mx-auto">
        Schéma d'un atome
      </Img>
      <p>On remarque que:</p>
      <UL>
        <LI>
          Un nucléon est <LaTeX tex="\large \frac{m_{_{N}}}{m_{e^-}} = " />{" "}
          <DotLine width={"13.5cm"} />
          <DotLine />
        </LI>

        <LI>
          Un nucléon est <LaTeX tex="\large \frac{d_{_{N}}}{d_{e^-}} = " />{" "}
          <DotLine width={"13.5cm"} />
          <DotLine />
        </LI>

        <LI>
          Le rayon du nuage d'électrons est de <LaTeX tex="10^{-10}\:m" />{" "}
          <DotLine width={"10cm"} />
          <DotLine />
        </LI>
      </UL>
      <H2>Tableau périodique</H2>
      <p>
        Il existe 118 types d'atomes différents que l'on appelle{" "}
        <strong>éléments</strong>, on les distingue par leur numéro atomique{" "}
        <LaTeX tex="Z" />. Chaque élément est associé à un symbole, par exemple
        :
      </p>
      <Table
        className="w-8/10 mx-auto"
        orientation="row"
        contentClass="min-w-30 h-20"
      >
        <Entry content={Array(5).fill("")}>Symbole</Entry>
        <Entry content={Array(5).fill("")}>
          <div>
            Numéro Atomique
            <LaTeX tex="Z" class={"block mx-auto"} />
          </div>
        </Entry>
        <Entry content={Array(5).fill("")}>Nom</Entry>
      </Table>
      <p>
        On retrouve tous les éléments connus dans le{" "}
        <strong>tableau périodique des éléments</strong>.
      </p>
      <Img src={periodicTable}>Tableau périodique</Img>


    </Document>
  );
}
