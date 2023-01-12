import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./LoginForm.css";
import { addlogin} from "./LoginSlice";

function LoginForm() {
  const dispatch = useDispatch()

  const [login, setLogin] = useState({
    
    email: "",
    password: "",
    
  });

  function handleChange(event) {
    const name = event.target.name
    const value = event.target.value
    setLogin({...login, [name]: value })
  }


  function handleSubmit(event) {
    event.preventDefault();
    dispatch(addlogin(login))

  }
  return (
    <div className="login-form-container">
      <form id="login-form" onSubmit={handleSubmit}>
        <div className="row">
         
          <div className="rows">
            <label> Email </label> <br />
            <input
              type="email"
              className="login-input"
              value={login.email}
              name="email"
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
          </div>
         
        </div>
       
      
        <div className="login-btn">
          <button> Login</button>
        </div>
        <h2> Do not have an account ? Sign Up</h2>
      </form>
    </div>
  );
}

export default LoginForm;

