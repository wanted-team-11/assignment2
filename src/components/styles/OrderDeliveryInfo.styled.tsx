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

export const Select = styled.select`
  width: 100%;
  height: 36px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 0;
  appearance: none;
`;

export const SelectWrapper = styled.div`
  position: relative;
  &::before {
    content: "▾";
    display: block;
    position: absolute;
    text-rendering: auto;
    z-index: 11;
    vertical-align: middle;
    right: 14px;
    top: 50%;
    line-height: 9px;
    margin-top: -4.5px;
    color: rgb(51, 51, 51);
    color: rgba(51, 51, 51, 0.4);
    pointer-events: none;
  }

  & + input {
    margin-top: 10px;
  }
`;
