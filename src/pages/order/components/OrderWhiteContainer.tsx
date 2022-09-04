import { ReactNode } from "react";
import * as S from "./styles/OrderWhiteContainer.styled";

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
    <S.Container className={small ? "small" : ""}>
      {title && <S.Title>{title}</S.Title>}
      {children}
    </S.Container>
  );
};

export default OrderWhiteContainer;
