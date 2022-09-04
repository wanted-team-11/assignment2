import useRemoveProduct from "./useRemoveProduct";
import { Product } from "../types/types";

const useToggleProduct = () => {
  const { productList, setProductList, checkList, setCheckList } =
    useRemoveProduct();

  const toggleProduct = (id: number) => {
    const newList = productList.map((data: Product) => {
      if (id === data.id) return { ...data, visible: !data.visible };
      else return { ...data };
    });
    setProductList(newList);
  };

  const hideCheckedProduct = () => {
    if (checkList.length > 0) {
      if (window.confirm(`선택된 ${checkList.length}개를 숨기겠습니까?`)) {
        const checkedList = productList.filter((data: Product) => {
          return !data.visible && checkList.includes(data.id);
        });
        if (checkedList.length > 0) {
          alert("이미 숨겨진 상품이 포함되어 있습니다.");
          return;
        }
        const newList = productList.map((data: Product) => {
          if (checkList.includes(data.id) === true) {
            return { ...data, visible: false };
          } else {
            return { ...data };
          }
        });
        setProductList(newList);
        setCheckList([]);
      }
    } else {
      alert("선택된 항목이 없습니다.");
    }
  };

  const showCheckedProduct = () => {
    if (checkList.length > 0) {
      if (window.confirm(`선택된 ${checkList.length}개를 노출하시겠습니까?`)) {
        const checkedList = productList.filter((data: Product) => {
          return data.visible && checkList.includes(data.id);
        });
        if (checkedList.length > 0) {
          alert("이미 노출된 상품이 포함되어 있습니다.");
          return;
        }
        const newList = productList.map((data: Product) => {
          if (checkList.includes(data.id)) {
            return { ...data, visible: true };
          } else {
            return { ...data };
          }
        });
        setProductList(newList);
        setCheckList([]);
      }
    } else {
      alert("선택된 항목이 없습니다.");
    }
  };

  const onAllBehind = () => {
    if (window.confirm(`전체 숨김을 하시겠습니까?`)) {
      const newList = productList.map((data: Product) => {
        return { ...data, visible: false };
      });
      setProductList(newList);
    }
  };

  const showAllProduct = () => {
    if (window.confirm(`전체 노출을 하시겠습니까?`)) {
      const newList = productList.map((data: Product) => {
        return { ...data, visible: true };
      });
      setProductList(newList);
    }
  };

  return {
    toggleProduct,
    hideCheckedProduct,
    showCheckedProduct,
    onAllBehind,
    showAllProduct,
  };
};

export default useToggleProduct;
