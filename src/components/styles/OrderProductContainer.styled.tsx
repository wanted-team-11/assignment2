import styled from "styled-components";

export const Container = styled.div``;

export const ItemWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 14px;
  border: 1px solid rgba(33, 33, 33, 0.15);
  border-bottom: none;
`;

export const Image = styled.img`
  width: 80px;
  height: 80px;
  margin-right: 24px;
`;

export const Name = styled.div`
  font-size: 14px;
`;

export const Option = styled.div`
  font-size: 12px;
  color: #999999;
`;

export const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const TotalPriceContainer = styled.div`
  background-color: rgba(33, 33, 33, 0.03);
  padding: 10px 14px;
  text-align: center;
  font-size: 13px;
  border: 1px solid rgba(33, 33, 33, 0.15);
`;
