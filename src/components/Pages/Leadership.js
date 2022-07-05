import { Container } from "react-bootstrap";
import image from "../../images/leader.jpg";
import "./Leadership.css";
function Leadership() {
  return (
    <>
      <Container className="mainContainer">
        <img
          src={image}
          alt="Services"
          height="400px"
          width="75%"
          className="shadow rounded mx-auto d-block imgBlog"
        />
        <div>
          <h2>Our Leaders</h2>
          <p>
            When caring people join together, roll up their sleeves and take
            action to make their community better, it’s a beautiful thing and an
            incredible feeling for everyone involved. That’s Lions. Being a Lion
            is about leading by example, building relationships and improving
            the world through kindness. It’s 1.4 million caring men and women
            serving together so they can make a lasting impact and change more
            lives.
            <br />
            Over 1.4 million Lions across the globe are stepping up to serve
            their communities during the coronavirus (COVID-19) pandemic. These
            new challenges have changed the way we live, but our dedication to
            helping those in need is as strong as it was when we first opened
            our doors more than 100 years ago.
          </p>

          <a
            href="https://www.facebook.com/pages/category/Community-Organization/Lions-Club-of-Colombo-Centennial-113789430260504/"
            target="_blank"
            rel="noreferrer"
            className="mt-5"
          >
            {" "}
            Click Here to find our Duties !
          </a>
        </div>
      </Container>
    </>
  );
}

export default Leadership;
