import { useEffect, useState, Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import { Product } from "../types/types";

const AdminProductItem = ({
  product,
  onRemove,
  toggleProduct,
  checkList,
  setCheckList,
}: {
  product: Product;
  onRemove: (id: number) => void;
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
    <Wrapper>
      <CheckBox
        type="checkbox"
        checked={isChecked}
        onChange={() => handleCheckList(id)}
      />
      <Img src={img} alt="상품 이미지" />
      <ProductName>{name}</ProductName>
      <Buttons>
        <Button
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
        </Button>
        <Button
          onClick={() => {
            if (window.confirm(`${name}를 삭제하시겠습니까?`)) {
              onRemove(id);
            }
          }}
        >
          삭제
        </Button>
      </Buttons>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  position: relative;
  width: 50vw;
  min-width: 420px;
  height: 80px;
  margin: 30px auto;
  border: 1px solid gray;
`;

const CheckBox = styled.input`
  width: 24px;
  height: 24px;
  margin: 6px 10px 4px;
  position: relative;
  top: 20px;
  cursor: pointer;
`;

const Img = styled.img`
  height: 80px;
  object-fit: cover;
`;

const ProductName = styled.p`
  display: flex;
  align-items: center;
  margin: 10px 100px 10px 10px;
`;

const Buttons = styled.div`
  display: flex;
  position: absolute;
  right: 10px;
  top: 10px;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 4px;
  width: fit-content;
  height: 50px;
  border: 1px solid gray;
  border-radius: 4px;
  background-color: white;
  cursor: pointer;
`;

export default AdminProductItem;
