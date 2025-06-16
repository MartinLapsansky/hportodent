import React from 'react';
import '../styles/LocationSection.css';

const LocationSection: React.FC = () => {
    return (
        <div className="location-section">
            <h2 className="about-title">Kde nás nájdete?</h2>
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
