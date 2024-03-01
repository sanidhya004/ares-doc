import React from "react";
import { Col, Container, Row, Table } from "react-bootstrap";

const AppointmentTableComponent = ({
  bookings,
  tableHeader,
  handleCompleteAppointment,
  handleCancelAppointment,
}) => {
  return (
    <Table className="table" hover>
      <thead className="table-head">
        <tr>
          {tableHeader.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {bookings.map((booking) => (
          <tr key={booking.id}>
            <td className="" style={{ paddingLeft: "20px" }}>
              <div className="h-100 d-flex mt-2 text-start">
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
            <td>{booking.email}</td>
            <td>{booking.mobileNumber}</td>
            <td>{booking.service}</td>
            <td>{booking.startTime}</td>
            <td>{booking.endTime}</td>
            <td className="action ">
              <Container>
                <Row>
                  <Col>
                    <button
                      className="action-select-plan"
                      onClick={handleCompleteAppointment}
                    >
                      Complete
                    </button>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <button
                      className="action-view-eval"
                      onClick={handleCancelAppointment}
                    >
                      Cancel
                    </button>
                  </Col>
                </Row>
              </Container>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default AppointmentTableComponent;
