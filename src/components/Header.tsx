import React, { useState } from "react";
import logo from '../images/ortodentlogo.png'
import '../styles/Header.css'

import {useLocation, useNavigate} from "react-router-dom";
import Hamburger from 'hamburger-react'
import {handleScrollToSection} from "../utils/scrollUtils.ts";


const Header: React.FC = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const scrollTo = (id:string) =>{
        handleScrollToSection(id,navigate,location,setMenuOpen);
    }

    return (
            <div className="header">
                <div className="header_logo" onClick={() => scrollTo("domov")}>
                    <img src={logo} alt="Logo" className="header_logo" onClick={()=> navigate('/hportodent')} />
                </div>
                    <div className="hamburger">
                        <Hamburger
                            toggled={menuOpen} toggle={toggleMenu}
                        />
                    </div>

                <nav className={`header_nav ${menuOpen ? "active" : ""}`}>
                    <ul className="header_nav_list">
                        <li><a onClick={() => scrollTo("o-nas")}>O nás</a></li>
                        <li><a onClick={() => scrollTo("galeria")}>Galéria</a></li>
                        <li className="wide-item"><a onClick={() => scrollTo("sluzby")}>Ponúkané služby</a></li>
                        <li><a onClick={() => scrollTo("premeny")}>Premeny</a></li>
                        {menuOpen && (
                            <li><a onClick={() => scrollTo("rezervacia")}>Rezervácia</a></li>
                        )}
                        <li><a onClick={() => scrollTo("kontakt")}>Kontakt</a></li>
                    </ul>
                </nav>
                <button className="reservation_button desktop_only white-bg" onClick={()=> scrollTo("rezervacia")}>Rezervuj si termín</button>
            </div>
    )
}

export default Header;
