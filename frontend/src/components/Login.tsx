import React, { useState } from 'react';
import { useAdmin } from '../context/AdminContext';

const Login: React.FC = () => {
  const { isAdmin, login, logout } = useAdmin();
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (login(password)) {
      setError('');
      setPassword('');
    } else {
      setError('Wrong password');
    }
  };

  return (
    <div>
      {isAdmin ? (
        <button onClick={logout}>Logout Admin</button>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            placeholder="Admin password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
      )}
    </div>
  );
};

export default Login;
