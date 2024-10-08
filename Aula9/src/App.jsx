import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import {
  Cart,
  Home,
  Header,
  Checkout,
  ProductDetail,
  CartContext,
} from "./components";

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
