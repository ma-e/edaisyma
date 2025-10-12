import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './Menu';
import Ideas from "./Ideas";
import LandingPage from './LandingPage';
import Layout from './Layout';
import AboutMe from './AboutMe';
import './styles.css';
import BlogList from './BlogList';
import BlogDetail from './BlogDetail';
import Contact from "./Contact";
import Wishlist from "./Wishlist";
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

          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:id" element={<BlogDetail />} />

          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/tree" element={<Tree />} />
          <Route path="/classroom" element={<Classroom />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/store" element={<Store />} />
        </Routes>
      </BrowserRouter>
      {/* <Footer /> */}
    </>
  );
}

export default App;
