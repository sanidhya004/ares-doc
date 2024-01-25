import React, { useEffect, useState } from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { VerifyAthelete } from "../../features/apiCall";
import "../../styles/modal.css";
import BootstrapModal from "./Components/BootstrapModal";

const DoctorSelectUser = () => {
  const { isFetching } = useSelector((state) => state.auth);
  const [selectedUserType, setSelectedUserType] = useState("");
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    localStorage.removeItem("selectedService");
    localStorage.removeItem("client_id");
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission
    if (selectedUserType === "New") {
      navigate("/doctor/dashboard/client_form");
    } else if (selectedUserType === "Existing") {
      console.log("modal opened for verification");
      setShowModal(true);
    }
  };

  const handleUserTypeChange = (event) => {
    setSelectedUserType(event.target.value);
  };

  const handleVerification = async (email) => {
    console.log(email);
    try {
      const success = await VerifyAthelete(dispatch, { email });
      if (success) {
        navigate("/doctor/dashboard/doctor-service-selection");
      }
    } catch (error) {
      alert(error);
    }
    setShowModal(false); // Close the modal after verification
  };

  return (
    <>
      <section
        className="text-center d-flex flex-column justify-content-center align-items-center select-user"
        style={{ gap: "3vh", width: "40%" }}
      >
        <img src="/images/areseliteLogo.png" width={100} alt="logo" />
        <h5>Please select Type of user</h5>
        <Form
          className="d-flex flex-wrap justify-content-center "
          style={{ gap: "24px" }}
          onSubmit={handleSubmit}
        >
          <Form.Check
            type="radio"
            id="newUser"
            label="New"
            value="New"
            checked={selectedUserType === "New"}
            onChange={handleUserTypeChange}
            className={`doctor-user ${
              selectedUserType === "New" ? "checked" : ""
            }`}
          />

          <Form.Check
            type="radio"
            id="existingUser"
            label="Existing"
            value="Existing"
            checked={selectedUserType === "Existing"}
            onChange={handleUserTypeChange}
            className={`doctor-user ${
              selectedUserType === "Existing" ? "checked" : ""
            }`}
          />

          <Button
            type="submit"
            className="purple-button "
            style={{ width: "332px", height: "62px" }}
            disabled={!selectedUserType}
          >
            Continue
          </Button>
        </Form>
      </section>
      <BootstrapModal
        showModal={showModal}
        handleClose={() => setShowModal(false)}
        modalTitle={"Please enter email to verify"}
        modalContent={
          <ModalContent
            handleClose={() => setShowModal(false)}
            handleVerification={handleVerification}
          />
        }
        className="verification-athelete"
      />
    </>
  );
};

export default DoctorSelectUser;
const ModalContent = ({ handleClose, handleVerification }) => {
  const [email, setEmail] = useState("");
  const { isFetching } = useSelector((state) => state.auth);
  const handleSubmit = (e) => {
    e.preventDefault();
    handleVerification(email);
  };

  return (
    <section>
      <Form onSubmit={handleSubmit}>
        <Form.Control
          type="email"
          name="email"
          placeholder="Enter Existing Email ID"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          className="mb-3 "
        />
        <button type="button" onClick={handleClose} className="bt-2 w-25">
          Close
        </button>

        <button type="submit" className="bt-2 w-25 bt-3">
          {isFetching ? (
            <>
              <Spinner size="sm" animation="border" />
            </>
          ) : (
            <>Verify</>
          )}
        </button>
      </Form>
    </section>
  );
};
