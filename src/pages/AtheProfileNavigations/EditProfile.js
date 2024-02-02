import React, { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import AtheProfileLayout from "../../components/layout/AtheProfileLayout";

const EditProfile = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    surname: "",
    city: "",
    state: "",
    dob: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    // Assuming you have an API endpoint to handle profile updates
    // You can make a fetch or axios call here to send the updated data
    // to your backend.
    console.log("Form data submitted:", formData);
    // Add your API call logic here
  };
  return (
    <AtheProfileLayout>
      <h4 className="m-2 grey mb-4">Edit Profile</h4>
      <Container>
        <form onSubmit={handleSubmit} className="edit-form ">
          <Row>
            <Col>
              <h6>Personal</h6>

              <Row>
                <Col sm={6}>
                  <Form.Group>
                    <Form.Label>First Name:</Form.Label>
                    <Form.Control
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
                <Col sm={6}>
                  <Form.Group>
                    <Form.Label>Surname:</Form.Label>
                    <Form.Control
                      type="text"
                      name="surname"
                      value={formData.surname}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label>City:</Form.Label>
                    <Form.Control
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label>State:</Form.Label>
                    <Form.Control
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label>Date of Birth:</Form.Label>
                    <Form.Control
                      type="text"
                      name="dob"
                      value={formData.dob}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
              </Row>
            </Col>
            <Col>
              {" "}
              <h6>Contact</h6>
              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label>Email:</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Form.Group>
                  <Form.Label>Phone no:</Form.Label>
                  <Form.Control
                    type="number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Row>
              {/* <row className="d-flex justify-content-center">
                <button
                  type="submit"
                  className="purple-button w-25 mt-3 align-self-center"
                >
                  Submit
                </button>
              </row> */}
            </Col>
          </Row>
          <row className="d-flex justify-content-center">
            <button
              type="submit"
              className="purple-button w-25 mt-3 align-self-center"
            >
              Submit
            </button>
          </row>
        </form>
      </Container>
    </AtheProfileLayout>
  );
};

export default EditProfile;
