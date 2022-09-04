import React from "react";
import styled from "styled-components";
import ProductItem from "./ProductItem";

const Products = () => {
  return (
    <>
      <ProductsCounterWrapper>
        FRUIITE STORE <ProductsCounts>{"갯수"}</ProductsCounts>
      </ProductsCounterWrapper>
      <ProductItem />
    </>
  );
};

export default Products;

const ProductsCounterWrapper = styled.div`
  width: 1260px;
  margin: 0 auto;
`;

const ProductsCounts = styled.span`
  color: #53a036;
`;
