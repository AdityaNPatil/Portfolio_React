import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  // State to Handle clicking of hamburger in mobile view
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <div className="logo">
        <h1>My Portfolio</h1>
      </div>
      <nav className={isOpen ? 'nav-open' : ''}>
        <ul>
          {/* Apply Link to each path */}
          <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
          <li><Link to="/projects" onClick={toggleMenu}>Projects</Link></li>
          <li><Link to="/experience" onClick={toggleMenu}>Experience</Link></li>
          <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
        </ul>
      </nav>

      {/* Hamburger menu viible only in mobile menu */}
      <div className="hamburger" onClick={toggleMenu}>
        {/* if hamburger clicked give classname baropen else give classname bar */}
        <div className={isOpen ? 'bar open' : 'bar'}></div>
        <div className={isOpen ? 'bar open' : 'bar'}></div>
        <div className={isOpen ? 'bar open' : 'bar'}></div>
      </div>

    </header>
  );
}

export default Header;
