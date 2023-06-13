import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Company.css";
import StartRating from "../StartRating";
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "../image/logo.png";
import nologo from "../image/nologo.png";
import ModalCompany from "../ModalCompany";
import BsTabs from "../components/BsTabs";
import tees1 from "../image/tees1.jpeg";
import tees2 from "../image/tees2.jpeg";
// import dress from "../image/dress.png";
import CompanyAbout from "../CompanyAbout";
import woven from "../image/woven.png";
import Accordion from "react-bootstrap/Accordion";
import CompanySideBar from "../CompanySideBar/CompanySideBar";
import { db } from "../firebase";

function Company() {
  const [modalShow, setModalShow] = React.useState(false);
  const [result, setResult] = useState({});
  const [todos, setTodos] = useState([]);
  const [subData, setSubdata] = useState([]);
  const [companyReview, setCompanyReview] = useState({});

  useEffect(() => {
    fetch(
      `https://bomway-21955-default-rtdb.firebaseio.com/company/${companyName}.json`
    )
      .then((res) => res.json())
      .then((response) => {
        console.log(response, "response");
        setResult(response);
      });
  }, []);

  let { companyName } = useParams();
  console.log(companyName.replace(/\s+/g, ""), "321");

  useEffect(() => {
    fetch(
      "https://bomway-21955-default-rtdb.firebaseio.com/companyReviewData.json"
    )
      .then((response) => response.json())
      .then((resData) => {
        console.log(resData, "res");
        // console.log(Object.keys(resData), "data");
        setTodos(resData);
      });
  }, [todos]);
  // useEffect(() => {
  //   const y = Object.keys(todos);
  //   let final = {};
  //   for (const key in y) {
  //     var neww = todos[y[key]];
  //     for (const [key, value] of Object.entries(neww)) {
  //       final[key] = value;
  //     }
  //   }
  //   setSubdata(final);
  //   console.log(final, "final");
  // }, [subData]);

  useEffect(() => {
    db.collection(`${companyName}`)
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          const obj = doc.data();
          //obj.forEach((data) => totalarray.push((data)) )
          setCompanyReview(obj);
          console.log("objectt", obj);
        });
      });
  }, []);

  useEffect(() => {
    let totalarray = [];
    db.collection("companyReviewData")
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          const obj = doc.data();
          //obj.forEach((data) => totalarray.push((data)) )
          console.log("objectt", obj);
        });
      });
  }, []);

  // useEffect(() => {
  //   const todolist = [];
  //   for (const key in todos) {
  //     todolist.push(todos[key]);
  //     console.log(todolist, "todolist");
  //     setSubdata(todolist);
  //     // console.log(Object.keys(todolist), "321");
  //   }
  // }, [todos]);

  console.log(subData, "1234");
  console.log(companyReview, "company");
  // console.log(companyName, "123");

  // companyName = companyName.replace(/\s+/g, "");
  // console.log(companyName, "12");
  return (
    <>
      <div className="_header-wrap">
        <Row className="_header _block">
          <Col xs={8} className="xss">
            <div className="col_88">
              <div>
                <img style={{ marginRight: "20px" }} src={nologo} />
              </div>
              <div
                className="col_row"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  margin: "0px 0px 0px 20px",
                }}
              >
                <h1 style={{ fontSize: "2rem", fontWeight: "600" }}>
                  {result.name}
                </h1>
                <span>Reviews 1,858 • Excellent</span>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <span>
                    <button class="styles_verificationLabel__kukuk">
                      <div class="typography_typography__QgicV typography_extrasmall__Q62Es typography_weight-heavy__E1LTj typography_fontstyle-normal__kHyN3 styles_verificationIcon___X7KO">
                        <svg
                          viewBox="0 0 16 16"
                          fill="black"
                          class="icon_icon__ECGRl"
                          xmlns="http://www.w3.org/2000/svg"
                          width="14px"
                          height="14px"
                        >
                          <path
                            class="ic-verified-user"
                            d="M1 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v7.989a2 2 0 0 1-1.298 1.873l-5 1.875c-.453.17-.951.17-1.404 0l-5-1.875A2 2 0 0 1 1 10.989V3Z"
                          ></path>
                          <path
                            class="ic-verified-user-check"
                            d="M11.618 6.12a.875.875 0 1 0-1.236-1.24L7.03 8.22 5.66 6.647a.875.875 0 0 0-1.32 1.15l1.768 2.03c.041.047.086.089.135.125a.875.875 0 0 0 1.364.163l4.01-3.995Z"
                          ></path>
                        </svg>
                        VERIFIED COMPANY
                      </div>
                    </button>
                  </span>
                </div>
                <div style={{ display: "flex", gap: "4px" }}>
                  <div>Certificates: </div>
                  <div>
                    <span style={{ fontWeight: "600" }}>
                      {result.Certificates}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={4} style={{ margin: "20px 20px 0px" }}>
            <div style={{ marginTop: "20px" }} className="containerRight">
              {/* <div className="leftStyle">{result.Website}</div> */}
              <a href={result.Website}>
                <div className="leftStyleSub">Visit this website </div>
              </a>
            </div>
          </Col>
        </Row>
      </div>
      <Container>
        <CompanyAbout result={result} company={companyName} />
        {/* <div>
          <h3 style={{ textAlign: "center" }}>Fashion</h3>
          <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={tees1} style={{ height: "200px" }} />
              <Card.Body>
                <Card.Title style={{ textAlign: "center" }}>Tees</Card.Title>
                <Card.Text></Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={tees2} style={{ height: "200px" }} />
              <Card.Body>
                <Card.Title style={{ textAlign: "center" }}>Tees</Card.Title>
                <Card.Text></Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={tees2} style={{ height: "200px" }} />
              <Card.Body>
                <Card.Title style={{ textAlign: "center" }}>Tees</Card.Title>
                <Card.Text></Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" style={{ height: "200px" }} />
              <Card.Body>
                <Card.Title style={{ textAlign: "center" }}>Dress</Card.Title>
                <Card.Text></Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div> */}
        <div className="_row_99">
          <Col className="pl0" xs={8}>
            <div className="reviewContent">
              <div className="user-info">
                <div className="user-icon">VU</div>
                <div className="user-con">
                  <div>VERIFIED USER</div>
                  <div>Review Count</div>
                </div>
              </div>
              <div style={{ marginTop: "10px", fontWeight: "700" }}>
                {/* Nazeeb was super */}
              </div>
              <p style={{ marginTop: "10px" }}>{companyReview.about}</p>
            </div>
          </Col>
          <Col className="pr0" xs={4}>
            <div
              className="_pr0"
              style={{
                border: "1px solid black",
                padding: "20px",
                marginTop: "20px",
                background: "#fff",
              }}
            >
              <h2>Company Activity</h2>
              <ul>
                <li className="list">Claimed Profile</li>
                <li className="list">Ask for reviews - positive or negative</li>
                <li className="list">Pay for extra features</li>
                <li className="list">Hasn't replied to negative reviews</li>
              </ul>
            </div>

            <div
              className="_pr1"
              style={{
                border: "1px solid black",
                padding: "20px",
                marginTop: "20px",
                background: "#fff",
              }}
            >
              {/* <h3>Categories</h3>
              <p style={{ marginTop: "12px" }}>
                <span style={{ fontWeight: "600" }}> {result.categories} </span>
              </p> */}
              <CompanySideBar />
            </div>
          </Col>
        </div>
      </Container>
    </>
  );
}

export default Company;
