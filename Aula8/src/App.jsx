import { useEffect, useState } from "react";
import "./App.css";
import Heading from "./components/Heading";
import Card from "./components/Card";
import EmptyState from "./components/EmptyState";
import ProductList from "./components/ProductList";

function App() {
  const [cart, setCart] = useState();

  useEffect(() => {
    fetch("src/data/sample-cart.json")
      .then((value) => value.json())
      .then((data) => setCart(data));
  }, []);

  return (
    <Card>
      <Heading title="Shopping Cart" />
      <ProductList products={cart?.items} />
      {!cart && <EmptyState />}
    </Card>
  );
}

export default App;
