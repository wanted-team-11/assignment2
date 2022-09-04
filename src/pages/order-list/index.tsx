import styled from "styled-components";
import { useState, useEffect } from "react";
import { getConfirmedOrders } from "../../api/product.api";
import OrderProductContainer, {
  Props as ProductContainerProps,
} from "../order/components/OrderProductContainer";
import OrderWhiteContainer from "../order/components/OrderWhiteContainer";

type ConfirmedOrders = {
  orderId: number;
  products: {
    name: string;
    selectedOptions: {
      name: string;
      count: number;
    }[];
    totalPrice: number;
    thumbnailUrl: string;
    freeShippingCondition: number;
  }[];
}[];

const OrderListPage = () => {
  const [orderList, setOrderList] = useState<ConfirmedOrders>();

  useEffect(() => {
    (async () => {
      const res = await getConfirmedOrders();
      setOrderList(res);
    })();
  }, []);

  return (
    <S.Container>
      <S.Wrapper>
        {orderList &&
          orderList.map(({ orderId, products }) => {
            const props = products.reduce<ProductContainerProps[]>(
              (acc, product) => {
                const {
                  name,
                  selectedOptions,
                  totalPrice,
                  thumbnailUrl,
                  freeShippingCondition,
                } = product;
                const items = selectedOptions.map((option) => {
                  return {
                    name,
                    optionName: option.name,
                    price: totalPrice,
                    count: option.count,
                    thumbnailUrl,
                    freeShippingCondition,
                  };
                });
                return [...acc, ...items];
              },
              []
            );
            return (
              <OrderWhiteContainer title={`주문번호 : ${orderId}`}>
                {products && <OrderProductContainer products={props} />}
              </OrderWhiteContainer>
            );
          })}
      </S.Wrapper>
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
