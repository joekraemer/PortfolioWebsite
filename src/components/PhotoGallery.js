import React from 'react'
import './PhotoGallery.css'

function PhotoGallery({ photos }) {
    return (
        <div className="photo-gallery">
            <div className="photo-gallery__container">
                {photos.map((photo, index) => (
                    <div className="photo-gallery__img__container" key={index}>
                        <img className="photo-gallery__img" src={photo.src} alt={photo.alt} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PhotoGallery;
