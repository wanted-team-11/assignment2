import { useMemo, useEffect, useState } from "react";
import styled from "styled-components";
import { getData } from "./api";
import { Product } from "./types";

import WhiteContainer from "./components/OrderWhiteContainer";
import ProductContainer from "./components/OrderProductContainer";
import DeliveryPriceContainer from "./components/OrderDeliveryPriceContainer";
import OrderDeliveryContainer from "./components/OrderDeliveryContainer";

// import { selector, useRecoilValue } from "recoil";
// import { orderItemsState } from "./atoms.store";

type Props = Pick<
  Product,
  "imageUrls" | "name" | "deliveryFee" | "freeShippingCondition"
>;

const OrderPage = () => {
  const items = [
    {
      productId: 5,
      selectedOption: {
        stockCount: 30,
        name: "돌다리농원 100% 예산 순수생사과즙 100포(50포x2BOX 묶음상품)",
        price: 57000,
      },
      count: 2,
    },
    {
      productId: 5,
      selectedOption: {
        stockCount: 30,
        name: "돌다리농원 100% 예산 순수생사과즙 100포(50포x2BOX 묶음상품)",
        price: 57000,
      },
      count: 2,
    },
  ];

  const sum = items.reduce((totalPrice, item) => {
    totalPrice += item.selectedOption.price;
    return totalPrice;
  }, 0);

  const sumText = Intl.NumberFormat().format(sum);

  const [itemInfo, setItemInfo] = useState<Props | null>(null);

  const [formInputs, setFormInputs] = useState<{
    ordererName: string;
    address: string;
    addressDetail: string;
    email: string;
    zipcode: string;
    tel: string;
  }>({
    ordererName: "",
    email: "",
    address: "",
    addressDetail: "",
    zipcode: "",
    tel: "",
  });

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.currentTarget;
    setFormInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /**
   * 무료배송 요건 충족 변수
   */
  const isFreeShipping = useMemo(() => {
    return itemInfo ? itemInfo.freeShippingCondition < sum : false;
  }, [itemInfo, sum]);

  useEffect(() => {
    (async () => {
      const { imageUrls, name, deliveryFee, freeShippingCondition } =
        await getData(items[0].productId);
      setItemInfo({ imageUrls, name, deliveryFee, freeShippingCondition });
    })();
  }, []);

  return (
    <S.Container>
      <S.Wrapper>
        <WhiteContainer title="주문 상품 정보">
          <ProductContainer
            selectedProducts={items}
            thumbnail={itemInfo?.imageUrls[0]}
            prdName={itemInfo?.name}
          />
          <DeliveryPriceContainer isFreeShipping={isFreeShipping} sum={sum} />
        </WhiteContainer>

        <S.Form>
          <WhiteContainer title="주문자 정보">
            <S.Input
              type="text"
              name="ordererName"
              placeholder="이름"
              onChange={handleInput}
              required
            />
            <S.Input
              type="tel"
              placeholder="연락처"
              onChange={handleInput}
              required
            />
            <S.Input
              type="email"
              name="email"
              placeholder="이메일(선택)"
              onChange={handleInput}
            />
          </WhiteContainer>
          <WhiteContainer title="배송 정보">
            <OrderDeliveryContainer
              handleInput={handleInput}
              setFormInputs={setFormInputs}
              {...formInputs}
            />
          </WhiteContainer>
          <WhiteContainer title="주문 요약">
            <S.ItemWrapper>
              <div>상품가격</div>
              <div>{sumText}원</div>
            </S.ItemWrapper>
            <S.ItemWrapper>
              <div>배송비</div>
              <div>
                {isFreeShipping && itemInfo?.deliveryFee === 0
                  ? "무료"
                  : itemInfo &&
                    `${Intl.NumberFormat().format(itemInfo.deliveryFee)}원`}
              </div>
            </S.ItemWrapper>
            <S.ItemWrapper>
              <div>총 주문금액</div>
              <div>{sumText}원</div>
            </S.ItemWrapper>
          </WhiteContainer>
          <WhiteContainer title="결제 수단">
            <S.ItemWrapper>
              <div>
                <S.Input
                  type="radio"
                  id={"creditCard"}
                  name={"paymentMethod"}
                />
                <label htmlFor="creditCard">신용카드</label>
              </div>
              <div>
                <S.Input type="radio" id={"noAccount"} name={"paymentMethod"} />
                <label htmlFor="noAccount">무통장입금</label>
              </div>
            </S.ItemWrapper>
          </WhiteContainer>
          <WhiteContainer title="">
            <S.Title>{/* 전체동의 => 개인정보 & 구매조건 */}</S.Title>
          </WhiteContainer>
        </S.Form>
      </S.Wrapper>
    </S.Container>
  );
};

export default OrderPage;

const S: any = {};

S.Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #f3f3f3;
  & * {
    box-sizing: border-box;
  }
`;

S.Wrapper = styled.div`
  max-width: 860px;
`;

S.Title = styled.h3``;

S.DeliveryPriceContainer = styled.div``;

S.ItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

S.Image = styled.img`
  width: 80px;
  height: 80px;
`;

S.ContentsWrapper = styled.div``;

S.Form = styled.form``;

S.Input = styled.input``;
