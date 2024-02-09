import { toast } from "react-toastify";
import axios from "../utils/axios.js";
import { parseError } from "../utils/parseError.js";
import {
  Failure,
  loginFailure,
  loginStart,
  loginSuccess,
  Start,
  Success,
} from "./authSlice.js";
import { FetchFailure, FetchStart, FetchSuccess } from "./fetchSlice.js";
import { FormFailure, FormStart, FormSuccess } from "./FormSlice.js";

const ErrorToastOptions = {
  position: "bottom-center",
  autoClose: 3000,
  pauseOnHover: true,
  draggable: true,
  theme: "dark",
};
const successToastOptions = {
  position: "top-center",
  autoClose: 3000,
  pauseOnHover: true,
  draggable: true,
  theme: "light",
};
export const login = async (dispatch, user) => {
  dispatch(loginStart());

  const { email, password } = user;

  try {
    const { data } = await axios.post("/api/doctor/login", { email, password });
    // console.log(data);
    toast.success("Logged in Sucessfully!", successToastOptions);
    dispatch(loginSuccess(data));
  } catch (error) {
    const errorMessage = parseError(error);
    toast.error(errorMessage, ErrorToastOptions);
    dispatch(loginFailure(errorMessage));
  }
};
export const SendOtp = async (dispatch, email) => {
  dispatch(Start());
  // const { email } = email;

  try {
    const { data } = await axios.post(
      "/api/doctor/send-forgot-password-code",
      email
    );
    // console.log(data);
    toast.success("OTP Sent!", successToastOptions);
    dispatch(Success(data));
    return true;
  } catch (error) {
    console.log(error);
    const errorMessage = parseError(error);
    toast.error(errorMessage, ErrorToastOptions);
    dispatch(Failure(errorMessage));
    return false;
  }
};
export const VerifyOtp = async (dispatch, { email, code }) => {
  dispatch(Start());

  try {
    const { data } = await axios.post("/api/doctor/validate-code", {
      email,
      code,
    });
    // console.log(data);
    toast.success("Verified!", successToastOptions);
    dispatch(Success(data));
    return true;
  } catch (error) {
    // console.log(error);
    const errorMessage = parseError(error);
    toast.error(errorMessage, ErrorToastOptions);
    dispatch(Failure(errorMessage));
    return false;
  }
};
export const ResetPassword = async (
  dispatch,
  { email, newPassword, confirmPassword }
) => {
  dispatch(Start());
  try {
    const { data } = await axios.put("/api/doctor/reset-password", {
      email,
      newPassword,
      confirmPassword,
    });
    toast.success("Password changed successfully", successToastOptions);
    dispatch(Success(data));
    return true;
  } catch (error) {
    // console.log(error);
    const errorMessage = parseError(error);
    toast.error(errorMessage, ErrorToastOptions);
    dispatch(Failure(errorMessage));
  }
};
export const GetProfileDetails = async (dispatch) => {
  const email = localStorage.getItem("userEmail");
  const token = localStorage.getItem("userToken");

  dispatch(Start());
  try {
    const { data } = await axios.get("/api/doctor/get-profile", {
      params: { email }, // Corrected: pass email as an object
      headers: { Authorization: `Bearer ${token}` },
    });

    dispatch(Success(data));
    return data;
  } catch (error) {
    const errorMessage = parseError(error);
    toast.error(errorMessage, ErrorToastOptions);
    dispatch(Failure(errorMessage));
    return false; // Return false to indicate that the request failed
  }
};
export const GetTodayAppointmentDetails = async (dispatch, todayDate) => {
  const token = localStorage.getItem("userToken");
  dispatch(FetchStart());
  try {
    const { data } = await axios.get(`/api/doctor/appointments/${todayDate}`, {
      // params: { date: todayDate },
      headers: { Authorization: `Bearer ${token}` },
    });
    dispatch(
      FetchSuccess({ type: "FETCH_APPOINTMENTS_SUCCESS", payload: data })
    );
    return data;
  } catch (error) {
    const errorMessage = parseError(error);
    toast.error(errorMessage, ErrorToastOptions);
    dispatch(FetchFailure(errorMessage));
    return false; // Return false to indicate that the request failed
  }
};

