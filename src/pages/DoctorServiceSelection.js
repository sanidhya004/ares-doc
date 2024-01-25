import React from "react";
import DoctorMenu from "../components/layout/DoctorMenu";

import DoctorServices from "../components/layout/DoctorServices";
import DoctorTodayAppointment from "../components/layout/DoctorTodayAppointment";
const DoctorServiceSelection = () => {
  return (
    <DoctorMenu>
      <div className="d-flex Doctor-home justify-content-around flex-wrap ">
        <DoctorServices />
        <DoctorTodayAppointment />
      </div>
    </DoctorMenu>
  );
};

export default DoctorServiceSelection;
