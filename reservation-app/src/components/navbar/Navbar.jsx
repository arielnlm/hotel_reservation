import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarth } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo"><FontAwesomeIcon icon={faEarth} /> PurelyPlanet</span>
        </Link>
        {user ? <span>Logged in as <b>{user.username}</b></span>: (
          <div className="navItems">
            <button className="navButton">Register</button>
            <button className="navButton">Login</button>
          </div>
        )}
      </div>
    </div>
    <div className="horizontalLine"></div>
    </div>
  );
};

export default Navbar;