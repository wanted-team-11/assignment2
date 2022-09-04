import ProductItem from "./ProductItem";
import * as S from "./styles/Products.styled";

const Products = () => {
  return (
    <>
      <S.ProductsCounterWrapper>
        FRUIITE STORE <S.ProductsCounts>{"갯수"}</S.ProductsCounts>
      </S.ProductsCounterWrapper>
      <ProductItem />
    </>
  );
};

export default Products;
