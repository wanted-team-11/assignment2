import styled from "styled-components";
import type { SelectedProduct } from "../types";

const OrderProductContainer = ({
  selectedProducts,
  thumbnail,
  prdName,
}: {
  selectedProducts: SelectedProduct[];
  thumbnail: string | undefined;
  prdName: string | undefined;
}) => {
  return (
    <S.Container>
      {selectedProducts.map(({ selectedOption: { name, price }, count }, i) => (
        <S.ItemWrapper key={i}>
          <S.Image src={thumbnail} alt="상품 미리보기" />
          <S.ContentsWrapper>
            <S.Name>{prdName}</S.Name>
            <S.Option>
              {prdName !== name && name + "-"} {count}개
            </S.Option>
            <strong>{Intl.NumberFormat().format(price)}원</strong>
          </S.ContentsWrapper>
        </S.ItemWrapper>
      ))}
    </S.Container>
  );
};

export default OrderProductContainer;

const S: any = {};

S.Container = styled.div``;

S.ItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 14px;
  border: 1px solid rgba(33, 33, 33, 0.15);
  border-bottom: none;
`;

S.Image = styled.img`
  width: 80px;
  height: 80px;
  margin-right: 24px;
`;

S.Name = styled.div`
  font-size: 14px;
`;

S.Option = styled.div`
  font-size: 12px;
  color: #999999;
`;

S.ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
