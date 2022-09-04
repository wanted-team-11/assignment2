import { useState, useCallback } from "react";
import { useRecoilValue } from "recoil";
import ProductItem from "./ProductItem";
import * as S from "./styles/Products.styled";
import { productListAtom } from "../store/product.store";
import PageButton from "./PageButton";
import { Product } from "../../order/types";

const Products = () => {
  const products = useRecoilValue(productListAtom);
  const [pageData, setPageData] = useState<Product[]>([]);

  const getNextData = useCallback(async (buttonIndex: number) => {
    const limit = 10;
    const offset = buttonIndex * limit;
    const queryString = `limit=${limit}&offset=${offset}`;

    await fetch(`/mockup-data/${queryString}.json`)
      .then((res) => res.json())
      .then((data) => {
        setPageData(data);
      });
  }, []);

  return (
    <>
      <S.ProductsCounterWrapper>
        FRUIITE STORE <S.ProductsCounts>{products.length}</S.ProductsCounts>
      </S.ProductsCounterWrapper>
      <ProductItem pageData={pageData} />
      <PageButton getNextData={getNextData} />
    </>
  );
};

export default Products;
