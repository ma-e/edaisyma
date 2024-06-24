import React from 'react';
import './Menu.css';
import logo from './config/works/logo.png';
import { Navbar, Container } from 'react-bootstrap';

const Menu = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        {/* <a className="navbar-brand" href="/"> &#x1F60D; &#x1F496; &#x1F43C; &#x1F431;</a> */}
        <Navbar.Brand href="/" className="navbar-logo">
          <img src={logo} alt="Logo" className="logo-image" />
        </Navbar.Brand>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon">
            <i className="fas fa-bars"></i>
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/about">ABOUT</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/work">WORK</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/resume">RESUME</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  );
};

export default Menu;
