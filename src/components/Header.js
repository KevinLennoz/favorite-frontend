import React from "react";
import { Link } from "react-router-dom";
import "../style/Header.css"

export default function Header() {
    return (
            <div className="header">
                <Link to="/products/all">FAVORITE</Link>
            </div>        
    );
}