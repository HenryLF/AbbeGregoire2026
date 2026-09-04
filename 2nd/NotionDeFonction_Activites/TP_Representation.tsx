import { BlockBox, DotLine, Entry, LaTeX, LI, Table } from "@weasyprint-tsx/ui";
import { PropsWithChildren } from "preact/compat";
import { ex_calc1, ex_calc2, ex_calc2_1, ex_calc2_2, ex_calc2_3, ex_calc2_4, ex_calc3, ex_calc4 } from "@assets";
import { Call, Circle, Img, SubQuestions, TP } from "@components";
const F_ = ({ children }: PropsWithChildren) => <LaTeX tex={`f_${children}`} />;

export default function(){
    return         <TP title="Comment utiliser la calculatrice pour représenter des fonctions">
          <LI>
            Soit la fonction <F_>1</F_> définie sur <LaTeX>[-4 ; 4]</LaTeX> par{" "}
            <LaTeX tex="f_1(x) = {\large \frac{x}{2}} + 3" />.
          </LI>
          <SubQuestions count={1}>
            <LI>Saisir la définition de la fonction dans la calculatrice.</LI>

            <LI>
              Paramétrer la calculatrice pour qu’elle donne les valeurs prises
              par la fonction f entre -4 et 4 avec un pas de 1.
            </LI>
            <LI>
              Afficher les résultats et compléter le tableau de valeurs suivant:
            </LI>
            <Table
              orientation="row"
              className="w-8/10 mx-auto"
              contentClass="min-w-1/10 px-2"
            >
              <Entry
                content={Array.from({ length: 9 }, (_, k) => k - 4)}
                cellBg="var(--wsx--table--header-color)"
              >
                <LaTeX tex="x" />
              </Entry>
              <Entry content={Array(9).fill("")}>
                <LaTeX tex="f_1(x)" />
              </Entry>
            </Table>
            <Call>Faire vérifier les résultats</Call>
          </SubQuestions>
          {[
            { tex: "{\\large \\frac{x^2 + 6}{4}}", min: -9, step: 3 },
            { tex: "{\\large \\frac{10000 }{x + 50}} - x", min: 0, step: 50 },
            { tex: "(16 - x)^2 + 2x", min: 6, step: 2 },
          ].map(({ tex, min, step }, k) => (
            <>
              <LI>
                Soit la fonction <LaTeX tex={`f_${k + 2}`} /> définie sur{" "}
                <LaTeX tex={`[${min};${min + step * 7}]`} /> par
                <LaTeX tex={`f_${k + 2} = ${tex}`} />. Compléter le tableau de
                valeurs suivant :
              </LI>
              <Table
                orientation="row"
                className="w-8/10 mx-auto"
                contentClass="min-w-1/10 px-2"
              >
                <Entry
                  content={Array.from({ length: 7 }, (_, k) => min + k)}
                  cellBg="var(--wsx--table--header-color)"
                >
                  <LaTeX tex="x" />
                </Entry>
                <Entry content={Array(7).fill("")}>
                  <LaTeX tex={`f_${k + 2}(x)`} />
                </Entry>
              </Table>
              <Call>Faire vérifier les résultats</Call>
            </>
          ))}

          <LI>
            Soit la fonction{" "}
            <F_>5</F_> définie sur <LaTeX>[-4 ; 4]</LaTeX>, par{" "}
            <LaTeX tex={`f_5(x) = 5x - 4`} />
          </LI>
          <SubQuestions count={5}>
            <LI>
              Saisir à la calculatrice la définition de la fonction, et
              paramétrer la fenêtre graphique avec les réglages : Xmin = -4 ;
              Xmax = 4 ; Ymin = -25 ; Ymax = 20.
            </LI>
            <Call>
              Faire vérifier la représentation graphique sur la calculatrice
            </Call>
            <LI>Quelle est l’allure générale de la courbe ?</LI>
            <DotLine />
          </SubQuestions>

          <LI>
            Soit la fonction{" "}
            <F_>6</F_> définie sur <LaTeX>[-2 ; 7]</LaTeX>, par{" "}
            <LaTeX tex={`f_6(x) = (x - 2)^3 - 4x.`} />
          </LI>
          <SubQuestions count={6}>
            <LI>
              Utiliser la calculatrice pour tracer la représentation graphique
              de la fonction f6. On donne les réglages de la fenêtre d’affichage
              : Xmin = -2 ; Xmax = 7 ; Ymin = -30 ; Ymax = 20.
            </LI>

            <Call>
              Faire vérifier la représentation graphique sur la calculatrice
            </Call>
            <LI>
              Parmi les courbes ci-dessous quelle est celle obtenue à la
              calculatrice ? <DotLine width={"3cm"} />
            </LI>
            <BlockBox>
              {[ex_calc1, ex_calc2, ex_calc3, ex_calc4].map((img, k) => (
                <div className="relative">
                  <Img src={img} />
                  <Circle className="absolute bottom-2 right-2">{k + 1}</Circle>
                </div>
              ))}
            </BlockBox>
          </SubQuestions>

          <LI>
            Soit la fonction{" "}
            <F_>7</F_> définie sur <LaTeX>[-2 ; 7]</LaTeX>, par{" "}
            <LaTeX tex={`f_7(x) =  200 \\sqrt{ x + 5}`} />
          </LI>
          <SubQuestions count={7}>
            <LI>
              Utiliser le mode tableur de la calculatrice pour remplir le
              tableau de valeurs suivant (arrondir à l’unité) :
            </LI>

            <Table
              orientation="row"
              className="w-8/10 mx-auto"
              contentClass="min-w-1/10"
            >
              <Entry
                content={[-5, -4, -2, 0, 4, 6, 10]}
                cellBg="var(--wsx--table--header-color)"
              >
                <LaTeX tex="x" />
              </Entry>
              <Entry content={Array(7).fill("")}>
                <LaTeX tex={`f_${7}(x)`} />
              </Entry>
            </Table>
            <LI>
              Utiliser la calculatrice pour tracer la représentation graphique
              de cette fonction. On donne les réglages de la fenêtre d’affichage
              : Xmin = -5 ; Xmax = 10 ; Ymin = 0 ; Ymax = 800
            </LI>

            <Call>
              Faire vérifier la représentation graphique sur la calculatrice
            </Call>

            <LI>
              Parmi les courbes ci-dessous quelle est celle obtenue à la
              calculatrice ? <DotLine width={"3cm"} />
            </LI>

            <BlockBox>
              {[ex_calc2_1, ex_calc2_2, ex_calc2_3, ex_calc2_4].map(
                (img, k) => (
                  <div className="relative">
                    <Img src={img} />
                    <Circle className="absolute bottom-2 right-2">
                      {k + 5}
                    </Circle>
                  </div>
                ),
              )}
            </BlockBox>
          </SubQuestions>
        </TP>
}
