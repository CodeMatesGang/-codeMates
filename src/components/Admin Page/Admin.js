import { Container } from "react-bootstrap";
import ClubList from "../Pages/ClubList";
import RepliesOfContactUs from "./RepliesOfContactUs";

function Admin() {
  return (
    <>
      <Container>
        <h1 className="text-center mt-4">Admin panel</h1>
        <hr />
        <div>
          <h2>Our Leo Clubs</h2>
          <ClubList />
        </div>
        <hr />
        <div>
          <h2>Feedbacks</h2>
          <RepliesOfContactUs />
        </div>
      </Container>
    </>
  );
}

export default Admin;
