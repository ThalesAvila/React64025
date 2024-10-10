import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Cart, Home, Header, Checkout, ProductDetail } from "./components";

import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <>
      <CartProvider>
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
      </CartProvider>
    </>
  );
}

export default App;
