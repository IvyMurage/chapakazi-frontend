import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const CustomerLogin = () => {
  // const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleFormSubmit = (e) => {
    e.preventDefault();

    dispatch(
      CustomerLogin({
        email: email,
        password: password,
        loggedIn: true,
      })
    );
  };

  return (
    <div className="login">
      <form className="login__form">
        <h1> Login </h1>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="customer-submit-btn">
          <button onClick={(e) => handleFormSubmit(e)}>Login </button>
        </div>
        <Link to="/customer/signup">
          <h2> Do not have an account ? Sign Up </h2>
        </Link>
      </form>
    </div>
  );
};

export default CustomerLogin;
