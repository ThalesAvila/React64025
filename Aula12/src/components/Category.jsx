import React, { useEffect, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore/lite";
import { useParams } from "react-router-dom";

import db from "../Firebase";
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
  }, []);

  return (
    <div>
      {loading && <h1>Carregando...</h1>}
      {!loading &&
        productsCategory.map(({ id, name }) => (
          <ProductLink key={id} id={id} name={name} />
        ))}
    </div>
  );
}
