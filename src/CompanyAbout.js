import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaUserFriends } from "react-icons/fa";
import { TbBuildingStore } from "react-icons/tb";
import { FaBalanceScaleLeft } from "react-icons/fa";
import { FaCity } from "react-icons/fa";
import { AiFillDollarCircle } from "react-icons/ai";
import { GrDocumentConfig } from "react-icons/gr";
import { GiModernCity } from "react-icons/gi";
import { FaBusinessTime } from "react-icons/fa";
import "./CompanyAbout.css";

const CompanyAbout = ({ result, company }) => {
  console.log(company, "company");
  return (
    <Container>
      {/* <Container style={{ background: "#fff" }}> */}
      <Row>
        <div
          style={{
            padding: "10px 20px",
            background: "#fff",
            marginTop: "20px",
            flexGrow: "1",
          }}
        >
          <div>
            <h3
              style={{
                textAlign: "center",
                fontWeight: "600",
                marginTop: "20px",
              }}
            >
              About {company}
            </h3>
            <p
              style={{
                marginTop: "20px",
                marginBottom: "20px",
                textAlign: "center",
              }}
            >
              Established in the year at {result.city}, we {company}
              are {result.legalStatus} firm, engaged as the
              {""} {result.type}
            </p>
          </div>
          <div
            className="_row_8"
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: "20px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <div
                style={{
                  borderRadius: "50%",
                  border: "1px solid gray",
                  marginRight: "12px",
                }}
              >
                <FaBusinessTime style={{ fontSize: "40px", padding: "5px" }} />
              </div>
              <div>
                <p style={{ fontSize: "15px", color: "#777" }}>
                  Nature of Business
                </p>
                <span>{result.type}</span>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div
                style={{
                  borderRadius: "50%",
                  border: "1px solid gray",
                  marginRight: "12px",
                }}
              >
                <FaUserFriends style={{ fontSize: "40px", padding: "5px" }} />
              </div>
              <div>
                <p style={{ fontSize: "15px", color: "#777" }}>
                  Total Number of Employees
                </p>
                <span>{result.workForce}</span>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div
                style={{
                  borderRadius: "50%",
                  border: "1px solid gray",
                  marginRight: "12px",
                }}
              >
                <TbBuildingStore style={{ fontSize: "40px", padding: "5px" }} />
              </div>
              <div>
                <p style={{ fontSize: "15px", color: "#777" }}>
                  Year of Establishment
                </p>
                <span>{result.yearOfEstablishment}</span>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div
                style={{
                  borderRadius: "50%",
                  border: "1px solid gray",
                  marginRight: "12px",
                }}
              >
                <FaBalanceScaleLeft
                  style={{ fontSize: "40px", padding: "5px" }}
                />
              </div>
              <div>
                <p style={{ fontSize: "15px", color: "#777" }}>
                  Legal Status of Firm
                </p>
                <span>{result.legalStatus}</span>
              </div>
            </div>
          </div>
          <div
            className="_row_8"
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              margin: "20px",

              // textAlign: "center",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <div
                style={{
                  borderRadius: "50%",
                  border: "1px solid gray",
                  marginRight: "12px",
                }}
              >
                <FaCity style={{ fontSize: "40px", padding: "5px" }} />
              </div>
              <div>
                <p style={{ fontSize: "15px", color: "#777" }}>City Name</p>
                <span>{result.city}</span>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div
                style={{
                  borderRadius: "50%",
                  border: "1px solid gray",
                  marginRight: "12px",
                }}
              >
                <AiFillDollarCircle
                  style={{ fontSize: "40px", padding: "5px" }}
                />
              </div>
              <div>
                <p style={{ fontSize: "15px", color: "#777" }}>
                  Annual Turnover
                </p>
                <span>{result.Turnover}</span>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div
                style={{
                  borderRadius: "50%",
                  border: "1px solid gray",
                  marginRight: "12px",
                }}
              >
                <GrDocumentConfig
                  style={{ fontSize: "40px", padding: "5px" }}
                />
              </div>
              <div>
                <p style={{ fontSize: "15px", color: "#777" }}>
                  Registration Number
                </p>
                <span>{result.companyNumber}</span>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div
                style={{
                  borderRadius: "50%",
                  border: "1px solid gray",
                  marginRight: "12px",
                }}
              >
                <GiModernCity style={{ fontSize: "40px", padding: "5px" }} />
              </div>
              <div>
                <p style={{ fontSize: "15px", color: "#777" }}>Country</p>
                <span>{result.Country}</span>
              </div>
            </div>
          </div>
          {/* <div>
              <div>
                <h3>Products & Service</h3>
              </div>
            </div> */}
        </div>
      </Row>

      {/* </Container> */}
    </Container>
  );
};

export default CompanyAbout;
