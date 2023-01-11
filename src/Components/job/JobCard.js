import React from "react";

function JobCard({ job }) {
  return (
    <div className="job-card">
      <h2> {job.title} </h2> <span> {job.budget} </span>
      <p> {job.summary} </p>
      <span id="more">more...</span>
    </div>
  );
}

export default JobCard;
