import React, { useEffect, useState } from "react";
import { Accordion, Col, ProgressBar, Row } from "react-bootstrap";
// import { ProgressBar } from "react-toastify/dist/components";
import DoctorMenu from "../components/layout/DoctorMenu";
import DrillForm from "../components/layout/DrillForm";

const Drill = () => {
  // State to keep track of the selected week
  const [selectedWeek, setSelectedWeek] = useState(1);
  // State to store total weeks
  const [totalWeeks, setTotalWeeks] = useState(6);

  // Function to handle week selection
  const handleWeekSelect = (weekNumber) => {
    setSelectedWeek(weekNumber);
    // Fetch data from the API based on the selected week
    // Implement your API fetching logic here
    // For simplicity, let's just log the selected week for now
    console.log("Fetching data for Week", weekNumber);
  };

  useEffect(() => {
    // Fetch total weeks and other week data from the API
    // For demonstration purposes, I'm assuming an endpoint that returns the total weeks
    fetch("your_api_endpoint_for_total_weeks")
      .then((response) => response.json())
      .then((data) => {
        // Update the state with the total weeks
        setTotalWeeks(data.totalWeeks);
      })
      .catch((error) => {
        console.error("Error fetching total weeks:", error);
      });
  }, []);

  return (
    <DoctorMenu>
      <div
        className="d-flex Doctor-home  flex-wrap "
        style={{
          justifyContent: "space-evenly",
          fontFamily: "Plus Jakarta Sans, sans-serif",
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            height: "100%",
            width: "47%",
            borderRadius: "14px",
            padding: "20px",
            overflowY: "hidden",
          }}
        >
          <Row>
            {" "}
            <div style={{ fontSize: "20px" }}>
              <p className="font-weight-bold d-inline m-0"> Drills</p>{" "}
              <span class="dot"></span>
              <span> Mr. Scott Mctominay</span>
            </div>
          </Row>

          <Row>
            {" "}
            <div style={{ width: "100%" }}>
              <div
                style={{ width: "fit-content" }}
                className="d-flex buttons-cont m-auto mt-4 "
              >
                {/* Render buttons for each week */}
                {[...Array(totalWeeks)].map((_, index) => (
                  <div
                    key={index}
                    style={{ padding: "5px 13px 5px 13px" }}
                    className={`bt-${selectedWeek === index + 1 ? "3" : "2"}`}
                    onClick={() => handleWeekSelect(index + 1)}
                  >
                    Week {index + 1}
                  </div>
                ))}
              </div>
            </div>
          </Row>
          <br />
          <Row>
            <Col className="">
              <p className="font-weight-bold d-inline m-0">
                {" "}
                Elite (P1)- Week 1/Day1/NeuroTrainer(Calibration)
              </p>
              {/* <video src="/images/produ.mp4" className=" w-100 " controls /> */}
            </Col>
          </Row>
          <Row className="bg-white mt-3 ">
            <Col>
              <div className="d-flex  justify-content-between">
                <h6 style={{ fontWeight: "300" }}>Drill Contents</h6>
                <p
                  style={{ fontWeight: "400", fontSize: "12px" }}
                  className="text-success"
                >
                  15% Completed
                </p>
              </div>
              <ProgressBar
                now={20}
                variant="success"
                animated
                style={{ height: "5px" }}
                className="mb-2"
              />{" "}
              <section className="mt-4">
                <Accordion defaultActiveKey={["0"]} alwaysOpen>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      <h6 className="w-25">Day 1</h6>
                      <div className="d-flex acc-head-cont">
                        <div>
                          <img src="/images/icon/playcircle.svg" />
                          <p> 4 Drills</p>
                        </div>
                        <div>
                          <img src="/images/icon/clock.svg" />
                          <p> 51m</p>
                        </div>
                        <div>
                          <img src="/images/icon/checks.svg" />
                          <p> 25% finish (1/4)</p>
                        </div>
                      </div>
                    </Accordion.Header>
                    <Accordion.Body>
                      <div className="days-cont">
                        <div class="checkbox-wrapper-43">
                          <input type="checkbox" id="1" />
                          <label for="1" class="check d-inline">
                            <svg width="18px" height="18px" viewBox="0 0 18 18">
                              <path d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z"></path>
                              <polyline points="1 9 7 14 15 4"></polyline>
                            </svg>

                            <p className="d-inline">
                              1. Welcome to Ares Elite Academy
                            </p>
                          </label>
                        </div>
                      </div>{" "}
                      <div className="days-cont">
                        <div class="checkbox-wrapper-43">
                          <input type="checkbox" id="2" />
                          <label for="2" class="check d-inline">
                            <svg width="18px" height="18px" viewBox="0 0 18 18">
                              <path d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z"></path>
                              <polyline points="1 9 7 14 15 4"></polyline>
                            </svg>

                            <p className="d-inline">
                              2. NeuroTrainer (Calibration)
                            </p>
                          </label>
                        </div>
                      </div>{" "}
                      <div className="days-cont">
                        <div class="checkbox-wrapper-43">
                          <input type="checkbox" id="3" />
                          <label for="3" class="check d-inline">
                            <svg width="18px" height="18px" viewBox="0 0 18 18">
                              <path d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z"></path>
                              <polyline points="1 9 7 14 15 4"></polyline>
                            </svg>

                            <p className="d-inline">
                              3. Senaptec (Eye Hand Coordination)
                            </p>
                          </label>
                        </div>
                      </div>{" "}
                      <div className="days-cont">
                        <div class="checkbox-wrapper-43">
                          <input type="checkbox" id="4" />
                          <label for="4" class="check d-inline">
                            <svg width="18px" height="18px" viewBox="0 0 18 18">
                              <path d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z"></path>
                              <polyline points="1 9 7 14 15 4"></polyline>
                            </svg>

                            <p className="d-inline">
                              1. Welcome to Ares Elite Academy
                            </p>
                          </label>
                        </div>
                      </div>{" "}
                      <div className="days-cont">
                        <div class="checkbox-wrapper-43">
                          <input type="checkbox" id="5" />
                          <label for="5" class="check d-inline">
                            <svg width="18px" height="18px" viewBox="0 0 18 18">
                              <path d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z"></path>
                              <polyline points="1 9 7 14 15 4"></polyline>
                            </svg>

                            <p className="d-inline">
                              4. Senaptec Eye Hand Coordination Recordings (3x)
                            </p>
                          </label>
                        </div>
                      </div>{" "}
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      {" "}
                      <h6 className="w-25">Day 2</h6>
                      <div className="d-flex acc-head-cont">
                        <div>
                          <img src="/images/icon/playcircle.svg" />
                          <p> 4 Drills</p>
                        </div>
                        <div>
                          <img src="/images/icon/clock.svg" />
                          <p> 51m</p>
                        </div>
                        <div>
                          <img src="/images/icon/checks.svg" />
                          <p> 25% finish (1/4)</p>
                        </div>
                      </div>
                    </Accordion.Header>
                    <Accordion.Body>
                      <div className="days-cont">
                        <div class="checkbox-wrapper-43">
                          <input type="checkbox" id="1" />
                          <label for="1" class="check d-inline">
                            <svg width="18px" height="18px" viewBox="0 0 18 18">
                              <path d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z"></path>
                              <polyline points="1 9 7 14 15 4"></polyline>
                            </svg>

                            <p className="d-inline">
                              1. Welcome to Ares Elite Academy
                            </p>
                          </label>
                        </div>
                      </div>{" "}
                      <div className="days-cont">
                        <div class="checkbox-wrapper-43">
                          <input type="checkbox" id="2" />
                          <label for="2" class="check d-inline">
                            <svg width="18px" height="18px" viewBox="0 0 18 18">
                              <path d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z"></path>
                              <polyline points="1 9 7 14 15 4"></polyline>
                            </svg>

                            <p className="d-inline">
                              2. NeuroTrainer (Calibration)
                            </p>
                          </label>
                        </div>
                      </div>{" "}
                      <div className="days-cont">
                        <div class="checkbox-wrapper-43">
                          <input type="checkbox" id="3" />
                          <label for="3" class="check d-inline">
                            <svg width="18px" height="18px" viewBox="0 0 18 18">
                              <path d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z"></path>
                              <polyline points="1 9 7 14 15 4"></polyline>
                            </svg>

                            <p className="d-inline">
                              3. Senaptec (Eye Hand Coordination)
                            </p>
                          </label>
                        </div>
                      </div>{" "}
                      <div className="days-cont">
                        <div class="checkbox-wrapper-43">
                          <input type="checkbox" id="4" />
                          <label for="4" class="check d-inline">
                            <svg width="18px" height="18px" viewBox="0 0 18 18">
                              <path d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z"></path>
                              <polyline points="1 9 7 14 15 4"></polyline>
                            </svg>

                            <p className="d-inline">
                              1. Welcome to Ares Elite Academy
                            </p>
                          </label>
                        </div>
                      </div>{" "}
                      <div className="days-cont">
                        <div class="checkbox-wrapper-43">
                          <input type="checkbox" id="5" />
                          <label for="5" class="check d-inline">
                            <svg width="18px" height="18px" viewBox="0 0 18 18">
                              <path d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z"></path>
                              <polyline points="1 9 7 14 15 4"></polyline>
                            </svg>

                            <p className="d-inline">
                              4. Senaptec Eye Hand Coordination Recordings (3x)
                            </p>
                          </label>
                        </div>
                      </div>{" "}
                    </Accordion.Body>
                  </Accordion.Item>{" "}
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>
                      {" "}
                      <h6 className="w-25">Day 3</h6>
                      <div className="d-flex acc-head-cont">
                        <div>
                          <img src="/images/icon/playcircle.svg" />
                          <p> 4 Drills</p>
                        </div>
                        <div>
                          <img src="/images/icon/clock.svg" />
                          <p> 51m</p>
                        </div>
                        <div>
                          <img src="/images/icon/checks.svg" />
                          <p> 25% finish (1/4)</p>
                        </div>
                      </div>
                    </Accordion.Header>
                    <Accordion.Body>
                      <div className="days-cont">
                        <div class="checkbox-wrapper-43">
                          <input type="checkbox" id="1" />
                          <label for="1" class="check d-inline">
                            <svg width="18px" height="18px" viewBox="0 0 18 18">
                              <path d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z"></path>
                              <polyline points="1 9 7 14 15 4"></polyline>
                            </svg>

                            <p className="d-inline">
                              1. Welcome to Ares Elite Academy
                            </p>
                          </label>
                        </div>
                      </div>{" "}
                      <div className="days-cont">
                        <div class="checkbox-wrapper-43">
                          <input type="checkbox" id="2" />
                          <label for="2" class="check d-inline">
                            <svg width="18px" height="18px" viewBox="0 0 18 18">
                              <path d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z"></path>
                              <polyline points="1 9 7 14 15 4"></polyline>
                            </svg>

                            <p className="d-inline">
                              2. NeuroTrainer (Calibration)
                            </p>
                          </label>
                        </div>
                      </div>{" "}
                      <div className="days-cont">
                        <div class="checkbox-wrapper-43">
                          <input type="checkbox" id="3" />
                          <label for="3" class="check d-inline">
                            <svg width="18px" height="18px" viewBox="0 0 18 18">
                              <path d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z"></path>
                              <polyline points="1 9 7 14 15 4"></polyline>
                            </svg>

                            <p className="d-inline">
                              3. Senaptec (Eye Hand Coordination)
                            </p>
                          </label>
                        </div>
                      </div>{" "}
                      <div className="days-cont">
                        <div class="checkbox-wrapper-43">
                          <input type="checkbox" id="4" />
                          <label for="4" class="check d-inline">
                            <svg width="18px" height="18px" viewBox="0 0 18 18">
                              <path d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z"></path>
                              <polyline points="1 9 7 14 15 4"></polyline>
                            </svg>

                            <p className="d-inline">
                              1. Welcome to Ares Elite Academy
                            </p>
                          </label>
                        </div>
                      </div>{" "}
                      <div className="days-cont">
                        <div class="checkbox-wrapper-43">
                          <input type="checkbox" id="5" />
                          <label for="5" class="check d-inline">
                            <svg width="18px" height="18px" viewBox="0 0 18 18">
                              <path d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z"></path>
                              <polyline points="1 9 7 14 15 4"></polyline>
                            </svg>

                            <p className="d-inline">
                              4. Senaptec Eye Hand Coordination Recordings (3x)
                            </p>
                          </label>
                        </div>
                      </div>{" "}
                    </Accordion.Body>
                  </Accordion.Item>{" "}
                  <Accordion.Item eventKey="3">
                    <Accordion.Header>
                      {" "}
                      <h6 className="w-25">Day 4</h6>
                      <div className="d-flex acc-head-cont">
                        <div>
                          <img src="/images/icon/playcircle.svg" />
                          <p> 4 Drills</p>
                        </div>
                        <div>
                          <img src="/images/icon/clock.svg" />
                          <p> 51m</p>
                        </div>
                        <div>
                          <img src="/images/icon/checks.svg" />
                          <p> 25% finish (1/4)</p>
                        </div>
                      </div>
                    </Accordion.Header>
                    <Accordion.Body>
                      <div className="days-cont">
                        <div class="checkbox-wrapper-43">
                          <input type="checkbox" id="1" />
                          <label for="1" class="check d-inline">
                            <svg width="18px" height="18px" viewBox="0 0 18 18">
                              <path d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z"></path>
                              <polyline points="1 9 7 14 15 4"></polyline>
                            </svg>

                            <p className="d-inline">
                              1. Welcome to Ares Elite Academy
                            </p>
                          </label>
                        </div>
                      </div>{" "}
                      <div className="days-cont">
                        <div class="checkbox-wrapper-43">
                          <input type="checkbox" id="2" />
                          <label for="2" class="check d-inline">
                            <svg width="18px" height="18px" viewBox="0 0 18 18">
                              <path d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z"></path>
                              <polyline points="1 9 7 14 15 4"></polyline>
                            </svg>

                            <p className="d-inline">
                              2. NeuroTrainer (Calibration)
                            </p>
                          </label>
                        </div>
                      </div>{" "}
                      <div className="days-cont">
                        <div class="checkbox-wrapper-43">
                          <input type="checkbox" id="3" />
                          <label for="3" class="check d-inline">
                            <svg width="18px" height="18px" viewBox="0 0 18 18">
                              <path d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z"></path>
                              <polyline points="1 9 7 14 15 4"></polyline>
                            </svg>

                            <p className="d-inline">
                              3. Senaptec (Eye Hand Coordination)
                            </p>
                          </label>
                        </div>
                      </div>{" "}
                      <div className="days-cont">
                        <div class="checkbox-wrapper-43">
                          <input type="checkbox" id="4" />
                          <label for="4" class="check d-inline">
                            <svg width="18px" height="18px" viewBox="0 0 18 18">
                              <path d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z"></path>
                              <polyline points="1 9 7 14 15 4"></polyline>
                            </svg>

                            <p className="d-inline">
                              1. Welcome to Ares Elite Academy
                            </p>
                          </label>
                        </div>
                      </div>{" "}
                      <div className="days-cont">
                        <div class="checkbox-wrapper-43">
                          <input type="checkbox" id="5" />
                          <label for="5" class="check d-inline">
                            <svg width="18px" height="18px" viewBox="0 0 18 18">
                              <path d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z"></path>
                              <polyline points="1 9 7 14 15 4"></polyline>
                            </svg>

                            <p className="d-inline">
                              4. Senaptec Eye Hand Coordination Recordings (3x)
                            </p>
                          </label>
                        </div>
                      </div>{" "}
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </section>
            </Col>
          </Row>
        </div>
        <div
          className="drill-form"
          style={{
            backgroundColor: "white",
            height: "100%",
            width: "47%",
            borderRadius: "14px",
            padding: "20px",
          }}
        >
          <DrillForm />
        </div>
      </div>
    </DoctorMenu>
  );
};

export default Drill;
