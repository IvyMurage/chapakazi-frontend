import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import "./Customer.css";

const CustomerLogin = () => {
// const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleFormSubmit = (e) =>{
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
    <div className="form">
      <div className="right-container" onSubmit={handleFormSubmit}>
        <h1>Login</h1>
        <header>
          <div className="set">
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
          </div>
        </header>

        <footer>
          <div className="set">
            <button id="next" type="submit" onClick={handleFormSubmit}>
              Login
            </button>
          </div>
        </footer>

        <h2>
          Do not have an account ? <span className='sign-up'>Sign Up</span>
        </h2>
      </div>
    </div>
  );
};

export default CustomerLogin;
