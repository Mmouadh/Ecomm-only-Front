import React from "react";
import "./App.css";
import { Navbar } from "./Component/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Products from "./Pages/Products";
import Cart from "./Pages/Cart";
import LoginSingUp from "./Pages/LoginSingUp";
import Footer from "./Component/Footer/Footer";
import Men_banner from "./Component/Assest/banner_mens.png";
import Women_banner from "./Component/Assest/banner_women.png";
import Kids_banner from "./Component/Assest/banner_kids.png";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/Ecomm-only-Front">
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/men"
            element={<ShopCategory category="men" banner={Men_banner} />}
          />
          <Route
            path="/womens"
            element={<ShopCategory category="women" banner={Women_banner} />}
          />
          <Route
            path="/kids"
            element={<ShopCategory category="kid" banner={Kids_banner} />}
          />
          <Route path="/product" element={<Products />}>
            <Route path=":productId" element={<Products />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSingUp />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
