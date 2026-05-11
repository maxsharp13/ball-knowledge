import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Search from "./pages/Search";
import Events from "./pages/Events";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ConceptDetails from "./pages/ConceptDetails";
import CreatePlay from "./pages/CreatePlay";
import CommunityPlays from "./pages/CommunityPlays";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/search" element={<Search />} />

        <Route path="/events" element={<Events />} />

        <Route path="/profile" element={<Profile />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/upload-play" element={<CreatePlay />} />

        <Route path="/community-plays" element={<CommunityPlays />} />

        <Route path="/concept/:id" element={<ConceptDetails />} />
      </Routes>
    </Router>
  );
}

export default App;