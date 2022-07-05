import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import { Container } from "react-bootstrap";
import leoLogo from "../../images/leoLogo.png";

function ViewLeoClub() {
  const [title, setTitle] = useState("");
  // const [file, setFile] = useState("");
  const [description, setDescription] = useState("");
  const [preview, setPreview] = useState("");

  const { id } = useParams();
  const getClubById = async () => {
    const response = await Axios.get(`http://localhost:5000/clubs/${id}`);
    setTitle(response.data.name);
    // setFile(response.data.image);
    setDescription(response.data.description);
    setPreview(response.data.url);
  };
  useEffect(() => {
    getClubById();
  }, []);

  return (
    <>
      <Container>
        {/* {console.log(club)} */}
        <img
          src={preview}
          alt="lions"
          height="300px"
          width="300px"
          className="shadow rounded m-auto img-thumbnail mt-5  mx-auto  d-block"
        />

        <div>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </Container>
    </>
  );
}

export default ViewLeoClub;
