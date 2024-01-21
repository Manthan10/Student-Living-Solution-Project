import React from "react";
import { Row, Col } from "react-bootstrap";
import about1 from "../images/ICONS/about-1.png";
import about2 from "../images/ICONS/about-2.png";
import "../styles/about.css";

function AboutBottom() {
  return (
    <div className="about">
      <Row className="p-4 mt-4 bg-light">
        <Col md="4">
          <img src={about1} alt="" className="img-fluid" />
        </Col>
        <Col md="7">
          <h2 className="text-center about-heading">What do we do?</h2>
          <p className="text-center about-text">
            People have always had difficulty in finding good rentals or tenants
            with proper amenities, or they have difficulty finding respectable
            tenants. This is where our personal preferences play a crucial role.
            Everyone wants a carefree, relaxed, and hassle-free life. <br></br>
            We strive to eliminate all your rental hassles, no matter if you are
            renting or providing a rental. Customers have always been our number
            one priority. We envision serving our owners and tenants with the
            most relaxed renting and renting-out experience possible.
          </p>
        </Col>
      </Row>
      <Row className="p-4 mt-4 bg-light">
        <Col md="7">
          <h2 className="text-center about-heading">How are we different?</h2>
          <p className="text-center about-text">
            We strive to be better at every step by taking in all of your
            suggestions and feedback. Our vision is to create an environment in
            which students can live a comfortable and independent life without
            worrying about housing. This is where the monkhood steps in. We are
            working on the welfare of students by letting them focus on their
            careers while we find them the perfect rental according to their
            preferences. Whether they want an independent flat, a room with
            multiple roommates, or other furnishings and assistance, we are here
            to help. Our focus has been getting tenants and owners into direct
            contact with each other by removing middlemen and pre-negotiating
            the security deposit. We understand that renting to a student comes
            with its own worries and stress, so we assure our house owners of a
            verified tenancy and monetary independence, where the collection of
            rent is handled either manually or through online portals. We strive
            to make the Students Experience the best experience for both our
            tenants and renters alike
          </p>
        </Col>
        <Col md="4">
          <img src={about2} alt="" className="img-fluid" />
        </Col>
      </Row>
    </div>
  );
}

export default AboutBottom;
