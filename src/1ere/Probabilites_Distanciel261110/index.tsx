import { Details, P, S } from "@components/atoms/Texts";
import { Activites } from "@components/doctype/Activites";
import { Exercice, SubQuestion } from "@components/section/Exercice";
import { DotLine, Table, TEntry, THeader } from "zefpdf-lab/ui";
import { LI, UL } from "zefpdf-lab/ui/List";
import "../1ere.css";

export default function () {
  return (
    <Activites title="Mardi 11 Novembre">
      <P>
        Ne vous ayant pas vu depuis un petit moment je vous propose de réaliser
        une petite activité pour vous remettre dans le bain des probabilités.
      </P>

      <Exercice title="Le vol Milan-Barcelone">
        <P>
          Dans le vol Milan - Barcelone du 10 novembre, il y avait 158 passagers
          parmi eux :
          <UL indent={"2cm"}>
            <LI className="not-italic!">56 ont la nationalité espagnole;</LI>
            <LI className="not-italic!">81 ont la nationalité italienne;</LI>
            <LI className="not-italic!">
              35 n'ont ni la nationalité italienne ni la nationalité espagnole;
            </LI>
          </UL>
        </P>

        <LI>
          Parmi les passagers combien ont la nationalité italienne OU la
          nationalité espagnole ?{" "}
          <Details className="inline px-2">
            On peut par exemple soustraire le nombre de passagers qui ne sont ni
            italiens ni espagnols du total.
          </Details>
        </LI>
        <DotLine count={3} />

        <LI>
          Additionner le nombre de passagers italiens et le nombre de passagers
          espagnols donner dans l'énoncé, comparer avec la réponse à la question
          précédente. Qu'est ce que cela signifie ?
          <Details className="inline px-2">
            Rappel : une personne peut être citoyen de plusieurs états, c'est ce
            que l'on appelle la <S>bi-nationalité</S>.
          </Details>
        </LI>
        <DotLine count={3} />

        <LI>
          Remplir le tableau suivant avec le nombre de passagers dans chaque
          catégorie:{" "}
          <Details className="inline px-2">
            Attention: il s'agit d'un tableau croisé, le nombre de passagers qui
            sont italiens ET espagnols doit être inscrit dans la case en haut à
            gauche !{" "}
          </Details>
        </LI>

        <Table className="table-fixed w-8/9 mx-auto">
          <THeader content={[null, "Italien", "Non Italien", "Total"]} />
          <TEntry header="Espagnol" content={[<DotLine />, <DotLine />, 56]} />
          <TEntry header="Non Espagnol" content={Array(3).fill(<DotLine />)} />
          <TEntry header="Total" content={[81, <DotLine />, 158]} />
        </Table>

        <SubQuestion mainLI="On tire au hasard un passager de l'avion :">
          <LI>Donner la probabilité qu'il possède la double nationalité :</LI>
          <DotLine count={3} />

          <LI>
            Donner la probabilité qu'il ne possède QUE la nationalité italienne
            :
          </LI>
          <DotLine count={3} />
        </SubQuestion>

        <LI>
          Lors de l'arrivée à l'aéroport les passagers italiens (y compris
          bi-nationaux) sont mis dans une file particulière. Parmi ces passagers
          quelle est la probabilité que le passager tiré au sort ait également
          la nationalité espagnole.
        </LI>
        <DotLine count={4} />
      </Exercice>
    </Activites>
  );
}
