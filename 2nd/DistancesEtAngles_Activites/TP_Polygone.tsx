import { QR, TP } from "@components";
import { Block, BlockBox, DotLine, LaTeX, LI } from "@weasyprint-tsx/ui";

// TODO: remplacer par le lien du fichier GeoGebra une fois publié.
export const GGB_PENTAGONE = "dabfnswd";
export const GGB_HEXAGONE = "abxauanb";

interface TPPolygoneProps {
  /** Nom avec article, ex. "le pentagone" / "l'hexagone" */
  nom: string;
  /** Côté (en cm) à régler pour le calcul de l'aire d'un triangle */
  cote: string;
  /** Côté (en cm) du polygone dont l'aire est donnée */
  coteFigure: string;
  href: string;
}

export function TPPolygone({ nom, cote, coteFigure, href }: TPPolygoneProps) {
  const Nom = nom.charAt(0).toUpperCase() + nom.slice(1);
  const titre = nom.replace(/^(le |l')/, "");
  return (
    <TP title={`Aire d'un ${titre} régulier`} className="break-before-page">
      <BlockBox>
        <Block ratio={8}>
          <div className="text">
            Un <strong>{titre}</strong> est un polygone à{" "}
            <DotLine width={"2cm"} /> cotés
          </div>
          <p>
            Dans cette activité, on cherche à obtenir l'aire d'un {titre}{" "}
            régulier en le décomposant en triangles isométriques.
          </p>
          <p>
            <strong>Avec les boutons</strong>, afficher ou masquer {nom}{" "}
            régulier, le triangle, la hauteur du triangle, et lancer
            l'animation. <strong>Avec le curseur</strong>, modifier la longueur
            du côté.
          </p>
        </Block>
        <Block>
          <QR
            href={`https://www.geogebra.org/m/${href}`}
            className="mx-auto"
            align="center"
          >
            Fichier GeoGebra {href}
          </QR>
        </Block>
      </BlockBox>
      <LI>Combien de triangles isométriques composent {nom} régulier ?</LI>
      <DotLine count={2} />
      <LI>
        Lorsqu'on lance l'animation, chaque triangle s'ajoute par une rotation
        de combien de degrés ?
      </LI>
      <DotLine count={2} />
      <LI>
        Afficher à nouveau un triangle à l'intérieur de {nom} régulier. De
        quelles informations a-t-on besoin pour calculer l'aire d'un des
        triangles ?
      </LI>
      <DotLine count={2} />
      <LI>
        Régler le côté de {nom} régulier à <LaTeX tex={`${cote}\\,cm`} />, puis
        afficher le triangle et sa hauteur. Expliquer comment calculer l'aire de
        ce triangle, puis donner le résultat.
      </LI>
      <DotLine count={3} />
      <LI>
        {Nom} régulier de <LaTeX tex={`${coteFigure}\\,cm`} /> de côté est
        affiché avec son aire. Expliquer comment, à partir des mesures connues,
        on peut retrouver cette aire.
      </LI>
      <DotLine count={3} />
      <LI>
        Généraliser : proposer une formule permettant de calculer l'aire d'un{" "}
        {titre} régulier quelles que soient ses dimensions.
      </LI>
      <DotLine count={3} />
    </TP>
  );
}
