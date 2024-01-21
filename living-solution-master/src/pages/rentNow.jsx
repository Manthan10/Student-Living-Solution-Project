import React from "react";
import NavBar from "../components/navBar";
import RentTop from "../components/renttop";
import Footer from "../components/footer";
import RentBottom from "../components/rentBottom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function RentPage() {
  const history = useNavigate();

  const callRentPage = async () => {
    try {
      const res = await fetch("http://localhost:8000/about", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();
      console.log(data);

      if (!res.status === 200) {
        throw new Error(res.error);
      }
    } catch (err) {
      console.log(err);
      history("/login");
    }
  };

  useEffect(() => {
    callRentPage();
  }, []);

  return (
    <div>
      <NavBar />
      <RentTop />
      {/* <AboutBottom /> */}
      <RentBottom />
      <Footer />
    </div>
  );
}

export default RentPage;
