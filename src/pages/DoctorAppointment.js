import React, { useEffect, useState } from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import BootstrapModal from "../components/layout/Components/BootstrapModal";
import DoctorMenu from "../components/layout/DoctorMenu";
import DoctorTodayAppointment from "../components/layout/DoctorTodayAppointment";
import { appointment } from "../features/apiCall";

const DoctorAppointment = () => {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState("");
  const { isFetching } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [formValid, setFormValid] = useState(false);
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    selectedDoctor: "",
    selectedLocation: "",
  });
  const ErrorToastOptions = {
    position: "bottom-center",
    autoClose: 3000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Form Data:", formData);

    // Validate form data
    if (
      !formData.date ||
      !formData.time ||
      !formData.selectedDoctor ||
      (selectedService !== "Consultation" && !formData.selectedLocation)
    ) {
      toast.error("Please fill in all details.", ErrorToastOptions);
      return;
    }
    setFormValid(true);
    console.log("Form Data2:", formData);
    try {
      const success = await appointment(dispatch, formData);
      if (success) {
        setShowModal(true);
      }
    } catch (error) {
      toast.error("Unexpected Error", ErrorToastOptions);
    }
  };
  const handleClose = () => {
    setShowModal(false);

    // Redirect to a new page after 2 seconds (adjust the timeout duration as needed)
    // setTimeout(() => {
    navigate("/doctor/dashboard/doctor-service-selection");
    localStorage.removeItem("selectedService");
    // }, 200);
  };

  useEffect(() => {
    // Check if selectedService is empty in localStorage
    const storedSelectedService = localStorage.getItem("selectedService");
    const clientId = localStorage.getItem("client_id");
    if (storedSelectedService && clientId) {
      setSelectedService(storedSelectedService);
    } else {
      // If empty, navigate to the desired page
      navigate("/doctor/dashboard/doctor-service-selection");
    }
  }, [navigate]);

  return (
    <DoctorMenu>
      <div className="d-flex Doctor-Consul justify-between ">
        <section className="appo-cont">
          <Form onSubmit={handleSubmit} className="appo-cont-form">
            <Form.Group controlId="formDate" className="mb-3">
              <Form.Label>Appointment Date</Form.Label>
              <Form.Control
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formTime" className="mb-3">
              <Form.Label>Appointment Time</Form.Label>
              <Form.Control
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formDoctor" className="mb-3">
              <Form.Label>Select Trainer/Doctor</Form.Label>
              <Form.Control
                as="select"
                name="selectedDoctor"
                value={formData.selectedDoctor}
                onChange={handleChange}
              >
                <option value="">Select a Trainer/Doctor</option>
                <option value="Dr. LaPlaca">Dr. LaPlaca</option>{" "}
                <option value="Dr. LaPlaca">Dr. LaPlaca</option>
                {/* Add more options as needed */}
              </Form.Control>
            </Form.Group>
            {selectedService && selectedService !== "Consultation" && (
              <Form.Group controlId="formLocation" className="mb-3">
                <Form.Label>Select Location</Form.Label>
                <Form.Control
                  as="select"
                  name="selectedLocation"
                  value={formData.selectedLocation}
                  onChange={handleChange}
                >
                  <option value="">Select a Location</option>
                  <option value="Carmel">
                    Carmel Office- 510 W. Carmel Dr. Carmel, IN 46032
                  </option>
                  <option value="Santa">
                    Santa Ana Office- 2972 Westheimer Rd. Santa Ana, Illinois
                    85486{" "}
                  </option>
                  {/* Add more options as needed */}
                </Form.Control>
              </Form.Group>
            )}
            <div className="d-flex justify-content-center">
              {isFetching ? (
                <Button className="purple-button c-b">
                  <Spinner animation="border" variant="light" />
                </Button>
              ) : (
                <Button
                  className="purple-button  d-block"
                  type="submit"
                  style={{ width: "250px", height: "52px", zIndex: "0" }}
                  // disabled={!formValid}
                >
                  Next
                </Button>
              )}
            </div>
          </Form>
        </section>
        <BootstrapModal
          showModal={showModal}
          handleClose={handleClose}
          modalTitle={""}
          modalContent={<ModalContent />}
        />
        <DoctorTodayAppointment />
      </div>
    </DoctorMenu>
  );
};

export default DoctorAppointment;
const ModalContent = () => {
  return (
    <section className="text-center">
      <img
        src="/images/icons/payment.svg"
        alt="payment-icon"
        className="mb-4"
      />
      <div className="d-flex check-your-box-texts">
        <h5>Payment request sent!</h5>
        <p>
          Account has been created and the credentials has
          <br /> been sent to the Client on his registered email.
        </p>
      </div>
    </section>
  );
};
