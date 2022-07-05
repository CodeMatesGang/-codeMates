import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { Button, Container, Form, FormControl } from "react-bootstrap";

function AddClub() {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState("");
  const [description, setDescription] = useState("");
  const [preview, setPreview] = useState("");
  const formValues = { title, description, file };

  const [validated, setValidated] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [erroeMsg, setErrorMsg] = useState("");

  const navigate = useNavigate();

  const loadImage = (e) => {
    const image = e.target.files[0];
    setFile(image);
    setPreview(URL.createObjectURL(image));
  };

  const saveClub = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    setFormErrors(validate(formValues));
    setValidated(true);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", title);
    formData.append("description", description);
    if (Object.keys(formErrors).length === 0) {
      if (title !== "" && description !== "" && file !== "") {
        await Axios.post("http://localhost:5000/clubs", formData, {
          headers: {
            "Content-type": "multipart/form-data",
          },
        })
          .then(() => {
            //   alert("added");
            toast.success("Added successfully", {
              position: "top-center",
            });
            setTimeout(() => {
              navigate("/admin");
            }, 6000);
          })
          .catch((err) => {
            // console.log(err.response.data);
            // formErrors.file = err.response.data;
            // toast.error(err.response.data, {
            //   position: "top-center",
            // });
            // setErrorMsg(err.response.data);
            // console.log(err.response.data);
            // console.log(err.response.data.msg);
            setErrorMsg(err.response.data.msg);
            // console.log(erroeMsg);
          });
      }
    }
    // try {

    // } catch (error) {
    //   console.log(error);
    // }
  };

  //   const [isAddDetails, setIsAddDetails] = useState(false);
  //   const [uploadedFile, setUploadedFile] = useState({ title, description });

  //   const [listItem, setListItem] = useState({ title, description });
  //   console.log(listItem);
  //   const { ID } = useParams();

  //   // const [id,setId] = useState(0)

  //   const addDetails = (e) => {
  //     e.preventDefault();
  //     const form = e.currentTarget;
  //     if (form.checkValidity() === false) {
  //       e.preventDefault();
  //       e.stopPropagation();
  //     }

  //     console.log(Object.keys(formErrors).length);
  //     if (Object.keys(formErrors).length === 0) {
  //       if (!ID) {
  //         //insert form data
  //         if (title !== "" && description !== "") {
  //           Axios.post("http://localhost:5000/api/insertclub", {
  //             title: title,
  //             description: description,
  //           })
  //             .then(() => {
  //               setIsAddDetails(!isAddDetails);
  //               console.log(isAddDetails);

  //               // alert("Successfully Inserted!");
  //               toast.success("Added successfully", {
  //                 position: "top-center",
  //               });
  //             })
  //             .catch((error) => {
  //               console.log(error);
  //             });
  //         }
  //       } else {
  //         //update form data
  //         if (title !== "" && description !== "") {
  //           Axios.put(`http://localhost:5000/api/put/${ID}`, {
  //             title: title,
  //             description: description,
  //           })
  //             .then(() => {
  //               // setIsAddDetails(!isAddDetails)
  //               // alert("Successfully Updated!");
  //               toast.success("Updated successfully", {
  //                 position: "top-center",
  //               });
  //             })
  //             .catch((error) => {
  //               console.log(error);
  //             });
  //         }
  //       }
  //     }
  //   };

  //   //get reply list from club details
  //   const [id, setId] = useState(0);
  //   const getId = async () => {
  //     const response = await Axios.get("http://localhost:5000/api/clubdetails");
  //     const len = Object.keys(response.data).length - 1;
  //     console.log(response.data);
  //     console.log(len);
  //     const id = response.data[len].id;
  //     console.log(id);

  //     setId(id);
  //     // console.log(response.data[len].id)
  //   };

  //   const fileSelectHandler = (e) => {
  //     setFile(e.target.files[0]);
  //     console.log("sssssssssss");
  //   };
  //   const fileUploadHandler = (e) => {
  //     e.preventDefault();
  //     console.log("fffffffffffff");
  //     if (title === "" || description === "") {
  //       // alert("Add title and description");
  //       toast.error("Please add title and description", {
  //         position: "top-center",
  //       });
  //     } else {
  //       //Upload image
  //       const fd = new FormData();
  //       fd.append("uploadedFile", file);
  //       // fd.append("title", title);
  //       // fd.append("description", description);
  //       console.log(fd);
  //       console.log("aaaaaa");

  //       try {
  //         const res = Axios.post(`http://localhost:5000/upload/${id}`, fd, {
  //           headers: {
  //             "Content-Type": "multipart/form-data",
  //           },
  //         })
  //           .then(() => {
  //             // alert("Successfully uploaded!");
  //             toast.success("Successfully uploaded!", {
  //               position: "top-center",
  //             });
  //           })
  //           .catch((err) => {
  //             // console.log(err.response.status);
  //             if (err.response.status === 404) {
  //               console.log(err.response.data.msg);
  //               setErrorMsg(err.response.data.msg);
  //             } else if (err.response.status === 500) {
  //               console.log("Problem in server");
  //               setErrorMsg("Problem in server");
  //             } else {
  //               // console.log(err);
  //               console.log(err.response.data.msg);
  //               setErrorMsg(err.response.data.msg);
  //             }
  //           });

  //         const { fileName, filePath } = res.data;
  //         console.log(fileName, filePath);
  //         setUploadedFile({ fileName, filePath });
  //       } catch (err) {
  //         // if (err.response.status === 404) {
  //         //   console.log(err.response.data.msg);
  //         //   console.log("image error");
  //         // } else if (err.response.status === 500) {
  //         //   console.log("Problem in server");
  //         // } else {
  //         //   console.log(err);
  //         //   console.log(err.response.data.msg);
  //         // }
  //       }
  //       // Axios.post('http://localhost:5000/upload', fd)
  //       //     .then(res => {
  //       //         console.log(res)
  //       //     })
  //     }
  //   };
  //   // if (isAddDetails === true) {
  //   //   fileUploadHandler();
  //   // }

  const validate = (values) => {
    const errors = {};
    if (!values.title) {
      errors.title = "Title is required!";
    }
    if (!values.description) {
      errors.description = "Description is required!";
    }
    if (!values.file) {
      errors.file = "Logo is required!";
    }
    return errors;
  };

  //   useEffect(() => {
  //     Axios.get(`http://localhost:5000/api/clubdetails/${ID}`).then((resp) => {
  //       setListItem({ ...resp.data[0] });
  //     });
  //   }, []);

  //   useEffect(() => {
  //     getId();
  //     console.log("hhhhhhhhhhhhhhhh");
  //     console.log(isAddDetails);
  //   }, [isAddDetails]);

  return (
    <>
      <Container>
        <Form noValidate validated={validated} className="mt-5 w-75 mx-auto">
          <Form.Group className="mb-3">
            <Form.Label>Club Name</Form.Label>
            <Form.Control
              required
              className="borderEffect"
              type="text"
              placeholder="Club Name"
              value={title}
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
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
            <Form.Control.Feedback type="invalid">
              {formErrors.description}
            </Form.Control.Feedback>
          </Form.Group>
          {/* <InputGroup> */}
          <Form.Group className="mb-3">
            <Form.Label>Club Logo</Form.Label>
            <FormControl
              required
              placeholder="Upload club logo"
              className="borderEffect"
              type="file"
              onChange={loadImage}
            />
            {/* </InputGroup> */}
            <Form.Control.Feedback type="invalid">
              {formErrors.file}
            </Form.Control.Feedback>
          </Form.Group>

          {erroeMsg !== "" ? (
            <p style={{ color: "red", margin: " 5px " }}>{erroeMsg}</p>
          ) : null}

          {preview ? (
            <figure className="image is-128x128">
              <img src={preview} alt="Preview Image" width="200" height="200" />
            </figure>
          ) : (
            ""
          )}
          <Button
            variant="primary"
            className="w-25  mt-3 mx-3"
            onClick={saveClub}
          >
            Add club
          </Button>
          {/* <div className="d-flex justify-content-center">
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
          </div> */}
        </Form>

        <ToastContainer />
      </Container>
    </>
  );
}

export default AddClub;
