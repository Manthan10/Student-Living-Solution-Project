import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

import "../styles/login.css";
import { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";

function LoginForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitLogin = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:8000/login", {
      // mode: "cors",
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    // const data = res.json();
    // console.log(res.status);
    if (res.status === 201) {
      alert("Login Successful");
      console.log(res.cookie);
      navigate("/");
    } else {
      alert("Invalid credentials");
    }
  };
  return (
    <Container className="login-page">
      <Row className="justify-content-center">
        <Col md="4" className="card shadow p-4">
          <h1 className="text-center login-heading">LOGIN</h1>
          <hr />
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </Form.Group>
            <div className="mb-0 d-flex justify-content-center">
              <Button className="mx-auto login-button" onClick={submitLogin}>
                Submit
              </Button>
            </div>
            <a
              href="/forgetpassword"
              className="forget mx-auto text-center d-block mb-0">
              Forgot Your Password ?
            </a>
            <NavLink
              to="/signup"
              className="forget mx-auto text-center d-block">
              New User ? Register
            </NavLink>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default LoginForm;
