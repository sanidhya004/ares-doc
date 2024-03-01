import React, { useEffect, useState } from "react";
import { Dropdown, Pagination, Table } from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/layout/Components/Loader";
import DoctorMenu from "../components/layout/DoctorMenu";
import { GetRecentBookings } from "../features/apiCall";
const RecentBookings = () => {
  const bookings = useSelector((state) => state.fetch_app.bookings);
  const totalPages = 10;
  const isFetching = useSelector((state) => state.fetch_app.isFetching);
  const [showDateInput, setShowDateInput] = useState(null);
  const [selectedServiceTypes, setSelectedServiceTypes] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const isDesktop = window.matchMedia("(min-width: 768px)").matches;
  const isLargeDesktop = window.matchMedia("(min-width: 1900px)").matches;

  let pageSize;
  if (isLargeDesktop) {
    pageSize = 10;
  } else if (isDesktop) {
    pageSize = 8;
  } else {
    pageSize = 9;
  }

  const dispatch = useDispatch();
  console.log(bookings);
  const fetchData = async () => {
    try {
      const params = {
        currentPage,
        pageSize,
      };

      if (selectedStatus) {
        params.selectedStatus = selectedStatus;
      }

      if (selectedServiceTypes.length > 0) {
        params.selectedServiceTypes = selectedServiceTypes.toString();
      }

      if (selectedDate) {
        const formattedDate = new Date(selectedDate).toLocaleDateString(
          "en-CA"
        );

        params.selectedDate = formattedDate;
      }

      await GetRecentBookings(dispatch, params);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [currentPage, selectedDate, selectedStatus, selectedServiceTypes]);

  const startIndex = (currentPage - 1) * pageSize;
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };
  const Service_ENUM_values = {
    SportsVision: "Sports Vision Evaluation",
    TrainingSessions: "Training Sessions",
    ConcussionEval: "Concussion Evaluation",
    MedicalOfficeVisit: "Medical Office Visit",
    Consultation: "Consultation Call",
  };
  const Status_ENUM_values = {
    paid: "paid",
    pending: "pending",
    failed: "failed",
    All: "All",
  };
  const handleServiceTypeFilter = (selectedServiceType) => {
    setSelectedServiceTypes((prevSelectedServiceTypes) => {
      const updatedServiceTypes = prevSelectedServiceTypes.includes(
        selectedServiceType
      )
        ? prevSelectedServiceTypes.filter(
            (type) => type !== selectedServiceType
          )
        : [...prevSelectedServiceTypes, selectedServiceType];
      console.log(updatedServiceTypes);
      setSelectedServiceTypes(updatedServiceTypes);
      return updatedServiceTypes;
    });
  };
  const handleStatusFilter = (status) => {
    if (status == "All") {
      setSelectedStatus("");
    } else {
      setSelectedStatus(status);
    }
  };

  const handleDateFilter = (date) => {
    setSelectedDate(date);
  };

  const renderPaginationItems = () => {
    const items = [];
    const range = 1;

    items.push(
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
      <div className="p-3 main-wrapper mt-2 booking-presc">
        <div className="frame ">
          <div className="recent-booking-head">
            <div style={{ paddingLeft: "15px" }}>
              <h2 className="text-gradient text-uppercase">Recent Bookings</h2>
            </div>
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
                    <i class="fas fa-search"></i>
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
              {/* </div> */}
            </div>
            <div className="table-div-booking">
              <Table
                className="table"
                // striped
                hover
                // variant="dark"
                // style={{ height: "70vh" }}
              >
                <thead className="table-head">
                  <tr>
                    <th style={{ paddingLeft: "20px" }}>
                      <div>Name</div>
                    </th>
                    <th>
                      <Dropdown>
                        <Dropdown.Toggle
                          variant="light"
                          id="dropdown-basic"
                          style={{ fontWeight: "800" }}
                        >
                          Select Service Types
                          <i className="fa-solid fa-filter m-1" />
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          {Object.keys(Service_ENUM_values).map((key) => (
                            <Dropdown.Item key={key}>
                              <input
                                type="checkbox"
                                id={key}
                                checked={selectedServiceTypes.includes(key)}
                                onChange={() => handleServiceTypeFilter(key)}
                              />{" "}
                              <label htmlFor={key}>
                                {Service_ENUM_values[key]}
                              </label>
                            </Dropdown.Item>
                          ))}
                        </Dropdown.Menu>
                      </Dropdown>
                    </th>
                    <th>
                      {/* <div className="date-container">
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
                    </div> */}
                      Date
                    </th>
                    <th>Time</th>
                    <th>Mobile Number</th>
                    <th>
                      <Dropdown
                        onSelect={(eventKey) => handleStatusFilter(eventKey)}
                      >
                        <Dropdown.Toggle
                          variant="light"
                          id="status-dropdown"
                          style={{ fontWeight: "800" }}
                        >
                          {selectedStatus
                            ? Status_ENUM_values[selectedStatus]
                            : "Payment Status "}
                          <i className="fa-solid fa-filter m-1" />
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          {Object.keys(Status_ENUM_values).map((status) => (
                            <Dropdown.Item key={status} eventKey={status}>
                              {Status_ENUM_values[status]}
                            </Dropdown.Item>
                          ))}
                        </Dropdown.Menu>
                      </Dropdown>
                      {/* Payment Status */}
                    </th>
                    <th>Service Status</th>
                    <th></th>
                  </tr>
                </thead>

                {!isFetching ? (
                  <>
                    <tbody className="recent-bookings-cont">
                      {bookings && bookings.length > 0 ? (
                        <>
                          {bookings.map((booking, index) => (
                            <tr key={index}>
                              <td
                                className=" name-email-image-cont"
                                style={{ paddingLeft: "20px" }}
                              >
                                <img
                                  src="/images/image3.png"
                                  alt={booking?.name}
                                  className="recent-booking-person-image "
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
                              <td className="service_type">
                                {Service_ENUM_values[booking?.service_type]}
                              </td>
                              <td className="date">{booking?.app_date}</td>
                              <td className="time">{booking?.app_time}</td>
                              <td className="phoneno">98107213755</td>
                              <td className="status">
                                <div className={`${booking?.status} m-auto`}>
                                  <p> {booking.status}</p>
                                </div>
                              </td>
                              <td
                                className={`${booking?.service_status} m-auto complete service-status`}
                              >
                                Consultation Completed
                              </td>
                              <td>...</td>
                            </tr>
                          ))}
                        </>
                      ) : (
                        <>
                          <tr>
                            <td>
                              <div className="text-center ">
                                No Appointments
                              </div>
                            </td>
                          </tr>
                        </>
                      )}
                    </tbody>
                  </>
                ) : (
                  <>
                    <Loader />
                  </>
                )}
              </Table>
            </div>
          </div>
          {/* <div className="pag-cont">
          <Pagination className="m-auto ">{renderPaginationItems()}</Pagination>
        </div> */}
        </div>
      </div>
    </DoctorMenu>
  );
};

export default RecentBookings;
