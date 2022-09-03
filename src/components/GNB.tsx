import styled from "styled-components";
import { NavLink } from "react-router-dom";

const GNB = () => {
  const test = (b: boolean) => {
    console.log("wah");
    return "";
  };
  return (
    <>
      <S.Container>
        <S.Logo
          src="https://cdn.imweb.me/thumbnail/20210215/9c484dd3f6e7f.jpg"
          alt="logo"
        />
        <S.LinkContainer>
          <S.NavLink to="">FRUITTE</S.NavLink>
          <S.NavLink to="">FRUIT NOW</S.NavLink>
          <S.NavLink to="/fruitstore">FRUIT STORE</S.NavLink>
          <S.NavLink to="">FRUIT PLAY</S.NavLink>
          <S.NavLink to="">ABOUT US</S.NavLink>
        </S.LinkContainer>
        <NavLink to="order-list">주문 확인</NavLink>
      </S.Container>
      <Padding />
    </>
  );
};

export default GNB;

const S: any = {};

const Logo = styled.img`
  width: 180px;
  height: 50px;
`;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 90px;
  margin-bottom: 90px;
  display: flex;
  justify-content: space-between;
`;

const NLink = styled(NavLink)`
  color: inherit;
  text-decoration: none;
  padding: 20px;
  &.active {
    font-weight: bold;
  }
`;

const Padding = styled.div`
  padding-bottom: 90px;
`;

const LinkContainer = styled.ul`
  display: flex;
  align-items: center;
`;

S.Container = Container;
S.NavLink = NLink;
S.Padding = Padding;
S.LinkContainer = LinkContainer;
S.Logo = Logo;
