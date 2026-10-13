// Sizes and WebP versions of the project page photos, from
// scripts/project-photos.sh (#50). A photo missing from the manifest falls
// back to its original file with no size; scripts/routes.test.mjs fails the
// build's tests if that happens.
import photos from './photos.json'

export default function photoInfo(src) {
    return photos[src] ?? { full: src, thumb: src }
}

// srcset listing the thumbnail and the full-size file, widest last.
export function photoSrcSet(info, asset) {
    if (!info.tw || info.tw === info.w) return undefined
    return `${asset(info.thumb)} ${info.tw}w, ${asset(info.full)} ${info.w}w`
}
