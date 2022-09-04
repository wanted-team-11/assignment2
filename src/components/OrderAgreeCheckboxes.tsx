import OrderAgreeCheckbox from "./OrderAgreeCheckbox";

const OrderAgreeCheckboxContainer = ({
  all,
  privacy,
  purchase,
  handleInputCheckbox,
}: {
  all: boolean;
  privacy: boolean;
  purchase: boolean;
  handleInputCheckbox: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <>
      <OrderAgreeCheckbox
        name="all"
        checked={all}
        onChange={handleInputCheckbox}
      >
        전체 동의
      </OrderAgreeCheckbox>
      <OrderAgreeCheckbox
        name="privacy"
        checked={privacy}
        onChange={handleInputCheckbox}
      >
        개인정보 수집 및 이용 동의
        <a href="#">약관보기</a>
      </OrderAgreeCheckbox>
      <OrderAgreeCheckbox
        name="purchase"
        checked={purchase}
        onChange={handleInputCheckbox}
      >
        구매조건 확인 및 결제진행에 동의
      </OrderAgreeCheckbox>
    </>
  );
};

export default OrderAgreeCheckboxContainer;
