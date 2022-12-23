import React from "react";
import "./RegistrationCard.css";

function RegistrationCard() {
  return (
    <div className="registration-card">
      <h2 id="join-intro"> Join Us Now </h2>
      <div id="bottom-container">
        <div className="register-card">
          <h3>
            As a <br />
            Handyman
          </h3>
        </div>
        <div className="register-card">
          <h3>
            As a <br />
            Customer
          </h3>
        </div>
      </div>
    </div>
  );
}

export default RegistrationCard;
