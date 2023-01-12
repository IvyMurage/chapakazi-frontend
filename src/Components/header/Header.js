import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <h2>
        Chapa <span id="kazi-header"> Kazi </span>
      </h2>
      <nav>
        <ul>
          <Link to="/jobs">
            <li> Find Jobs </li>
          </Link>
          <li> Find Jobs </li>
          <li>
            <FontAwesomeIcon icon={faUser} id="profile" />
          </li>
          <li> Log Out </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
