// import moment from "moment";
// import React, { useEffect, useState } from "react";
// import { Image, NavLink, Table } from "react-bootstrap";
// import { useDispatch, useSelector } from "react-redux";
// import { GetTodayAppointmentDetails } from "../../features/apiCall";
// import BootstrapModal from "./Components/BootstrapModal";
// import Loader from "./Components/Loader";

// const DoctorTodayAppointment = () => {
//   const [showModal, setShowModal] = useState(false);
//   const [visibleAppointments, setVisibleAppointments] = useState(10);
//   const { isFetching } = useSelector((state) => state.fetch_app.isFetching);
// const appointments = useSelector((state) => state.fetch_app.appointments);
//   const dispatch = useDispatch();
//   const todayDate = moment().format("YYYY-MM-DD");
//   useEffect(() => {
//     // Fetch data from your API here
//     const fetchData = async () => {
//       try {
//         await GetTodayAppointmentDetails(dispatch, todayDate);

//         // setAppointments(data); // Assuming your API response is an array of appointments
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);
//   const handleViewMore = () => {
//     setShowModal(true);
//   };

//   const handleCloseModal = () => {
//     setShowModal(false);
//   };

//   return (
//     <>
//       <section
//         className="today-appoint-container bg-white "
//         style={{ gap: "24px", width: "40vw", margin: "70px 80px" }}
//       >
//         <div className="d-flex justify-content-center w-100 mb-4">
//           <h5>Today's Appointments</h5>
//           {appointments && appointments.length > visibleAppointments && (
//             <NavLink className="view-all">View All</NavLink>
//           )}
//         </div>
//         <Table borderless responsive>
//           <thead>
//             <tr>
//               <td>Name</td>
//               <td>
//                 Service
//                 <i className="fa-solid fa-filter" />
//               </td>
//               <td>Time</td>
//             </tr>
//           </thead>
//           {isFetching ? (
//             <>
//               <Loader class="slots-load" />
//             </>
//           ) : (
//             <>
//               {" "}
//               {appointments && appointments ? (
//                 <tbody>
//                   {" "}
//                   {appointments.length > 0 &&
//                     appointments
//                       // .slice(0, visibleAppointments)
//                       .map((appointment) => (
//                         <tr key={appointment.appointment_id}>
//                           <td>
//                             <div className="d-flex align-items-center">
//                               <Image
//                                 alt="profile picture"
//                                 src="/images/image3.png"
//                                 roundedCircle
//                                 width={42}
//                                 height={42}
//                                 className="mr-2"
//                               />
//                               <div>
//                                 <div
//                                   style={{ fontSize: "15px", color: "black" }}
//                                 >
//                                   {appointment?.client?.first_name}{" "}
//                                   {appointment?.client?.last_name}
//                                 </div>
//                                 <div
//                                   style={{ fontSize: "12px", color: "grey" }}
//                                 >
//                                   {appointment?.client?.email}
//                                 </div>
//                               </div>
//                             </div>
//                           </td>
//                           <td>{appointment.service_type}</td>
//                           <td>{appointment.app_time}</td>
//                         </tr>
//                       ))}
//                 </tbody>
//               ) : (
//                 <>
//                   <div
//                     style={{
//                       backgroundColor: "",
//                       textAlign: "right",
//                       position: "relative",
//                       left: "40px",
//                       fontWeight: "700",
//                       marginTop: "40px",
//                       fontSize: "20px",
//                       color: "grey",
//                     }}
//                   >
//                     No Appointments
//                   </div>
//                 </>
//               )}
//             </>
//           )}
//         </Table>
//       </section>
//       <BootstrapModal
//         show={showModal}
//         onHide={handleCloseModal}
//         modalTitle={`All Appointments for ${todayDate}`}
//         modalContent={<ModalContent appointments={appointments} />}
//       />
//     </>
//   );
// };

