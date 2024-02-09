import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import HomeLayout from "../Components/HomeLayout";
import DoctorInOffice from "./DoctorInOffice.js";
import DoctorMonthlyPlans from "./DoctorPlans_Monthly_Package";

const DoctorTrainingServices = () => {
  const navigate = useNavigate();
  const { isFetching } = useSelector((state) => state.auth);
  const [showDoctorInOffice, setShowDoctorInOffice] = useState(false);
  const [selectedTrainingType, setSelectedTrainingType] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowDoctorInOffice(true);
  };

  const handleTrainingTypeChange = (event) => {
    setSelectedTrainingType(event.target.value);
  };
  useEffect(() => {
    const storedSelectedService = localStorage.getItem("selectedService");
    const clientId = localStorage.getItem("client_id");
    if (storedSelectedService && clientId) {
    } else {
      // If empty, navigate to the desired page
      navigate("/doctor/dashboard/doctor-service-selection");
    }
  }, []);

  return (
    <HomeLayout>
      {showDoctorInOffice ? (
        <>
          {selectedTrainingType == "InOffice" ? (
            <>
              <DoctorInOffice navigate={navigate} />
            </>
          ) : (
            <>
              {" "}
              <DoctorMonthlyPlans navigate={navigate} type="Tele" />
            </>
          )}
        </>
      ) : (
        <>
          {" "}
          <section
            className="text-center d-flex flex-column justify-content-center align-items-center select-user"
            style={{ gap: "3vh", width: "40%" }}
          >
            <img src="/images/areseliteLogo.png" width={100} alt="logo" />
            <h5>Please select Type of Training</h5>
            <Form
              className="d-flex flex-wrap justify-content-center "
              style={{ gap: "24px" }}
              onSubmit={handleSubmit}
            >
              {/* <Form.Check
                type="radio"
                id="inOfficeUser"
                label="In Office"
                value="InOffice"
                checked={selectedTrainingType === "InOffice"}
                onChange={handleTrainingTypeChange}
                className={`doctor-user ${
                  selectedTrainingType === "InOffice" ? "checked" : ""
                }`}
              />
              <Form.Check
                type="radio"
                id="teleSessionsUser"
                label="Tele Sessions"
                value="TeleSessions"
                checked={selectedTrainingType === "TeleSessions"}
                onChange={handleTrainingTypeChange}
                className={`doctor-user ${
                  selectedTrainingType === "TeleSessions" ? "checked" : ""
                }`}
              />{" "} */}
              <div className="radio-container">
                <label
                  htmlFor="inOfficeUser"
                  className={`radio-label ${
                    selectedTrainingType === "InOffice" ? "checked" : ""
                  }`}
                >
                  <input
                    type="radio"
                    id="inOfficeUser"
                    value="InOffice"
                    checked={selectedTrainingType === "InOffice"}
                    onChange={handleTrainingTypeChange}
                  />
                  In Office
                </label>

                <label
                  htmlFor="teleSessionsUser"
                  className={`radio-label ${
                    selectedTrainingType === "TeleSessions" ? "checked" : ""
                  }`}
                >
                  <input
                    type="radio"
                    id="teleSessionsUser"
                    value="TeleSessions"
                    checked={selectedTrainingType === "TeleSessions"}
                    onChange={handleTrainingTypeChange}
                  />
                  Tele Sessions
                </label>
              </div>
              <Button
                type="submit"
                className="purple-button "
                style={{ width: "332px", height: "62px" }}
                disabled={!selectedTrainingType}
              >
                Continue
              </Button>
            </Form>
          </section>
        </>
      )}
    </HomeLayout>
  );
};

export default DoctorTrainingServices;
