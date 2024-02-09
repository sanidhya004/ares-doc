import moment from "moment";
import React, { useEffect, useState } from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import BootstrapModal from "../components/layout/Components/BootstrapModal";
import Loader from "../components/layout/Components/Loader";
import DoctorMenu from "../components/layout/DoctorMenu";
import DoctorTodayAppointment from "../components/layout/DoctorTodayAppointment";
import { appointment, fetchAvailableAppointments } from "../features/apiCall";

const DoctorAppointment = () => {
  const navigate = useNavigate();
  const slots = useSelector((state) => state.fetch_app.slots);
  const doctors = useSelector((state) => state.fetch_app.doctors);
  const [selectedService, setSelectedService] = useState("");
  const { isFetching: authIsFetching } = useSelector((state) => state.auth);
  const { isFetching: fetchAppIsFetching } = useSelector(
    (state) => state.fetch_app
  );
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [formValid, setFormValid] = useState(false);
  const [disabledDates, setDisabledDates] = useState([]); // State to store disabled dates

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

    if (name === "date" && value) {
      console.log("hi");
      const selectedSlot = slots.find(
        (slot) => moment(slot.date).format("YYYY-MM-DD") === value
      );

      if (selectedSlot) {
        console.log("Selected slot:", selectedSlot);
        setFormData((prevState) => ({
          ...prevState,
          selectedLocation: selectedSlot.address,
        }));
        console.log("FormData after update:", formData);
      } else {
        console.log("No slot found for the selected date.");
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
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
    navigate("/doctor/dashboard/doctor-service-selection");
    localStorage.removeItem("selectedService");
  };

  const fetchAvailableAppointmentDates = async (selectedDoctor) => {
    try {
      await fetchAvailableAppointments(dispatch, {
        selectedDoctor,
      });
      const availableDates = slots.map((appointment) =>
        moment(appointment.date).format("YYYY-MM-DD")
      );
      setDisabledDates(availableDates);
    } catch (error) {
      console.error("Error fetching available appointment dates:", error);
    }
  };

  useEffect(() => {
    if (doctors.length === 0)
      navigate("/doctor/dashboard/doctor-service-selection");
  }, []);

  useEffect(() => {
    const storedSelectedService = localStorage.getItem("selectedService");
    const clientId = localStorage.getItem("client_id");
    if (storedSelectedService && clientId) {
      setSelectedService(storedSelectedService);
    } else {
      navigate("/doctor/dashboard/doctor-service-selection");
    }
  }, [navigate, dispatch]);

  useEffect(() => {
    if (formData.selectedDoctor) {
      fetchAvailableAppointmentDates(formData.selectedDoctor);
    }
  }, [formData.selectedDoctor]);

  return (
    <DoctorMenu>
      <div className="d-flex Doctor-Consul justify-between">
        <section className="appo-cont">
          <Form onSubmit={handleSubmit} className="appo-cont-form">
            <Form.Group controlId="formDoctor" className="mb-3">
              <Form.Label>Select Trainer/Doctor</Form.Label>
              <Form.Control
                as="select"
                name="selectedDoctor"
                value={formData.selectedDoctor}
                onChange={handleChange}
              >
                <option value="">Select a Trainer/Doctor</option>
                {doctors &&
                  doctors.length > 0 &&
                  doctors.map((doctor) => (
                    <option key={doctor.temp_code} value={doctor.fullname}>
                      {doctor.fullname}
                    </option>
                  ))}
              </Form.Control>
            </Form.Group>

            {/* Render the rest of the form fields if a doctor is selected */}
            {formData.selectedDoctor && (
              <>
                {fetchAppIsFetching ? (
                  <Loader
                    className="slots-fetch"
                    title="Hold on ! Fetching Doctor available dates"
                  />
                ) : (
                  <>
                    <Form.Group controlId="formDate" className="mb-3">
                      <Form.Label>Appointment Date</Form.Label>
                      <Form.Control
                        as="select"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                      >
                        <option value="">Select an Appointment Date</option>
                        {disabledDates.map((date) => (
                          <option key={date} value={date}>
                            {moment(date).format("MMMM Do YYYY")}
                          </option>
                        ))}
                      </Form.Control>
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

                    {selectedService !== "Consultation" && (
                      <Form.Group controlId="formLocation" className="mb-3">
                        <Form.Label>Select Location</Form.Label>
                        <Form.Control
                          type="text"
                          name="selectedLocation"
                          value={formData.selectedLocation}
                          onChange={handleChange}
                          placeholder="Enter Location"
                        />
                      </Form.Group>
                    )}
                  </>
                )}
                <div className="d-flex justify-content-center">
                  {authIsFetching ? (
                    <Button className="purple-button c-b">
                      <Spinner animation="border" variant="light" />
                    </Button>
                  ) : (
                    <>
                      {" "}
                      {!fetchAppIsFetching && (
                        <Button
                          className="purple-button d-block w-25"
                          type="submit"
                        >
                          Submit
                        </Button>
                      )}
                    </>
                  )}
                </div>
              </>
            )}
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
