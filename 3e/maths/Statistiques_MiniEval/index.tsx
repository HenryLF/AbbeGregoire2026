import { Options } from "@/components";
import { MiniEval } from "@/components/MiniEval";
import { DotLine, Entry, LaTeX, LI, Table } from "@weasyprint-tsx/ui";
import "./index.css";

export default function () {
  return (
    <MiniEval title="Statistiques - 3ème">
      <p>
        Voici les notes données par les clients d'un restaurant sur un site
        internet.
      </p>
      <div className="border border-solid my-2">
        <Table orientation="row" className={"w-full"} contentClass="min-w-1/16">
          <Entry
            content={[
              "4",
              "7",
              "8",
              "6",
              "3",
              "9",
              "9",
              "7",
              "9",
              "4",
              "7",
              "9",
              "1",
              "3",
              "3",
            ]}
          >
            Notes
          </Entry>
        </Table>
      </div>
      <LI>
        Quel est le <strong>minimum</strong> de cette série statistique ?
        <DotLine inline width={"9cm"} />
      </LI>

      <LI>
        Quel est le <strong>maximum</strong> de cette série statistique ?
        <DotLine inline width={"9cm"} />
      </LI>

      <LI>
        Quelle est l'<strong>étendue</strong> de cette série statistique ?
        <DotLine inline width={"9cm"} />
      </LI>

      <LI>
        <LaTeX tex="7" /> est la valeur telle que la moitié des observations
        sont en dessous et l'autre moitié au-dessus, c'est :
      </LI>
      <Options>
        {"la médiane"}
        {"la moyenne"}
        {"le centre"}
        {"le milieu"}
      </Options>
      <LI>
        La somme des observations divisée par leur nombre est d'environ{" "}
        <LaTeX tex="5.9" />, c'est :
      </LI>

      <Options>
        {"le milieu"}
        {"la médiane"}
        {"le centre"}
        {"la moyenne"}
      </Options>
    </MiniEval>
  );
}
