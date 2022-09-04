import { useEffect } from "react";
import styled from "styled-components";
import ProductItem from "./ProductItem";
import useRemoveProduct from "./hooks/useRemoveProduct";
import useToggleProduct from "./hooks/useToggleProduct";
import { Product } from "./types/types";

const AdminProductListPage = () => {
  const {
    productList,
    checkList,
    setCheckList,
    onRemove,
    ChooseRemove,
    onAllRemove,
  } = useRemoveProduct();

  const {
    toggleProduct,
    hideCheckedProduct,
    showCheckedProduct,
    onAllBehind,
    showAllProduct,
  } = useToggleProduct();

  useEffect(() => {
    window.localStorage.setItem("product", JSON.stringify(productList));
  }, [productList]);

  return (
    <Wrapper>
      <PaddingButton>
        <Button onClick={onAllBehind}>전체 숨김</Button>
        <Button onClick={showAllProduct}>전체 노출</Button>
        <Button onClick={onAllRemove}>전체 삭제</Button>
      </PaddingButton>
      <PaddingButton>
        <Button onClick={hideCheckedProduct}>선택된 항목 숨김</Button>
        <Button onClick={showCheckedProduct}>선택된 항목 노출</Button>
        <Button onClick={ChooseRemove}>선택된 항목 삭제</Button>
      </PaddingButton>
      <ProductListContainer>
        {productList?.map((product: Product) => {
          return (
            <ProductItem
              key={product.id}
              product={product}
              onRemove={onRemove}
              toggleProduct={toggleProduct}
              checkList={checkList}
              setCheckList={setCheckList}
            />
          );
        })}
      </ProductListContainer>
    </Wrapper>
  );
};

export default AdminProductListPage;

const Wrapper = styled.div`
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
`;

const PaddingButton = styled.div`
  display: flex;
  padding: 15px 0px 5px 27px;
  gap: 10px;
`;

const ProductListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 4px;
  width: fit-content;
  height: 50px;
  border: 1px solid gray;
  border-radius: 4px;
  cursor: pointer;
  background-color: white;
`;
