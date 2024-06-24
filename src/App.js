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
import Store from "./Store";
import Tree from "./Tree";
import Classroom from "./Classroom";
import WorkPage from './WorkPage';
import Publications from './Publications';

function App() {
  return (
    <>
      {/* <Menu /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/ideas" element={<Ideas />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/tree" element={<Tree />} />
          <Route path="/classroom" element={<Classroom />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/store" element={<Store />} />
          <Route path="/blog/:id" element={<BlogPost />} />
        </Routes>
      </BrowserRouter>
      {/* <Footer /> */}
    </>
  );
}

export default App;
