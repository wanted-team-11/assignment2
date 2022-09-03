import styled from "styled-components";

const OrderDeliveryPriceContainer = ({
  isFreeShipping,
  sum,
}: {
  isFreeShipping: boolean;
  sum: number;
}) => {
  const sumText = Intl.NumberFormat().format(sum);
  return (
    <S.Container>
      배송비{" "}
      <span>{isFreeShipping ? <strong>무료</strong> : `${sumText}원`}</span>
    </S.Container>
  );
};

export default OrderDeliveryPriceContainer;

const S: any = {};

S.Container = styled.div`
  background-color: rgba(33, 33, 33, 0.03);
  padding: 10px 14px;
  text-align: center;
  font-size: 13px;
  border: 1px solid rgba(33, 33, 33, 0.15);
`;
