import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

const Modal1 = (props) => {
  return (
    <div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Start A Discussion
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="formBasicTextarea">
            <Form.Label style={{ display: "flex" }}></Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Tell us what is in your mind!"
              style={{
                fontSize: "22px",
                height: "200px",
                boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.25)",
              }}
            />
            <Form.Text></Form.Text>
          </Form.Group>

          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button variant="outline-success">post</Button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Modal1;
