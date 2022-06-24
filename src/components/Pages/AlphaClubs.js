import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"

function AlphaClubs() {
    return <>
        <h4>Alpha club</h4>
        <div className="alphaContainer">
        <div className="alphaclub d-flex justify-content-end">
                <Button variant="success" as={Link} to='/alphaclub'>Alpha Club</Button>  
        </div>
            <h2>Alpha Club</h2>        
        </div>
    </>
}

export default AlphaClubs