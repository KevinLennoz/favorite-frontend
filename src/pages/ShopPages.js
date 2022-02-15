import React, { useEffect, useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import ProductsCaroussel from "./ProductsCaroussel";
import Product from "./Product";

import "../style/pages/ShopPages.css"

export default function ShopPages() {

    const [activeCategorie, setActiveCategorie] = useState('all')
    const [categories, setCategories] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:9090/products')
        .then(response => response.json())
        .then(jsonResponse => setCategories(jsonResponse.categories)
        )}, [])

    return (
        <div className="products">
            <div className="products-header">
                <Link to="all"
                className={activeCategorie === 'all' ? "categorie-name active" : "categorie-name"}
                onClick={() => setActiveCategorie('all')}> Tous les produits </Link>
                {categories ? categories.map(cat => 
                <Link to={`${cat.name.toLowerCase()}`}
                className={activeCategorie === cat.name ? "categorie-name active" : "categorie-name"}
                key={cat.name}
                onClick={() => setActiveCategorie(`${cat.name}`)}> {cat.name} </Link>) 
                : <label> No categories </label>}
            </div>
            <Routes>
                <Route path="all" element={<ProductsCaroussel />}/>
                <Route path=":categorie" element={<ProductsCaroussel />}/>
                <Route path=":categrorie/:productId" element={<Product/>} />
            </Routes>
        </div>
    )
}