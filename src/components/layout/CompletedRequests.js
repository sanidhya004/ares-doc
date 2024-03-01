import React, { useState } from "react";
import { Col, Container, Pagination, Row } from "react-bootstrap";
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
      status: "failed",
      bt: "plan",
    },
    {
      time: "9:23 AM",
      date: "Oct 17, 2023",
      serviceType: "Sports Vision Performance",
      name: "Mr. Scott Mctominay",
      email: "curtis.weaver@example.com",
      phoneNumber: "(406) 555-0120",
      status: "pending",
      bt: "drill",
    },
    {
      time: "9:23 AM",
      date: "Oct 17, 2023",
      serviceType: "Sports Vision Performance",
      name: "Mr. Scott Mctominay",
      email: "curtis.weaver@example.com",
      phoneNumber: "(406) 555-0120",
      status: "paid",
      bt: "drill",
    },
    {
      time: "9:23 AM",
      date: "Oct 17, 2023",
      serviceType: "Sports Vision Performance",
      name: "Mr. Scott Mctominay",
      email: "curtis.weaver@example.com",
      phoneNumber: "(406) 555-0120",
      status: "paid",
      bt: "plan",
    },
    {
      time: "9:23 AM",
      date: "Oct 17, 2023",
      serviceType: "Sports Vision Performance",
      name: "Mr. Scott Mctominay",
      email: "curtis.weaver@example.com",
      phoneNumber: "(406) 555-0120",
      status: "pending",
      bt: "plan",
    },

    // Add more data objects for each booking...
  ];
  const totalPages = 3;
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
      <div className="main-wrapper">
        <div className="table-div">
          <table className="completed-table ">
            <thead>
              <tr>
                <th style={{ paddingLeft: "20px" }}>Name</th>
                <th>
                  Service Type <i className="fa-solid fa-sort" />
                </th>
                <th>Mobile Number</th>
                <th>Date</th>
                <th>Time</th>
                <th>Payment Status</th>
                <th className="text-center">
                  Actions <i className="fa-solid fa-filter" />
                </th>
              </tr>
            </thead>
            <tbody className="recent-bookings-cont">
              {bookingsData.map((booking, index) => (
                <tr key={index}>
                  <td className="" style={{ paddingLeft: "20px" }}>
                    <div className="h-100 d-flex mt-2">
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
                    </div>
                  </td>
                  <td className="service_type">Sports Vision Evaluation</td>
                  <td className="phoneno">{booking.phoneNumber}</td>
                  <td className="date">{booking.date}</td>
                  <td className="time">{booking.time}</td>
                  <td className="status">
                    <div className={`${booking?.status} m-auto `}>
                      <p> {booking.status}</p>
                    </div>
                  </td>{" "}
                  <td className="action ">
                    <Container>
                      <Row>
                        <Col>
                          <button className="action-select-plan ">
                            {booking?.bt == "plan" ? (
                              <>
                                <Link to="/doctor/dashboard/doctor-plans">
                                  {" "}
                                  Select Plan
                                </Link>
                              </>
                            ) : (
                              <>
                                <Link to="/drill"> Start Drill </Link>
                              </>
                            )}
                          </button>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          {" "}
                          <button className="action-view-eval">
                            View Evaluation
                          </button>
                        </Col>
                      </Row>
                    </Container>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default CompletedRequests;
