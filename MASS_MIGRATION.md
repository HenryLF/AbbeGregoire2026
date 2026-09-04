# Mass Migration Runbook — agent-executable

**Audience: an autonomous coding agent.** You are migrating N standalone `weasyprint-tsx`
projects into this repo's unified layout, one after another, without human review between
projects.

Instructions use RFC-2119 keywords. **MUST**, **MUST NOT** and **HALT** are hard rules —
violating one silently corrupts documents that were already migrated. **SHOULD** admits
judgment.

You are **not** authorised to reconcile differing versions of a shared component. When you
find one, you record it in `conflict.MD` and move on. A later agent owns reconciliation.

---

## 0. The contract

| | |
|---|---|
| **Input** | One or more standalone project directories, each with its own `package.json`, `tsconfig.json`, `src/` |
| **Output** | Each becomes a document folder holding **exactly two files**: `index.tsx`, `index.css` |
| **You write** | `conflict.MD` (conflicts for the next agent), `migration-report.md` (queue state) |
| **You never write** | `styles/index.css`, `styles/cours.css`, `styles/activites.css`, `tsconfig.json` |
| **Success** | Every project builds to a PDF with the same page count and pixel-identical body as its pre-migration snapshot |

### Prime directives

1. **MUST NOT overwrite an existing file in `components/` or `assets/`.** First migration to
   claim a path owns it. Every later differing version is parked and logged (§4).
2. **MUST NOT edit the shared stylesheets.** They are shared state; a change for one project
   silently re-renders every other. Log hoist candidates instead (§4.3).
3. **MUST NOT edit `tsconfig.json`.** The aliases are already correct. If an import will not
   resolve, the cause is §6, not the alias table.
4. **MUST verify each project before starting the next.** A broken migration must not
   compound.
5. **MUST NOT reconcile conflicts.** Classify, park, log, continue.

---

## 1. Preconditions

Run once, before the queue. If any check fails, **HALT** and report.

```bash
cd <repo-root>
test -f tsconfig.json && test -f styles/index.css && test -d assets && test -d components
grep -q '"@assets"' tsconfig.json && grep -q '"@components"' tsconfig.json
bun run build && echo "BASELINE OK"
```

The repo MUST already contain a working unified setup with at least one migrated document.
This runbook migrates *into* an existing target; it does not bootstrap one.

Create the two output files if absent:

```bash
[ -f conflict.MD ] || printf '# Component & Asset Conflicts\n\nUnresolved. Owned by the reconciliation agent.\n\n' > conflict.MD
[ -f migration-report.md ] || printf '# Migration Report\n\n| Project | Status | Snapshot | Conflicts |\n|---|---|---|---|\n' > migration-report.md
```

---

## 2. Discovery — build the work queue

A **standalone project** is any directory below the repo root that contains its own
`package.json` **or** `tsconfig.json`.

```bash
find . -mindepth 2 -not -path './node_modules/*' -not -path './.build/*' \
  \( -name tsconfig.json -o -name package.json \) -printf '%h\n' | sort -u
```

Write one row per project into `migration-report.md` with status `QUEUED`. Process
**strictly in the order listed** — deterministic order makes "first writer wins" (§4)
reproducible across reruns.

**Resumability:** on restart, skip every project whose status is `DONE`. Re-process
`IN_PROGRESS` from Step 3.0 (its snapshot already exists; do not overwrite it).

---

## 3. Per-project procedure

Let `P` = project directory, `NAME` = its basename.

> **Ordering is load-bearing.** Steps 3.3 and 3.4 read from `P/src/`. `src/` is not removed
> until Step 3.5. Removing it earlier destroys the assets and components you have not yet
> moved.

### 3.0 — Snapshot

```bash
mkdir -p .migration-snapshots
cp "$P"/*.pdf ".migration-snapshots/$NAME-before.pdf" 2>/dev/null || echo "NO BASELINE PDF"
```

If the project has no PDF, build one **before** changing anything (`cd "$P" && bun run build`).
If it cannot build in its original state, mark `SKIPPED_BROKEN` in the report and move to the
next project. Do **not** migrate a project that was already broken — you will not be able to
tell your damage from its own.

Set status `IN_PROGRESS`.

### 3.1 — Delete the island's tooling

```bash
cd "$P"
rm -rf node_modules .build
rm -f package.json bun.lock tsconfig.json global.d.ts AGENT.md weasyprint-tsx.config.ts
```

A nested `tsconfig.json` shadows the root one and kills every alias beneath it. This step is
mandatory, not cleanup.

### 3.2 — Lift the entry point

```bash
mv src/index.tsx ./index.tsx
```

