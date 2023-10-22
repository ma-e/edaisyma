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
import Footer from './Footer';

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
          <Route path="/blog/:id" element={<BlogPost />} />
        </Routes>
      </BrowserRouter>
      {/* <Footer /> */}
    </>
  );
}

export default App;
