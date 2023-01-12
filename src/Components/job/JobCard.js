import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeJobs } from "./jobslice";

function JobCard({ job }) {
  const dispatch = useDispatch();

  function handleDelete(jobId) {
    dispatch(removeJobs(jobId));
  }
  return (
    <div className="job-card">
      <FontAwesomeIcon icon={faTrash}/>
      <h2> {job.title} </h2> <span> {job.budget} </span>
      <p> {job.summary} </p>
      <span id="more">more...</span>
    </div>
  );
}

export default JobCard;