// export default DoctorTodayAppointment;
// const ModalContent = ({ appointments }) => {
//   return (
//     <Table borderless responsive>
//       <thead>
//         <tr>
//           <td>Name</td>
//           <td>
//             Service
//             <i className="fa-solid fa-filter" />
//           </td>
//           <td>Time</td>
//         </tr>
//       </thead>
//       <tbody>
//         {appointments &&
//           appointments.map((appointment) => (
//             <tr key={appointment.id}>
//               <td>
//                 <div className="d-flex align-items-center">
//                   <Image
//                     alt="profile picture"
//                     src={appointment.profilePicture} // Replace with the path to your image
//                     roundedCircle
//                     width={42}
//                     height={42}
//                     className="mr-2"
//                   />
//                   <div>
//                     <div style={{ fontSize: "15px", color: "black" }}>
//                       {appointment.name}
//                     </div>
//                     <div style={{ fontSize: "12px", color: "grey" }}>
//                       {appointment.email}
//                     </div>
//                   </div>
//                 </div>
//               </td>
//               <td>{appointment.service}</td>
//               <td>{appointment.time}</td>
//             </tr>
//           ))}
//       </tbody>
//     </Table>
//   );
// };

import moment from "moment";
import React, { useState } from "react";
import { Image, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const DoctorTodayAppointment = () => {
  const [showModal, setShowModal] = useState(false);
  const { isFetching } = useSelector((state) => state.fetch_app.isFetching);
  const dispatch = useDispatch();
  const todayDate = moment().format("YYYY-MM-DD");

  const handleViewMore = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  const appointments = {
    0: {
      _id: "65c3347f8df00a4f1e5046ce",
      appointment_id: "72848272",
      service_type: "Concussion Evaluation",
      app_date: "2024-02-07",
      app_time: "10:00 AM",
      client: {
        _id: "65a77a0e93616e8547293875",
        client_id: "029152",
        first_name: "sd",
        last_name: "sd",
        suffix: "sd",
      },
      doctor_trainer: "Dr. Smith",
      location: "Medical Center",
      status: "pending",
      createdAt: "2024-02-07T07:42:55.529Z",
      updatedAt: "2024-02-07T07:42:55.529Z",
      __v: 0,
    },
    1: {
      _id: "65c3349a8df00a4f1e5046db",
      appointment_id: "40716501",
      service_type: "Medical Office Visit",
      app_date: "2024-02-07",
      app_time: "12:00 AM",
      client: {
        _id: "65a77a0e93616e8547293875",
        client_id: "029152",
        first_name: "sd",
        last_name: "sd",
        suffix: "sd",
      },
      doctor_trainer: "Dr. Smith",
      location: "Medical Center",
      status: "pending",
      createdAt: "2024-02-07T07:43:22.107Z",
      updatedAt: "2024-02-07T07:43:22.107Z",
      __v: 0,
    },
    2: {
      _id: "65c335108df00a4f1e5046e4",
      appointment_id: "90827138",
      service_type: "Sports Vision Performance",
      app_date: "2024-02-08",
      app_time: "02:30 PM",
      client: {
        _id: "65a77a0e93616e8547293875",
        client_id: "029152",
        first_name: "sd",
        last_name: "sd",
        suffix: "sd",
      },
      doctor_trainer: "Dr. Johnson",
      location: "hi",
      status: "pending",
      createdAt: "2024-02-07T08:00:15.234Z",
      updatedAt: "2024-02-07T08:00:15.234Z",
      __v: 0,
    },
    3: {
      _id: "65c3353d8df00a4f1e5046ed",
      appointment_id: "50283619",
      service_type: "MRI Scan",
      app_date: "2024-02-09",
      app_time: "09:00 AM",
      client: {
        _id: "65a77a0e93616e8547293875",
        client_id: "029152",
        first_name: "sd",
        last_name: "sd",
        suffix: "sd",
      },
      doctor_trainer: "Dr. Martinez",
      location: "Imaging Center",
      status: "pending",
      createdAt: "2024-02-07T08:15:45.771Z",
      updatedAt: "2024-02-07T08:15:45.771Z",
      __v: 0,
    },
    4: {
      _id: "65c335648df00a4f1e5046f6",
      appointment_id: "31904872",
      service_type: "Dental Cleaning",
      app_date: "2024-02-10",
      app_time: "11:30 AM",
      client: {
        _id: "65a77a0e93616e8547293875",
        client_id: "029152",
        first_name: "sd",
        last_name: "sd",
        suffix: "sd",
      },
      doctor_trainer: "Dr. Lee",
      location: "Dental Clinic",
      status: "pending",
      createdAt: "2024-02-07T08:30:58.946Z",
      updatedAt: "2024-02-07T08:30:58.946Z",
      __v: 0,
    },
    5: {
      _id: "65c3358a8df00a4f1e5046ff",
      appointment_id: "72938401",
      service_type: "Sports Vision Performance",

      app_date: "2024-02-11",
      app_time: "03:45 PM",
      client: {
        _id: "65a77a0e93616e8547293875",
        client_id: "029152",
        first_name: "sd",
        last_name: "sd",
        suffix: "sd",
      },
      doctor_trainer: "Dr. Patel",
      location: "Optometry Center",
      status: "pending",
      createdAt: "2024-02-07T08:45:10.198Z",
      updatedAt: "2024-02-07T08:45:10.198Z",
      __v: 0,
    },
    6: {
      _id: "65c335b08df00a4f1e504708",
      appointment_id: "14820574",
      service_type: "Concussion Evaluation",
      app_date: "2024-02-12",
      app_time: "10:15 AM",
      client: {
        _id: "65a77a0e93616e8547293875",
        client_id: "029152",
        first_name: "Ms.Charu ",
        last_name: "Patel",
        suffix: "sd",
      },
      doctor_trainer: "Dr. Wilson",
      location: "Allergy Clinic",
      status: "pending",
      createdAt: "2024-02-07T09:00:22.421Z",
      updatedAt: "2024-02-07T09:00:22.421Z",
      __v: 0,
    },
    7: {
      _id: "65c335d68df00a4f1e504710",
      appointment_id: "61539248",
      service_type: "Concussion Evaluation",
      app_date: "2024-02-13",
      app_time: "01:00 PM",
      client: {
        _id: "65a77a0e93616e8547293875",
        client_id: "029152",
        first_name: "Mr.Surya",
        last_name: "Reddy",
        suffix: "sd",
      },
      doctor_trainer: "Dr. Adams",
      location: "Wellness Center",
      status: "pending",
      createdAt: "2024-02-07T09:15:35.625Z",
      updatedAt: "2024-02-07T09:15:35.625Z",
      __v: 0,
    },
  };
  return (
    <>
      <section
        style={{
          background: "white",
          width: "47%",
          height: "100%",
          borderRadius: "20px",
          overflowY: "hidden",
        }}
        className="p-4"
      >
        <div className="d-flex justify-content-center w-100 mb-4 ">
          <div className="w-100 d-flex justify-content-between flex-row">
            <h5>Today's Appointments</h5>
            <Link
              className="purple-text"
              to="/doctor/dashboard/all-appointments"
            >
              <i class="fa fa-expand-alt mr-1" aria-hidden="true" /> Expand
            </Link>
          </div>
        </div>
        <Table borderless responsive>
          <thead
            style={{
              borderTop: "1px solid rgb(178, 170 ,170,0.2)",
              borderBottom: "1px solid rgb(178 ,170 ,170,0.2)",
              fontSize: "18px",
            }}
          >
            <tr>
              <td>Name</td>
              <td className="pl-">
                Service
                <i className="fa-solid fa-filter m-1" />
              </td>
              <td>Time</td>
            </tr>
          </thead>

          <tbody>
            {Object.values(appointments).length > 0 &&
              Object.values(appointments).map((appointment) => (
                <tr key={appointment.appointment_id} className="table-row-app">
                  <td>
                    <div className="d-flex ">
                      <Image
                        alt="profile picture"
                        src="/images/image3.png"
                        roundedCircle
                        width={42}
                        height={42}
                        className="mr-2"
                      />
                      <div className="text-left">
                        <div>
                          {appointment.client.first_name}{" "}
                          {appointment.client.last_name}
                        </div>
                        <div style={{ color: "grey", fontSize: "14px" }}>
                          {/* {appointment.client.email} */}
                          charupatel@gmail.com
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="m-auto ">
                    <p className="pl-3 m-0">{appointment.service_type}</p>
                  </td>
                  <td>
                    <p>{appointment.app_time}</p>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </section>
      {/* <BootstrapModal
        show={showModal}
        onHide={handleCloseModal}
        modalTitle={`All Appointments for ${todayDate}`}
        modalContent={<ModalContent appointments={appointments} />}
      /> */}
    </>
  );
};

export default DoctorTodayAppointment;
