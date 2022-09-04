import { useMemo, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { fetchProductDetail } from "./api";
import { Product } from "./types";

import WhiteContainer from "./components/OrderWhiteContainer";
import OrderProductContainer from "./components/OrderProductContainer";
import OrderDeliveryInfo from "./components/OrderDeliveryInfo";
import OrderOrdererInfo from "./components/OrderOrdererInfo";
import OrderAgreeCheckboxes from "./components/OrderAgreeCheckboxes";

import { useRecoilValue } from "recoil";
import {
  selectedOptions,
  formValiditySelector,
  orderInfo,
} from "./store/order.store";

type ItemInfoAttr = Pick<
  Product,
  "imageUrls" | "name" | "deliveryFee" | "freeShippingCondition"
>;

const OrderPage = () => {
  const items = useRecoilValue(selectedOptions);
  const [isEveryFieldValid, msg] = useRecoilValue(formValiditySelector);
  const orderInformation = useRecoilValue(orderInfo);
  const navigate = useNavigate();

  const sum = items.reduce((totalPrice, item) => {
    totalPrice += item.selectedOption.price;
    return totalPrice;
  }, 0);

  const sumText = Intl.NumberFormat().format(sum);

  /**
   * 상품 상세정보
   */
  const [itemInfo, setItemInfo] = useState<ItemInfoAttr | null>(null);

  /**
   * 무료배송 요건 충족 변수
   */
  const isFreeShipping = useMemo(() => {
    return itemInfo ? itemInfo.freeShippingCondition < sum : false;
  }, [itemInfo, sum]);

  useEffect(() => {
    (async () => {
      const { imageUrls, name, deliveryFee, freeShippingCondition } =
        await fetchProductDetail(items[0].productId);

      setItemInfo({ imageUrls, name, deliveryFee, freeShippingCondition });
    })();
  }, []);

  /**
   * 결제 전 동의 체크항목들
   */
  const [agrees, setAgrees] = useState<{
    all: boolean;
    privacy: boolean;
    purchase: boolean;
  }>({
    all: false,
    privacy: false,
    purchase: false,
  });

  const isAllAgree = agrees.all && agrees.privacy && agrees.purchase;

  const handleAgreeCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
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

  /**
   * "전체 동의" 관련 체크박스 동기화
   */
  useEffect(() => {
    const { privacy, purchase } = agrees;
    const newAll = privacy && purchase;
    setAgrees((prev) => ({
      ...prev,
      all: newAll,
    }));
  }, [agrees.privacy, agrees.purchase]);

  /**
   * 결제 방식 라디오 항목
   */
  const [paymentMethod, setPaymentMethod] = useState("credit-card");

  const handlePaymentRadio = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    setPaymentMethod(value);
  };

  /**
   * 선택된 상품들을 OrderProductsContainer 컴포넌트에 전달하기 위한 변수
   */
  const productContainerProps = items.map(
    ({ selectedOption: { name, price }, count }) => {
      return {
        name: itemInfo?.name,
        optionName: name,
        price,
        count,
        thumbnailUrl: itemInfo?.imageUrls[0],
        freeShippingCondition: itemInfo?.freeShippingCondition,
      };
    }
  );

  const onPurchase = () => {
    if (!isEveryFieldValid) {
      alert(msg);
      return;
    }
    if (!isAllAgree) {
      alert("결제 전 동의해주세요");
      return;
    }

    // perform order
    console.log(orderInformation);
    setTimeout(() => {
      alert("주문이 완료되었습니다.");
      navigate("/");
    }, 500);
  };

  return (
    <S.Container>
      <S.Title>결제하기</S.Title>
      <S.Wrapper>
        <S.BigBoxes>
          <WhiteContainer title="주문 상품 정보">
            <OrderProductContainer products={productContainerProps} />
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
                  checked={paymentMethod === "credit-card"}
                  value="credit-card"
                  onChange={handlePaymentRadio}
                />
                <label htmlFor="creditCard">신용카드</label>
              </div>
              <div>
                <S.Input
                  type="radio"
                  id={"noAccount"}
                  name={"paymentMethod"}
                  checked={paymentMethod === "no-bank"}
                  value="no-bank"
                  onChange={handlePaymentRadio}
                />
                <label htmlFor="noAccount">무통장입금</label>
              </div>
            </S.ItemWrapper>
          </WhiteContainer>
          <WhiteContainer title="" small>
            <OrderAgreeCheckboxes
              all={agrees.all}
              privacy={agrees.privacy}
              purchase={agrees.purchase}
              handleInputCheckbox={handleAgreeCheckbox}
            />
          </WhiteContainer>
          <S.PurchaseButton onClick={onPurchase}>결제하기</S.PurchaseButton>
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
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 110px;
  & > *:nth-child(3) {
    margin-bottom: 0;
  }
`;

S.ContentsWrapper = styled.div``;

S.Form = styled.form``;

S.Input = styled.input``;

S.PurchaseButton = styled.button`
  background-color: #4c9c2e;
  color: white;
  text-align: center;
  display: block;
  border: none;
  padding: 15px 30px;
  font-size: 16px;
  cursor: pointer;
`;
