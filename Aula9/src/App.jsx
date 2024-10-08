import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Header from "./components/Header";
import ProductDetail from "./components/ProductDetail";
import CartContext from "./components/CartContext";
import Cart from "./Cart";
import Checkout from "./Checkout";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <>
      <CartContext.Provider
        value={{
          cart,
          setCart,
        }}
      >
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/product/:id" element={<ProductDetail />} />
          </Routes>
          <hr />
          <footer>Footer</footer>
        </BrowserRouter>
      </CartContext.Provider>
    </>
  );
}

export default App;
