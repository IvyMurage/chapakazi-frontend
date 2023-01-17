import React from "react";

import { faCross, faTrash, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useDispatch } from "react-redux";
import { removeJobs } from "../job/jobslice";
import { Link } from "react-router-dom";

function MyJobCard({ job }) {
  const dispatch = useDispatch();
  console.log("This are thr people who applied for it", job.handymen);

  function handleDelete(jobId) {
    const token = localStorage.getItem("customer");
    dispatch(removeJobs(jobId, token));
  }

  const applicants = job.handymen.map((handyman) => (
    <div className="applicant">
      <img src={handyman.image} alt={handyman.username} className="" />
      <div className="applicants-info">
        <h5>
          <Link to="/profilepage">{handyman.username}</Link>
        </h5>
        <span>{handyman.speciality}</span>
      </div>
      <span className="accept-btn">Accept</span>
      <FontAwesomeIcon icon={faX} className="reject-btn" />
    </div>
  ));

  return (
    <div className="job-card">
      <FontAwesomeIcon icon={faTrash} onClick={() => handleDelete(job.id)} />
      <h2> {job.title} </h2>
      <span> {job.budget} </span>
      <p> {job.description} </p>
      <h3>Applicants</h3>
      <div className="applicants-container">{applicants}</div>
    </div>
  );
}

export default MyJobCard;
