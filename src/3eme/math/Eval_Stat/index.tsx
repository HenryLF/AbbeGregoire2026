import { Details, P } from "@components/atoms/Texts";
import { Activites } from "@components/doctype/Activites";
import { Problem, SubQuestion } from "@components/section/Exercice";
import { H1, H2, H3, LI } from "zefpdf-lab/ui";
import "./index.css";

export default function () {
  return (
    <Activites title="Statistiques">
      <H1>Test</H1>
      <H2>Test 1</H2>
      <H3>Detaiils 1 </H3>
      <H3>Detaiils 2 </H3>
      <H3>Detaiils 3 </H3>
      <H2>Test 2</H2>
      <H3>Detaiils 1 </H3>
      <H3>Detaiils 2 </H3>
      <H3>Detaiils 3 </H3>
      <P>
        This is an Activity Lorem ipsum, dolor sit amet consectetur adipisicing
        elit. Et voluptate illum culpa voluptas, exercitationem dolorem
        deserunt. Id laboriosam distinctio laborum? aspernatur, magnam nulla
        veniam rerum ipsum, amet omnis doloribus quam
      </P>
      <Details>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, culpa
        deserunt maiores atque labore consequuntur architecto blanditiis,
        explicabo, nulla non animi dolor. Quia quaerat dicta libero adipisci
        eligendi quibusdam ex.
      </Details>

      <Problem title="Test">
        <SubQuestion>
          <LI>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero
            ullam laborum nesciunt necessitatibus vel dolor, reiciendis
            repellat, dicta iusto exercitationem facere quas modi. Quibusdam
            sequi inventore nulla excepturi iusto. Labore.
          </LI>

          <LI>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero
            ullam laborum nesciunt necessitatibus vel dolor, reiciendis
            repellat, dicta iusto exercitationem facere quas modi. Quibusdam
            sequi inventore nulla excepturi iusto. Labore.
          </LI>
        </SubQuestion>
      </Problem>
    </Activites>
  );
}
