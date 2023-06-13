import React, { useEffect } from "react";
import { Route, Routes, Link } from "react-router-dom";
import section3Image from "../image/sect3.png";
import "./Section3.css";

const Section3 = () => {
  //   const RedirectPage = () => {
  //     useEffect(() => {
  //       window.location.replace("https://www.google.com");
  //     }, []);
  //   };
  return (
    <section class="full-width-section full-width-section--paper">
      <div class="page">
        <div class="paper-padding-x">
          <div class="grid-x grid-margin-y-3">
            <div class="cell xlarge-6 d-f ai-c full-width-section__content">
              <div class="mx-2">
                <h2
                  class="full-width-section__title c-purple-100 mb-0"
                  style={{ color: "#4a6d4f" }}
                >
                  Selling ?
                </h2>
                <div class="full-width-section__title">Reach more buyers.</div>
                <div class="full-width-section__subtitle">
                  Your future customers are researching their next purchase on
                  Bomway. Make sure they can find you.
                </div>
                <div
                  className="customStyle"
                  class="btn btn--hollow btn--rounded btn--rorange btn--width-auto custom"
                  // onClick={RedirectPage}
                >
                  <Link to="/form" style={{ color: "#6b4423" }}>
                    Claim Your Bomway Profile
                  </Link>
                </div>
              </div>
            </div>
            <div class="cell xlarge-6 full-width-section__image">
              <img
                style={{ height: "450px", height: "fit-content" }}
                alt="G2 Profile screenshots"
                title="G2 Profile screenshots"
                src={section3Image}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
