import React from "react";
import baseimg from "../images/services.jpg";
function Services() {
  return (
    <div
      style={{
        backgroundImage: `url(${baseimg})`,
        backgroundSize: "cover",
      }}
    >
      <div className="home d-flex justify-content-center">
        <h1 className="text-center">Services</h1>
      </div>
    </div>
  );
}

export default Services;
