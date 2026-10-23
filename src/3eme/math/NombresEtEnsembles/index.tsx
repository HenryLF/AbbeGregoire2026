import ensembleNombre from "@assets/algebra/ensemble-nombre.png";
import { Img } from "@components/atoms/Img";
import { P, S } from "@components/atoms/Texts";
import { Cours } from "@components/doctype/Cours";
import { DotLine } from "zefpdf-lab/ui/Inputs";
import { LaTeX } from "zefpdf-lab/ui/LaTeX";
import { Flex } from "zefpdf-lab/ui/Layout";
import { PageBreak } from "zefpdf-lab/ui/Pages";
import { H2 } from "zefpdf-lab/ui/Titles";
import "./index.css";

const ensembles = [
  ["naturel", "N"],
  ["relatif", "Z"],
  ["rationnel", "Q"],
  ["réel", "R"],
];

export default function NombresEtEnsembles() {
  return (
    <Cours title="Nombres et Ensembles" lang="fr">
      <P>
        Un <S>nombre</S> est une valeur que l'on représente à l'aide de{" "}
        <S>chiffres</S> qui sont les symboles allant de 0 à 9.
        <br /> Par exemple : « 5 » est un{" "}
        <DotLine width="3cm" /> tandis que 5 000 est un{" "}
        <DotLine width="3cm" />
      </P>

      <P>
        Un <S>ensemble</S> est la façon mathématique de faire des groupes
        d'objets. Si un objet appartient à un groupe, on le signifie par le
        symbole <LaTeX tex="\in" />.
      </P>
      <P>
        Par exemple, si je note <LaTeX tex="\mathbb{P}" /> l'ensemble des
        professeurs de mathématiques, «{" "}
        <LaTeX tex="\text{M. Zuber} \in \mathbb{P}" noFormatNumber /> »
        signifie « <em>M. Zuber est un professeur de mathématiques</em> »
      </P>

      {ensembles.map(([t, s]) => (
        <>
          <H2>
            Nombres {t}s <LaTeX tex={`\\mathbb{${s}}`} />
          </H2>
          <P>
            Les <S>nombres {t}</S> représentent tous les nombres{" "}
            <DotLine width="9.4cm" />
            <br />
            <DotLine width="11.4cm" />
            On note l'ensemble des nombres {t}s{" "}
            <LaTeX tex={`\\mathbb{${s}}`} />.
          </P>
          <Flex className="mb-10 break-inside-avoid">
            <div className="flex-1">
              <P align="center">
                <S>
                  Exemples de nombres appartenant à{" "}
                  <LaTeX tex={`\\mathbb{${s}}`} />
                </S>
              </P>
              <div className="h-20" />
            </div>
            <div className="w-[5%] border-0 border-l border-solid h-30" />
            <div className="flex-1">
              <P align="center">
                <S>
                  Exemples de nombres <em>n'appartenant pas</em> à{" "}
                  <LaTeX tex={`\\mathbb{${s}}`} />
                </S>
              </P>
              <div className="h-20" />
            </div>
          </Flex>
        </>
      ))}

      <PageBreak />
      <Img src={ensembleNombre} className="mx-auto w-fit" />
    </Cours>
  );
}
