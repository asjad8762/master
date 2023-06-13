import React from "react";
import akeem from "../image/akeem.png";
import section1image from "../image/section1.png";
import sect from "../image/over.png";

const Section2 = () => {
  return (
    <section
      class="full-width-section full-width-section--dark-blue"
      style={{ backgroundColor: "#7A5C61" }}
    >
      <div class="page">
        <div class="paper-padding py-2">
          <div class="grid-x grid-margin-y-3">
            <div class="cell xlarge-7 d-f ai-c full-width-section__content">
              <div class="mx-2">
                <div class="full-width-section__title color-white fw-regular">
                  <a class="link--inherit">
                    It's very difficult to learn about the source. I need such
                    producers for my sustainable brand, and glad to find you
                  </a>
                </div>
                <div class="text-normal color-white mt-3">
                  <div class="hide-for-xlarge grid-x">
                    <div
                      class="cell small-4 small-centered"
                      style={{ marginTop: "20px" }}
                    >
                      <img
                        style={{ height: "100px", borderRadius: "200px" }}
                        class="mb-1"
                        alt="Ovr Bloom"
                        title="Akeem"
                        src={sect}
                      />
                    </div>
                  </div>
                  {/* <div class="cell xlarge-6 full-width-section__image">
                    <img
                      alt="Review screenshots"
                      title="Review screenshots"
                      src={sect}
                      style={{ marginLeft: "20px" }}
                    />
                  </div> */}
                  <div class="fw-semibold">Jess,</div>
                  <div>Owner, Overbloom</div>
                  <div>UK</div>
                </div>
              </div>
            </div>
            <div class="cell show-for-xlarge xlarge-4 xlarge-offset-1 full-width-section__image">
              <div>
                <img
                  alt="Ovr Bloom"
                  title="Akeem"
                  src={sect}
                  style={{
                    height: "350px",
                    width: "350px",
                    borderRadius: "200px",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
