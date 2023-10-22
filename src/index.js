import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // You might have a separate CSS file to style your app.
import App from './App'; // Import your main App component or the entry point of your application.

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);