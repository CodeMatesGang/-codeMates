import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Form, InputGroup, Button } from "react-bootstrap";
import Axios from "axios";
function ReplyToFeedback({ data }) {
  const { id } = useParams();

  const newPerson = data.filter((person) => person.id === parseInt(id));
  const name = newPerson[0].fName + " " + newPerson[0].lName;
  const email = newPerson[0].email;

  const [subject, setSubject] = useState("");
  const [reply, setReply] = useState("");

  const [validated, setValidated] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const formValues = { subject, reply };
  console.log(formValues);
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
    console.log(formErrors);
    console.log(isSubmit);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(subject, reply);
      Axios.post("http://localhost:5000/api/sendreplies", {
        name: name,
        email: email,
        subject: subject,
        reply: reply,
      })
        .then(() => {
          console.log(name, email, subject, reply);
          alert("Successfully reply sent!");
        })
        .catch((error) => {
          console.log(error);
        });
      alert("Successfully reply sent!");
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    if (!values.subject) {
      errors.subject = "Enter the subject of email";
    }
    if (!values.reply) {
      errors.reply = "Enter reply to the feedback";
    }
    return errors;
  };

  return (
    <>
      <Container>
        <h2>Reply</h2>
        <Form noValidate validated={validated} className="p-3 w-75 mx-auto">
          <fieldset disabled>
            <Form.Group className="mb-5">
              <InputGroup className="mb-3">
                <InputGroup.Text>Name</InputGroup.Text>
                <Form.Control
                  className="borderEffect"
                  type="text"
                  value={name}
                  readOnly
                />
              </InputGroup>
            </Form.Group>
            <Form.Group className="mb-5">
              <InputGroup className="mb-3">
                <InputGroup.Text>Email to</InputGroup.Text>
                <Form.Control
                  className="borderEffect"
                  type="text"
                  value={email}
                  readOnly
                />
              </InputGroup>
            </Form.Group>
          </fieldset>
          <Form.Group className="mb-5">
            <Form.Control
              required
              className="borderEffect"
              type="text"
              placeholder="Enter the subject of the email"
              value={subject}
              onChange={(e) => {
                setSubject(e.target.value);
              }}
            />
            <Form.Control.Feedback type="invalid">
              {formErrors.subject}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-5">
            <Form.Control
              as="textarea"
              required
              placeholder="Reply message..."
              rows={5}
              value={reply}
              onChange={(e) => {
                setReply(e.target.value);
              }}
            />
            <Form.Control.Feedback type="invalid">
              {formErrors.reply}
            </Form.Control.Feedback>
          </Form.Group>
          <div className="d-flex justify-content-center">
            <Button
              variant="primary"
              type="submit"
              className="w-25 mx-3"
              onClick={submitDetails}
            >
              Send Email
            </Button>{" "}
            <br />
            <Button
              variant="success"
              as={Link}
              to="/repliesofcontactUs"
              className="w-25 mx-3"
            >
              Go Back
            </Button>
          </div>
        </Form>
      </Container>
    </>
  );
}

export default ReplyToFeedback;
