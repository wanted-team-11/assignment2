import styled from "styled-components";

export const InputWrapper = styled.span`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  &:nth-child(2) {
    margin-left: 10px;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 36px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 0;
`;

export const ValidationMsg = styled.span`
  font-size: 12px;
  color: #fb4637;
  padding: 0.3em;
`;
