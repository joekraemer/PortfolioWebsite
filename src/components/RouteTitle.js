import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const SITE = 'Joe Kraemer'

// Page names keyed by route path (no trailing slash). Project names match the
// h1 on each project page.
const TITLES = {
    '/': null,
    '/projects': 'Projects',
    '/resume': 'Résumé',
    '/contact': 'Contact',
    '/projects/printer3d': '3D Printer',
    '/projects/cryptocurrencytracker': 'Cryptocurrency Tracker',
    '/projects/ewb': 'Engineers Without Borders',
    '/projects/onesecondvideos': 'One Second Videos',
    '/projects/playingcardshelf': 'Playing Card Shelf',
    '/projects/saeminibaja': 'SAE Mini-Baja',
    '/projects/ulockbikemount': 'U-Lock Bike Mount',
}

export function titleFor(pathname) {
    // React Router matches paths case-insensitively, so /Resume renders the
    // Résumé page; look the title up the same way.
    const path = pathname.toLowerCase().replace(/\/+$/, '') || '/'
    if (!(path in TITLES)) return `Page not found · ${SITE}`
    const page = TITLES[path]
    return page ? `${page} · ${SITE}` : SITE
}

// Set document.title for the current route.
function RouteTitle() {
    const { pathname } = useLocation()

    useEffect(() => {
        document.title = titleFor(pathname)
    }, [pathname])

    return null
}

export default RouteTitle
