import React from "react";
import "./Navbar.css"; // Import the CSS file for styling
import ntu from './image.png'
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar-container">
      <div className="logo-website-container">
        <div className="logo-container">
          <img src={ntu} alt="Logo" className="nav-photo"/>
        </div>
        <div className="website-name">
          <h3>SugarPoints</h3>
        </div>
      </div>
      <ul>
        <li>
          <Link to="/diabetes">Home</Link>
        </li>
        <li>
          <Link to="/diabetes/data">Data</Link>
        </li>
        <li>
          <Link to="/diabetes/forum">Forum</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
