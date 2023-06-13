import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";

function ModalPop({ show, onHide }) {
  const navigate = useNavigate();

  const onChangeUrl = () => {
    navigate("/");
  };
  return (
    <>
      {/* <Modal show={show} onHide={handleClose}> */}
      <Modal show={show} onHide={onHide} style={{ background: "#e5e3de" }}>
        {/* <Modal.Header closeButton> */}
        {/* <Modal.Title>Modal heading</Modal.Title> */}
        {/* </Modal.Header> */}
        <Modal.Body>Thanks For Submit Review, Cheers</Modal.Body>
        <Modal.Footer>
          <Button
            className="buttonn"
            style={{ background: "#795c61" }}
            onClick={onChangeUrl}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalPop;
