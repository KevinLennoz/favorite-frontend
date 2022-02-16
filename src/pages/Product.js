import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PhotosDisplay from "../components/PhotosDisplay";

import "../style/pages/Product.css"

export default function Product (props) {

    const { productId } = useParams();
    const [state, setState] = useState({
        product: {},
        photos: [],
        designs: [],
        personnalize: false,
        size: null,
        customsLength: 0,
    })

    useEffect(() => {
        fetch(`http://localhost:9090/products/${productId}`)
        .then(response => response.json())
        .then(jsonResponse => setState({
            product: jsonResponse.product,
            photos: jsonResponse.product.photos,
            designs: jsonResponse.designs,
            personnalize: false,
            size: jsonResponse.product.stocks[0].size.label,
            customsLength: 1,
        }))
    }, [productId])

    const displayPersonnalizeForm = () => {

        const displayForm = () => {
            let form = Array(state.customsLength).fill(0)
            return form.map(() => (
            <div>
                <select name="design" id="design-select">
                    {state.designs.map(design => <option value={design.name}>{design.name}</option>)}
                </select>
                <select name="location" id="location-select">
                    {state.product.productType.locations.map(location => <option value={location.label}>{location.label}</option>)}
                </select>
            </div>))
        }
        
        return (
            <div>
                {state.designs && state.designs.map(design => (
                    <label> {design.name} </label>
                ))}
                {displayForm()}
                <button onClick={() => {setState({...state, customsLength: state.customsLength+1})}}>Ajouter une personnalisation</button>
            </div>
        )
    }

    const displayShoppingForm = () => {

        const handleButtonAddCart = (e) => {
            e.preventDefault();
            const size = document.querySelector('#size-select').value
            const quantity = parseInt(document.querySelector('#quantity-select').value)
            const price = state.product.price
            props.addToCart(state.product, size, quantity, price)
        }

        const changeSize = () => {
            document.querySelector('#quantity-select').value = 1
            const sizeValue = document.querySelector('#size-select').value;
            setState({...state, size: sizeValue});
        }

        const getQuantity = (stock) => {
            const quantity = stock.quantity
            return quantity > 0 ? 
            (
            <div>
                <label> Quantité en stock : {quantity} </label>
                <input type="number" min={1} max={quantity} id="quantity-select"></input>
            </div>
            ) : 
            <label>Cette taille n'est plus en stock</label>
        }

        const personnalize = () => {
            personnalize ?
            setState({...state, personnalize: !state.personnalize, customsLength: 1}) :
            setState({...state, personnalize: !state.personnalize})
        }

        return (
            <div className="shopping-form">
                <select name="size" id="size-select" onChange={() => changeSize()}>
                    {state.product.stocks && state.product.stocks.map(stock => (
                        <option value={stock.size.label} disabled={stock.quantity <= 0}>{stock.size.label}</option>
                    ))}
                </select>
                {state.size != null &&  getQuantity(state.product.stocks.find(stock => stock.size.label === state.size))}
                {state.personnalize && displayPersonnalizeForm}
                <button onClick={() => personnalize()}> {state.personnalize ? 'Annuler la personnalisation' : 'Personnaliser'} </button>
                <button onClick={handleButtonAddCart}> Ajouter au panier </button>
            </div>
        )
    }

    return ( 
        <div className="product">
            <PhotosDisplay photos={state.photos}/>
            <div className="product-informations">
                <label>{state.product.name}</label>
                <label>{state.product.description}</label>
                <label>{state.product.price}€</label>
                {state.product.available ? displayShoppingForm() : <label> PRODUIT EN RUPTURE DE STOCK </label>}
            </div>
            
        </div>
    )
}