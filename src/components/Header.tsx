import React from "react";
import logo from '../images/ortodentlogo.png'
import '../styles/Header.css'

const Header: React.FC = () => {
    return (
        <div className="header">
            <div className="header_logo">
                <img src={logo} alt="Logo" className="header_logo"/>
            </div>

            <nav className="header_nav">
                <ul className="header_nav_list">
                    <li><a href="#domov">Domov</a></li>
                    <li className="wide-item"><a href="#sluzby">Ponúkané služby</a></li>
                    <li><a href="#premeny">Galéria</a></li>
                    <li><a href="#kontakt">Kontakt</a></li>
                </ul>
            </nav>

            <button className="reservation_button">Rezervuj si termín</button>
        </div>

    )
}

export default Header;
