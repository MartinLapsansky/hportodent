import React, { useState } from "react";
import logo from '../images/ortodentlogo.png'
import '../styles/Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
const Header: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="header">
            <div className="header_logo">
                <img src={logo} alt="Logo" className="header_logo" />
            </div>

            <div className="hamburger" onClick={toggleMenu}>
                <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
            </div>

            <nav className={`header_nav ${menuOpen ? "active" : ""}`}>
                <ul className="header_nav_list">
                    <li><a href="#domov">Domov</a></li>
                    <li className="wide-item"><a href="#sluzby">Ponúkané služby</a></li>
                    <li><a href="#premeny">Galéria</a></li>
                    <li><a href="#kontakt">Kontakt</a></li>
                </ul>
            </nav>

            <button className="reservation_button desktop_only">Rezervuj si termín</button>
        </div>
    )
}

export default Header;
