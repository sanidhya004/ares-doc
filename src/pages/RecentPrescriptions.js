import React, { useEffect, useState } from "react";
import { Dropdown, Pagination, Table } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Loader from "../components/layout/Components/Loader";
import DoctorMenu from "../components/layout/DoctorMenu";
import { GetRecentPrescriptions } from "../features/apiCall";

const RecentPrescriptions = () => {
  const prescriptions = useSelector((state) => state.fetch_app.prescriptions);
  const totalPages = useSelector((state) => state.fetch_app.totalPages);
  const isFetching = useSelector((state) => state.fetch_app.isFetching);
  const [showDateInput, setShowDateInput] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 8; // Number of items per page
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch data from your API here
    const fetchData = async () => {
      if (selectedDate) {
        // Format the date to 'yyyy-MM-dd'
        const formattedDate = new Date(selectedDate).toLocaleDateString(
          "en-CA"
        );

        setSelectedDate(formattedDate);
      }
      try {
        await GetRecentPrescriptions(dispatch, {
          currentPage,
          pageSize,
          selectedDate,
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [currentPage, selectedDate]);
  const startIndex = (currentPage - 1) * pageSize;
  console.log(prescriptions);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };
  const handleDateFilter = (date) => {
    setSelectedDate(date);
  };
  const renderPaginationItems = () => {
    const items = [];
    const range = 1; // Number of pages to show before and after current page

    // Previous Page
    items.push(
      // <Pagination.Prev
      //   key="prev"
      //   onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
      //   disabled={currentPage === 1}
      // />
      <li class="page-item">
        <button
          class="page-link"
          href="#"
          disabled={currentPage === 1}
          onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
        >
          Previous
        </button>
      </li>
    );

    // Pagination Items
    for (
      let i = Math.max(1, currentPage - range);
      i <= Math.min(totalPages, currentPage + range);
      i++
    ) {
      items.push(
        <Pagination.Item
          key={i}
          active={i === currentPage}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </Pagination.Item>
      );
    }

    // Next Page
    items.push(
      <li class="page-item">
        <button
          class="page-link"
          href="#"
          onClick={() =>
            handlePageChange(Math.min(currentPage + 1, totalPages))
          }
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </li>
    );

    return items;
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
            <div
              className="input-group mb-3 search-bar"
              style={{ width: "40%" }}
            >
              <input
                type="text"
                className="form-control"
                placeholder="Search..."
                aria-label="Search"
                aria-describedby="searchIcon"
                style={{ height: "40px" }}
              />
              <div className="input-group-append">
                <span className="input-group-text" id="searchIcon">
                  <i class="fas fa-search"></i>
                </span>
              </div>
            </div>
            <div
              className=" d-flex flex-row "
              style={{
                width: "150px",
                gap: "10px",
                marginRight: "15px",
                marginBottom: "18px",
              }}
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
            <Table className="table" variant="light">
              <thead>
                <tr>
                  <th style={{ paddingLeft: "20px" }}>Name</th>
                  <th>Mobile Number</th>
                  <th>
                    <div className="date-container">
                      <div
                        className="date-display "
                        onClick={() => setShowDateInput(!showDateInput)}
                      >
                        {selectedDate === null
                          ? "Date"
                          : new Date(selectedDate).toLocaleDateString("en-CA")}
                        <i className="fa-solid fa-sort m-1" />
                      </div>
                      {showDateInput && (
                        <DatePicker
                          selected={selectedDate}
                          onChange={(date) => {
                            handleDateFilter(date);
                            setShowDateInput(false);
                          }}
                        />
                      )}
                    </div>
                  </th>
                  <th>
                    Time <i className="fa-solid fa-sort m-1" />
                  </th>
                  <th></th>
                  <th>Action</th>
                </tr>
              </thead>
              {!isFetching ? (
                <>
                  {" "}
                  {prescriptions && prescriptions.length > 0 ? (
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
                              35285482735473
                              {/* {booking?.client?.phone_number} */}
                            </td>
                            <td className="date">{booking?.app_date}</td>
                            <td className="time">{booking?.app_time}</td>
                            {/* <td className="phoneno">
                              {booking?.client?.phone_number}
                            </td> */}
                            <td></td>
                            <td className="status ">
                              <div className="StartPrescription m-auto">
                                <Link
                                  to={`/doctor/dashboard/start-prescription/${booking?.client?.client_id}`}
                                  className=" "
                                >
                                  <p> Start Prescription</p>
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
                  <Loader />
                </>
              )}
            </Table>
          </div>
        </div>
        <div className="pag-cont">
          <Pagination className="m-auto ">{renderPaginationItems()}</Pagination>
        </div>
      </div>
    </DoctorMenu>
  );
};

export default RecentPrescriptions;
