import { toast } from "react-toastify";
import axios from "../utils/axios.js";
import { parseError } from "../utils/parseError.js";
import { FormFailure, FormStart, FormSuccess } from "./FormSlice.js";
import { AppFailure, AppStart, AppSuccess } from "./appointSlice.js";
import {
  Failure,
  Start,
  Success,
  loginFailure,
  loginStart,
  loginSuccess,
} from "./authSlice.js";
import { FetchFailure, FetchStart, FetchSuccess } from "./fetchSlice.js";

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
export const UpdatePassword = async (
  dispatch,
  { email, newPassword, oldPassword }
) => {
  const token = localStorage.getItem("userToken");

  dispatch(Start());
  try {
    const { data } = await axios.put(
      "/api/doctor/update-password",
      {
        email,
        newPassword,
        oldPassword,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    toast.success("Password updated successfully", successToastOptions);
    dispatch(Success(data));
    return true;
  } catch (error) {
    const errorMessage = parseError(error);
    toast.error(errorMessage, ErrorToastOptions);
    dispatch(Failure(errorMessage));
    return false;
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
export const UpdateProfileDetails = async (dispatch, formData) => {
  const email = localStorage.getItem("userEmail");
  const token = localStorage.getItem("userToken");

  dispatch(Start());
  try {
    const { data } = await axios.put("/api/doctor/update-profile", formData, {
      headers: { Authorization: `Bearer ${token}` },
    });
    toast.success("Profile Updated Successfully!", successToastOptions);

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
export const getAlls = async (dispatch, { selectedDate, doctor } = {}) => {
  const selectedService = localStorage.getItem("selectedService");
  console.log(selectedDate);
  dispatch(AppStart());
  const token = localStorage.getItem("userToken");
  try {
    const params = {
      headers: { Authorization: `Bearer ${token}` },
    };

    if (selectedDate) {
      params.params = { ...params.params, date: selectedDate };
    }

    if (doctor) {
      params.params = { ...params.params, doctor };
    }

    if (selectedService) {
      params.params = { ...params.params, service_type: selectedService };
    }

    const { data } = await axios.get("/api/doctor/get-slots", params);

    dispatch(AppSuccess(data));
    return data;
  } catch (error) {
    const errorMessage = parseError(error);
    toast.error(errorMessage, ErrorToastOptions);
    dispatch(AppFailure(errorMessage));
    return false;
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
  const { selectedDate, appTime, doctor, location } = formData;
  console.log(selectedDate);
  dispatch(Start());
  try {
    const { data } = await axios.post(
      `/api/doctor/book-appointment/${client_id}`,
      {
        service_type: selectedService,
        app_date: selectedDate,
        app_time: appTime,
        doctor_trainer: doctor,
        location: location,
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
    localStorage.setItem("ath-fname", data.user?.firstName);
    localStorage.setItem("ath-lname", data.user?.lastName);
    localStorage.setItem("ath-email", data.user?.email);
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
