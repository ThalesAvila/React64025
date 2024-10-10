import React, { useEffect, useState } from "react";
import ProductLink from "../ProductLink";

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://fakestoreapi.com/products?limit=10")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading && <h1>Carregando...</h1>}
      {!loading &&
        products.map(({ id, title }) => (
          <ProductLink key={title} id={id} title={title} />
        ))}
    </div>
  );
}

export { Home };
