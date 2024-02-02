import React from "react";

import DoctorMenu from "../components/layout/DoctorMenu";
import DoctorSelectUser from "../components/layout/DoctorSelectUser";
import DoctorTodayAppointment from "../components/layout/DoctorTodayAppointment";
const DoctorSelectUserType = () => {
  return (
    <DoctorMenu>
      <div className="d-flex Doctor-home justify-content-around flex-wrap">
        <DoctorSelectUser />

        <DoctorTodayAppointment />
      </div>
    </DoctorMenu>
  );
};

export default DoctorSelectUserType;
