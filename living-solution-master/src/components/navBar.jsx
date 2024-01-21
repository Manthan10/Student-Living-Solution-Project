import React, { useState, useEffect } from "react";
import { Navbar, Nav, Row, Col } from "react-bootstrap";
import brand from "../images/brand.png";
import "../styles/navBar.css";
import { AiOutlineUser } from "react-icons/ai";
import Dropdown from "react-bootstrap/Dropdown";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const history = useNavigate();
  const [user, setUser] = useState({});
  const [checkUser, setCheckUser] = useState(false);
  const checkLogin = async () => {
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

      if (!res.status === 200) {
        throw new Error(res.error);
      } else {
        setUser(data);
        setCheckUser(true);
      }
    } catch (err) {
      console.log(err);
      setCheckUser(false);
      // history("/login");
    }
  };

  useEffect(() => {
    checkLogin();
  }, []);

  const logOut = async () => {
    try {
      const res = await fetch("http://localhost:8000/logout", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      history("/");
      window.location.reload(true);
      if (!res.status === 200) {
        throw new Error(res.error);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Navbar collapseOnSelect expand="lg" bg="white" variant="light">
      <Navbar.Brand href="/">
        <img src={brand} alt="Brand" className="imgFluid" />
      </Navbar.Brand>

      <Col>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href=".." className="text-primary mr-4 mt-2">
              Home
            </Nav.Link>
            <Nav.Link href="Services" className="text-primary mr-4 mt-2">
              Services
            </Nav.Link>
            <Nav.Link href="about" className="text-primary mt-2">
              About Us
            </Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <Nav.Link href="list" className="mt-1 butons">
              List Your Property
            </Nav.Link>
            {!checkUser && (
              <Nav.Link href="login" className="mx-2 mt-1 butons">
                Login
              </Nav.Link>
            )}
            {checkUser && (
              <Dropdown className="mt-1 ml-2 mr-2">
                <Dropdown.Toggle id="dropdown-basic" className="dd">
                  <AiOutlineUser />
                  Hi, {user.name}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="/profile">My Profile</Dropdown.Item>
                  <Dropdown.Item onClick={logOut}>Logout</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Col>
    </Navbar>
  );
}
export default NavBar;
