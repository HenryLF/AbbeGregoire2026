import {
  aire_carre,
  aire_circ,
  aire_rect,
  aire_tri,
  cone,
  cube,
  cylinder,
  ex_tri,
  parallep,
  pyramid,
  pythagore,
  sphere,
} from "@assets";
import {
  Details,
  Img,
  ImportantEquation,
  Note,
  Problem,
  Rappel,
} from "@components";
import {
  Block,
  BlockBox,
  DotLine,
  Entry,
  H1,
  H2,
  H6,
  LaTeX,
  LI,
  Table,
} from "@weasyprint-tsx/ui";
import "./index.css";

const listUnit = [
  "km",
  "hm",
  "dam",
  <strong>m</strong>,
  "dm",
  "cm",
  "mm",
  null,
  null,
  "µm",
  null,
  null,
  "nm",
];

function UnitTable({ dim = 1 }: { dim?: number }) {
  return (
    <table className="border-collapse my-5 mx-auto ">
      <tr>
        {listUnit.map((e) => (
          <td
            colSpan={dim}
            className="border-solid border border-t-0 first:border-l-0 last:border-r-0 w-10 text-center font-bold px-2"
          >
            {e && (
              <>
                {e}
                {dim > 1 ? <sup>{dim}</sup> : null}
              </>
            )}
          </td>
        ))}
      </tr>
      <tr>
        {Array.from({ length: 13 * dim }, (_) => (
          <td className="h-10 border-solid border border-b-0 first:border-l-0 last:border-r-0" />
        ))}
      </tr>
    </table>
  );
}

