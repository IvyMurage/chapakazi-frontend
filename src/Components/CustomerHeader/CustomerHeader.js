import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faBriefcaseMedical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import "./CustomerHeader.css";

function CustomerHeader({ setActive, active }) {
  const navigate = useNavigate();
  const [trigger, setTrigger] = useState(true);

  function logout() {
    setTrigger(false);
    localStorage.removeItem("customer");
    localStorage.removeItem("customerInfo");
    navigate("/customerLogin");
  }
  return (
    <div className="header">
      <Link to="/">
        <h2>
          Chapa <span id="kazi-header"> Kazi </span>
        </h2>
      </Link>

      <nav>
        <ul>
          <Link to="/handymanProfiles">
            <li> Find Handyman </li>
          </Link>

          <Link to="/myjobs">
            <li> My Jobs </li>
          </Link>

          <Link to="/jobForm">
            <li>
              <FontAwesomeIcon icon={faBriefcaseMedical} className="addJob" />
            </li>
          </Link>
          <Link to="/profile">
          <li>
            <FontAwesomeIcon icon={faUser} className="user-profile" />
          </li>
          </Link>
         
          <li
            className="customer-logout-btn"
            id={active ? "active-btn" : ""}
            onClick={logout}
          >
            {active ? " Log In" : " Log Out"}
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default CustomerHeader;
