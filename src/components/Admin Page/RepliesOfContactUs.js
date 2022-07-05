import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import { Container, Table, Button } from "react-bootstrap";
import { BsCheckCircleFill } from "react-icons/bs";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import "./RepliesOfContactUs.css";
const RepliesOfContactUs = () => {
  const [replyList, setReplyList] = useState([]);
  const getList = async () => {
    const response = await Axios.get("http://localhost:5000/contactus");
    const replyList = await response.data;
    setReplyList(replyList);
    // console.log(replyList)
  };
  useEffect(() => {
    getList();
  }, []);

  return (
    <>
      <Container>
        <h2 style={{ marginBottom: "15px" }}>Replies</h2>
        <Table
          responsive
          striped
          bordered
          hover
          size="sm"
          style={{ borderColor: "#fff" }}
          className="m"
        >
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Email</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            {[...replyList].reverse().map((listItem) => {
              const { id, fName, lName, email, message, replyStatus } =
                listItem;
              return (
                <tr key={id}>
                  <td>
                    {fName} {lName}
                  </td>
                  <td>{email}</td>
                  <td
                    style={{
                      width: "50%",
                    }}
                  >
                    {message}
                  </td>
                  <td className="d-flex justify-content-center">
                    {replyStatus === 1 ? (
                      <Button className="w-75" variant="success">
                        Replied&nbsp;&nbsp;
                        <BsCheckCircleFill />
                      </Button>
                    ) : (
                      <Button
                        as={Link}
                        to={`/replytofeedback/${id}`}
                        className="w-75"
                      >
                        Reply&nbsp;&nbsp;
                        <BsFillArrowRightCircleFill />
                      </Button>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default RepliesOfContactUs;
