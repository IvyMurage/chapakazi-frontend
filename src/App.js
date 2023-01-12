import React from "react";
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

import JobContainer from "./Components/job/JobContainer";
import Myjobs from "./Components/myJobs/MyJob";
import JobPage from "./Components/jobPage/JobPage";

function App() {
  // const [trigger, setTrigger] = useState(false);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/handymanSignup" element={<HandymanForm />} />
        <Route path="/customerSignup" element={<CustomerForm />} />
        <Route path="/jobform" element={<JobForm />} />
        <Route path="/jobs" element={<JobContainer />} />
        <Route path="/myjobs" element={<Myjobs />} />
        <Route path="/customerLogin" element={<CustomerLogin />} />
        <Route path="/handymanProfiles" element={<HandymanContainer />} />
        <Route path="/jobs/:page" component={<JobContainer />} />
        <Route path="/jobs/jobprofile/:page" element={<JobPage />} />
      </Routes>
      {/* <LandingPage/> */}
      {/* <CustomerForm /> */}
      <HandymanForm />
      
      {/* <LoginForm /> */}
      {/* <ReviewForm/> */}
      {/* <ReviewContainer /> */}
      {/* <MessageContainer /> */}
      {/* <HandymanForm/> */}
    </div>
  );
}

export default App;
