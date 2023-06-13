import React, { useState, useEffect } from "react";
import Button from "./Button";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./Navbar.css";
import bomwayImage from "../image/bomway.png";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  // useEffect(() => {
  //   const token = currentUser.getIdToken();
  //   localStorage.setItem("token", token);
  // });

  window.addEventListener("resize", showButton);

  // console.log(currentUser.getIdToken(), "token");
  // const token = currentUser.getIdToken();
  const name = localStorage.getItem("current User");

  // localStorage.setItem("token", token);
  const clickHandler = () => {
    // const token = currentUser.getIdToken();
    // localStorage.setItem("token", token);
    // const name = localStorage.getItem("token");
    // if (token) {
    //   navigate("/profile");
    // }
  };

  return (
    <>
      <nav className="navbar-app">
        <div className="navbar-container">
          <a href="/" className="navbar-logo" onClick={closeMobileMenu}>
            <img
              src={bomwayImage}
              style={{ width: "170px", marginTop: "7px" }}
            />
            {/* {bomwayImage} */}
            {/* <i class="fab fa-typo3" /> */}
          </a>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="/review"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Write A Review
              </Link>
            </li>
            <li className="nav-item">
              <a
                href="https://airtable.com/shrPJLI5PfSLtSReh"
                to="/services"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                For Sellers
              </a>
            </li>

            {/* <li className="nav-item">
              <Link
                to="/profile"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                
              </Link>
            </li> */}
            <li>
              <Link
                to={name ? "/profile" : "/login"}
                className="nav-links-mobile"
                style={{ cursor: "pointer" }}
                onClick={closeMobileMenu}
              >
                {currentUser && currentUser ? (
                  <p>{currentUser.email}</p>
                ) : (
                  <p>Buyer's log in</p>
                )}
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link
                to="/profile"
                style={{ cursor: "pointer" }}
                onClick={closeMobileMenu}
              >
                <p>Profile</p>
              </Link>
            </li> */}
          </ul>
          <div style={{ cursor: "pointer" }} className="sign_up">
            {button && (
              <Link to={name ? "/profile" : "/login"}>
                <Button buttonStyle="btnn-outline" onClick={clickHandler}>
                  {currentUser && currentUser ? (
                    <p>{currentUser.email}</p>
                  ) : (
                    <p>Buyer's log in</p>
                  )}
                </Button>
              </Link>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
