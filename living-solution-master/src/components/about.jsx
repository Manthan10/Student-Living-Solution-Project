import React from "react";
import baseimg from "../images/backgrounds/cabinets.webp";
// import about1 from "../images/ICONS/about-1.png";
// import { Row, Col } from "react-bootstrap";

function About() {
  return (
    <div
      style={{
        backgroundImage: `url(${baseimg})`,
        backgroundSize: "cover",
      }}
    >
      <div className="home d-flex justify-content-center">
        <h1 className="text-center">About</h1>
      </div>
    </div>
  );
}

export default About;
