import { atom, selector } from "recoil";
import type { SelectedProduct } from "../types/orderTypes";

/**
 * 상품 상세 페이지에서 전달받은 구매 상품 데이터
 */
export const selectedOptions = atom<undefined | SelectedProduct[]>({
  key: "selectedOptions", // unique ID (with respect to other atoms/selectors)
  default: undefined,
  // default: [a
  //   {
  //     productId: 5,
  //     selectedOption: {
  //       stockCount: 30,
  //       name: "돌다리농원 100% 예산 순수생사과즙 100포(50포x2BOX 묶음상품)",
  //       price: 57000,
  //     },
  //     count: 2,
  //   },
  //   {
  //     productId: 5,
  //     selectedOption: {
  //       stockCount: 30,
  //       name: "돌다리농원 100% 예산 순수생사과즙 100포(50포x2BOX 묶음상품)",
  //       price: 57000,
  //     },
  //     count: 2,
  //   },
  // ], // default value (aka initial value)
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
    customMemo: "",
  },
});

export const formValiditySelector = selector({
  key: "ordererInfoValidityCheck",
  get: ({ get }) => {
    const ordererInfo = get(ordererInfoState);
    const o_isValidName = ordererInfo.name.length >= 2;
    const o_isValidTel = ordererInfo.tel.length >= 6;
    const o_isValidEmail =
      ordererInfo.email.length === 0 ? true : ordererInfo.email.includes("@");

    const deliveryInfo = get(deliveryInfoState);
    const d_isValidName = deliveryInfo.name.length >= 2;
    const d_isValidTel = deliveryInfo.tel.length >= 6;
    const d_isValidAddress = deliveryInfo.address.length > 0;
    const d_isValidAddressDetail = deliveryInfo.addressDetail.length > 0;
    const d_isValidZipcode = deliveryInfo.zipcode.length > 0;

    const isValid: [boolean, string] = !o_isValidName
      ? [false, "주문자 이름을 입력해주세요"]
      : !o_isValidTel
      ? [false, "주문자 전화번호를 입력하세요"]
      : !o_isValidEmail
      ? [false, "올바른 이메일을 입력하세요"]
      : !d_isValidName
      ? [false, "수령인 이름을 입력해주세요"]
      : !d_isValidTel
      ? [false, "수령인 전화번호를 입력하세요"]
      : !d_isValidAddress || !d_isValidAddressDetail || !d_isValidZipcode
      ? [false, "주소를 확인해주세요"]
      : [true, ""];
    return isValid;
  },
});

export const orderInfo = selector({
  key: "orderInfo",
  get: ({ get }) => {
    const products = get(selectedOptions);
    const orderer = get(ordererInfoState);
    const delivery = get(deliveryInfoState);

    return {
      products,
      orderer,
      delivery,
    };
  },
});
