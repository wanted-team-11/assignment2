import { atom } from "recoil";

/**
 * 상품 상세 페이지에서 전달받은 구매 상품 데이터
 */
export const selectedOptions = atom({
  key: "selectedOptions", // unique ID (with respect to other atoms/selectors)
  default: [
    {
      productId: 5,
      selectedOption: {
        stockCount: 30,
        name: "돌다리농원 100% 예산 순수생사과즙 100포(50포x2BOX 묶음상품)",
        price: 57000,
      },
      count: 2,
    },
    {
      productId: 5,
      selectedOption: {
        stockCount: 30,
        name: "돌다리농원 100% 예산 순수생사과즙 100포(50포x2BOX 묶음상품)",
        price: 57000,
      },
      count: 2,
    },
  ], // default value (aka initial value)
});

/**
 * 주문자 정보
 * - 이름, 전화번호, 이메일(선택)
 */
export const ordererInfoState = atom({
  key: "ordererInfo",
  default: {
    name: "",
    tel: "",
    email: "",
  },
});

/**
 * 배송 정보
 * - 수령인, 연락처, 우편번호, 주소, 상세주소, 배송메모
 */
export const deliveryInfoState = atom({
  key: "deliveryInfo",
  default: {
    name: "",
    tel: "",
    address: "",
    addressDetail: "",
    zipcode: "",
    memo: "",
  },
});
