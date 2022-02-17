import React from "react";
import { Link } from "react-router-dom";

import "../style/components/Header.css"

export default function Header( {cart, user}) {
    

    return (
            <div className="header">
                <label> Bonjour {user.surname} </label>
                <Link to="/" id="app-name">FAVORI(TE)</Link>
                <Link to="/cart">
                <div className="cart-header">
                    <img src={"/resources/cart.svg"} alt="cart-icon"/>
                    <div className="cart-length-icon">
                        <label id="cart-length">{cart.quantity}</label>
                    </div>
                </div>
                </Link>
            </div>        
    );
}