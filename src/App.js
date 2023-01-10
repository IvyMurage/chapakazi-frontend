import React, { useState } from "react";
import CustomerForm from "./Components/customer/CustomerForm";
import LandingPage from "./Components/landingPage/LandingPage";
import HandymanForm from "./Components/handyman/HandymanForm";
import ReviewForm from "./Components/review/ReviewForm";
import ReviewContainer from "./Components/review/ReviewContainer";
import MessageForm from "./Components/message/MessageForm";
import MessageContainer from "./Components/message/MessageContainer";
import { Route, Routes } from "react-router-dom";
import HandymanPage from "./Components/handymanPage/HandymanPage";

function App() {
  const [trigger, setTrigger] = useState(false);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<HandymanForm />} />
        <Route path="/customer/signup" element={<CustomerForm />} />
        <Route path="/handyman" element={<HandymanPage />} />
      </Routes>
      {/* <ReviewForm/> */}
      {/* <ReviewContainer /> */}
      {/* <MessageContainer /> */}
      {/* <HandymanForm/> */}
    </div>
  );
}

export default App;
