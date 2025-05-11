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
                            komplexnej <span>čeľustnoortopedickej</span> a <span> stomatologickej</span> starostlivosti.
                        </h1>
                    </div>
                    <div className="heading-sub">
                        <p>Lorem ipsosmdvfvke vefvokfev</p>
                    </div>
                </div>
                    <div className="homepage_right">
                        <img src={mainPhoto} alt="main_photo" className="homepage_image"/>
                    </div>
            </div>
                <div className="contact-info">
                    <button className="info-box">
                        <div className="info-box-content">
                            <FontAwesomeIcon className="info-icon" icon={faMapLocationDot}/>
                            <div className="info-text">
                                <h2>Adresa</h2>
                                <p>Školská ul.č.175/2</p>
                                <p>Spišské Podhradie 053 04</p>
                            </div>
                        </div>
                    </button>
                    <button className="info-box">
                        <div className="info-box-content">
                            <FontAwesomeIcon className="info-icon" icon={faPhone}/>
                            <div className="info-text">
                                <h2>Telefón</h2>
                                <p>053 454 1345</p>
                            </div>
                        </div>
                    </button>
                    <button className="info-box">
                        <div className="info-box-content">
                            <FontAwesomeIcon className="info-icon" icon={faEnvelope}/>
                            <div className="info-text">
                                <h2>Email</h2>
                                <p>hportodent@azet.sk</p>
                            </div>
                        </div>
                    </button>

                </div>
        </div>
    )
}

export default HomeSection;
