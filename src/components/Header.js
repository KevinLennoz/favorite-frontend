import React from "react";
import { Link } from "react-router-dom";

import "../style/components/Header.css"

export default function Header( {cart, user}) {

    return (
            <div className="header">
                <label> Bonjour {user.surname} </label>
                <Link to="/products/all" id="app-name">FAVORI(TE)</Link>
                <div>
                    <img src={"/resources/cart.svg"} alt="cart-icon"/>
                </div>
            </div>        
    );
}