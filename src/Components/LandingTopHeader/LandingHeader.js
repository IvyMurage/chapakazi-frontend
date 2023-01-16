import React from "react";
import "./LandingHeader.css";

function LandingHeader() {
  return (
    <header className="landing-header">
      <h2 className="kazi-header">
        Chapa
        <span>Kazi</span>
      </h2>
      <nav>
        <ul>
          <li className=" landing-login "> login </li>
          <li className="landing-signup"> Sign Up </li>
        </ul>
      </nav>
    </header>
  );
}

export default LandingHeader;
