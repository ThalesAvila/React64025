import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore/lite";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

import ProductLink from "../ProductLink";
import { db } from "../Firebase";

const CategoryButton = ({ categoryName }) => (
  <Link to={`category/${categoryName}`}>
    <button className="border-blue-700 border-2 rounded-md p-1">
      {categoryName}
    </button>
  </Link>
);

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const { currentUser } = useAuth();

  useEffect(() => {
    setLoading(true);
    (async function () {
      const productsCol = collection(db, "products");
      const productsSnapshot = await getDocs(productsCol);

      const products = productsSnapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });

      setProducts(products);
      setLoading(false);
    })();
  }, []);

  return (
    <div>
      {loading && <h1>Carregando...</h1>}
      <h2>Produtos: </h2>
      {!loading &&
        products.map(({ id, name }) => (
          <ProductLink key={id} id={id} name={name} />
        ))}
    </div>
  );
}

export { Home };
