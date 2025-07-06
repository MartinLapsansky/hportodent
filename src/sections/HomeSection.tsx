import mainPhoto from '../images/dentist man.png'
import '../styles/HomeSection.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPhone} from "@fortawesome/free-solid-svg-icons";
import {faMapLocationDot} from "@fortawesome/free-solid-svg-icons";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {handleScrollToSection} from "../utils/scrollUtils.ts";
import {useLocation, useNavigate} from "react-router-dom";
import {useInView} from "react-intersection-observer";


const HomeSection:React.FC = () => {

    const {inView, ref} = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    const navigate = useNavigate();
    const location = useLocation();

    const scrollToSection = (id:string) => {
        handleScrollToSection(id,navigate,location)
    }


    return(
        <section ref={ref} className={`flex flex-col items-center md:row flex-wrap w-[100%] md:w-[85%] p-0 md:p-6 mx-auto my-0 transition-all duration-1000 ease-out transform ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
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
                                <div className="info-text address-box" onClick={() => scrollToSection("kontakt")}>
                                    <h2>Adresa</h2>
                                    <p>Školská ul.č.175/2</p>
                                    <p>Spišské Podhradie 053 04</p>
                                </div>
                            </div>
                        </div>
                        <div className="info-box">
                            <div className="info-box-content">
                                <a href="tel:0534541345" className="flex flex-row items-center justify-center">
                                <FontAwesomeIcon className="info-icon" icon={faPhone}/>
                                <div className="info-text ml-4">
                                    <h2>Telefón</h2>
                                    <p className="hover:underline text-blue-600">053 454 1345</p>
                                </div>
                                </a>
                            </div>
                        </div>
                        <div className="info-box">
                            <div className="info-box-content">
                                <a href="mailto:hportodent@azet.sk" className="flex flex-row items-center">
                                <FontAwesomeIcon className="info-icon" icon={faEnvelope}/>
                                <div className="info-text ml-4">
                                    <h2>Email</h2>
                                    <p className="hover:underline text-blue-600">hportodent@azet.sk</p>

                                </div>
                                </a>
                            </div>
                        </div>


                    </div>
                </div>
                    <div className="homepage_right">
                        <img src={mainPhoto} alt="main_photo" className="homepage_image"/>
                    </div>
            </div>

        </section>
    )
}

export default HomeSection;
