import React, { useState } from "react";
import CustomerForm from "./Components/customer/CustomerForm";
import LandingPage from "./Components/landingPage/LandingPage";
import HandymanForm from "./Components/handyman/HandymanForm";
import ReviewForm from "./Components/review/ReviewForm";
import ReviewContainer from "./Components/review/ReviewContainer";
import MessageForm from "./Components/message/MessageForm";
import MessageContainer from "./Components/message/MessageContainer";
import CustomerLogin from "./Components/customer/CustomerLogin";
import { Route, Routes } from "react-router-dom";
import HandymanPage from "./Components/handymanPage/HandymanPage";
import JobForm from "./Components/job/JobForm";

function App() {
  const [trigger, setTrigger] = useState(false);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<HandymanForm />} />
        <Route path="/customer/signup" element={<CustomerForm />} />
        <Route path="/customer/login" element={<CustomerLogin />} />
        <Route path="/jobform" element={<JobForm />} />
        <Routes path="/handymanpage" element={<HandymanPage />} />
      </Routes>
      {/* <ReviewForm/> */}
      {/* <ReviewContainer /> */}
      {/* <MessageContainer /> */}
      {/* <HandymanForm/> */}
    </div>
  );
}

export default App;
