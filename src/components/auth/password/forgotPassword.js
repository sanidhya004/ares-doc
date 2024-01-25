import React, { useState } from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { SendOtp, VerifyOtp } from "../../../features/apiCall";
import BootstrapModal from "../../layout/Components/BootstrapModal";
import AuthLayout from "../AuthLayout";

const ForgotPassword = () => {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const { isFetching } = useSelector((state) => state.auth);
  const handleSendOtp = async () => {
    if (await SendOtp(dispatch, { email })) {
      setShowModal(true);
    }
  };
  const handleClose = () => setShowModal(false);

  return (
    <AuthLayout>
      <section className="forgot-password">
        <h3 className="mb-4 font-weight-bold">Forgot Password</h3>
        <p className="mb-1 mt-4 email ml-1">
          Email to send reset instructions to
        </p>
        <Form.Control
          type="email"
          name="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          className="mb-3 "
        />
        {isFetching ? (
          <Button type="submit" className="purple-button w-100">
            <Spinner animation="border" variant="light" />
          </Button>
        ) : (
          <Button className="purple-button w-100" onClick={handleSendOtp}>
            Next
          </Button>
        )}
      </section>
      <section className="illustration-container">
        <img
          src="images/ForgotPassword.png"
          className="illustration"
          style={{ width: "300px", height: "auto" }}
        />
      </section>
      {email.length > 0 && (
        <BootstrapModal
          showModal={showModal}
          handleClose={handleClose}
          modalTitle={""}
          modalContent={<ModalContent email={email} />}
          // className="check_your_modal_container"
        />
      )}

      <ToastContainer position="top-center" />
    </AuthLayout>
  );
};

export default ForgotPassword;

const ModalContent = ({ email }) => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleOtpChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      document.getElementById(`otp-input-${index + 1}`).focus();
    }
    if (newOtp.every((code) => code !== "")) {
      sendOtpRequest(newOtp.join(""));
    }
  };
  const sendOtpRequest = async (otpValue) => {
    if (email) {
      try {
        if (await VerifyOtp(dispatch, { email: email, code: otpValue })) {
          navigate("/update-password", { state: email });
        }
      } catch (error) {
        // Handle any errors that might occur during the OTP verification
        console.error("Error during OTP verification:", error);
      }
    }
  };
  return (
    <section className="check-your-inbox">
      <i className="fa fa-envelope" aria-hidden="true" />
      <div className="d-flex check-your-box-texts">
        <h5>Check Your Inbox</h5>
        <p>
          Please open the link in the email to continue <br />
          or Enter the verification code we sent to{" "}
        </p>
        <h6>{email}</h6>
      </div>

      {/* <Form.Control /> */}
      <div className="otp-input-container">
        {otp.map((digit, index) => (
          <input
            key={index}
            id={`otp-input-${index}`}
            type="text"
            maxLength="1"
            value={digit}
            onChange={(e) => handleOtpChange(index, e.target.value)}
            className="otp-input m-3"
          />
        ))}
      </div>
      <p>Resend (60s)</p>
      <p style={{ fontSize: "12px" }}>Need Help ?</p>
      <button
        type="submit"
        className="purple-button w-50"
        style={{ zIndex: "-2" }}
      >
        Update Password{" "}
      </button>
    </section>
  );
};
