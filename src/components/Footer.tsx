import React from 'react';
import '../styles/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import logo from "../images/ortodentlogo.png";

const Footer: React.FC = () => {
    const openingHours = [
        { day: 'Pondelok', time: '8.00 - 12.00' },
        { day: 'Utorok', time: '7.30 - 14.00', note: 'čeľustná ortopédia' },
        { day: 'Streda', time: '7.30 - 16.00' },
        { day: 'Štvrtok', time: '7.30 - 14.30', note: 'čeľustná ortopédia' },
        { day: 'Piatok', time: '7.30 - 14.00' },
    ];

    return (
        <footer className="footer">
            <div className="footer-section logo-section">
                <div className="logo">HPortodent</div>
                <div className="header_logo">
                    <img src={logo} alt="Logo" className="header_logo"/>
                </div>
                <div className="social-icons">
                    <FontAwesomeIcon icon={faFacebook} className="icon" />
                    <FontAwesomeIcon icon={faInstagram} className="icon" />
                </div>
            </div>

            <div className="footer-section contact-section">
                <h3>Kontakt</h3>
                <p><strong>Email:</strong> hportodent@azet.sk</p>
                <p><strong>Telefón:</strong>0534541345</p>
                <p><strong>Adresa:</strong>Školská ul.č.175/2, Spišské Podhradie</p>
            </div>

            <div className="footer-section hours-section">
                <h3>Ordinačné hodiny</h3>
                {openingHours.map((entry, index) => (
                    <div key={index} className="hours-row">
                        <span className="day">{entry.day}</span>
                        <span className="time">
                            {entry.time}
                            {entry.note && <span className="note">{entry.note}</span>}
                        </span>
                    </div>
                ))}
            </div>
        </footer>
    );
};

export default Footer;
