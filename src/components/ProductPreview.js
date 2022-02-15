import React from "react";
import { Link } from "react-router-dom";

import "../style/components/ProductPreview.css"

export default function ProductPreview( {product}) {

    return (
        <Link to={`/products/${product.productType.name}/${product.id}`} className="product" key={product.id}>
            <img src={`src/resources/clothes/${product.photos[0].path}`} alt={product.photos[0].description}></img>
            { !product.available && <label id="no-stock"> Rupture de stock </label> }
            <div className="product-info">
                <label> {product.name} </label>
                <label> {product.price}€</label>
            </div>
        </Link>

    )
}