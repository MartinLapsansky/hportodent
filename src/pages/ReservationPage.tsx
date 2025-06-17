import React, {useState} from 'react';
import '../styles/ReservationPage.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowDown} from "@fortawesome/free-solid-svg-icons";
import CalendarSection from "../components/CalendarSection.tsx";


const ReservationPage: React.FC = () => {

  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedService, setSelectedService] = useState('Žiadna služba');
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  });

  const handleChange = (field:string,value:string) => {
    setValues((prev) => ({...prev, [field]: value}));
  }



  const services = ['Dentálna hygiena', 'Preventívna prehliadka', 'Bielenie zubov', 'Ošetrenie kazu'];


  return (
      <div className="reservation-page">
      <div className="reservation-container">
        <h1 className="heading-text reservation-heading">Navštív nás, kedy to tebe najviac vyhovuje!</h1>
        <div className="user-info">
          <div className="first-name">
            <span>Meno</span>
            <input
              type="text"
              style={{width: "100%"}}
              placeholder="napr.Jožko"
              value={values.firstName}
              onChange={(e) => handleChange("firstName", e.target.value)}
              />
          </div>
          <div className="last-name">
            <span>Priezvisko</span>
            <input
                type="text"
                style={{ width: "100%" }}
                placeholder="napr.Mrkvička"
                value={values.lastName}
                onChange={(e) => handleChange("lastName", e.target.value)}
            />
          </div>
          <div className="email">
            <span>Email</span>
            <input
                type="text"
                style={{ width: "100%" }}
                placeholder= "napr.jozko.mrkvicka@gmail.com"
                value={values.email}
                onChange={(e) => handleChange("phone", e.target.value)}
            />
          </div>

          <div className="phone">
            <span>Telefón</span>
            <input
                type="text"
                style={{ width: "100%" }}
                placeholder= "napr. 0904 608 208"
                value={values.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
            />
          </div>
        </div>
      </div>
        <div className="service-full">
        <div className="service-container">
          <h2 className="heading-service">Vyber službu:</h2>
            <div className="custom-dropdown">
              <button onClick={() => setShowDropdown(!showDropdown)} className="dropdown-button">
                {selectedService}
                <FontAwesomeIcon icon={faArrowDown}></FontAwesomeIcon>
              </button>
              {showDropdown && (
                  <div className="dropdown-menu">
                    {services.map((service, index) => (
                        <div key={index} className="dropdown-item" onClick={() => {
                          setSelectedService(service);
                          setShowDropdown(!showDropdown)}}
                        >{service}
                        </div>
                    ))}
                  </div>
              )}
            </div>
        </div>
        <div className="description">
          <textarea className="description-input" placeholder="Poznámka..."/>
        </div>
        </div>
        <div className="calendar-section">
          <CalendarSection/>
        </div>
        <button className="reservation_button" type="submit" style={{margin:0}}>Odoslať rezerváciu</button>
      </div>
  );
};

export default ReservationPage;