The entry stylesheet MUST end up named `index.css` at the document root — the Tailwind plugin
matches on filename (§6.2).

### 3.3 — Assets

For each image in `src/assets/` and `src/components/`:

```bash
md5sum src/assets/*.png src/components/*.png 2>/dev/null
md5sum ../../assets/*.png
```

Apply, per file, in order:

| Condition | Action |
|---|---|
| No file of that name in `assets/` | `mv` it to `assets/`; add an export line to `assets/index.ts` |
| Same name, **identical md5** | Delete the incoming copy; use the existing export |
| Same name, **different md5** | **Park + log** — see §4.2 |

Never rename an incoming image to dodge a collision. A rename hides the conflict from the
reconciliation agent.

### 3.4 — Components

Inventory both sides before moving anything:

```bash
for f in src/components/*.tsx ../../components/*.tsx; do
  echo "$f :: $(grep -oP '(?<=^export function )\w+' "$f" | sort | tr '\n' ' ')"
done
```

Per component file, matched by **filename**:

| Condition | Action |
|---|---|
| No file of that name in `components/` | `mv` to `components/`; export from `components/index.ts` |
| Same name, **identical content** | Delete the incoming copy |
| Same name, **different content** | **Park + log** — see §4.1. MUST NOT overwrite, MUST NOT merge |

Rewrite image imports inside any component you move:

```ts
import handraised from "@assets/handraised.png";   // was "./handraised.png"
```

Barrel name collisions between *different* files (e.g. `Problem` exported by both
`TextBlock.tsx` and `Exercice.tsx`) are **not** version conflicts. Alias one in
`components/index.ts` and continue:

```ts
export { Problem } from "./TextBlock";
export { Problem as ExerciceProblem } from "./Exercice";
```

### 3.5 — Stylesheet

**MUST NOT modify the shared sheets.** Classify each rule in the project's old CSS:

| Condition | Action |
|---|---|
| Semantically identical to a rule already in `styles/index.css` or the variant sheet | Delete it |
| Anything else | Keep it in the document's local `index.css`, below the imports |

Then write `P/index.css`:

```css
@import url("@styles/cours.css");   /* or @styles/activites.css — pick by document type */
@import "../<level>.css";           /* only if a level sheet exists */

@page {
  @top-center {
    content: "<document title>";
  }
}

/* locally-retained rules, if any */
```

`@import` statements MUST come first — CSS requires it, and the cascade depends on the local
`@page` landing last. Rewrite every surviving path to an alias:
`url("../../../bg.png")` → `url("@assets/bg.png")`.

If a rule survived locally that you suspect is common to several projects, log it as a hoist
candidate (§4.3). Do **not** hoist it yourself.

Now tear down what is left:

```bash
rm -rf src
```

### 3.6 — Rewrite the document's imports

```ts
import { brush, hammer } from "@assets";
import { Call, Exercice, Img } from "@components";
import "./index.css";
```

Parked files (§4) are **not** in the barrels. Import those by their parked path:

```ts
import { Call } from "@components/_conflicts/TextBlock__1erDegre_Activites";
import hammer from "@assets/_conflicts/1erDegre_Activites__hammer.png";
```

### 3.7 — Build and verify

```bash
cd <repo-root>
sed -i "s|const currentDir = .*|const currentDir = \"$P\";|" weasyprint-tsx.config.ts
bun run build
```

Run every gate in §5. On pass, set status `DONE` and record the conflict count. On failure,
consult §7.

---

## 4. Conflict protocol → `conflict.MD`

You resolve nothing. You make the build green, record the facts, and move on.

**Parking** means: the incoming file is preserved under a `_conflicts/` directory, the
canonical path keeps whatever was already there, and the current document imports the parked
copy so it still renders.

```
components/_conflicts/<FileStem>__<PROJECT>.tsx
assets/_conflicts/<PROJECT>__<filename>.png
```

Parked files MUST NOT be exported from `components/index.ts` or `assets/index.ts` — the barrel
must stay unambiguous.

### 4.1 Component version conflicts

Classify by comparing the exported symbol sets:

| Class | Test | Meaning for the next agent |
|---|---|---|
| `SUPERSET` | incoming exports ⊇ existing exports | Likely the same component, further along. Cheap merge. |
| `SUBSET` | incoming exports ⊆ existing exports | Likely older. Probably delete the parked copy. |
| `DIVERGENT` | neither contains the other | Genuine fork. Needs a human-grade decision. |

Even a `SUPERSET` MUST be parked, never promoted. Overwriting the canonical file would
re-render every document migrated before this one, and you are not verifying those again.

### 4.2 Asset conflicts

