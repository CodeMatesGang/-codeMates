import { useState, useEffect } from "react"
import { useParams,Link } from "react-router-dom"
import Axios from "axios"
import { Button, Container } from "react-bootstrap"
import leoLogo from '../../images/leoLogo.png'



function ViewLeoClub() {
    const [club, setClub] = useState({})
    const { ID } = useParams()

    useEffect(() => {
        Axios.get(`http://localhost:5000/api/clubdetails/${ID}`)
        .then((resp) => {setClub({...resp.data[0]})})
    },[ID])
    return <>
        <Container>

                {club.image !== null ? 
                    <img
                src={`../../../uploads/${club.image}`}
                alt="lions"
                height="300px"
                width="300px"
                className='shadow rounded m-auto img-thumbnail mt-5  mx-auto  d-block'
            />
                // <Card.Img variant="top" src={`../../../uploads/${club.image}`} />
                    :
                        <img
                src={leoLogo}
                alt="lions"
                height="300px"
                width="300px"
                className='shadow rounded m-auto img-thumbnail mt-5  mx-auto  d-block'
            />
                    
                }
                <div>
                    <h2>{club.title}</h2>
                    <p>{club.description}</p>
                </div>


        </Container>
    </>
}


export default ViewLeoClub