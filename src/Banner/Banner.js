import React, { useState, useEffect, useRef, useCallback } from "react";
import BannerImage from "../image/white.png";
import "./Banner.css";
import { db } from "../firebase";

const Banner = () => {
  const [value, setValue] = useState("");
  const [result, setResult] = useState([]);
  const [list, setList] = useState([]);
  const [data, setData] = useState([]);

  // useEffect(() => {
  //   db.collection("AAC Textiles")
  //     .get()
  //     .then((snapshot) => {
  //       snapshot.forEach((doc) => {
  //         const obj = doc.data();
  //         //obj.forEach((data) => totalarray.push((data)) )
  //         console.log("objectt", obj);
  //       });
  //     });
  // }, []);

  useEffect(() => {
    db.collection("AAC Textiles")
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          const obj = doc.data().about;
          //obj.forEach((data) => totalarray.push((data)) )
          // setCompanyReview(obj);
          const split_string = obj.split(" ");
          console.log("objectt", split_string);
        });
      });
  }, []);

  // useEffect(() => {
  //   fetch("https://review-2a168-default-rtdb.firebaseio.com/3mt.json")
  //     .then((response) => response.json())
  //     .then((resData) => {
  //       console.log(resData, "3mt");
  //       setData(resData);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // });

  // const DeleteKeys = () => {
  //   return delete data.Address;
  // };

  // useEffect(() => {
  //   const myObj = delete data.Address;
  //   console.log(myObj, "4566");
  // });

  useEffect(() => {
    fetch("https://bomway-21955-default-rtdb.firebaseio.com/company.json/")
      .then((response) => response.json())
      .then((resData) => {
        console.log(resData, "res");
        setResult(resData);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  useEffect(() => {
    if (value.length > 0) {
      setList([]);
      let searchQuery = value.toLowerCase();
      let listArr = [];
      for (const key in result) {
        let comp = result[key].name;
        let company = typeof comp === "string" ? comp.toLowerCase() : "";

        console.log(company, "comp");
        console.log(searchQuery, "search");
        if (company.slice(0, searchQuery.length).indexOf(searchQuery) !== -1) {
          setList((prevResult) => {
            return [...prevResult, result[key].name];
          });
        }
      }
    } else {
      setList([]);
    }
  }, [value]);

  const handleChange = (e) => {
    e.preventDefault();
    let lowerCase = e.target.value.toLowerCase();
    setValue(lowerCase);
  };

  return (
    <div className="backgroundColor background-header background-header--dashboard">
      <div className="background-header__body background-header__body--dashboard">
        <div className="background-header__image-container">
          <div className="position-relative full-height">
            <div
              className="background-header__image overflow-visible"
              style={{
                backgroundImage: { BannerImage },
              }}
            >
              <img
                style={{
                  width: "100%",
                  // height: "550px",
                  objectFit: "cover",
                  // filter: "brightness(0.5)",
                  height: "-webkit-fill-available",
                }}
                src={BannerImage}
              ></img>
            </div>
          </div>
        </div>
        <div className="background-header__content page">
          <div className="hero-unit hero-unit--home-header">
            <h1
              className="hero-unit__title"
              id="main"
              style={{ color: "#252530" }}
            >
              Source from the <span style={{ color: "#4a6d4f" }}>finest</span>
            </h1>
            <div className="hero-unit__subtitle">
              <div style={{ color: "#252530" }}>
                Choose and review the right company,to help people for choosing their future living
                
              </div>
            </div>
            <div
              className={
                !!list.length
                  ? "hero-unit__search search_hero"
                  : "hero-unit__search"
              }
            >
              <div className="search-box-wrapper js-search-field navbar-search x-typeahead-initialized">
                <form className="rounded-search--with-footer rounded-search rounded-search--homepage">
                  <div className="rounded-search__top">
                    <span
                      className="twitter-typeahead"
                      style={{ position: "relative", display: "inline-block" }}
                    >
                      <input
                        type="search"
                        className="ajax-search-field js-query rounded-search__input rounded-search__input--left tt-input customStyle"
                        style={{
                          position: "relative",
                          verticalAlign: "top",
                          color: "black",
                          outline: "none",
                        }}
                        placeholder="Search Manufacturer, Wholesaler"
                        onChange={handleChange}
                        value={value}
                      />
                    </span>
                    <p>`${}`</p>
                  </div>
                  <button className="rounded-search__right-submit">
                    <div className="lh-100">Search</div>
                  </button>
                </form>
              </div>
              <div className="scroll">
                {list.map((d) => (
                  <a
                    style={{
                      padding: "10px 20px 0px",
                      display: "block",
                      textAlign: "left",
                      color: "#6a4423",
                    }}
                    href={`/company/${d}`}
                  >
                    {d}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
