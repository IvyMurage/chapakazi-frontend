import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./JobSearchForm.css";

function JobSearchForm() {
  const [jobSearch, setJobSearch] = useState("");
  const jobs = useSelector((state) => state.jobs.jobs);
  function handleChange(event) {
    const value = event.target.value;
    setJobSearch(value);
    jobs.filter((job) => job.includes(jobSearch));
  }
  return (
    <div className="jobSearchContainer">
      <form className="job-search-form">
        <input
          type="text"
          placeholder="search for jobs"
          value={jobSearch}
          onChange={handleChange}
        />
        <button>
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </form>
    </div>
  );
}

export default JobSearchForm;
