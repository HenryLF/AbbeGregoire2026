import type { Config } from "@weasyprint-tsx/build";
import { sep } from "node:path";

const currentDir = "./2nd/Stat1Var_Activites";

const config: Config = {
  io: {
    input: [currentDir, "index.tsx"].join(sep),
    output: `${currentDir}.pdf`,
  },
  dev: {
    watch: [currentDir],
  },
};

export default config;
