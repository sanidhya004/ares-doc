import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import CompletedRequests from "../components/layout/CompletedRequests";
import DoctorMenu from "../components/layout/DoctorMenu";
import InQueueReuests from "../components/layout/InQueueReuests";

const RecentEvaluation2 = () => {
  const [activeTab, setActiveTab] = useState("InQueue");
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };
  return (
    <DoctorMenu>
      <div className="eval-cont">
        <div className=" evaluation-buttons-cont p-3 mt-2">
          <div className="frame">
            <div className="recent-booking-head">
              <div style={{ paddingLeft: "15px" }}>
                <h2 className="text-gradient text-uppercase">
                  Recent Evaluation
                </h2>
              </div>
              <div
                className="d-flex buttons-cont m-auto mt-4 "
                style={{ width: "100%", paddingLeft: "15px" }}
              >
                <div
                  style={{ paddingRight: "10px" }}
                  className={`bt-2  ${
                    activeTab === "Completed" ? "active bt-3" : ""
                  }`}
                  onClick={() => handleTabChange("Completed")}
                >
                  Completed Requests
                </div>
                <div
                  style={{ paddingLeft: "10px" }}
                  className={`bt-2 ${
                    activeTab === "InQueue" ? "active bt-3" : ""
                  }`}
                  onClick={() => handleTabChange("InQueue")}
                >
                  In-Queue Requests
                </div>
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
              </div>
              {activeTab === "InQueue" ? (
                <InQueueReuests />
              ) : (
                <CompletedRequests />
              )}
            </div>
          </div>
        </div>{" "}
      </div>
    </DoctorMenu>
  );
};

export default RecentEvaluation2;
