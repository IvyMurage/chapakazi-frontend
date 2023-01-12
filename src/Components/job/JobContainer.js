import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CustomerHeader from "../CustomerHeader/CustomerHeader";
import Header from "../header/Header";
import JobSearchForm from "../jobSearchForm/JobSearchForm";
import Pagination from "../pagination/Pagination";
import JobCard from "./JobCard";
import { fetchJobs } from "./jobslice";

function JobContainer() {
  const [currentPage, setCurrentPage] = useState(1);
  const [jobsPerPage] = useState(5);
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.jobs.jobs);
  const status = useSelector((state) => state.jobs.status);

  useEffect(() => {
    dispatch(fetchJobs(localStorage.getItem("handyman")));
  }, [dispatch]);

  const indexOfLastPost = currentPage * jobsPerPage;
  const indexOfFirstPost = indexOfLastPost - jobsPerPage;
  const currentJobs = jobs.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const jobList = currentJobs.map((job) => <JobCard key={job.id} job={job} />);

  return (
    <>
      <CustomerHeader />
      <JobSearchForm />
      <div className="job-container">
        {status === "loading" ? (
          <div className="loading">Loading...</div>
        ) : null}
        {jobList}
        <Pagination
          paginate={paginate}
          totalJobs={jobs.length}
          jobsPerPage={jobsPerPage}
          currentPage={currentPage}
        />
      </div>
    </>
  );
}

export default JobContainer;
