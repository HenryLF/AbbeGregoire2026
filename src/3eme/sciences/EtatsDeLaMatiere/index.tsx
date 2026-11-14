import { P, S } from "@components/atoms/Texts";
import { Cours } from "@components/doctype/Cours";
import { Chart, DotLine, H1, LaTeX, LI, UL } from "zefpdf-lab/ui";
import "../sciences.css";
import { Doc1, Doc2, Doc3, Doc4, Doc5 } from "./doc";

export default function () {
  return (
    <Cours title="Température et État de la Matière">
      <Doc1 />
      <H1>Température</H1>
      <P>
        La <S>température</S> est une mesure de l'agitation des atomes et
        molécules qui constituent la matière, plus la température est élevée
        plus les constituants de la matière bougent vite et plus un objet est
        dit chaud.
      </P>
      <Doc2 className={"my-1"} />
      <P>
        On mesure la température avec un <S>thermomètre</S> et on obtient une
        grandeur mesurée en <S>degrés Celsius</S> notés <LaTeX tex="°C" /> ou en{" "}
        <S> Kelvin</S> noté <LaTeX tex="K" />. Ce sont des{" "}
        <S>échelles de températures.</S>
      </P>
      <Doc3 />

      <H1>État de la matière</H1>

      <P>
        La matière peut se présenter sous <S>3 états</S> différents :
      </P>
      <UL>
        <LI>
          L'état <S>solide</S>, la matière a une forme prédéfinie.
        </LI>
        <em>Exemples de solides :</em> <DotLine inline />
        <LI>
          L'état <S>liquide</S>, la matière occupe la forme de son contenant.
        </LI>
        <em>Exemples de liquides :</em> <DotLine inline />
        <LI>
          L'état <S>gazeux</S>, la matière occupe tout l'espace disponible.
        </LI>
        <em>Exemples de gaz :</em> <DotLine inline />
      </UL>
      <Doc4 />

      <H1>Changements d'états</H1>

      <P>
        On appelle <S>corps pur</S> un matériau constitué d'un seul type
        d'atome ou de molécule, un <S>mélange</S> est constitué de plusieurs
        corps purs.
      </P>

      <P>
        Lorsque la température augmente, le fait que les atomes et molécules
        s'agitent plus va changer le comportement de la matière. En effet, plus
        les particules vont vite, plus elles vont se cogner les unes aux autres
        et avoir tendance à s'éloigner.
      </P>

      <Doc5 className={"my-1"} />
      <P>
        La <S>température de changement d'état</S> dépend du matériau et de la
        pression. Dans des conditions données, un <S>corps pur</S> change d'état
        à une température fixe, on observe alors un palier de température.
      </P>
      <Chart
        config={{
          type: "line",
          data: {
            labels: [0, 1],
            datasets: [
              {
                data: [0, 1],
                showLine: false,
                pointStyle: false,
              },
            ],
          },
          options: {
            scales: {
              x: {
                title: { text: "Temps", display: true },
                ticks: { display: false },
              },
              y: {
                title: { text: "Température", display: true },
                ticks: { display: false },
                grid: { display: true },
              },
            },
            plugins: {
              legend: { display: false },
            },
          },
        }}
      />
    </Cours>
  );
}
