import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Pages
// import Home from './pages/Home/Home';
import Blog from './pages/Blog/Blog';
import Comment from './pages/Comment/Comment';
import Wishlist from './pages/Wishlist/Wishlist';

// Components
import Header from './components/Header/Header';
// import Footer from './components/Footer/Footer';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/comment" element={<Comment />} />
          <Route path="/wishlist" element={<Wishlist />} />
          {/* Redirect unknown routes to Home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      {/* <Footer /> */}
    </Router>
  );
};

export default App;
