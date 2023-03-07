import React from "react";
import logo from '../assets/logo.png';

export function Logo(){
    return(
        <div className="logo">
            <a href="#">
                <img src={logo} alt="logo"/>
            </a>
            <p className='logotype'>
                Prelux Art
            </p>
        </div>
    )
}