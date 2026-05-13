import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { getPlays } from "./utils/api";

import Home from "./pages/Home";
import Search from "./pages/Search";
import Events from "./pages/Events";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ConceptDetails from "./pages/ConceptDetails";
import CreatePlay from "./pages/CreatePlay";
import CommunityPlays from "./pages/CommunityPlays";
import ProtectedRoute from "./components/ProtectedRoute";
import Navbar from "./components/Navbar";

function App() {
  const [plays, setPlays] = useState([]);
  const [playsError, setPlaysError] = useState(null);

  useEffect(() => {
    getPlays()
      .then((data) => setPlays(data))
      .catch(() => setPlaysError("Could not load community plays."));
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/events" element={<Events />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/upload-play" element={<ProtectedRoute><CreatePlay /></ProtectedRoute>} />
        <Route path="/community-plays" element={<CommunityPlays plays={plays} playsError={playsError} />} />
        <Route path="/concept/:id" element={<ConceptDetails />} />
      </Routes>
    </Router>
  );
}

export default App;