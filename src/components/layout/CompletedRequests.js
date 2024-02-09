import React, { useState } from "react";
import { Dropdown, Pagination, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const CompletedRequests = () => {
  const [currentPage, setCurrentPage] = useState(1);

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
  const totalPages = 10;
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
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
    <>
      <div className="mt-4 main-wrapper">
        <div className="frame">
          <div className="d-flex justify-content-between align-items-center recent-booking-head">
            <div className="">
              <h2 className="" style={{ paddingLeft: "15px" }}>
                Completed Requests
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
              <i class="fa-solid fa-calendar m-auto" />
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
                  <th className="text-center">
                    Actions <i className="fa-solid fa-filter" />
                  </th>
                  <th></th>
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
                    <td className="phoneno">{booking.phoneNumber}</td>
                    <td className="date">{booking.date}</td>
                    <td className="time">{booking.time}</td>
                    <td className="action  ">
                      <button
                        className="action-select-plan"
                        style={{ marginRight: "20px" }}
                      >
                        <Link to="/doctor/dashboard/doctor-plans">
                          {" "}
                          Select Plan
                        </Link>
                      </button>
                      <button className="action-view-eval">
                        View Evaluation
                      </button>
                    </td>{" "}
                    <td>...</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
        <div className="pag-cont">
          <Pagination className="m-auto ">{renderPaginationItems()}</Pagination>
        </div>
      </div>
    </>
  );
};

export default CompletedRequests;
