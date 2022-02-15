import React, { useEffect, useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import ProductsCaroussel from "./ProductsCaroussel";
import Product from "./Product";

export default function ShopPages() {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:9090/products')
        .then(response => response.json())
        .then(jsonResponse => setCategories(jsonResponse.categories)
        )}, [])

    return (
        <div className="products">
            <div className="products-header">
                <Link to="all"> Tous les produits </Link>
                {categories ? categories.map(cat => <Link key={cat.name} to={`${cat.name.toLowerCase()}`}> {cat.name}</Link>) : <label> No categories </label>}
            </div>
            <Routes>
                <Route path="all" element={<ProductsCaroussel/>}></Route>
                <Route path=":categorie" element={<ProductsCaroussel />}/>
                <Route path=":categrorie/:productId" element={<Product/>} />
            </Routes>
        </div>
    )
}