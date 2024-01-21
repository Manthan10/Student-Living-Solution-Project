import React from "react";
import Footer from "../components/footer";
import NavBar from "../components/navBar";
import Services from "../components/services";
import ServicesBottom from "../components/servicesBottom";
function ServicesPage() {
  return (
    <div className="App">
      <NavBar />
      <Services />
      <ServicesBottom />
      <Footer />
    </div>
  );
}

export default ServicesPage;
