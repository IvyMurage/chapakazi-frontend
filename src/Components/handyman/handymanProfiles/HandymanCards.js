import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import HandymanCard from "./HandymanCard";
import { fetchProfiles } from "./profilesSlice";

function HandymanCards({ handymanSearch }) {
  const dispatch = useDispatch();
  const token = localStorage.getItem("customer");
  useEffect(() => {
    dispatch(fetchProfiles(token));
  }, [dispatch, token]);

  const profilesInfo = useSelector((state) => state.profiles.profiles);
  const profiles = profilesInfo.filter((profile) =>
    profile.description.includes(handymanSearch)
  );
  console.log(profiles);
  const profilesList = profiles.map((profile) => (
    <HandymanCard key={profile.id} profile={profile} />
  ));
  return <div className="main-container">{profilesList}</div>;
}

export default HandymanCards;
