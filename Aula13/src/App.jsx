import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Cart, Home, Header, Checkout, ProductDetail } from "./components";

import { CartProvider } from "./context/CartContext";
import Category from "./components/Category";
import SignUp from "./components/SignUp";
import { AuthProvider } from "./context/AuthContext";
import SignIn from "./components/SignIn";
import Orders from "./components/Orders";
import Order from "./components/Order";

function App() {
  return (
    <>
      <AuthProvider>
        <CartProvider>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/category/:categoryId" element={<Category />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/orders/:orderId" element={<Order />} />
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </AuthProvider>
    </>
  );
}

export default App;