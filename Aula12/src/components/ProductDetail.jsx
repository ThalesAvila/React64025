import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CartContext from "../context/CartContext";
import { doc, getDoc } from "firebase/firestore/lite";
import { db } from "../Firebase";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const { cart, dispatch } = useContext(CartContext);

  useEffect(() => {
    setLoading(true);
    (async function () {
      const docRef = doc(db, "products", id);

      const productSnapshot = await getDoc(docRef);

      const product = productSnapshot.data();

      setProduct({ id: productSnapshot.id, ...product });
      setLoading(false);
    })();
  }, []);

  const handleChangeQuantity = (e) => {
    const newQuantity = Number(e.target.value);

    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  const handleAddItem = () => {
    dispatch({
      type: "addItem",
      item: { ...product, quantity },
    });
  };

  return (
    <>
      {loading && <div>Carregando...</div>}
      {!loading && (
        <div>
          <h1>{product.name}</h1>
          <h2>${product.price?.toFixed(2)}</h2>
          <img className="w-40" src={product.image} />
          <input
            value={quantity}
            type="number"
            onChange={handleChangeQuantity}
          />
          <button onClick={handleAddItem}>Adicionar ao carrinho</button>
        </div>
      )}
    </>
  );
}

export { ProductDetail };
