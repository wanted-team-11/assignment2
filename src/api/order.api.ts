import type { Product } from "../types/orderTypes";

export const fetchProductDetail = async (id: number) => {
  const [products, error] = await getFetch(
    `/mockup-data/limit=10&offset=${Math.floor((id - 1) / 10) * 10}.json`
  );
  if (error) {
    // TODO: handle error
  }
  console.log(id);
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
