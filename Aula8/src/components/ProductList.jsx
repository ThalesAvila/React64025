import Product from "./Product";

const ProductList = ({ products }) => {
  return (
    <ul>
      {products?.map((productItem) => (
        <Product
          key={productItem?.product?.product_id}
          productItem={productItem}
        />
      ))}
    </ul>
  );
};

export default ProductList;
