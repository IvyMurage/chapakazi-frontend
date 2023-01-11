import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addJob } from "./jobslice";
import "./Job.css";

function JobForm() {
  const dispatch = useDispatch();
  const [job, setJob] = useState({
    title: "",
    description: "",
    budget: "",
  });

  function handleChange(event) {
    const name = event.target.value;
    const value = event.target.value;
    setJob({ ...job, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(addJob());
  }

  return (
    <div className="job-form-container">
      <form className="job-form" onSubmit={handleSubmit}>
        <label> Title </label>
        <br />
        <input
          type="text"
          name="title"
          onChange={handleChange}
          value={job.title}
        />
        <br />

        <label> Budget </label>
        <br />
        <input
          type="text"
          name="budget"
          onChange={handleChange}
          value={job.budget}
        />
        <label> Description </label>
        <br />
        <textarea
          id=""
          cols="30"
          rows="10"
          name="description"
          onChange={handleChange}
          value={job.description}
        />
        <br />
       
        <br />
        <button id="job-form-btn">Submit</button>
      </form>
    </div>
  );
}

export default JobForm;
