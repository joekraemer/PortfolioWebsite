import { useEffect, useLayoutEffect } from 'react'
import { useLocation, useNavigationType } from 'react-router-dom'

// Scroll handling on every navigation:
// - Back/Forward (and a reload) returns to where you were on that entry (#68);
// - otherwise a URL with a #hash scrolls that element into view (#69);
// - any other navigation starts at the top.
//
// Positions are kept per history entry in sessionStorage, so they survive a
// reload in the same tab. The browser's own restoration is turned off because
// it runs before React has rendered the page.

const STORAGE_KEY = 'scroll-positions'
const MAX_ENTRIES = 50
// Keep re-applying the target for a few frames in case late layout (images,
// embeds) moves things, unless the visitor starts scrolling themselves.
const SETTLE_FRAMES = 30

// ScrollToTop is mounted once, at the app root, so its state lives here.
let positions = null
let currentEntry = null
let firstRun = true

function getPositions() {
    if (positions === null) {
        try {
            positions = JSON.parse(sessionStorage.getItem(STORAGE_KEY)) || {}
        } catch {
            positions = {}
        }
    }
    return positions
}

function savePositions() {
    const all = getPositions()
    const keys = Object.keys(all)
    for (const key of keys.slice(0, Math.max(0, keys.length - MAX_ENTRIES))) {
        delete all[key]
    }
    try {
        sessionStorage.setItem(STORAGE_KEY, JSON.stringify(all))
    } catch {
        // Storage can be unavailable (private mode, quota); restoring is optional.
    }
}

// React Router gives the first entry of every page load the key 'default', so
// two separate loads in one tab would share a slot. Add the path to tell them
// apart.
const entryId = (location) =>
    location.key === 'default' ? `default:${location.pathname}${location.search}` : location.key

// True when this document was opened fresh (link, typed URL), not reloaded or
// reached with Back/Forward.
function isFreshLoad() {
    const nav = performance.getEntriesByType?.('navigation')?.[0]
    return !nav || nav.type === 'navigate'
}

function elementForHash(hash) {
    if (!hash || hash.length < 2) return null
    try {
        return document.getElementById(decodeURIComponent(hash.slice(1)))
    } catch {
        return null
    }
}

function ScrollToTop() {
    const location = useLocation()
    const navigationType = useNavigationType()

    useEffect(() => {
        if ('scrollRestoration' in window.history) window.history.scrollRestoration = 'manual'

        let frame = 0
        const record = () => {
            frame = 0
            if (currentEntry) getPositions()[currentEntry] = window.scrollY
        }
        const onScroll = () => {
            if (!frame) frame = requestAnimationFrame(record)
        }
        window.addEventListener('scroll', onScroll, { passive: true })
        window.addEventListener('pagehide', savePositions)
        return () => {
            if (frame) cancelAnimationFrame(frame)
            window.removeEventListener('scroll', onScroll)
            window.removeEventListener('pagehide', savePositions)
        }
    }, [])

    useLayoutEffect(() => {
        savePositions()
        const id = entryId(location)
        currentEntry = id
        if (firstRun) {
            firstRun = false
            // A fresh load is a new visit; don't reuse a spot saved by an earlier one.
            if (isFreshLoad()) delete getPositions()[id]
        }

        const saved = getPositions()[id]
        let apply
        if (navigationType === 'POP' && typeof saved === 'number') {
            apply = () => window.scrollTo(0, saved)
        } else if (location.hash) {
            apply = () => elementForHash(location.hash)?.scrollIntoView({ block: 'start' })
        } else {
            window.scrollTo(0, 0)
            return undefined
        }

        let frames = 0
        let raf = 0
        const stop = () => {
            if (raf) cancelAnimationFrame(raf)
            raf = 0
            window.removeEventListener('wheel', stop)
            window.removeEventListener('touchstart', stop)
            window.removeEventListener('keydown', stop)
        }
        const tick = () => {
            apply()
            frames += 1
            raf = frames < SETTLE_FRAMES ? requestAnimationFrame(tick) : 0
        }
        window.addEventListener('wheel', stop, { passive: true })
        window.addEventListener('touchstart', stop, { passive: true })
        window.addEventListener('keydown', stop)
        tick()
        return stop
    }, [location, navigationType])

    return null
}

export default ScrollToTop
