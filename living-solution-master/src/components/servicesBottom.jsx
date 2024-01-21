import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import contact from "../images/ICONS/counselling.png";
import additional from "../images/ICONS/additional.png";
import domestic from "../images/ICONS/domestic.png";
import furniture from "../images/ICONS/furnishing.png";
import housing from "../images/ICONS/hounsing.png";
import kitchen from "../images/ICONS/kitchen.png";
import "../styles/services.css";

function ServicesBottom() {
  return (
    <Container className="mt-5">
      <Row>
        <Col md="4">
          <Card className="shadow mt-5 mb-3 services-card">
            <div>
              <Row>
                <Col md="4" className="mx-auto mt-n5 services-icon py-3">
                  <img src={contact} alt="" className="img-fluid" />
                </Col>
              </Row>
            </div>
            <h2 className="text-center services-text border-bottom mx-2">
              COUNSELLING
            </h2>
            <p className="text-center services-text mx-2">
              Offering guidance to tenants so they know the options available
              according to their preferences. Ensuring their housing is
              affordable, reliable, and accessible.
            </p>
          </Card>
        </Col>
        <Col md="4">
          <Card className="shadow mt-5 services-card">
            <div>
              <Row>
                <Col md="4" className="mx-auto mt-n5 services-icon blue py-3">
                  <img src={housing} alt="" className="img-fluid" />
                </Col>
              </Row>
            </div>
            <h2 className="text-center services-text border-bottom mx-2">
              HOUSING
            </h2>
            <p className="text-center services-text mx-2">
              We provide PGs and flats free of brokerage fees. This enables
              independent and budget-friendly living. We can assist you in
              finding a home as close as possible to the college.
            </p>
          </Card>
        </Col>
        <Col md="4">
          <Card className="shadow mt-5 services-card">
            <div>
              <Row>
                <Col md="4" className="mx-auto mt-n5 services-icon py-3">
                  <img src={furniture} alt="" className="img-fluid" />
                </Col>
              </Row>
            </div>
            <h2 className="text-center services-text border-bottom mx-2">
              FURNISHING
            </h2>
            <p className="text-center services-text mx-2">
              With a monthly rental, you can get furniture and other furnishings
              that you need according to your comfort and usage. We provide
              utensils, air conditioners, LED lighting, and many other
              furnishings.
            </p>
          </Card>
        </Col>
        <Col md="4">
          <Card className="shadow mt-5 services-card">
            <div>
              <Row>
                <Col md="4" className="mx-auto mt-n5 services-icon blue py-3">
                  <img src={kitchen} alt="" className="img-fluid" />
                </Col>
              </Row>
            </div>
            <h2 className="text-center services-text border-bottom mx-2">
              KITCHEN SETUP
            </h2>
            <p className="text-center services-text mx-2">
              Offering guidance to tenants so they know the options available
              according to their preferences. Ensuring their housing is
              affordable, reliable, and accessible.
            </p>
          </Card>
        </Col>
        <Col md="4">
          <Card className="shadow mt-5 services-card">
            <div>
              <Row>
                <Col md="4" className="mx-auto mt-n5 services-icon py-3">
                  <img src={domestic} alt="" className="img-fluid" />
                </Col>
              </Row>
            </div>
            <h2 className="text-center services-text border-bottom mx-2">
              DOMESTIC ASSISTANCE
            </h2>
            <p className="text-center services-text mx-2">
              Offering guidance to tenants so they know the options available
              according to their preferences. Ensuring their housing is
              affordable, reliable, and accessible.
            </p>
          </Card>
        </Col>
        <Col md="4">
          <Card className="shadow mt-5 services-card">
            <div>
              <Row>
                <Col md="4" className="mx-auto mt-n5 services-icon blue py-3">
                  <img src={additional} alt="" className="img-fluid" />
                </Col>
              </Row>
            </div>
            <h2 className="text-center services-text border-bottom mx-2">
              ADDITIONAL SERVICES
            </h2>
            <p className="text-center services-text mx-2">
              Offering guidance to tenants so they know the options available
              according to their preferences. Ensuring their housing is
              affordable, reliable, and accessible.
            </p>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ServicesBottom;
