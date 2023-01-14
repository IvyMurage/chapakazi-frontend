import React from "react";
import Header from "../header/Header";

function HandymanProfile() {
  const profileId = localStorage.getItem("profileId");

  
  console.log(profileId);
  return (
    <>
      <Header />
      <div> HandymanProfile </div>
    </>
  );
}

export default HandymanProfile;
