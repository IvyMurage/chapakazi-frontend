import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "./Customer.css";
import { signupCustomer } from "./customerSlice";

function CustomerForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const errors = useSelector((state) => state.customers.errors);
  const newCustomer = useSelector((state) => state.customers.customer)

  console.log("This is the sign up info", newCustomer);

  function handleInputChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  const [formData, setFormData] = useState({
    username: "",
    location: "",
    password: "",
    password_confirmation: "",
    image: "",
    id: 0,
    admin_id: 1,
  });

  function handleFormSubmit(e) {
    e.preventDefault();
    dispatch(signupCustomer(formData, navigate));
  }

  return (
    <div className="form">
      <div className="signup-container">
        <div className="right-container" onSubmit={handleFormSubmit}>
          <header>
            <div className="set">
              <div className="customer-name">
                <label htmlFor="customer-name"> Name </label>
                <input
                  className="customer-name"
                  //   placeholder="Name..."
                  name="username"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                ></input>

                {errors.length > 0 ? (
                  <h2 className="signup-errors">
                    {errors.find((error) => error.includes("Username"))}
                  </h2>
                ) : null}
              </div>

              <div className="customer-location">
                <label htmlFor="customer-venue"> Location </label>
                <input
                  id="customer-venue"
                  //   placeholder="Location..."
                  name="location"
                  type="text"
                  value={formData.location}
                  onChange={handleInputChange}
                  required
                ></input>
                  {errors.length > 0 ? (
                  <h2 className="signup-errors">
                    {errors.find((error) => error.includes("Location"))}
                  </h2>
                ) : null}
              </div>
            </div>
            <div className="set">
              <div className="customer-name">
                <label htmlFor="customer-password"> Password </label>
                <input
                  className="customer-name"
                  //   placeholder="Password..."
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                ></input>
                  {errors.length > 0 ? (
                  <h2 className="signup-errors">
                    {errors.find((error) => error.includes("Password"))}
                  </h2>
                ) : null}
              </div>

              <div className="customer-name">
                <label htmlFor="customer-password">Password Confirmation</label>
                <input
                  className="customer-name"
                  //   placeholder="Password..."
                  name="password_confirmation"
                  type="password"
                  autoComplete="current-password"
                  value={formData.password_confirmation}
                  onChange={handleInputChange}
                  required
                ></input>
                  {errors.length > 0 ? (
                  <h2 className="signup-errors">
                    {errors.find((error) => error.includes("Password confirmation"))}
                  </h2>
                ) : null}
              </div>
            </div>

            <div className="set">
              <div className="customer-name">
                <label htmlFor="customer-image"> Image </label>
                <input
                  className="customer-name"
                  //   placeholder="Image..."
                  name="image"
                  type="text"
                  value={formData.image}
                  onChange={handleInputChange}
                  required
                ></input>
              </div>
            </div>
          </header>
          <footer>
            <div className="set">
              <button id="next" type="submit" onClick={handleFormSubmit}>
                Submit
              </button>
            </div>

            <Link to="/customerLogin">
              <h2>
                Do not have an account ?<span className="sign-up">Login</span>
              </h2>
            </Link>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default CustomerForm;
