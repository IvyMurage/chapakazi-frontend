import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import "./CustomerLogin.css"

const CustomerLogin = () => {
// const [name, setName] = useState(" ");
const [email, setEmail] = useState(" ");
const [password, setPassword] = useState(" ");



  return (
    <div className="login">
      <form className="login__form">
        {/* <h1>Login here</h1>
        <input
          type="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        /> */}
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
        <button type='login' className='login__btn'>Login</button>
        <h1>
        Do not have an account <span className='signup'>Sign Up</span>  </h1> 
      </form>
    </div>
  );
};

export default CustomerLogin;
