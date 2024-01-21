import axios from "axios";
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import "../styles/list.css";
import { useNavigate } from "react-router-dom";
function List() {
  let name, value;
  const navigate = useNavigate();
  const [country, setCountry] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const [file, setFile] = useState();
  // const [uploaded, setUploaded] = useState(false);
  useEffect(() => {
    const getcountry = async () => {
      const req = await fetch(
        "https://raw.githubusercontent.com/devopsdeveloper1107/Country-state-city-table-in-json/main/tbl_country.json"
      );
      const getres = await req.json();
      setCountry(getres);
    };
    getcountry();
  }, []);

  const handlecountry = (event) => {
    name = event.target.name;
    // const getcoutryid = event.target.key;
    value = event.target.value;
    // setCountryid(getcoutryid);
    setProperty({ ...property, [name]: value });
    event.preventDefault();
  };

  const [property, setProperty] = useState({
    sellerName: "",
    sellerEmail: "",
    sellerMobile: "",
    type: "",
    subtype: "",
    rent: "",
    description: "",
    image: "",
    address: "",
    village: "",
    country: "",
    city: "",
    pincode: "",
  });
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setProperty({ ...property, [name]: value });
  };

  const saveFile = (e) => {
    setFile(e.target.files[0]);
    // console.log(e.target.files[0]);
  };

  const handleImageInput = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", file);

    try {
      const res = await axios.post("http://localhost:8000/upload", formData);
      console.log(formData);
      if (res.status === 200) {
        setProperty({ ...property, image: res.data });
        console.log(document.getElementsByClassName("img-btn")[0]);
        document.getElementsByClassName("img-btn")[0].style.display = "none";
      }
    } catch (err) {
      console.log(err);
    }
  };

  const listProperty = async (e) => {
    e.preventDefault();
    const {
      sellerName,
      sellerEmail,
      sellerMobile,
      type,
      image,
      subtype,
      rent,
      description,
      address,
      village,
      country,
      city,
      pincode,
    } = property;
    // console.log(user);
    const res = await fetch("http://localhost:8000/listProperty", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sellerName,
        sellerEmail,
        sellerMobile,
        type,
        subtype,
        rent,
        image,
        description,
        address,
        village,
        country,
        city,
        pincode,
      }),
    });
    const data = await res.json();

    if (res.status === 201) {
      alert("Successfully Posted");
      navigate("/rent");
    } else {
      alert("Invalid Registration");
    }
  };

  return (
    <div>
      <Alert show={showAlert} variant="success" className="mt-5">
        <Alert.Heading className="text-center">See Console</Alert.Heading>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShowAlert(false)} variant="outline-success">
            Close me
          </Button>
        </div>
      </Alert>
      <Container>
        <Row className="list-page justify-content-center">
          <Col md="6" className="card shadow pb-4">
            <h1 className="text-center list-heading">Rent Your Property</h1>
            <hr />
            <p className="secHeading">Personal Details</p>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  size="sm"
                  type="sellerName"
                  value={property.sellerName}
                  onChange={handleInputs}
                  placeholder="Enter Your Name"
                  name="sellerName"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  size="sm"
                  type="sellerEmail"
                  value={property.sellerEmail}
                  onChange={handleInputs}
                  placeholder="Enter email"
                  name="sellerEmail"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Mobile No.</Form.Label>
                <Form.Control
                  size="sm"
                  type="sellerMobile"
                  value={property.sellerMobile}
                  onChange={handleInputs}
                  placeholder="Enter mobile no."
                  name="sellerMobile"
                />
              </Form.Group>
            </Form>

            <p className="secHeading">Property Details</p>
            <Form>
              <Form.Group className="mb-2 justify-content-between">
                <Form.Label className="mr-3">Property Type:</Form.Label>
                <Form.Select
                  aria-label="Select"
                  className="w-100"
                  name="type"
                  value={property.type}
                  onChange={handleInputs}
                  // placeholder="Select"
                >
                  <option value="">Select Property Type</option>
                  <option value="Flat">Flat/Apartment</option>
                  <option value="Furniture">Furniture</option>
                  <option value="Kitchen">Kitchen Utensil</option>
                  <option value="Services">Services</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-2 justify-content-between">
                <Form.Label className="mr-3">Subtype:</Form.Label>
                {property.type === "" && (
                  <Form.Select
                    aria-label="Select"
                    className="w-100"
                    name="subtype"
                    value={property.subtype}
                    onChange={handleInputs}>
                    <option>Select Property Subtype</option>
                  </Form.Select>
                )}
                {property.type === "Flat" && (
                  <Form.Select
                    aria-label="Select"
                    className="w-100"
                    name="subtype"
                    value={property.subtype}
                    onChange={handleInputs}>
                    <option>Select Property Subype</option>
                    <option value="1 Room Set">1 Room Set</option>
                    <option value="1 BHK Flat">1 BHK</option>
                    <option value="2 BHK Flat">2 BHK</option>
                    <option value="3 BHK Flat">3 BHK</option>
                    <option value="3+ BHK Flat">3+ BHK</option>
                  </Form.Select>
                )}
                {property.type === "Furniture" && (
                  <Form.Select
                    aria-label="Select"
                    className="w-100"
                    name="subtype"
                    value={property.subtype}
                    onChange={handleInputs}>
                    <option>Select Property Subype</option>
                    <option value="Fridge">Frigde</option>
                    <option value="Machine">Washing Machine</option>
                    <option value="Almirah">Almirah</option>
                    <option value="Cooler">Cooler</option>
                  </Form.Select>
                )}
                {property.type === "Kitchen" && (
                  <Form.Select
                    aria-label="Select"
                    className="w-100"
                    name="subtype"
                    value={property.subtype}
                    onChange={handleInputs}>
                    <option>Select Property Subype</option>
                    <option value="Gas Stove">Gas Stove</option>
                    <option value="Gas Cylinder">Gas Cylinder</option>
                    <option value="RO">RO</option>
                    <option value="Oven">Oven</option>
                  </Form.Select>
                )}
                {property.type === "Services" && (
                  <Form.Select
                    aria-label="Select"
                    className="w-100"
                    name="subtype"
                    value={property.subtype}
                    onChange={handleInputs}>
                    <option>Select Property Subtype</option>
                    <option value="Maid">Frigde</option>
                    <option value="Cook">Washing Machine</option>
                    <option value="Laundry">Almirah</option>
                  </Form.Select>
                )}
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Rent (Per month)</Form.Label>
                <Form.Control
                  size="sm"
                  type="rent"
                  value={property.rent}
                  onChange={handleInputs}
                  placeholder="INR"
                  name="rent"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Property Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  type="Description"
                  name="description"
                  value={property.description}
                  onChange={handleInputs}
                  placeholder="Description"
                  className="description-box"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Image Upload:</Form.Label>

                <input
                  type="file"
                  className="img-upload ml-2"
                  onChange={saveFile}
                  name="image"
                />
                {file && (
                  <div className="img-btn">
                    <img
                      alt="not found"
                      width={"100px"}
                      src={URL.createObjectURL(file)}
                    />
                    <button className="ml-1" onClick={handleImageInput}>
                      Upload
                    </button>
                  </div>
                )}
                {property.image !== "" && (
                  <p className="ml-5 upload-text d-inline">
                    Image Uploaded Successfully
                  </p>
                )}
              </Form.Group>
            </Form>

            <p className="secHeading">Property Location</p>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  type="Address"
                  name="address"
                  value={property.address}
                  onChange={handleInputs}
                  placeholder="Address"
                  className="description-box"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Town/Village</Form.Label>
                <Form.Control
                  size="sm"
                  type="Village"
                  value={property.village}
                  onChange={handleInputs}
                  placeholder="Town/village"
                  name="village"
                />
              </Form.Group>
              <Form.Group className="mb-2 justify-content-between">
                <Form.Label className="mr-3">Country</Form.Label>
                <Form.Select
                  aria-label="Select"
                  className="w-100"
                  name="country"
                  value={property.country}
                  onChange={handlecountry}>
                  <option>Select Country</option>
                  {country?.map((getcon) => (
                    <option key={getcon.country_id} value={getcon.country_name}>
                      {getcon.country_name}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
              {property.country === "India" && (
                <Form.Group className="mb-2 justify-content-between">
                  <Form.Label className="mr-3">City</Form.Label>
                  <Form.Select
                    aria-label="Select"
                    className="w-100"
                    name="city"
                    value={property.city}
                    onChange={handleInputs}
                    // placeholder="Select"
                  >
                    <option>Select City</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Agra">Agra</option>
                    <option value="Faridabad">Faridabad</option>
                    <option value="Gurugram">Gurugram</option>
                    <option value="Banglore">Banglore</option>
                    <option value="Chandigarh">Chandigarh</option>
                    <option value="Lucknow">Lucknow</option>
                    <option value="Chennai">Chennai</option>
                  </Form.Select>
                </Form.Group>
              )}
              <Form.Group className="mb-3">
                <Form.Label>Pincode</Form.Label>
                <Form.Control
                  size="sm"
                  type="Pincode"
                  value={property.pincode}
                  onChange={handleInputs}
                  placeholder="pincode"
                  name="pincode"
                />
              </Form.Group>
            </Form>
            <div className="mb-0 d-flex justify-content-center">
              <Button className="login-button" onClick={listProperty}>
                Submit
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default List;
