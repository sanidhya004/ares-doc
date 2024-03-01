import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import BootstrapModal from "../Components/BootstrapModal";

const DoctorMonthlyPlans = ({ navigate, type }) => {
  const [showMonthlyPlans, setShowMonthlyPlans] = useState(false);
  const { isFetching } = useSelector((state) => state.auth);
  const [plans, setplans] = useState([]);
  const [selectedMonthlyPlans, setSelectedMonthlyPlans] = useState("");
  const dispatch = useDispatch();
  const navigate2 = useNavigate();

  const [showModal, setShowModal] = useState(false);
  const handleClose = () => {
    setShowModal(false);
    navigate2("/doctor/dashboard");
  };
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission
    // alert(selectedMonthlyPlans);
    setShowModal(true);
  };

  const handleMonthlyPlansChange = (event) => {
    setSelectedMonthlyPlans(event.target.value);
  };
  useEffect(() => {
    const storedSelectedService = localStorage.getItem("selectedService");
    const clientId = localStorage.getItem("client_id");
    if (storedSelectedService && clientId) {
    } else {
      // If empty, navigate to the desired page
      navigate("/doctor/dashboard/doctor-service-selection");
    }
    if (type === "Monthly") {
      setplans(monthlyPlansOptions);
    } else if (type == "Packages") {
      setplans(packagePlansOptions);
    } else {
      setplans(monthlyPlansOptions);
    }
  }, []);

  const monthlyPlansOptions = [
    {
      id: "2-sessions",
      label: "2 Sessions Per month",
      value: "2SessionsPermonth",
      price: "$199",
    },
    {
      id: "4-sessions",
      label: "4 Sessions Per month",
      value: "4SessionsPermonth",
      price: "$349",
    },

    {
      id: "8-sessions",
      label: "8 Sessions Per month",
      value: "8SessionsPermonth",
      price: "$599",
    },
  ];
  const packagePlansOptions = [
    {
      id: "5-sessions",
      label: "5 Sessions Per month",
      value: "5SessionsPermonth",
      price: "$599",
    },

    {
      id: "10-sessions",
      label: "10 Sessions Per month",
      value: "10SessionsPermonth",
      price: "$999",
    },
    {
      id: "15-sessions",
      label: "15 Sessions Per month",
      value: "15SessionsPermonth",
      price: "$1399",
    },
    {
      id: "20-sessions",
      label: "20 Sessions Per month",
      value: "20SessionsPermonth",
      price: "$1599",
    },
  ];
  return (
    <>
      <section
        className="text-center d-flex flex-column justify-content-center align-items-center select-user"
        style={{ gap: "3vh" }}
      >
        <div className="text-left mb-3" style={{ width: "400px" }}>
          <h4 className="mb-0">Select type of Plan</h4>
          <p className="text-muted">Please Select type of Plan</p>
        </div>
        <Form
          className="d-flex flex-wrap justify-content-center "
          style={{ gap: "24px" }}
          onSubmit={handleSubmit}
        >
          <div className="radio-container">
            {plans.map((option) => (
              <label
                key={option.id}
                htmlFor={option.id}
                className={`radio-label ${
                  selectedMonthlyPlans === option.value ? "checked" : ""
                }`}
              >
                <div className="d-flex justify-content-between w-100 p-3">
                  {" "}
                  <input
                    type="radio"
                    id={option.id}
                    value={option.value}
                    checked={selectedMonthlyPlans === option.value}
                    onChange={handleMonthlyPlansChange}
                  />
                  {option.label}
                  <div>{option.price}</div>
                </div>
              </label>
            ))}
          </div>

          <Button
            type="submit"
            className="purple-button "
            style={{ width: "332px", height: "62px" }}
            disabled={!selectedMonthlyPlans}
          >
            Continue
          </Button>
        </Form>{" "}
        <BootstrapModal
          showModal={showModal}
          handleClose={handleClose}
          modalTitle={""}
          modalContent={<ModalContent />}
        />
      </section>
    </>
  );
};

export default DoctorMonthlyPlans;
const ModalContent = () => {
  return (
    <section className="text-center">
      <img
        src="/images/icons/formTick.svg"
        alt="payment-icon"
        className="mb-4"
      />
      <div className="d-flex check-your-box-texts">
        <h5>Training Frequency Selected!!</h5>
        <p>
          Training frequency has been selected to 4 Sessions/month.
          <br /> Payment Confirmation has been sent to Client’s Email Id.
        </p>
      </div>
    </section>
  );
};
