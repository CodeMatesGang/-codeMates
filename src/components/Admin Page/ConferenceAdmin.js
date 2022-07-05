import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import React from "react";
import MeetingList from './Conference/MeetingList';
import MeetingForm from './Conference/MeetingForm';


const ConferenceAdmin = () => {
  return (
    <>
    <ToastContainer position='top-center' />
    <div className='form'>
    <MeetingForm/>
    </div>
    <div className='table'>
    <MeetingList/>
    </div>
    </>
  )
}

export default ConferenceAdmin