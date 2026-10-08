#!/usr/bin/env bash
# Generate the project card thumbnails in public/images/cards/ (#72).
#
# Each source photo is center-cropped to the card's 3:2 shape (the same crop
# the card's object-fit: cover shows) and written as WebP at 400px and 800px
# wide. When the cropped source is narrower than 800px, its full width is used
# instead of 800, so nothing is upscaled. Re-run after changing a card image, then commit the output and
# update the card's `thumbWidths` in src/data/projects.js.
#
# Needs cwebp (brew install webp) and sips (macOS).
set -euo pipefail
cd "$(dirname "$0")/.."

out=public/images/cards
mkdir -p "$out"

# slug  source image (relative to public/)
cards=(
  "printer3d images/subpages/3dprinter/3dprinter_extruder.jpg"
  "cryptocurrencytracker images/subpages/crypto/cryptocurrency_mining_rig.jpg"
  "ewb images/subpages/ewb/ewb_testing.jpg"
  "placeholder images/img-3.jpg"
  "playingcardshelf images/subpages/cardshelf/card_shelf_complete.jpg"
  "saeminibaja images/subpages/baja/baja_jr_whole_car_parking.jpg"
)

for entry in "${cards[@]}"; do
  read -r slug src <<<"$entry"
  w=$(sips -g pixelWidth "public/$src" | awk '/pixelWidth/ {print $2}')
  h=$(sips -g pixelHeight "public/$src" | awk '/pixelHeight/ {print $2}')
  # Largest 3:2 box that fits, centered.
  if (( w * 2 > h * 3 )); then cw=$(( h * 3 / 2 )); ch=$h; else cw=$w; ch=$(( w * 2 / 3 )); fi
  x=$(( (w - cw) / 2 )); y=$(( (h - ch) / 2 ))
  made=""
  for tw in 400 800; do
    # Too wide for the source: use the full cropped width instead, if that
    # still adds detail over the 400px file.
    if (( tw > cw )); then
      (( cw > 400 && tw == 800 )) || continue
      tw=$cw
    fi
    cwebp -quiet -q 78 -crop "$x" "$y" "$cw" "$ch" -resize "$tw" 0 \
      "public/$src" -o "$out/$slug-$tw.webp"
    made+=" $tw"
  done
  if [[ -z "$made" ]]; then
    # Source narrower than 400px: keep its cropped width.
    cwebp -quiet -q 78 -crop "$x" "$y" "$cw" "$ch" "public/$src" -o "$out/$slug-$cw.webp"
    made=" $cw"
  fi
  echo "$slug:$made"
done
