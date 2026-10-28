import { P } from "@components/atoms/Texts";
import { Call, SubQuestion, TP } from "@components/section/Exercice";
import { DotLine, Options } from "zefpdf-lab/ui/Inputs";
import { LaTeX } from "zefpdf-lab/ui/LaTeX";
import { Flex } from "zefpdf-lab/ui/Layout";
import { LI } from "zefpdf-lab/ui/List";
import { Table, TEntry } from "zefpdf-lab/ui/Table";

const F = ({ x }: { x?: string }) => <LaTeX tex={x ? `f(${x})` : "f"} />;

const dots = (n: number) =>
  Array.from({ length: n }, () => <DotLine />);

export default function TP_Proportion() {
  return (
    <TP title="Chantier en haute montagne">
      <P>
        Lors de travaux en hauteur en montagne, on utilise les câbles d’un
        téléphérique pour transporter les matériaux sur le lieu du chantier.
      </P>
      <LI>
        On contrôle les temps de passage de la benne aux différents pylônes
        dont on connaît les distances :
      </LI>
      <Table className="w-8/10 mx-auto">
        <TEntry
          header="distance parcourue (en m)"
          content={Array.from({ length: 4 }, (_, k) => (1 + k) * 100)}
        />
        <TEntry
          header="temps écoulé (en s)"
          content={Array.from({ length: 4 }, (_, k) => (1 + k) * 40)}
        />
        <TEntry
          header={<LaTeX tex="\large \frac{distance\:(m)}{temps\:(s)}" />}
          content={dots(4)}
        />
      </Table>
      <SubQuestion count={1}>
        <LI>Quand deux grandeurs sont-elles « proportionnelles » ?</LI>
        <Options columns={2}>
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
        <Flex gap="3mm" align="center">
          <div className="flex-[8]">
            <LI>
              La distance et le temps mis par la benne lors de son trajet
              sont-ils proportionnels ?
            </LI>
          </div>
          <Options columns={1} className="flex-1">
            {"OUI"}
            {"NON"}
          </Options>
        </Flex>
        <LI>Compléter le tableau ci-dessus.</LI>
        <LI>
          Que dire du rapport calculé ?
          <DotLine width="12cm" />
        </LI>
        <LI>
          Soit <LaTeX tex="d" /> la distance parcourue (en m) et{" "}
          <LaTeX tex="t" /> le temps mis (en s), conclure sur la relation
          correcte.
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
      </SubQuestion>

      <LI>
        Ce téléphérique, long de 560 mètres, parcourt une distance modélisée en
        fonction du temps par la fonction <F /> définie par{" "}
        <LaTeX tex="f(t) = 2.5t" /> avec <F x="t" /> la distance parcourue en
        mètre et <LaTeX tex="t" /> le temps en seconde.
      </LI>
      <SubQuestion count={2}>
        <Flex gap="3mm" align="center">
          <div className="flex-[2]">
            <LI>Quelle est la variable de la fonction f ? </LI>
          </div>
          <Options className="flex-1">
            {["d", "t", "x"].map((tex) => (
              <LaTeX tex={tex} />
            ))}
          </Options>
        </Flex>

        <LI>
          Utiliser la calculatrice pour compléter le tableau de valeurs
          suivant.
        </LI>
        <Table className="w-8/10 mx-auto">
          <TEntry
            header={<LaTeX tex="x" />}
            content={Array.from({ length: 6 }, (_, k) => k * 10)}
          />
          <TEntry header={<F />} content={dots(6)} />
        </Table>
        <LI>
          Utiliser la calculatrice pour tracer la représentation graphique de
          cette fonction. On donne les réglages de la fenêtre d’affichage :
          Xmin = 0 ; Xmax = 560 ; Ymin = 0 ; Ymax = 1600.
        </LI>
        <Call>Faire vérifier la représentation graphique</Call>
        <LI>
          Determiner le temps nécessaire pour parcourir 560m.
          <DotLine width="7.5cm" />
        </LI>
      </SubQuestion>
    </TP>
  );
}
