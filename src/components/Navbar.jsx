import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="nav">
      <NavLink to="/" className="nav__link">
        Home
      </NavLink>
      <NavLink to="/search" className="nav__link">
        Learn
      </NavLink>
      <NavLink to="/events" className="nav__link">
        Playbook
      </NavLink>
      <NavLink to="/profile" className="nav__link">
        Profile
      </NavLink>
      <NavLink to="/community-plays">
        Community Plays
     </NavLink>
     <NavLink to="/upload-play">
        Upload Play
     </NavLink>
          </nav>
  );
}

export default Navbar;