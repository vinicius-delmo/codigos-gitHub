
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/home";
import Products from "./pages/products";

import Contact from "./pages/contacts";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import MoreProductDetails from "./components/MoreProductDetails/MoreProductDetails";

import Emptystate from "./pages/emptystate";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="App" style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacts" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/empty" element={<Emptystate />} />
          <Route path="/product/:id" Component={MoreProductDetails} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
