import React from "react";
import { useEffect, useState } from "react";

export function Navbar(){
    const [scroll, setScroll] = useState(0);

    useEffect(() =>{
        window.addEventListener('scroll', () => {
            setScroll(window.scrollY);
        });

        return () => setScroll(0);
    },[])

    return(
        <nav className={scroll>50 ? 'navbar sticky' : 'navbar'} onScroll={(e) => e.currentTarget.class="scroll"}>
            <div className="content">
                <div className="logo">
                    <a href="#"></a>
                </div>

                <ul className="nav__list">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Art</a></li>
                    <li><a href="#">Sdad</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
        </nav>
    )
}