Same filename, different bytes. Class is always `ASSET_COLLISION`. Record both md5s and the
pixel dimensions if you can obtain them cheaply (`file <path>`).

### 4.3 CSS hoist candidates

A rule you kept locally that also appears in another migrated project. Not a conflict — a
deduplication opportunity. Record it so the reconciliation agent can decide whether it belongs
in a shared sheet.

### 4.4 Required entry format

Append to `conflict.MD`. Keep the summary table and the detail blocks in sync — the next agent
parses the table first.

```markdown
## Summary

| ID | Type | Class | Canonical | Parked | Project | Status |
|---|---|---|---|---|---|---|
| C001 | component | SUPERSET | components/TextBlock.tsx | components/_conflicts/TextBlock__Activites.tsx | 2nd/Activites | OPEN |
| A001 | asset | ASSET_COLLISION | assets/hammer.png | assets/_conflicts/Activites__hammer.png | 2nd/Activites | OPEN |
| H001 | css-hoist | — | — | — | 2nd/Activites | OPEN |

---

### C001 — components/TextBlock.tsx

- **Type:** component version conflict
- **Class:** SUPERSET
- **Canonical:** `components/TextBlock.tsx` (first claimed by `2nd/1erDegre`)
- **Parked:** `components/_conflicts/TextBlock__Activites.tsx`
- **Introduced by:** `2nd/Activites`
- **Canonical exports:** `Problem, Details`
- **Parked exports:** `Problem, Details, Circle, Call`
- **Delta:** parked adds `Circle`, `Call`; adds `.call` / `.call_content` to the module CSS
- **Importers of the parked copy:** `2nd/Activites/index.tsx`
- **Suggested resolution:** adopt parked as canonical, then rebuild and visually verify
  every document listed under *Importers of the canonical copy*.
- **Importers of the canonical copy:** `2nd/1erDegre/index.tsx`
- **Status:** OPEN
```

Every conflict MUST list **both** sets of importers. That list is what makes the
reconciliation safe — it is the exact set of documents to re-verify after a merge.

---

## 5. Verification gates

All gates run against the built output after Step 3.7. A gate that fails means the project is
not `DONE`.

| # | Command | Pass condition |
|---|---|---|
| G1 | `bun run build` | Exit 0, PDF written |
| G2 | `grep -oc 'background-image: url("data:image/png;base64' .build/index.css` | `3` — backgrounds resolved through `@assets` |
| G3 | `grep -o 'src="[^"]*\.\(png\|svg\)"' .build/index.html \| sort -u` | Only images this document actually uses |
| G4 | `grep -n '@page' .build/index.css \| tail -1` | The document's own `@page` is last |
| G5 | `grep -rn '\.\./\.\./\.\.\|/src/' --include='*.ts*' --include='*.css' . \| grep -v node_modules` | No output |
| G6 | `bunx tsc --noEmit` | No errors in repo files (`node_modules` and DOM-lib errors are pre-existing) |
| G7 | `pdfinfo <out>.pdf \| grep Pages` | Matches the §3.0 snapshot exactly |
| G8 | `pdftoppm -png -r 60 -f 1 -l 1 <out>.pdf /tmp/after` | Body layout identical to snapshot; header/footer MAY differ |

**G8 is the one that catches misclassified CSS.** The document inherits the shared header and
footer frame, so those legitimately change. Anything in the *body* moving means a rule went
into the wrong bucket at Step 3.5 — fix it before proceeding.

If a Tailwind utility is missing from the PDF, check that `@import "tailwindcss"` is still in
`styles/index.css` and nowhere else (§6.2).

---

## 6. Toolchain facts

These explain why the rules above are absolute. Verified against build output, not inferred.

### 6.1 Aliases come from `tsconfig.json` and nowhere else

`@weasyprint-tsx/build` calls `Bun.build()` with no `resolve` option; its `Config` type exposes
only `io`, `pdf`, `weasyprint`, `dev`. All resolution is Bun's implicit `tsconfig.json` `paths`
support. Therefore a nested `tsconfig.json` disables aliases for its whole subtree, and
`baseUrl` is unnecessary under `"moduleResolution": "bundler"`. Aliases resolve in TS imports
**and** in CSS `@import` / `url()`.

### 6.2 Tailwind only processes files named `index.css`

The plugin is `onLoad({ filter: /index\.css$/ })`. Consequences:

- `@import "tailwindcss"` MUST stay in `styles/index.css`. Tailwind v4 finds source files by
  walking up from the importing CSS file to the root `package.json`, then scanning that tree.
  Moving the import changes which `.tsx` files are scanned and utilities disappear **with no
  error**.
