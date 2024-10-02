import ItemCounter from "./ItemCounter";

const Product = ({ productItem }) => {
  const hasSize = productItem?.unit?.size;

  return (
    <li className="flex gap-8 text-neutral-900">
      <img
        className="min-w-[160px] w-[280px] h-[200px] object-cover rounded-md"
        src={productItem?.unit?.image_url}
      />
      <div>
        <span className="block font-medium text-2xl text-neutral-900 pb-4">
          {productItem?.product?.name}
        </span>
        <span className="block font-medium text-base text-neutral-600 capitalize pb-4">
          {productItem?.unit?.color}
          {hasSize && <> &#x25CF; </>}
          {hasSize && `${productItem?.unit?.size}`}
        </span>
        <p className="font-normal text-sm text-neutral-600 pb-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem unde
          architecto reiciendis itaque voluptatem veritatis minima quod vitae
          dicta saepe.
        </p>
        <div>
          <ItemCounter />
        </div>
      </div>
    </li>
  );
};

export default Product;
