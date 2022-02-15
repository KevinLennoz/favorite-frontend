import React from "react";
import { Link } from "react-router-dom";
import "../style/components/Header.css"

export default function Header() {
    return (
            <div className="header">
                <Link to="/products/all" id="app-name">FAVORITE</Link>
            </div>        
    );
}