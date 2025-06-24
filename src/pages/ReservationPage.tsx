import React, {useState} from 'react';
import '../styles/ReservationPage.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowDown} from "@fortawesome/free-solid-svg-icons";
import CalendarSection from "../components/CalendarSection.tsx";
import { faCheck, faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from "react-router-dom";

function parseDateToShortFormat(date: Date): string {

  const day = date.getDate();
  const month = date.getMonth() + 1; // getMonth() vracia 0-11, preto +1
  const year = date.getFullYear();

  return `${day}.${month}.${year}`;
}


const ReservationPage: React.FC = () => {


  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [errors,setErrors] = useState<{[key:string]: string}>({});

  const navigate = useNavigate();

  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    service: "",
    note: ""
  });

  const handleChange = (field:string,value:string) => {
    setValues((prev) => ({...prev, [field]: value}));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  }



  const services = ['Dentálna hygiena', 'Preventívna prehliadka', 'Bielenie zubov', 'Ošetrenie kazu'];

  const handleSubmitReservation = async () =>{

    const newErrors: {[key:string]: string} = {};

    if (!values.firstName.trim()) newErrors.firstName = "Meno je povinne";
    if (!values.lastName.trim()) newErrors.lastName = "Priezvisko je povinné!";
    if (!values.email.trim()) newErrors.email = "Email je povinný!";
    if (!values.phone.trim()) newErrors.phone = "Telefón je povinný!";
    if (!values.service) newErrors.service = "Služba je povinná!";
    if (!selectedDate) newErrors.date = "Dátum je povinný!";
    if (!selectedTime) newErrors.time = "Čas je povinný!";

    setErrors(newErrors);
    let parsedDate = "";
    if (Object.keys(newErrors).length > 0) return;

    try {
      if(selectedDate != null){
        parsedDate = parseDateToShortFormat(selectedDate);
      }
      const response = await fetch("http://localhost:8080/api/reservations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
        ...values,
        date: parsedDate,
        time: selectedTime
      })
    })
      const responseData = await response.json();

      if(!response.ok){
        new Error(responseData.message || "Chyba pri odosielani rezervacie");
      }
      console.log("Rezervacia uspesna",responseData);
      setValues({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        service: "",
        note: ""
      });
      setSelectedDate(null);
      setSelectedTime(null);
      navigate("/hportodent/rezervacia/success");
    }
    catch (error) {
      console.error("Chyba pri odosielani",error);
    }
  }

  return (
      <div className="reservation-page">
      <div className="reservation-container">
        <h1 className="heading-text reservation-heading">Navštív nás, kedy to tebe najviac vyhovuje!</h1>
        <div className="user-info">
          <div className="first-name">
            <span>Meno</span>
            <div className="input-with-icon">
            <input
              type="text"
              style={{width: "100%"}}
              placeholder="napr.Jožko"
              value={values.firstName}
              onChange={(e) => handleChange("firstName", e.target.value)}
              className={errors.firstName ? "input-error" : values.firstName ? "input-valid" : ""}
              />
              {errors.firstName ? (
                  <FontAwesomeIcon icon={faExclamationCircle} className="input-icon error" />
              ) : values.firstName ? (
                  <FontAwesomeIcon icon={faCheck} className="input-icon valid" />
              ) : null
              }
            </div>
            {errors.firstName && <p className="error-text">{errors.firstName}</p>}
          </div>
          <div className="last-name">
            <span>Priezvisko</span>
            <div className="input-with-icon">
            <input
                type="text"
                style={{ width: "100%" }}
                placeholder="napr.Mrkvička"
                value={values.lastName}
                onChange={(e) => handleChange("lastName", e.target.value)}
                className={errors.lastName ? "input-error" : values.lastName ? "input-valid" : ""}
            />
              {errors.lastName ? (
                  <FontAwesomeIcon icon={faExclamationCircle} className="input-icon error" />
              ) : values.lastName ? (
                  <FontAwesomeIcon icon={faCheck} className="input-icon valid" />
              ) : null
              }
            </div>
            {errors.firstName && <p className="error-text">{errors.firstName}</p>}
          </div>

          <div className="email">
            <span>Email</span>
            <div className="input-with-icon">
            <input
                type="text"
                style={{ width: "100%" }}
                placeholder= "napr.jozko.mrkvicka@gmail.com"
                value={values.email}
                onChange={(e) => handleChange("email", e.target.value)}
                className={errors.email ? "input-error" : values.email ? "input-valid" : ""}
            />
              {errors.email ? (
                  <FontAwesomeIcon icon={faExclamationCircle} className="input-icon error" />
              ) : values.email ? (
                  <FontAwesomeIcon icon={faCheck} className="input-icon valid" />
              ) : null
              }
          </div>
          {errors.firstName && <p className="error-text">{errors.firstName}</p>}
          </div>
          <div className="phone">
            <span>Telefón</span>
            <div className="input-with-icon">
            <input
                type="text"
                style={{ width: "100%" }}
                placeholder= "napr. 0904 608 208"
                value={values.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                className={errors.phone ? "input-error" : values.phone ? "input-valid" : ""}
            />
              {errors.phone ? (
                  <FontAwesomeIcon icon={faExclamationCircle} className="input-icon error" />
              ) : values.phone ? (
                  <FontAwesomeIcon icon={faCheck} className="input-icon valid" />
              ) : null
              }
          </div>
            {errors.phone && <p className="error-text">{errors.phone}</p>}
        </div>
        </div>
      </div>
        <div className="service-full">
        <div className="service-container">
          <h2 className="heading-service">Vyber službu:</h2>
            <div className="custom-dropdown">
              <button onClick={() => setShowDropdown(!showDropdown)} className={`dropdown-button ${errors.service ? "input-error" : values.service ? "input-valid" : ""}`}>
                {values.service || "Vyber sluzbu"}
                <FontAwesomeIcon icon={faArrowDown}></FontAwesomeIcon>
                {errors.service && (
                    <FontAwesomeIcon icon={faExclamationCircle} className="input-icon error" />
                )}
                {!errors.service && values.service && (
                    <FontAwesomeIcon icon={faCheck} className="input-icon valid" />
                )}
              </button>
              {errors.service && <p className="error-text">{errors.service}</p>}
              {showDropdown && (
                  <div className="dropdown-menu">
                    {services.map((service, index) => (
                        <div key={index} className="dropdown-item" onClick={() => {
                          setValues((prev) => ({...prev,service}));
                          setShowDropdown(!showDropdown)}}
                        >{service}
                        </div>
                    ))}
                  </div>
              )}
            </div>
        </div>
        <div className="description">
          <textarea
              className="description-input"
              placeholder="Poznámka..."
              value={values.note}
              onChange={(e) => handleChange("note", e.target.value)}/>
        </div>
        </div>
        <div className="calendar-section">
          <CalendarSection selectedDate={selectedDate} selectedTime={selectedTime} setSelectedTime={setSelectedTime} setSelectedDate={setSelectedDate}/>
          {(errors.date || errors.time) && (
              <div className="calendar-errors">
                {errors.date && <p className="error-text">{errors.date}</p>}
                {errors.time && <p className="error-text">{errors.time}</p>}
              </div>
          )
          }
        </div>
        <button className="reservation_button" type="submit" onClick={handleSubmitReservation} style={{margin:0}}>Odoslať rezerváciu</button>
      </div>
  );
};

export default ReservationPage;