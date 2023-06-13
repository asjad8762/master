import React, { useState } from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import results from "../../results";
import { Alert } from "react-bootstrap";
import emailjs from "emailjs-com";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [show, setShow] = useState(true);
  const showText = () => {
    <h1>Hello</h1>;
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setShow(false);
    }
  };

  const postHandler = (e) => {
    e.preventDefault();
    const Data = {
      email: email,
    };
    results.post("subscriber.json", Data).then((response) => {
      console.log(response, "123");
    });
    setEmail("");
    <p>the message has been send</p>;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_nxmemoq",
        "template_reylxoc",
        e.target,
        "Hn-qpwMpNMqol-_ZB"
      )
      .then((res) => {
        console.log(res, "112222");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="footer">
      <div className="cont">
        <div className="title">
          <span>Subscribe To Our Newsletter</span>
          <ul className="">
            <li>
              <form
                action=""
                className="subscribe"
                onSubmit={sendEmail}
                onKeyDown={handleKeyDown}
                style={{ maxWidth: "378px" }}
              >
                <input
                  type="email"
                  name="user_email"
                  placeholder="Your Email Id"
                  className="subscribe__input"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                ></input>
                <button
                  type="button"
                  class="subscribe__btn"
                  onClick={() => {
                    setShow(false);
                  }}
                >
                  <i class="fas fa-paper-plane" onClick={showText}></i>
                </button>
              </form>
              {!show && (
                <Alert
                  variant="success"
                  style={{ marginTop: "20px", maxWidth: "378px" }}
                >
                  <p>Welcome! you are now subscribed to Bomway's newsletter</p>
                </Alert>
              )}
            </li>
          </ul>
        </div>
        <div className="title">
          <span>Product</span>
          <ul>
            <a href="#">
              <li>
                <h4>Trending Product</h4>
              </li>
            </a>
          </ul>
        </div>
        <div className="title">
          <span>Our Company</span>
          <ul>
            <Link to="about">
              <li>
                <h4>About</h4>
              </li>
            </Link>
            <a href="#">
              <li>
                <h4>Contact</h4>
              </li>
            </a>
          </ul>
          <div className="socialmedia">
            <ul>
              <li>
                <a href="https://www.facebook.com/bomway.co">
                  <i class="fab fa-facebook-f"></i>
                </a>
              </li>

              <li>
                <a href="https://twitter.com/bomway_">
                  <i class="fab fa-twitter"></i>
                </a>
              </li>

              <li>
                <a href="https://www.linkedin.com/company/bomway/?viewAsMember=true">
                  <i class="fab fa-linkedin"></i>
                </a>
              </li>

              <li>
                <a href="https://www.instagram.com/bomway.co">
                  <i class="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="title">
          <span>Policies</span>
          <ul>
            <a href="#">
              <li>
                <h4>Terms of Use</h4>
              </li>
            </a>
            <a href="#">
              <li>
                <h4>Privacy Policy</h4>
              </li>
            </a>
          </ul>
        </div>
      </div>
      <div className="subFooter">
        <div className="subFotter-text">
          © 2022 ASJAD, Inc. All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
