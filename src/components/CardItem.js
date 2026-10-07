import { Link } from 'react-router-dom'
import asset from '../asset'

function CardItem(props) {
    // Resolve image paths against the Vite base URL so cards render correctly
    // on any route (a bare relative path like "images/..." breaks on nested
    // routes such as /projects because it resolves relative to the URL).
    const src = asset(props.src)
    // Card titles sit one level below the section heading: h3 on Home
    // (hero h1 -> section h2), h2 on Projects (section h1).
    const Heading = `h${props.headingLevel ?? 3}`

    return (
        <li className='cards__item'>
            <Link className='cards__item__link' to={props.path}>
                <figure className='cards__item__pic-wrap' data-category={props.label}>
                    <img src={src} alt='' className='cards__item__img' />
                </figure>
                <div className='cards__item__info'>
                    <Heading className='cards__item__text'> {props.text} </Heading>
                </div>
            </Link>
        </li>
    )
}

export default CardItem
