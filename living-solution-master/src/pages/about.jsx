import React from "react";
import NavBar from "../components/navBar";
import About from "../components/about";
import AboutBottom from "../components/aboutdown";
import Footer from "../components/footer";
function AboutPage() {
  return (
    <div>
      <NavBar />
      <About />
      <AboutBottom />
      <Footer />
    </div>
  );
}

export default AboutPage;
