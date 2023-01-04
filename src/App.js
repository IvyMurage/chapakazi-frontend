import "./App.css";
import React from "react";
import CustomerForm from "./Components/customer/CustomerForm";
import LandingPage from "./Components/landingPage/LandingPage";
import HandymanForm from "./Components/handyman/HandymanForm";
import ReviewForm from "./Components/review/ReviewForm";

function App() {
  return (
    <div className="App">
      {/* <LandingPage/> */}
      {/* <CustomerForm /> */}
      {/* <HandymanForm /> */}
      <ReviewForm />
    </div>
  );
}

export default App;
