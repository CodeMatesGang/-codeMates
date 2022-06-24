import { Button,Container } from "react-bootstrap"
import { Link } from "react-router-dom"
import './LeoClubsUploads.css'

function LeoClubsUploads() {
    return <>
        <Container>
        <div className="alphaContainer">
        <div className="alphaclub d-flex justify-content-end">
            <Button variant="success" as={Link} to='/alphaclub'>Alpha Club</Button>
        </div>
            <h2>Alpha Club</h2>        
        </div>
        <div className="omegaContainer">
        <div className="omegaclub d-flex justify-content-end">
          <Button variant="success" as={Link} to='/omegaclub'>Omega Club</Button>
        </div>
            <h2>Omega Club</h2>        
        </div>
        </Container>
            
    </>
}

export default LeoClubsUploads