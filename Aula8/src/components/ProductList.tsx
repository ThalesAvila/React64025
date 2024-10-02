import Product from "./Product";
import { ProductListItem } from "./ProductTypes";

type ProductListProps = {
  products: ProductListItem[] | undefined;
};

const ProductList = ({ products }: ProductListProps) => {
  return (
    <ul>
      {products?.map((productItem) => (
        <Product productItem={productItem} />
      ))}
    </ul>
  );
};

export default ProductList;
