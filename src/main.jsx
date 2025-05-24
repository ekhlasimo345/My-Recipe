import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Categories from "../src/pages/Categories.jsx";
import Layout from "./layout/Layout.jsx";
import Home from "./pages/Home.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/Categories" element={<Categories />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);