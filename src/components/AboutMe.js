import React from "react";
import { FirebaseImage } from './FirebaseImage';

export function AboutMe(){
    return(
        <section className="about" id="about">
            <article className="about__first">

                <figure className="about__first-left">
                    <FirebaseImage imgNum='2' imgClass="about__img" format="jpg" />
                    <FirebaseImage imgNum='3' imgClass="about__img" format="jpg" />
                </figure>
                
                <div className="about__first-right">
                    <h1 className="about__title">About me</h1>
                    <p className="about__text">

                    </p>
                </div>

            </article>

        
            
            <article className="about__second">
                
            </article>
        </section>
    )
}