import React, { useEffect, useState } from "react";
import {
  Col,
  Container,
  Dropdown,
  Pagination,
  Row,
  Table,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { GetCompletedRequests } from "../../features/apiCall";
import Loader from "./Components/Loader";

const CompletedRequests = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const isFetching = useSelector((state) => state.fetch_app.isFetching);

  const isDesktop = window.matchMedia("(min-width: 768px)").matches;
  const pageSize = isDesktop ? 8 : 9;
  const totalPages = useSelector((state) => state.fetch_app.totalPages);
  const completed = useSelector((state) => state.fetch_app.completed);

  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedServiceTypes, setSelectedServiceTypes] = useState([]);
  function formatDate(dateString) {
    const dateObject = new Date(dateString);
    const day = dateObject.getDate().toString().padStart(2, "0");
    const month = (dateObject.getMonth() + 1).toString().padStart(2, "0"); // Months are zero-based
    const year = dateObject.getFullYear();

    return `${month}-${day}-${year}`;
  }
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); // Reset pagination when search query changes
  };

  const fetchData = async () => {
    try {
      // Create an object to hold the parameters
      const params = {
        currentPage,
        pageSize,
      };
      if (searchQuery) {
        params.searchQuery = searchQuery;
      }

      if (selectedServiceTypes.length > 0) {
        params.selectedServiceTypes = selectedServiceTypes.toString();
      }

      if (selectedDate) {
        // Format the date to 'yyyy-MM-dd'
        const formattedDate = new Date(selectedDate).toLocaleDateString(
          "en-CA"
        );
        params.selectedDate = formattedDate;
      }

      await GetCompletedRequests(dispatch, params);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData(); // Fetch data whenever currentPage changes
  }, [currentPage, selectedDate, selectedServiceTypes, searchQuery]);

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
            value={searchQuery}
            onChange={handleSearchChange}
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
      <div className="main-wrapper">
        <div className="table-div">
          <Table className="completed-table ">
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
            {!isFetching ? (
              <>
                <tbody className="recent-bookings-cont">
                  {completed && completed.length > 0 ? (
                    <>
                      {completed &&
                        completed.map((booking, index) => (
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
                                  <small className="name">
                                    {booking?.client?.firstName}{" "}
                                    {booking?.client?.lastName}
                                  </small>
                                  <br />
                                  <small className="email">
                                    {booking?.client?.email}
                                  </small>
                                </div>
                              </div>
                            </td>
                            <td>{booking?.service_type}</td>
                            <td className="phoneno">
                              {booking?.client?.phone}
                            </td>
                            <td className="date">
                              {formatDate(booking?.app_date)}
                            </td>
                            <td className="time">{booking?.app_time}</td>
                            <td className="status">
                              <div className={`${booking?.status} m-auto `}>
                                <p>
                                  {!booking?.client?.plan ? (
                                    <>N.A</>
                                  ) : (
                                    <> {booking?.client?.plan_payment}</>
                                  )}
                                </p>
                              </div>
                            </td>{" "}
                            <td className="action ">
                              <Container>
                                <Row>
                                  <Col>
                                    <button className="action-select-plan ">
                                      {!booking?.client?.plan ? (
                                        <>
                                          <Link
                                            to={`/doctor/dashboard/doctor-plans/${booking?.client?._id}`}
                                          >
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
                                      <Link
                                        to={`/doctor/dashboard/view-eval-form/${booking?._id}`}
                                      >
                                        {" "}
                                        View Evaluation
                                      </Link>
                                    </button>
                                  </Col>
                                </Row>
                              </Container>
                            </td>
                          </tr>
                        ))}
                    </>
                  ) : (
                    <>No appointments</>
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
    </>
  );
};

export default CompletedRequests;
