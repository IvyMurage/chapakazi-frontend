import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import LandingHeader from "../LandingTopHeader/LandingHeader";
import "./LoginForm.css";
import { addlogin } from "./LoginSlice";

function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [login, setLogin] = useState({
    username: "",
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
    <>
    <LandingHeader/>
    <div className="login-form-container">
      <form id="login-form" onSubmit={handleSubmit}>
        <div className="row">
          <div className="rows">
            <label> username </label> <br />
            <input
              type="text"
              className="login-input"
              value={login.username}
              name="username"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="rows">
            <label> Password </label> <br />
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
          <button> Login </button>
        </div>
        <Link to="/handymanSignUp">
          <h2>
            Do not have an account ? <span className="sign-up"> Sign Up </span>
          </h2>
        </Link>
      </form>
    </div>
    </>
  );
}

export default LoginForm;
