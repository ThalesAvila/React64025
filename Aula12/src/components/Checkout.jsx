import React, { useContext } from "react";
import CartContext from "../context/CartContext";

function Checkout() {
  const { cart } = useContext(CartContext);

  return (
    <>
      <h1>Checkout</h1>
      <ul>
        {cart.map((product) => (
          <li key={product.name}>{`${product.name} X ${
            product.quantity
          } - Total value: $${(product.price * product.quantity).toFixed(
            2
          )}`}</li>
        ))}
        Total $
        {cart
          .reduce((prevProductValue, currentProduct) => {
            return (
              prevProductValue + currentProduct.quantity * currentProduct.price
            );
          }, 0)
          .toFixed(2)}
      </ul>
    </>
  );
}

export { Checkout };
