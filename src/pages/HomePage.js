import React from "react";

export default function HomePage() {

    return (
        <div>
            <video  loop autoPlay muted >
                <source src="favorite/resources/Accueil.mp4" type="video/mp4"></source>
                <source src="favorite/resources/Accueil.webm" type="video/webm"></source>
            </video>
        </div>
    )
}