// import React, { useEffect, useState } from "react";
// import { Dropdown, Pagination, Table } from "react-bootstrap";
// import "react-datepicker/dist/react-datepicker.css";
// import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import Loader from "../components/layout/Components/Loader";
// import DoctorMenu from "../components/layout/DoctorMenu";
// import { GetRecentPrescriptions } from "../features/apiCall";

// const RecentPrescriptions = () => {
//   const prescriptions = useSelector((state) => state.fetch_app.prescriptions);
//   const totalPages = useSelector((state) => state.fetch_app.totalPages);
//   const isFetching = useSelector((state) => state.fetch_app.isFetching);
//   const [showDateInput, setShowDateInput] = useState(null);
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [currentPage, setCurrentPage] = useState(1);
//   const pageSize = 8; // Number of items per page
//   const dispatch = useDispatch();

//   useEffect(() => {
//     // Fetch data from your API here
//     const fetchData = async () => {
//       if (selectedDate) {
//         // Format the date to 'yyyy-MM-dd'
//         const formattedDate = new Date(selectedDate).toLocaleDateString(
//           "en-CA"
//         );

//         setSelectedDate(formattedDate);
//       }
//       try {
//         await GetRecentPrescriptions(dispatch, {
//           currentPage,
//           pageSize,
//           selectedDate,
//         });
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, [currentPage, selectedDate]);
//   const startIndex = (currentPage - 1) * pageSize;
//   console.log(prescriptions);

//   const handlePageChange = (newPage) => {
//     setCurrentPage(newPage);
//   };
//   const handleDateFilter = (date) => {
//     setSelectedDate(date);
//   };
//   const renderPaginationItems = () => {
//     const items = [];
//     const range = 1; // Number of pages to show before and after current page

//     // Previous Page
//     items.push(
//       // <Pagination.Prev
//       //   key="prev"
//       //   onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
//       //   disabled={currentPage === 1}
//       // />
//       <li class="page-item">
//         <button
//           class="page-link"
//           href="#"
//           disabled={currentPage === 1}
//           onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
//         >
//           Previous
//         </button>
//       </li>
//     );

//     // Pagination Items
//     for (
//       let i = Math.max(1, currentPage - range);
//       i <= Math.min(totalPages, currentPage + range);
//       i++
//     ) {
//       items.push(
//         <Pagination.Item
//           key={i}
//           active={i === currentPage}
//           onClick={() => handlePageChange(i)}
//         >
//           {i}
//         </Pagination.Item>
//       );
//     }

//     // Next Page
//     items.push(
//       <li class="page-item">
//         <button
//           class="page-link"
//           href="#"
//           onClick={() =>
//             handlePageChange(Math.min(currentPage + 1, totalPages))
//           }
//           disabled={currentPage === totalPages}
//         >
//           Next
//         </button>
//       </li>
//     );

//     return items;
//   };

//   return (
//     <DoctorMenu>
//       <div className="p-3 main-wrapper mt-2 booking-presc">
//         <div className="frame">
//           <div className="recent-booking-head">
//             <div style={{ paddingLeft: "15px" }}>
//               <h2 className="text-gradient text-uppercase">
//                 Prescription REQUESTS
//               </h2>
//             </div>
//             <div
//               className="d-flex align-items-center mt-3"
//               style={{ paddingLeft: "15px" }}
//             >
//               <div
//                 className="input-group mb-3 search-bar"
//                 style={{ width: "40%", marginRight: "25px" }}
//               >
//                 <div className="input-group-append ">
//                   <span
//                     className="input-group-text"
//                     id="searchIcon"
//                     style={{ borderRadius: "5px 0px 0px 5px" }}
//                   >
//                     <i class="fas fa-search"></i>
//                   </span>
//                 </div>
//                 <input
//                   type="text"
//                   className="form-control"
//                   placeholder="Search..."
//                   aria-label="Search"
//                   aria-describedby="searchIcon"
//                   style={{ height: "40px" }}
//                 />
//               </div>

