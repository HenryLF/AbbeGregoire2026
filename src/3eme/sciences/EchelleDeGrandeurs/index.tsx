import echelleGrandeur from "@assets/measurement/echelle-grandeur.svg";
import { Img } from "@components/atoms/Img";
import { Details, Important, P, S } from "@components/atoms/Texts";
import { Cours } from "@components/doctype/Cours";
import { Problem } from "@components/section/Exercice";
import { DotLine } from "zefpdf-lab/ui/Inputs";
import { LaTeX } from "zefpdf-lab/ui/LaTeX";
import { Flex } from "zefpdf-lab/ui/Layout";
import { LI, UL } from "zefpdf-lab/ui/List";
import { Table, TEntry, THeader } from "zefpdf-lab/ui/Table";
import { H1, H2 } from "zefpdf-lab/ui/Titles";
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
    <Table className="mt-2 w-full">
      <THeader content={listUnit.map((e) => e?.[0] ?? "")} />
      <TEntry content={listUnit.map((e) => e?.[1] ?? "")} />
      <TEntry content={listUnit.map(() => "")} className="h-20" />
    </Table>
  );
}

export default function EchelleDeGrandeursDocument() {
  return (
    <Cours title="Échelle de Grandeurs" lang="fr">
      <H1>Notation scientifique</H1>
      <P>
        En sciences, afin de pouvoir communiquer des nombres très grands ou très
        petits (c'est-à-dire avec beaucoup de zéros avant ou après la virgule),
        on utilise la <S>notation scientifique</S>.
      </P>
      <P>
        Un nombre écrit en notation scientifique se présente comme ceci :
        <Important>
          <LaTeX tex="a = 5.38 \times 10^5" />
        </Important>
      </P>
      <P>
        c'est-à-dire :{" "}
        <em>
          un nombre avec un chiffre avant la virgule multiplié par une{" "}
          <S>puissance de 10</S>.
        </em>
      </P>
      <H2>Puissance de 10</H2>
      <P>
        Une <S>puissance de 10</S> est une notation pour désigner le nombre 10
        multiplié un certain nombre de fois par lui-même. Ainsi{" "}
        <LaTeX tex="10^4 = 10 \times 10 \times 10 \times 10  = " />{" "}
        <DotLine width="10cm" />
      </P>
      <P>En pratique :</P>
      <Important className="w-9/10">
        <Flex gap="1cm" className="text-center">
          <div className="flex-1">
            <LaTeX tex="10^n" /> représente un 1 suivi de <LaTeX tex="n" />{" "}
            zéros.
            <LaTeX tex="\large 10^n = 1000\:...\:000" />
          </div>
          <div className="flex-1">
            <LaTeX tex="10^{\color{red}-n}" /> représente <LaTeX tex="n" />{" "}
            zéros suivis d'un 1.
            <LaTeX tex="\large 10^{\color{red}-n} = 0.000\:...\:001" />
          </div>
        </Flex>
      </Important>
      <P>
        Les puissances de 10 <S>positives</S> représentent des nombres{" "}
        <DotLine width="8cm" />
      </P>
      <P>
        Les puissances de 10 <S>négatives</S> représentent des nombres{" "}
        <DotLine width="8cm" />
      </P>
      <Problem>
        <LI>
          Pour chacune des puissances de 10 suivantes, la noter sous forme
          décimale.
        </LI>
        <Flex className="mb-15">
          {[3, -2, -4, 6].map((e) => (
            <div className="flex-1">
              <LaTeX tex={`10^{${e}} = `} />{" "}
              <DotLine width="3cm" />
            </div>
          ))}
        </Flex>

        <LI>
          Pour chacun des nombres suivants, le noter sous forme d'une puissance
          de 10.
        </LI>
        <Flex className="mb-15">
          {[100, 0.1, 10000000000, 0.00001].map((e, k) => (
            <div className="flex-1">
              <LaTeX tex={`${e} = `} />{" "}
              <DotLine width={k > 1 ? "1cm" : "3cm"} />
            </div>
          ))}
        </Flex>
      </Problem>
      <H2>Multiples d'unités</H2>
      <P>
        Chaque unité possède des multiples associés à une puissance de 10 par
        exemple : le <S>millimètre</S> (mm) est un multiple du mètre (m) tel que
        : <LaTeX tex="1m =10^3 mm = " /> <DotLine width="2cm" />
        .
      </P>
      <UnitTable />
      <Details>Tableau récapitulatif des multiples d'unités</Details>
      <Problem>
        <LI>À combien d'octets (noté o) correspond 1 Go ?</LI>
        <DotLine />

        <LI>À combien de grammes (noté g) correspond 1 µg ?</LI>
        <DotLine />
      </Problem>
      <H1>Échelle de grandeurs</H1>
      <Img src={echelleGrandeur} className="w-1/2 mx-auto" />
      <Problem>
        <LI>
          Sur l'échelle de grandeur ci-dessus, placer les multiples du mètre
          (km, mm, cm...)
        </LI>

        <LI>
          Sur l'échelle de grandeur ci-dessus, placer les objets suivants :
        </LI>
        <UL indent={0} className="columns-2">
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
              Une année-lumière (<LaTeX tex="10^{13}" /> km)
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
    </Cours>
  );
}
