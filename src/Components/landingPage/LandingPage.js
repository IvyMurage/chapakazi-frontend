import React from "react";
import Footer from "../Footer/Footer";
import LandingTop from "./landingTopContainer/LandingTop";

function LandingPage() {
  return (
    <div className="landing-page">
      <LandingTop /> 
      <Footer />
    </div>
  );
}

export default LandingPage;
