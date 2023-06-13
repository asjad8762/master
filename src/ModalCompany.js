import React from "react";
import { Modal, Button, Card } from "react-bootstrap";
import woven from "./image/woven.jpeg";

function ModalCompany(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Product & Services
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* <h4>Centered Modal</h4> */}
        <div style={{ display: "flex", gap: "10px" }}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={woven} style={{ height: "200px" }} />
            <Card.Body>
              <Card.Title>Woven Label</Card.Title>
              <Card.Text>
                Some quick example text to build on the card
              </Card.Text>
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={woven} style={{ height: "200px" }} />
            <Card.Body>
              <Card.Title>Woven Label</Card.Title>
              <Card.Text>
                Some quick example text to build on the card
              </Card.Text>
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={woven} style={{ height: "200px" }} />
            <Card.Body>
              <Card.Title>Woven Label</Card.Title>
              <Card.Text>
                Some quick example text to build on the card
              </Card.Text>
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={woven} style={{ height: "200px" }} />
            <Card.Body>
              <Card.Title>Woven Label</Card.Title>
              <Card.Text>
                Some quick example text to build on the card
              </Card.Text>
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Card>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button
          style={{ background: "#6b4423", border: "none" }}
          onClick={props.onHide}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalCompany;
