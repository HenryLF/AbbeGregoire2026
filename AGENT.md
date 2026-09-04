# AbbeGregoire2026 — LLM Context

A **weasyprint-tsx** monorepo holding the teaching documents (cours + activités) for
B. Zuber at LP Abbé Grégoire, 2026/2027. Each document is a Preact/TSX source folder
that builds to a PDF sitting next to it.

## Pipeline

```
<doc>/index.tsx  →  Bun.build()  →  .build/index.html  →  WeasyPrint  →  <doc>.pdf
```

- **Bun** bundles the TSX entry point (and its imports) into a static HTML file
- **WeasyPrint** converts that HTML into a PDF using CSS print rules
- The dev server (`port 3000`) serves the HTML with live reload injected

## Layout

```
1ere/              2nd/                  3e/
  1ere.css           2nd.css               maths/   math.css
  Rappel/            1erDegre/                        NombresEtEnsembles/
    index.tsx        1erDegre_Activites/            sciences/ sciences.css
    index.css        DistancesEtAngles/               EchelleDeGrandeurs/
  Rappel.pdf         NotionDeFonction/
                     Stat1Var/  (+ _Activites)

components/        shared Preact components (barrel: components/index.ts)
styles/            index.css → cours.css / activites.css
assets/            images + assets/index.ts barrel; assets/background/ (CSS-only)
scripts/           build-all.sh, update-assets-index.ts
```

- A **document** is a folder with `index.tsx` + `index.css`. Nothing else belongs there
  unless it is document-local (e.g. `2nd/NotionDeFonction_Activites/TP_*.tsx`,
  `datasets.tsx`, `*.module.css`).
- A **level folder** (`1ere/`, `2nd/`, `3e/maths`, `3e/sciences`) owns one small CSS file
  carrying that level's `@top-right` running header (and, for sciences, its backgrounds).
- Documents ending in `_Activites` are worksheets; the others are course notes.

## Commands

```bash
bun run dev           # watch + serve preview at localhost:3000 for the current document
bun run build         # build the current document to <dir>.pdf
bun run build:all     # build every root-managed document (scripts/build-all.sh)
bun run build:assets  # regenerate assets/index.ts from what's on disk
bunx tsc --noEmit     # typecheck
```

## Selecting the document to build (`weasyprint-tsx.config.ts`)

The config builds **one document at a time**. Switch documents by editing `currentDir`:

```ts
const currentDir = "1ere/Rappel";   // e.g. "2nd/Stat1Var_Activites", "3e/maths/NombresEtEnsembles"

const config: Config = {
  io: {
    input: [currentDir, "index.tsx"].join(sep),
    output: `${currentDir}.pdf`,
  },
  dev: { watch: [currentDir, "components", "assets", "styles"] },
};
```

`scripts/build-all.sh` loops over every `index.tsx` (skipping folders with their own
`package.json`), rewriting this file per document and restoring it on exit — so do not
leave uncommitted edits mid-build.

## Path aliases (`tsconfig.json`, also honoured in CSS `url()` / `@import`)

| Alias | Points at |
|---|---|
| `@components` | `components/index.ts` (barrel) |
| `@components/*` | a specific component file |
| `@assets` | `assets/index.ts` (barrel of image exports) |
| `@assets/*` | a specific asset, e.g. `@assets/background/bg_left.png` |
| `@styles/*` | `styles/*` |
| `@/*` | repo root |

Never hand-edit `assets/index.ts` for new files — drop the image in `assets/` and run
`bun run build:assets`. Files under `assets/background/` are deliberately **not** exported;
they are referenced from CSS only.

## Entry point (`<doc>/index.tsx`)

Default-exports a Preact component returning a **complete HTML document**:

```tsx
import { pythagore } from "@assets";
import { ImportantEquation, Note, Problem } from "@components";
import { DotLine, H1, H2, LaTeX, LI, Page, UL } from "@weasyprint-tsx/ui";
import "./index.css";

export default function Document() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>…</title>
        <link rel="stylesheet" href="./index.css" />
      </head>
      <body>
        <H1>…</H1>
      </body>
    </html>
  );
}
```

Long documents split their sections into local components in the same file (or sibling
files) and compose them inside `<body>`.

## Stylesheet cascade

```
styles/index.css        @import "tailwindcss" + @page geometry, backgrounds, running
                        headers/footers, typography, --wsx--* variables, heading rules
   ├── styles/cours.css       deltas for course notes
   └── styles/activites.css   deltas for worksheets

<doc>/index.css   @import url("@styles/cours.css" | "@styles/activites.css");
                  @import "../<level>.css";
                  @page { @top-center { content: "<document title>" } }
                  + document-local utility classes
```

Rules:
- The shared sheets are **shared state** — editing them re-renders every document. Prefer a
  document-local class; hoist only deliberately.
- `styles/index.css` restates Tailwind preflight's universal reset by hand: WeasyPrint drops
  any rule whose selector list contains something it cannot parse (`::backdrop`,
  `::file-selector-button`). Keep that block.
- Page geometry, backgrounds and running headers live in `@page`, never on `html`/`body`.
  `@page landscape` is the named page used via `<Page page="landscape">`.

## Components

From `@weasyprint-tsx/ui`:

```ts
Block, BlockBox, Chart, chartFunction, labelFunction, CodeBlock, DotLine, LaTeX,
LI, OL, UL, Page, PageBreak, QrCode, Stack, StackChild, Table, Entry,
H1…H6, joinClasses, mergeStyle, toLowerAlphabetical, …
```

From `@components` (this repo's shared layer):

```ts
// text & callouts
Call, Circle, Details, Problem, Note, Rappel, Digression, Exemple, Title
// exercise structure
Doc, Exercice, TP, Options, ExerciceProblem, SubQuestions
// math
A, B, F, Fx, K, N, T, Th, X, UnderScriptFactory, AutoTable,
ImportantEquation, ImportantEquatioWithDetails, Interval, TrueFalse, Arrow
// images
Img, QR
// barrel-name collisions kept explicit
Stat1VarOptions, Stat1VarTrueFalse
```

Name collisions in the barrel are documented in `components/index.ts`; deep-import
(`@components/Exercice`) when you need the other one. Component-local styling uses
`*.module.css` (Interval, Note, TextBlock, ExempleEquation) or a plain sheet
(`Exercice.css`, `ImportantEquation.css`).

## References

- weasyprint-tsx UI API: https://github.com/weasyprint-tsx/weasyprint-tsx/blob/main/packages/ui/README.md
- WeasyPrint CSS support: https://doc.courtbouillon.org/weasyprint/stable/first_steps.html
- Tailwind CSS v4 docs: https://tailwindcss.com/docs
- `MASS_MIGRATION.md` — runbook used to fold the original standalone projects into this
  repo. Historical; read it before touching the shared-layer conventions it established.

## Constraints

- **No `position: fixed` / `sticky`**, **no `vh` / `vw`**, **no `@media screen`** — print media only
- **Page geometry** belongs in `@page`, not on `html`/`body`
- Flexbox and CSS Grid have partial WeasyPrint support — prefer block layout or
  `BlockBox`/`Block`/`Stack` for multi-column content
- **Images** go through `@assets` (bundled) — external URLs may not resolve at build time
- **Fonts**: the documents assume "Public Sans Variable"; declare any other face with
  `@font-face`
- Content is **French** — keep the language, typography and terminology of the surrounding
  document
