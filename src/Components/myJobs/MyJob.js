import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CustomerHeader from "../CustomerHeader/CustomerHeader";
import "../job/Job.css";
import { fetchJobs } from "../job/jobslice";
import MyJobCard from "./MyJobCard";

function Myjobs() {
  const dispatch = useDispatch();
  const customerId = JSON.parse(localStorage.getItem("customerInfo"));

  const allJobs = useSelector((state) => state.jobs.jobs);

  console.log(customerId);

  useEffect(() => {
    dispatch(fetchJobs(localStorage.getItem("customer")));
  }, [dispatch]);
  const myJobs = allJobs.filter((job) => job.customer.id === customerId);

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
