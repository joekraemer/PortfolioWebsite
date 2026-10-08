import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { titleFor } from '../routes'

// Set document.title for the current route.
function RouteTitle() {
    const { pathname } = useLocation()

    useEffect(() => {
        document.title = titleFor(pathname)
    }, [pathname])

    return null
}

export default RouteTitle
