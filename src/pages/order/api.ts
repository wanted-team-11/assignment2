export const getData = async (id: number) => {
  const res = await import("../../mockup-data/products.json");
  return res.default.filter((item) => item.id === id)[0];
};
