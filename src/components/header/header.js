import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

const Header = ({ onServiceChange }) => {
  return (
    <div className="header navbar">
      <div className="container" id="header__nav">
        <h2>
          <Link to="/" className="navbar-brand">
            StarDB
          </Link>
        </h2>
        <ul className="d-flex">
          <li className="nav-item">
            <Link to="/people" className="nav-link">
              People
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/planets" className="nav-link">
              Planets
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/starships" className="nav-link">
              Starships
            </Link>
          </li>
        </ul>
        <div className="btn btn-light mb-4" onClick={onServiceChange}>
          Change Menu
        </div>
      </div>
    </div>
  );
};

export default Header;
