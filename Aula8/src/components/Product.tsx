import { ProductListItem } from "./ProductTypes";

type ProductProps = {
  productItem: ProductListItem;
};

const Product = ({ productItem }: ProductProps) => {
  const hasSize = productItem?.unit?.size;
  
  return (
    <li className="flex gap-8 text-neutral-900">
      <img
        className="w-[280px] h-[200px] object-cover rounded-md"
        src={productItem?.unit?.image_url}
      />
      <div>
        <span className="block font-medium text-2xl text-neutral-900">
          {productItem?.product?.name}
        </span>
        <span className="block font-medium text-base text-neutral-600 capitalize">
          {productItem?.unit?.color}
          {hasSize && <> &#x25CF; </>}
          {hasSize && `${productItem?.unit?.size}`}
        </span>
      </div>
    </li>
  );
};

export default Product;
