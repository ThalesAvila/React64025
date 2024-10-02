import { useEffect, useState } from "react";
import "./App.css";
import Heading from "./components/Heading";
import Card from "./components/Card";
import EmptyState from "./components/EmptyState";
import ProductList from "./components/ProductList";
import { ProductListItem } from "./components/ProductTypes";

type Summary = {
  discount: number;
  discount_code: string | null;
  shipping: number;
  subtotal: number;
  total: number;
};

type Cart = {
  cart_id: string;
  items: ProductListItem[];
  summary: Summary;
};

function App() {
  const [cart, setCart] = useState<Cart | undefined>();

  useEffect(() => {
    fetch(
      "https://www.greatfrontend.com/api/projects/challenges/e-commerce/cart-sample"
    )
      .then((value) => value.json())
      .then((data) => setCart(data));
  }, []);

  return (
    <Card>
      <Heading title="Shopping Cart" />
      <ProductList products={cart?.items} />
      <EmptyState />
    </Card>
  );
}

export default App;
