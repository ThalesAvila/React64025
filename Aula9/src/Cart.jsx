import React, { useContext } from "react";
import CartContext from "./components/CartContext";

export default function Cart() {
  const { cart } = useContext(CartContext);
  return (
    <>
      <h1>Cart</h1>
      <ul>
        {cart.map((product) => (
          <li>{`${product.title} X ${product.quantity}`}</li>
        ))}
      </ul>
    </>
  );
}
