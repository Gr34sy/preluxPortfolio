import React from "react";
import masterpiece from "../assets/masterpiece.png";

export function Hero(){
    return(
        <main className="hero">
            <figure className="hero__container">
                <img src={masterpiece} className="hero__img"/>
            </figure>
        </main>
    )
}