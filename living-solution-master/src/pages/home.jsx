import React from "react";
import NavBar from "../components/navBar";
import Home from "../components/homeTop";
import HomeBottom from "../components/homebottom";
import Footer from "../components/footer";
import ContactUs from "../components/contactUs";

function HomePage() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <HomeBottom />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default HomePage;
