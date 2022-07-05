import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Axios from "axios";
import Header from "./components/main components/Header";
import Home from "./components/Pages/Home";
import AboutUs from "./components/Pages/AboutUs";
import LeoClub from "./components/Pages/LeoClub";
import LCIF from "./components/Pages/LCIF";
// import Member from "./components/Pages/Member";
import Events from "./components/Pages/Events";
import Conference from "./components/Pages/Conference";
import Join from "./components/Pages/Join";
import Donation from "./components/Pages/Donation";
import Services from "./components/Pages/Services";
import Projects from "./components/Pages/Projects";
import Leadership from "./components/Pages/Leadership";
import RepliesOfContactUs from "./components/Admin Page/RepliesOfContactUs";
import ReplyToFeedback from "./components/Admin Page/ReplyToFeedback";
import OmegaClub from "./components/Admin Page/OmegaClub";
import ClubList from "./components/Pages/ClubList";
import Footer from "./components/footer";
import ViewLeoClub from "./components/Pages/ViewLeoClub";
import SignIn from "./components/Pages/SignIn";
import Register from "./components/Pages/Register";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import AddClub from "./components/Admin Page/AddClub";
import EditClub from "./components/Admin Page/EditClub";
import Admin from "./components/Admin Page/Admin";

function App() {
  const [replyList, setReplyList] = useState([]);
  const getList = async () => {
    const response = await Axios.get("http://localhost:5000/contactus");
    const replyList = await response.data;
    setReplyList(replyList);
    // console.log(replyList)
  };
  useEffect(() => {
    getList();
  }, []);
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/leoclub" element={<LeoClub />} />
        <Route path="/lcif" element={<LCIF />} />
        {/* <Route path="/member" element={<Member />} /> */}
        <Route path="/events" element={<Events />} />
        <Route path="/conference" element={<Conference />} />
        <Route path="/join" element={<Join />} />
        <Route path="/donate" element={<Donation />} />
        <Route path="/join" element={<Register />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/leadership" element={<Leadership />} />
        <Route path="/repliesofcontactUs" element={<RepliesOfContactUs />} />
        <Route
          path="/replytofeedback/:id"
          element={<ReplyToFeedback data={replyList} />}
        />
        <Route path="/omegaclub" element={<OmegaClub />} />
        <Route path="/updateclub/:ID" element={<OmegaClub />} />
        <Route path="/viewleoclub/:ID" element={<ViewLeoClub />} />
        <Route path="/clublist" element={<ClubList />} />
        <Route path="/add" element={<AddClub />} />
        <Route path="/edit/:id" element={<EditClub />} />
        <Route path="/clubs/:id" element={<ViewLeoClub />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
