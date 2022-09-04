import { useMemo } from "react";
import * as S from "../components/styles/OrderProductContainer.styled";
// import { Product, Option, SelectedProduct } from "../types";
import { Product, Option, SelectedProduct } from "../types/orderTypes";

export type Props = {
  name: Product["name"] | undefined;
  optionName: Option["name"];
  price: Option["price"];
  count: SelectedProduct["count"];
  thumbnailUrl: string | undefined;
  freeShippingCondition: Product["freeShippingCondition"] | undefined;
};

const OrderProductContainer = ({ products }: { products: Props[] }) => {
  const totalPrice = useMemo(
    () => products.reduce((acc, { price, count }) => price * count + acc, 0),
    []
  );
  const freeShippingCondition = products[0].freeShippingCondition || 0;
  return (
    <>
      <S.Container>
        {products.map(({ name, optionName, price, count, thumbnailUrl }, i) => (
          <S.ItemWrapper key={i}>
            <S.Image src={thumbnailUrl} alt="상품 미리보기" />
            <S.ContentsWrapper>
              <S.Name>{name}</S.Name>
              <S.Option>
                {name !== optionName && optionName + "-"} {count}개
              </S.Option>
              <strong>{Intl.NumberFormat().format(price)}원</strong>
            </S.ContentsWrapper>
          </S.ItemWrapper>
        ))}
      </S.Container>
      <S.TotalPriceContainer>
        배송비{" "}
        <span>
          {totalPrice > freeShippingCondition ? (
            <strong>무료</strong>
          ) : (
            `${Intl.NumberFormat().format(totalPrice)}원`
          )}
        </span>
      </S.TotalPriceContainer>
    </>
  );
};

export default OrderProductContainer;
