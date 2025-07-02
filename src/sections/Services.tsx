import { useState } from "react";
import "../styles/Services.css";
import {faTooth, faTeeth, faSmile, faXRay, faUserMd, faStethoscope,faCheckCircle,faSearch,faClinicMedical} from "@fortawesome/free-solid-svg-icons";
import type {IconDefinition} from "@fortawesome/fontawesome-svg-core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


type Service = {
    name: string;
    icon: IconDefinition;
    description: string;
};

const services = [
    {
        name: "Čeľustná ortopédia",
        icon: faTooth,
        description:
            "Liečba nepravidelností zubov a čeľustí pomocou strojčekov a ďalších ortodontických pomôcok.",
    },
    {
        name: "Konzervačná a estetická stomatológia",
        icon: faSmile,
        description:
            "Obnova poškodených zubov a zlepšenie estetického vzhľadu chrupu.",
    },
    {
        name: "Endodoncia",
        icon: faXRay,
        description:
            "Ošetrenie koreňových kanálikov zubov s cieľom zachovania zuba.",
    },
    {
        name: "Protetická stomatológia",
        icon: faClinicMedical,
        description:
            "Náhrady chýbajúcich zubov pomocou koruniek, mostíkov alebo protéz.",
    },
    {
        name: "Chirurgická stomatológia",
        icon: faUserMd,
        description:
            "Chirurgické zákroky v oblasti ústnej dutiny, vrátane extrakcií zubov a implantátov.",
    },
    {
        name: "Dentálna hygiena",
        icon: faTeeth,
        description:
            "Profesionálne čistenie zubov a edukácia o správnej ústnej hygiene.",
    },
    {
        name: "Konziliárne vyšetrenia",
        icon: faStethoscope,
        description:
            "Odborné konzultácie a hodnotenia od špecialistov v stomatológii.",
    },
    {
        name: "Preventívna stomatológia",
        icon: faCheckCircle,
        description:
            "Prevencia vzniku zubných kazov a ochorení ďasien pravidelnými kontrolami.",
    },
    {
        name: "Preventívne prehliadky",
        icon: faSearch,
        description:
            "Pravidelné prehliadky na zistenie a predchádzanie problémom v ústnej dutine.",
    },
];

const Services = () => {
    const [activeService, setActiveService] = useState<Service | null>(null);

    return (
        <div className="services-container">
            <h2 className="about-title">Naše služby</h2>
            <div className="services-grid">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="service-card"
                        onClick={() => setActiveService(service)}
                    >
                        <FontAwesomeIcon icon={service.icon} style={{width: "3vw", height: "3vw"}}/>
                        <h3>{service.name}</h3>
                    </div>
                ))}
            </div>

            {activeService && (
                <div className="modal-overlay" onClick={() => setActiveService(null)}>
                    <div
                        className="modal-content"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button className="modal-close" onClick={() => setActiveService(null)}>
                            &times;
                        </button>
                        <FontAwesomeIcon icon={activeService.icon} />
                        <h2>{activeService.name}</h2>
                        <p>{activeService.description}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Services;
