import anion from "@assets/chemistry/anion.png";
import atom from "@assets/chemistry/atom.svg";
import cation from "@assets/chemistry/cation.png";
import h2o from "@assets/chemistry/h2o.png";
import periodicTable from "@assets/chemistry/periodic-table.png";
import { Img } from "@components/atoms/Img";
import { Qr } from "@components/atoms/Qr";
import { Important, P, S } from "@components/atoms/Texts";
import { Cours } from "@components/doctype/Cours";
import { DotLine } from "zefpdf-lab/ui/Inputs";
import { LaTeX } from "zefpdf-lab/ui/LaTeX";
import { Flex } from "zefpdf-lab/ui/Layout";
import { LI, UL } from "zefpdf-lab/ui/List";
import { Page, PageBreak } from "zefpdf-lab/ui/Pages";
import { Table, TEntry } from "zefpdf-lab/ui/Table";
import { H1, H2 } from "zefpdf-lab/ui/Titles";
import "./index.css";

const qrElement = "https://www.youtube.com/watch?v=N6vzvErUTUw";

export default function ConstitutionDeLaMatiereDocument() {
  return (
    <Cours title="Constitution de la Matière" lang="fr">
      <H1>Atomes</H1>
      <P>
        Les <S>atomes</S> sont les briques élémentaires de la matière. Ils sont
        constitués d'un <S>noyau</S> chargé positivement autour duquel gravitent
        des <S>électrons</S> chargés négativement.
      </P>
      <H2>Électrons</H2>
      <P>
        Les <S>électrons</S> sont des particules élémentaires portant une charge
        négative.
      </P>
      <P>
        La masse d'un électron est de <LaTeX tex="m_{e^-} = 10^{-30}\:kg" />, sa
        taille est estimée à <LaTeX tex="d_{e^-} = 10^{-22}\:m" />
      </P>
      <H2>Noyau atomique</H2>
      <P>
        Le noyau atomique est constitué de particules élémentaires appelées{" "}
        <S>nucléons</S>, il en existe deux types :
      </P>
      <UL>
        <LI>
          Les <S>protons</S> portent une charge positive ;
        </LI>
        <LI>
          Les <S>neutrons</S> ne sont pas chargés ;
        </LI>
      </UL>
      <P>Pour un atome, on appellera :</P>
      <UL>
        <LI>
          Le <S>numéro atomique</S> noté <LaTeX tex="Z" />, le nombre de protons
          dans le noyau ;
        </LI>
        <LI>
          Le <S>nombre de masse</S> noté <LaTeX tex="A" />, le nombre total de
          nucléons dans le noyau ;
        </LI>
      </UL>
      <P>
        Les nucléons ont une masse de <LaTeX tex="m_{_{N}} = 10^{-27}\:kg" /> et
        une taille de <LaTeX tex="d_{_{N}} = 10^{-15}\:m" />
      </P>
      <Important>
        <P>
          Un atome est <em>électriquement neutre</em> (il possède autant de
          charges positives que de charges négatives), il possédera donc :
          <DotLine inline />
          <DotLine />
        </P>
      </Important>
      <Img align="right" src={atom} className="w-3/4 mx-auto">
        Schéma d'un atome
      </Img>
      <P>On remarque que :</P>
      <UL>
        <LI>
          Un nucléon est <LaTeX tex="\large \frac{m_{_{N}}}{m_{e^-}} = " />{" "}
          <DotLine inline />
          <DotLine />
        </LI>
        <LI>
          Un nucléon est <LaTeX tex="\large \frac{d_{_{N}}}{d_{e^-}} = " />{" "}
          <DotLine inline />
          <DotLine />
        </LI>
        <LI>
          Le rayon du nuage d'électrons est de <LaTeX tex="10^{-10}\:m" />{" "}
          <DotLine inline />
          <DotLine />
        </LI>
      </UL>
      <H2>Tableau périodique</H2>
      <Flex gap="5mm" align="center">
        <P className="flex-1">
          Il existe 118 types d'atomes différents que l'on appelle{" "}
          <S>éléments</S>, on les distingue par leur numéro atomique{" "}
          <LaTeX tex="Z" />. Chaque élément est associé à un <S>symbole</S>, par
          exemple :
        </P>
        <Qr href={qrElement} size={68}>
          E comme Element
        </Qr>
      </Flex>
      <Table className="w-4/5 mx-auto">
        <TEntry header="Symbole" content={Array(5).fill("")} className="h-20" />
        <TEntry
          header={
            <div>
              Numéro atomique
              <LaTeX tex="Z" />
            </div>
          }
          content={Array(5).fill("")}
          className="h-20"
        />
        <TEntry header="Nom" content={Array(5).fill("")} className="h-20" />
      </Table>
      <P>
        On retrouve tous les éléments connus dans le{" "}
        <S>tableau périodique des éléments</S>.
      </P>
      <Img align="right" src={periodicTable}>
        Tableau périodique
      </Img>
      <PageBreak />
      <H1>Molécules</H1>
      <Flex gap="5mm" align="center">
        <div className="flex-[3.5]">
          <P>
            Les <S>molécules</S> sont des assemblages d'atomes liés ensemble par
            des <S>liaisons chimiques</S>. On symbolise une molécule par la
            liste des symboles des atomes la composant avec leur nombre noté en
            indice.
          </P>
          <P>
            Par exemple, <LaTeX noFormatNumber tex="\mathrm{H_2O}" /> représente
            la molécule d'eau, elle est composée de
          </P>
          <UL>
            {Array.from({ length: 2 }, () => (
              <LI>
                <DotLine inline />
              </LI>
            ))}
          </UL>
        </div>
        <Img src={h2o} align="right" className="flex-1">
          Molécule d'eau
        </Img>
      </Flex>

      <H1>Ions</H1>
      <P>
        Pour différentes raisons, un atome ou une molécule peut gagner ou perdre
        un ou plusieurs électrons. Il devient alors un <S>ion</S>, une espèce
        chimique chargée électriquement.
      </P>
      <P>
        Comme les électrons sont chargés <DotLine width="6cm" />{" "}
        :
      </P>
      <UL>
        {[
          { img: anion, act: "gagne", name: "anion" },
          { img: cation, act: "perd", name: "cation" },
        ].map(({ img, act, name }) => (
          <>
            <LI>
              Lorsqu'une espèce chimique <S>{act} des électrons</S>, elle
              formera un ion chargé <DotLine width="4cm" />,
              que l'on appelle <S>{name}</S>.
            </LI>
            <Img src={img} className="mb-5 w-4/5 mx-auto" />
          </>
        ))}
      </UL>
      <Important>
        <S>
          On note les ions par leur symbole, auquel on ajoute la charge en
          exposant.
        </S>
        <Flex justify="center" gap="2cm" className="mt-2 mb-10">
          <LaTeX noFormatNumber tex="\Large \mathrm{Au^{3+}}" />
          <LaTeX noFormatNumber tex="\Large \mathrm{F^-}" />
        </Flex>
      </Important>

      {/* Handout pages (old `@page blank`: no header nor background) */}
      <Page page="blank">
        <Img align="right" src={atom}>
          Schéma d'un atome
        </Img>
        <Img align="right" src={periodicTable}>
          Tableau périodique
        </Img>
      </Page>
      <Page page="blank" style={{ breakBefore: "page" }}>
        <Flex dir="column" align="center" gap="5mm" className="w-3/5 mx-auto">
          {Array.from({ length: 2 }, () => (
            <>
              <Img src={cation} />
              <div className="h-[5mm]" />
              <Img src={anion} />
            </>
          ))}
        </Flex>
      </Page>
      <Page page="blank" style={{ breakBefore: "page" }}>
        <Flex dir="column" gap="1cm" className="w-full">
          {Array.from({ length: 5 }, () => (
            <Flex gap="1cm" align="center">
              <Img src={h2o} className="flex-1">
                Molécule d'eau
              </Img>
              <Img src={h2o} className="flex-1">
                Molécule d'eau
              </Img>
              <Qr href={qrElement} size={68} className="flex-1">
                E comme Element
              </Qr>
              <Qr href={qrElement} size={68} className="flex-1">
                E comme Element
              </Qr>
            </Flex>
          ))}
        </Flex>
      </Page>
    </Cours>
  );
}
