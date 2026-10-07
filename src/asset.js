// Resolve a public asset path against the Vite base URL. Relative paths such
// as "images/..." would otherwise resolve against the current URL and break on
// nested routes or a trailing slash. Absolute URLs and root paths pass through.
export default function asset(path) {
    if (path.startsWith('http') || path.startsWith('/')) {
        return path
    }
    return `${import.meta.env.BASE_URL}${path}`
}
