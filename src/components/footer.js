import { Link } from "react-router-dom";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import { BsFacebook } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import Logo from "../images/logo.png";
import "./footer.css";
function Footer() {
  return (
    <>
      <Container fluid className="footer">
        <Container>
          <Row>
            {/* Colum 01 */}
            <Col xs={12} md={6} lg={3} className="footerColumn">
              <div className="footerSubHeading">
                <h4>News</h4>
              </div>
              <hr style={{ width: "50%" }} className="footerhr" />
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <a
                    href="https://www.lionsclubs.org/en/footer/lions-press-center"
                    target="_blank"
                    rel="noreferrer"
                    className="footerLink"
                  >
                    {" "}
                    Press Center{" "}
                  </a>
                </ListGroup.Item>
                <ListGroup.Item>
                  <a
                    href="https://www.lionsclubs.org/en/explore-our-clubs/service-stories"
                    target="_blank"
                    rel="noreferrer"
                    className="footerLink"
                  >
                    Service Stories
                  </a>
                </ListGroup.Item>
                <ListGroup.Item>
                  <a
                    href="https://www.lionsclubs.org/en/blog"
                    target="_blank"
                    rel="noreferrer"
                    className="footerLink"
                  >
                    The Lions Blog
                  </a>
                </ListGroup.Item>
                <ListGroup.Item>
                  <a
                    href="https://www.lionsclubs.org/en/footer/lion-magazine"
                    target="_blank"
                    rel="noreferrer"
                    className="footerLink"
                  >
                    LION Magazine
                  </a>
                </ListGroup.Item>
              </ListGroup>
            </Col>
            {/* Colum 01 */}
            {/* Colum 02 */}
            <Col xs={12} md={6} lg={3} className="footerColumn">
              <div className="footerSubHeading">
                <h4>Media</h4>
              </div>
              <hr style={{ width: "50%" }} className="footerhr" />
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <a
                    href="https://www.lionsclubs.org/en/lions-video-center"
                    target="_blank"
                    rel="noreferrer"
                    className="footerLink"
                  >
                    Video Center
                  </a>
                </ListGroup.Item>
                <ListGroup.Item>
                  <a
                    href="https://www.lionsclubs.org/en/resources-for-members/resource-center/logos-and-emblems"
                    target="_blank"
                    rel="noreferrer"
                    className="footerLink"
                  >
                    Logos
                  </a>
                </ListGroup.Item>
                <ListGroup.Item>
                  <a
                    href="https://www.lionsclubs.org/en/resources-for-members/brand-guidelines"
                    target="_blank"
                    rel="noreferrer"
                    className="footerLink"
                  >
                    Brand Guidelines
                  </a>
                </ListGroup.Item>
              </ListGroup>
            </Col>
            {/* Colum 02 */}
            {/* Colum 03 */}
            <Col xs={12} md={6} lg={3} className="footerColumn">
              <div className="footerSubHeading">
                <h4>Connect</h4>
              </div>
              <hr style={{ width: "50%" }} className="footerhr" />
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <a
                    href="https://www.lionsclubs.org/en/footer/careers"
                    target="_blank"
                    rel="noreferrer"
                    className="footerLink"
                  >
                    Careers
                  </a>
                </ListGroup.Item>
                <ListGroup.Item>
                  <a
                    href="https://www.lionsclubs.org/en/footer/contact-us"
                    target="_blank"
                    rel="noreferrer"
                    className="footerLink"
                  >
                    Contact LCI
                  </a>
                </ListGroup.Item>
                <ListGroup.Item>
                  <a
                    href="https://www.lionsclubs.org/en/footer/contact-us/contact-lcif"
                    target="_blank"
                    rel="noreferrer"
                    className="footerLink"
                  >
                    Contact LCIF
                  </a>
                </ListGroup.Item>
                <ListGroup.Item>
                  <a
                    href="https://www.lionsclubs.org/en/footer/connect/your-privacy"
                    target="_blank"
                    rel="noreferrer"
                    className="footerLink"
                  >
                    Your Privacy
                  </a>
                </ListGroup.Item>
              </ListGroup>
            </Col>
            {/* Colum 03 */}
            {/* Colum 04 */}
            <Col xs={12} md={6} lg={3} className="footerColumn">
              <ListGroup horizontal className="media mx-auto">
                <ListGroup.Item>
                  <a
                    href="https://www.facebook.com/Lions-Club-of-Colombo-Centennial-113789430260504/"
                    target="_blank"
                    rel="noreferrer"
                    className="mx-auto footerLink"
                  >
                    <BsFacebook style={{ fontSize: "1.5em" }} />
                  </a>
                </ListGroup.Item>
                <ListGroup.Item>
                  <a
                    href="https://www.youtube.com/channel/UCXaUSPaAVgcX1aUgyJ2Qmcg/featured"
                    target="_blank"
                    rel="noreferrer"
                    className="mx-auto footerLink"
                  >
                    <BsYoutube style={{ fontSize: "1.5em" }} />
                  </a>
                </ListGroup.Item>
              </ListGroup>

              <ListGroup variant="flush">
                <ListGroup.Item>
                  <ListGroup>
                    <ListGroup.Item>
                      <div className="d-flex justify-content-center">
                        <Link to="/">
                          <img
                            src={Logo}
                            width="70"
                            height="70"
                            alt="Lions Club of Colombo Centennial logo"
                          />
                        </Link>
                      </div>
                    </ListGroup.Item>
                    <ListGroup.Item className="lcccName">
                      Lions&nbsp;Club&nbsp;of&nbsp;Colombo&nbsp;Centennial
                    </ListGroup.Item>
                  </ListGroup>
                </ListGroup.Item>
              </ListGroup>
            </Col>
            {/* Colum 04 */}
          </Row>
          <hr />
          <Row className="col-sm text-center">
            <p>&copy;{new Date().getFullYear()} LCCC | Privacy</p>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default Footer;
