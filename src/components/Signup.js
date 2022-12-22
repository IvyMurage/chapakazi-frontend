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

}

export default SignUpForm;
