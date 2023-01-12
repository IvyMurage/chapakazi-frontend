import { faBriefcaseMedical, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./CustomerHeader.css";

function CustomerHeader() {
  const [active, setActive] = useState(false);
  const navigate = useNavigate();

  function logout() {
    setActive(true);
    localStorage.removeItem("customer");
    localStorage.removeItem("customerInfo");
    navigate("/customerLogin");
  }
  return (
    <div className="header">
      <h2>
        Chapa <span id="kazi-header"> Kazi </span>
      </h2>
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

          <li
            className="customer-logout-btn"
            id={active ? "active-btn" : ""}
            onClick={logout}
          >
            Log Out
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default CustomerHeader;
