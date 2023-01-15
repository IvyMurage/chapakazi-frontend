import { faCamera, faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../header/Header";
import DescriptionUpdate from "./handymanProfileForms/DescriptionUpdate";
import ImageUpdate from "./handymanProfileForms/ImageUpdate";
import LocationUpdate from "./handymanProfileForms/LocationUpdate";
import RatingUpdate from "./handymanProfileForms/RatingUpdate";
import SpecialityUpdate from "./handymanProfileForms/SpecialityUpdate";
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
  const [triggerLocation, setTriggerLocation] = useState(false);
  const [triggerDescription, setTriggerDescription] = useState(false);
  const [triggerSpeciality, setTriggerSpeciality] = useState(false);
  const [triggerRating, setTriggerRating] = useState(false);

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
          {trigger ? <ImageUpdate setTrigger={setTrigger} /> : null}
        </div>

        <div className="row-1">
          <h2>{handymanProfile.username}</h2>
          <FontAwesomeIcon
            icon={faPen}
            onClick={() => setTriggerName((prev) => !prev)}
          />
          {triggerName ? (
            <UsernameUpdate setTriggerName={setTriggerName} />
          ) : null}
        </div>

        <div className="row-1">
          <h3>{handymanProfile.location}</h3>
          <FontAwesomeIcon
            icon={faPen}
            onClick={() => setTriggerLocation((prev) => !prev)}
          />

          {triggerLocation ? (
            <LocationUpdate setTriggerLocation={setTriggerLocation} />
          ) : null}
        </div>

        <div className="row-1">
          <h4>{handymanProfile.speciality}</h4>
          <FontAwesomeIcon
            icon={faPen}
            onClick={() => setTriggerSpeciality((prev) => !prev)}
          />
          {triggerSpeciality ? (
            <SpecialityUpdate setTriggerSpeciality={setTriggerSpeciality} />
          ) : null}
        </div>
        <div className="row-1">
          <h4>{handymanProfile.rating}</h4>
          <FontAwesomeIcon
            icon={faPen}
            onClick={() => setTriggerRating((prev) => !prev)}
          />
          {triggerRating ? (
            <RatingUpdate setTriggerRating={setTriggerRating} />
          ) : null}
        </div>
        <div className="row-1">
          <p>{handymanProfile.description}</p>
          <FontAwesomeIcon
            icon={faPen}
            onClick={() => setTriggerDescription((prev) => !prev)}
          />
          {triggerDescription ? (
            <DescriptionUpdate setTriggerDescription={setTriggerDescription} />
          ) : null}
        </div>
      </div>
    </>
  );
}

export default HandymanProfile;
