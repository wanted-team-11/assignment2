import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  position: relative;
  width: 50vw;
  min-width: 420px;
  height: 80px;
  margin: 30px auto;
  border: 1px solid gray;
`;

export const CheckBox = styled.input`
  width: 24px;
  min-width: 24px;
  height: 24px;
  margin: 6px 10px 4px;
  position: relative;
  top: 20px;
  cursor: pointer;
`;

export const Img = styled.img`
  height: 80px;
  object-fit: cover;
`;

export const ProductName = styled.p`
  display: flex;
  align-items: center;
  margin: 10px 100px 10px 10px;
`;

export const Buttons = styled.div`
  display: flex;
  position: absolute;
  right: 10px;
  top: 10px;
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
  background-color: white;
  cursor: pointer;
`;
