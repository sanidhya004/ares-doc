import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import DoctorMenu from "../components/layout/DoctorMenu";
import { FetchFailure, FetchStart, FetchSuccess } from "../features/fetchSlice";
import axios from "../utils/axios";
import { parseError } from "../utils/parseError";
import Step1 from "./Forms/Step1";
import Step2 from "./Forms/Step2";

const DoctorForm = ({ form }) => {
  const [formData, setFormData] = useState({});
  const [currentStep, setCurrentStep] = useState(1);
  const [formFields, setFormFields] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchFormData = async () => {
      const token = localStorage.getItem("userToken");
      dispatch(FetchStart());
      try {
        const { data } = await axios.get(`/api/doctor/get-${form}-form`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        console.log(data);
        setFormFields(data);
        dispatch(FetchSuccess(data));
      } catch (error) {
        const errorMessage = parseError(error);
        dispatch(FetchFailure(errorMessage));
      }
    };

    fetchFormData();
  }, []);

  const handleNextStep = () => {
    if (currentStep === totalSteps) {
      handleSubmit();
    } else {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleFormChange = (fieldName, value) => {
    setFormData({ ...formData, [fieldName]: value });
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    setFormData({});
  };

  const totalSteps = Math.ceil(formFields.length / 10);

  return (
    <DoctorMenu>
      {currentStep === 1 && (
        <Step1
          formData={formData}
          formFields={formFields.slice(0, 10)}
          onNextStep={handleNextStep}
          onChange={handleFormChange}
          next={true}
          now={(currentStep / totalSteps) * 100}
          submit={currentStep === totalSteps}
          form_name={form}
        />
      )}

      {currentStep > 1 && currentStep <= totalSteps && (
        <Step2
          formData={formData}
          step={currentStep}
          formFields={formFields.slice(
            (currentStep - 1) * 10,
            currentStep * 10
          )}
          onPrevStep={handlePrevStep}
          onNextStep={handleNextStep}
          onChange={handleFormChange}
          next={true}
          prev={true}
          now={(currentStep / totalSteps) * 100}
          submit={currentStep === totalSteps}
          form_name={form}
        />
      )}
    </DoctorMenu>
  );
};

export default DoctorForm;
