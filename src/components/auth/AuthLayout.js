import React from "react";
import { Col, Row } from "react-bootstrap";

const AuthLayout = ({ children }) => {
  return (
    <div className="">
      <Row>
        <Col
          sm={12}
          md={4}
          style={{ flexBasis: "calc(25% - 10px)" }}
          className="auth-layout"
        >
          <img
            className="w-100 vh-100"
            src="images/loginDoctor.png"
            alt="Ares Elite"
          />
        </Col>
        <Col sm={12} md={8} style={{ flexBasis: "calc(75% - 10px)" }}>
          <div className="d-flex align-items-center justify-content-center vh-100">
            <main className="sign-in-container">{children}</main>
            {/* <ToastContainer position="top-center" /> */}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default AuthLayout;
