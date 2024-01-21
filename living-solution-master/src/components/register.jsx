import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "../styles/login.css";

function Register() {
  const history = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
  });
  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
    // console.log(user, value);
  };
  const postData = async (e) => {
    e.preventDefault();
    const { name, email, mobile, password } = user;
    // console.log(user);
    const res = await fetch("http://localhost:8000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        mobile,

        password,
      }),
    });
    const data = await res.json();

    if (data.status === 201) {
      alert("Successfully Registration");
      console.log("Successfully Reggistration", data);
      history("/login");
    } else {
      alert(data.message);
      console.log(data.message);
    }
  };

  return (
    <Container>
      <Row
        className="login-page justify-content-center shadow p-4"
        style={{ border: "1px solid silver", borderRadius: "8px" }}>
        <h1 className="text-center login-heading">Sign Up</h1>
        <hr />
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              size="sm"
              type="name"
              value={user.name}
              onChange={handleInputs}
              placeholder="Enter Your Name"
              name="name"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              size="sm"
              type="email"
              value={user.email}
              onChange={handleInputs}
              placeholder="Enter email"
              name="email"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Mobile No.</Form.Label>
            <Form.Control
              size="sm"
              type="mobile"
              value={user.mobile}
              onChange={handleInputs}
              placeholder="Enter monile no."
              name="mobile"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              size="sm"
              type="password"
              value={user.password}
              onChange={handleInputs}
              placeholder="Password"
              name="password"
            />
          </Form.Group>
          <div className="mb-0 d-flex justify-content-center">
            <Button className="login-button" onClick={postData}>
              Register
            </Button>
          </div>
          <br />

          <NavLink to="/login" className="forget mx-auto text-center d-block">
            Already Registered? Login
          </NavLink>
        </Form>
      </Row>
    </Container>
  );
}

export default Register;
