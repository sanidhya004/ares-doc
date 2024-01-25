import React from "react";
import { Dropdown, Table } from "react-bootstrap";

const InQueueReuests = () => {
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

    // Add more data objects for each booking...
  ];
  return (
    <>
      <div className="mt-4  main-wrapper">
        <div className="frame">
          <div className="d-flex justify-content-between align-items-center recent-booking-head">
            <div className="">
              <h2 className="" style={{ paddingLeft: "15px" }}>
                In Queue Requests
              </h2>
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
                <Dropdown.Toggle id="dropdown-basic">8 of 230</Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
          <div className="table-div">
            {" "}
            <Table className="table" striped variant="light">
              <thead>
                <tr>
                  <th style={{ paddingLeft: "20px" }}>
                    Name <i className="fa-solid fa-sort" />
                  </th>{" "}
                  <th>
                    Service Type <i className="fa-solid fa-filter" />
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
              <tbody className="recent-bookings-cont">
                {bookingsData.map((booking, index) => (
                  <tr key={index}>
                    <td
                      className=" name-email-image-cont"
                      style={{ paddingLeft: "20px" }}
                    >
                      <img
                        src="/images/image3.png"
                        alt={booking.name}
                        className="recent-booking-person-image "
                        style={{ marginRight: "10px" }}
                      />
                      <div>
                        <small className="name">{booking.name} </small>
                        <br />
                        <small className="email">{booking.email}</small>
                      </div>
                    </td>
                    <td className="service_type">{booking.serviceType}</td>
                    <td className="phoneno">{booking.phoneNumber}</td>
                    <td className="date">{booking.date}</td>
                    <td className="time">{booking.time}</td>

                    <td className="status ">
                      <div
                        className="StartEvaluation "
                        style={{ width: "fit-content" }}
                      >
                        Start Evaluation
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </>
  );
};

export default InQueueReuests;
