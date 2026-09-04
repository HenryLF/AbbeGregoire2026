import { echelle_grandeur } from "@/assets";
import { Details, Img, ImportantEquation, Problem } from "@/components";
import { BlockBox, DotLine, H1, H2, LaTeX, LI, UL } from "@weasyprint-tsx/ui";
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

export default function Document() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>My Document</title>
        <link rel="stylesheet" href="index.css" />
      </head>
      <body>
        <H1>Notation scientifique</H1>
        <p>
          En sciences, afin de pouvoir communiquer des nombres très grands ou
          très petits (c'est-à-dire avec beaucoup de zéros avant ou après la
          virgule), on utilise la <strong>notation scientifique</strong>.
        </p>
        <div className="text">
          Un nombre écrit en notation scientifique se présente comme ceci :
          <ImportantEquation tex="a = 5.38 \times 10^5" inline />
        </div>
        <p>
          c'est-à-dire :{" "}
          <em>
            un nombre avec un chiffre avant la virgule multiplié par une{" "}
            <strong>puissance de 10</strong>.
          </em>
        </p>
        <H2>Puissance de 10</H2>
        <div className="text">
          Une <strong>puissance de 10</strong> est une notation pour désigner le
          nombre 10 multiplié un certain nombre de fois par lui-même. Ainsi{" "}
          <LaTeX tex="10^4 = 10 \times 10 \times 10 \times 10  = " />{" "}
          <DotLine width={"10cm"} />
        </div>
        En pratique :
        <div className="important-equation w-9/10 pb-10!">
          <UL className="columns-2 text-center" indent={0}>
            <LI>
              <LaTeX tex="10^n" /> représente un 1 suivi de <LaTeX tex="n" />{" "}
              zéros.
              <div className="table mx-auto  text-xl">
                <LaTeX tex="10^n = 1000\:...\:000" />
              </div>
            </LI>
            <LI>
              <LaTeX tex="10^{\color{red}-n}" /> représente <LaTeX tex="n" />{" "}
              zéros suivis d'un 1.
              <div className="table mx-auto text-xl">
                <LaTeX tex="10^{\color{red}-n} = 0.000\:...\:001" />
              </div>
            </LI>
          </UL>
        </div>
        <div className="text">
          Les puissances de 10 <strong>positives</strong> représentent des
          nombres <DotLine width="8cm" />
        </div>
        <div className="text">
          Les puissances de 10 <strong>négatives</strong> représentent des
          nombres <DotLine width="8cm" />
        </div>
        <Problem>
          <LI>
            Pour chacune des puissances de 10 suivantes, la noter sous forme
            décimale.{" "}
          </LI>
          <BlockBox className="mb-15">
            {[3, -2, -4, 6].map((e) => (
              <div>
                <LaTeX tex={`10^{${e}} = `} /> <DotLine width={"3cm"} />
              </div>
            ))}
          </BlockBox>

          <LI>
            Pour chacun des nombres suivants, le noter sous forme d'une
            puissance de 10.
          </LI>
          <BlockBox className="mb-15">
            {[100, 0.1, 10000000000, 0.00001].map((e, k) => (
              <div>
                <LaTeX tex={`${e} = `} />{" "}
                <DotLine width={k > 1 ? "1cm" : "3cm"} />
              </div>
            ))}
          </BlockBox>
        </Problem>
        <H2>Multiples d'unités</H2>
        <div className="text">
          Chaque unité possède des multiples associés à une puissance de 10 par
          exemple : le <strong>millimètre</strong> (mm) est un multiple du mètre
          (m) tel que : <LaTeX>1m =10^3 mm = </LaTeX> <DotLine width={"2cm"} />.
        </div>
        <UnitTable />
        <Details>Tableau récapitulatif des multiples d'unités</Details>
        <Problem>
          <LI>À combien d'octets (noté o) correspond 1 Go ?</LI>
          <DotLine />

          <LI>À combien de grammes (noté g) correspond 1 µg ?</LI>
          <DotLine />
        </Problem>
        <H1>Échelle de grandeurs</H1>
        <Img src={echelle_grandeur} className={"h-230 w-auto mx-auto"} />
        <Problem>
          <LI>
            Sur l'échelle de grandeur ci-dessus, placer les multiples du mètre
            (km, mm, cm...)
          </LI>

          <LI>
            Sur l'échelle de grandeur ci-dessus, placer les objets suivants :
          </LI>
          <UL indent={0} className="columns-2 text-xs">
            {[
              <>
                Le diamètre d'un noyau atomique (<LaTeX tex="10^{-15}" /> m)
              </>,
              <>Les dimensions d'une molécule d'eau (10 nm)</>,
              <>L'épaisseur d'un globule rouge (1,8 µm)</>,
              <>Une fourmi (1 mm)</>,
              <>L'homme (1,80 m)</>,
              <>Burj Khalifa – plus haute tour du monde (829 m)</>,
              <>Le diamètre terrestre (12800 km)</>,
              <>
                Le diamètre solaire (<LaTeX tex="10^{6}" /> km)
              </>,
              <>La distance Terre/Soleil (150 000 000 km)</>,
              <>
                La taille du système solaire (<LaTeX tex="10^{13}" /> m)
              </>,
              <>
                Une année-lumière (<LaTeX tex="10^{13}" />
                km)
              </>,
              <>
                Le diamètre de la Voie lactée (<LaTeX tex="10^{21}" /> km)
              </>,
            ].map((e) => (
              <LI>
                {e}
                <DotLine />
              </LI>
            ))}
          </UL>
        </Problem>
      </body>
    </html>
  );
}
