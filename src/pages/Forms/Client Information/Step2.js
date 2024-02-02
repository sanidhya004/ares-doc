import { React, useState } from "react";
import { Col, Form, NavLink, Row } from "react-bootstrap";
import DoctorMenu from "../../../components/layout/DoctorMenu";

const Step2 = () => {
  const [formData, setFormData] = useState({
    primarySport: "",
    primarySportLevel: "",
    primarySportDivision: "",
    primarySportPosition1: "",
    primarySportPosition2: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace the console.log
  };
  return (
    <DoctorMenu>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={6}>
            <Form.Group controlId="primarySport">
              <Form.Label className="text-black">Primary Sport</Form.Label>
              <Form.Control
                as="select"
                name="primarySport"
                value={formData.primarySport}
                onChange={handleChange}
              >
                {/* Add options for Primary Sport */}
                <option>Football</option>
                <option>Basketball</option>
                {/* Add more sports as needed */}
              </Form.Control>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="primarySportLevel">
              <Form.Label className="text-black">
                Primary Sport Level
              </Form.Label>
              <Form.Control
                as="select"
                name="primarySportLevel"
                value={formData.primarySportLevel}
                onChange={handleChange}
              >
                {/* Add options for Primary Sport Level */}
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Form.Group controlId="primarySport">
              <Form.Label className="text-black">Primary Sport</Form.Label>
              <Form.Control
                as="select"
                name="primarySport"
                value={formData.primarySport}
                onChange={handleChange}
              >
                {/* Add options for Primary Sport */}
                <option>Football</option>
                <option>Basketball</option>
                {/* Add more sports as needed */}
              </Form.Control>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="primarySportLevel">
              <Form.Label className="text-black">
                Primary Sport Level
              </Form.Label>
              <Form.Control
                as="select"
                name="primarySportLevel"
                value={formData.primarySportLevel}
                onChange={handleChange}
              >
                {/* Add options for Primary Sport Level */}
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Form.Group controlId="primarySportDivision">
              <Form.Label className="text-black">
                Primary Sport Division
              </Form.Label>
              <Form.Control
                as="select"
                name="primarySportDivision"
                value={formData.primarySportDivision}
                onChange={handleChange}
              >
                {/* Add options for Primary Sport Division */}
                <option>Division A</option>
                <option>Division B</option>
                {/* Add more divisions as needed */}
              </Form.Control>
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group controlId="primarySportPosition1">
              <Form.Label className="text-black">
                Primary Sport Position 1
              </Form.Label>
              <Form.Control
                as="select"
                name="primarySportPosition1"
                value={formData.primarySportPosition1}
                onChange={handleChange}
              >
                <option>Position 1A</option>
                <option>Position 1B</option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          {" "}
          <Col>
            <Form.Group controlId="primarySportPosition2">
              <Form.Label className="text-black">
                Primary Sport Position 2
              </Form.Label>
              <Form.Control
                as="select"
                name="primarySportPosition2"
                value={formData.primarySportPosition2}
                onChange={handleChange}
              >
                <option>Position 2A</option>
                <option>Position 2B</option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>

        <NavLink
          type="submit"
          className="purple-button"
          style={{ width: "200px" }}
          to="/step3"
        >
          Next
        </NavLink>
      </Form>
    </DoctorMenu>
  );
};

export default Step2;
