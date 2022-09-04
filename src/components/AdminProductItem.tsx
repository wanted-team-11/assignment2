import { useEffect, useState, Dispatch, SetStateAction } from "react";
import { Product } from "../types/types";
import * as S from "./styles/AdminProductItem.styled";

const AdminProductItem = ({
  product,
  removeOneProduct,
  toggleProduct,
  checkList,
  setCheckList,
}: {
  product: Product;
  removeOneProduct: (id: number) => void;
  toggleProduct: (id: number) => void;
  checkList: number[];
  setCheckList: Dispatch<SetStateAction<number[]>>;
}) => {
  const { imageUrls, name, visible, id } = product;

  const img = imageUrls[0];
  const [visibleText, setVisibleText] = useState<string | undefined>(undefined);
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckList = (id: number) => {
    if (checkList.includes(id)) {
      const newCheckList = checkList.filter((checkedId) => {
        return checkedId !== id;
      });
      setCheckList(newCheckList);
      setIsChecked(!isChecked);
    } else {
      setCheckList([...checkList, id]);
      setIsChecked(!isChecked);
    }
  };

  useEffect(() => {
    if (visible === false) {
      setVisibleText("노출");
    } else {
      setVisibleText("숨김");
    }
  }, [visible]);

  useEffect(() => {
    if (checkList.includes(id)) {
      setIsChecked(true);
    } else {
      setIsChecked(false);
    }
  }, [checkList]);

  return (
    <S.Wrapper>
      <S.CheckBox
        type="checkbox"
        checked={isChecked}
        onChange={() => handleCheckList(id)}
      />
      <S.Img src={img} alt="상품 이미지" />
      <S.ProductName>{name}</S.ProductName>
      <S.Buttons>
        <S.Button
          onClick={() => {
            if (visible && window.confirm(`${name}를 숨기시겠습니까?`)) {
              toggleProduct(id);
            } else if (
              !visible &&
              window.confirm(`${name}를 노출시키시겠습니까?`)
            ) {
              toggleProduct(id);
            }
          }}
        >
          {visibleText}
        </S.Button>
        <S.Button
          onClick={() => {
            if (window.confirm(`${name}를 삭제하시겠습니까?`)) {
              removeOneProduct(id);
            }
          }}
        >
          삭제
        </S.Button>
      </S.Buttons>
    </S.Wrapper>
  );
};

export default AdminProductItem;
