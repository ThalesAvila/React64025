import { useContext } from "react";
import CartContext from "../context/CartContext";
import { CartItem } from "./CartItem";

function Cart() {
  const { cart } = useContext(CartContext);

  return (
    <>
      <h1>Cart</h1>
      <ul>
        {cart?.length === 0 && "Seu carrinho está vazio!"}
        {cart?.map(({ id, title, quantity }) => (
          <CartItem key={title} id={id} title={title} quantity={quantity} />
        ))}
      </ul>
    </>
  );
}

export { Cart };
