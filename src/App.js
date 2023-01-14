import React from "react";
import CustomerForm from "./Components/customer/CustomerForm";
import LandingPage from "./Components/landingPage/LandingPage";
import HandymanForm from "./Components/handyman/HandymanForm";
import CustomerLogin from "./Components/customer/CustomerLogin";
import { Route, Routes } from "react-router-dom";
import JobForm from "./Components/job/JobForm";
import HandymanContainer from "./Components/handyman/handymanProfiles/HandymanContainer";
import JobContainer from "./Components/job/JobContainer";
import Myjobs from "./Components/myJobs/MyJob";
import JobPage from "./Components/jobPage/JobPage";
import LoginForm from "./Components/login/LoginForm";
import HandymanPage from "./Components/handymanPage/HandymanPage"
import ResetPassword from "./Components/resetPassword/ResetPassword";

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
        <Route path="/passwordReset" element={<ResetPassword />} />
        <Route path="/handymanLogin" element={<LoginForm />} />
        <Route path="/customerLogin" element={<CustomerLogin />} />
        <Route path="/handymanProfiles" element={<HandymanContainer />} />
        <Route path="/profilepage" element ={<HandymanPage/>}/>
        <Route path="/jobs/:page" component={<JobContainer />} />
        <Route path="/jobs/jobprofile/:page" element={<JobPage />} />
      </Routes>
    </div>
  );
}

export default App;
