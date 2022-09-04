import styled from "styled-components";

export const PageButtonWrapper = styled.div`
  width: 1260px;
  margin: 0 auto;
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PaginationButton = styled.button`
  &:not(:first-child) {
    margin-inline-start: 20px;
  }
`;
