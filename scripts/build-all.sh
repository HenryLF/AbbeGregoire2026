#!/usr/bin/env bash
# Build every root-managed document in the project.
#
# Root-managed docs are folders containing index.tsx but no own
# package.json (see MIGRATION.md) — they're built through the root
# weasyprint-tsx.config.ts, whose `currentDir` we swap per document
# (the config only ever builds one at a time). The config file is
# restored to exactly what it was before the script ran.
set -euo pipefail
cd "$(dirname "${BASH_SOURCE[0]}")/.."

ROOT_CONFIG="weasyprint-tsx.config.ts"
ROOT_CONFIG_BACKUP="$(mktemp)"
cp "$ROOT_CONFIG" "$ROOT_CONFIG_BACKUP"
restore_root_config() {
  cp "$ROOT_CONFIG_BACKUP" "$ROOT_CONFIG"
  rm -f "$ROOT_CONFIG_BACKUP"
}
trap restore_root_config EXIT

failures=()

while IFS= read -r entry; do
  dir="$(dirname "$entry")"
  # Skip entries that belong to a standalone sub-project (own package.json).
  if [ -f "$dir/package.json" ]; then
    continue
  fi
  echo "--- $dir ---"
  cat > "$ROOT_CONFIG" <<EOF
import type { Config } from "@weasyprint-tsx/build";
import { sep } from "node:path";

const currentDir = "$dir";

const config: Config = {
  io: {
    input: [currentDir, "index.tsx"].join(sep),
    output: \`\${currentDir}.pdf\`,
  },
  dev: {
    watch: [currentDir],
  },
};

export default config;
EOF
  if ! bun run build; then
    failures+=("$dir")
  fi
done < <(find . -mindepth 2 -maxdepth 4 -name index.tsx -not -path '*/node_modules/*' -not -path '*/src/*')

echo
if [ "${#failures[@]}" -eq 0 ]; then
  echo "All documents built successfully."
else
  echo "Failed to build:"
  printf '  - %s\n' "${failures[@]}"
  exit 1
fi
