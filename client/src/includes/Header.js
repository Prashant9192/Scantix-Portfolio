// src/includes/Header.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/Header.css";
import scantixLogo from "../assets/images/scantixLogo4x4.webp";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const toggleTheme = () => {
    setIsDarkTheme((prev) => !prev);
    document.body.classList.toggle("dark-theme", !isDarkTheme);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img
              src={scantixLogo}
              alt="Scantix Logo"
              className="logo-img"
            />
            Scantix
          </Link>
        </div>

        <nav className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          <Link to="/">Home</Link>
          <Link to="/team">Team</Link>
          <Link to="/contact">Contact us</Link>
          <Link to="/about">About us</Link>
        </nav>

        {/* Theme Toggle Button with Icons */}
        <button className="theme-toggle" onClick={toggleTheme}>
          <i className={`fas ${isDarkTheme ? "fa-sun" : "fa-moon"}`}></i>
        </button>

        <div className="menu-icon" onClick={toggleMenu}>
          <i className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"}`}></i>
        </div>
      </div>
    </header>
  );
};

export default Header;
