import {
  chemistryStateTransition,
  chemistryTemperatureColdHot,
  chemistryWaterStates,
} from "@assets/index";
import { Img } from "@components/atoms/Img";
import { NumberLine } from "@components/atoms/NumberLine";
import { Qr } from "@components/atoms/Qr";
import { Note, P, S } from "@components/atoms/Texts";
import { Problem, SubQuestion } from "@components/section/Exercice";
import {
  Document,
  DotLine,
  Flex,
  LaTeX,
  LI,
  PageBreak,
  Table,
  TEntry,
  UL,
  type ComponentProps,
} from "zefpdf-lab/ui";

import "@styles/base.css";

export const Doc1 = () => (
  <Problem>
    <Img className="mb-2" src={chemistryWaterStates} />
    <LI marker="">Compléter le schéma avec les mots suivants :</LI>
    <UL className="columns-4">
      {[
        "solide",
        "liquide",
        "gaz",
        "vapeur",
        "eau",
        "glace",
        "on chauffe (x2)",
        "on refroidit (x2)",
      ].map((e) => (
        <LI className="not-italic">{e}</LI>
      ))}
    </UL>
  </Problem>
);

export const Doc2 = (props: ComponentProps) => (
  <>
    <Img src={chemistryTemperatureColdHot} {...props} />
  </>
);

export const Doc3 = () => (
  <Problem>
    <P>
      Le Kelvin est l'échelle de température utilisée en sciences,{" "}
      <LaTeX tex="0 K" /> correspond au <S>zéro absolu</S> où les atomes et
      molécules sont quasiment à l'arrêt. Dans l'échelle Kelvin, l'eau gèle à{" "}
      <LaTeX tex="273.15 K" /> et bout à <LaTeX tex="373.15 K" />.
    </P>
    <SubQuestion mainLI="On donne le tableau suivant :">
      <Table className={"w-19/20 mx-auto table-fixed"}>
        <TEntry
          header=" "
          content={[
            "Zéro absolu",
            "L'azote liquide bout ",
            "L'eau gèle",
            "L'eau bout",
            "L'aluminium fond",
          ]}
        />
        <TEntry
          header="Température (°C)"
          content={Array(5).fill(<DotLine />)}
        />
        <TEntry
          header="Température (K)"
          content={[0, 77, 273.15, 373.15, 600]}
        />
      </Table>
      <LI>À quelle température en degrés Celsius l'eau bout-elle ?</LI>
      <DotLine />
      <LI>À quelle température en degrés Celsius l'eau gèle-t-elle ?</LI>
      <DotLine />

      <LI>
        En déduire la relation entre degrés Celsius et Kelvin et remplir le
        tableau.
      </LI>
      <DotLine />
    </SubQuestion>
    <LI>
      Compléter l'échelle de température ci-dessous avec les températures en °C.
    </LI>

    <NumberLine
      min={0}
      max={620}
      ticks={[0, 77, 273.15, 373.15, 600]}
      className={"mt-3"}
    />
  </Problem>
);

export const Doc4 = () => (
  <Problem>
    <Qr
      href="https://javalab.org/en/status_solid_liquid_gas_en/"
      className={"float-right"}
    />
    <LI>Jouer avec l'animation (disponible en scannant le QR code)</LI>
    <Flex justify="space-evenly">
      {["Solide", "Liquide", "Gaz"].map((k) => (
        <div>
          <div className="size-[5cm] border rounded" />
          <S color="black" className={"block text-center"}>
            {k}
          </S>
          <DotLine count={2} />
        </div>
      ))}
    </Flex>
    <LI>
      Pour chacun des états de la matière, schématiser le comportement des
      atomes et molécules.
    </LI>
    <LI>Associer à chacun des états de la matière les adjectifs suivants :</LI>
    <UL indent={0} className={"columns-2"}>
      {[
        "amorphe (qui n'a pas de forme)",
        "compact (pas/peu d'espace entre particules)",
        "ordonné (les particules sont bien rangées)",
        "désordonné",
        "compressible (son volume peut changer)",
        "incompressible (son volume ne peut pas changer)",
      ].map((l) => (
        <LI className="not-italic"> {l}</LI>
      ))}
    </UL>
    <Note>
      Il existe d'autres états de la matière comme les{" "}
      <S>fluides supercritiques</S> ou les <S>plasmas</S>, mais ils sont moins
      courants et le plus souvent rencontrés dans un laboratoire.
    </Note>
  </Problem>
);

export const Doc5 = (props: ComponentProps) => (
  <Img src={chemistryStateTransition} {...props} />
);

export default function () {
  return (
    <Document style={{ page: "blank" }}>
      <Flex dir="column" gap={"5mm"}>
        <Doc1 />
        <div className="border-b border-dashed" />

        <Doc2 />
        <div className="border-b border-dashed" />
        <Doc3 />
      </Flex>
      <PageBreak />
      <Flex dir="column" gap={"5mm"}>
        <Doc4 />
        <div className="border-b border-dashed" />
        <Doc5 />
      </Flex>
    </Document>
  );
}
