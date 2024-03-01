import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BootstrapModal from "../components/layout/Components/BootstrapModal";
import DoctorMenu from "../components/layout/DoctorMenu";
import "../styles/doctorplans.css";
const DoctorPlansPackages = () => {
  const plansData = [
    {
      icon: "novide",
      title: "Novice",
      price: "$10",
      billing: "Per user one time charge",
      features: [
        "Access to all basic features",
        "Basic reporting and analytics",
        "Up to 10 individual users",
        "20GB individual data each user",
        "Basic chat and email support",
      ],
      buttonText: "Select Plan",
    },
    {
      icon: "novide",
      title: "Novice",
      price: "$10",
      billing: "Per user one time charge",
      features: [
        "Access to all basic features",
        "Basic reporting and analytics",
        "Up to 10 individual users",
        "20GB individual data each user",
        "Basic chat and email support",
      ],
      buttonText: "Select Plan",
    },
    {
      icon: "novide",
      title: "Novice",
      price: "$10",
      billing: "Per user one time charge",
      features: [
        "Access to all basic features",
        "Basic reporting and analytics",
        "Up to 10 individual users",
        "20GB individual data each user",
        "Basic chat and email support",
      ],
      buttonText: "Select Plan",
    },
    {
      icon: "novide",
      title: "charu",
      price: "$10",
      billing: "Per user one time charge",
      features: [
        "Access to all basic features",
        "Basic reporting and analytics",
        "Up to 10 individual users",
        "20GB individual data each user",
        "Basic chat and email support",
      ],
      buttonText: "Select Plan",
    },
  ];
  return (
    <DoctorMenu>
      <section className="text-center w-100 vh-100 plans-par-cont">
        <h2 className="font-weight-bold  plan-title">
          <span> Powerful features for</span>
          <br />{" "}
          <span className="color-purple font-weight-bold text-gradient2">
            Powerful Athletes
          </span>
        </h2>
        <p className=" mb-5">Choose a plan that’s right for you</p>

        <div className="d-flex  plan-container ">
          {plansData.map((plan, index) => (
            <PlanSingle key={index} planData={plan} />
          ))}
        </div>
      </section>
    </DoctorMenu>
  );
};

export default DoctorPlansPackages;
const PlanSingle = ({ planData }) => {
  const { icon, title, price, billing, features, buttonText } = planData;
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => {
    setShowModal(false);
    navigate("/doctor/dashboard/recent-evaluation2");
  };
  const handleSubmit = () => {
    setShowModal(true);
  };
  return (
    <div className="plan-single-cont">
      <div className="m-4 ">
        {/* <div className={`icon-cont-${icon} m-auto`}>
          <img src={`/images/icons/${icon}.svg`} alt={icon} />
        </div> */}
        <h2 className="text-dark text-start">{title}</h2>
        <h1 className="color-purple text-start" style={{ fontSize: "60px" }}>
          {price}
          <span
            style={{
              fontSize: "12px",
              fontWeight: "300",
              letterSpacing: "1px",
              marginLeft: "7px",
            }}
          >
            per Month
          </span>
        </h1>
        <p>{billing}</p>
      </div>

      <table className="table table-borderless">
        <tbody>
          {features.map((feature, index) => (
            <tr key={index}>
              <td>
                <img src="/images/icons/tick.svg" alt="tick" />
              </td>
              <td>{feature}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="m-auto">
        <button onClick={handleSubmit} className="purple-button plan-bt">
          {buttonText}
        </button>
        <BootstrapModal
          showModal={showModal}
          handleClose={handleClose}
          modalTitle={""}
          modalContent={<ModalContent />}
        />
      </div>
    </div>
  );
};
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
