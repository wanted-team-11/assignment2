import { ReactNode } from "react";

import styled from "styled-components";

const OrderWhiteContainer = ({
  children,
  title,
  small = false,
}: {
  children: ReactNode;
  title: string;
  small?: boolean;
}) => {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      {children}
    </S.Container>
  );
};

export default OrderWhiteContainer;

const S: any = {};

S.Container = styled.div`
  background-color: white;
  padding: 24px;
  width: 520px;
  margin-bottom: 16px;
`;

S.Title = styled.h6`
  font-weight: bold;
  font-size: 21px;
  margin: 0;
  padding-bottom: 20px;
`;
