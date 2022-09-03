export const getData = async (id: number) => {
  const res = await import("../mockup-data/products.json");
  console.log(res.default[id]);
};

export const DeleteData = async (id: number) => {
  const res = await import(`../mockup-data/products.json/${id}`);
  console.log(res.default[id]);
};
