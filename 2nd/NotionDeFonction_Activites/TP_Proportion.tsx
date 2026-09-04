import {
    Block,
    BlockBox,
    DotLine,
    Entry,
    LaTeX,
    LI,
    Table,
} from "@weasyprint-tsx/ui";
import { PropsWithChildren } from "preact/compat";
import { Call, Options, SubQuestions, TP } from "@components";

const F = ({ children }: PropsWithChildren) => (
  <LaTeX tex={children ? `f(${children})` : "f"} />
);

export default function () {
  return (
    <TP title="Chantier en haute montagne">
      <p>
        Lors de travaux en hauteur en montagne, on utilise les câbles d’un
        téléphérique pour transporter les matériaux sur le lieu du chantier.
      </p>
      <LI>
        On contrôle les temps de passage de la benne aux différents pylônes dont
        on connaît les distances :
      </LI>
      <Table
        orientation="row"
        className="w-8/10 mx-auto"
        contentClass="min-w-1/7 px-2"
      >
        <Entry content={Array.from({ length: 4 }, (_, k) => (1 + k) * 100)}>
          distance parcourue (en m)
        </Entry>
        <Entry content={Array.from({ length: 4 }, (_, k) => (1 + k) * 40)}>
          temps écoulé (en s)
        </Entry>

        <Entry content={Array(4).fill(<DotLine />)}>
          <LaTeX tex="\large \frac{distance\:(m)}{temps\:(s)}" />
        </Entry>
      </Table>
      <SubQuestions count={1}>
        <LI>Quand deux grandeurs sont-elles « proportionnelles » ?</LI>
        <Options columns={2} className="text-xs">
          <>Quand l’une double, l’autre double aussi.</>
          <>Quand l’une augmente, l’autre augmente aussi, et inversement.</>
          <>
            Quand l’une augmente d’une quantité, l’autre augmente aussi de la
            même quantité.
          </>
          <>
            Quand l’une augmente d’une quantité, l’autre diminue de la même
            quantité.
          </>
        </Options>
        <BlockBox>
          <Block ratio={8}>
            <LI>
              La distance et le temps mis par la benne lors de son trajet
              sont-ils proportionnels ?
            </LI>
          </Block>
          <Options className={"w-2/3"} columns={1}>
            {"OUI"}
            {"NON"}
          </Options>
        </BlockBox>
        <LI>Compléter le tableau ci-dessus.</LI>
        <LI>
          Que dire du rapport calculé ?
          <DotLine width={"12cm"} />
        </LI>
        <LI>
          Soit <LaTeX>d</LaTeX> la distance parcourue (en m) et <LaTeX>t</LaTeX>{" "}
          le temps mis (en s), conclure sur la relation correcte.
        </LI>
        <Options>
          {[
            "d=0.4 \\times t",
            "t=0.4 \\times d",
            "t =\\large \\frac{0.4}{d}",
          ].map((tex) => (
            <LaTeX tex={tex} />
          ))}
        </Options>
      </SubQuestions>

      <LI>
        Ce téléphérique, long de 560 mètres, parcourt une distance modélisée en
        fonction du temps par la fonction <F /> définie par{" "}
        <LaTeX>f(t) = 2,5t</LaTeX> avec <F>t</F> la distance parcourue en mètre
        et <LaTeX tex="t" /> le temps en seconde.
      </LI>
      <SubQuestions count={2}>
        <BlockBox basis={4}>
          <Block ratio={2}>
            <LI>Quelle est la variable de la fonction f ? </LI>
          </Block>
          <Options>
            {["d", "t", "x"].map((tex) => (
              <LaTeX tex={tex} />
            ))}
          </Options>
        </BlockBox>

        <LI>
          Utiliser la calculatrice pour compléter le tableau de valeurs suivant.
        </LI>

        <Table
          orientation="row"
          className="w-8/10 mx-auto"
          contentClass="min-w-1/7 px-2"
        >
          <Entry content={Array.from({ length: 6 }, (_, k) => k * 10)}>
            <LaTeX tex="x" />
          </Entry>
          <Entry content={Array(6).fill(<DotLine />)}>
            <F />
          </Entry>
        </Table>
        <LI>
          Utiliser la calculatrice pour tracer la représentation graphique de
          cette fonction. On donne les réglages de la fenêtre d’affichage : Xmin
          = 0 ; Xmax = 560 ; Ymin = 0 ; Ymax = 1600.
        </LI>
        <Call>Faire vérifier la représentation graphique</Call>
        <LI>
          Determiner le temps nécessaire pour parcourir 560m.
          <DotLine width={"7.5cm"} />
        </LI>
      </SubQuestions>
    </TP>
  );
}
