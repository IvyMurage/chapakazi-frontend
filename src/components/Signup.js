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


}

export default SignUpForm;
