import React from "react";
import { Route, useNavigate } from "react-router-dom";
import LandingPage from "./LandingPage";
import Contact from "./Contact";
import Footer from "./Footer";

export default function App() {
  let navigate = useNavigate();
  return (
    <>
      <button
        onClick={() => {
          navigate("/contact");
        }}
      >
        Navigate programmatically
      </button>
      <Route index path="/" element={<Contact />} />
    </>
  );
}


{/* <Route path="/footer" element={<Footer />}
      />
      <Route path="/contact" element={<Contact />}
      />
      <Route path="*" element={<div> Not Found or You do not have permission.</div>} /> */}