import React, { useEffect, useState } from "react";
import { Dropdown, Spinner, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import DoctorMenu from "../components/layout/DoctorMenu";
import { GetRecentPrescriptions } from "../features/apiCall";

const RecentPrescriptions = () => {
  const prescriptions = useSelector((state) => state.fetch_app.prescriptions);
  const totalPages = useSelector((state) => state.fetch_app.totalPages);
  const isFetching = useSelector((state) => state.fetch_app.isFetching);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 8; // Number of items per page
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch data from your API here
    const fetchData = async () => {
      try {
        await GetRecentPrescriptions(dispatch, { currentPage, pageSize });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [currentPage]);
  const startIndex = (currentPage - 1) * pageSize;
  console.log(prescriptions);
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <DoctorMenu>
      <div className="p-3 main-wrapper mt-5 booking-presc">
        <div className="frame">
          <div className="d-flex justify-content-between align-items-center recent-booking-head">
            <div className="">
              <h2 className="" style={{ paddingLeft: "15px" }}>
                Prescription Requests
              </h2>
            </div>
            <div className="input-group mb-3 " style={{ width: "400px" }}>
              <input
                type="text"
                className="form-control"
                placeholder="Search..."
                aria-label="Search"
                aria-describedby="searchIcon"
              />
              <div className="input-group-append">
                <span className="input-group-text" id="searchIcon">
                  <i class="fas fa-search"></i>
                </span>
              </div>
            </div>
            <div
              className=" d-flex flex-row "
              style={{ width: "150px", gap: "10px", marginRight: "15px" }}
            >
              <i class="fa-solid fa-calendar m-auto"></i>
              <Dropdown>
                <Dropdown.Toggle id="dropdown-basic">
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
          <div className="table-div-booking">
            <Table className="table" striped variant="light">
              <thead>
                <tr>
                  <th style={{ paddingLeft: "20px" }}>
                    Name <i className="fa-solid fa-sort" />
                  </th>
                  <th>
                    Mobile Number <i className="fa-solid fa-sort" />
                  </th>
                  <th>
                    Date <i className="fa-solid fa-sort" />
                  </th>
                  <th>
                    Time <i className="fa-solid fa-sort" />
                  </th>
                  <th>
                    Action <i className="fa-solid fa-filter" />
                  </th>
                </tr>
              </thead>
              {!isFetching ? (
                <>
                  {" "}
                  {prescriptions.length > 0 ? (
                    <>
                      {" "}
                      <tbody className="recent-bookings-cont">
                        {prescriptions.map((booking, index) => (
                          <tr key={index}>
                            <td
                              className="name-email-image-cont"
                              style={{ paddingLeft: "20px" }}
                            >
                              <img
                                src="/images/image3.png"
                                alt={booking.name}
                                className="recent-booking-person-image"
                                style={{ marginRight: "10px" }}
                              />
                              <div>
                                <small className="name">
                                  {booking?.client?.first_name}{" "}
                                  {booking?.client?.last_name}
                                </small>
                                <br />
                                <small className="email">
                                  {booking?.client?.email}
                                </small>
                              </div>
                            </td>
                            <td className="phoneno">
                              {" "}
                              {booking?.client?.phone_number}
                            </td>
                            <td className="date">{booking?.app_date}</td>
                            <td className="time">{booking?.app_time}</td>
                            {/* <td className="phoneno">
                              {booking?.client?.phone_number}
                            </td> */}
                            <td className="status ">
                              <div className="StartEvaluation w-75">
                                <Link to="/doctor/dashboard/start-prescription">
                                  Start Prescription
                                </Link>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </>
                  ) : (
                    <div className="no-details">
                      {" "}
                      <p className="text-center ">No Appointments</p>
                    </div>
                  )}
                </>
              ) : (
                <>
                  <Spinner className="m-auto" />
                </>
              )}
            </Table>
          </div>
        </div>
      </div>
    </DoctorMenu>
  );
};

export default RecentPrescriptions;
