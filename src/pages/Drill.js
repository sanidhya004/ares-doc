// import React, { useEffect, useState } from "react";
// import { Accordion, Col, ProgressBar, Row } from "react-bootstrap";
// // import { ProgressBar } from "react-toastify/dist/components";
// import DoctorMenu from "../components/layout/DoctorMenu";

// const Drill = () => {
//   // State to keep track of the selected week
//   const [selectedWeek, setSelectedWeek] = useState(1);
//   // State to store total weeks
//   const [totalWeeks, setTotalWeeks] = useState(6);
//   //   const [drillData, setDrillData] = useState([]); // State to store drill data

//   // Function to handle week selection
//   const handleWeekSelect = (weekNumber) => {
//     setSelectedWeek(weekNumber);
//     // Fetch data from the API based on the selected week
//     // Implement your API fetching logic here
//     // For simplicity, let's just log the selected week for now
//     console.log("Fetching data for Week", weekNumber);
//   };

//   useEffect(() => {
//     // Fetch total weeks and other week data from the API
//     // For demonstration purposes, I'm assuming an endpoint that returns the total weeks
//     fetch("your_api_endpoint_for_total_weeks")
//       .then((response) => response.json())
//       .then((data) => {
//         // Update the state with the total weeks
//         setTotalWeeks(data.totalWeeks);
//       })
//       .catch((error) => {
//         console.error("Error fetching total weeks:", error);
//       });
//   }, []);

//   const drillData = {
//     day1: [
//       {
//         id: 1,
//         title: "Welcome to Ares Elite Academy",
//         duration: "07:31",
//         completed: false,
//       },
//       {
//         id: 2,
//         title: "NeuroTrainer (Calibration)",
//         duration: "07:31",
//         completed: false,
//       },
//       {
//         id: 3,
//         title: "Senaptec (Eye Hand Coordination)",
//         duration: "07:31",
//         completed: false,
//       },
//       {
//         id: 4,
//         title: "Senaptec Eye Hand Coordination Recordings (3x)",
//         duration: "07:31",
//         completed: false,
//       },
//     ],
//     day2: [
//       {
//         id: 1,
//         title: "Welcome to Ares Elite Academy",
//         duration: "07:31",
//         completed: false,
//       },
//       {
//         id: 2,
//         title: "NeuroTrainer (Calibration)",
//         duration: "07:31",
//         completed: false,
//       },
//       {
//         id: 3,
//         title: "Senaptec (Eye Hand Coordination)",
//         duration: "07:31",
//         completed: false,
//       },
//       {
//         id: 4,
//         title: "Senaptec Eye Hand Coordination Recordings (3x)",
//         duration: "07:31",
//         completed: false,
//       },
//     ],
//     day3: [
//       {
//         id: 1,
//         title: "Welcome to Ares Elite Academy",
//         duration: "07:31",
//         completed: false,
//       },
//       {
//         id: 2,
//         title: "NeuroTrainer (Calibration)",
//         duration: "07:31",
//         completed: false,
//       },
//       {
//         id: 3,
//         title: "Senaptec (Eye Hand Coordination)",
//         duration: "07:31",
//         completed: false,
//       },
//       {
//         id: 4,
//         title: "Senaptec Eye Hand Coordination Recordings (3x)",
//         duration: "07:31",
//         completed: false,
//       },
//     ],
//     day4: [
//       {
//         id: 1,
//         title: "Welcome to Ares Elite Academy",
//         duration: "07:31",
//         completed: false,
//       },
//       {
//         id: 2,
//         title: "NeuroTrainer (Calibration)",
//         duration: "07:31",
//         completed: false,
//       },
//       {
//         id: 3,
//         title: "Senaptec (Eye Hand Coordination)",
//         duration: "07:31",
//         completed: false,
//       },
//       {
//         id: 4,
//         title: "Senaptec Eye Hand Coordination Recordings (3x)",
//         duration: "07:31",
//         completed: false,
//       },
//     ],
//     // Add more days as needed
//   };

//   return (
//     <DoctorMenu>
//       <div
//         className="d-flex Doctor-home  flex-wrap "
//         style={{ justifyContent: "space-evenly" }}
//       >
//         <div
//           style={{
//             backgroundColor: "white",
//             height: "100%",
//             width: "47%",
//             borderRadius: "14px",
//             padding: "20px",
//             overflowY: "hidden",
//           }}
//         >
//           <Row>
//             <Col>
//               {" "}
//               <div style={{ fontSize: "20px" }}>
//                 <p className="font-weight-bold d-inline m-0"> Drills</p>{" "}
//                 <span class="dot"></span>
//                 <span> Mr. Scott Mctominay</span>
//               </div>
//             </Col>{" "}
//           </Row>

