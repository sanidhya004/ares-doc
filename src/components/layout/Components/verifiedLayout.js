import React from "react";
import { useNavigate } from "react-router-dom";

import DoctorMenu from "../DoctorMenu";
import DoctorTodayAppointment from "../DoctorTodayAppointment"; // Importing DoctorTodayAppointment if not already imported

const VerifiedLayout = ({ children }) => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    console.log("Going back");
    navigate(-1);
  };

  return (
    <DoctorMenu>
      <>
        <button onClick={handleGoBack} className="m-2 p-0 mb-4" id="back_bt">
          <img src="/images/icons/backdark.svg" alt="back" width={30} />
        </button>

        <div
          className="d-flex Doctor-home  flex-wrap "
          style={{ justifyContent: "space-evenly" }}
        >
          <div
            style={{
              backgroundColor: "white",
              height: "100%",
              width: "47%",
              borderRadius: "20px",
            }}
          >
            <div
              style={{
                alignItems: "center",
                height: "120px",
                backgroundColor: "#7257FF",
                borderRadius: "20px 20px 0px 0px",
              }}
              className="w-100 d-flex justify-content-center flex-row text-left"
            >
              <img src="/images/sample.png" width={55} height={55} />
              <div className="text-light ml-3">
                <h5>Luffy</h5>
                <p style={{ fontSize: "12px" }} className="m-0 p-0">
                  Luffy@gmail.com
                </p>
              </div>
            </div>
            <img
              src="/images/icons/bublewhite.svg"
              width={80}
              alt="logo"
              id="img-1-home"
            />

            {children}
            <img
              src="/images/icon/svg.svg"
              width={70}
              alt="logo"
              id="img-2-home"
            />
          </div>

          <DoctorTodayAppointment />
        </div>
      </>
    </DoctorMenu>
  );
};

export default VerifiedLayout;
