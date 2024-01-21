import React from "react";
import { Button, Row, Col } from "react-bootstrap";
import "../styles/home.css";
import baseimg from "../images/home.jpg";

function Home() {
  return (
    <div
      style={{
        backgroundImage: `url(${baseimg})`,
        backgroundSize: "cover",
      }}>
      <div className="home d-flex justify-content-center">
        <Col md="6" className="home-text">
          <h2 className="text-center">
            <strong>ONE STOP SOLUTION FOR ALL YOUR RENTING</strong>
          </h2>
          <h3 className="text-center mt-2">
            hassle free real estate and furniture renting at ease
          </h3>
          <Button className="mt-2 btn-light" href="/rent">
            Rent Now
          </Button>
        </Col>
      </div>
    </div>
  );
}

export default Home;
