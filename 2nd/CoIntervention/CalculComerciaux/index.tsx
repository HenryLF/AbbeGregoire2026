import { Document, Exercice } from "@components";
import {
  Block,
  BlockBox,
  DotLine,
  H1,
  LI,
  Page,
  PageBreak,
  Stack,
  StackChild,
} from "@weasyprint-tsx/ui";
import "./index.css";

interface Produit {
  nom: string;
  prixAchatBrut: string;
  remise: string;
  livraison: string;
  tva: string;
  prixVenteHT: string;
}

type Row = {
  label: string;
  taux?: "remise" | "livraison" | "tva" | "answer";
  montant?: "answer" | "prixAchatBrut" | "prixVenteHT";
  total?: boolean;
};

const rows: Row[] = [
  { label: "Prix d’achat brut", montant: "prixAchatBrut" },
  { label: "Remise", taux: "remise", montant: "answer" },
  { label: "Prix d’achat net", montant: "answer" },
  { label: "Frais de livraison", taux: "livraison", montant: "answer" },
  { label: "Coût d’achat HT", montant: "answer", total: true },
  { label: "TVA déductible", taux: "tva", montant: "answer" },
  { label: "Coût d’achat TTC", montant: "answer" },
  { label: "Prix de vente HT", montant: "prixVenteHT", total: true },
  { label: "TVA collectée", taux: "tva", montant: "answer" },
  { label: "Prix de vente TTC", montant: "answer", total: true },
  { label: "Coefficient multiplicateur TTC", montant: "answer" },
  { label: "Marge commerciale", montant: "answer" },
  { label: "Taux de marge", taux: "answer" },
  { label: "Taux de marque", taux: "answer" },
];

const justifications = [
  "Remise",
  "Prix d’achat net",
  "Frais de livraison",
  "Coût d’achat HT",
  "TVA déductible",
  "Coût d’achat TTC",
  "TVA collectée",
  "Prix de vente TTC",
  "Coefficient multiplicateur TTC",
  "Marge commerciale",
  "Taux de marge",
  "Taux de marque",
];

function ElementsDuPrix({ produit }: { produit: Produit }) {
  const cell = (key: Row["taux"] | Row["montant"]) => {
    if (!key) return <td />;
    if (key === "answer") return <td className="answer w-[3.5cm]" />;
    return <td className="given w-[3.5cm]">{produit[key]}</td>;
  };
  return (
    <table className="calc-table">
      <tr>
        <th colSpan={3}>
          Produit : <span className="font-normal">{produit.nom}</span>
        </th>
      </tr>
      <tr>
        <th className="w-[7cm]">Éléments</th>
        <th>Taux</th>
        <th>Montant (€)</th>
      </tr>
      {rows.map(({ label, taux, montant, total }) => (
        <tr className={total ? "total" : ""}>
          <td>{label}</td>
          {cell(taux)}
          {cell(montant)}
        </tr>
      ))}
    </table>
  );
}

function Justifications() {
  return (
    <table className="justif-table">
      <tr>
        <th>Éléments</th>
        <th>Détail des calculs</th>
      </tr>
      {justifications.map((label) => (
        <tr>
          <td>{label}</td>
          <td />
        </tr>
      ))}
    </table>
  );
}

interface Aide {
  terme: string;
  definition: string;
  donnees: string[];
  calcul: string;
  resultat: string;
}

const aidePrixCouts: Aide[] = [
  {
    terme: "Remise",
    definition:
      "Réduction commerciale accordée sur le prix initial d'un produit (quantité importante, type de client, etc.).",
    donnees: ["Prix initial : 200 €", "Remise : 20 €"],
    calcul: "Prix initial - Remise = 200 € - 20 €",
    resultat: "Prix final : 180 €",
  },
  {
    terme: "Prix d'achat net",
    definition: "Prix d'achat après déduction des remises.",
    donnees: ["Prix catalogue : 40 €", "Remise : 5 €"],
    calcul: "Prix catalogue - Remise = 40 € - 5 €",
    resultat: "Prix d'achat net : 35 €",
  },
  {
    terme: "Frais de livraison",
    definition: "Coût du transport des marchandises jusqu'au lieu de vente.",
    donnees: ["Achat produit : 80 €", "Transport : 10 €"],
    calcul: "Prix produit + Transport = 80 € + 10 €",
    resultat: "Total à payer : 90 €",
  },
  {
    terme: "Coût d'achat HT",
    definition:
      "Somme du prix d'achat net et des frais annexes, sans compter la TVA.",
    donnees: ["Prix net : 150 €", "Livraison : 10 €"],
    calcul: "Prix net + Livraison = 150 € + 10 €",
    resultat: "Coût d'achat HT : 160 €",
  },
  {
    terme: "TVA déductible",
    definition:
      "TVA payée par l'entreprise sur ses achats, qu'elle peut déduire de la TVA qu'elle collecte.",
    donnees: ["Achat fournitures : 100 € HT", "Taux TVA : 20 %"],
    calcul: "Montant HT \\times Taux TVA = 100 € \\times 20 %",
    resultat: "TVA déductible : 20 €",
  },
  {
    terme: "Coût d'achat TTC",
    definition: "Coût d'achat total incluant la TVA.",
    donnees: ["Coût HT : 100 €", "TVA (20 %) : 20 €"],
    calcul: "Coût HT + TVA = 100 € + 20 €",
    resultat: "Coût TTC : 120 €",
  },
];

