import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/home";
import Products from "./pages/products";
import Categories from "./pages/categories";
import Contact from "./pages/contacts";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Product from "./pages/product";
import MoreProductDetails from "./components/MoreProductDetails/MoreProductDetails";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/contacts" element={<Contact />} />
          <Route path="/products/:id" element={<MoreProductDetails />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
