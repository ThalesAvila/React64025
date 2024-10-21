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
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {!loading &&
            products.map((product) => (
              <ProductLink key={product?.id} {...product} />
            ))}
        </div>
      </div>
    </div>
  );
}

export { Home };
