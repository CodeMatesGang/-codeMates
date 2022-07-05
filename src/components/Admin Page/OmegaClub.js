import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import {
  Button,
  Container,
  InputGroup,
  Form,
  FormControl,
} from "react-bootstrap";
function OmegaClub() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isAddDetails, setIsAddDetails] = useState(false);
  const [uploadedFile, setUploadedFile] = useState({ title, description });
  const formValues = { title, description };

  const [erroeMsg, setErrorMsg] = useState("");

  const [listItem, setListItem] = useState({ title, description });
  console.log(listItem);
  const { ID } = useParams();

  const [validated, setValidated] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  // const [id,setId] = useState(0)

  const addDetails = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    setFormErrors(validate(formValues));
    setValidated(true);
    console.log(Object.keys(formErrors).length);
    if (Object.keys(formErrors).length === 0) {
      if (!ID) {
        //insert form data
        if (title !== "" && description !== "") {
          Axios.post("http://localhost:5000/api/insertclub", {
            title: title,
            description: description,
          })
            .then(() => {
              setIsAddDetails(!isAddDetails);
              console.log(isAddDetails);

              // alert("Successfully Inserted!");
              toast.success("Added successfully", {
                position: "top-center",
              });
            })
            .catch((error) => {
              console.log(error);
            });
        }
      } else {
        //update form data
        if (title !== "" && description !== "") {
          Axios.put(`http://localhost:5000/api/put/${ID}`, {
            title: title,
            description: description,
          })
            .then(() => {
              // setIsAddDetails(!isAddDetails)
              // alert("Successfully Updated!");
              toast.success("Updated successfully", {
                position: "top-center",
              });
            })
            .catch((error) => {
              console.log(error);
            });
        }
      }
    }
  };

  //get reply list from club details
  const [id, setId] = useState(0);
  const getId = async () => {
    const response = await Axios.get("http://localhost:5000/api/clubdetails");
    const len = Object.keys(response.data).length - 1;
    console.log(response.data);
    console.log(len);
    const id = response.data[len].id;
    console.log(id);

    setId(id);
    // console.log(response.data[len].id)
  };

  const fileSelectHandler = (e) => {
    setSelectedFile(e.target.files[0]);
    console.log("sssssssssss");
  };
  const fileUploadHandler = (e) => {
    e.preventDefault();
    console.log("fffffffffffff");
    if (title === "" || description === "") {
      // alert("Add title and description");
      toast.error("Please add title and description", {
        position: "top-center",
      });
    } else {
      //Upload image
      const fd = new FormData();
      fd.append("uploadedFile", selectedFile);
      // fd.append("title", title);
      // fd.append("description", description);
      console.log(fd);
      console.log("aaaaaa");

      try {
        const res = Axios.post(`http://localhost:5000/upload/${id}`, fd, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
          .then(() => {
            // alert("Successfully uploaded!");
            toast.success("Successfully uploaded!", {
              position: "top-center",
            });
          })
          .catch((err) => {
            // console.log(err.response.status);
            if (err.response.status === 404) {
              console.log(err.response.data.msg);
              setErrorMsg(err.response.data.msg);
            } else if (err.response.status === 500) {
              console.log("Problem in server");
              setErrorMsg("Problem in server");
            } else {
              // console.log(err);
              console.log(err.response.data.msg);
              setErrorMsg(err.response.data.msg);
            }
          });

        const { fileName, filePath } = res.data;
        console.log(fileName, filePath);
        setUploadedFile({ fileName, filePath });
      } catch (err) {
        // if (err.response.status === 404) {
        //   console.log(err.response.data.msg);
        //   console.log("image error");
        // } else if (err.response.status === 500) {
        //   console.log("Problem in server");
        // } else {
        //   console.log(err);
        //   console.log(err.response.data.msg);
        // }
      }
      // Axios.post('http://localhost:5000/upload', fd)
      //     .then(res => {
      //         console.log(res)
      //     })
    }
  };
  // if (isAddDetails === true) {
  //   fileUploadHandler();
  // }

  const validate = (values) => {
    const errors = {};
    if (!values.title) {
      errors.title = "Title is required!";
    }
    if (!values.description) {
      errors.description = "Description is required!";
    }

    return errors;
  };

  useEffect(() => {
    Axios.get(`http://localhost:5000/api/clubdetails/${ID}`).then((resp) => {
      setListItem({ ...resp.data[0] });
    });
  }, []);

  useEffect(() => {
    getId();
    console.log("hhhhhhhhhhhhhhhh");
    console.log(isAddDetails);
  }, [isAddDetails]);

  return (
    <>
      <Container>
        <Form noValidate validated={validated} className="mt-5 w-75 mx-auto">
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control
              required
              className="borderEffect"
              type="text"
              placeholder="Title"
              value={title || listItem.title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
            <Form.Control.Feedback type="invalid">
              {formErrors.title}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              required
              className="borderEffect"
              rows={3}
              value={description || listItem.title}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
            <Form.Control.Feedback type="invalid">
              {formErrors.description}
            </Form.Control.Feedback>
          </Form.Group>

          <div className="d-flex justify-content-center">
            <Button
              variant="primary"
              className="w-25  mt-3 mx-3"
              onClick={addDetails}
            >
              {ID ? "Update" : "Add "}
            </Button>{" "}
            <Button
              variant="success"
              as={Link}
              to="/leoClub"
              className="w-25  mt-3 mx-3"
            >
              Go Back
            </Button>
          </div>
        </Form>
        {ID ? null : (
          <div className="mb-3 mt-5 w-75 mx-auto">
            <InputGroup>
              <FormControl
                placeholder="Upload image or video"
                type="file"
                onChange={fileSelectHandler}
              />

              <Button variant="primary" onClick={fileUploadHandler}>
                Upload
              </Button>
            </InputGroup>
            {erroeMsg !== "" ? (
              <p style={{ color: "red", margin: " 5px " }}>{erroeMsg}</p>
            ) : null}
          </div>
        )}
        <ToastContainer />
      </Container>
    </>
  );
}

export default OmegaClub;
