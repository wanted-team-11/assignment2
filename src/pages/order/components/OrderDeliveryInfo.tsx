import Modal from "../Modal";
import DaumPostcode from "react-daum-postcode";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { ordererInfoState, deliveryInfoState } from "../store/order.store";
import styled from "styled-components";

const OrderDeliveryContainer = () => {
  const [ordererInfo] = useRecoilState(ordererInfoState);
  const [formInputs, setFormInputs] = useRecoilState(deliveryInfoState);
  const [openPostcode, setOpenPostcode] = useState(false);

  const { name, tel, address, addressDetail, zipcode } = formInputs;

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
        <S.Input
          type="text"
          placeholder="수령인"
          onChange={handleInput}
          name="name"
          value={name}
          required
        />
        <S.Input
          type="tel"
          placeholder="연락처"
          onChange={handleInput}
          name="tel"
          value={tel}
          required
        />
      </S.Wrapper>
      <S.Wrapper>
        <S.Input
          type="address"
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
        type="address"
        placeholder="주소"
        value={address}
        name="address"
        onClick={handlePostcode}
        readOnly
      />
      <S.Input
        type="address"
        placeholder="상세주소"
        name="addressDetail"
        value={addressDetail}
        onChange={handleInput}
      />
      <p>배송메모</p>
      <select onChange={handleInput}>
        <option>문앞에 </option>
        <option>문앞에 </option>
        <option>문앞에 </option>
      </select>
    </>
  );
};

export default OrderDeliveryContainer;

const S: any = {};

S.Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

S.CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-size: 12px;
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

S.Button = styled.button`
  width: 25%;
  height: 36px;
  margin-left: 10px;
`;
