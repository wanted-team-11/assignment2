import { useCallback } from "react";
import { useRecoilState } from "recoil";
import ProductItem from "./ProductItem";
import * as S from "./styles/Products.styled";
import { productListAtom } from "../store/product.store";
import PageButton from "./PageButton";

const Products = () => {
  const [products, setProducts] = useRecoilState(productListAtom);

  const getNextData = useCallback(async (buttonIndex: number) => {
    const limit = 10;
    const offset = buttonIndex * limit;
    const queryString = `limit=${limit}&offset=${offset}`;

    await fetch(`/mockup-data/${queryString}.json`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <S.ProductsCounterWrapper>
        FRUIITE STORE <S.ProductsCounts>{products.length}</S.ProductsCounts>
      </S.ProductsCounterWrapper>
      <ProductItem />
      <PageButton getNextData={getNextData} />
    </>
  );
};

export default Products;
