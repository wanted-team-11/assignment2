import * as S from "./styles/GNB.styled";
import { NavLink } from "react-router-dom";

const GNB = () => {
  return (
    <>
      <S.GNBWrapper>
        <S.Container>
          <S.LogoWrapper>
            <S.Logo
              src="https://cdn.imweb.me/thumbnail/20210215/9c484dd3f6e7f.jpg"
              alt="logo"
            />
          </S.LogoWrapper>
          <S.LinkContainer>
            <S.NavLink to="">FRUITTE</S.NavLink>
            <S.NavLink to="">FRUIT NOW</S.NavLink>
            <S.NavLink to="/fruitstore">FRUIT STORE</S.NavLink>
            <S.NavLink to="">FRUIT PLAY</S.NavLink>
            <S.NavLink to="">ABOUT US</S.NavLink>
            <S.NavLink to="admin/product-upload">ADMIN</S.NavLink>
            <S.NavLink to="admin/product-list">ADMIN LIST</S.NavLink>
          </S.LinkContainer>
          <S.OrderLinkWrapper>
            <NavLink to="order-list">주문 확인</NavLink>
          </S.OrderLinkWrapper>
        </S.Container>
      </S.GNBWrapper>
      <S.Padding />
    </>
  );
};

export default GNB;
