import { Container, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import leadership from "../../images/leaders.jpg";
import services from "../../images/services.jpg";
import membership from "../../images/member.png";

import "./Home.css";
function Home() {
  return (
    <>
      <Container>
        <Card className="card  border-0">
          <Card.Img variant="top" src={services} className="cardImg" />
          <Card.Body>
            <Card.Title>Services</Card.Title>
            <Card.Text>
              Over 1.4 million Lions across the globe are stepping up to serve
              their communities during the coronavirus (COVID-19) pandemic.
              These new challenges have changed the way we live, but our
              dedication to helping those in need is as strong as it was when we
              first opened our doors more than 100 years ago.
            </Card.Text>
            <div className="d-flex justify-content-end">
              <Link to="/services">
                <Button variant="primary">Read More...</Button>
              </Link>
            </div>
          </Card.Body>
        </Card>
        <Card className="card  border-0" id="leadership">
          <Card.Img variant="top" src={leadership} className="cardImg" />
          <Card.Body>
            <Card.Title>Leadership</Card.Title>
            <Card.Text>
              When caring people join together, roll up their sleeves and take
              action to make their community better, it’s a beautiful thing and
              an incredible feeling for everyone involved. That’s Lions. Being a
              Lion is about leading by example, building relationships and
              improving the world through kindness.
            </Card.Text>
            <div className="d-flex justify-content-end">
              <Link to="/leadership">
                <Button variant="primary">Read More...</Button>
              </Link>
            </div>
          </Card.Body>
        </Card>
        <Card className="card border-0">
          <Card.Img variant="top" src={membership} className="cardImg" />
          <Card.Body>
            <Card.Title>Membership</Card.Title>
            <Card.Text>
              In these times of adversity, Lions around the world are safely
              answering the call to service. From food delivery for healthcare
              workers to providing medical supplies where they’re needed most,
              Lions and Leos are finding ways to show how kindness matters..
            </Card.Text>
            <div className="d-flex justify-content-end">
              <Link to="/leoclub">
                <Button variant="primary">Read More...</Button>
              </Link>
            </div>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default Home;
