import React, { useEffect, useState } from "react";
import ReactPlaceholder from "react-placeholder";
import { useDispatch, useSelector } from "react-redux";
import DoctorMenu from "../components/layout/DoctorMenu";
import { GetProfileDetails } from "../features/apiCall";
import { logOut } from "../features/authSlice";
import "../styles/profile.css";

const DoctorProfile = () => {
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
      <div className=" m-4 profile">
        <section
          className="p-4  "
          style={{ backgroundColor: "white", margin: "auto" }}
        >
          <div className="d-flex ">
            <img
              src="/images/image3.png"
              height={50}
              style={{ borderRadius: "50%", marginRight: "30px" }}
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
                <h6>{user?.fullname}</h6>
                <p>{user?.email}</p>
              </ReactPlaceholder>
            </div>
          </div>
          <div className="d-flex justify-content-between mt-4">
            <p>Name</p>
            <ReactPlaceholder
              type="text"
              color="#F0F0F0"
              showLoadingAnimation
              rows={1}
              style={{ width: "80%" }}
              ready={!isFetching}
            >
              <span>{user?.fullname}</span>
            </ReactPlaceholder>
          </div>
          <hr />
          <h5 className="mt-4 mb-3">Account security</h5>
          <div className="d-flex justify-content-between prof-cont">
            <p>Email</p>
            <ReactPlaceholder
              type="text"
              color="#F0F0F0"
              showLoadingAnimation
              rows={1}
              style={{ width: "80%" }}
              ready={!isFetching}
            >
              {" "}
              <span>{user?.email}</span>
            </ReactPlaceholder>
          </div>
          <div className=" prof-cont">
            <p>Change Password</p>
            <span>Change password to login to your account.</span>
          </div>
          {/* <div className="d-flex justify-content-between prof-cont">
            <div>
              <p>2-step verification</p>
              <span>
                Add an additional layer of security to your account during
                login.
              </span>
            </div>
            <div>
              <Form>
                <div className="d-flex align-items-center">
                  <span className="me-2">{isChecked ? "On" : "Off"}</span>
                  <Form.Check
                    type="switch"
                    id="toggle-switch"
                    label=""
                    checked={isChecked}
                    onChange={handleToggle}
                  />
                </div>
              </Form>
            </div>
          </div> */}
          <h5 className="mb-3 mt-4">Support</h5>
          {/* <div className="d-flex justify-content-between prof-cont">
            <div>
              <p>Support Access</p>
              <span>
                Grant Ares Elite App support temporary access to your account so
                we can troubleshoot problems or recover content on your behalf.
                You can revoke access at any time.
              </span>
            </div>
            <div>
              <Form>
                <div className="d-flex align-items-center">
                  <span className="me-2">{isChecked ? "On" : "Off"}</span>
                  <Form.Check
                    type="switch"
                    id="toggle-switch"
                    label=""
                    checked={isChecked}
                    onChange={handleToggle}
                  />
                </div>
              </Form>
            </div>
          </div> */}
          <div className="prof-cont">
            <p>Privacy Policy</p>
            <span>View the privacy policy </span>
          </div>
          <div className="prof-cont">
            <p>Terms of use</p>
            <span>View the terms of use </span>
          </div>
          <div className="prof-cont ">
            <button className="text-danger p-0" onClick={handleLogout}>
              Log out
            </button>
            <br />
            <span>Log out from this device.</span>
          </div>
        </section>
      </div>
    </DoctorMenu>
  );
};

export default DoctorProfile;
