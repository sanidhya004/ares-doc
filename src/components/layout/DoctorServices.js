import React, { useEffect, useState } from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const DoctorServices = () => {
  const [selectedService, setSelectedService] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleServiceChange = (service) => {
    setSelectedService(service);
  };
  const { isFetching } = useSelector((state) => state.auth);

  // after checking new and existing athelete selection ,this client_id is athelete_id basically
  useEffect(() => {
    const clientId = localStorage.getItem("client_id");
    if (!clientId) {
      // Redirect to a different page (e.g., login page)
      navigate("/doctor/dashboard"); // Change the route as needed
    }
  }, [navigate]);

  const handleSubmit = () => {
    if (!selectedService) {
      alert("Please select a service.");
      return;
    }
    localStorage.setItem("selectedService", selectedService);
    switch (selectedService) {
      case "SportsVision":
        // Logic for SportsVision service

        navigate("/doctor/dashboard/appointment");
        break;

      case "TrainingSessions":
        // alert("hi");
        // Logic for TrainingSessions service
        // You can navigate or perform other actions specific to this service
        navigate("/doctor/dashboard/doctor-service-selection/training");
        break;

      case "ConcussionEval":
        // Logic for ConcussionEval service
        navigate("/doctor/dashboard/appointment");

        // You can navigate or perform other actions specific to this service
        break;

      case "MedicalOfficeVisit":
        // Logic for MedicalOfficeVisit service
        navigate("/doctor/dashboard/appointment");

        // You can navigate or perform other actions specific to this service
        break;

      case "Consultation":
        // Logic for Consultation service
        navigate("/doctor/dashboard/appointment");

        // You can navigate or perform other actions specific to this service
        break;

      default:
        // Handle any other cases or provide a default action
        break;
    }

    // Add any common logic needed after handling specific service cases
    console.log("Selected Service:", selectedService);
  };

  return (
    <>
      <section
        className="text-center d-flex flex-column justify-content-center align-items-center doctor-service-container "
        style={{ gap: "3vh", width: "40%" }}
      >
        <img src="/images/areseliteLogo.png" width={100} alt="logo" />
        <h5>Select type of Service</h5>

        <Form className="d-flex flex-wrap justify-content-center ">
          <label
            htmlFor="sportsVision"
            className={`radio-label ${
              selectedService === "SportsVision" ? "checked" : ""
            }`}
          >
            Sports Vision Performance Evaluation - In Office
            <input
              type="radio"
              name="SportsVision"
              id="sportsVision"
              onChange={() => handleServiceChange("SportsVision")}
              checked={selectedService === "SportsVision"}
            />
          </label>
          <label
            htmlFor="trainingSessions"
            className={`radio-label ${
              selectedService === "TrainingSessions" ? "checked" : ""
            }`}
          >
            Training Sessions
            <input
              type="radio"
              name="TrainingSessions"
              id="trainingSessions"
              onChange={() => handleServiceChange("TrainingSessions")}
              checked={selectedService === "TrainingSessions"}
            />
          </label>
          <label
            htmlFor="concussionEval"
            className={`radio-label ${
              selectedService === "ConcussionEval" ? "checked" : ""
            }`}
          >
            Post-Concussion Evaluation
            <input
              type="radio"
              name="ConcussionEval"
              id="concussionEval"
              onChange={() => handleServiceChange("ConcussionEval")}
              checked={selectedService === "ConcussionEval"}
            />
          </label>
          <label
            htmlFor="medicalOfficeVisit "
            className={`radio-label ${
              selectedService === "MedicalOfficeVisit" ? "checked" : ""
            }`}
          >
            Medical/Office Visit
            <input
              type="radio"
              name="MedicalOfficeVisit"
              id="medicalOfficeVisit"
              onChange={() => handleServiceChange("MedicalOfficeVisit")}
              checked={selectedService === "MedicalOfficeVisit"}
            />
          </label>
          <label
            htmlFor="consultation"
            className={`radio-label  ${
              selectedService === "Consultation" ? "checked" : ""
            }`}
          >
            Consultation Call
            <input
              type="radio"
              name="Consultation"
              id="consultation"
              onChange={() => handleServiceChange("Consultation")}
              checked={selectedService === "Consultation"}
            />
          </label>
          {/* <Form.Check
            type="radio"
            name="SportsVision"
            id="sportsVision"
            label="Sports Vision Performance Evaluation - In Office"
            onChange={() => handleServiceChange("SportsVision")}
            checked={selectedService === "SportsVision"}
            className={`doctor-services ${
              selectedService === "SportsVision" ? "checked" : ""
            }`}
          />

          <Form.Check
            type="radio"
            name="TrainingSessions"
            id="trainingSessions"
            label="Training Sessions"
            onChange={() => handleServiceChange("TrainingSessions")}
            checked={selectedService === "TrainingSessions"}
            className={`doctor-services ${
              selectedService === "TrainingSessions" ? "checked" : ""
            }`}
          />
          <Form.Check
            type="radio"
            name="ConcussionEval"
            id="concussionEval"
            label="Post-Concussion Evaluation"
            onChange={() => handleServiceChange("ConcussionEval")}
            checked={selectedService === "ConcussionEval"}
            className={`doctor-services ${
              selectedService === "ConcussionEval" ? "checked" : ""
            }`}
          />
          <Form.Check
            type="radio"
            name="MedicalOfficeVisit"
            id="medicalOfficeVisit"
            label="Medical/Office Visit"
            onChange={() => handleServiceChange("MedicalOfficeVisit")}
            checked={selectedService === "MedicalOfficeVisit"}
            className={`doctor-services ${
              selectedService === "MedicalOfficeVisit" ? "checked" : ""
            }`}
          />
          <Form.Check
            type="radio"
            name="Consultation"
            id="consultation"
            label="Consultation Call"
            onChange={() => handleServiceChange("Consultation")}
            checked={selectedService === "Consultation"}
            className={`doctor-services ${
              selectedService === "Consultation" ? "checked" : ""
            }`}
          /> */}
        </Form>
        {isFetching ? (
          <button className="purple-button c-b">
            <Spinner animation="border" variant="light" />
          </button>
        ) : (
          <Button
            onClick={handleSubmit}
            className="purple-button"
            style={{ width: "332px", height: "62px" }}
            disabled={!selectedService}
          >
            Continue
          </Button>
        )}
      </section>
    </>
  );
};

export default DoctorServices;
