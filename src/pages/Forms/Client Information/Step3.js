import { React, useState } from "react";
import { Col, Form, NavLink, Row } from "react-bootstrap";
import DoctorMenu from "../../../components/layout/DoctorMenu";

const Step3 = () => {
  const [formData, setFormData] = useState({
    secondarySport: "",
    secondarySportLevel: "",
    secondarySportDivision: "",
    secondarySportPosition1: "",
    secondarySportPosition2: "",
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
            <Form.Group controlId="secondarySport">
              <Form.Label className="text-black">Secondary Sport</Form.Label>
              <Form.Control
                as="select"
                name="secondarySport"
                value={formData.secondarySport}
                onChange={handleChange}
              >
                {/* Add options for secondary Sport */}
                <option>Football</option>
                <option>Basketball</option>
                {/* Add more sports as needed */}
              </Form.Control>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="secondarySportLevel">
              <Form.Label className="text-black">
                Secondary Sport Level
              </Form.Label>
              <Form.Control
                as="select"
                name="secondarySportLevel"
                value={formData.secondarySportLevel}
                onChange={handleChange}
              >
                {/* Add options for secondary Sport Level */}
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Form.Group controlId="secondarySport">
              <Form.Label className="text-black">Secondary Sport</Form.Label>
              <Form.Control
                as="select"
                name="secondarySport"
                value={formData.secondarySport}
                onChange={handleChange}
              >
                {/* Add options for secondary Sport */}
                <option>Football</option>
                <option>Basketball</option>
                {/* Add more sports as needed */}
              </Form.Control>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="secondarySportLevel">
              <Form.Label className="text-black">
                Secondary Sport Level
              </Form.Label>
              <Form.Control
                as="select"
                name="secondarySportLevel"
                value={formData.secondarySportLevel}
                onChange={handleChange}
              >
                {/* Add options for secondary Sport Level */}
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Form.Group controlId="secondarySportDivision">
              <Form.Label className="text-black">
                Secondary Sport Division
              </Form.Label>
              <Form.Control
                as="select"
                name="secondarySportDivision"
                value={formData.secondarySportDivision}
                onChange={handleChange}
              >
                {/* Add options for secondary Sport Division */}
                <option>Division A</option>
                <option>Division B</option>
                {/* Add more divisions as needed */}
              </Form.Control>
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group controlId="secondarySportPosition1">
              <Form.Label className="text-black">
                Secondary Sport Position 1
              </Form.Label>
              <Form.Control
                as="select"
                name="secondarySportPosition1"
                value={formData.secondarySportPosition1}
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
            <Form.Group controlId="secondarySportPosition2">
              <Form.Label className="text-black">
                Secondary Sport Position 2
              </Form.Label>
              <Form.Control
                as="select"
                name="secondarySportPosition2"
                value={formData.secondarySportPosition2}
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

export default Step3;