export const GetRecentPrescriptions = async (
  dispatch,
  { currentPage, pageSize, selectedDate }
) => {
  const token = localStorage.getItem("userToken");
  dispatch(FetchStart());
  try {
    const { data } = await axios.get("/api/doctor/recent-prescriptions", {
      params: {
        page_no: currentPage,
        per_page_count: pageSize,
        date: selectedDate,
      },
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log(data);
    dispatch(
      FetchSuccess({ type: "FETCH_PRESCRIPTIONS_SUCCESS", payload: data })
    );
    return data;
  } catch (error) {
    const errorMessage = parseError(error);
    toast.error(errorMessage, ErrorToastOptions);
    dispatch(FetchFailure(errorMessage));
    return false; // Return false to indicate that the request failed
  }
};
export const GetRecentBookings = async (
  dispatch,
  { currentPage, pageSize, selectedStatus, selectedServiceTypes, selectedDate }
) => {
  dispatch(FetchStart());
  const token = localStorage.getItem("userToken");
  try {
    const { data } = await axios.get("/api/doctor/recent-bookings", {
      params: {
        page_no: currentPage,
        per_page_count: pageSize,
        status: selectedStatus,
        service_type: selectedServiceTypes,
        date: selectedDate,
      },
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log(data);
    dispatch(FetchSuccess({ type: "FETCH_BOOKINGS_SUCCESS", payload: data }));
    return data;
  } catch (error) {
    const errorMessage = parseError(error);
    toast.error(errorMessage, ErrorToastOptions);
    dispatch(FetchFailure(errorMessage));
    return false; // Return false to indicate that the request failed
  }
};
export const GetInQueueRequests = async (
  dispatch,
  { currentPage, pageSize, selectedServiceTypes, selectedDate }
) => {
  dispatch(FetchStart());
  const token = localStorage.getItem("userToken");
  try {
    const { data } = await axios.get("/api/doctor/in-queue-requests", {
      params: {
        page_no: currentPage,
        per_page_count: pageSize,
        service_type: selectedServiceTypes,
        date: selectedDate,
      },
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log(data);
    dispatch(FetchSuccess({ type: "FETCH_INQUEUE_SUCCESS", payload: data }));
    return data;
  } catch (error) {
    const errorMessage = parseError(error);
    toast.error(errorMessage, ErrorToastOptions);
    dispatch(FetchFailure(errorMessage));
    return false; // Return false to indicate that the request failed
  }
};
export const getAllDoctors = async (dispatch) => {
  dispatch(FetchStart());
  const token = localStorage.getItem("userToken");
  try {
    const { data } = await axios.get("/api/doctor/get-all-doctors", {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log(data);
    dispatch(FetchSuccess({ type: "FETCH_DOCTORS_SUCCESS", payload: data }));
    return data;
  } catch (error) {
    const errorMessage = parseError(error);
    toast.error(errorMessage, ErrorToastOptions);
    dispatch(FetchFailure(errorMessage));
    return false; // Return false to indicate that the request failed
  }
};
export const fetchAvailableAppointments = async (
  dispatch,
  { selectedDoctor }
) => {
  console.log(selectedDoctor);
  dispatch(FetchStart());
  const token = localStorage.getItem("userToken");
  try {
    const { data } = await axios.post(
      "/api/doctor/get-slots",
      JSON.stringify({ doctor: selectedDoctor }), // Stringify the object
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json", // Add content type header
        },
      }
    );
    console.log(data);
    dispatch(FetchSuccess({ type: "FETCH_SLOTS_SUCCESS", payload: data }));
    return data;
  } catch (error) {
    const errorMessage = parseError(error);
    toast.error(errorMessage, ErrorToastOptions);
    dispatch(FetchFailure(errorMessage));
    return false; // Return false to indicate that the request failed
  }
};

export const appointment = async (dispatch, formData) => {
  const email = localStorage.getItem("userEmail");
  const token = localStorage.getItem("userToken");
  const client_id = localStorage.getItem("client_id");
  const selectedService = localStorage.getItem("selectedService");
  const { date, time, selectedDoctor, selectedLocation } = formData;
  console.log(formData);
  dispatch(Start());
  try {
    const { data } = await axios.post(
      `/api/doctor/book-appointment/${client_id}`,
      {
        service_type: selectedService,
        app_date: date,
        app_time: time,
        doctor_trainer: selectedDoctor,
        location: selectedLocation,
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    dispatch(Success(data));
    return true;
  } catch (error) {
    console.log(error);
    const errorMessage = parseError(error);
    toast.error(errorMessage, ErrorToastOptions);
    dispatch(Failure(errorMessage));
  }
};
export const SubmitClientForm = async (dispatch, { formData }) => {
  console.log(formData);

  const token = localStorage.getItem("userToken");
  dispatch(FormStart());
  try {
    const { data } = await axios.post(
      "/api/doctor/new-client-registration",
      {
        first_name: formData.firstName,
        last_name: formData.lastName,
        suffix: formData.suffix,
        birthday: formData.dob,
        gender: formData.gender,
        email: formData.email,
        phone_number: formData.phone,
        address: formData.address,
        city: formData.city,
        state: formData.state,
        zip: formData.zip,
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    console.log(data);
    dispatch(FormSuccess(data));

    return true;
  } catch (error) {
    console.log(error);
    const errorMessage = parseError(error);
    toast.error(errorMessage, ErrorToastOptions);
    dispatch(FormFailure(errorMessage));
  }
};
export const VerifyAthelete = async (dispatch, { email }) => {
  const token = localStorage.getItem("userToken");
  dispatch(Start());
  try {
    const { data } = await axios.post(
      "/api/doctor/existing-client-verification",
      { email },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    console.log(data);
    localStorage.setItem("client_id", data.client_id);
    dispatch(Success(data));
    toast.success("Your Athelete with this email exits!");
    return true;
  } catch (error) {
    console.log(error);
    const errorMessage = parseError(error);
    toast.error(errorMessage, ErrorToastOptions);
    dispatch(Failure(errorMessage));
  }
};
