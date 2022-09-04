import { useEffect } from "react";
import { useRecoilState } from "recoil";
import InfoArea from "./components/InfoArea";
import Products from "./components/Products";
import { productListAtom } from "./store/product.store";

const FruitStorePage = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [products, setProducts] = useRecoilState(productListAtom);

  useEffect(() => {
    try {
      fetch("/mockup-data/limit=10&offset=0.json")
        .then((res) => res.json())
        .then((data) => {
          setProducts(data);
        });
    } catch (e) {
      console.error(e);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <InfoArea />
      <Products />
    </>
  );
};

export default FruitStorePage;
