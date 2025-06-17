import React from "react";
import mainPhoto from '../images/dentist man.png'
import '../styles/HomeSection.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPhone} from "@fortawesome/free-solid-svg-icons";
import {faMapLocationDot} from "@fortawesome/free-solid-svg-icons";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";

const HomeSection:React.FC = () => {
    return(
        <div className="home_section_container">
            <div className="content-block">
                <div className="heading-text">
                    <div className="heading">
                        <h1>Ambulancia
                            komplexnej <span>čeľustnoortopedickej</span> <br/> a <span> stomatologickej</span> starostlivosti.
                        </h1>
                    </div>
                    <div className="heading-sub">
                        <p>Poskytujeme komplexnú starostlivosť o váš úsmev – od prevencie až po špecializovanú ortodontickú a stomatologickú liečbu.</p>
                    </div>
                    <div className="contact-info">
                        <div className="info-box">
                            <div className="info-box-content">
                                <FontAwesomeIcon className="info-icon" icon={faMapLocationDot}/>
                                <div className="info-text address-box">
                                    <h2>Adresa</h2>
                                    <p>Školská ul.č.175/2</p>
                                    <p>Spišské Podhradie 053 04</p>
                                </div>
                            </div>
                        </div>
                        <div className="info-box">
                            <div className="info-box-content">
                                <FontAwesomeIcon className="info-icon" icon={faPhone}/>
                                <div className="info-text">
                                    <h2>Telefón</h2>
                                    <p>053 454 1345</p>
                                </div>
                            </div>
                        </div>
                        <div className="info-box">
                            <div className="info-box-content">
                                <FontAwesomeIcon className="info-icon" icon={faEnvelope}/>
                                <div className="info-text">
                                    <h2>Email</h2>
                                    <p>hportodent@azet.sk</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                    <div className="homepage_right">
                        <img src={mainPhoto} alt="main_photo" className="homepage_image"/>
                    </div>
            </div>

        </div>
    )
}

export default HomeSection;
