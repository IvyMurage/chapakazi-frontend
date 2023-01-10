import React, { useState } from "react";
import { useDispatch } from "react-redux";

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
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="job-form-container">
      <form className="job-form" onSubmit={handleSubmit}>
        <label> Title </label>
        <input
          type="text"
          name="title"
          onChange={handleChange}
          value={job.title}
        />
        <label> Description </label>
        <input
          type="text"
          name="description"
          onChange={handleChange}
          value={job.description}
        />
        <label> Budget </label>
        <input
          type="text"
          name="budget"
          onChange={handleChange}
          value={job.budget}
        />
      </form>
    </div>
  );
}

export default JobForm;
