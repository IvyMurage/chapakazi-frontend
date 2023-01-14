import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./LoginForm.css";
import { addlogin } from "./LoginSlice";

function LoginForm() {
  const dispatch = useDispatch();

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
    dispatch(addlogin(login));
  }
  return (
    <div className="login-form-container">
      <form id="login-form" onSubmit={handleSubmit}>
      <h1 className="extra">Login</h1>
          <hr className="extra"/>
        <div className="row-1">
          <div className="col-1">
            <label> Username </label> <br />
            <input
              type="text"
              className="login-input"
              value={login.username}
              name="username"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row-2">
          <div className="col-1">
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
        <div className=" row-4 login-btn">
          <button> Login </button>
        </div>
        <Link to="/handymanSignUp">
          <h2>
            Do not have an account ? <span className="sign-up"> Sign Up </span>
          </h2>
        </Link>
      </form>
    </div>
  );
}

export default LoginForm;
