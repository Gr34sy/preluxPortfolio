import React from "react";
import { FirebaseImage } from './FirebaseImage';

export function Hero(){
    return(
        <main className="hero">
            <figure className="hero__container">

                <FirebaseImage imgNum='1' imgClass="hero__img"/>

            </figure>
        </main>
    )
}