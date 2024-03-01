import React, { useEffect } from "react";

import { useDispatch } from "react-redux";
import VerifiedLayout from "../components/layout/Components/verifiedLayout";
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
    <VerifiedLayout>
      <DoctorServices />
    </VerifiedLayout>
  );
};

export default DoctorServiceSelection;
