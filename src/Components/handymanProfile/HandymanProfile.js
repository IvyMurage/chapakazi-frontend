import { faCamera, faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../header/Header";
import ImageUpdate from "./handymanProfileForms/ImageUpdate";
import UsernameUpdate from "./handymanProfileForms/UsernameUpdate";
import { fetchHandyman } from "./handymanProfileSlice";

function HandymanProfile() {
  const profileId = localStorage.getItem("profileId");
  const dispatch = useDispatch();
  const token = localStorage.getItem("handyman");
  const handymanProfile = useSelector(
    (state) => state.handymanProfile.handyman
  );

  const [trigger, setTrigger] = useState(false);
  const [triggerName, setTriggerName] = useState(false);

  useEffect(() => {
    dispatch(fetchHandyman(profileId, token));
  }, [profileId, token, dispatch]);

//   console.log(handymanProfile);

  return (
    <>
      <Header />
      <div className="profile-container">
        <div className="row-1">
          <img src={handymanProfile.image} alt="profile pic" />
          <FontAwesomeIcon
            icon={faCamera}
            onClick={() => setTrigger((prev) => !prev)}
          />
          {trigger ? <ImageUpdate /> : null}
        </div>

        <div className="row-1">
          <h2>{handymanProfile.username}</h2>
          <FontAwesomeIcon
            icon={faPen}
            onClick={() => setTriggerName((prev) => !prev)}
          />
          {triggerName ? <UsernameUpdate /> : null}
        </div>

        <div className="row-1">
          <h3>{handymanProfile.location}</h3>
          <FontAwesomeIcon icon={faPen} />
        </div>

        <div className="row-1">
          <h4>{handymanProfile.speciality}</h4>
          <FontAwesomeIcon icon={faPen} />
        </div>
        <div className="row-1">
          <h4>{handymanProfile.rating}</h4>
          <FontAwesomeIcon icon={faPen} />
        </div>
        <div className="row-1">
          <p>{handymanProfile.description}</p>
          <FontAwesomeIcon icon={faPen} />
        </div>
      </div>
    </>
  );
}

export default HandymanProfile;
