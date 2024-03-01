import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import AppointmentTableComponent from "../components/layout/AppointmentTableComponent";
import BootstrapModal from "../components/layout/Components/BootstrapModal";
import DoctorMenu from "../components/layout/DoctorMenu";

const DoctorExpandAppointments = () => {
  const totalPages = 10;
  const isDesktop = window.matchMedia("(min-width: 768px)").matches;
  const isLargeDesktop = window.matchMedia("(min-width: 1900px)").matches;
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState("");
  const handleClose = () => {
    setShowModal(false);
  };

  let pageSize;
  if (isLargeDesktop) {
    pageSize = 13;
  } else if (isDesktop) {
    pageSize = 8;
  } else {
    pageSize = 9;
  }

  const dummyBookingsTomorrow = [
    {
      id: 6,
      name: "John Doe",
      email: "john@example.com",
      mobileNumber: "1234567890",
      service: "Consultation",
      startTime: "10:00 AM",
      endTime: "11:00 AM",
    },
  ];
  const dummyBookings = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      mobileNumber: "1234567890",
      service: "Haircut",
      startTime: "10:00 AM",
      endTime: "11:00 AM",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      mobileNumber: "9876543210",
      service: "Massage",
      startTime: "11:30 AM",
      endTime: "12:30 PM",
    },
    {
      id: 3,
      name: "Alice Johnson",
      email: "alice@example.com",
      mobileNumber: "5555555555",
      service: "Manicure",
      startTime: "1:00 PM",
      endTime: "2:00 PM",
    },
  ];
  const tableHeader = [
    "Name",
    "Email Id",
    "Mobile Number",
    "Service",
    "Start Time",
    "End Time",
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/doctor/dashboard");
  };

  const handleCompleteAppointment = () => {
    setModalData("complete");
    setShowModal(true);
  };

  const handleCancelAppointment = () => {
    setModalData("cancel");
    setShowModal(true);
  };

  return (
    <DoctorMenu>
      <div className="p-3 main-wrapper mt-2 booking-presc ">
        <div className="frame " style={{ overflowY: "hidden" }}>
          <Link
            className="purple-text position-absolute"
            style={{ top: "40px", right: "40px" }}
            to="/doctor/dashboard"
          >
            <i class="fa-solid fa-down-left-and-up-right-to-center" /> Collapse
          </Link>
          <div
            className="recent-booking-head "
            style={{ height: "95vh", borderRadius: "20px" }}
          >
            <div
              className="d-flex align-items-center mt-3"
              style={{ paddingLeft: "15px" }}
            >
              <div
                className="input-group mb-3 search-bar"
                style={{ width: "40%", marginRight: "25px" }}
              >
                <div className="input-group-append ">
                  <span
                    className="input-group-text"
                    id="searchIcon"
                    style={{ borderRadius: "5px 0px 0px 5px" }}
                  >
                    <i className="fas fa-search"></i>
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search..."
                  aria-label="Search"
                  aria-describedby="searchIcon"
                  style={{ height: "40px" }}
                />
              </div>

              <div
                className=" d-flex flex-row  justify-content-center "
                style={{
                  width: "150px",
                  gap: "10px",
                  marginRight: "15px",
                  marginBottom: "18px",
                }}
              >
                <div className="calender-icon">
                  <i className="fa-regular fa-calendar m-auto" />
                </div>
                <Dropdown>
                  <Dropdown.Toggle id="dropdown-pages">
                    {currentPage} of {totalPages}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    {[...Array(totalPages).keys()].map((page) => (
                      <Dropdown.Item
                        key={page + 1}
                        onClick={() => handlePageChange(page + 1)}
                      >
                        {page + 1}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
            <div className="pl-3">
              <div style={{ fontSize: "21px" }} className="mb-3">
                <p className="font-weight-bold d-inline m-0 text-muted pl-1">
                  Today’s appointment
                </p>{" "}
                <span class="dot"></span>
                <span style={{ color: "rgb(178 170 170)", fontSize: "18px" }}>
                  {" "}
                  oct 17, 2023
                </span>
              </div>
              <div>
                {" "}
                <AppointmentTableComponent
                  bookings={dummyBookings}
                  tableHeader={tableHeader}
                  handleCompleteAppointment={handleCompleteAppointment}
                  handleCancelAppointment={handleCancelAppointment}
                />
              </div>
            </div>{" "}
            <div className="pl-3">
              <div style={{ fontSize: "21px" }} className="mb-3">
                <p className="font-weight-bold d-inline m-0 text-muted pl-1">
                  Tommorrow's appointment
                </p>{" "}
                <span class="dot"></span>
                <span style={{ color: "rgb(178 170 170)", fontSize: "18px" }}>
                  {" "}
                  oct 18, 2023
                </span>
              </div>
              <div>
                {" "}
                <AppointmentTableComponent
                  bookings={dummyBookingsTomorrow}
                  tableHeader={tableHeader}
                  handleCompleteAppointment={handleCompleteAppointment}
                  handleCancelAppointment={handleCancelAppointment}
                />
              </div>
            </div>
          </div>{" "}
        </div>{" "}
        <BootstrapModal
          showModal={showModal}
          handleClose={handleClose}
          modalTitle={
            modalData === "complete"
              ? " Appointment Completed?"
              : " Appointment Cancel?"
          }
          modalContent={<ModalContent modalData={modalData} />} // Corrected prop name
        />
      </div>
    </DoctorMenu>
  );
};
export default DoctorExpandAppointments;

const ModalContent = ({ modalData }) => {
  // Corrected prop name
  // alert("hi");
  return (
    <section className="text-center">
      <div className="d-flex check-your-box-texts">
        <p className="text-muted">
          Are you sure that you want to cancel an appointment
          <br /> with
          <span className="purple-text"> Raj K</span> ?
        </p>
        <div className="d-flex justify-content-around mt-4">
          <button
            type="submit"
            className="bt-6  "
            style={{ borderRadius: "10px", width: "200px" }}
          >
            {/* {isFetching ? (
                <>
                  <Spinner size="sm" animation="border" />
                </>
              ) : ( */}
            <>Save</>
            {/* )} */}
          </button>{" "}
          <button
            type="button"
            className="bt-4  bt-5"
            style={{ borderRadius: "10px", width: "200px", margin: "0px" }}
          >
            Cancel
          </button>
        </div>
      </div>
    </section>
  );
};
