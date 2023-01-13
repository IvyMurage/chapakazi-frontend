import React from "react";

import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useDispatch } from "react-redux";
import { removeJobs } from "../job/jobslice";

function MyJobCard({ job }) {
  const dispatch = useDispatch();

  function handleDelete(jobId) {
    const token = localStorage.getItem("customer")
    dispatch(removeJobs(jobId, token));

  }
  return (
    <div className="job-card">
      <FontAwesomeIcon icon={faTrash} onClick={() => handleDelete(job.id)} /> 
      <h2> {job.title} </h2>
      <span> {job.budget} </span>
      <p> {job.description} </p>
    </div>
  );
}

export default MyJobCard;
