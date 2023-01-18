import React, { useState } from "react";

import { faTrash, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useDispatch } from "react-redux";
import { removeJobs } from "../job/jobslice";
import { Link } from "react-router-dom";

function MyJobCard({
  job,
  rejectApplication,
  acceptApplication,
  newJobHandymen,
}) {
  const dispatch = useDispatch();

  const [handymen, setHandymen] = useState(job.handymen);
  const [jobHandymen, setjobHandymen] = useState(job.job_handymen);

  const applicantId = JSON.parse(localStorage.getItem("profileId"));
  const reject = jobHandymen.find(
    (applicant) => applicant.handyman_id === applicantId
  );
  // console.log(applicantId);
  function handleDelete(jobId) {
    const token = localStorage.getItem("customer");
    dispatch(removeJobs(jobId, token));
  }

  console.log("yello", job);
  const jobHandymenList = jobHandymen.map((jobHandyman) => {
    if (jobHandyman.id === newJobHandymen.id) {
      return newJobHandymen;
    } else {
      return jobHandyman;
    }
  });

  const applicants = handymen.map((handyman, index) => {
    return (
      <div className="applicant" key={index}>
        <img src={handyman.image} alt={handyman.username} className="" />
        <div className="applicants-info">
          <h5>
            <Link to="/profilepage">{handyman.username}</Link>
          </h5>
          <span>{handyman.speciality}</span>
          <span>
            {
              jobHandymenList.find((job) => job.handyman_id === applicantId)
                .status
            }
          </span>
        </div>
        <span
          className="accept-btn"
          onClick={() => acceptApplication(reject, setHandymen, setjobHandymen)}
        >
          Accept
        </span>
        <FontAwesomeIcon
          icon={faX}
          onClick={() => rejectApplication(reject)}
          className="reject-btn"
        />
      </div>
    );
  });

  console.log(jobHandymen);
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
