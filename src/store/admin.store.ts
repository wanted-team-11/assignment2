import { atom } from "recoil";
import { Product } from "../types/types";

export const productListState = atom<Product[]>({
  key: "productListState",
  default: [],
});

export const checkListState = atom<number[]>({
  key: "checkListState",
  default: [],
});
