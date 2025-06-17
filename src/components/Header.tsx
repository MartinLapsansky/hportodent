import React, { useState } from "react";
import logo from '../images/ortodentlogo.png'
import '../styles/Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars, faX} from '@fortawesome/free-solid-svg-icons';
import {useLocation, useNavigate} from "react-router-dom";


const Header: React.FC = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleScrollToSection = (id: string) => {
        const scrollToElement = () => {
            const section = document.getElementById(id);
            const header = document.querySelector('.header_section') as HTMLElement;

            if (section && header) {
                const headerHeight = header.offsetHeight;
                const yOffset = -headerHeight;
                const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;

                window.scrollTo({ top: y, behavior: 'smooth' });
            }
        };

        if (id === 'rezervacia') {
            navigate("/hportodent/rezervacia");
            return;
        }

        if (id === 'domov') {
            navigate("/hportodent");
        }

        if (location.pathname !== "/hportodent") {
            navigate("/hportodent", { replace: false });
            setTimeout(scrollToElement, 100);
        } else {
            scrollToElement();
        }

        setMenuOpen(false);
    };

    return (
            <div className="header">
                <div className="header_logo">
                    <img src={logo} alt="Logo" className="header_logo" onClick={()=> navigate('/hportodent')} />
                </div>

                <div className="hamburger" onClick={toggleMenu}>
                    {!menuOpen ? (
                        <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
                    ) : (
                        <FontAwesomeIcon icon={faX}></FontAwesomeIcon>
                    )
                    }
                </div>

                <nav className={`header_nav ${menuOpen ? "active" : ""}`}>
                    <ul className="header_nav_list">
                        <li><a onClick={() => handleScrollToSection("domov")}>Domov</a></li>
                        <li><a onClick={() => handleScrollToSection("o-nas")}>O nás</a></li>
                        <li className="wide-item"><a onClick={() => handleScrollToSection("sluzby")}>Ponúkané služby</a></li>
                        <li><a onClick={() => handleScrollToSection("premeny")}>Premeny</a></li>
                        {menuOpen && (
                            <li><a onClick={() => handleScrollToSection("kontakt")}>Rezervácia</a></li>
                        )}
                        <li><a onClick={() => handleScrollToSection("kontakt")}>Kontakt</a></li>
                    </ul>
                </nav>
                <button className="reservation_button desktop_only" onClick={()=> handleScrollToSection("rezervacia")}>Rezervuj si termín</button>
            </div>
    )
}

export default Header;