//           <Row>
//             <Col>
//               <div style={{ width: "100%" }}>
//                 <div
//                   style={{ width: "fit-content" }}
//                   className="d-flex buttons-cont m-auto mt-4 "
//                 >
//                   {/* Render buttons for each week */}
//                   {[...Array(totalWeeks)].map((_, index) => (
//                     <div
//                       key={index}
//                       style={{ padding: "5px 13px 5px 13px" }}
//                       className={`bt-${selectedWeek === index + 1 ? "3" : "2"}`}
//                       onClick={() => handleWeekSelect(index + 1)}
//                     >
//                       Week {index + 1}
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </Col>{" "}
//           </Row>
//           <br />
//           <Row>
//             <Col className="">
//               <h5>Elite (P1)- Week 1/Day1/NeuroTrainer(Calibration)</h5>
//               {/* <video src="/images/produ.mp4" className=" w-100 " controls /> */}
//             </Col>
//           </Row>
//           <Row className="bg-white mt-3 ">
//             <Col>
//               <div className="d-flex  justify-content-between">
//                 <h6 style={{ fontWeight: "300" }}>Drill Contents</h6>
//                 <p
//                   style={{ fontWeight: "400", fontSize: "12px" }}
//                   className="text-success"
//                 >
//                   15% Completed
//                 </p>
//               </div>
//               <ProgressBar
//                 now={20}
//                 variant="success"
//                 animated
//                 style={{ height: "5px" }}
//                 className="mb-2"
//               />{" "}
//               <section>
//                 <Accordion defaultActiveKey={["0"]} alwaysOpen>
//                   {Object.keys(drillData).map((day, index) => (
//                     <Accordion.Item key={index} eventKey={index.toString()}>
//                       <Accordion.Header>
//                         <h6 className="w-25">{day}</h6>
//                         <div className="d-flex acc-head-cont">
//                           <div>
//                             <img src="/images/icon/playcircle.svg" />
//                             <p> {drillData[day].length} Drills</p>
//                           </div>
//                           <div>
//                             <img src="/images/icon/clock.svg" alt="clock" />
//                             <p>
//                               {drillData[day].map((drill) => drill.duration)}
//                             </p>
//                           </div>
//                           <div>
//                             <img src="/images/icon/checks.svg" alt="checks" />
//                             <p>
//                               {" "}
//                               {drillData[day].map((drill) => drill.completed)}
//                             </p>
//                           </div>
//                         </div>
//                       </Accordion.Header>
//                       <Accordion.Body>
//                         {drillData[day].map((drill, drillIndex) => (
//                           <div key={drillIndex} className="days-cont">
//                             <div className="checkbox-wrapper-43">
//                               <input
//                                 type="checkbox"
//                                 id={`${index}-${drillIndex}`}
//                               />
//                               <label
//                                 htmlFor={`${index}-${drillIndex}`}
//                                 className="check d-inline"
//                               >
//                                 <svg
//                                   width="18px"
//                                   height="18px"
//                                   viewBox="0 0 18 18"
//                                 >
//                                   <path
//                                     d="M15.25 3.25H2.75C1.645 3.25 0.75 4.145 0.75 5.25V12.75C0.75 13.855 1.645 14.75 2.75 14.75H15.25C16.355 14.75 17.25 13.855 17.25 12.75V5.25C17.25 4.145 16.355 3.25 15.25 3.25ZM15.25 5.25V12.75H2.75V5.25H15.25Z"
//                                     fill="black"
//                                   />
//                                   <path
//                                     d="M12.125 6.625L8.125 11.625C8.025 11.725 7.9 11.75 7.775 11.75C7.65 11.75 7.525 11.725 7.425 11.625L5.425 9.625C5.225 9.425 5.225 9.125 5.425 8.925C5.625 8.725 5.925 8.725 6.125 8.925L7.775 10.575L11.875 6.475C12.075 6.275 12.375 6.275 12.575 6.475C12.775 6.675 12.775 6.975 12.575 7.175L12.125 6.625Z"
//                                     fill="black"
//                                   />
//                                 </svg>
//                               </label>
//                             </div>
//                             <span>{drill.title}</span>
//                             <div className="d-flex align-items-center justify-content-center">
//                               <img src="/images/icon/play.svg" alt="play" />
//                               <span style={{ marginLeft: "10px" }}>07:31</span>
//                             </div>
//                           </div>
//                         ))}
//                       </Accordion.Body>
//                     </Accordion.Item>
//                   ))}
//                 </Accordion>
//               </section>
//             </Col>
//           </Row>
//         </div>
//         <div
//           style={{
//             backgroundColor: "white",
//             height: "100%",
//             width: "47%",
//             borderRadius: "14px",
//           }}
//         ></div>
//       </div>
//     </DoctorMenu>
//   );
// };

// export default Drill;
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
