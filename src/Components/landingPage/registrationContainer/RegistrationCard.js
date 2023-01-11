import React from "react";
import { Link } from "react-router-dom";
import "./RegistrationCard.css";

function RegistrationCard() {
  return (
    <div className="registration-card">
      <h2 id="join-intro"> Join Us Now </h2>
      <div id="bottom-container">
        <Link to="/signup">
          <div className="register-card">
            <h3>
              As a <br />
              Handyman
            </h3>
          </div>
        </Link>

        <Link to="/customer/signup">
        <div className="register-card">
          <h3>
            As a <br />
            Customer
          </h3>
        </div>
        </Link>
       
      </div>
    </div>
  );
}

export default RegistrationCard;
