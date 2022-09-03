type Option = {
  stockCount: number;
  name: string;
  price: number;
};

type Tag = "SALE" | "BEST" | "MD" | "SOLDOUT" | "판매대기";

type Product = {
  id: number;
  imageUrls: string[];
  name: string;
  tags: Tag[];
  dcPrice: number;
  originalPrice: number;
  description: string;
  likeCount: number;
  options: Option[];
  location: string;
  deliveryFee: number;
  freeShippingCondition: number;
  visible: boolean;
};

type SelectedProduct = {
  productId: Product["id"];
  selectedOption: Option;
  count: number;
};

export type { Option, Tag, Product, SelectedProduct };
