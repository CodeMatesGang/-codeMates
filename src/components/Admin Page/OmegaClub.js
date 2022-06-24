import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Axios from "axios";
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

  const [listItem, setListItem] = useState({ title, description });
  const { ID } = useParams();
  console.log(listItem);

  useEffect(() => {
    Axios.get(`http://localhost:5000/api/clubdetails/${ID}`).then((resp) => {
      setListItem({ ...resp.data[0] });
    });
  }, [ID]);

  // const [id,setId] = useState(0)

  const addDetails = (e) => {
    e.preventDefault();
    if (!ID) {
      //insert form data
      Axios.post("http://localhost:5000/api/insertclub", {
        title: title,
        description: description,
      })
        .then(() => {
          setIsAddDetails(!isAddDetails);
          alert("Successfully Inserted!");
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      //update form data
      Axios.put(`http://localhost:5000/api/put/${ID}`, {
        title: title,
        description: description,
      })
        .then(() => {
          // setIsAddDetails(!isAddDetails)
          // alert("Successfully Updated!");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  //get reply list from club details
  const [id, setId] = useState(0);
  const getId = async () => {
    const response = await Axios.get("http://localhost:5000/api/clubdetails");
    const len = Object.keys(response.data).length - 1;
    console.log(len);
    const id = response.data[len].id;
    console.log(id);

    setId(id);
    // console.log(response.data[len].id)
  };

  const fileSelectHandler = (e) => {
    setSelectedFile(e.target.files[0]);
  };
  const fileUploadHandler = async (e) => {
    e.preventDefault();
    //Upload image
    const fd = new FormData();
    fd.append("uploadedFile", selectedFile);
    console.log(fd);
    // fd.append('title', title)
    // fd.append('description', description)

    try {
      const res = await Axios.post(`http://localhost:5000/upload/${id}`, fd, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }).then(() => {
        alert("Successfully uploaded!");
      });

      const { fileName, filePath } = res.data;
      setUploadedFile({ fileName, filePath });
    } catch (err) {
      if (err.response.status === 500) {
        console.log("Problem in server");
      } else {
        console.log(err.response.data.msg);
      }
    }
    // Axios.post('http://localhost:5000/upload', fd)
    //     .then(res => {
    //         console.log(res)
    //     })
  };

  useEffect(() => {
    getId();
  }, [isAddDetails]);

  console.log(title, description);
  return (
    <>
      <Container>
        <Form className="mt-5 w-75 mx-auto">
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Title"
              value={title || listItem.title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={description || listItem.description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
          </Form.Group>
          {ID ? null : (
            <InputGroup className="mb-3 mt-5">
              <FormControl
                placeholder="Upload image or video"
                type="file"
                onChange={fileSelectHandler}
              />
              <Button variant="primary" onClick={fileUploadHandler}>
                Upload
              </Button>
            </InputGroup>
          )}
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
      </Container>
    </>
  );
}

export default OmegaClub;
