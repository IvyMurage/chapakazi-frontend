import { faBriefcaseMedical, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

function CustomerHeader() {
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
          <li> Find Jobs </li>
          <Link to="/jobForm">
            <li>
              <FontAwesomeIcon icon={faBriefcaseMedical} className="addJob" />
            </li>
          </Link>

          <li> Log Out </li>
        </ul>
      </nav>
    </div>
  );
}

export default CustomerHeader;
