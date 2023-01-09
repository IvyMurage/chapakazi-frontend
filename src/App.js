import "./App.css";
import React, { useState } from "react";
// import CustomerForm from "./Components/customer/CustomerForm";
// import LandingPage from "./Components/landingPage/LandingPage";
// import HandymanForm from "./Components/handyman/HandymanForm";
// import ReviewForm from "./Components/review/ReviewForm";
// import ReviewContainer from "./Components/review/ReviewContainer";
// import MessageForm from "./Components/message/MessageForm";
// import MessageContainer from "./Components/message/MessageContainer";
import HandymanCard from "./Components/handyman/HandymanCard";

function App() {
  const [trigger, setTrigger] = useState(false);

  return (
    <div className="App">
      {/* <LandingPage/> */}
      {/* <CustomerForm /> */}
      <HandymanCard />

      {/* <ReviewForm/> */}
      {/* <ReviewContainer /> */}
      {/* <MessageContainer /> */}
      
    </div>
  );
}

export default App;