export default function Document() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>My Document</title>
        <link rel="stylesheet" href="index.css" />
      </head>
      <body>
        <H1>Distances</H1>
        <p>
          Les <strong>distances</strong> sont des longueurs mesurées en mètre
          (ou dans l'une de ses unités multiples).{" "}
          <em>Une distance est toujours positive !</em>{" "}
        </p>
        <UnitTable />
        <Details align="right">Tableau de conversion des distances.</Details>
        <H2>Périmètre du cercle</H2>
        <Rappel>
          Le <strong>rayon</strong> d'un cercle est la distance entre son centre
          et sa bordure. Le <strong>diamètre</strong> est la plus grande
          longueur au sein du cercle, il est égal à deux fois le rayon.
        </Rappel>
        <BlockBox>
          <Block ratio={4}>
            <div className="text">
              Le <strong>périmètre</strong> <LaTeX tex="\mathcal{P}" /> est la
              longueur du contour d'un cercle de rayon <LaTeX tex="r" />. Il est
              donné par la formule :
              <ImportantEquation tex="\mathcal{P} = 2 \pi\: r" fontSize={14} />
            </div>
          </Block>
          <Img src={aire_circ} className="h-30 mx-auto" />
        </BlockBox>
        Où <LaTeX tex="\pi" /> (se lit « pi ») est un nombre irrationnel (que
        l'on ne peut écrire complètement).{" "}
        <LaTeX tex="\large \pi \approx 3.1415\:...\:...." />
        <Problem>
          Le diamètre des roues d'une trottinette est de <LaTeX tex="d=10cm" />.
          <BlockBox align="top">
            <Block className="h-40 bg-[#e0e0e060]" />
            <Block ratio={3}>
              <LI>Faire un schéma du problème.</LI>
              <LI>
                Calculer la distance parcourue par la trottinette en un tour de
                roue.
              </LI>
              <DotLine count={3} />
            </Block>
          </BlockBox>
        </Problem>
        <H2>Théorème de Pythagore</H2>
        <Rappel>
          Un <strong>triangle rectangle</strong> est un triangle dont l'un des
          angles est un angle droit. On appelle le côté le plus long (qui est
          celui <DotLine width={"3cm"} /> à l'angle droit){" "}
          <strong>l'hypoténuse</strong>.
        </Rappel>
        <BlockBox>
          <Img src={pythagore} />
          <Block ratio={1.5}>
            <p>
              Le <strong>théorème de Pythagore</strong> nous donne la relation
              entre la longueur des trois côtés d'un{" "}
              <strong>triangle rectangle</strong>.
            </p>
            <div className="font-bold important-equation text-center">
              Le carré de la longueur de l'hypoténuse est égal à la somme des
              carrés des deux autres côtés.
            </div>
            Autrement dit, pour le triangle ci-contre rectangle en{" "}
            <DotLine width={"0.5cm"} />
            <ImportantEquation
              className="text-[16px]!"
              tex="BC^2 = AB^2 + AC^2"
            />
          </Block>
        </BlockBox>
        <Problem>
          Le triangle ABC est rectangle en A. On donne <LaTeX>AB=3 cm</LaTeX> et{" "}
          <LaTeX>AC=4 cm</LaTeX>.
          <BlockBox>
            <Block
              style={{
                backgroundColor: "#eeeeee60",
                height: "3cm",
              }}
            />
            <Block className="questions" ratio={1.5}>
              <LI> Faire un schéma du triangle.</LI>
              <LI> Calculer la longueur BC.</LI>
              <DotLine count={3} />
            </Block>
          </BlockBox>
        </Problem>
        <H1>Aires et Surfaces</H1>
        <p>
          L'<strong>aire</strong> d'une forme géométrique est la grandeur
          associée à la mesure de sa surface, on l'exprime en mètre carré m
          <sup>2</sup> (ou dans l'une de ses unités multiples).{" "}
          <em>Une aire est toujours positive !</em>
        </p>
        <UnitTable dim={2} />
        <Details align="right">Tableau de conversion des aires.</Details>
        <Note>
          Attention, pour les aires, il faut multiplier par{" "}
          <DotLine inline width={"1cm"} /> pour passer au multiple d'unité
          supérieur.
        </Note>
        <>
          <BlockBox basis={2} align="top">
            {[
              {
                img: aire_carre,
                type: "carré",
                spe: (
                  <>
                    côté <LaTeX tex="a" />
                  </>
                ),
              },

              {
                img: aire_rect,
                type: "rectangle",
                spe: (
                  <>
                    largeur <LaTeX tex="l" /> et longueur <LaTeX tex="L" />
                  </>
                ),
              },

              {
                img: aire_circ,
                type: "cercle",
                spe: (
                  <>
                    rayon <LaTeX tex="r" />
                  </>
                ),
              },

              {
                img: aire_tri,
                type: "triangle",
                spe: (
                  <>
                    base <LaTeX tex="b" /> et hauteur <LaTeX tex="H" />
                  </>
                ),
              },
            ].map(({ img, type, spe }) => (
              <div className="mb-2">
                <H6>Aire d'un {type}</H6>
                <BlockBox align="middle">
                  <Img src={img} className="h-25 mx-auto" />
                  <Block ratio={1.2}>
                    L'aire <LaTeX tex={`S_{${type}}`} className="inline!" />{" "}
                    d'un {type} de {spe} est égale à :
                    <ImportantEquation
                      numberFormat={false}
                      tex={`S_{${type}} = \\hspace{2cm}`}
                      className="py-5!"
                    />
                  </Block>
                </BlockBox>
              </div>
            ))}
          </BlockBox>
        </>
        <Note>
          Pour calculer une aire, on multiplie toujours deux distances.
        </Note>
        <H1>Solides et volumes</H1>
        <p>
          On nomme <strong> solide </strong> une forme en trois dimensions.
        </p>
        <p>
          Le <strong>volume</strong> d'une forme géométrique est la grandeur
          associée à la mesure de l'espace qu'elle occupe, on l'exprime en mètre
          cube m<sup>3</sup> (ou dans l'une de ses unités multiples).{" "}
          <em>Un volume est toujours positif !</em>
        </p>
        <UnitTable dim={3} />
        <Details align="right">Tableau de conversion des volumes.</Details>
        <Note>
          Attention, pour les volumes, il faut multiplier par{" "}
          <DotLine inline width={"2cm"} /> pour passer au multiple d'unité
          supérieur. <br></br>
          <LaTeX tex="1L = 1dm^3" />, ainsi un mètre cube contient{" "}
          <DotLine inline width={"2cm"} /> litres.
        </Note>
        <div className="columns-2">
          {[
            {
              img: cube,
              type: "un cube",
              spe: (
                <>
                  côté <LaTeX tex="c" />
                </>
              ),
            },

            {
              img: parallep,
              type: "un pavé droit",
              spe: (
                <>
                  largeur <LaTeX tex="l" /> longueur <LaTeX tex="L" /> et
                  hauteur <LaTeX tex="h" />
                </>
              ),
            },

            {
              img: sphere,
              type: "une sphère",
              spe: (
                <>
                  rayon <LaTeX tex="r" />
                </>
              ),
            },

            {
              img: cylinder,
              type: "un cylindre",
              spe: (
                <>
                  rayon <LaTeX tex="r" /> et hauteur <LaTeX tex="h" />
                </>
              ),
            },

            {
              img: pyramid,
              type: "une pyramide",
              spe: (
                <>
                  base d'aire <LaTeX tex="B" /> et hauteur <LaTeX tex="h" />
                </>
              ),
            },

            {
              img: cone,
              type: "un cône",
              spe: (
                <>
                  base de rayon
                  <LaTeX tex="r" /> et hauteur <LaTeX tex="h" />
                </>
              ),
            },
          ].map(({ img, type, spe }) => (
            <div className="break-inside-avoid-column">
              <H6>Volume d'{type}</H6>
              <BlockBox gap={"2mm"}>
                <Img src={img} className="h-25 mx-auto" />
                <Block ratio={2.1}>
                  <div>
                    Le volume d'{type} de {spe} est égal à :
                  </div>
                  <ImportantEquation
                    numberFormat={false}
                    tex={`V = \\hspace{4cm}`}
                    className="py-5!"
                  />
                </Block>
              </BlockBox>
            </div>
          ))}
        </div>
        <H1>Angles</H1>
        <p>
          Considérons deux droites (ou segments) se croisant : l'
          <strong>angle</strong> est une mesure de l'inclinaison de l'une par
          rapport à l'autre. Il se mesure en degré (noté °) ou en radian (noté
          rad).
        </p>
        <Table
          orientation="row"
          className="w-8/10 mx-auto"
          contentClass="p-2 min-w-10"
        >
          <Entry content={[0, <DotLine />, 90, 180, <DotLine />, 360]}>
            Angle en degré
          </Entry>
          <Entry
            content={[
              0,
              <LaTeX tex="\frac{\pi}{4}" />,
              <DotLine />,
              <LaTeX tex="\pi" />,

              <LaTeX tex="\frac{3\pi}{2}" />,
              <DotLine />,
            ]}
          >
            Angle en radian
          </Entry>
        </Table>
        <Note>
          180° est égal à <LaTeX tex="\pi" /> radians ainsi on peut convertir
          des degrés en radian en utilisant la formule :<br />{" "}
          <LaTeX tex="\theta = \frac{\pi}{180} \times a \Harr a = \frac{180}{\pi} \times \theta " />{" "}
          (où <LaTeX tex="a" /> est l'angle en degré et <LaTeX tex="\theta" />{" "}
          est l'angle en radian).
        </Note>
        <Note headerText="Attention :">
          {" "}
          Les fonctions <LaTeX tex="\sin" />, <LaTeX tex="\cos" /> et{" "}
          <LaTeX tex="\tan" /> prennent des angles comme variables, toujours
          vérifier dans quelle unité l'on travaille avant d'utiliser la
          calculatrice !
        </Note>
        <div className="important-equation font-bold">
          La somme des angles internes d'un triangle est toujours égale à 180°.
        </div>
        <Problem>
          <BlockBox>
            <Block ratio={0.6}>
              <Img src={ex_tri} className=" h-40 mx-auto" />
            </Block>
            <DotLine count={4} />
          </BlockBox>
        </Problem>
      </body>
    </html>
  );
}
