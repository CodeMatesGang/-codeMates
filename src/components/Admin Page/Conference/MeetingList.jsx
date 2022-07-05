
import React from 'react';
import { useEffect, useState,} from 'react';
import {useNavigate} from 'react-router-dom'
import axios from "axios";
import './MeetingList.css';
import { toast } from 'react-toastify';


const MeetingList = () => {
    const navigate = useNavigate();
    const [displayData, setDisplayData] = useState([]);

    const display = () =>{
        axios.get('http://localhost:3001/display')
        .then((Response) =>{
        setDisplayData(Response.data);
            console.log(Response.data);
        });
      }
    useEffect(() =>{
        display();
    }, []);

    
    const deleteMeeting = (id) =>{
        if(window.confirm("Are you sure ?")){
            axios.delete(`http://localhost:3001/delete/${id}`);
            toast.success("Meeting deleted successfully")
            setTimeout(() =>navigate.push("/"), 500);
        }
    }



  return (
      <div style={{marginTop:"20px"}}>
        <table className="styled-table">
            <thead>
                <tr>
                    <th style={{textAlign: "center"}}>id</th> 
                   <th style={{textAlign: "center"}}>Meeting Heading</th> 
                   <th style={{textAlign: "center"}}>Note</th> 
                   <th style={{textAlign: "center"}}>Date</th> 
                   <th style={{textAlign: "center"}}>Time</th> 
                   <th style={{textAlign: "center"}}>Link</th>
                   <th style={{textAlign: "center"}}>Action</th> 

                </tr>
            </thead>
            <tbody>
               {displayData.map((item, index) =>{
                return(
                    <tr key={item.id}>
                        <th scope='row'>{index+1}</th>
                        <td>{item.meetingHeading}</td>
                        <td>{item.note}</td>
                        <td>{item.date}</td>
                        <td>{item.time}</td>
                        <td>{item.link}</td>
                        <td>
                            <button className='btn btn-edit' onClick={`/update/${item.id}`}>Edit</button>
                            <button className='btn btn-delete'onClick={() =>{deleteMeeting(item.id);}}>Delete</button> 
                        </td>
                    </tr>
                )
            })} 
            </tbody>
        </table>
    </div>
  );
};
export default MeetingList;
