import React from "react";
import { Link } from "react-router-dom";
import "./RegistrationCard.css";

function RegistrationCard() {
  return (
    <div className="registration-card">
      <h2 id="join-intro"> Join Us Now </h2>
      <div id="bottom-container">
        <Link to="/handymanSignup">
          <div className="register-card">
            <h3>
              As a <br />
              Handyman
            </h3>
          </div>
        </Link>

        <Link to="/customerSignup">
          <div className="register-card">
            <h3>
              As a <br />
              Customer
            </h3>
          </div>
        </Link>
        <h3 className="login-btn-land">Already Have a account? Log in</h3>
      </div>
    </div>
  );
}

export default RegistrationCard;
