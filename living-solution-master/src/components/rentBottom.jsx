import React from "react";
import "../styles/rent.css";
import { useEffect, useState } from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function RentBottom() {
  const navigate = useNavigate();
  const [properties, setProperties] = useState([]);
  useEffect(() => {
    const getProperties = async (req, res) => {
      res = await axios.get("http://localhost:8000/properties");
      setProperties(res.data);
    };

    getProperties();
  }, []);

  return (
    <div className="mt-3">
      <h1 className="about-heading ml-3 border-bottom">Properties to Rent</h1>

      <Container>
        <Row>
          {properties.map((property) => (
            <Col lg="4" md="6" sm="12">
              <Card
                className="shadow mt-5 mb-3 property-card"
                onClick={() => {
                  navigate(`/properties/${property._id}`);
                }}>
                <div>
                  <Row>
                    <Col className="p_img border-bottom mb-2 mx-auto">
                      <img
                        src={`./images/${property.image}`}
                        alt={property.type}
                        className="img-fluid"
                      />
                    </Col>
                  </Row>
                </div>
                <h2 className="text-center services-text border-bottom mx-2">
                  {property.subtype}
                </h2>
                <p className="services-text mx-3 mb-0 mt-1">
                  <strong> Location :</strong> {property.village}
                </p>
                <p className="services-text mx-3 mt-0">
                  <strong> Rent :</strong> INR {property.rent}
                </p>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default RentBottom;
