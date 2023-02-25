import React from "react";
import { useEffect, useState } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

import logo from '../assets/logo.png';

export function Navbar(){
    const [scroll, setScroll] = useState(0);
    const [showMobileList, setShowMobileList] = useState(false);

    useEffect(() =>{
        window.addEventListener('scroll', () => {
            setScroll(window.scrollY);
        });

        return () => setScroll(0);
    },[])

    return(
        <>
        <nav className={scroll>50 ? 'navbar sticky' : 'navbar'} onScroll={(e) => e.currentTarget.class="scroll"}>
            <div className="content">
                <div className="logo">
                    <a href="#">
                        <img src={logo} alt="logo"/>
                    </a>
                    <p className={scroll>50 ? 'logotype logotype--sticky' : 'logotype'}>
                        Prelux Art
                    </p>
                </div>

                <ul className="nav__list">
                    <li><a className="custom-link" href="#hero">Home</a></li>
                    <li><a className="custom-link" href="#about">About Me</a></li>
                    <li><a className="custom-link" href="#">Art</a></li>
                    <li><a className="custom-link" href="#">Contact</a></li>
                </ul>

                { !showMobileList && <div className="hamburger-icon" onClick={() => setShowMobileList(true)}>
                    <FontAwesomeIcon icon={faBars}/>
                </div>}

                { showMobileList && <div className="x-icon" onClick={() => setShowMobileList(false)}>
                    <FontAwesomeIcon icon={faXmark}/>
                </div>}
            </div>
        </nav>
        
        { showMobileList && 
        <ul className="nav__list--mobile">
            <li><a className="custom-link" href="#hero">Home</a></li>
            <li><a className="custom-link" href="#about">About Me</a></li>
            <li><a className="custom-link" href="#">Art</a></li>
            <li><a className="custom-link" href="#">Contact</a></li>
        </ul>}
        </>
    )
}