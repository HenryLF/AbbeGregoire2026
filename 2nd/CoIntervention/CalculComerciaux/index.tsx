import { Document, Exercice } from "@components";
import {
  Block,
  BlockBox,
  DotLine,
  H1,
  LI,
  Page,
  PageBreak,
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

      <Page page="landscape">
        <BlockBox align="middle">
          <DotLine count={20} />
          <Block ratio={0.1} className={"border-r border-solid h-225 w-0!"} />
          <DotLine count={20} />
        </BlockBox>
      </Page>
    </Document>
  );
}
