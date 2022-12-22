import React, { useState } from "react"
import "../Signup.css";

function SignUpForm() {

  function handleInputChange (event){
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
  });
  }

  const [formData, setFormData] = useState({
    name:"",
    location:"",
    email: "",
    password:"",
    image:"",
    id:0,
    description:""
  })

  function handleFormSubmit(e){
    e.preventDefault()
    fetch("/customers", {
        method: "POST",
        headers: {
            "content-type":"application/json"
        },
        body: JSON.stringify(formData)
    })
    .then((res) => res.json())
  }


  return (
    <div className="form">
      <div className="signup-container">
        <div className="right-container" onSubmit={handleFormSubmit}>
            <header>
                <div className="set">
                </div>
                <div className="set">

                <div className="customer-name">
                    <label htmlFor="customer-name">Name</label>
                    <input
                    id="customer-name"
                    //   placeholder="Name..."
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    ></input>
                </div>

                <div className="customer-location">
                    <label htmlFor="customer-venue">Location</label>
                    <input
                    id="customer-venue"
                    //   placeholder="Location..."
                    name="location"
                    type="text"
                    value={formData.location}
                    onChange={handleInputChange}
                    required
                    ></input>
                </div>
                </div>
                <div className="set">
                <div className="customer-name">
                    <label htmlFor="customer-email">Email</label>
                    <input
                    id="customer-name"
                    //   placeholder="Email..."
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    ></input>
                </div>

                <div className="customer-name">
                    <label htmlFor="customer-password">Password</label>
                    <input
                    id="customer-name"
                    //   placeholder="Password..."
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                    ></input>
                </div>
                </div>

                <div className="set">

                    <div className="customer-name">
                        <label htmlFor="customer-image">Image</label>
                        <input
                        id="customer-name"
                        //   placeholder="Image..."
                        name="image"
                        type="text"
                        value={formData.image}
                        onChange={handleInputChange}
                        required
                        ></input>
                    </div>

                    <div className="customer-location">
                    <label htmlFor="customer-id">Admin ID</label>
                    <input
                    id="customer-ID"
                    //   placeholder="ID..."
                    name="id"
                    type="number"
                    value={formData.id}
                    onChange={handleInputChange}
                    required
                    ></input>
                </div>
                </div>

                <div className="customer-description">
                <label htmlFor="customer-weight-0-25">Description</label>
                <div className="description-container">
                    <input
                    type="text"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    required
                        />
                </div>
                </div>
            </header>
            <footer>
                <div className="set">
                <button id="next" type="submit" onClick={handleFormSubmit}>
                    Submit
                </button>
                </div>
            </footer>
        </div>
      </div>
    </div>
  );
}

export default SignUpForm;
