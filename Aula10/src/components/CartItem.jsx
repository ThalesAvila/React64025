import { useContext, useState } from "react";
import CartContext from "../context/CartContext";

function CartItem({ id, title, quantity }) {
  const [isEditing, setEditing] = useState(false);
  const { cart, dispatch } = useContext(CartContext);

  const handleRemoveItem = (productId) => {
    dispatch({
      type: "removeItem",
      productId,
    });
  };

  const handleChangeQuantity = (e) => {
    const newQuantity = Number(e.target.value);

    dispatch({
      type: "changeItemQuantity",
      product: {
        id,
        newQuantity,
      },
    });
  };

  return (
    <li>
      {`${title}`}
      {!isEditing && ` X ${quantity}`}
      {isEditing && (
        <input onChange={handleChangeQuantity} value={quantity} type="number" />
      )}
      <button
        className="border-red-500 border-2 rounded-md p-1"
        onClick={() => {
          handleRemoveItem(id);
        }}
      >
        Remover
      </button>
      <button
        className="border-blue-700 border-2 rounded-md p-1"
        onClick={() => {
          setEditing(!isEditing);
        }}
      >
        {!isEditing ? "Editar" : "Confirmar"}
      </button>
    </li>
  );
}

export { CartItem };
