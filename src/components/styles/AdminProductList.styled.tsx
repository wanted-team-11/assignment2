import styled from "styled-components";

export const Wrapper = styled.div`
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
`;

export const PaddingButton = styled.div`
  display: flex;
  padding: 15px 0px 5px 27px;
  margin: 0 22.5vw;
  gap: 10px;
`;

export const ProductListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 4px;
  width: fit-content;
  height: 50px;
  border: 1px solid gray;
  border-radius: 4px;
  cursor: pointer;
  background-color: white;
`;
