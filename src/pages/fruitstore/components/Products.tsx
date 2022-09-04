import { useRecoilValue } from "recoil";
import ProductItem from "./ProductItem";
import * as S from "./styles/Products.styled";
import { productListAtom } from "../store/product.store";

const Products = () => {
  const products = useRecoilValue(productListAtom);

  return (
    <>
      <S.ProductsCounterWrapper>
        FRUIITE STORE <S.ProductsCounts>{products.length}</S.ProductsCounts>
      </S.ProductsCounterWrapper>
      <ProductItem />
    </>
  );
};

export default Products;
