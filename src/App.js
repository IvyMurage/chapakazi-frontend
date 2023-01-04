import "./App.css";
import React from "react";
import CustomerForm from "./Components/customer/CustomerForm";
import LandingPage from "./Components/landingPage/LandingPage";
import HandymanForm from "./Components/handyman/HandymanForm";
import ReviewForm from "./Components/review/ReviewForm";
import ReviewContainer from "./Components/review/ReviewContainer";

function App() {
  return (
    <div className="App">
      {/* <LandingPage/> */}
      {/* <CustomerForm /> */}
      {/* <HandymanForm /> */}
      {/* <ReviewForm /> */}
      <ReviewContainer />
    </div>
  );
}

export default App;
