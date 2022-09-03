import { useMemo, useEffect, useState } from "react";
import styled from "styled-components";
import { getData } from "./api";
import { Product } from "./types";

import WhiteContainer from "./components/OrderWhiteContainer";
import ProductContainer from "./components/OrderProductContainer";
import DeliveryPriceContainer from "./components/OrderDeliveryPriceContainer";
import OrderDeliveryInfo from "./components/OrderDeliveryInfo";
import OrderOrdererInfo from "./components/OrderOrdererInfo";
import OrderAgreeCheckbox from "./components/OrderAgreeCheckbox";

import { useRecoilValue } from "recoil";
import { selectedOptions } from "./store/order.store";

type Props = Pick<
  Product,
  "imageUrls" | "name" | "deliveryFee" | "freeShippingCondition"
>;

const OrderPage = () => {
  const items = useRecoilValue(selectedOptions);

  const sum = items.reduce((totalPrice, item) => {
    totalPrice += item.selectedOption.price;
    return totalPrice;
  }, 0);

  const sumText = Intl.NumberFormat().format(sum);

  const [itemInfo, setItemInfo] = useState<Props | null>(null);

  /**
   * 무료배송 요건 충족 변수
   */
  const isFreeShipping = useMemo(() => {
    return itemInfo ? itemInfo.freeShippingCondition < sum : false;
  }, [itemInfo, sum]);

  const [agrees, setAgrees] = useState<{
    all: boolean;
    privacy: boolean;
    purchase: boolean;
  }>({
    all: false,
    privacy: false,
    purchase: false,
  });

  // 동의
  const handleInputCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, name } = e.currentTarget;
    if (name === "all") {
      setAgrees({
        all: checked,
        privacy: checked,
        purchase: checked,
      });
    } else {
      setAgrees((prev) => ({
        ...prev,
        [name]: checked,
      }));
    }
  };

  useEffect(() => {
    const { privacy, purchase } = agrees;
    const newAll = privacy && purchase;
    setAgrees((prev) => ({
      ...prev,
      all: newAll,
    }));
  }, [agrees.privacy, agrees.purchase]);

  useEffect(() => {
    (async () => {
      const { imageUrls, name, deliveryFee, freeShippingCondition } =
        await getData(items[0].productId);
      setItemInfo({ imageUrls, name, deliveryFee, freeShippingCondition });
    })();
  }, []);

  return (
    <S.Container>
      <S.Title>결제하기</S.Title>
      <S.Wrapper>
        <S.BigBoxes>
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
              <OrderOrdererInfo />
            </WhiteContainer>
            <WhiteContainer title="배송 정보">
              <OrderDeliveryInfo />
            </WhiteContainer>
          </S.Form>
        </S.BigBoxes>
        <S.SmallBoxes>
          <WhiteContainer title="주문 요약" small>
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
          <WhiteContainer title="결제 수단" small>
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
          <WhiteContainer title="" small>
            <OrderAgreeCheckbox
              name="all"
              checked={agrees.all}
              onChange={handleInputCheckbox}
            >
              전체 동의
            </OrderAgreeCheckbox>
            <OrderAgreeCheckbox
              name="privacy"
              checked={agrees.privacy}
              onChange={handleInputCheckbox}
            >
              개인정보 수집 및 이용 동의
              <a href="#">약관보기</a>
            </OrderAgreeCheckbox>
            <OrderAgreeCheckbox
              name="purchase"
              checked={agrees.purchase}
              onChange={handleInputCheckbox}
            >
              구매조건 확인 및 결제진행에 동의
            </OrderAgreeCheckbox>
          </WhiteContainer>
        </S.SmallBoxes>
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

S.Title = styled.h1`
  text-align: center;
  margin: 50px 0;
`;

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

S.Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
`;

S.BigBoxes = styled.div`
  display: inline-block;
  margin-right: 16px;
`;
S.SmallBoxes = styled.div`
  display: inline-block;
  position: sticky;
  top: 110px;
`;

S.ContentsWrapper = styled.div``;

S.Form = styled.form``;

S.Input = styled.input``;
