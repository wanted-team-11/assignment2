import { useEffect } from "react";
import ProductItem from "../../../components/AdminProductItem";
import useRemoveProduct from "../../../hooks/useRemoveProduct";
import useToggleProduct from "../../../hooks/useToggleProduct";
import { Product } from "../../../types/types";
import * as S from "../../../components/styles/AdminProductList.styled";

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
    <S.Wrapper>
      <S.PaddingButton>
        <S.Button onClick={onAllBehind}>전체 숨김</S.Button>
        <S.Button onClick={showAllProduct}>전체 노출</S.Button>
        <S.Button onClick={onAllRemove}>전체 삭제</S.Button>
      </S.PaddingButton>
      <S.PaddingButton>
        <S.Button onClick={hideCheckedProduct}>선택된 항목 숨김</S.Button>
        <S.Button onClick={showCheckedProduct}>선택된 항목 노출</S.Button>
        <S.Button onClick={ChooseRemove}>선택된 항목 삭제</S.Button>
      </S.PaddingButton>
      <S.ProductListContainer>
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
      </S.ProductListContainer>
    </S.Wrapper>
  );
};

export default AdminProductListPage;
