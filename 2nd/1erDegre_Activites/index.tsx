import { Block, BlockBox, DotLine, Entry, H1, LaTeX, LI, Table, UL } from "@weasyprint-tsx/ui";
import { brush, hammer, paint, parpaing, shoes1, shoes2, shoes3, truck1, truck2, truck3 } from "@assets";
import { Call, Circle, Exercice, Img, Interval, Options, SubQuestions, TP } from "@components";
import "./index.css";

const X = () => <LaTeX tex="x" />

export default function Document() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>My Document</title>
        <link rel="stylesheet" href="index.css" />
      </head>
      <body>
        <H1>Equation du premier degré</H1>
        <TP title="Réflexions mentales ...">
          <LI>Compléter la case manquante.</LI>
          <BlockBox basis={2} style={{ "--img-height": "1.2cm" }}>
            {[
              <>

                <Img src={hammer} /> +
                <Img src={hammer} /> +
                <Img src={hammer} />
                = 9
              </>,
              <>
                <Img src={hammer} /> +
                <Img src={brush} /> +
                <Img src={brush} />
                = 13
              </>,

              <>
                <Img src={hammer} /> +
                <Img src={brush} /> +
                <Img src={paint} />
                = 22
              </>,

              <>
                <Img src={hammer} /> x
                <Img src={brush} /> -
                <Img src={paint} />
                = ???
              </>,
            ].map((child, k) =>
              <div className="img-equation w-8/10 block mb-[1mm]">
                <Circle>{k + 1}</Circle> {child}
              </div>

            )}
          </BlockBox>
          <DotLine count={4} />
          <LI>Compléter la case manquante.</LI>

          <BlockBox style={{ "--img-height": "0.4cm" }}>
            {[
              {
                child: <>
                  <Img src={truck1} />
                  = 30
                </>, ratio: 1
              },

              {
                child: <>
                  <Img src={truck2} />
                  = 50
                </>, ratio: 1
              },
              {
                child: <>                  3 x <Img src={truck1} />
                  + <Img src={truck3} />
                  = <Img src={truck2} /> + 5 x <Img src={truck3} />

                </>, ratio: 3
              },
              {
                child: <>    <Img src={truck3} /> = ?
                </>, ratio: 1
              },

            ].map(({ child, ratio }, k) =>
              <Block ratio={ratio}>
                <div className="img-equation block mb-[1mm]" >
                  <Circle>{k + 1}</Circle> {child}
                </div>
              </Block>

            )}
          </BlockBox>
          <DotLine count={5} />
        </TP>
        <Exercice title="Equations de base">
          <BlockBox basis={3}>
            {[
              "3=6+x",
              "42 = 6x",
              "6x = 9",
              "4+x=2",
              "x + 2 = 1 245",
              "{\\large \\frac{x}{2}} = 80",
              "1 = 0,8 + x",
              "23  = {\\large \\frac{x}{56}}",
              "3+x =8"
            ].map((tex) => <div className="h-[2.5cm] border border-solid mb-[2mm]">
              <LaTeX tex={`${tex} \\Harr`} />
            </div>)}
          </BlockBox>
        </Exercice>

        <Exercice title="Manipulation d'équations">
          <BlockBox basis={3}>
            {[
              "6x - 5 = 19",
              "3x + 12 = -9",
              "3x - 1 = 8",
              "28 - 8x = 12",
              "x + 5 = 3x - 7",
              "4x - 5 = 3x + 9",
              "9x + 8 = 13x - 1",
              "3x - 5 = x - 7",
              "18 + 3x = 32 - 5x",
            ].map((tex) => <div className="h-[3.5cm] border border-solid mb-[2mm]">
              <LaTeX tex={`${tex} \\Harr`} />
            </div>)}
          </BlockBox>
        </Exercice>

        <Exercice title="Terrains d'arbres">
          <p>

            La construction d’une portion d’autoroute doit passer sur un terrain dont les
            arbres devront être déracinés avant de pouvoir faire le terrassement.
            Le propriétaire de la portion fait l’inventaire des <em>2 500 arbres</em> qu’on peut y
            trouver.  Le terrain contient <em>quatre fois plus de chênes que de châtaigniers</em> et{" "}
            <em>500 autres arbres</em> différents . <span className="font-bold">
              Le propriétaire veut connaitre le nombre de
              chênes et le nombre de châtaigniers.</span>
          </p>
          <LI>
            On appelle <X /> le nombre de châtaigniers. Choisir, parmi les propositions
            <X />  suivantes, la manière d’écrire le nombre de chênes :
          </LI>
          <Options>{[
            "x + 4",
            "4x",
            "\\large \\frac{x}{2}",
            "4-x"
          ].map(tex => <LaTeX tex={tex} />)}
          </Options>
          <DotLine />
          <LI>Sachant que : <LaTeX className="text-xs" tex="nombre\,de\,châtaigniers + nombre\,de\,chênes + nombre\,des\,autres\,arbres = nombre\,total\,d’arbre" />,
            choisir parmi les équations suivantes celle qui traduit le problème à résoudre.</LI>

          <Options>{[
            "x + 40 - 500 = 2 500",
            "x + 4x + 500 + 2 500 = 0",
            "x + 4x + 500 = 2 500",
          ].map(tex => <LaTeX tex={tex} />)}
          </Options>
          <DotLine />
          <LI>Résoudre l’équation choisie.</LI>
          <DotLine count={4} />

          <LI>Répondre au problème en déduisant le nombre de chênes et de châtaigniers.</LI>
          <DotLine count={2} />
        </Exercice>

        <Exercice title="Consommations à un bar">
          <div className="text">
            Cinq ouvriers sont à une terrasse d’un café. Ils commandent 2 cafés et 3 sodas.
            Le prix du soda est le double de celui du café et l’addition s’élève à 12 €.
            On note <X /> le prix d’un café.
          </div>
          <LI>
            Exprimer en fonction de <X /> le prix d’un soda.
          </LI>
          <DotLine />
          <LI>
            Exprimer en fonction de <X /> le prix de 3 soda.
          </LI>
          <DotLine />
          <LI>
            Écrire l’équation qui traduit la commande de 2 cafés et de 3 sodas pour 12 €.
          </LI>
          <DotLine count={2} />
          <LI>
            Résoudre l’équation trouvée à la question précédente.
          </LI>
          <DotLine count={3} />
          <LI >
            Quel est le prix d’un café et celui d’un soda ?
          </LI>
          <DotLine count={2} />
        </Exercice>
        <Exercice title="Le 3 000 mètre">
          <p>
            En athlétisme, le record du monde masculin du 3 000 m est détenu depuis 2024 par Jakob Ingebrigtsen. <br />
            Pour franchir la ligne d’arrivée du 3 000 m, il est nécessaire de parcourir 7 tours de stade
            et 200 m.
          </p>
          <LI format={() => ""}>Quelle est la longueur d’un tour de stade ?</LI>
          <DotLine count={5} />
        </Exercice>

        <TP title="Ventes de chaussures de sécurité">
          <BlockBox>
            <p>Un magasin de chaussures de sécurité
              propose trois types de modèles S1, S2 et S3. À
              la fin de la journée, <em>27 ventes ont été réalisées</em>.
              Il y a eu <em>2 fois plus de modèles S3 que de S1 </em>
              et <em> une paire de plus du modèle S1 que du
                modèle S2</em>.</p>
            <Block ratio={0.5}>
              {[shoes1, shoes2, shoes3].map((img, k) => <div className="inline-block pl-5">
                <Img src={img} align="center" className="w-15 align-middle">Chaussure S{k + 1}</Img>
              </div>)}
            </Block>
          </BlockBox>
          <div className="font-bold text-center block">On cherche à déterminer combien de chaque type de modèles ont été vendus.</div>
          <LI>Soit <X /> le nombre de paires de chaussures de sécurité de modèle S1 vendues.</LI>
          <SubQuestions count={1}>
            <LI>
              Exprimer le nombre de chaussures de modèle S2 vendues en fonction de <X /> :
            </LI>
            <Options>{
              ["x + 1",
                "x - 1",
                "x + 2 ",
                "x - 2",
                "\\large \\frac{x}{2} ",
                "2x"].map(tex => <LaTeX tex={tex} />)}
            </Options>
            <LI>
              Exprimer le nombre de chaussures de modèle S3 vendues en fonction de x :
            </LI>
            <Options>{
              ["x + 1",
                "x - 1",
                "x + 2 ",
                "x - 2",
                "\\large \\frac{x}{2} ",
                "2x"].map(tex => <LaTeX tex={tex} />)}
            </Options>
            <LI>En déduire l’équation à résoudre pour répondre au problème posé :</LI>
            <DotLine count={2} />
          </SubQuestions>
          <Call>Faire vérifier la mise en équation du problème</Call>
          <LI>On dispose du fichier Libre Office CALC « CHAUSSURES.ods ».</LI>
          <SubQuestions count={2}>
            <LI>Numéroter de 1 à 27 le nombre de paires de chaussures de modèle S1 dans la colonne A.</LI>
            <LI>Saisir en B2 la formule correcte : </LI>
            <Options>
              <>« =A2 - 1 »</>
              <>« =2*A2 »</>
            </Options>
            <LI>Saisir en C2 la formule correcte : </LI>
            <Options>
              <>« =A2 - 1 »</>
              <>« =2*A2 »</>
            </Options>
            <LI>Saisir une formule en D2 pour calculer le total des paires de chaussures de sécurités vendues.</LI>
            <LI>Sélectionner les cellules A2 à D2, puis copier les jusqu’à la ligne 28.</LI>
          </SubQuestions>
          <Call>Faire vérifier le tableau.</Call>
          <LI>
            Déterminer la solution de l’équation à l’aide du tableau obtenu. <X /> = <DotLine inline width={"3cm"} />
          </LI>
          <LI>
            Répondez à la question du problème.
          </LI>
          <DotLine count={3} />
        </TP>

        <H1>Inéquations du premier degré</H1>
        <TP title="Notion d'intervalle">
          <p>
            Un intervalle de valeurs se note entre crochet. Il existe cependant deux sortent de crochet :
          </p>
          <UL indent={"5mm"} >
            <LI className="not-italic!">
              les crochets « fermés », comme par exemple <LaTeX tex="[3 ; 5]" /> : cet intervalle représente tous les nombres compris
              entre 3 et 5, les nombres 3 et 5 inclus (= compris) ;
            </LI>
            <LI className="not-italic!">
              les crochets « ouverts », comme par exemple <LaTeX tex="]2 ; 8[" /> : cet intervalle représente tous les nombres compris
              entre 2 et 8, les nombres 2 et 8 exclus (= non compris).
            </LI>
          </UL>
          <SubQuestions count={1}>
            {[["[", 2, ";", 15, "]",],
            ["]", -6, ";", 6, "[",],
            ["]", 4, ";", 7.5, "]",],
            ["[", 25, ";", 50, "["],
            ["]", 8, ";", 9.8, "]"]].map(arr =>
              <LI>Dans l'intervalle <LaTeX tex={arr.join("")} /> :
                <UL indent={0} className="columns-2 inline-block! align-bottom! ml-2">
                  <LI>
                    {arr[1]} est-il <span className="font-bold">compris / non compris</span>,
                  </LI>
                  <LI>
                    {arr[3]} est-il <span className="font-bold">compris / non compris</span>
                  </LI>
                </UL>
              </LI>
            )}
            <LI>
              L’écriture <LaTeX tex="[9 ; 3[" /> est-elle correcte ?  Si non, la réécrire correctement
            </LI>
            <DotLine />
            <LI>
              Écrire l’intervalle des nombres compris entre 5 et 15, avec 5 inclus et 15 exclu.
            </LI>
            <DotLine />
            <LI>
              Écrire l’intervalle des nombres compris entre -8 et -6, avec -8 exclu et -6 inclus.
            </LI>
            <DotLine />
            <LI>
              Écrire l’intervalle des nombres compris entre 4 et 2, avec 4 inclus et 2 inclus.
            </LI>
            <DotLine />
          </SubQuestions>
          <BlockBox>
            <Block ratio={2}>
              <LI value={2}>On peut représenter un intervalle sur une droite
                graduée. L’exemple ci-contre traduit l’intervalle <LaTeX tex="[2 ; 3[" />.
                Completer le tableau suivant:
              </LI>
            </Block>
            <Interval min={0} max={5} from={2} to={3} closedRight={false} />
          </BlockBox>
          <Table className={"w-8/10 mx-auto"}>
            <Entry contentClass="px-2" content={[
              <Interval from={0} to={3} />,
              <Interval min={-6} max={2} from={-5} to={-3.5} />,
              <Interval min={-4} max={4} />,
            ]}>Representation graphique</Entry>
            <Entry content={[
              <DotLine />,
              <DotLine />,
              <LaTeX tex="]-2;1]" />
            ]
            }>Intervalle</Entry>
          </Table>
          <LI>
            La notation <LaTeX tex="\infty" /> se lit « infini ». L’infini du côté des nombres négatifs se note <LaTeX tex="-\infty" /> et l’infini côté positif <LaTeX tex="+\infty" />.
            {" "}<em>Attention, on associe systématiquement un crochet ouvert avec le symbole <LaTeX tex="\infty" /> dans un intervalle.</em>
          </LI>

          <Table className={"w-8/10 mx-auto my-2"}>
            <Entry contentClass="px-2" content={[
              <Interval from={0} to={Infinity} />,
              <Interval from={-Infinity} to={3} />,
              <Interval min={-4} max={4} />,
              <Interval min={-4} max={4} />,
            ]}>Representation graphique</Entry>
            <Entry content={[
              <DotLine />,
              <DotLine />,
              <LaTeX tex="]-\infty ; - 1,5[" />,
              <LaTeX tex="[-2,5 ; +\infty[" />
            ]
            }>Intervalle</Entry>
          </Table>
          <div className="text">
            Les deux membres d’une inéquation sont séparés par un des signes suivants : <LaTeX tex="<" />, <LaTeX tex=">" />, <LaTeX tex="\le" /> ou <LaTeX tex="\ge" />.
            La solution d’une inéquation est un ensemble de nombre, noté par un (ou plusieurs) intervalle(s).
          </div>
          <BlockBox>
            <Block ratio={2}>
              <LI>
                L’inéquation <LaTeX tex="x > 2" /> a pour solution l’intervalle <LaTeX tex="]2 ; +\infty[" /> dont la représentation graphique est donnée ci contre :<br />
                Traduire les résultats d’inéquations suivants, en intervalle, puis en représentation graphique :
              </LI>
            </Block>
            <Interval from={2} to={Infinity} />
          </BlockBox>
          <Table className="w-9/10 mx-auto">
            <Entry content={[
              <LaTeX tex="x<3" />,
              <LaTeX tex="x \le 1,5" />,
              <LaTeX tex="x > 2,5" />,
              <LaTeX tex="x \ge -0,5" />,
              <LaTeX tex="1 < x < 2,5" />,
            ]}>Inéquation</Entry>
            <Entry content={[]}>Intervalle</Entry>
            <Entry contentClass="px-2" content={
              Array(5).fill(<Interval />)}>Représentation graphique</Entry>
          </Table>
        </TP>

        <Exercice title="Palette de parpaing">
          <BlockBox>
            <Block ratio={3}>
              <p>
                Un parpaing peut être assimilé à un parallélépipède rectangle dont les
                dimensions sont données ci-contre.<br />
              </p>
              <LI>
                Calculer le volume (en m<sup>3</sup>) d’un parpaing.<br />
                On rappelle que : <LaTeX tex="V = L\times l \times h" />
              </LI>
              <DotLine count={2} />
            </Block>
            <Img align="right" src={parpaing}>Dimensions d'un parpaing </Img>
          </BlockBox>
          <LI>
            Un mètre cube (m<sup>3</sup>) de béton pèse <LaTeX tex="\rho =2 200 kg/m^3" />, calculer la masse d'un parpaing.
          </LI>
          <DotLine count={2} />
          <LI>
            On souhaite élever une palette chargée de parpaings. On considère que la
            masse de la palette vide est de 30 kg et que celui d’un parpaing est de 8 kg.
            Donner la masse d'une palette en fonction de <X /> le nombre de parpaings chargés.
          </LI>
          <DotLine count={3} />
          <LI>
            Afin de ne pas dépasser la capacité de charge d’un chariot, il est nécessaire
            que la masse à soulever lors de l’élévation à une grande hauteur, ne dépasse
            pas 1 000 kg. Traduire cette contrainte par une inéquation puis la résoudre.
          </LI>
          <DotLine count={4} />
        </Exercice>

        <Exercice title="Frais kilométriques">
          <p>
            Une entreprise de travaux publics propose pour le remboursement des frais
            kilométriques hebdomadaires de ses chefs de chantier deux options :
          </p>
          <UL marker="&bull; Option">
            <LI><Circle>A</Circle> : Forfait de 60 € + 0,32 € par kilomètre;</LI>
            <LI><Circle>B</Circle> : Forfait de 90 € + 0,17 € par kilomètre.</LI>
          </UL>
          <div className="text-center font-bold w-8/10 mx-auto"> Problématique: On cherche à déterminer l’option la plus avantageuse
            en fonction du nombre de kilomètres parcourus</div>

          <LI>Pour une distance parcourue de 120 km.</LI>
          <SubQuestions count={1}>
            <LI>Calculer pour les deux options les frais remboursés en une semaine.</LI>

            <UL marker="&bull; Option" indent={0}>
              <LI>
                <Circle>A</Circle>
                <DotLine width={"12cm"} />
              </LI>
              <LI>
                <Circle>B</Circle>
                <DotLine width={"12cm"} />
              </LI>
            </UL>
            <LI>Quelle est dans ce cas l'option la plus rentable pour le chef de chantier.</LI>
            <DotLine />
          </SubQuestions>

          <LI>Pour une distance parcourue de 275 km.</LI>
          <SubQuestions count={2}>
            <LI>Calculer pour les deux options les frais remboursés en une semaine.</LI>
            <UL marker="&bull; Option" indent={0}>
              <LI>
                <Circle>A</Circle>
                <DotLine width={"12cm"} />
              </LI>
              <LI>
                <Circle>B</Circle>
                <DotLine width={"12cm"} />
              </LI>
            </UL>
            <LI>Quelle est dans ce cas l'option la plus rentable pour le chef de chantier.</LI>
            <DotLine />
          </SubQuestions>


          <LI >On désigne par <X /> le nombre de kilomètres parcourus en une semaine par le chef de chantier.</LI>

          <SubQuestions count={3}>
            <LI>Donner la relation permettant de calculer les frais remboursée <LaTeX tex="F_A" />  en fonction de <X /> dans l'option <Circle>A</Circle>.</LI>
            <DotLine />
            <LI>Donner la relation permettant de calculer les frais remboursée <LaTeX tex="F_B" />  en fonction de <X /> dans l'option <Circle>B</Circle>.</LI>
            <DotLine />
            <LI>Donner une inequation traduisant la problématique.</LI>
            <DotLine count={2} />
          </SubQuestions>

          <LI>Résoudre l'inéquation et répondre à la problématique.</LI>
          <DotLine count={5} />
        </Exercice>
      </body>
    </html >
  );
}
