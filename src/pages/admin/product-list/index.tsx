import ProductItem from "../../../components/AdminProductItem";
import useRemoveProduct from "../../../hooks/useRemoveProduct";
import useToggleProduct from "../../../hooks/useToggleProduct";
import { Product } from "../../../types/types";
import styled from "styled-components";

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

  return (
    <Wrapper>
      <Header>상품 목록 관리 페이지</Header>
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

const Header = styled.h1`
  display: flex;
  justify-content: center;
`;

const PaddingButton = styled.div`
  display: flex;
  padding: 15px 0px 5px 27px;
  margin: 0 22.5vw;
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
