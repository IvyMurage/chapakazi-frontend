import { faHeart, faMessage, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import ReviewContainer from "../review/ReviewContainer";
// import ReviewForm from "../review/ReviewForm";
import "./HandymanPage.css";

function HandymanPage() {
  return (
    <div className="handymanpage">
      <div className="top-handyman-section">
        <div className="left-section-handyman">
          <div className="handyman-info">
            <img
              src="https://img.freepik.com/free-photo/portrait-smiling-handyman-with-tools-isolated-white_186202-3001.jpg?w=360&t=st=1673266508~exp=1673267108~hmac=b1184e8ab8847276a9a60974dfe9998f884ae42866df0e77e38ab33e82fb6e50"
              alt="handyman profile"
            />
            <h3>John Doe</h3>
            <p>Speciality</p>
            <div className="rating">
              {[...Array(5)].map((index) => {
                return (
                  <FontAwesomeIcon icon={faStar} className="star" key={index} />
                );
              })}
            </div>
            <div className="call-action">
              <FontAwesomeIcon icon={faHeart} className="action-icon" />
              <FontAwesomeIcon icon={faMessage} className=" action-icon" />
            </div>
          </div>
        </div>
        <div className="about-info">
          <h3>About</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
            reprehenderit saepe unde ut ullam, quas molestias fuga architecto
            similique. Excepturi quis at quo perferendis quasi dolores itaque ad
            facilis deserunt.
          </p>
        </div>
      </div>

      <>
        <h2 id="speciality-heading">Speciality</h2>
        <div className="specialities">
          <h4>Plumbering</h4>
          <h4>Painting</h4>
        </div>
      </>

      <ReviewContainer/>
      {/* <ReviewForm/> */}
    </div>
  );
}

export default HandymanPage;
