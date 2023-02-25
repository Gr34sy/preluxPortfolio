import React from "react";
import { FirebaseImage } from './FirebaseImage';

export function AboutMe(){
    return(
        <section className="about" id="about">
            <article className="about__first">

                <figure className="about__first-left">
                    <FirebaseImage imgNum='6' imgClass="about__img" format="jpg" />
                </figure>
                
                <div className="about__first-right">
                    asd
                </div>

            </article>

        
            
            <article className="about__second">
                
            </article>
        </section>
    )
}