import "./App.css";
import React from "react";
import CustomerForm from "./Components/customer/CustomerForm";
import LandingPage from "./Components/landingPage/LandingPage";
import HandymanForm from "./Components/handyman/HandymanForm";

function App() {
  return (
    <div className="App">
      {/* <LandingPage/> */}
      {/* <CustomerForm /> */}
      <HandymanForm />
    </div>
  );
}

export default App;
