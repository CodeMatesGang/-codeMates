import React from 'react'
import { useState, useEffect } from "react";
import{ useNavigate, useParams, Link} from "react-router-dom";
import axios from 'axios';
import { toast } from 'react-toastify';
import "./MeetingForm.css"

const initialState ={
  meetingHeading: "",
  note: "",
  date: "",
  time: "",
  link: ""

}
const MeetingForm = () => {

  const [state, setState] = useState(initialState);

  const {meetingHeading, note, date, time, link} = state;

  const navigate = useNavigate();

  const {id} = useParams();
  useEffect(() =>{
    axios.get(`http://localhost:3001/display/${id}`)
    .then((resp) =>setState({...resp.data[0]}))
  },[id])

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!meetingHeading || !date || !time || !link) {
      toast.error("Please fill all the input field");
    } else {
      if(!id){
        axios.post("http://localhost:3001/create",{
        meetingHeading,
        note,
        date,
        time,
        link
      }).then(() =>{
        setState({meetingHeading:"", note:"", date:"", time:"", link:""})
      }).catch((err) =>toast.error(err.response.data));
      toast.success("Meeting added successfully")
      } else{
        axios.put(`http://localhost:3001/update/${id}`,{
        meetingHeading,
        note,
        date,
        time,
        link
      }).then(() =>{
        setState({meetingHeading:"", note:"", date:"", time:"", link:""})
      }).catch((err) =>toast.error(err.response.data));
      toast.success("Meeting Updated successfully")
      }
      
      setTimeout(() =>navigate.push("/"), 500);
    }
 
  }
  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setState({...state, [name]: value});  
  }


  return (
    <div style={{marginTop: "50px"}}>
      <form style={{
            margin: "auto",
            padding: "15px",
            maxWidth: "80%",
            alignContent: "center"
      }}
      onSubmit={handleSubmit}
      >
        <div className='row'>
        <div className='col'>
        <label htmlFor="meetingHeading">Meeting Heading</label>
                <input
                    type="text"
                    id="meetingHeading"
                    name="meetingHeading"
                    placeholder='Meeting Heading'
                    value={meetingHeading || ""}
                    onChange={handleInputChange}
                    />
                    </div>
                    <div className='col'>
                    <label htmlFor="link">Note</label>
                    <input
                    type="text"
                    id="note"
                    name="note"
                    placeholder="Note (optional)"
                    value={note || ""}
                    onChange={handleInputChange}
                />
                </div>
            </div>
        <div className='row'>
        <div className='col'>

        <label htmlFor="date">Date</label>
        <input
        type="date"
        min={new Date().toISOString().split('T')[0]}
        id="date"
        name="date"
        placeholder="Date"
        value={date || ""}
        onChange={handleInputChange}
        />
        </div>
        <div className='col'>
        <label htmlFor="time">Time</label>
        <input
        type="time"
        id="time"
        name="time"
        placeholder='Time'
        value={time || ""}
        onChange={handleInputChange}
        />
        </div>
        </div>

        <label htmlFor="link">Meeting Link</label>
        <input
        type="text"
        pattern="[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)*"
        id="link"
        name="link"
        placeholder='Meeting Link'
        value={link || ""}
        onChange={handleInputChange}
        />
        <input type="submit" value={id ? "Update" : "Save"}/>
        <Link to="/">
        </Link>
      </form>
    </div>
  )
}

export default MeetingForm