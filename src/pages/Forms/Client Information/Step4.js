import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import DoctorMenu from "../../../components/layout/DoctorMenu";

const Step4 = () => {
  const [formData, setFormData] = useState({
    correctiveEyewear: "",
    currentCorrectionType: "",
    eyeSurgery: "",
    concussionRecency: "",
    concussionAmount: "",
    eyeExamLastYear: "",
    chiefComplaints: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <DoctorMenu>
      {" "}
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={6}>
            <Form.Group controlId="correctiveEyewear">
              <Form.Label className="text-black">Corrective Eyewear</Form.Label>
              <Form.Control
                as="select"
                name="correctiveEyewear"
                value={formData.correctiveEyewear}
                onChange={handleChange}
              >
                <option value="">Select</option>
                {/* Add your options for corrective eyewear */}
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="eyeSurgery">
              <Form.Label className="text-black">Eye Surgery</Form.Label>
              <Form.Control
                as="select"
                name="eyeSurgery"
                value={formData.eyeSurgery}
                onChange={handleChange}
              >
                <option value="">Select</option>
                {/* Add your options for eye surgery */}
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="concussionAmount">
              <Form.Label className="text-black">Concussion Amount</Form.Label>
              <Form.Control
                as="select"
                name="concussionAmount"
                value={formData.concussionAmount}
                onChange={handleChange}
              >
                <option value="">Select</option>
                {/* Add your options for concussion amount */}
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="chiefComplaints">
              <Form.Label className="text-black">Chief Complaints</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter chief complaints"
                name="chiefComplaints"
                value={formData.chiefComplaints}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group controlId="currentCorrectionType">
              <Form.Label className="text-black">
                Current Correction Type
              </Form.Label>
              <Form.Control
                as="select"
                name="currentCorrectionType"
                value={formData.currentCorrectionType}
                onChange={handleChange}
              >
                <option value="">Select</option>
                {/* Add your options for current correction type */}
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="concussionRecency">
              <Form.Label className="text-black">Concussion Recency</Form.Label>
              <Form.Control
                as="select"
                name="concussionRecency"
                value={formData.concussionRecency}
                onChange={handleChange}
              >
                <option value="">Select</option>
                {/* Add your options for concussion recency */}
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="eyeExamLastYear">
              <Form.Label className="text-black">Eye Exam Last Year</Form.Label>
              <Form.Control
                as="select"
                name="eyeExamLastYear"
                value={formData.eyeExamLastYear}
                onChange={handleChange}
              >
                <option value="">Select</option>
                {/* Add your options for eye exam last year */}
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>

        <Button type="submit">Submit</Button>
      </Form>
    </DoctorMenu>
  );
};

export default Step4;
