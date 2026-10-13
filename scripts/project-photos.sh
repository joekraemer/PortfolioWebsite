#!/usr/bin/env bash
# Generate the project page photos (#50): for every JPG under
# public/images/subpages/ write two WebP files next to it and record their
# sizes in src/data/photos.json, which PhotoGallery and the photo block read
# for width/height and srcset.
#
#   <name>-thumb.webp  gallery cell: large enough to cover a 480x360 box (a
#                      4:3 cell at 2x pixel density), never upscaled
#   <name>.webp        lightbox / single photo: source size, capped at 1600px
#
# Re-run after adding or changing a project photo, then commit the output.
# Needs cwebp (brew install webp) and sips (macOS).
set -euo pipefail
cd "$(dirname "$0")/.."

manifest=src/data/photos.json
entries=()

while IFS= read -r jpg; do
  rel=${jpg#public/}
  base=${jpg%.jpg}
  w=$(sips -g pixelWidth "$jpg" | awk '/pixelWidth/ {print $2}')
  h=$(sips -g pixelHeight "$jpg" | awk '/pixelHeight/ {print $2}')

  # Full size, capped at 1600px wide.
  fw=$(( w > 1600 ? 1600 : w )); fh=$(( h * fw / w ))
  cwebp -quiet -q 80 -resize "$fw" 0 "$jpg" -o "$base.webp"

  # Thumbnail: scale so the image covers 480x360, but not past the source.
  tw=$(awk -v w="$w" -v h="$h" 'BEGIN { s = 480 / w; if (360 / h > s) s = 360 / h; if (s > 1) s = 1; printf "%d", w * s + 0.5 }')
  th=$(( h * tw / w ))
  cwebp -quiet -q 78 -resize "$tw" 0 "$jpg" -o "$base-thumb.webp"

  entries+=("  \"$rel\": { \"full\": \"${rel%.jpg}.webp\", \"w\": $fw, \"h\": $fh, \"thumb\": \"${rel%.jpg}-thumb.webp\", \"tw\": $tw, \"th\": $th }")
  echo "$rel: full ${fw}x${fh}, thumb ${tw}x${th}"
done < <(find public/images/subpages -name '*.jpg' | sort)

{
  echo "{"
  last=$(( ${#entries[@]} - 1 ))
  for i in "${!entries[@]}"; do
    if (( i < last )); then echo "${entries[$i]},"; else echo "${entries[$i]}"; fi
  done
  echo "}"
} > "$manifest"
echo "wrote $manifest (${#entries[@]} photos)"
