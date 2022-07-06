import { Container } from "react-bootstrap";
import ClubList from "../Pages/ClubList";
import RepliesOfContactUs from "./RepliesOfContactUs";
import "./Admin.css";
function Admin() {
  return (
    <>
      <Container className="adminContainer">
        <h1 className="text-center mt-5">Admin panel</h1>
        <hr />
        <div className="adminBox mx-4 my-4 p-3">
          <h2 className="text-center mt-5">Our Leo Clubs</h2>
          <ClubList />
        </div>
        <div className="adminBox mx-4 my-4 p-3">
          <h2 className="text-center mt-5">Feedbacks</h2>
          <RepliesOfContactUs />
        </div>
      </Container>
    </>
  );
}

export default Admin;
