// Menu.js
import React, { useState } from 'react';
import './Menu.css';
import { Link } from 'react-router-dom';
import { useAuth } from './AuthContext';

const Menu = () => {
  const { isLoggedIn, login, logout } = useAuth();
  const [showPrompt, setShowPrompt] = useState(false);
  const [passphrase, setPassphrase] = useState('');

  const handleLoginClick = () => {
    setShowPrompt(true);
  };

  const handleConfirm = (e) => {
    e.preventDefault();
    const ok = login(passphrase);
    if (!ok) {
      alert('Incorrect passphrase');
      return;
    }
    setPassphrase('');
    setShowPrompt(false);
  };

  const handleLogoutClick = () => {
    logout();
  };

  return (
    <nav className="main-navbar">
      <div className="navbar-brand">
        MA<span className="heart">♥</span>E
      </div>

      <ul className="nav-links">
        <li><Link to="/about">ABOUT</Link></li>
        <li><Link to="/blog">BLOG</Link></li>
        <li><Link to="/gallery">GALLERY</Link></li>
        <li>
          {isLoggedIn ? (
            <button onClick={handleLogoutClick} className="login-btn">Logout</button>
          ) : (
            <button onClick={handleLoginClick} className="login-btn">Login</button>
          )}
        </li>
      </ul>

      {showPrompt && !isLoggedIn && (
        <form onSubmit={handleConfirm} className="login-modal">
          <input
            type="password"
            placeholder="Passphrase"
            value={passphrase}
            onChange={(e) => setPassphrase(e.target.value)}
          />
          <button type="submit">Enter</button>
          <button type="button" onClick={() => setShowPrompt(false)}>Cancel</button>
        </form>
      )}
    </nav>
  );
};

export default Menu;
