import React from 'react'
import { Link } from 'react-router-dom'

function CardItem(props) {
    // Resolve image paths against the Vite base URL so cards render correctly
    // on any route (a bare relative path like "images/..." breaks on nested
    // routes such as /projects because it resolves relative to the URL).
    const base = import.meta.env.BASE_URL
    const src = props.src.startsWith('http') || props.src.startsWith('/')
        ? props.src
        : `${base}${props.src}`

    return (
        <>
            <li className='cards__item'>
                <Link className='cards__item__link' to={props.path}>
                    <figure className='cards__item__pic-wrap' data-category={props.label}>
                        <img src={src} alt={props.text} className='cards__item__img' />
                    </figure>
                    <div className='cards__item__info'>
                        <h5 className='cards__item__text'> {props.text} </h5>
                    </div>
                </Link>
            </li>
        </>
    )
}

export default CardItem
