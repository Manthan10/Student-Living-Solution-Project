import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import "../styles/contact.css";
import or from "../images/ICONS/or.png";

function ContactUs() {
  return (
    <div className="bg-light">
      <Row className="p-4 mt-5 mx-0">
        <Col md="4" className="contact-us">
          <h2 className="text-center">CONTACT US</h2>
          <h5 className="text-center contact-text">Fill out this form</h5>
          <Row>
            <img src={or} alt="" className="img-fluid" />
          </Row>
          <p className="text-center">
            Drop a mail at manthangigoo10@gmail.com or call us : <br></br>
            +91-8448626983
          </p>
        </Col>
        <Col md="8" className="bg-white card pt-5 pb-3 shadow input-card">
          <h2 className="text-center input-heading">Contact Us</h2>
          <Form>
            <Form.Control
              type="email"
              placeholder="Name"
              className="contact-form"
            />
            <Form.Control
              type="email"
              placeholder="Email"
              className="contact-form"
            />
            <Form.Control
              type="email"
              placeholder="Contact Number"
              className="contact-form"
            />
            <Form.Control
              as="textarea"
              rows={3}
              type="email"
              placeholder="Description"
              className="contact-form description-box"
            />
          </Form>
          <Button className="mt-4 contact-submit mx-auto">Submit</Button>
        </Col>
      </Row>
    </div>
  );
}

export default ContactUs;
