import * as S from "../components/styles/OrderValidationInput.styled";
import { useRef } from "react";

const OrderValidationInput = ({
  type,
  name,
  value,
  placeholder,
  onChange,
  required = false,
  isValid = true,
  validationMsg,
}: {
  type: string;
  name: string;
  value: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  isValid?: boolean | undefined;
  validationMsg?: string | undefined;
}) => {
  const isFocused = useRef<boolean>(false);
  const onFocus = () => {
    isFocused.current = true;
  };
  let validity = true;
  if (required) {
    validity = isFocused.current ? isValid : true;
  } else {
    validity = value.length === 0 ? true : isValid;
  }
  return (
    <S.InputWrapper>
      <S.Input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        required={required}
        onFocus={onFocus}
      />
      {!validity && <S.ValidationMsg>{validationMsg}</S.ValidationMsg>}
    </S.InputWrapper>
  );
};

export default OrderValidationInput;