- A document's entry stylesheet MUST be named `index.css`.
- A document MUST NOT re-import Tailwind — it arrives through the variant sheet, and a second
  import emits the utility layer twice.

### 6.3 `--wsx--*` variables belong on the `html, body` selector

`postcss-custom-properties` runs with `preserve: false`. Declarations on the `html, body`
selector list survive it; the `@weasyprint-tsx/ui` stylesheets read them via
`var(--wsx--h1--color, inherit)` at WeasyPrint render time and are never postcss-processed.
Moving them to a bare `:root` or `html` risks them being stripped, silently dropping heading
colours.

### 6.4 `@page` merges, source order decides

WeasyPrint merges every `@page` block, so each cascade layer contributes margin boxes without
restating the others. Later wins — which is why `@import` comes first and the document's own
`@page` comes last.

### 6.5 The flat asset barrel is free

Importing `@assets` pulls the whole barrel and Bun emits every image as a hashed file into
`.build/`. Only referenced images reach the HTML, so the PDF is unaffected. Do not "optimise"
this with deep imports unless a gate demands it.

### 6.6 One document builds at a time

`weasyprint-tsx.config.ts` builds a single target selected by `currentDir`. There is no
multi-document build. Verification is therefore a loop: set `currentDir`, build, check, repeat.

---

## 7. Failure handling

| Symptom | Cause | Action |
|---|---|---|
| `Could not resolve "@assets"` / `"@components"` | A nested `tsconfig.json` survived Step 3.1 | Delete it, rebuild |
| Tailwind classes missing from PDF | `@import "tailwindcss"` not in `styles/index.css`, or entry sheet misnamed | Restore §6.2, rebuild |
| Backgrounds missing (G2 < 3) | `url()` still relative | Rewrite to `@assets/…` |
| Headings lost colour | `--wsx--*` moved to bare `:root` | Restore to `html, body` |
| Document title absent from header | `@import` not first, local `@page` overridden | Reorder |
| Utility CSS roughly doubled | Tailwind imported twice | Remove from document `index.css` |
| G7 page count changed | A CSS rule landed in the wrong bucket | Revisit Step 3.5 |
| G8 body layout moved | Same as above | Revisit Step 3.5 |

**HALT and report — do not improvise — if:**

- A gate fails and the cause is not in the table above.
- Fixing project N would require editing a shared stylesheet, `tsconfig.json`, or a component
  already claimed by a previous project.
- A previously `DONE` project stops building. Something you did leaked across the boundary;
  do not migrate further until it is understood.
- More than three consecutive projects fail the same gate — the runbook's assumption about
  those projects is wrong, and continuing will produce N broken documents instead of one.

Migrations are per-project and independent. Recovery is restoring the one folder from its
snapshot and re-running from Step 3.0. The shared `styles/`, `assets/` and `components/` are
append-only under these rules, so they never need unwinding.

---

## 8. Final batch report

When the queue is empty, append to `migration-report.md`:

- Counts by status: `DONE`, `SKIPPED_BROKEN`, `HALTED`.
- Total conflicts by type and class, with the `conflict.MD` IDs.
- Any project whose G8 comparison you could not perform, and why.
- The `currentDir` value left in `weasyprint-tsx.config.ts`.

State plainly which projects were **not** fully migrated. A partially migrated repo that
reports success is worse than one that reports failure.

---

## Appendix — target shape

```
repo-root/
├── tsconfig.json              ← the only place aliases are defined; do not edit
├── weasyprint-tsx.config.ts   ← `currentDir` selects the document to build
├── conflict.MD                ← you write this
├── migration-report.md        ← you write this
├── styles/
│   ├── index.css              ← Tailwind + everything common; do not edit
│   ├── cours.css              ← course deltas; do not edit
│   └── activites.css          ← activity deltas; do not edit
├── assets/
│   ├── index.ts               ← barrel; append only
│   ├── _conflicts/            ← parked colliding images
│   └── *.png, *.svg
├── components/
│   ├── index.ts               ← barrel; append only
│   ├── _conflicts/            ← parked conflicting components
│   └── *.tsx, *.module.css
└── <level>/
    ├── <level>.css            ← level-wide overrides
    └── <Document>/
        ├── index.tsx          ← exactly these
        └── index.css          ← two files
```

### The cascade

```
styles/index.css              common: A4 frame, backgrounds, headings, typography
  └─ styles/cours.css         variant: what makes a course a course
       └─ <level>/<level>.css  level: @top-right
            └─ <Document>/index.css   document: @top-center, and nothing else
```

If you are writing anything else into a document's `index.css`, it either belongs one layer up
— in which case log a hoist candidate — or it is genuinely document-specific and stays.
