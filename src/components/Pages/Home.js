import { Container, Card, Button } from "react-bootstrap"
import { Link } from 'react-router-dom'
import leadership from '../../images/leaders.jpg'
import services from '../../images/services.jpg'
import membership from '../../images/member.png'

import './Home.css'
function Home() {
    return <>
    <Container>
        <Card className="card gap-5">
            <Card.Img variant="top" src={services} className="cardImg"/>
            <Card.Body>
                <Card.Title>Services</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <div className="d-flex justify-content-end">
                    <Link to='/services'><Button variant="primary" >Read More...</Button></Link>
                </div>
            </Card.Body>
            </Card>  
            <Card className="card gap-5" id="leadership">
            <Card.Img variant="top" src={leadership} className="cardImg"/>
            <Card.Body>
                <Card.Title>Leadership</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <div className="d-flex justify-content-end">
                    <Link to='/leadership'><Button variant="primary" >Read More...</Button></Link>
                </div>
            </Card.Body>
            </Card> 
            <Card className="card gap-5">
            <Card.Img variant="top" src={membership} className="cardImg"/>
            <Card.Body>
                <Card.Title>Membership</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <div className="d-flex justify-content-end">
                    <Link to='/leoclub'><Button variant="primary" >Read More...</Button></Link>
                </div>
            </Card.Body>
        </Card> 
    </Container>
    </>
}

export default Home