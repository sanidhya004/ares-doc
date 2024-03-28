import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import BootstrapModal from "../components/layout/Components/BootstrapModal";
import DoctorMenu from "../components/layout/DoctorMenu";
import { GetPlans } from "../features/apiCall";
import "../styles/doctorplans.css";
const DoctorPlansPackages = () => {
  const Get_Plans = useSelector((state) => state.fetch_app.Get_Plans);
  const isFetching = useSelector((state) => state.fetch_app.isFetching);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { ClientId } = useParams();

  const fetchData = async () => {
    try {
      await GetPlans(dispatch);
    } catch (error) {
      console.error("Error fetching profile details:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [dispatch, navigate]);

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
          {Get_Plans.map((plan, index) => (
            <PlanSingle key={index} planData={plan} />
          ))}
        </div>
      </section>
    </DoctorMenu>
  );
};

export default DoctorPlansPackages;
const PlanSingle = ({ planData }) => {
  const { name, billing, features, buttonText, phases } = planData;
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
        <h2 className="text-dark text-start">{name}</h2>
        {/* <h1 className="color-purple text-start" style={{ fontSize: "60px" }}>
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
        </h1> */}
        {/* <p>{billing}</p> */}
      </div>

      {/* <table className="table table-borderless">
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
      </table> */}

      <div className="m-auto">
        <button onClick={handleSubmit} className="purple-button plan-bt">
          START PLAN{" "}
        </button>
        <BootstrapModal
          showModal={showModal}
          handleClose={handleClose}
          modalTitle={""}
          modalContent={<ModalContent phases={phases} />}
        />
      </div>
    </div>
  );
};
const ModalContent = ({ phases }) => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    console.log("Going back");
    navigate(-1);
  };
  return (
    <section className="text-center">
      <button onClick={handleGoBack} className="m-2 p-0 mb-4" id="back_bt">
        <img src="/images/icons/backdark.svg" alt="back" width={30} />
      </button>

      <div
        className="d-flex Doctor-home  flex-wrap "
        style={{ justifyContent: "space-evenly" }}
      ></div>
    </section>
  );
};
const SubmitPlan = () => {
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
