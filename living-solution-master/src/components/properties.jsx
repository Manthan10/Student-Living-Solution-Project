import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Container, Card, Row, Col, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import NavBar from "./navBar";

function Properties() {
  const { id } = useParams();
  // const [properties, setProperties] = useState([]);
  const [property, setProperty] = useState({});

  const [user, setUser] = useState({});
  // const [checkUser, setCheckUser] = useState(false);
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
        // setCheckUser(true);
      }
    } catch (err) {
      console.log(err);
      // setCheckUser(false);
      // history("/login");
    }
  };

  useEffect(() => {
    checkLogin();
  }, []);

  useEffect(() => {
    const getProperties = async (req, res) => {
      res = await axios.get("http://localhost:8000/properties");
      setProperty(
        res.data.find((obj) => {
          return obj._id === id;
        })
      );
    };
    getProperties();
  }, [id]);
  console.log(property);

  const [details, setDetails] = useState(false);

  return (
    <div className="pt-5">
      <NavBar />
      <Container>
        <Card className="shadow mt-5 p-3">
          <h3 className="border-bottom">
            {property.type} {property.subtype}
          </h3>
          <Row>
            <Col md="4">
              <div>
                <img
                  src={`../images/${property.image}`}
                  alt={property.type}
                  className="img-fluid"
                />
              </div>
            </Col>
            <Col md="6">
              <p>
                <strong> Rent : </strong> ₹ {property.rent}
              </p>
              <p>
                <strong> Description : </strong> {property.description}
              </p>
              <p>
                <strong> Country : </strong> {property.country}
              </p>
              <p>
                <strong> Town/Village : </strong> {property.village}
              </p>
              <p>
                <strong> Address : </strong> {property.address}
              </p>
              <p>
                <strong> Pincode : </strong> {property.pincode}
              </p>
            </Col>
          </Row>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
            <Button
              style={{
                margin: "20px 0",
              }}
              onClick={() => {
                setDetails(!details);
              }}>
              Get Owner Details
            </Button>
          </div>
          {details && (
            <div>
              <p className="text-center">
                <strong> Name : </strong> {property.sellerName}
              </p>
              <p className="text-center">
                <strong> Mail id : </strong> {property.sellerEmail}
              </p>
              <p className="text-center">
                <strong> Contact no. : </strong> {property.sellerMobile}
              </p>
            </div>
          )}
        </Card>
      </Container>
    </div>
  );
}

export default Properties;
