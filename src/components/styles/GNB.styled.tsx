import styled from "styled-components";
import { NavLink as _NavLink } from "react-router-dom";

export const GNBWrapper = styled.div`
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 90px;
  margin-bottom: 90px;
  padding: 0 30px;
  background-color: white;
  border-bottom: 1px solid #e5e7eb;
`;

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  justify-self: flex-start;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
`;

export const Logo = styled.img`
  width: 180px;
  height: 50px;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
`;

export const NavLink = styled(_NavLink)`
  color: inherit;
  text-decoration: none;
  padding: 20px;
  &.active {
    font-weight: bold;
  }
`;

export const Padding = styled.div`
  padding-bottom: 90px;
`;

export const LinkContainer = styled.ul`
  display: flex;
  justify-self: center;
  align-items: center;
`;

export const OrderLinkWrapper = styled.div`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);

  & > a {
    color: black;
    text-decoration: none;
  }
`;
