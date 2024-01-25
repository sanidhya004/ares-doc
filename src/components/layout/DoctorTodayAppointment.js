import React, { useEffect } from "react";
import { Image, NavLink, Table } from "react-bootstrap";
import { useSelector } from "react-redux";

const DoctorTodayAppointment = () => {
  const appointments = useSelector((state) => state.fetch_app.appointments);
  useEffect(() => {
    // Fetch data from your API here
    const fetchData = async () => {
      try {
        // await GetTodayAppointmentDetails(dispatch);
        // setAppointments(data); // Assuming your API response is an array of appointments
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <section
        className="today-appoint-container bg-white "
        style={{ gap: "24px", width: "40vw", margin: "70px 80px" }}
      >
        <div className="d-flex justify-content-between w-100 mb-4">
          <h5>Today's Appointment</h5>
          <NavLink className="view-all">View All</NavLink>
        </div>
        <Table borderless responsive>
          <thead>
            <tr>
              <td>Name</td>
              <td>
                Service
                <i className="fa-solid fa-filter" />
              </td>
              <td>Time</td>
            </tr>
          </thead>
          <tbody>
            {appointments &&
              appointments.map((appointment) => (
                <tr key={appointment.id}>
                  <td>
                    <div className="d-flex align-items-center">
                      <Image
                        alt="profile picture"
                        src={appointment.profilePicture} // Replace with the path to your image
                        roundedCircle
                        width={42}
                        height={42}
                        className="mr-2"
                      />
                      <div>
                        <div style={{ fontSize: "15px", color: "black" }}>
                          {appointment.name}
                        </div>
                        <div style={{ fontSize: "12px", color: "grey" }}>
                          {appointment.email}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{appointment.service}</td>
                  <td>{appointment.time}</td>
                </tr>
              ))}
          </tbody>
        </Table>
      </section>
    </>
  );
};

export default DoctorTodayAppointment;
