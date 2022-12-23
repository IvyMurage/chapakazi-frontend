import React from "react";
import "./LandingPage.css";

function LandingPage() {
  return (
    <div className="landing-page">
      <div className="top-container">
        <div id="image-container">
          <img
            src="./images/wepik-photo-mode-20221114-16341.png"
            alt="plumber with arrms crossed"
          />
        </div>
        <div id="start-section">
          <h2>
            Chapa <span id="kazi">Kazi</span>
            <br />
            Ajira Mkononi
          </h2>
          <button id="get-started">Get Started</button>
        </div>
      </div>

      <div className="bottom-container"></div>
    </div>
  );
}

export default LandingPage;