const aideVenteMarges: Aide[] = [
  {
    terme: "TVA collectée",
    definition: "TVA que l'entreprise facture à ses clients lors de la vente.",
    donnees: ["Vente : 50 € HT", "Taux TVA : 20 %"],
    calcul: "Montant HT \\times Taux TVA = 50 € \\times 20 %",
    resultat: "TVA collectée : 10 €",
  },
  {
    terme: "Prix de vente TTC",
    definition: "Prix final payé par le client, incluant la TVA.",
    donnees: ["Prix HT : 20 €", "Taux TVA : 20 %"],
    calcul: "Prix HT + (Prix HT \\times Taux TVA) = 20 € + (20 € \\times 20 %)",
    resultat: "Prix TTC affiché : 24 €",
  },
  {
    terme: "Coefficient multiplicateur TTC",
    definition:
      "Nombre par lequel on multiplie le coût d'achat HT pour obtenir le prix de vente TTC.",
    donnees: ["Coût HT : 50 €", "Prix TTC : 100 €"],
    calcul: "Prix de vente TTC ÷ Coût d'achat HT = 100 € ÷ 50 €",
    resultat: "Coefficient : 2",
  },
  {
    terme: "Marge commerciale",
    definition: "Différence entre le prix de vente HT et le coût d'achat HT.",
    donnees: ["Achat : 200 € HT", "Vente : 300 € HT"],
    calcul: "Prix de vente HT - Coût d'achat HT = 300 € - 200 €",
    resultat: "Marge : 100 €",
  },
  {
    terme: "Taux de marge",
    definition:
      "Rapport entre la marge commerciale et le coût d'achat HT, exprimé en pourcentage.",
    donnees: ["Marge : 60 €", "Coût d'achat HT : 40 €"],
    calcul: "(Marge ÷ Coût d'achat HT) \\times 100 = (60 € ÷ 40 €) \\times 100",
    resultat: "Taux de marge : 150 %",
  },
  {
    terme: "Taux de marque",
    definition:
      "Rapport entre la marge commerciale et le prix de vente HT, exprimé en pourcentage.",
    donnees: ["Marge : 60 €", "Prix de vente HT : 100 €"],
    calcul:
      "(Marge ÷ Prix de vente HT) \\times 100 = (60 € ÷ 100 €) \\times 100",
    resultat: "Taux de marque : 60 %",
  },
];

function AideCards({ title, aides }: { title: string; aides: Aide[] }) {
  return (
    <div>
      <div className="aide-title">{title}</div>
      <Stack gap={"0.5cm"} expend>
        {aides.map(({ terme, definition, donnees, calcul, resultat }) => (
          <StackChild className="aide-card">
            <div className="aide-terme">{terme}</div>
            <div className="aide-definition">{definition}</div>
            <div className="aide-exemple">
              {donnees.join(" ; ")}
              <br />
              <em>Calcul :</em> {calcul} ➜ <strong>{resultat}</strong>
            </div>
          </StackChild>
        ))}
      </Stack>
    </div>
  );
}

function CalculsCommerciaux({
  title,
  produit,
}: {
  title: string;
  produit: Produit;
}) {
  return (
    <Exercice title={title}>
      <p>
        <em>Activité</em> : magasin de musique, commercialisant des instruments
        de musique. <em>Taux de TVA</em> :{" "}
        {produit.tva === "20 %" ? "normal" : "réduit"}.
      </p>
      <LI>
        Calculer les éléments du prix du produit en complétant le tableau
        suivant.
      </LI>
      <ElementsDuPrix produit={produit} />
      <LI>Justifier les calculs effectués.</LI>
      <Justifications />
    </Exercice>
  );
}

export default function CalculsCommerciauxDocument() {
  return (
    <Document title="Calculs commerciaux - Co-intervention">
      <H1>Les calculs commerciaux</H1>
      <CalculsCommerciaux
        title="Guitare électrique"
        produit={{
          nom: "Guitare électrique Fender Jimi Hendrix Strat MN 3",
          prixAchatBrut: "1 021,24",
          remise: "4 %",
          livraison: "2 %",
          tva: "20 %",
          prixVenteHT: "1 250,00",
        }}
      />
      <PageBreak />
      <CalculsCommerciaux
        title="Livre de piano"
        produit={{
          nom: "Livre - Technique et répertoire pianistique",
          prixAchatBrut: "40,41",
          remise: "2 %",
          livraison: "1 %",
          tva: "5,5 %",
          prixVenteHT: "45,50",
        }}
      />

      <Page page="landscape" >
      <BlockBox align="middle">
        <AideCards title="Prix et coûts" aides={aidePrixCouts} />
        <Block ratio={0.1} className={"border-r border-solid h-225 w-0!"} />
        <AideCards title="Vente et marges" aides={aideVenteMarges} />
      </BlockBox>
      <BlockBox align="middle">
        <DotLine count={20} />
        <Block ratio={0.1} className={"border-r border-solid h-225 w-0!"} />
        <DotLine count={20} />
      </BlockBox>
      </Page>
    </Document>
  );
}
