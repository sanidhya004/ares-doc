import React, { useEffect, useState } from "react";
import { FormControl } from "react-bootstrap";
import ReactPlaceholder from "react-placeholder";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import BootstrapModal from "../components/layout/Components/BootstrapModal";
import DoctorMenu from "../components/layout/DoctorMenu";
import { GetProfileDetails, UpdatePassword } from "../features/apiCall";
import { logOut } from "../features/authSlice";
import "../styles/profile.css";

const DoctorProfile = () => {
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);

  const [isChecked, setIsChecked] = useState(false);
  const dispatch = useDispatch();
  const handleToggle = () => setIsChecked(!isChecked);
  const [user, setUser] = useState([]);
  const handleLogout = async () => {
    await dispatch(logOut());
  };
  const { isFetching } = useSelector((state) => state.auth);
  const fetchData = async () => {
    try {
      const data = await GetProfileDetails(dispatch);
      setUser(data?.user);
      console.log(user?.fullname);
    } catch (error) {
      // Handle any errors that might occur during the data fetching
      console.error("Error fetching profile details:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [dispatch]);
  return (
    <DoctorMenu>
      <div className="m-4 profile">
        <section
          className="p-4  "
          style={{
            backgroundColor: "white",
            margin: "auto",
            height: "95vh",
            overflowY: "scroll",
          }}
        >
          <h4> Profile</h4>
          <div
            className="p-4 prof-cont"
            style={{ alignItems: "center", backgroundColor: "#F4F4F4" }}
          >
            <div className="d-flex align-items-center">
              <img
                src="/images/image3.png"
                height={150}
                style={{ borderRadius: "50%", marginRight: "40px" }}
              />
              <div>
                <ReactPlaceholder
                  type="text"
                  color="#F0F0F0"
                  showLoadingAnimation
                  rows={1}
                  style={{ width: "30%" }}
                  ready={!isFetching}
                >
                  <h5>{user?.fullname}</h5>
                  <div style={{ color: "rgb(134 131 131)" }}>
                    <p>{user?.email}</p>
                    <p>234326723523</p>
                  </div>
                </ReactPlaceholder>
              </div>
            </div>
            <div>
              <img
                src="/images/icon/svg.svg"
                height={30}
                style={{ borderRadius: "50%", marginRight: "40px" }}
              />
            </div>
          </div>
          <Link to="/doctor/dashboard/edit-profile">
            <div className=" prof-cont">
              <div>
                <p>Edit Profile</p>
                <span>you can edit you all information from here</span>
              </div>
              <div>
                <img src="/images/icons/arrow-left.svg" />
              </div>
            </div>
          </Link>
          <Link onClick={() => setShowModal(true)}>
            {" "}
            <div className="prof-cont">
              <div>
                <p>Change Password</p>
                <span>Change password to login to your account.</span>
              </div>
              <div>
                <img src="/images/icons/arrow-left.svg" />
              </div>
            </div>
          </Link>

          <Link to="/privacy-policy">
            <div className="prof-cont">
              <div>
                <p>Privacy Policy</p>
                <span>View the privacy policy </span>
              </div>
              <div>
                <img src="/images/icons/arrow-left.svg" />
              </div>
            </div>
          </Link>
          <Link to="/terms-of-use">
            <div className="prof-cont">
              <div>
                <p>Terms of use</p>
                <span>View the terms of use </span>{" "}
              </div>
              <div>
                <img src="/images/icons/arrow-left.svg" />
              </div>
            </div>
          </Link>
          <div className="pl-4 ">
            <button className="text-danger p-0" onClick={handleLogout}>
              Log out
            </button>
            <br />
            <span>Log out from this device.</span>
          </div>
        </section>
      </div>
      <BootstrapModal
        showModal={showModal}
        handleClose={handleClose}
        modalTitle={""}
        modalContent={
          <ModalContent handleClose={handleClose} email={user?.email} />
        }
      />
    </DoctorMenu>
  );
};

export default DoctorProfile;

const ModalContent = ({ handleClose, email }) => {
  const dispatch = useDispatch();

  const [values, setValues] = useState({
    newPassword: "",
    oldPassword: "",
  });
  const handlePwdChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleValidation = () => {
    const { newPassword, oldPassword } = values;

    if (newPassword.length < 8) {
      // toast.error("Password must contain 8 characters.", ErrorToastOptions);
      return false;
    } else if (oldPassword !== oldPassword) {
      // toast.error("Passwords do not match.", ErrorToastOptions);
      return false;
    }

    return true;
  };

  const handlePwdSubmit = async (e) => {
    e.preventDefault();

    const { newPassword, oldPassword } = values;

    if (handleValidation()) {
      try {
        const data = await UpdatePassword(dispatch, {
          email,
          newPassword,
          oldPassword,
        });
        setValues({
          newPassword: "",
          oldPassword: "",
        });
        handleClose();
      } catch (error) {
        console.error("Error updating password:", error);
        // Handle error logic here if needed
      }
    }
  };

  return (
    <>
      <section className="forgot-password p-4">
        <h3 className="mb-4 font-weight-bold">Change Password</h3>
        <p className="mb-1 mt-4 email ml-1">
          Set your New Password So you can access your data{" "}
        </p>
        <form onSubmit={handlePwdSubmit} className="p-1 mt-3">
          <div className="form-group">
            <label htmlFor="newPassword">New Password</label>
            <FormControl
              type="password"
              onChange={handlePwdChange}
              name="newPassword"
              required
              value={values?.newPassword}
              className="form-control mb-3"
            />
          </div>
          <div className="form-group">
            <label htmlFor="oldPassword">Old Password</label>
            <FormControl
              type="password"
              onChange={handlePwdChange}
              name="oldPassword"
              required
              value={values?.oldPassword}
              className="form-control mb-3"
            />
          </div>
          <button
            type="submit"
            className="purple-button w-100 mt-4"
            style={{ height: "55px" }}
          >
            Change Password
          </button>
        </form>
      </section>
    </>
  );
};
