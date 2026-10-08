import { Link } from 'react-router-dom'
import '../../ProjectPage.css'

export default function NotFound() {
    return (
        <div className="project__subpages__parent">
            <div className='project__subpages_container'>
                <h1>Page not found</h1>
                <p className="project__subtitle">The page you are looking for does not exist.</p>

                <div className='project__subpages__content'>
                    <p><Link to='/'>Back to Home</Link></p>
                </div>
            </div>
        </div>
    )
}
