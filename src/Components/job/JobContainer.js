import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../handyman/header/Header";
import JobSearchForm from "../jobSearchForm/JobSearchForm";
import JobCard from "./JobCard";
import { fetchJobs } from "./jobslice";

function JobContainer() {
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.jobs.jobs);
  const status = useSelector((state) => state.jobs.status);

  useEffect(() => {
    dispatch(fetchJobs(localStorage.getItem("handyman")));
  }, [dispatch]);
  const jobList = jobs.map((job) => <JobCard key={job.id} job={job} />);

  return (
    <div>
      <Header />
      <JobSearchForm  />
      {status === "loading" ? <div className="loading">Loading...</div> : null}
      {jobList}
    </div>
  );
}

export default JobContainer;
