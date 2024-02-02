import { React, useState } from "react";
import { Col, Form, Row, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import BootstrapModal from "../../../components/layout/Components/BootstrapModal";
import DoctorMenu from "../../../components/layout/DoctorMenu";
import { SubmitClientForm } from "../../../features/apiCall";
const capitalizeFirstLetter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const Step1 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isFormFetching } = useSelector((state) => state.forms);
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => {
    setShowModal(false);
    navigate("/doctor/dashboard");
    localStorage.removeItem("selectedService");
  };

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    suffix: "",
    dob: "",
    gender: "Male",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  });
  const handleChange = (e) => {
    const { name, value, type } = e.target;

    if (type == "text") {
      setFormData({ ...formData, [name]: capitalizeFirstLetter(value) });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    console.log(isFormFetching);

    e.preventDefault();
    console.log("Submitting Form:", formData);
    try {
      const success = await SubmitClientForm(dispatch, { formData });

      if (success) {
        setFormData({
          firstName: "",
          lastName: "",
          suffix: "",
          dob: "",
          gender: "Male",
          email: "",
          phone: "",
          address: "",
          city: "",
          state: "",
          zip: "",
        });
      }
      console.log(isFormFetching);
      setShowModal(true);
    } catch (error) {
      toast.error("Unexpected Error !");
    }
  };

  return (
    <DoctorMenu>
      <div className="mt-4 client-form">
        <h2>Client Information</h2>
        {/* <hr /> */}
        <Form onSubmit={handleSubmit} className="mt-4">
          <Row>
            <Col md={6}>
              <Form.Group controlId="firstName" className="form-cont">
                <Form.Label className="text-black">First Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter First Name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="lastName" className="form-cont">
                <Form.Label className="text-black">Last Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Last Name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Form.Group controlId="suffix" className="form-cont">
                <Form.Label className="text-black">Suffix</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter suffix"
                  name="suffix"
                  value={formData.suffix}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="customerDate" className="form-cont">
                <Form.Label className="text-black">Date Of Birth</Form.Label>
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
            <Col md={6}>
              <Form.Group controlId="gender" className="form-cont">
                <Form.Label className="text-black">Gender</Form.Label>
                <Form.Control
                  as="select"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                >
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="email" className="form-cont">
                <Form.Label className="text-black">Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group controlId="address" className="form-cont">
                <Form.Label className="text-black">Address</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={1}
                  placeholder="Enter Address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-100"
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Form.Group controlId="city" className="form-cont">
                <Form.Label className="text-black">City</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter City"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="state" className="form-cont">
                <Form.Label className="text-black">State</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter State"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Form.Group controlId="zip" className="form-cont">
                <Form.Label className="text-black">ZIP</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter ZIP"
                  name="zip"
                  value={formData.zip}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="phone" className="form-cont">
                <Form.Label className="text-black">Phone</Form.Label>
                <Form.Control
                  type="tel"
                  placeholder="Enter Phone Number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="mt-2 text-center">
            <button
              type="submit"
              className="purple-button m-auto"
              style={{ width: "200px", display: "block", height: "48px" }}
            >
              {isFormFetching ? (
                <>
                  <Spinner size="sm" animation="border" />
                </>
              ) : (
                <>Submit</>
              )}
            </button>
          </Row>
        </Form>
        <BootstrapModal
          showModal={showModal}
          handleClose={handleClose}
          modalTitle={""}
          modalContent={<ModalContent />}
        />
      </div>
    </DoctorMenu>
  );
};

export default Step1;

const ModalContent = () => {
  return (
    <section className="text-center">
      <img
        src="/images/icons/formTick.svg"
        alt="payment-icon"
        className="mb-4"
      />
      <div className="d-flex check-your-box-texts">
        <h5>Account created successfully!!</h5>
        <p>
          Account has been created and the credentials has
          <br /> been sent to the Client on his registered email.
        </p>
      </div>
    </section>
  );
};
