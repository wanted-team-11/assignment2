import Modal from "./OrderModal";
import DaumPostcode from "react-daum-postcode";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { ordererInfoState, deliveryInfoState } from "../store/order.store";
import OrderValidationInput from "./OrderValidationInput";
import * as S from "./styles/OrderDeliveryInfo.styled";

const OrderDeliveryContainer = () => {
  const [ordererInfo] = useRecoilState(ordererInfoState);
  const [formInputs, setFormInputs] = useRecoilState(deliveryInfoState);
  const [openPostcode, setOpenPostcode] = useState(false);

  const { name, tel, address, addressDetail, zipcode, memo, customMemo } =
    formInputs;

  const isValidName = name.length >= 2;
  const isValidTel = tel.length >= 6;

  const handleInput = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { value, name } = e.currentTarget;
    setFormInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelectAddress = ({
    address,
    zonecode: zipcode,
  }: {
    address: string;
    zonecode: string;
  }) => {
    setFormInputs((prev) => ({
      ...prev,
      zipcode,
      address,
    }));
    setOpenPostcode(false);
  };

  const handleSameInOrderer = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.currentTarget.checked) return;
    setFormInputs((prev) => ({
      ...prev,
      ...ordererInfo,
    }));
  };

  const handlePostcode = (
    e:
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
      | React.MouseEvent<HTMLInputElement, MouseEvent>
  ) => {
    e.preventDefault();
    setOpenPostcode(true);
  };

  return (
    <>
      <S.CheckboxWrapper>
        <input
          type="checkbox"
          id={"sameCheck"}
          name={"sameCheck"}
          onChange={handleSameInOrderer}
        />
        <label htmlFor="sameCheck">주문자 정보와 동일</label>
      </S.CheckboxWrapper>
      <S.Wrapper>
        <OrderValidationInput
          type="text"
          placeholder="수령인"
          onChange={handleInput}
          name="name"
          value={name}
          required
          isValid={isValidName}
          validationMsg="2글자 이상 입력해주세요"
        />
        <OrderValidationInput
          type="tel"
          placeholder="연락처"
          onChange={handleInput}
          name="tel"
          value={tel}
          required
          isValid={isValidTel}
          validationMsg="올바른 전화번호를 입력해주세요"
        />
      </S.Wrapper>
      <S.Wrapper>
        <S.Input
          type="tel"
          placeholder="우편번호"
          value={zipcode}
          onClick={handlePostcode}
          readOnly
        />
        <S.Button onClick={handlePostcode}>주소찾기</S.Button>
      </S.Wrapper>
      {openPostcode && (
        <Modal title={"주소 검색"} onCancel={() => setOpenPostcode(false)}>
          <DaumPostcode
            onComplete={handleSelectAddress}
            autoClose={false}
            defaultQuery={"논현로 66길"}
          />
        </Modal>
      )}

      <S.Input
        type="text"
        placeholder="주소"
        value={address}
        name="address"
        onClick={handlePostcode}
        readOnly
      />
      <S.Input
        type="text"
        placeholder="상세주소"
        name="addressDetail"
        value={addressDetail}
        onChange={handleInput}
      />
      <p>배송메모</p>
      <S.SelectWrapper>
        <S.Select name="memo" onChange={handleInput}>
          <option value="">배송메모를 선택해 주세요.</option>
          <option value="배송 전에 미리 연락 바랍니다.">
            배송 전에 미리 연락 바랍니다.
          </option>
          <option value="부재시 경비실에 맡겨주세요.">
            부재시 경비실에 맡겨주세요.
          </option>
          <option value="부재시 전화나 문자를 남겨주세요.">
            부재시 전화나 문자를 남겨주세요.
          </option>
          <option value="custom">직접입력</option>
        </S.Select>
      </S.SelectWrapper>
      {memo === "custom" && (
        <S.Input
          type="text"
          placeholder="배송메모를 입력해주세요"
          name="customMemo"
          value={customMemo}
          onChange={handleInput}
        />
      )}
    </>
  );
};

export default OrderDeliveryContainer;
