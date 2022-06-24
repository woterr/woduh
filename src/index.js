import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Home";
import Posts from "./Posts";
import Contact from "./Contact";
import Design from "./Design";
import NoPage from "./NoPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
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
  </React.StrictMode>
);
