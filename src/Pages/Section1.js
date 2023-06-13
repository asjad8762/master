import React from "react";
import sect1image from "../image/sect1.png";
import { Link } from "react-router-dom";

const Section1 = () => {
  return (
    <section class="full-width-section full-width-section--paper">
      <div class="page">
        <div class="paper-padding-x">
          <div class="grid-x grid-margin-y-3">
            <div class="cell xlarge-6 full-width-section__image">
              <img
                style={{ marginLeft: "20px" }}
                alt="Review screenshots"
                title="Review screenshots"
                src={sect1image}
              />
            </div>
            <div class="cell xlarge-6 d-f ai-c full-width-section__content">
              <div class="mx-2">
                <h2
                  class="full-width-section__title c-purple-100 mb-0"
                  style={{ color: "#4a6d4f" }}
                >
                  Dealing online?
                </h2>
                <div class="full-width-section__title">Write a review.</div>
                <div class="full-width-section__subtitle">
                  Help buyers make the right choice for their businesses, brands
                  and stores
                </div>
                <a>
                  <div class="btn btn--hollow btn--rounded btn--rorange btn--width-auto">
                    <Link style={{ color: "#6a4423" }} to="/review">
                      Write a Review
                    </Link>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
