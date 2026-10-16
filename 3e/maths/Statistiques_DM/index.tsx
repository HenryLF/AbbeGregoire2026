import { Document, NoteBox, sumPoints } from "@/components";
import { DotLine, Entry, LI, OL, PageBreak, Table } from "@weasyprint-tsx/ui";
import "./index.css"

const bareme = {
  collecte: 2,
  minimum: 1,
  maximum: 1,
  etendue: 1,
  mediane: 1.5,
  moyenne: 1.5,
  conclusion: 2,
};

export default function () {
  return (
    <Document title="Statistiques - Devoir Maison">
      <p>
        Cette fiche est <strong>à remplir et à rendre</strong> pour la rentrée
        des vacances de la Toussaint, le <strong> lundi 2 novembre</strong>.
      </p>

      <p>
        Interrogez au moins 5 personnes de votre entourage et posez leur les
        questions suivantes :{" "}
      </p>

      <LI>
        Combien de temps de trajet (en minutes) de votre domicile jusqu'à votre
        lieu de travail/établissement scolaire ? (ex : 1h30 -> 90 minutes)
      </LI>

      <LI>
        Quel mode de transport ? On notera : <strong>VP</strong> : Véhicule personnel  (moto/scooter/voiture) , <strong>TC</strong> : transport en commun (métro, train, tram, bus, RER...) , <strong>P</strong> : à pied et <strong>V</strong> : en vélo.
      </LI>

    <Table orientation="row" className='w-full' contentClass="min-w-15">
      <Entry content={Array.from({length : 10} , (_,k)=>k+1)}>

      </Entry>

      <Entry content={Array(10).fill(<DotLine/>)}>
        Temps de trajet (minutes)
      </Entry>

      <Entry content={Array(10).fill(<DotLine/>)}>
        Mode de transport
      </Entry>
    </Table>
    <NoteBox points={bareme.collecte} />
    <OL>
      {([
        ["minimum", bareme.minimum],
        ["maximum", bareme.maximum],
      ] as const).map(
        ([t, points])=>   <>
        <LI className="italic">
      Donner le <strong>{t}</strong> de cette série de données.
    </LI>
    <DotLine count={1}/>
    <NoteBox points={points} />
        </>


      )}
      {([
        ["l'étendue", bareme.etendue],
        ["la médiane", bareme.mediane],
        ["la moyenne", bareme.moyenne],
      ] as const).map(
        ([t, points])=>   <>
        <LI className="italic">
      Calculer <strong>{t}</strong> de cette série de données, écrire le détail du calcul.
    </LI>
    <DotLine count={3}/>
    <NoteBox points={points} />
        </>)}

        <div className="important-equation font-bold text-red-500"> ATTENTION SUITE AU DOS</div>
        <PageBreak/>
    <LI>
      Analyser (décrire) les données collectées. <em className="text-xs">Ici parlez-moi de la série, je vous donne le point si ce que vous dites est vrai par rapport à vos données, n'hésitez pas à regarder si le mode de transport a un lien avec le temps de trajet.</em>
    </LI>
    <DotLine count={15}/>
    <NoteBox points={bareme.conclusion} />
    </OL>
    <NoteBox total points={sumPoints(bareme)} />

    </Document>
  );
}
