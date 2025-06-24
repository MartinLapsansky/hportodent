import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck} from "@fortawesome/free-solid-svg-icons";
import '../styles/ReservationSuccess.css'

const ReservationSuccess: React.FC = () => {
  return (
      <div className="success-reservation">
          <h1>Ďakujeme za rezerváciu!</h1>
          <FontAwesomeIcon icon={faCheck} style={{color: 'white', backgroundColor: 'green',padding: '2rem',fontSize: '6rem',borderRadius:'50%' }} />
          <h2>Detailné informácie Vám boli zaslané na emailovú adresu.</h2>
      </div>
  );
};

export default ReservationSuccess;