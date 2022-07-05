import { useState, useEffect, useRef } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import { Button, Row, Col } from "react-bootstrap";
import "./OmegaClubs.css";

function LeoClubs() {
  const [clubList, setClubList] = useState([]);

  const getList = async () => {
    const response = await Axios.get("http://localhost:5000/clubs");
    const clubList = await response.data;
    setClubList(clubList);
  };
  useEffect(() => {
    getList();
  }, []);

  return (
    <>
      <div className="omegaContainer"></div>
      <Row>
        {clubList.map((listItem) => {
          const { id, name, url } = listItem;

          return (
            <Col lg={4} key={id} className="leoCol mt-4">
              <h4>{name}</h4>
              <img src={url} alt={name} height="200px" className="leoImage" />
              <br />
              <Button
                variant="success"
                as={Link}
                to={`/clubs/${id}`}
                className="w-25 mt-3"
              >
                Read&nbsp;More...
              </Button>{" "}
            </Col>
          );
        })}
      </Row>
    </>
  );
}

export default LeoClubs;
