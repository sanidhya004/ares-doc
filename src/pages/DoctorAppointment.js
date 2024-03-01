import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import BootstrapModal from "../components/layout/Components/BootstrapModal";
import HorizontalTimeline from "../components/layout/Components/HorizontalTimeline";
import VerifiedLayout from "../components/layout/Components/verifiedLayout";

const DoctorAppointment = () => {
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [doctorTrainer, setDoctorTrainer] = useState("");
  const [timeSlot, setTimeSlot] = useState("");
  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", { date, location, doctorTrainer, timeSlot });
  };

  const navigate = useNavigate();
  // const slots = useSelector((state) => state.fetch_app.slots);
  // const doctors = useSelector((state) => state.fetch_app.doctors);
  // const [selectedService, setSelectedService] = useState("");
  // const { isFetching: authIsFetching } = useSelector((state) => state.auth);
  // const { isFetching: fetchAppIsFetching } = useSelector(
  //   (state) => state.fetch_app
  // );
  // const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  // const [formValid, setFormValid] = useState(false);
  // const [disabledDates, setDisabledDates] = useState([]); // State to store disabled dates

  // const [formData, setFormData] = useState({
  //   date: "",
  //   time: "",
  //   selectedDoctor: "",
  //   selectedLocation: "",
  // });

  // const ErrorToastOptions = {
  //   position: "bottom-center",
  //   autoClose: 3000,
  //   pauseOnHover: true,
  //   draggable: true,
  //   theme: "dark",
  // };

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });

  //   if (name === "date" && value) {
  //     console.log("hi");
  //     const selectedSlot = slots.find(
  //       (slot) => moment(slot.date).format("YYYY-MM-DD") === value
  //     );

  //     if (selectedSlot) {
  //       console.log("Selected slot:", selectedSlot);
  //       setFormData((prevState) => ({
  //         ...prevState,
  //         selectedLocation: selectedSlot.address,
  //       }));
  //       console.log("FormData after update:", formData);
  //     } else {
  //       console.log("No slot found for the selected date.");
  //     }
  //   }
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   // Validate form data
  //   if (
  //     !formData.date ||
  //     !formData.time ||
  //     !formData.selectedDoctor ||
  //     (selectedService !== "Consultation" && !formData.selectedLocation)
  //   ) {
  //     toast.error("Please fill in all details.", ErrorToastOptions);
  //     return;
  //   }
  //   setFormValid(true);
  //   try {
  //     const success = await appointment(dispatch, formData);
  //     if (success) {
  //       setShowModal(true);
  //     }
  //   } catch (error) {
  //     toast.error("Unexpected Error", ErrorToastOptions);
  //   }
  // };

  const handleClose = () => {
    setShowModal(false);
    navigate("/doctor/dashboard/doctor-service-selection");
    localStorage.removeItem("selectedService");
  };
  const [currentStep, setCurrentStep] = useState(1); // Initially set to step 1

  const totalSteps = 3; // Total number of steps
  const labels = [
    "Select Service",
    "Appointment Information",
    "Payment Process",
  ]; // Labels for each step

  // const fetchAvailableAppointmentDates = async (selectedDoctor) => {
  //   try {
  //     await fetchAvailableAppointments(dispatch, {
  //       selectedDoctor,
  //     });
  //     const availableDates = slots.map((appointment) =>
  //       moment(appointment.date).format("YYYY-MM-DD")
  //     );
  //     setDisabledDates(availableDates);
  //   } catch (error) {
  //     console.error("Error fetching available appointment dates:", error);
  //   }
  // };

  // useEffect(() => {
  //   if (doctors.length === 0)
  //     navigate("/doctor/dashboard/doctor-service-selection");
  // }, []);

  // useEffect(() => {
  //   const storedSelectedService = localStorage.getItem("selectedService");
  //   const clientId = localStorage.getItem("client_id");
  //   if (storedSelectedService && clientId) {
  //     setSelectedService(storedSelectedService);
  //   } else {
  //     navigate("/doctor/dashboard/doctor-service-selection");
  //   }
  // }, [navigate, dispatch]);

  // useEffect(() => {
  //   if (formData.selectedDoctor) {
  //     fetchAvailableAppointmentDates(formData.selectedDoctor);
  //   }
  // }, [formData.selectedDoctor]);
  const timeSlots = [
    { id: 1, time: "9:00 - 9:30" },
    { id: 2, time: "9:30 - 10:00" },
    { id: 3, time: "10:00 - 10:30" },
    { id: 4, time: "10:30 - 11:00" },
    { id: 5, time: "11:00 - 11:30" },
    { id: 6, time: "11:30 - 12:00" },
    { id: 4, time: "10:30 - 11:00" },
    { id: 5, time: "11:00 - 11:30" },
    { id: 6, time: "11:30 - 12:00" },
    // Add more time slots as needed
  ];
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);

  const handleTimeSlotChange = (id) => {
    setSelectedTimeSlot(id);
  };
  return (
    <VerifiedLayout>
      {/* <div className="d-flex Doctor-Consul justify-between"> */}
      {/* <section className="appo-cont">
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
        </section> */}
      <HorizontalTimeline
        currentStep={currentStep}
        totalSteps={totalSteps}
        labels={labels}
        className="appointment"
      />
      <section
        className="text-center d-flex flex-column justify-content-center align-items-center appointment-cont mt-4"
        style={{ height: "calc(100% - 250px)" }}
      >
        <form onSubmit={handleSubmit} style={{ width: "400px" }}>
          {/* Date input field */}
          <div className="form-group">
            <label htmlFor="date">Appointment Date:</label>
            <input
              placeholder="Select Appointment date"
              type="date"
              id="date"
              className="form-control"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          {/* Location dropdown */}
          <div className="form-group">
            <label htmlFor="location">Location:</label>
            <select
              id="location"
              className="form-control"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            >
              <option value="">Select Location</option>
              {/* Add options for locations */}
            </select>
          </div>

          {/* Doctor/Trainers dropdown */}
          <div className="form-group">
            <label htmlFor="doctorTrainer">Doctor/Trainer:</label>
            <select
              id="doctorTrainer"
              className="form-control"
              value={doctorTrainer}
              onChange={(e) => setDoctorTrainer(e.target.value)}
            >
              <option value="">Select Doctor/Trainer</option>
              {/* Add options for doctors/trainers */}
            </select>
          </div>

          <div className="text-left">
            <label htmlFor="doctorTrainer">
              Appointment Time
              <br />
              <span
                style={{
                  fontSize: "11px",
                  color: "#757576",
                  fontFamily: "Inter",
                }}
              >
                <img src="/images/icon/Clock.svg" width={15} /> 90 mins Meeting
              </span>
            </label>
            <div className="scroll-down-bar">
              <i class="fa-solid fa-arrow-down" />
            </div>

            <div className="radio-container ">
              {timeSlots.map((slot) => (
                <div key={slot.id}>
                  <label
                    htmlFor={`timeSlot${slot.id}`}
                    className={`radio-label-slot ${
                      selectedTimeSlot === slot.id ? "checked" : ""
                    }`}
                  >
                    <input
                      type="radio"
                      id={`timeSlot${slot.id}`}
                      value={slot.time}
                      checked={selectedTimeSlot === slot.id}
                      onChange={() => handleTimeSlotChange(slot.id)}
                    />
                    {slot.time}
                  </label>
                </div>
              ))}
            </div>
          </div>
          <Button
            type="submit"
            className="purple-button "
            style={{ width: "250px", height: "50px", marginTop: "10px" }}
            // disabled={!selectedUserType}
          >
            Continue
          </Button>
        </form>
      </section>
      <BootstrapModal
        showModal={showModal}
        handleClose={handleClose}
        modalTitle={""}
        modalContent={<ModalContent />}
      />
      {/* </div> */}
    </VerifiedLayout>
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
