import React from 'react';
import './Menu.css';
import logo from './config/works/cat.gif';
import { Navbar, Container } from 'react-bootstrap';

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
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/"> </a>
        <Navbar.Brand href="/" className="navbar-logo">
        <img src={logo} alt="Logo" className="logo-image" style={{ padding: "30px", width: '150px', height: 'auto' }} />
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
              <a className="nav-link" href="/classroom">PERSONAL PROJECTS</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/gallery">GALLERY</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  );
};

export default Menu;
