import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Header from "../../header/Header.js";
import { fetchJobs } from "../../job/jobslice.js";
import "./AppliedJob.css";

function AppliedJob() {
  const jobInfo = JSON.parse(localStorage.getItem("job"));
  const [jobStatus, setJobStatus] = useState([]);
  const [loading, setLoading] = useState("idle");
  const dispatch = useDispatch();
  const token = localStorage.getItem("handyman");
  useEffect(() => {
    const fetchjobHandymen = async () => {
      setLoading("loading");
      const response = await fetch(
        `https://chapakazi-server-production.up.railway.app/job_handymen`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("handyman")}`,
            "Content-Type": "Application/Json",
          },
        }
      );

      const data = await response.json();
      if (response.ok) {
        setLoading("idle");
        // console.log(data);
        const status = data.find(
          (job) =>
            JSON.parse(localStorage.getItem("profileId")) === job.handyman_id 
        );
        setJobStatus(status);
      } else {
        setLoading("idle");
        console.log(data.errors);
      }
    };
    fetchjobHandymen();
  }, [jobInfo.id]);

  useEffect(() => {
    dispatch(fetchJobs(token));
  }, [dispatch, token]);

  const jobs = useSelector((state) => state.jobs.jobs);
  const appliedJobs = jobs.filter((job) => job.id === jobStatus.job_id);
  const appliedJobsList = appliedJobs.map((job) => (
    <div key={job.id} className="my-jobs-card">
      <h3>{job.title}</h3>
      <p>{job.summary}</p>

      <span>
        <Link to="/jobs/jobprofile/:page">more... </Link>
      </span>
    </div>
  ));
  console.log(appliedJobs);
  return (
    <>
      <Header />
      <h1 className="one">Applied Jobs</h1>
      <div className="my-jobs-container">{appliedJobsList}</div>;
    </>
  );
}

export default AppliedJob;
