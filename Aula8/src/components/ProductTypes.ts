export type Product = {
  product_id: string;
  name: string;
  description: string;
};

export type Unit = {
  sku: string;
  list_price: number;
  sale_price: number;
  size: string;
  color: string;
  stock: number;
  image_url: string;
};

export type ProductListItem = {
  product: Product;
  unit: Unit;
  total_list_price: number;
  total_sale_price: number;
  quantity: number;
  created_at: string;
};
