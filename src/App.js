import { Route, Routes } from 'react-router-dom';
import Axios from 'axios'
import { useState, useEffect } from 'react'



import Header from './components/main components/Header';
import Home from './components/Pages/Home';
import AboutUs from './components/Pages/AboutUs'
import LeoClub from './components/Pages/LeoClub'
import LCIF from './components/Pages/LCIF'
import Member from './components/Pages/Member'
import Events from './components/Pages/Events'
import Conference from './components/Pages/Conference'
import ConferenceAdmin from './components/Admin Page/ConferenceAdmin'
import Join from './components/Pages/Join';
import Donation from './components/Pages/Donation'
import Services from './components/Pages/Services'
import Leadership from './components/Pages/Leadership'
import RepliesOfContactUs from './components/Admin Page/RepliesOfContactUs';
import ReplyToFeedback from './components/Admin Page/ReplyToFeedback'
// import LeoClubsUploads from './components/Admin Page/LeoClubsUploads'
import AlphaClub from './components/Admin Page/AlphaClub'
import OmegaClub from './components/Admin Page/OmegaClub'
import Footer from './components/footer'
import './App.css';
import ViewLeoClub from './components/Pages/ViewLeoClub';
import SignIn from './components/Pages/SignIn';
import Register from './components/Pages/Register';

// const contactUsReplies = 


function App() {  
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
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/leoclub' element={<LeoClub />} />
        <Route path='/lcif' element={<LCIF />} />
        <Route path='/member' element={<Member />} />
        <Route path='/events' element={<Events />} />
        <Route path='/conference' element={<Conference />} />
        <Route path='/ConferenceAdmin' element={<ConferenceAdmin />} />
        <Route path='/join' element={<Join />} />
        <Route path='/donate' element={<Donation />} />
        <Route path='/join' element={<Register />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/services' element={<Services />} />
        <Route path='/leadership' element={<Leadership />} />
        <Route path='/repliesofcontactUs' element={<RepliesOfContactUs />} />
        <Route path='/replytofeedback/:id' element={<ReplyToFeedback data={ replyList } />} />
        {/* <Route path='/leoclubuploads' element={<LeoClubsUploads />} /> */}
        <Route path='/alphaclub' element={<AlphaClub />} />
        <Route path='/omegaclub' element={<OmegaClub />} />
        <Route path='/updateclub/:ID' element={<OmegaClub />} />
        <Route path='/viewleoclub/:ID' element={<ViewLeoClub />} />

  
      </Routes>
      <Footer />

{/* <Routes>
        <Route path="/" element={<AllMeetupsPage />} />
        <Route path="/new-meetup" element={<NewMeetupsPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes> */}
    </div>
  );
}

export default App;
