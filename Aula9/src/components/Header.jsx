import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <h1>Essa é a minha loja</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li>
            <Link to="/checkout">Checkout</Link>
          </li>
        </ul>
      </nav>
      <hr />
    </>
  );
}
