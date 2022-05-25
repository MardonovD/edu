import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="btn-icon">
        <i className="book icon" />
        <h2>EDUCATION </h2>
      </div>
      <nav>
        <ul className="link-ul">
          <li className="link-item">
            <Link to="/" className="home">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/courses">Courses</Link>
            <Link to="/teachers">Teachers</Link>
            <Link to="/programs">Programs</Link>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
