import React, { useEffect, useRef, useState } from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { SendOtp, VerifyOtp } from "../../../features/apiCall";
import BootstrapModal from "../../layout/Components/BootstrapModal";
import AuthLayout from "../AuthLayout";

const ForgotPassword = () => {
  const navigate = useNavigate();

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
  const handleGoBack = () => {
    navigate(-1); // Go back one step in the history
  };
  return (
    <AuthLayout>
      <div className="background-auth-2">
        <section className="forgot-password">
          <button onClick={handleGoBack} className="m-0 p-0 mb-4">
            <img src="images/icon/back.svg" alt="back" width={30} />
          </button>
          <h3 className="mb-4 font-weight-bold">Forgot Password</h3>
          <p className="mb-1 mt-4 email ">
            Don't worry! It occurs. Please enter the email Email to send
            <br />
            Verification code.{" "}
          </p>
          <Form.Group controlId="formBasicPassword" className="mt-2">
            <Form.Label>Email Id</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter Email Id"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="mb-3 mt-2"
            />
          </Form.Group>
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
      </div>
    </AuthLayout>
  );
};

export default ForgotPassword;

const ModalContent = ({ email }) => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const lastFocusedInput = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (
        e.key === "Backspace" &&
        lastFocusedInput.current &&
        lastFocusedInput.current.value === ""
      ) {
        const currentIndex = parseInt(lastFocusedInput.current.dataset.index);
        if (currentIndex > 0) {
          const newOtp = [...otp];
          newOtp[currentIndex - 1] = "";
          setOtp(newOtp);
          document.getElementById(`otp-input-${currentIndex - 1}`).focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [otp]);

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
        console.error("Error during OTP verification:", error);
      }
    }
  };

  const handleSendOtp = async () => {
    await SendOtp(dispatch, { email });
  };

  return (
    <section className="check-your-inbox mt-4">
      <div className="d-flex check-your-box-texts">
        <img
          src="images/icons/forgoot.png"
          height={50}
          width={50}
          className="ml-auto mr-auto mb-4"
          alt=""
        />
        <h4>Check Your Email</h4>
        <p className="text-muted mt-2" style={{ fontSize: "14px" }}>
          Please open the link in the email to continue
          <br /> or Enter the verification code we sent to
        </p>
        <h6 className="purple-text" style={{ fontSize: "13px" }}>
          {email}
        </h6>
      </div>

      <div className="otp-input-container">
        {otp.map((digit, index) => (
          <input
            key={index}
            id={`otp-input-${index}`}
            type="text"
            maxLength="1"
            value={digit}
            data-index={index}
            onChange={(e) => handleOtpChange(index, e.target.value)}
            onFocus={() => {
              lastFocusedInput.current = document.getElementById(
                `otp-input-${index}`
              );
            }}
            className="otp-input m-3"
          />
        ))}
      </div>
      <div className="text-center">
        <Link
          className="purple-text"
          style={{ fontSize: "13px" }}
          onClick={() => handleSendOtp()}
        >
          Resend (60s)
        </Link>
      </div>
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
