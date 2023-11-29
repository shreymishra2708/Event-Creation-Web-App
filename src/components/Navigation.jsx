import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <nav className="nav-container">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/events" className="nav-link">
            Events
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
