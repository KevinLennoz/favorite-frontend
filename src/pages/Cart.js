import React from "react";
import { CartLine } from "../components/CartLine";

import "../style/pages/Cart.css"

export default function Cart( {cart} ) {

    return (
        <div className="cart">
            <label id="your-cart">Votre Panier</label>
            <div className="cart-lines">
                {cart.orderLines.length > 0 ? cart.orderLines.map(orderLine => <CartLine orderLine={orderLine}/>) : <label>Votre panier est vide</label> }
            </div>
        </div>
    )
}