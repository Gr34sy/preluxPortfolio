import React from "react";
import { FirebaseImage } from './FirebaseImage';

export function AboutMe(){
    return(
        <section className="about" id="about">

            <article className="about1">
                <figure>
                    <FirebaseImage imgNum='2' imgClass="about__img"/>
                </figure>
            </article>
            
            <article className="about2">
                <figure>
                    <FirebaseImage imgNum='3' imgClass="about__img"/>
                </figure>
            </article>
        </section>
    )
}