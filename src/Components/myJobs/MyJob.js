import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CustomerHeader from "../CustomerHeader/CustomerHeader";
import "../job/Job.css";
import { fetchJobs } from "../job/jobslice";
import MyJobCard from "./MyJobCard";

function Myjobs() {
  const dispatch = useDispatch();
  const customerId = JSON.parse(localStorage.getItem("customerInfo"));
  const allJobs = useSelector((state) => state.jobs.jobs);
  const [jobApplication, setJobApplication] = useState([]);
  const [handyman, setHandyman] = useState([]);

  // useEffect(() => {
  //   const fetchAll = async () => {
  //     const response = await fetch(
  //       "https://chapakazi-server-production.up.railway.app/job_handymen",
  //       {
  //         headers: {
  //           Authorization: `Bearer ${localStorage.getItem("customer")}`,
  //         },
  //       }
  //     );

  //     const data = await response.json();

  //     if (response.ok) {
  //       setJobApplication(data);
  //     }
  //   };
  //   fetchAll();
  // }, []);

  // useEffect(() => {
  //   const fetchHandyman = async () => {
  //     const response = await fetch(
  //       `https://chapakazi-server-production.up.railway.app/handymen`,
  //       {
  //         headers: {
  //           Authorization: `Bearer ${localStorage.getItem("customer")}`,
  //         },
  //       }
  //     );

  //     const data = await response.json();

  //     if (response.ok) {
  //       setHandyman(data);
  //     }
  //   };
  //   fetchHandyman();
  // }, []);

  console.log(jobApplication);
  const applicants = jobApplication.map((applicant) => applicant.handyman);
  console.log(applicants);

  useEffect(() => {
    dispatch(fetchJobs(localStorage.getItem("customer")));
  }, [dispatch]);
  const myJobs = allJobs.filter((job) => job.customer.id === customerId);
console.log(myJobs);
  const myJobList = myJobs.map((job) => <MyJobCard key={job.id} job={job} />);

  return (
    <>
      <CustomerHeader />
      <br />
      <br />
      <div className="job-container">
        {myJobList.length === 0 ? (
          <div className="no-jobs">No Jobs Added !!</div>
        ) : null}
        {myJobList}
      </div>
    </>
  );
}

export default Myjobs;
