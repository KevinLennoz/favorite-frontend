import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductPreview from "../components/ProductPreview"

import "../style/pages/ProductsCaroussel.css"

export default function ProductsCaroussel() {

    const { categorie } = useParams()
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:9090/products')
        .then(response => response.json())
        .then(jsonResponse => {
            if (categorie == null) {
                setProducts(jsonResponse.products)
            } else {
                setProducts(jsonResponse.products.filter(
                    product => product.productType.name.toLowerCase() === categorie))
            }
        }
        )}, [categorie])

    return (
        <div className="caroussel">
        <div className="products-display">
            {products.length > 0 && products.map(product => <ProductPreview product={product}/>)}
        </div>
        {products.length <=0 && <label id="no-cloth"> Pas d'article pour le moment  </label>}
        </div>
    )
}