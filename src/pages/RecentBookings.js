import { default as React, useEffect, useState } from "react";
import { Dropdown, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import DoctorMenu from "../components/layout/DoctorMenu";
import { GetRecentBookings } from "../features/apiCall";
// import { Group } from "./Group";

const RecentBookings = () => {
  const bookings = useSelector((state) => state.fetch_app.bookings);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5; // Number of items per page
  const dispatch = useDispatch();

  const bookingsData = [
    {
      time: "9:23 AM",
      date: "Oct 17, 2023",
      serviceType: "Sports Vision Performance",
      name: "Mr. Scott Mctominay",
      email: "curtis.weaver@example.com",
      phoneNumber: "(406) 555-0120",
      status: "PAID",
    },
    {
      time: "9:23 AM",
      date: "Oct 17, 2023",
      serviceType: "Sports Vision Performance",
      name: "Mr. Scott Mctominay",
      email: "curtis.weaver@example.com",
      phoneNumber: "(406) 555-0120",
      status: "FAILED",
    },
    {
      time: "9:23 AM",
      date: "Oct 17, 2023",
      serviceType: "Sports Vision Performance",
      name: "Mr. Scott Mctominay",
      email: "curtis.weaver@example.com",
      phoneNumber: "(406) 555-0120",
      status: "PENDING",
    },
    {
      time: "9:23 AM",
      date: "Oct 17, 2023",
      serviceType: "Sports Vision Performance",
      name: "Mr. Scott Mctominay",
      email: "curtis.weaver@example.com",
      phoneNumber: "(406) 555-0120",
      status: "PAID",
    },
    {
      time: "9:23 AM",
      date: "Oct 17, 2023",
      serviceType: "Sports Vision Performance",
      name: "Mr. Scott Mctominay",
      email: "curtis.weaver@example.com",
      phoneNumber: "(406) 555-0120",
      status: "PAID",
    },
    {
      time: "9:23 AM",
      date: "Oct 17, 2023",
      serviceType: "Sports Vision Performance",
      name: "Mr. Scott Mctominay",
      email: "curtis.weaver@example.com",
      phoneNumber: "(406) 555-0120",
      status: "PAID",
    },
    {
      time: "9:23 AM",
      date: "Oct 17, 2023",
      serviceType: "Sports Vision Performance",
      name: "Mr. Scott Mctominay",
      email: "curtis.weaver@example.com",
      phoneNumber: "(406) 555-0120",
      status: "PAID",
    },
    {
      time: "9:23 AM",
      date: "Oct 17, 2023",
      serviceType: "Sports Vision Performance",
      name: "Mr. Scott Mctominay",
      email: "curtis.weaver@example.com",
      phoneNumber: "(406) 555-0120",
      status: "PAID",
    },
    // Add more data objects for each booking...
  ];

  useEffect(() => {
    // Fetch data from your API here
    const fetchData = async () => {
      try {
        await GetRecentBookings(dispatch, { currentPage, pageSize });
        // setAppointments(data); // Assuming your API response is an array of appointments
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  const totalPages = Math.ceil(bookings.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const visibleBookings = bookings.slice(startIndex, startIndex + pageSize);
  console.log(visibleBookings);
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };
  return (
    <DoctorMenu>
      <div className="p-3 main-wrapper mt-5 booking-presc">
        <div className="frame ">
          <div className="d-flex justify-content-between align-items-center recent-booking-head">
            <div style={{ paddingLeft: "15px" }}>
              <h2 className="">Recent Bookings</h2>
            </div>
            <div
              className="input-group mb-3 search-bar"
              style={{ width: "400px" }}
            >
              <input
                type="text"
                className="form-control"
                placeholder="Search..."
                aria-label="Search"
                aria-describedby="searchIcon"
              />
              <div className="input-group-append ">
                <span className="input-group-text" id="searchIcon">
                  <i class="fas fa-search"></i>
                </span>
              </div>
            </div>

            <div
              className=" d-flex flex-row  justify-content-center mt-3"
              style={{ width: "150px", gap: "10px", marginRight: "15px" }}
            >
              <i class="fa-solid fa-calendar m-auto" />
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
            {/* </div> */}
          </div>
          <div className="table-div-booking">
            <Table
              className="table"
              striped
              hover
              variant="light"
              // style={{ height: "70vh" }}
            >
              <thead className="table-head">
                <tr>
                  <th style={{ paddingLeft: "20px" }}>
                    Name <i className="fa-solid fa-sort" />
                  </th>
                  <th>
                    Service Type <i className="fa-solid fa-filter" />
                  </th>
                  <th>
                    Date <i className="fa-solid fa-sort" />
                  </th>
                  <th>
                    Time <i className="fa-solid fa-sort" />
                  </th>
                  <th>
                    Mobile Number <i className="fa-solid fa-sort" />
                  </th>
                  <th>
                    Status <i className="fa-solid fa-filter" />
                  </th>
                  <th></th> {/* Empty th for three dots */}
                </tr>
              </thead>
              <tbody className="recent-bookings-cont">
                {visibleBookings.length > 0 ? (
                  <>
                    {" "}
                    {visibleBookings.map((booking, index) => (
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
                              {booking?.client?.name}{" "}
                            </small>
                            <br />
                            <small className="email">
                              {booking?.client?.email}
                            </small>
                          </div>
                        </td>
                        <td className="service_type">{booking?.serviceType}</td>
                        <td className="date">{booking?.app_date}</td>
                        <td className="time">{booking?.app_time}</td>
                        <td className="phoneno">
                          {booking?.client?.phoneNumber}
                        </td>
                        <td className="status">
                          <div className={`${booking?.status} `}>
                            {booking.status}
                          </div>
                        </td>
                        <td>...</td>
                      </tr>
                    ))}
                  </>
                ) : (
                  <>
                    <tr>
                      <td>
                        {" "}
                        <div className="text-center">No Appointments</div>{" "}
                      </td>
                    </tr>
                  </>
                )}
              </tbody>
            </Table>
            {/* Pagination controls */}
          </div>
        </div>
      </div>
    </DoctorMenu>
  );
};

export default RecentBookings;
