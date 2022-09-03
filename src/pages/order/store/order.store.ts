import { atom } from "recoil";

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

export const ordererInfoState = atom({
  key: "ordererInfo",
  default: {
    name: "",
    tel: "",
    email: "",
  },
});

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
