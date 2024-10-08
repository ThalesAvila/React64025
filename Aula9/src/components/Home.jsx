import React, { useEffect, useState } from "react";
import ProductLink from "../ProductLink";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      fetch("https://fakestoreapi.com/products?limit=10")
        .then((response) => response.json())
        .then((data) => {
          setProducts(data);
          setLoading(false);
        });
    }, 500);
  }, []);

  return (
    <div>
      {loading && <h1>Carregando...</h1>}
      {!loading &&
        products.map(({ id, title }) => <ProductLink id={id} title={title} />)}
    </div>
  );
}
