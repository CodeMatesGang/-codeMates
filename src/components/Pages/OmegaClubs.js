import { useState, useEffect, useRef } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import { Button, Row, Col } from "react-bootstrap";
import { BsPencilSquare } from "react-icons/bs";
import { BsFillTrashFill } from "react-icons/bs";
import { BsFillPlusCircleFill } from "react-icons/bs";
import ConfirmDialog from "./ConfirmDialog";
import "./OmegaClubs.css";
import leoLogo from "../../images/leoLogo.png";
import axios from "axios";

function OmegaClubs() {
  const [isAdmin, setIsAdmin] = useState(true);

  const [replyList, setReplyList] = useState([]);
  const getList = async () => {
    const response = await Axios.get("http://localhost:5000/api/clubdetails");
    const replyList = await response.data;
    setReplyList(replyList);
  };

  useEffect(() => {
    getList();
  }, []);

  const [dialog, setDialog] = useState({
    message: "",
    isLoading: false,
  });
  const idClubRef = useRef();
  const handleDialog = (message, isLoading) => {
    setDialog({
      message,
      isLoading,
    });
  };
  // delete club
  const deleteClub = (id) => {
    handleDialog("Are you sure you want to delete?", true);
    idClubRef.current = id;
    // setReplyList(replyList.filter((list) => list.id !== id));
    // if (window.confirm("Are you sure that you wanted to delete the club?")) {
    //   axios.delete(`http://localhost:5000/api/removeclub/${id}`);
    //   // setTimeout(() => window.location.reload(),500)
    //   window.location.reload(false);
    // }
  };
  const areUSureDelete = (choose) => {
    if (choose) {
      axios.delete(`http://localhost:5000/api/removeclub/${idClubRef.current}`);
      // setTimeout(() => window.location.reload(),500)
      handleDialog("", false);

      window.location.reload(false);
    } else {
      handleDialog("", false);
    }
  };
  return (
    <>
      {/* <h4>Omega club</h4> */}
      <div className="d-flex justify-content-end">
        <Button
          variant="success"
          onClick={() => {
            setIsAdmin(!isAdmin);
          }}
        >
          {isAdmin ? "Admin" : "Guest User"}
        </Button>
      </div>
      <div className="omegaContainer">
        <div className="omegaclub d-flex justify-content-end">
          <br />
          {isAdmin ? (
            <Button
              variant="light"
              as={Link}
              to="/omegaclub"
              className="editDeleteAddBtn"
            >
              <BsFillPlusCircleFill
                style={{ color: "green", fontSize: "1.5em" }}
              />
            </Button>
          ) : null}
        </div>
        {/* <h2>Omega Club</h2>         */}
      </div>
      <Row>
        {replyList.map((listItem) => {
          const { id, image, title } = listItem;

          return (
            <Col sm={6} key={id} className="leoCol mt-4">
              <h4>{title}</h4>
              {console.log(image)}
              {image !== null ? (
                <img
                  src={`../../../uploads/${image}`}
                  alt={title}
                  height="200px"
                  className="leoImage"
                />
              ) : (
                <img
                  src={leoLogo}
                  alt={title}
                  height="200px"
                  className="leoImage"
                />
              )}
              {/* <p className='mt-2'>{description}</p> */}
              {isAdmin ? (
                <div>
                  {" "}
                  <Button
                    variant="light"
                    className="mt-3 editDeleteAddBtn"
                    as={Link}
                    to={`/updateclub/${id}`}
                  >
                    <BsPencilSquare
                      style={{ color: "blue", fontSize: "1.5em" }}
                    />
                  </Button>{" "}
                  <Button
                    variant="light"
                    className="mt-3 editDeleteAddBtn"
                    onClick={() => {
                      deleteClub(id);
                    }}
                  >
                    <BsFillTrashFill
                      style={{ color: "red", fontSize: "1.5em" }}
                    />
                  </Button>{" "}
                </div>
              ) : null}
              <br />
              <Button
                variant="success"
                as={Link}
                to={`/viewleoclub/${id}`}
                className="w-25 mt-3"
              >
                Read More...
              </Button>{" "}
            </Col>
          );
        })}
      </Row>
      {dialog.isLoading && (
        <ConfirmDialog onDialog={areUSureDelete} message={dialog.message} />
      )}
    </>
  );
}

export default OmegaClubs;
