import React from "react";
import { useSelector } from "react-redux";
import Header from "../header/Header";

import "./JobPage.css";

function JobPage() {
  const jobInfo = JSON.parse(localStorage.getItem("job"));

  return (
    <>
      <Header />
      <div className="job-page">
        <div className="job-info">
          <h2>{jobInfo.title}</h2>
          <p>{jobInfo.description}</p>
          <span>{jobInfo.budget}</span>
        </div>
        <div className="customer-info">
          <img src={jobInfo.customer.image} alt={jobInfo.customer.username} />
          <h3>{jobInfo.customer.username}</h3>
          <h4>{jobInfo.customer.location}</h4>
        </div>
      </div>
    </>
  );
}

export default JobPage;