//               <div
//                 className=" d-flex flex-row  justify-content-center "
//                 style={{
//                   width: "150px",
//                   gap: "10px",
//                   marginRight: "15px",
//                   marginBottom: "18px",
//                 }}
//               >
//                 <div className="calender-icon">
//                   <i className="fa-regular fa-calendar m-auto" />
//                 </div>
//                 <Dropdown>
//                   <Dropdown.Toggle id="dropdown-pages">
//                     {currentPage} of {totalPages}
//                   </Dropdown.Toggle>

//                   <Dropdown.Menu>
//                     {[...Array(totalPages).keys()].map((page) => (
//                       <Dropdown.Item
//                         key={page + 1}
//                         onClick={() => handlePageChange(page + 1)}
//                       >
//                         {page + 1}
//                       </Dropdown.Item>
//                     ))}
//                   </Dropdown.Menu>
//                 </Dropdown>
//               </div>
//               {/* </div> */}
//             </div>
//             <div className="table-div-booking">
//               <Table className="table" hover>
//                 <thead>
//                   <tr>
//                     <th style={{ paddingLeft: "20px" }}>Name</th>
//                     <th>Mobile Number</th>
//                     <th>
//                       {/* <div className="date-container">
//                         <div
//                           className="date-display "
//                           onClick={() => setShowDateInput(!showDateInput)}
//                         >
//                           {selectedDate === null
//                             ? "Date"
//                             : new Date(selectedDate).toLocaleDateString(
//                                 "en-CA"
//                               )}
//                           <i className="fa-solid fa-sort m-1" />
//                         </div>
//                         {showDateInput && (
//                           <DatePicker
//                             selected={selectedDate}
//                             onChange={(date) => {
//                               handleDateFilter(date);
//                               setShowDateInput(false);
//                             }}
//                           />
//                         )}
//                       </div> */}
//                       Date
//                     </th>
//                     <th>Time</th>
//                     <th></th>
//                     <th>Action</th>
//                   </tr>
//                 </thead>
//                 {!isFetching ? (
//                   <>
//                     {" "}
//                     {prescriptions && prescriptions.length > 0 ? (
//                       <>
//                         {" "}
//                         <tbody className="recent-bookings-cont">
//                           {prescriptions.map((booking, index) => (
//                             <tr key={index}>
//                               <td
//                                 className="name-email-image-cont"
//                                 style={{ paddingLeft: "20px" }}
//                               >
//                                 <img
//                                   src="/images/image3.png"
//                                   alt={booking.name}
//                                   className="recent-booking-person-image"
//                                   style={{ marginRight: "10px" }}
//                                 />
//                                 <div>
//                                   <small className="name">
//                                     {booking?.client?.first_name}{" "}
//                                     {booking?.client?.last_name}
//                                   </small>
//                                   <br />
//                                   <small className="email">
//                                     {booking?.client?.email}
//                                   </small>
//                                 </div>
//                               </td>
//                               <td className="phoneno">
//                                 {" "}
//                                 35285482735473
//                                 {/* {booking?.client?.phone_number} */}
//                               </td>
//                               <td className="date">{booking?.app_date}</td>
//                               <td className="time">{booking?.app_time}</td>
//                               {/* <td className="phoneno">
//                               {booking?.client?.phone_number}
//                             </td> */}
//                               <td></td>
//                               <td className="status ">
//                                 <div className="StartPrescription m-auto">
//                                   <Link
//                                     to={`/doctor/dashboard/start-prescription/${booking?.client?.client_id}`}
//                                     className=" "
//                                   >
//                                     <p> Start Prescription</p>
//                                   </Link>
//                                 </div>
//                               </td>
//                             </tr>
//                           ))}
//                         </tbody>
//                       </>
//                     ) : (
//                       <div className="no-details">
//                         {" "}
//                         <p className="text-center ">No Appointments</p>
//                       </div>
//                     )}
//                   </>
//                 ) : (
//                   <>
//                     <Loader />
//                   </>
//                 )}
//               </Table>
//             </div>
//           </div>
//         </div>
//         {/* <div className="pag-cont">
//           <Pagination className="m-auto ">{renderPaginationItems()}</Pagination>
//         </div> */}
//       </div>
//     </DoctorMenu>
//   );
// };

