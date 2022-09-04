import styled from "styled-components";
import { NavLink as _NavLink } from "react-router-dom";

export const FooterBackground = styled.div`
  display: flex;
  justify-content: center;
  background-color: #eeeeee;
  color: #333333;
  font-weight: bold;
  padding: 80px 0 60px;
  margin-top: 200px;
`;

export const FooterWrapper = styled.div`
  width: 1280px;
  display: flex;
  border-top: 1px solid #d8d8d8;
  border-bottom: 1px solid #d8d8d8;
  padding: 10px 0;
`;

export const ContentContainer = styled.div`
  ${({ content }: { content?: string }) => {
    switch (content) {
      case "1": {
        return `
          width: 426px;
          margin-right: 100px;
        `;
      }
      case "2": {
        return `
          width: 300px;
          margin-right: 90px;
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
        `;
      }
    }
  }}
`;

export const Title = styled.h3`
  margin-bottom: 40px;
`;

export const Subtitle = styled.h4`
  text-decoration: underline;
`;

export const Paragraph = styled.p`
  font-weight: normal;
  font-size: 14px;
  line-height: 1.3;
`;

export const NoticeContainer = styled.div`
  line-height: 2.4;
  font-weight: normal;
  font-size: 14px;
`;

export const NoticeTitle = styled.h5`
  font-size: 14px;
  font-weight: normal;
  margin: 0;
  text-decoration: underline;
`;

export const FooterNav = styled.ul``;

export const NavLink = styled(_NavLink)`
  color: inherit;
  text-decoration: none;
  margin-bottom: 30px;
  font-weight: normal;
  display: block;
  &.active {
    font-weight: bold;
  }
`;

export const PseudoLink = styled.div`
  cursor: pointer;
  margin-bottom: 30px;
  font-weight: normal;
`;
