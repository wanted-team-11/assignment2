import styled from "styled-components";
import { useState, useEffect } from "react";
import { getConfirmedOrders } from "../../api/product.api";

/**
 * TODO: 미완성. 개발 진행 요망
 */
const OrderListPage = () => {
  const [orderList, setOrderList] = useState();

  useEffect(() => {
    (async () => {
      const res = await getConfirmedOrders();
      // setOrderList(res);
    })();
  }, []);
  return (
    <S.Container>
      <S.Wrapper>OrderListPage</S.Wrapper>
    </S.Container>
  );
};
export default OrderListPage;

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
