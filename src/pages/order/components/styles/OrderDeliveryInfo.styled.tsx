import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  & > * {
    flex-grow: 1;
  }
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-size: 12px;
`;

export const Input = styled.input`
  width: 100%;
  height: 36px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 0;
  margin-bottom: 10px;
  &:nth-child(2) {
    margin-left: 10px;
  }
`;

export const Button = styled.button`
  width: 25%;
  height: 36px;
  margin-left: 10px;
`;
