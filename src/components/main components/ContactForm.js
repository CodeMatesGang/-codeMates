import { useState, useEffect } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Axios from "axios";
import img from "../../images/form.png";
import { ToastContainer, toast } from "react-toastify";
import "./ContactForm.css";

function ContactForm() {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [validated, setValidated] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const formValues = { fName, lName, email, message };
  const submitDetails = (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    setFormErrors(validate(formValues));
    setValidated(true);

    setIsSubmit(true);
  };
  useEffect(() => {
    // console.log(formErrors);
    // console.log(isSubmit)
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      // console.log(fName, lName, email, message);
      Axios.post("http://localhost:5000/contactus", {
        fName: fName,
        lName: lName,
        email: email,
        message: message,
      })
        .then(() => {
          toast.success("Thank you for your feedback!", {
            position: "top-center",
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.fName) {
      errors.fName = "First Name is required!";
    }
    if (!values.lName) {
      errors.lName = "Last Name is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.message) {
      errors.message = "Please enter your feedback";
    }

    return errors;
  };
  return (
    <>
      <h2 className="mb-5 mt-5 ">We are happy to here your feedback..</h2>
      <div className="d-flex justify-content-center">
        <img src={img} alt="formImage" height="344px" className="formImage" />
        <Form noValidate validated={validated} className="p-3">
          <Row>
            <Col lg={6}>
              <Form.Group className="mb-5">
                <Form.Control
                  required
                  className="borderEffect"
                  type="text"
                  placeholder="First Name"
                  value={fName}
                  onChange={(e) => {
                    setFName(e.target.value);
                  }}
                />
                <Form.Control.Feedback type="invalid">
                  {formErrors.fName}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col lg={6}>
              <Form.Group className="mb-5">
                <Form.Control
                  required
                  className="borderEffect"
                  type="text"
                  placeholder="Last Name"
                  value={lName}
                  onChange={(e) => {
                    setLName(e.target.value);
                  }}
                />

                <Form.Control.Feedback type="invalid">
                  {formErrors.lName}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>
          <Form.Group className="mb-5">
            <Form.Control
              required
              className="borderEffect"
              type="email"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            {formErrors.email ? (
              <Form.Text className="text-muted">
                We'll never share your email address with others.
              </Form.Text>
            ) : (
              <Form.Text className="text-muted">
                You will get the reply to this email address.
              </Form.Text>
            )}

            <Form.Control.Feedback type="invalid">
              {formErrors.email}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-5">
            <Form.Control
              as="textarea"
              required
              className="borderEffect"
              placeholder="Message"
              rows={5}
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            />

            <Form.Control.Feedback type="invalid">
              {formErrors.message}
            </Form.Control.Feedback>
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            className="w-100"
            onClick={submitDetails}
          >
            Submit
          </Button>
        </Form>
        <ToastContainer />
      </div>
    </>
  );
}

export default ContactForm;
