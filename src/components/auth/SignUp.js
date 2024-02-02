import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  FormCheck,
  Row,
  Spinner,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { login } from "../../features/apiCall";
import AuthLayout from "./AuthLayout";

const SignUp = () => {
  const { isFetching, error, errMsg, token } = useSelector(
    (state) => state.auth
  );
  const [isLoogedIn, setIsLoogedIn] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const ErrorToastOptions = {
    position: "bottom-center",
    autoClose: 3000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  const [values, setValues] = useState({
    email: "",
    password: "",
    showPassword: false, // Added state for toggling password visibility
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  const handleTogglePassword = () => {
    setValues((prevValues) => ({
      ...prevValues,
      showPassword: !prevValues.showPassword,
    }));
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    if (token) {
      navigate("/doctor/dashboard");
    }
  }, [navigate, token, error, isFetching, isLoogedIn]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = values;
    await login(dispatch, { email, password });
    setIsLoogedIn(true);
  };
  // useEffect(() => {
  //   if (error && !isFetching && isLoogedIn) {
  //     toast.error(errMsg || "Unknown error occurred", ErrorToastOptions);
  //     setIsLoogedIn(false);
  //   }
  // }, [error, isFetching, isLoogedIn, errMsg]);
  return (
    <AuthLayout>
      <Form onSubmit={handleSubmit} style={{ width: "60vw" }}>
        <h3 className="mb-5 font-weight-bold">Sign Up for Ares Elite</h3>
        <Container>
          <Row>
            <Col>
              <Row>
                <Col>
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Ex:Mobina"
                    onChange={handleChange}
                    value={values.name}
                    className="mb-3"
                  />
                </Col>{" "}
                <Col>
                  <Form.Control
                    type="text"
                    name="surname"
                    placeholder="Ex:Patel"
                    onChange={handleChange}
                    value={values.surname}
                    className="mb-3"
                  />
                </Col>
              </Row>{" "}
              <Row>
                <Col>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    onChange={handleChange}
                    value={values.email}
                    className="mb-3"
                  />
                </Col>
              </Row>{" "}
              <Row>
                <Col>
                  <Form.Control
                    type="number"
                    max={10}
                    name="phone"
                    placeholder="Ex:24861896412"
                    onChange={handleChange}
                    value={values.phone}
                    className="mb-3"
                  />
                </Col>
              </Row>{" "}
              <Row>
                <Col>
                  <Form.Control
                    type="date"
                    max={10}
                    name="dob"
                    placeholder="Ex:24861896412"
                    onChange={handleChange}
                    value={values.dob}
                    className="mb-3"
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Control
                    type="password"
                    name="password"
                    // placeholder="Ex:Mobina"
                    onChange={handleChange}
                    value={values.password}
                    className="mb-3"
                  />
                </Col>{" "}
                <Col>
                  <Form.Control
                    type="password"
                    name="cnfmpassword"
                    // placeholder="Ex:Mobina"
                    onChange={handleChange}
                    value={values.cnfmpassword}
                    className="mb-3"
                  />
                </Col>
              </Row>{" "}
            </Col>
            <Col>
              <Row>
                <Col>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    onChange={handleChange}
                    value={values.email}
                    className="mb-3"
                  />
                </Col>
              </Row>{" "}
              <Row>
                <Col>
                  <Form.Control
                    type="number"
                    max={10}
                    name="phone"
                    placeholder="Ex:24861896412"
                    onChange={handleChange}
                    value={values.phone}
                    className="mb-3"
                  />
                </Col>
              </Row>{" "}
              <Row>
                <Col>
                  <Form.Control
                    type="date"
                    max={10}
                    name="dob"
                    placeholder="Ex:24861896412"
                    onChange={handleChange}
                    value={values.dob}
                    className="mb-3"
                  />
                </Col>
              </Row>{" "}
              <Row>
                <Col>
                  <Form.Control
                    type="date"
                    max={10}
                    name="dob"
                    placeholder="Ex:24861896412"
                    onChange={handleChange}
                    value={values.dob}
                    className="mb-3"
                  />
                </Col>
              </Row>{" "}
              <Row>
                <Col>
                  <Form.Control
                    type="date"
                    max={10}
                    name="dob"
                    placeholder="Ex:24861896412"
                    onChange={handleChange}
                    value={values.dob}
                    className="mb-3"
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>

        <Button
          variant="link"
          className="text-decoration-none"
          onClick={handleTogglePassword}
        >
          {values.showPassword ? "Hide" : "Show"} Password
        </Button>
        <NavLink
          className="d-block w-100 text-right mb-2 text-decoration-none"
          to="/forgot-password"
        >
          Forgot Password ?
        </NavLink>
        <FormCheck
          type="checkbox"
          id="default-checkbox"
          label="By signing up, you agree to our Terms and have read and acknowledge the Privacy Policies."
          className="mb-4 mt-4"
        />
        {isFetching ? (
          <Button type="submit" className="purple-button w-100">
            <Spinner animation="border" variant="light" />
          </Button>
        ) : (
          <Button type="submit" className="purple-button w-100">
            Login
          </Button>
        )}
        <Link to="/signup">
          <p
            className="position-relative bottom text-center"
            style={{ top: "20vh" }}
          >
            Don’t have an account?{" "}
            <span className="color-purple font-weight-bold">{"  "}Sign up</span>
          </p>{" "}
        </Link>
      </Form>
    </AuthLayout>
  );
};

export default SignUp;
