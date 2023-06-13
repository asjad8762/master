import React from "react";
import "./About.css";

const About = () => {
  return (
    <section class="text-center about">
      <h1>About Us</h1>
      <div className="about_heading">
        <p>
          We are aimed towards making everyday life easier for brands,
          wholesalers and manufacturers via our B2B platform. Bomway is
          currently in private beta. The team is international, equal and
          comprises of hustlers from London School Of Economics IIT Bombay,
          Grenoble France, and more
        </p>
      </div>
      {/* <div class="container" style={{ marginTop: "50px" }}>
        <div class="row">
          <div
            class="col-lg-4 col-sm-6 col-ex-12 about-item wow lightSpeedIn"
            data-wow-offset="200"
          >
            <span class="fa fa-info"></span>
            <h5 style={{ marginTop: "20px" }}>Customized Sourcing</h5>
            <p class="lead">
              Find producers vetted by us for fair wages and sourcing
            </p>
          </div>
          <div
            class="col-lg-4 col-sm-6 col-ex-12 about-item wow lightSpeedIn"
            data-wow-offset="200"
          >
            <span class="fa fa-info"></span>
            <h5 style={{ marginTop: "20px" }}>Flexible Payment</h5>
            <p class="lead">Get hassle-free payment options for all orders </p>
          </div>
          <div class="clearfix visible-md-block visible-sm-block"></div>
          <div
            class="col-lg-4 col-sm-6 col-ex-12 about-item wow lightSpeedIn"
            data-wow-offset="200"
          >
            <span class="fa fa-file"></span>
            <h5 style={{ marginTop: "20px" }}>Relax</h5>
            <p class="lead">
              From communications to shipping, it's all on us so you can sit
              back and relax
            </p>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default About;