// export default RecentPrescriptions;
import React, { useState } from "react";
import { Dropdown, Pagination, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import DoctorMenu from "../components/layout/DoctorMenu";

const RecentPrescriptions = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 8; // Number of items per page

  // Dummy prescription data
  // Dummy prescription data
  const prescriptions = [
    {
      id: 1,
      client: {
        first_name: "John",
        last_name: "Doe",
        email: "john.doe@example.com",
      },
      app_date: "2024-03-15",
      app_time: "10:00 AM",
      phone_number: "35285482735473",
    },
    {
      id: 2,
      client: {
        first_name: "Alice",
        last_name: "Smith",
        email: "alice.smith@example.com",
      },
      app_date: "2024-03-16",
      app_time: "11:00 AM",
      phone_number: "123456789",
    },
    {
      id: 3,
      client: {
        first_name: "Bob",
        last_name: "Johnson",
        email: "bob.johnson@example.com",
      },
      app_date: "2024-03-17",
      app_time: "12:00 PM",
      phone_number: "987654321",
    },
    {
      id: 4,
      client: {
        first_name: "Emily",
        last_name: "Davis",
        email: "emily.davis@example.com",
      },
      app_date: "2024-03-18",
      app_time: "1:00 PM",
      phone_number: "555666777",
    },
    // Add more entries as needed
  ];

  const totalPages = Math.ceil(prescriptions.length / pageSize);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const renderPaginationItems = () => {
    const items = [];
    const range = 1; // Number of pages to show before and after current page

    // Previous Page
    items.push(
      <Pagination.Prev
        key="prev"
        onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
        disabled={currentPage === 1}
      />
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
      <Pagination.Next
        key="next"
        onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
        disabled={currentPage === totalPages}
      />
    );

    return items;
  };

  return (
    <DoctorMenu>
      <div className="p-3 main-wrapper mt-2 booking-presc">
        <div className="frame">
          <div className="recent-booking-head">
            <h2 className="text-gradient text-uppercase">
              Prescription REQUESTS
            </h2>
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
              <Table className="table" hover>
                <thead>
                  <tr>
                    <th style={{ paddingLeft: "20px" }}>Name</th>
                    <th>Mobile Number</th>
                    <th>
                      {/* <div className="date-container">
                        <div
                          className="date-display "
                          onClick={() => setShowDateInput(!showDateInput)}
                        >
                          {selectedDate === null
                            ? "Date"
                            : new Date(selectedDate).toLocaleDateString(
                                "en-CA"
                              )}
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

                    <th>Action</th>
                  </tr>
                </thead>

                <tbody className="recent-bookings-cont">
                  {prescriptions
                    .slice((currentPage - 1) * pageSize, currentPage * pageSize)
                    .map((booking) => (
                      <tr key={booking.id}>
                        <td className="name-email-image-cont">
                          <div
                            style={{ display: "flex", alignItems: "center" }}
                          >
                            <img
                              src="/images/image3.png"
                              alt={booking.client.first_name}
                              className="recent-booking-person-image"
                              style={{
                                marginRight: "10px",
                                width: "30px",
                                height: "30px",
                              }}
                            />
                            <div>
                              <small className="name">
                                {booking.client.first_name}{" "}
                                {booking.client.last_name}
                              </small>
                              <br />
                              <small
                                className="email"
                                style={{
                                  maxWidth: "150px",
                                  overflow: "hidden",
                                  textOverflow: "ellipsis",
                                }}
                              >
                                {booking.client.email}
                              </small>
                            </div>
                          </div>
                        </td>
                        <td>{booking.phone_number}</td>
                        <td>{booking.app_date}</td>
                        <td>{booking.app_time}</td>
                        <td className="status">
                          <div className="StartPrescription m-auto">
                            <Link
                              to={`/doctor/dashboard/start-prescription/${booking.client.client_id}`}
                              className=" "
                            >
                              <p>Start Prescription</p>
                            </Link>
                          </div>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </DoctorMenu>
  );
};

export default RecentPrescriptions;
