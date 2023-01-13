import React from "react";
// import HandymanCard from "./HandymanCard";
import LandingTop from "../../landingPage/landingTopContainer/LandingTop";
import HandymanTop from "./HandymanTop";
import HandyManSideBar from "./HandyManSideBar";
import HandymanCards from "./HandymanCards";
import CustomerHeader from "../../CustomerHeader/CustomerHeader";

function HandymanContainer(){

    return(
        <div className="home">
          <CustomerHeader/>
            <LandingTop/>
            <div className="handy-page">
                <HandymanTop/>
                <div className="sidebar-card">
                    <HandyManSideBar />
                    <HandymanCards />
                    
                </div>
            </div>
        </div>
    )
}

export default HandymanContainer
