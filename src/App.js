// Import the necessary components
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './Menu';
import Ideas from "./Ideas";
import LandingPage from './LandingPage';
import Layout from './Layout';
import AboutMe from './AboutMe';
import './styles.css';
import BlogPage from './BlogPage';
import BlogPost from './BlogPost';
import Contact from "./Contact";
import Gallery from "./Gallery";

function App() {
  return (
    <>
      <Menu />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/ideas" element={<Ideas />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/blog/:id" element={<BlogPost />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
