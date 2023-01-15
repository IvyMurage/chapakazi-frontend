import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateUserName } from "../handymanProfileSlice";

function UsernameUpdate() {
  const dispatch = useDispatch();
  const token = localStorage.getItem("handyman");
  const profileId = JSON.parse(localStorage.getItem("profileId"));
  const [userName, setUserName] = useState({
    username: "",
  });

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setUserName({ [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(updateUserName(profileId, token, userName));
    setUserName({
      username: "",
    });
  }
  return (
    <div className="updateForm">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={userName.username}
          onChange={handleChange}
        />
        <button> submit change </button>
      </form>
    </div>
  );
}

export default UsernameUpdate;
