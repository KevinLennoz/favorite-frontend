import React from "react";
import { Link } from "react-router-dom";

import "../style/pages/HomePage.css"
export default function HomePage() {

    return (
        <div className="home">
            <video  loop autoPlay muted>
                <source src="/resources/Accueil.mp4" type="video/mp4"></source>
                <source src="/resources/Accueil.webm" type="video/webm"></source>
            </video>
            <Link to="/products/all" className="link">Acceder au site</Link>
        </div>
    )
}