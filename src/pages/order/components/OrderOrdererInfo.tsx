import { useState } from "react";
import { useRecoilState } from "recoil";
import { ordererInfoState } from "../store/order.store";
import styled from "styled-components";

const OrderOrdererInfo = () => {
  const [formInputs, setFormInputs] = useRecoilState(ordererInfoState);

  const { name, tel, email } = formInputs;

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.currentTarget;
    setFormInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <S.Wrapper>
        <S.Input
          type="text"
          name="name"
          value={name}
          placeholder="이름"
          onChange={handleInput}
          required
        />
        <S.Input
          type="tel"
          name="tel"
          value={tel}
          placeholder="연락처"
          onChange={handleInput}
          required
        />
      </S.Wrapper>
      <S.Input
        type="email"
        name="email"
        value={email}
        placeholder="이메일(선택)"
        onChange={handleInput}
      />
    </>
  );
};

export default OrderOrdererInfo;

const S: any = {};

S.Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

S.Input = styled.input`
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
