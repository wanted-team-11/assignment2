export const getData = async (id: number) => {
  const res = await import("../mockup-data/products.json");
  console.log(res.default[id]);
};
