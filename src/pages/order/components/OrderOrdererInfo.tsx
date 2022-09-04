import { useRecoilState } from "recoil";
import { ordererInfoState } from "../store/order.store";
import * as S from "./styles/OrderOrdererInfo.styled";
import OrderValidationInput from "./OrderValidationInput";

const OrderOrdererInfo = () => {
  const [formInputs, setFormInputs] = useRecoilState(ordererInfoState);

  const { name, tel, email } = formInputs;

  const isValidName = name.length >= 2;
  const isValidTel = tel.length >= 6;
  const isValidEmail = email.includes("@");

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
        <OrderValidationInput
          type="text"
          name="name"
          value={name}
          placeholder="이름"
          onChange={handleInput}
          required
          isValid={isValidName}
          validationMsg="주문자 이름을 입력해주세요"
        />
        <OrderValidationInput
          type="tel"
          name="tel"
          value={tel}
          placeholder="연락처"
          onChange={handleInput}
          required
          isValid={isValidTel}
          validationMsg="올바른 전화번호를 입력하세요"
        />
      </S.Wrapper>
      <OrderValidationInput
        type="email"
        name="email"
        value={email}
        placeholder="이메일(선택)"
        onChange={handleInput}
        isValid={isValidEmail}
        validationMsg="올바른 이메일을 입력하세요"
      />
    </>
  );
};

export default OrderOrdererInfo;
