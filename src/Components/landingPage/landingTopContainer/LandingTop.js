import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import LandingHeader from "../../LandingTopHeader/LandingHeader";
import "./LandingTop.css";

function LandingTop() {
  return (
    <>
      <LandingHeader />
      <div className="top-container">
        <div id="image-container">
          <img
            src="./images/wepik-photo-mode-20221114-16341.png"
            alt="plumber with arrms crossed"
          />
        </div>
        <div id="start-section">
          <h2>
            Chapa <span id="kazi"> Kazi </span> <br />
            Ajira Mkononi
          </h2>
          <button id="get-started"> Get Started </button>
        </div>
      </div>
      <div className="why-us">
        <div className="numbers">
          <p>
            1454 <FontAwesomeIcon icon={faPlus} />
          </p>
          <h5> Happy Clients </h5>
        </div>
        <div className="numbers">
          <p>
            590 <FontAwesomeIcon icon={faPlus} />
          </p>
          <h5> Projects </h5>
        </div>
        <div className="numbers">
          <p>
            1454 <FontAwesomeIcon icon={faPlus} />
          </p>
          <h5> Years of Experience </h5>
        </div>
      </div>

      <div className="about-container">
        <div className="landing-img">
          <img
            src="https://img.freepik.com/free-photo/asian-plumber-blue-overalls-clearing-blockage-drain_1098-17773.jpg?w=740&t=st=1673857831~exp=1673858431~hmac=284223d6caa0f1547e41847e351e504c2413f56ca7b4c77f814938cdbc70f24f"
            alt="handyman"
          />
        </div>
        <div className="landing-1">
          <div className="landing-2">
            <span>About Chapakazi</span>
            <h2>
              We Shape the perfect Solution
              <br />
              for Company
            </h2>
          </div>

          <div className="landing-3">
            <p>
              Lorem ipsum is simply dummy text of the printing ans typesetting
              indusrty. Lorem 
              ipsum has been the industry standard's
            </p>

            <ol>
              <li className="circle">
                It originally comes from a Latin text, but to today’s reader,
                it’s seen as gibberish.
              </li>
              <li className="circle">
                It originally comes from a Latin text, but to today’s reader,
                it’s seen as gibberish.
              </li>
              <li className="circle">
                It originally comes from a Latin text, but to today’s reader,
                it’s seen as gibberish.
              </li>
              <li className="circle">
                It originally comes from a Latin text, but to today’s reader,
                it’s seen as gibberish.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingTop;
