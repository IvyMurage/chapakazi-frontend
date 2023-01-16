import React, { useState } from "react";
import LandingTop from "../../landingPage/landingTopContainer/LandingTop";
import HandymanTop from "./HandymanTop";
import HandyManSideBar from "./HandyManSideBar";
import HandymanCards from "./HandymanCards";
import CustomerHeader from "../../CustomerHeader/CustomerHeader";
import Footer from "../../Footer/Footer";

function HandymanContainer() {
  const [handymanSearch, setHanydmanSearch] = useState("");
  function handleChange(event) {
    const value = event.target.value;
    setHanydmanSearch(value);
  }

  return (
    <div className="home">
      <CustomerHeader />
      <LandingTop />
      <div className="handy-page">
        <HandymanTop
          handleChange={handleChange}
          handymanSearch={handymanSearch}
        />
        <div className="sidebar-card">
          <HandyManSideBar />
          <HandymanCards handymanSearch={handymanSearch} />
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default HandymanContainer;
