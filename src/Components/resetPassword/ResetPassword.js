import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "./ResetPassword.css";
import { addlogin } from "./LoginSlice";

function ResetPassword() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [login, setLogin] = useState({
    password: "",
    password: "",
  });
  const errors = useSelector((state) => state.handymanLogin.errors);
  console.log(errors);
  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setLogin({
      ...login,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(addlogin(login, navigate));
  }
  return (
    <div className="login-form-container">
        <h2> Reset Password</h2>
      <form id="login-form" onSubmit={handleSubmit}>
        <div className="row">
          <div className="rows">
            <label> Password </label> <br />
            <input
              type="password"
              className="login-input"
              value={login.password}
              name="password"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="rows">
            <label>Confirm Password </label> <br />
            <input
              type="password"
              className="login-input"
              autoComplete="password"
              value={login.password}
              name="password"
              onChange={handleChange}
            />
            {errors.length > 0 ? (
              <h3 className="login-errors">
                {errors.find((error) => error.includes("Invalid"))}
              </h3>
            ) : null}
          </div>
        </div>
        <div className="login-btn">
          <button> Reset Password</button>
        </div>
        
      </form>
    </div>
  );
}

export default ResetPassword;