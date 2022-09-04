import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { productListState, checkListState } from "../store/admin.store";
import { Product } from "../types/types";

const useRemoveProduct = () => {
  const [productList, setProductList] = useRecoilState(productListState);
  const [checkList, setCheckList] = useRecoilState(checkListState);

  const onRemove = (id: number) => {
    const newList = productList.filter((data: Product) => {
      return data.id !== id;
    });
    setProductList(newList);
  };

  const ChooseRemove = () => {
    if (checkList.length > 0) {
      if (window.confirm(`선택된 ${checkList.length}개를 삭제하시겠습니까?`)) {
        const newList = productList.filter((data: Product) => {
          return !checkList.includes(data.id);
        });
        setProductList(newList);
        setCheckList([]);
      }
    } else {
      alert("선택된 항목이 없습니다.");
    }
  };

  const onAllRemove = () => {
    if (window.confirm(`전체 삭제를 하시겠습니까?`)) {
      setProductList([]);
    }
  };

  useEffect(() => {
    fetch("http://localhost:3000/mockup-data/products.json", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setProductList(data);
      });
  }, []);

  return {
    productList,
    setProductList,
    checkList,
    setCheckList,
    onRemove,
    ChooseRemove,
    onAllRemove,
  };
};

export default useRemoveProduct;
