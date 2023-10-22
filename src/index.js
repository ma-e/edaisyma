import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import App from "./App";
import { createBrowserHistory } from "history";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from './LandingPage';
import Contact from "./Contact";
import Footer from "./Footer";

const rootElement = document.getElementById("root");
const customHistory = createBrowserHistory();

ReactDOM.createRoot(rootElement).render(
  <Router>
    <Routes>
      <Route index path="/" element={<LandingPage />} />
      <Route index path="/contact" element={<Contact />} />
      <Route index path="/footer" element={<Footer />} />
    </Routes>
  </Router>

);