import { useRef, useState } from 'react'
import './PhotoGallery.css'
import asset from '../asset'
import Icon from './Icon'
import photoInfo, { photoSrcSet } from '../data/photoInfo'

// Project page gallery (#50): a responsive grid of thumbnails that open in a
// lightbox. The lightbox is a native <dialog>, so the browser traps focus,
// closes it on Escape and returns focus to the thumbnail that opened it.
function PhotoGallery({ photos }) {
    const dialogRef = useRef(null)
    const [current, setCurrent] = useState(0)
    const [open, setOpen] = useState(false)
    const many = photos.length > 1

    const openAt = (i) => {
        setCurrent(i)
        setOpen(true)
        dialogRef.current.showModal()
    }
    const close = () => dialogRef.current.close()
    const step = (d) => setCurrent((i) => (i + d + photos.length) % photos.length)

    const onKeyDown = (e) => {
        if (!many) return
        if (e.key === 'ArrowRight') step(1)
        else if (e.key === 'ArrowLeft') step(-1)
    }
    // A click on the dark area around the photo closes it; clicks on the photo,
    // its caption or the buttons don't.
    const onClick = (e) => {
        if (e.target === dialogRef.current || e.target.classList.contains('lightbox__figure')) close()
    }

    const photo = photos[current]
    const info = photoInfo(photo.src)

    return (
        <div className="photo-gallery">
            <ul className={`photo-gallery__grid photo-gallery__grid--${Math.min(photos.length, 3)}`}>
                {photos.map((p, i) => {
                    const pi = photoInfo(p.src)
                    return (
                        <li key={p.src}>
                            <button type="button" className="photo-gallery__item"
                                onClick={() => openAt(i)} aria-label={`View larger: ${p.alt}`}>
                                <img src={asset(pi.thumb)} srcSet={photoSrcSet(pi, asset)}
                                    sizes="(max-width: 600px) 50vw, 360px"
                                    width={pi.tw} height={pi.th} alt={p.alt}
                                    loading="lazy" decoding="async" />
                            </button>
                        </li>
                    )
                })}
            </ul>

            <dialog ref={dialogRef} className="lightbox" aria-label="Photo viewer"
                onKeyDown={onKeyDown} onClick={onClick} onClose={() => setOpen(false)}>
                {open && (
                    <>
                        <figure className="lightbox__figure">
                            <img src={asset(info.full)} width={info.w} height={info.h} alt={photo.alt} />
                            <figcaption>
                                {photo.alt}
                                {many && <span className="lightbox__count">{current + 1} of {photos.length}</span>}
                            </figcaption>
                        </figure>
                        <button type="button" className="lightbox__btn lightbox__close" onClick={close} aria-label="Close">
                            <Icon name="xmark" />
                        </button>
                        {many && (
                            <>
                                <button type="button" className="lightbox__btn lightbox__prev" onClick={() => step(-1)} aria-label="Previous photo">
                                    <Icon name="chevron-left" />
                                </button>
                                <button type="button" className="lightbox__btn lightbox__next" onClick={() => step(1)} aria-label="Next photo">
                                    <Icon name="chevron-right" />
                                </button>
                            </>
                        )}
                    </>
                )}
            </dialog>
        </div>
    )
}

export default PhotoGallery
