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
  const [newJobHandymen, setNewJobHandymen] = useState({});

  function rejectApplication(reject) {
    console.log("hello");
    console.log(reject);

    const rejectApplication = async () => {
      const response = await fetch(
        `https://chapakazi-server-production.up.railway.app/job_handymen/${reject.id}`,
        {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("customer")}`,
            "Content-Type": "Application/json",
          },
          body: JSON.stringify({ status: "rejected" }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        console.log(data);
        setNewJobHandymen(data);
      }
    };

    rejectApplication();
  }

  function acceptApplication(reject) {
    console.log("hello");
    console.log(reject);
    const acceptApplication = async () => {
      const response = await fetch(
        `https://chapakazi-server-production.up.railway.app/job_handymen/${reject.id}`,
        {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("customer")}`,
            "Content-Type": "Application/json",
          },
          body: JSON.stringify({ status: "approved" }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setNewJobHandymen(data);
      }
    };
    acceptApplication();
  }

  console.log(newJobHandymen);
  console.log(jobApplication);
  const applicants = jobApplication.map((applicant) => applicant.handyman);
  console.log(applicants);

  useEffect(() => {
    dispatch(fetchJobs(localStorage.getItem("customer")));
  }, [dispatch]);
  const myJobs = allJobs.filter((job) => job.customer.id === customerId);
  console.log(myJobs);
  const myJobList = myJobs.map((job) => (
    <MyJobCard
      key={job.id}
      job={job}
      rejectApplication={rejectApplication}
      acceptApplication={acceptApplication}
      newJobHandymen={newJobHandymen}
    />
  ));

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
