import type { Product } from "./types";

const API_URI = "http://localhost:3000/";

export const fetchProductDetail = async (id: number) => {
  const [products, error] = await getFetch(
    `${API_URI}/mockup-data/products.json`
  );
  if (error) {
    // TODO: handle error
  }
  return products.filter((product: Product) => product.id === id)[0];
};

const getFetch = async (uri: string) => {
  try {
    const response = await fetch(uri);
    if (!response.ok) throw response;
    const data = await response.json();
    return [data, null];
  } catch (error) {
    console.error(error);
    return [null, error];
  }
};
