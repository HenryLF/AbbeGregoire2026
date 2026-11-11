import { chemistryAtom, chemistryPeriodicTable } from "@assets/index";
import { Img } from "@components/atoms/Img";
import { Important, P, S } from "@components/atoms/Texts";
import {
    EvalExercice,
    Evaluation,
    NoteBox,
    NoteLines,
} from "@components/doctype/Evaluation";
import { SubQuestion } from "@components/section/Exercice";
import {
    DotLine,
    Flex,
    LaTeX,
    LI,
    PageBreak,
    Table,
    TEntry,
    TH,
    THeader,
    UL,
} from "zefpdf-lab/ui";
import "../sciences.css";
export default function () {
  return (
    <Evaluation title="Constitution de la Matière" hideNoteCorrection>
      <EvalExercice title="Définitions">
        <LI>Compléter le schéma ci-dessous avec les mots suivants :</LI>
        <UL className="columns-4" indent={0}>
          <LI>électron</LI>
          <LI>noyau</LI>
          <LI>neutron</LI>
          <LI>proton</LI>
        </UL>
        <Img src={chemistryAtom} className="w-2/3 mx-auto" />
        <NoteBox points={4} />
        <SubQuestion
          mainLI="Le numéro atomique permet de distinguer les différents éléments du
        tableau périodique en comptant le nombre de protons d'un atome."
        >
          <LI>
            Retrouver sur le tableau périodique le symbole de l'atome de numéro
            atomique 42.
          </LI>
          <NoteLines points={1} />
          <LI>
            Combien de protons contient l'atome de Zinc dont le symbole est{" "}
            <LaTeX chemical>Zn</LaTeX> ?
          </LI>
          <NoteLines points={1} />
        </SubQuestion>
        <Img src={chemistryPeriodicTable} className="w-13/18 mx-auto">
          Tableau périodique
        </Img>
      </EvalExercice>

      <EvalExercice title="Molécule et ions">
        <LI>Relier ces espèces chimiques à leur type.</LI>
        <Flex align="center" justify="space-between" className="w-1/2 mx-auto">
          <UL>
            <Flex
              dir="column"
              justify="space-evenly"
              align="end"
              className="h-30"
            >
              {["H2O", "Zn", "MnO4^2-"].map((t) => (
                <div>
                  <LaTeX chemical tex={t} />
                  <LI className="inline" />
                </div>
              ))}
            </Flex>
          </UL>
          <UL>
            <Flex dir="column" justify="space-evenly" className="h-30">
              {["atome", "molécule", "ion"].map((t) => (
                <LI>{t}</LI>
              ))}
            </Flex>
          </UL>
        </Flex>
        <NoteBox points={3} />
        <SubQuestion
          mainLI="Pour les molécules suivantes donner le nombre d'atomes de chaque
          élément qui la compose :"
        >
          {["CO2", "NH3", "C2H6OS"].map((t) => (
            <>
              <LI>
                <LaTeX chemical tex={t} /> :
                <DotLine inline />
              </LI>
              <NoteLines lines={2} points={1} />
            </>
          ))}
        </SubQuestion>

        <LI>
          Donner la charge de l'ion chlore formé lorsqu'un atome de chlore gagne
          un électron.
        </LI>

        <NoteLines lines={2} points={1} />
        <LI>
          Quelle est la charge de l'ion <LaTeX chemical tex="Fe^3+" /> ?
        </LI>

        <NoteLines lines={2} points={1} />

        <Important>
          <Table className="table-fixed w-full">
            <TEntry
              header="Symboles"
              content={["H", "C", "N", "O", "S", "Cl", "Fe"]}
            />
            <TEntry
              header="Nom"
              content={[
                "Hydrogène",
                "Carbone",
                "Azote",
                "Oxygène",
                "Soufre",
                "Chlore",
                "Fer",
              ]}
            />
          </Table>
        </Important>
      </EvalExercice>
      <PageBreak />
      <EvalExercice>
        <P>
          Dans un tube à essai je dispose d'une solution inconnue, après l'ajout
          de différents réactifs voici les observations que j'obtiens :
        </P>
        <UL indent={0}>
          <LI>
            Après ajout d'hydroxyde de sodium{" "}
            <LaTeX chemical tex="NaOH"  /> il se forme un précipité
            vert.
          </LI>

          <LI>
            Après ajout de nitrate d'argent{" "}
            <LaTeX chemical tex="AgNO3"  /> il se forme un précipité
            blanc qui noircit à la lumière.
          </LI>
        </UL>
        <LI marker="">
          À l'aide du tableau ci-dessous déduire quelles espèces chimiques sont
          présentes dans mon tube à essai. <S>JUSTIFIER VOS RÉPONSES</S>
        </LI>
        <Important>
          <Table
            className="w-full text-center"
            headerBg="#e0e0e0"
            cellBg="#fff"
          >
            <THeader
              content={[
                "Réactif utilisé",
                <TH colspan={4}>
                  Hydroxyde de sodium ou soude <LaTeX chemical tex="NaOH" />
                </TH>,
                <>
                  Nitrate d'argent
                  <LaTeX chemical tex="AgNO3" />
                </>,
                <>
                  Chlorure de baryum <LaTeX chemical tex="BaCl_2" />{" "}
                </>,
              ]}
            />
            <TEntry
              header="Couleur du précipité"
              content={["Bleu", "Vert", "Rouille", "Blanc", "Blanc", "Blanc"]}
            />
            <TEntry
              header="Ion identifié"
              content={[
                "Cu^{2+}",
                "Fe^{2+}",
                "Fe^{3+}",
                "Zn^{2+}",
                "Cl^-",
                "SO_4^{2-}",
              ].map((tex) => (
                <LaTeX chemical tex={tex} />
              ))}
            />
          </Table>
        </Important>
        <DotLine count={24} />
        <NoteBox hidden points={6} />
      </EvalExercice>
    </Evaluation>
  );
}
