import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Categories from "../src/pages/Categories.jsx";
import Layout from "./layout/Layout.jsx";
import Home from "./pages/Home.jsx";
import Details from "./pages/Details.jsx";
import SearchResult from "./pages/SearchResult.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}  path="My-Recipe" >
          <Route index element={<Home />}  />
          <Route path="Categories" element={<Categories />} />
          <Route path="Details/:idMeal" element={<Details />} />
          <Route path="SearchResult/:searchWord" element={<SearchResult/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);