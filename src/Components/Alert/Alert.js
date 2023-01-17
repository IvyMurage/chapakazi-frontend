import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Alert.css";

function Alert() {
  const navigate = useNavigate();
  const [visible, setInVisible] = useState(false)

  return (
    <div className="popup" style={{display: visible? "none": null}}>
      <div className="alert">
        <p>You have successfully sign up</p>
        <button
          className="ok-button"
          onClick={() => {
            navigate("/handymanLogin");
            setInVisible(true)
          }}
          
        >
          OK
        </button>
      </div>
    </div>
  );
}

export default Alert;
