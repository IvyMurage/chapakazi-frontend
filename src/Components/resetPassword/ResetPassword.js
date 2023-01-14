import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./ResetPassword.css";


function ResetPassword() {


  const [password, setPassword] = useState({
    password: "",
    password_confirmation: "",
  });
  const errors = useSelector((state) => state.handymanLogin.errors);
  console.log(errors);
  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setPassword({
      ...password,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    
  }
  return (
    

    <div className="reset-form-container">
      <form id="reset-form" onSubmit={handleSubmit}>
        <h2>Reset Password</h2>
        <div className="row">
          <div className="rows">
            <label> Password</label> <br />
            <input
              type="password"
              className="login-input"
              value={password.password}
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
              value={password.confirn_password}
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
