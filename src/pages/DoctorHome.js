import React from "react";

import DoctorMenu from "../components/layout/DoctorMenu";
import DoctorSelectUser from "../components/layout/DoctorSelectUser";
import DoctorTodayAppointment from "../components/layout/DoctorTodayAppointment";
const DoctorSelectUserType = () => {
  return (
    <DoctorMenu>
      <div className="d-flex Doctor-home justify-content-around flex-wrap">
        {/* <div className=" text-right" style={{ marginTop: "40px" }}>
          <img src="images/Rectangle.png" style={{ width: "90%" }} />
        </div> */}
        <DoctorSelectUser />
        {/*  <DoctorServices /> */}
        {/* <DoctorTraining /> */}
        <DoctorTodayAppointment />
      </div>
    </DoctorMenu>
  );
};

export default DoctorSelectUserType;
