import React from "react";
import HandymanCard from "./HandymanCard";
import LandingTop from "../landingPage/landingTopContainer/LandingTop";

function HandymanContainer(){

    return(
        <div className="home">
            <LandingTop/>
            <div className="handy-page">
                <HandymanCard />
            </div>
        </div>
    )
}

export default HandymanContainer