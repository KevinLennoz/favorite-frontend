import React from "react";

export default function PhotosDisplay ({ photos }) {

    const largePhoto = document.querySelector('#large-photo');

    const changeLargePhoto = (photo) => {
        largePhoto.src = `/resources/clothes/${photo.path}`;
        largePhoto.alt = `/resources/clothes/${photo.description}`;

    }
    return (
        <div className="product-photos">
            <div className="photos-preview">
                {photos.map(photo => <img src={`/resources/clothes/${photo.path}`} alt={`${photo.description}`} className="preview" key={photo.id}
                onClick={() => changeLargePhoto(photo)}/>)}
            </div>
            <img id="large-photo" alt="product"></img>
        </div>
    )
}