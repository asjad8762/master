import React from "react";

const Section4 = () => {
  return (
    <section
      class="full-width-section full-width-section--paper"
      style={{ backgroundColor: "#e6e3de" }}
    >
      <div class="page">
        <div class="paper-padding-x">
          <div class="grid-x grid-margin-y-3">
            <div class="cell xlarge-6 full-width-section__image">
              <img
                alt="G2 Track screenshots"
                title="G2 Track screenshots"
                src="https://www.g2.com/assets/track_screenshots-07f28041fd5edf03573826f9e2a76f3ca023c15b2582ec70e85dbc6cf18a4546.png"
              />
            </div>
            <div class="cell xlarge-6 d-f ai-c full-width-section__content">
              <div class="mx-2">
                <h2 class="full-width-section__title">
                  Bomway Track. Instant SaaS Visibility. Better Stack Decisions.
                </h2>
                <div class="full-width-section__subtitle">
                  One platform to easily manage and optimize your Business so
                  your company can achieve sustainable growth.
                </div>
                <a>
                  <div class="btn btn--hollow btn--rounded btn--rorange btn--width-auto">
                    Learn More
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

export default Section4;
