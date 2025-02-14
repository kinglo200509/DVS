import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Login from "./components/Login/Login";
import Votepage from "./components/Homepage/VoterPage";
import VoterLogin from "./components/Login/Voterlogin";
import CandidateLogin from "./components/Login/CandidateLogin";
import DetailedPage from "./candidatePage/DetailsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/VoterLogin" element={<VoterLogin />} />
        <Route path="/CandidateLogin" element={<CandidateLogin />} />
        <Route path="/Votepage" element={<Votepage/>}/>
        <Route path="/DetailedPage" element={<DetailedPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
