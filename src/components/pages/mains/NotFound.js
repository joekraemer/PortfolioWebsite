import React from 'react'
import { Link } from 'react-router-dom'
import '../subpages/projects/ProjectSubpages.css'

export default function NotFound() {
    return (
        <div className="project__subpages__parent">
            <div className='project__subpages_container'>
                <h1>Page not found</h1>
                <h3> The page you are looking for does not exist. </h3>

                <div className='project__subpages__content'>
                    <p><Link to='/'>Back to Home</Link></p>
                </div>
            </div>
        </div>
    )
}
