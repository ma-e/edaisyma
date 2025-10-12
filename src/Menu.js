// Menu.js
import React from 'react';
import './Menu.css';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <nav className="main-navbar">
      <div className="navbar-brand">
        MA<span className="heart">♥</span>E
      </div>

      <ul className="nav-links">
        <li><Link to="/about">ABOUT</Link></li>
        <li><Link to="/blog">BLOG</Link></li>
        <li><Link to="/gallery">GALLERY</Link></li>
      </ul>
    </nav>
  );
};

export default Menu;
