import React from "react";
import "./Handyman.css";

function HandymanForm() {
  return (
    <div className="handyman-form-container">
      <form id="handyman-signup">
        <div className="row-1">
          <div className="col-1">
            <label>Name</label>
            <br />
            <input type="text" className="handyman-input" />
          </div>

          <div className="col-1">
            <label>Email</label>
            <br />
            <input type="email" className="handyman-input" />
          </div>
        </div>

        <div className="row-2">
          <div className="col-1">
            <label>Location</label>
            <br />
            <input type="text" className="handyman-input" />
          </div>

          <div className="col-1">
            <label>Speciality</label>
            <br />
            <input type="text" className="handyman-input" />
          </div>
        </div>

        <div className="row-3">
          <div className="col-1">
            <label>Password</label>
            <br />
            <input
              type="password"
              className="handyman-input"
              autoComplete="current-password"
            />
          </div>

          <div className="col-1">
            <label>Password Confirmation</label>
            <br />
            <input
              type="password"
              className="handyman-input"
              autoComplete="current-password"
            />
          </div>
        </div>

        <div className="row-4">
          <div className="col-1">
            <label>Image</label>
            <br />
            <input type="text" className="handyman-input" />
          </div>
        </div>

        <div className="row-5">
          <div className="col-1">
            <label>Description</label>
            <br />
            <textarea cols="50" rows="4" id="textarea"/>
          </div>
        </div>

        <div className="handyman-submit-btn">
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default HandymanForm;
