import React, { useEffect } from "react";

import { useDispatch } from "react-redux";
import HomeLayout from "../components/layout/Components/HomeLayout";
import DoctorServices from "../components/layout/DoctorServices";
import { getAllDoctors } from "../features/apiCall";
const DoctorServiceSelection = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchDoctorData = async () => {
      try {
        await getAllDoctors(dispatch);
      } catch (error) {
        console.error("Error fetching doctors:", error);
        // Handle error, perhaps show an error toast
      }
    };

    fetchDoctorData();
  }, []);

  return (
    <HomeLayout>
      <DoctorServices />
    </HomeLayout>
  );
};

export default DoctorServiceSelection;
