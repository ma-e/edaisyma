import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Pages
// import Home from './pages/Home/Home';
import Blog from './pages/Blog/Blog';
import Comment from './pages/Comment/Comment';
import Wishlist from './pages/Wishlist/Wishlist';
import MapPage from './pages/Map/Map';

// Components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import styles from './App.module.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className={styles.container}>
      <Header />
      <main className={styles.content}>
        <Routes>
          <Route path="/" element={<Navigate to="/map" replace />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/comment" element={<Comment />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="*" element={<Navigate to="/map" replace />} />
        </Routes>
      </main>
      <Footer />
      </div>
    </Router>
  );
};

export default App;
