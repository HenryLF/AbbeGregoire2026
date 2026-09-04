import { ensemble_nombre } from "@/assets";
import { Img } from "@/components";
import { Block, BlockBox, DotLine, H2, LaTeX, Page } from "@weasyprint-tsx/ui";
import "./index.css";

export default function Document() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>My Document</title>
        <link rel="stylesheet" href="index.css" />
      </head>
      <body>
        <div className="text">
          Un <strong>nombre</strong> est une valeur que l'on représente à l'aide
          de <strong>chiffres</strong> qui sont les symboles allant de 0 à 9.
          <br /> Par exemple : « 5 » est un <DotLine width={"3cm"} /> tandis que
          5 000 est un <DotLine width={"3cm"} />
        </div>

        <div className="text">
          Un <strong>ensemble</strong> est la façon mathématique de faire des
          groupes d'objets. Si un objet appartient à un groupe, on le signifie
          par le symbole <LaTeX tex="\in" />.
        </div>
        <div className="text">
          Par exemple, si je note <LaTeX tex="\mathbb{P}" /> l'ensemble des
          professeurs de mathématiques, «{" "}
          <LaTeX tex="\text{M. Zuber} \in \mathbb{P}" /> » signifie «{" "}
          <span className="italic">
            M. Zuber est un professeur de mathématiques
          </span>
           »
        </div>

        {[
          ["naturel", "N"],
          ["relatif", "Z"],
          ["rationnel", "Q"],
          ["réel", "R"],
        ].map(([t, s]) => (
          <>
            <H2>
              Nombres {t}s <LaTeX tex={`\\mathbb{${s}}`} />
            </H2>
            <div className="text">
              Les <strong>nombres {t}</strong> représentent tous les nombres{" "}
              <DotLine width={"9.4cm"} />
              <br />
              <DotLine width={"11.4cm"} />
              On note l'ensemble des nombres {t}s{" "}
              <LaTeX tex={`\\mathbb{${s}}`} />.
            </div>
            <BlockBox gap={0} className={"mb-10"}>
              <div>
                <div className="text-center font-bold">
                  Exemples de nombres appartenant à{" "}
                  <LaTeX tex={`\\mathbb{${s}}`} />
                </div>
                <div className="h-20" />
              </div>
              <Block
                ratio={0.1}
                className="border-solid border-0 border-l h-30"
              />
              <div>
                <div className="text-center font-bold">
                  Exemples de nombres <em>n'appartenant pas</em> à{" "}
                  <LaTeX tex={`\\mathbb{${s}}`} />
                </div>
                <div className="h-20" />
              </div>
            </BlockBox>
          </>
        ))}

        <Page>
          <Img src={ensemble_nombre} className="h-340 mx-auto" />
        </Page>
      </body>
    </html>
  );
}
