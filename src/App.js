import React, { useState } from "react";
import CustomerForm from "./Components/customer/CustomerForm";
import LandingPage from "./Components/landingPage/LandingPage";
import HandymanForm from "./Components/handyman/HandymanForm";
// import ReviewForm from "./Components/review/ReviewForm";
// import ReviewContainer from "./Components/review/ReviewContainer";
// import MessageForm from "./Components/message/MessageForm";
// import MessageContainer from "./Components/message/MessageContainer";
import CustomerLogin from "./Components/customer/CustomerLogin";
import { Route, Routes } from "react-router-dom";
// import HandymanPage from "./Components/handymanPage/HandymanPage";
import JobForm from "./Components/job/JobForm";
import HandymanContainer from "./Components/handyman/HandymanContainer";
import Header from "./Components/handyman/header/Header";

function App() {
  // const [trigger, setTrigger] = useState(false);

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/handymanSignup" element={<HandymanForm />} />
        <Route path="/customerSignup" element={<CustomerForm />} />
        <Route path="/jobform" element={<JobForm />} />
        <Route path="/customerLogin" element={<CustomerLogin />} />
        <Route path="/handymanProfiles" element={<HandymanContainer />} />
      </Routes>
      {/* <ReviewForm/> */}
      {/* <ReviewContainer /> */}
      {/* <MessageContainer /> */}
      {/* <HandymanForm/> */}
    </div>
  );
}

export default App;
