import React from "react";
import baseimg from "../images/backgrounds/rent.webp";
import "../styles/rent.css";

// import about1 from "../images/ICONS/about-1.png";
// import { Row, Col } from "react-bootstrap";

function RentTop() {
  return (
    <div
      style={{
        backgroundImage: `url(${baseimg})`,
        backgroundSize: "cover",
      }}
    >
      <div className="home d-flex justify-content-center">
        <h1 className="text-center rent-heading">Rent Properties</h1>
      </div>
    </div>
  );
}

export default RentTop;
