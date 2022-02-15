import React from "react";
import { Link } from "react-router-dom";

import "../style/components/ProductPreview.css"

export default function ProductPreview( {product}) {


    const setHoverPhoto = () => {
        const photo = document.querySelector(`#product-photo-${product.id}`)
        photo.src = `/resources/clothes/${product.photos[1].path}`
    }

    const setBasicPhoto = () => {
        const photo = document.querySelector(`#product-photo-${product.id}`)
        photo.src = `/resources/clothes/${product.photos[0].path}`
    }
    

    return (
        <Link to={`/products/${product.productType.name}/${product.id}`} className="product-preview" key={product.id}>
            <img src={`/resources/clothes/${product.photos[0].path}`} alt={product.photos[0].description} id={`product-photo-${product.id}`} className="product-photo-preview"
            onMouseEnter={() => setHoverPhoto()} onMouseOut={() => setBasicPhoto()}></img>
            { !product.available && <label id="no-stock"> Rupture de stock </label> }
            <div className="product-info">
                <label> {product.name} </label>
                <label> {product.price}€</label>
            </div>
        </Link>

    )
}