import React from "react";
import aboutImage from "../images/kreslo_dentist.png";
import "../styles/AboutSection.css";
import mouthImage from "../images/mouth.png";

const AboutSection: React.FC = () => {
    return (
        <div className="about-section">
            <h2 className="about-title">O nás</h2>
            <div className="about-content">
                <div className="about-content-text">
                    <div className="about-text-doctor">
                        <p>
                            Čeľustný ortopéd a stomatológ <span>MUDr. Hudák Peter</span>, poskytuje komplexnú
                            čeľustnoortopedickú
                            a stomatologickú starostlivosť v oblasti <span>ortodoncie, konzervačnej, rekonštrukčnej, estetickej,
                        protetickej a
                        chirurgickej stomatológie</span> s použitím štandardných a nadštandardných liečebných postupov a
                            materiálov.
                        </p>
                    </div>
                    <div className="mouth-image">
                        <img src={mouthImage} alt="mouth"/>
                    </div>
                </div>

                <div className="about-image">
                    <img src={aboutImage} alt="About us"/>
                </div>
        </div>
        </div>
    );
};

export default AboutSection;
