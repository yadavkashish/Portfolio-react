import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'; // Import the CSS file

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <NavLink to="/" className="logo">
        <span>Kashish Yadav</span>
      </NavLink>
      <nav className={`navbar ${isOpen ? 'open' : ''}`}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
          end
        >
          Home
        </NavLink>
        <NavLink
          to="/education"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Education
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Projects
        </NavLink>
        <NavLink
          to="/skills"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Skills
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Contact
        </NavLink>
      </nav>
      <div id="menu-icon" onClick={toggleMenu}>
        &#9776;
      </div>
    </header>
  );
}

export default Header;
