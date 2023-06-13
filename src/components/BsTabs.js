import React from "react";
import { Container, Row, Tabs, Tab } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./BsTabs.css";
import CompanyAbout from "../CompanyAbout";

const BsTabs = () => {
  return (
    <Container style={{ margin: 0, padding: 0 }}>
      <Row>
        <div>
          <Tabs
            justify
            variant="pills"
            defaultActiveKey="tab-1"
            className="mb-1 p-0"
          >
            <Tab eventKey="tab-1" title="About Us"></Tab>
            <Tab eventKey="tab-2" title="Product & Services">
              Tab 2 Content
            </Tab>
          </Tabs>
        </div>
      </Row>
    </Container>
  );
};

export default BsTabs;
