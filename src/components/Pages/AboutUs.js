import { Container } from "react-bootstrap";
import image from "../../images/bgimg.jpg";
import ContactForm from "../main components/ContactForm";
import "./AboutUs.css";
function AboutUs() {
  return (
    <>
      <Container className="mainContainer">
        <img
          src={image}
          alt="lions"
          height="400px"
          width="75%"
          className="shadow rounded mx-auto d-block imgBlog"
        />
        <div>
          <h2>Lions Club</h2>
          <p>
            In these times of adversity, Lions around the world are safely
            answering the call to service. From food delivery for healthcare
            workers to providing medical supplies where they’re needed most,
            Lions and Leos are finding ways to show how kindness matters.
            <br />
            When caring people join together, roll up their sleeves and take
            action to make their community better, it’s a beautiful thing and an
            incredible feeling for everyone involved. That’s Lions. Being a Lion
            is about leading by example, building relationships and improving
            the world through kindness. It’s 1.4 million caring men and women
            serving together so they can make a lasting impact and change more
            lives.
          </p>
        </div>
        <ContactForm />
      </Container>
    </>
  );
}
export default AboutUs;
