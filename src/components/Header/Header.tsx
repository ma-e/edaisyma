import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAdmin } from '../../context/AdminContext';
import styles from './Header.module.css';

const Header: React.FC = () => {
  const { isAdmin, login, logout } = useAdmin();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (login(password)) {
      setPassword('');
      setError('');
      setPasswordVisible(false);
    } else {
      setError('Wrong password');
    }
  };

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
        MA{' '}
        <img
          src="https://us.brandymelville.com/cdn/shop/files/favicon_c82e471c-ee71-4484-a198-8fad868b55b9_32x32.png?v=1636644993"
          alt="Brand Logo"
          width={32}
          height={32}
        />{' '}
        E
      </h1>

      <nav className={styles.nav}>
        <Link to="/blog">BLOG</Link>
        <Link to="/comment">COMMENT</Link>
        <Link to="/wishlist">WISHLIST</Link>

        {/* Admin Login/Logout */}
        {isAdmin ? (
          <button className={styles.adminButton} onClick={logout}>
            LOGOUT
          </button>
        ) : (
          <>
            {passwordVisible ? (
              <form onSubmit={handleLogin} className={styles.loginForm}>
                <input
                  type="password"
                  placeholder="Admin password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={styles.loginInput}
                />
                <button type="submit" className={styles.adminButton}>
                  LOGIN
                </button>
                {error && <span className={styles.error}>{error}</span>}
              </form>
            ) : (
              <button
                className={styles.adminButton}
                onClick={() => setPasswordVisible(true)}
              >
                LOGIN
              </button>
            )}
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
