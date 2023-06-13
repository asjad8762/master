import React, { Component } from "react";
import { Accordion, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { AiFillCaretDown } from "react-icons/ai";
import "./CompanySideBar.css";

export class CompanySideBar extends Component {
  render() {
    return (
      <>
        <div className="accordin">
          <h3 style={{ padding: "10px" }}>How Bomway Works ?</h3>
          <Accordion>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="0">
                <div>1. We Are Open to All</div>
                <div>{/* <AiFillCaretDown /> */}</div>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  Anyone can write a review, but all reviews are moderated and
                  then published.{" "}
                </Card.Body>
              </Accordion.Collapse>
            </Card>

            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="1">
                2. Verified Reviews Algorithm
              </Accordion.Toggle>

              <Accordion.Collapse eventKey="1">
                <Card.Body>
                  Our ranking algorithm works considering verified reviews on
                  our website as well an average out from internet
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="2">
                3. Verified Companies
              </Accordion.Toggle>

              <Accordion.Collapse eventKey="2">
                <Card.Body>
                  We have dedicated people and state of art technology for
                  verfication of all reviews and certifications
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="3">
                4.We Love Feedback
              </Accordion.Toggle>

              <Accordion.Collapse eventKey="3">
                <Card.Body>
                  We are always open to criticism and feedback. You will get
                  emails from us on how to get the best from our platform
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>
      </>
    );
  }
}

export default CompanySideBar;
