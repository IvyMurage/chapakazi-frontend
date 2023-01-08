import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./Handyman.css";
import { addhandyman } from "./HandymanSlice";

function HandymanForm() {
  const dispatch = useDispatch()

  const [handyman, setHandyman] = useState({
    username: "",
    email: "",
    password: "",
    password_confirmation: "",
    location: "",
    speciality: "",
    image: "",
    description: "",
    rating:"",
    admin_id: 1,
  });

  function handleChange(event) {
    const name = event.target.name
    const value = event.target.value
    setHandyman({...handyman, [name]: value })
  }


  function handleSubmit(event) {
    event.preventDefault();
    dispatch(addhandyman(handyman))

  }
  return (
    <div className="handyman-form-container">
      <form id="handyman-signup" onSubmit={handleSubmit}>
        <div className="row-1">
          <div className="col-1">
            <label> Name </label> <br />
            <input
              type="text"
              className="handyman-input"
              value={handyman.username}
              name="username"
              onChange={handleChange}
            />
          </div>
          <div className="col-1">
            <label> Email </label> <br />
            <input
              type="email"
              className="handyman-input"
              value={handyman.email}
              name="email"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row-2">
          <div className="col-1">
            <label> Location </label> <br />
            <input
              type="text"
              className="handyman-input"
              value={handyman.location}
              name="location"
              onChange={handleChange}
            />
          </div>
          <div className="col-1">
            <label> Speciality </label> <br />
            <input
              type="text"
              className="handyman-input"
              value={handyman.speciality}
              name="speciality"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row-3">
          <div className="col-1">
            <label> Password </label> <br />
            <input
              type="password"
              className="handyman-input"
              autoComplete="current-password"
              value={handyman.password}
              name="password"
              onChange={handleChange}
            />
          </div>
          <div className="col-1">
            <label> Password Confirmation </label> <br />
            <input
              type="password"
              className="handyman-input"
              autoComplete="current-password"
              value={handyman.password_confirmation}
              name="password_confirmation"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row-4">
          <div className="col-1">
            <label> Image </label> <br />
            <input
              type="text"
              className="handyman-input"
              value={handyman.image}
              name="image"
              onChange={handleChange}
            />
          </div>
          <div className="col-1">
            <label> Rating </label> <br />
            <input
              type="text"
              className="handyman-input"
              value={handyman.rating}
              name="rating"
              placeholder="$20-$25"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row-5">
          <div className="col-1">
            <label> Description </label> <br />
            <textarea
              cols="50"
              rows="4"
              id="textarea"
              name="description"
              value={handyman.description}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="handyman-submit-btn">
          <button> Submit </button>
        </div>
        <h2> Already have an account ? Login </h2>
      </form>
    </div>
  );
}

export default HandymanForm;
