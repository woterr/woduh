import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Home";
import Posts from "./Posts";
import Contact from "./Contact";
import Design from "./Design";
import NoPage from "./NoPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles.css";
import Navbar from "./nav";
import Footer from "./footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Navbar />
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="posts" element={<Posts />} />
          <Route path="contact" element={<Contact />} />
          <Route path="design" element={<Design />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    <Footer />
  </React.StrictMode>
);
