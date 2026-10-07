import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Reset the scroll position whenever the route changes.
function ScrollToTop() {
    const { pathname } = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])

    return null
}

export default ScrollToTop
