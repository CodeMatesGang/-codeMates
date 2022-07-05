import { Carousel,Button } from "react-bootstrap";
import imgSlider1 from '../images/imgSlider1.png'
import imgSlider2 from '../images/imgSlider2.png'
import imgSlider3 from '../images/imgSlider3.png'
import { Link } from "react-router-dom";
import './imageSlider.css'
function ImageSlider() {
    return <>
        <Carousel fade className="my-carousel">
            <Carousel.Item>
                <img
                className="d-block w-100 my-img"
                src={imgSlider1}
                alt="Register Now"
                height="400px"
                width="100%"
                />
                <Carousel.Caption>
                    <h3>Register Now to join the most outstanding service club</h3>
                    <p className="mt-4">Grab the opportunity to be a part of the Lions Club of Colombo Centennial.</p>
                    <Button variant="outline-primary" className="mb-2 mt-5" as={Link} to="/join">Register Now</Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 my-img"
                src={imgSlider2}
                alt="Donate"
                height="400px"
                width="100%"
                />

                <Carousel.Caption>
                    <h3>Donate Now to help your sisters and brothers</h3>
                    <p className="mt-4">Please donate what you can today. Little drops make the mighty ocean!</p>
                    <Button variant="outline-warning" className="mb-2 mt-5" as={Link} to="/donate">Donate</Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 my-img"
                src={imgSlider3}
                alt="Learn More"
                height="400px"
                width="100%"
                />

                <Carousel.Caption>
                    <h3>Learn More about our Lions Club of Colombo Centennial</h3>
                    <p className="mt-4">Find the services and leadership activities we provide for you.</p>
                    <Button variant="outline-danger" className="mb-2 mt-5" as={Link} to="/leoclub">Learn More</Button>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
    </>
}

export default ImageSlider