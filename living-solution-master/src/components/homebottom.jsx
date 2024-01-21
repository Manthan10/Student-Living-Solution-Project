import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "../styles/homebottom.css";
import house from "../images/house.png";
import cash from "../images/cash.png";
import kitchen from "../images/kitchen.png";
import furniture from "../images/furniture.png";
import contact from "../images/contact.png";

import moneyPic from "../images/moneyPic.png";
import img1 from "../images/img1.png";
import img2 from "../images/img2.png";
import img3 from "../images/img3.png";
import img4 from "../images/img4.png";
import img5 from "../images/img5.png";
import img6 from "../images/img6.png";
import { useNavigate } from "react-router-dom";

function HomeBottom() {
  const navigate = useNavigate();
  return (
    <div className="mt-5">
      <Container>
        <Row className="justify-content-center icons shadow">
          <Col
            lg="2"
            className="icns justify-content-center"
            onClick={() => {
              navigate("/rent");
            }}>
            <img
              src={house}
              alt="house"
              className="img-fluid mx-auto d-block"
              style={{ marginBottom: "10px" }}
            />
            <h1 className="text-center">Rental Properties</h1>
          </Col>
          <Col lg="2" className="icns justify-content-center">
            <img
              src={cash}
              alt="house"
              className="img-fluid mx-auto d-block"
              style={{ marginBottom: "10px" }}
            />
            <h1 className="text-center">Domestic Assistance</h1>
          </Col>
          <Col lg="2" className="icns justify-content-center">
            <img
              src={furniture}
              alt="house"
              className="img-fluid mx-auto d-block"
              style={{ marginBottom: "10px" }}
            />
            <h1 className="text-center">Basic House Furnishing</h1>
          </Col>
          <Col lg="2" className="icns justify-content-center">
            <img
              src={contact}
              alt="house"
              className="img-fluid mx-auto d-block"
              style={{ marginBottom: "10px" }}
            />
            <h1 className="text-center">ONLINE LISTING AND RENTING</h1>
          </Col>
          <Col lg="2" className="icns justify-content-center">
            <img
              src={kitchen}
              alt="house"
              className="img-fluid mx-auto d-block"
              style={{ marginBottom: "10px" }}
            />
            <h1 className="text-center">Kitchen Utensils</h1>
          </Col>
        </Row>
        <div className="headingContainer">
          <h1>We Save Your Money!!!</h1>
          <div style={{ display: "flex" }}>
            <img src={moneyPic} alt="" height={500} width={500} />

            <div className="midSectionContainer">
              <div className="midSection">
                <img src={img1} alt="" height={150} width={150} />
                <h5> Zero Brokerage</h5>
              </div>
              <div className="midSection">
                <img src={img2} alt="" height={150} width={150} />
                <h5>Pre-Negotiated Rents</h5>
              </div>
              <div className="midSection">
                <img src={img3} alt="" height={150} width={150} />
                <h5> 0 Security Deposit On Furnishing Items</h5>
              </div>
              <div className="midSection">
                <img src={img4} alt="" height={150} width={150} />
                <h5> Most Affordable Furnishing Options</h5>
              </div>
              <div className="midSection">
                <img src={img5} alt="" height={150} width={150} />
                <h5> All Paperwork on Us</h5>
              </div>
              <div className="midSection">
                <img src={img6} alt="" height={150} width={150} />
                <h5> Minimize Risk Of Deduction Of Security Deposit</h5>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default HomeBottom;
