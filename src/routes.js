// The one list of pages on the site. App.js renders from it, RouteTitle sets
// the tab title from it, and scripts/spa-routes.mjs uses it at build time to
// write one HTML file per route with that page's title, description and
// link-preview tags, plus sitemap.xml.
//
// Plain data only (no JSX) so the build script can import it with Node.
import { projects } from './data/projects.js'

export const SITE = 'Joe Kraemer'
export const SITE_URL = 'https://joekraemer.github.io/PortfolioWebsite'
export const DEFAULT_DESCRIPTION =
    'Joe Kraemer: software engineer at Amazon Leo working on embedded and systems software, hardware-in-the-loop testing and satellite ground links.'

// title: page name shown before " · Joe Kraemer" (null on Home: just the site
// name). description: search and link-preview text.
export const routes = [
    { path: '/', title: null, description: DEFAULT_DESCRIPTION },
    { path: '/contact', title: 'Contact', description: 'Get in touch with Joe Kraemer by email, LinkedIn, GitHub or Instagram.' },
    { path: '/resume', title: 'Résumé', description: 'Joe Kraemer\'s résumé: software engineering at Amazon Leo, Blue Origin and DMC, with degrees from Georgia Tech and the University of Illinois.' },
    { path: '/projects', title: 'Projects', description: 'Projects by Joe Kraemer, from a self-built 3D printer to an SAE Mini-Baja chassis.' },
    ...projects.map((p) => ({ path: `/projects/${p.slug}`, title: p.title, description: p.subtitle })),
]

export function pageTitle(route) {
    return route.title ? `${route.title} · ${SITE}` : SITE
}

export function findRoute(pathname) {
    // React Router matches paths case-insensitively, so /Resume renders the
    // Résumé page; look the route up the same way.
    const path = pathname.toLowerCase().replace(/\/+$/, '') || '/'
    return routes.find((r) => r.path === path)
}

export function titleFor(pathname) {
    const route = findRoute(pathname)
    return route ? pageTitle(route) : `Page not found · ${SITE}`
}
