import React, { createContext, useContext, useMemo, useState } from 'react';

const LOCAL_STORAGE_AUTH_KEY = 'mae_auth_is_logged_in_v1';
const DEFAULT_PASSPHRASE = 'mae-author';

const AuthContext = createContext({
  isLoggedIn: false,
  login: (_passphrase) => false,
  logout: () => {},
});

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    try {
      return localStorage.getItem(LOCAL_STORAGE_AUTH_KEY) === 'true';
    } catch {
      return false;
    }
  });

  const authorPassphrase =
    (typeof process !== 'undefined' && process.env && process.env.REACT_APP_AUTHOR_PASSPHRASE) ||
    DEFAULT_PASSPHRASE;

  const login = (passphrase) => {
    const isValid = (passphrase || '').trim() === String(authorPassphrase);
    if (isValid) {
      try {
        localStorage.setItem(LOCAL_STORAGE_AUTH_KEY, 'true');
      } catch {}
      setIsLoggedIn(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    try {
      localStorage.removeItem(LOCAL_STORAGE_AUTH_KEY);
    } catch {}
    setIsLoggedIn(false);
  };

  const value = useMemo(() => ({ isLoggedIn, login, logout }), [isLoggedIn]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
