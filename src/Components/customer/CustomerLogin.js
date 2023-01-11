import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "./Customer.css";
import { loginCustomer } from "./customerSlice";
// import { useHistory } from "react-router-dom";

function CustomerLogin() {
  const errors = useSelector((state) => state.customer.errors);

  // console.log("This is the error:,", errors);
  const navigate = useNavigate();
  const [customerLogin, setCustomerLogin] = useState({
    username: "",
    password: "",
  });

  //  const history = useHistory();

  const dispatch = useDispatch();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setCustomerLogin({ ...customerLogin, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(loginCustomer(customerLogin, navigate));
    setCustomerLogin({
      username: "",
      password: "",
    });
  };

  return (
    <div className="form">
      <div className="right-container" onSubmit={handleFormSubmit}>
        <h1>Login</h1>
        <header>
          <div className="set">
            <div className="email">
              <input
                type="text"
                placeholder="username"
                name="username"
                value={customerLogin.username}
                onChange={handleChange}
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                autoComplete="current-password"
                value={customerLogin.password}
                onChange={handleChange}
              />
            </div>
          </div>

          {errors.length > 0 ? errors.map((error) => <h2  id="login-error" key={error}>{error}</h2>) : null}
        </header>

        <footer>
          <div className="set">
            <button id="next" type="submit" onClick={handleFormSubmit}>
              Login
            </button>
          </div>
        </footer>

        <Link to="/customerSignup">
          <h2>
            Do not have an account ? <span className="sign-up">Sign Up</span>
          </h2>
        </Link>
      </div>
    </div>
  );
}

export default CustomerLogin;
