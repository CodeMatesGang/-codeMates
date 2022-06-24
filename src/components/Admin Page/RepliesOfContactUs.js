import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'
import { Container, Table, Button } from 'react-bootstrap'
import './RepliesOfContactUs.css'
const RepliesOfContactUs=()=> {
    const [replyList, setReplyList] = useState([])
    const getList = async () => {
        const response = await Axios.get('http://localhost:5000/api/replies');
        const replyList = await response.data;
        setReplyList(replyList)
        // console.log(replyList)
    }
    useEffect(() => {
       getList()
    }, [])
    
    return (
        <>
        <Container>   
                <h2 style={{marginBottom:"15px"}}>Replies</h2>
                <Table striped bordered hover size="sm" style={{borderColor : "#fff"}} className="m">
                    <thead>
                        <tr>
                        <th>Full Name</th>
                        <th>Email</th>
                        <th>Message</th>
                        </tr>
                    </thead>
                    <tbody>
                        {replyList.map(listItem => {
                            const { id, fName, lName, email, message } = listItem
                            return (
                                <tr key={id}>
                                    <td>{fName} {lName}</td>
                                    <td>{email}</td>
                                    <td colSpan={2}>{message}</td>
                                    <td><Button as={Link} to={`/replytofeedback/${id}`} className='w-100' >Reply</Button></td>

                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
        </Container>
        </>
    )
}

export default RepliesOfContactUs