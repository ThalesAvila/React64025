import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CartContext from "./CartContext";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const { cart, setCart } = useContext(CartContext);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      fetch(`https://fakestoreapi.com/products/${id}`)
        .then((response) => response.json())
        .then((data) => {
          setProduct(data);
          setLoading(false);
        });
    }, 500);
  }, []);

  const handleChangeQuantity = (e) => {
    const newQuantity = Number(e.target.value);

    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  const handleAddItem = () => {
    setCart([...cart, { ...product, quantity }]);
  };

  return (
    <>
      {loading && <div>Carregando...</div>}
      {!loading && (
        <div>
          <h1>{product.title}</h1>
          <h2>${product.price?.toFixed(2)}</h2>
          <img src={product.image} />
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
