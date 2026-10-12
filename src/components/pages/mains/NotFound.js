import { Button } from '../../Button'
import './ContentPage.css'

// 404 page (#86): the same dark content layout as Résumé and Contact, with
// buttons back into the site instead of a plain link.
export default function NotFound() {
    return (
        <div className="content__page">
            <div className="content__page__inner">
                <h1>Page not found</h1>
                <p>The page you are looking for does not exist.</p>
                <div className="notfound__btns">
                    <Button to='/' buttonStyle='btn--primary' buttonSize='btn--large'>Home</Button>
                    <Button to='/projects' buttonStyle='btn--outline' buttonSize='btn--large'>Projects</Button>
                </div>
            </div>
        </div>
    )
}
