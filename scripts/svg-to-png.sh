#!/usr/bin/env bash
# Rasterises every assets/*.svg to a sibling .png at 150 dpi using Inkscape's
# headless CLI. assets/background/ is not touched.
#
# The barrel (assets/index.ts) only exports raster images, so an svg has to be
# converted before a document can import it — see scripts/update-assets-index.sh.
#
# By default an svg whose .png already exists is skipped: those pngs are what
# the built documents currently render, and silently re-rasterising them would
# change existing PDFs. Pass --force to overwrite them anyway.
set -euo pipefail
cd "$(dirname "${BASH_SOURCE[0]}")/../assets"

DPI=150
force=false
[ "${1:-}" = "--force" ] && force=true

converted=0
skipped=0

shopt -s nullglob
for svg in *.svg; do
  png="${svg%.svg}.png"
  if [ -e "$png" ] && [ "$force" = false ]; then
    echo "  = $png (exists, skipped)"
    skipped=$((skipped + 1))
    continue
  fi
  inkscape "$svg" --export-type=png --export-dpi="$DPI" --export-filename="$png" >/dev/null 2>&1
  echo "  + $png"
  converted=$((converted + 1))
done

echo "Converted $converted, skipped $skipped (at ${DPI} dpi)."
[ "$converted" -gt 0 ] && echo "Run 'bun run build:assets' to refresh assets/index.ts."
