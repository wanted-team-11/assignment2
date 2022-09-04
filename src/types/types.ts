export type Option = {
  stockCount: number;
  name: string;
  price: number;
};

export type Tag = "SALE" | "BEST" | "MD" | "SOLDOUT" | "판매대기";

export type Product = {
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
