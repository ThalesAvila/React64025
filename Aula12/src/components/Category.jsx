import React, { useEffect, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore/lite";
import { useParams } from "react-router-dom";

import { db } from "../Firebase";
import ProductLink from "../ProductLink";

export default function Category() {
  const { categoryId } = useParams();
  const [productsCategory, setProductsCategory] = useState([]);
  const [loading, setLoading] = useState();

  useEffect(() => {
    setLoading(true);
    (async function () {
      const productsCol = collection(db, "products");

      const q = query(productsCol, where("category", "==", categoryId));

      const productsSnapshot = await getDocs(q);

      const products = productsSnapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });

      setProductsCategory(products);
      setLoading(false);
    })();
  }, [categoryId]);

  return (
    <div>
      {loading && <h1>Carregando...</h1>}
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {!loading &&
            productsCategory.map((product) => (
              <ProductLink key={product.id} {...product} />
            ))}
        </div>
      </div>
    </div>
  );
}
