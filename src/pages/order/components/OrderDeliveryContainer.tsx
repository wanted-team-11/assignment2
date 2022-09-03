import Modal from "../Modal";
import DaumPostcode from "react-daum-postcode";
import { useState } from "react";

type Props = {
  address: string;
  addressDetail: string;
  zipcode: string;
  ordererName: string;
  tel: string;
  email: string;
  handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setFormInputs: React.Dispatch<
    React.SetStateAction<{
      ordererName: string;
      tel: string;
      email: string;
      address: string;
      addressDetail: string;
      zipcode: string;
    }>
  >;
};

const OrderDeliveryContainer = (props: Props) => {
  const { zipcode, address, addressDetail, handleInput, setFormInputs } = props;
  const [openPostcode, setOpenPostcode] = useState(false);

  const handleSelectAddress = ({ address, zonecode }: any) => {
    setFormInputs((prev: any) => ({
      ...prev,
      zipcode: zonecode,
      address: address,
    }));
    setOpenPostcode(false);
  };

  /**
   * todo: 주문자 정보와 동일 체크시 정보 받아서 value넣기
   */
  const handleSameInOrderer = () => {};

  const handlePostcode = (e: any) => {
    e.preventDefault();
    setOpenPostcode(true);
  };
  return (
    <>
      <input
        type="checkbox"
        id={"sameCheck"}
        name={"sameCheck"}
        onChange={handleSameInOrderer}
      />
      <label htmlFor="sameCheck">주문자 정보와 동일</label>
      <input type="text" placeholder="수령인" onChange={handleInput} required />
      <input type="tel" placeholder="연락처" onChange={handleInput} required />
      <input
        type="address"
        placeholder="우편번호"
        value={zipcode}
        onClick={handlePostcode}
      />
      <button onClick={handlePostcode}>주소찾기</button>
      {openPostcode && (
        <Modal title={"주소 검색"} onCancel={() => setOpenPostcode(false)}>
          <DaumPostcode
            onComplete={handleSelectAddress}
            autoClose={false}
            defaultQuery={"논현로 66길"}
          />
        </Modal>
      )}

      <input type="address" placeholder="주소" value={address} name="address" />
      <input
        type="address"
        placeholder="상세주소"
        name="addressDetail"
        value={addressDetail}
        onChange={handleInput}
      />
      <h4>배송메모</h4>
      <select>
        <option>문앞에 </option>
        <option>문앞에 </option>
        <option>문앞에 </option>
      </select>
    </>
  );
};

export default OrderDeliveryContainer;
