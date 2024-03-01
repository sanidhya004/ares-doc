import React, { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";

const DrillForm = () => {
  // Static object representing the fields from the API
  const fieldsFromAPI = [
    { label: "Field 1", id: "field1" },
    { label: "Field 2", id: "field2" },
    { label: "Field 3", id: "field3" },
    { label: "Field 4", id: "field4" },
    { label: "Field 5", id: "field5" },
    { label: "Field 6", id: "field6" },
    { label: "Field 7", id: "field7" },
    { label: "Field 8", id: "field8" },
    { label: "Field 9", id: "field9" },
    { label: "Field 10", id: "field10" },
  ];

  // State to store the form data
  const [formData, setFormData] = useState({});

  // Function to handle input changes
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform submission logic here
    console.log("Form data submitted:", formData);
    // Reset the form data if needed
    setFormData({});
  };

  return (
    <>
      <div style={{ fontSize: "20px" }}>
        <h5>NeuroTrainer (Calibration)</h5>
        <span style={{ color: "rgb(178 170 170)", fontSize: "16px" }}>
          Drill 2 of 4
        </span>
      </div>
      <Container>
        <Form onSubmit={handleSubmit}>
          {[...Array(Math.ceil(fieldsFromAPI.length / 2))].map(
            (_, rowIndex) => (
              <Row key={rowIndex}>
                {/* Create two columns for each row */}
                {[0, 1].map((colIndex) => {
                  const fieldIndex = rowIndex * 2 + colIndex;
                  const field = fieldsFromAPI[fieldIndex];
                  if (!field) return null;
                  return (
                    <Col key={field.id} md={6}>
                      <Form.Group controlId={field.id}>
                        <Form.Label>{field.label}</Form.Label>
                        <Form.Control
                          type="text"
                          name={field.id}
                          value={formData[field.id] || ""}
                          onChange={handleInputChange}
                          placeholder="Enter Head"
                        />
                      </Form.Group>
                    </Col>
                  );
                })}
              </Row>
            )
          )}
          {/* Button for completion */}
          <div className="w-100 d-flex mt-4">
            {" "}
            <button
              className="purple-button m-auto"
              type="submit"
              style={{ width: "170px" }}
            >
              Complete
            </button>
          </div>
        </Form>
      </Container>
    </>
  );
};

export default DrillForm;
