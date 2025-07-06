import React from 'react';
import '../styles/LocationSection.css';
import { useInView } from "react-intersection-observer";


const LocationSection: React.FC = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <div ref={ref}
             className={`flex flex-col justify-center items-center px-4 py-12 bg-[#d6ecfd] rounded-[25px] w-full mx-auto text-center font-sans transition-all duration-1000 ease-out transform ${
                 inView ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
             }`}>
            <h2 className="bg-[#0c7cd1] w-fit rounded-[15px] border-4 border-black px-8 py-5 text-white">Kde nás nájdete?</h2>
            <div className="map-container">
                <iframe
                    title="Mapa HP Ortodent"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1391.361914323879!2d20.750770463588744!3d49.00226280181783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473e5b248eff3071%3A0xc2b0e496ceba45e0!2sHp%20Ortodent!5e0!3m2!1ssk!2ssk!4v1746992722713!5m2!1ssk!2ssk"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
    );
};

export default LocationSection;
