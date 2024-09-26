import { useState, useEffect } from "react";
import "./App.css";
import ChatRoom from "./ChatRoom";

function App() {
  const [meuState, setMeuState] = useState(1);
  const [products, setProducts] = useState([]);
  const [dispareNovamente, setDispareNovamente] = useState(0);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
      <button onClick={() => setDispareNovamente(dispareNovamente + 1)}>
        Busque os produtos denovo
      </button>
      {products.map((product) => (
        <Product key={product.title} product={product} />
      ))}
      {products.map((product, index) => (
        <Product key={product.title} product={product} />
      ))}
    </>
  );
}

const Product = ({ product }) => {
  return (
    <>
      <h2>{product.title}</h2>
      <h3>{product.category}</h3>
    </>
  );
};

export default App;
