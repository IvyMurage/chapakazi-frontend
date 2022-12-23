import React from "react";
import LandingTop from "./landingTopContainer/LandingTop";
import RegistrationCard from "./registrationContainer/RegistrationCard";

function LandingPage() {
  return (
    <div className="landing-page">
      <LandingTop />
      <RegistrationCard />
    </div>
  );
}

export default LandingPage;
