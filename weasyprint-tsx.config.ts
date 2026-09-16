import type { Config } from "@weasyprint-tsx/build";
import { sep } from "node:path";

// Document to build. Switch this to any document folder, e.g. "2nd/1erDegre_Activites".
const currentDir = "2nd/CoIntervention/CalculComerciaux";

const config: Config = {
  io: {
    input: [currentDir, "index.tsx"].join(sep),
    output: `${currentDir}.pdf`,
  },
  dev: {
    watch: [currentDir, "components", "assets", "styles"],
  },
};

export default config;
