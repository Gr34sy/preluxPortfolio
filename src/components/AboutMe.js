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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                    </p>

                    <p className="about__text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                    </p>

                    <p className="about__text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                    </p>
                </div>

            </article>

        
            
            <article className="about__second">
                
            </article>
        </section>
    )
}