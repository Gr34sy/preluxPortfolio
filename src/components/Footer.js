import React from "react";

import { Logo } from "./Logo";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons' 

export function Footer(){
    return(
        <footer className="footer" id="footer">
            <div className="footer__container">
                <div className="footer__logo-box">
                    <Logo/><span> Copyright &copy;</span>
                </div>

                <a href="https://www.instagram.com/prelux.art/" className="footer__ig-link">
                    <p>Find me on Instagram to see more of my artworks!</p>
                    <FontAwesomeIcon icon={faInstagram} className='footer__icon' />
                </a>
            </div>
        </footer>
    )
}