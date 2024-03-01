import React, { useEffect, useState } from "react";
import axios from "../../utils/axios";

import { Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { GetProfileDetails } from "../../features/apiCall";
import DoctorMenu from "./DoctorMenu";

const EditProfile = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState([]);

  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  const { isFetching } = useSelector((state) => state.auth);
  const fetchData = async () => {
    try {
      const data = await GetProfileDetails(dispatch);
      setUser(data?.user);
      console.log(data);
    } catch (error) {
      // Handle any errors that might occur during the data fetching
      console.error("Error fetching profile details:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [dispatch, navigate]);

  const [formData, setFormData] = useState({
    firstname: user?.first_name || "",
    lastname: user?.last_name || "",
    suffix: user?.suffix || "",
    dob: user?.dob || "",
    gender: user?.gender || "male",
    email: user?.email || "",
    phone: user?.phone || "",
    address: user?.address || "",
    city: user?.city || "",
    state: user?.state || "",
    zipcode: user?.zipcode || "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await axios.post("/api/doctor/edit-profile", formData);
      setIsLoading(false);
      fetchData(); // Fetch updated details
    } catch (error) {
      setIsLoading(false);
      console.error("Error submitting form:", error);
    }
  };
  return (
    <DoctorMenu>
      <div className="m-4 profile client-form " style={{ height: "95vh" }}>
        <section
          className="p-4 h-100"
          style={{
            backgroundColor: "white",
            margin: "auto",
            overflowY: "scroll",
          }}
        >
          <h4 className="ml-5">Edit Profile</h4>
          <button onClick={handleGoBack} className="m-2 p-0 mb-4 " id="back_bt">
            <img src="/images/icon/back.svg" alt="back" width={30} />
          </button>
          <Container className="w-75 mt-5">
            <Form onSubmit={handleSubmit}>
              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label className="text-black">First Name:</Form.Label>
                    <Form.Control
                      type="text"
                      name="firstname"
                      value={formData.firstname}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Label className="text-black">Last Name:</Form.Label>
                    <Form.Control
                      type="text"
                      name="lastname"
                      value={formData.lastname}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label className="text-black">Suffix Name:</Form.Label>
                    <Form.Control
                      type="text"
                      name="suffix"
                      value={formData.suffix}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Label className="text-black">
                      Date of Birth:
                    </Form.Label>
                    <Form.Control
                      type="date"
                      name="dob"
                      value={formData.dob}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label className="text-black">Gender:</Form.Label>
                    <Form.Control
                      as="select"
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      required
                    >
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label className="text-black">Email Id:</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Label className="text-black">Phone:</Form.Label>
                    <Form.Control
                      type="tel"
                      name="phone"
                      // pattern="[0-9]{10}"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group>
                <Form.Label className="text-black">Address:</Form.Label>
                <Form.Control
                  as="textarea"
                  className="w-100"
                  name="address"
                  rows={2}
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Row>
                <Col md={4}>
                  <Form.Group>
                    <Form.Label className="text-black">City:</Form.Label>
                    <Form.Control
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group>
                    <Form.Label className="text-black">State:</Form.Label>
                    <Form.Control
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group>
                    <Form.Label className="text-black">Zip Code:</Form.Label>
                    <Form.Control
                      type="text"
                      name="zipcode"
                      value={formData.zipcode}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>
              <div className="d-flex w-50 m-auto mt-4">
                <button type="submit" className="bt-4 w-50 bt-5">
                  {/* {isFetching ? (
                    <>
                      <Spinner size="sm" animation="border" />
                    </>
                  ) : ( */}
                  <>Save</>
                  {/* )} */}
                </button>{" "}
                <button type="button" className="bt-6 w-50">
                  Cancel
                </button>
              </div>
            </Form>
          </Container>
        </section>
      </div>
    </DoctorMenu>
  );
};

export default EditProfile;
