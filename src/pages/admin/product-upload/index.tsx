import { ChangeEvent, useState } from "react";
import styled from "styled-components";
import useInput from "./hooks/useInput";

interface Option {
  stockCount: number;
  name: string;
  price: number;
}

const AdminUploadPage = () => {
  const dcPrice = useInput(0);
  const originPrice = useInput(0);
  const deliveryFee = useInput(0);
  const freeShippingCondition = useInput(0);

  const imgUrl = useInput("");
  const location = useInput("");
  const description = useInput("");
  const productName = useInput("");

  const [visible, setVisible] = useState<boolean>(true);
  const [imgUrlList, setImgUrlList] = useState<string[]>([]);
  const [optionList, setOptionList] = useState<Option[]>([]);

  const onChangeVisible = (event: ChangeEvent<HTMLInputElement>) => {
    setVisible(event.currentTarget.checked);
  };
  const onClickUploadImg = () => {
    setImgUrlList((prev) => [...prev, imgUrl.value]);
  };
  return (
    <Container>
      <Header>
        <h1>Products Add</h1>
        <SubmitButton>SAVE</SubmitButton>
      </Header>
      <HR />
      <section>
        <StickyContainer>
          <PricingInofBox>
            <h3>Pricing Info</h3>
            <label>원가</label>
            <input
              type="number"
              min={0}
              {...originPrice}
              placeholder="내용을 입력해주세요"
            />
            <label>할인가</label>
            <input
              min={0}
              type="text"
              {...dcPrice}
              placeholder="내용을 입력해주세요"
            />
            <label>배송비</label>
            <input
              min={0}
              type="number"
              {...deliveryFee}
              placeholder="내용을 입력해주세요"
            />
            <label>무료배송조건비용</label>
            <input
              min={0}
              type="number"
              {...freeShippingCondition}
              placeholder="내용을 입력해주세요"
            />
          </PricingInofBox>
          <PricingInofBox>
            <h3>Visibility Status</h3>
            <label>
              <input
                type="checkbox"
                defaultChecked={visible}
                onChange={onChangeVisible}
              />
              visible
            </label>
          </PricingInofBox>
        </StickyContainer>
        <StaticContainer>
          <h3>Basic Information</h3>
          <label>상품명</label>
          <input
            type="text"
            {...productName}
            placeholder="내용을 입력해 주세요"
          />
          <label>이미지 업로드</label>
          <span>
            <input type="text" {...imgUrl} placeholder="내용을 입력해 주세요" />
            <button onClick={onClickUploadImg}>+</button>
          </span>
          <label>원산지</label>
          <input type="text" {...location} placeholder="내용을 입력해 주세요" />
          <label>상품설명</label>
          <input
            type="text"
            {...description}
            placeholder="내용을 입력해 주세요"
          />
          <button>옵션추가</button>
        </StaticContainer>
      </section>
    </Container>
  );
};
export default AdminUploadPage;

const PricingInofBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: fit-content;
  background-color: white;
  padding: 10px;
  gap: 10px;
  border: 1px solid #f0f0f0;
  border-radius: 3px;
`;
const StaticContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 62%;
  height: fit-content;
  background-color: white;
  border: 1px solid #f0f0f0;
  border-radius: 3px;
  gap: 10px;
  padding: 10px;
`;

const StickyContainer = styled.div`
  top: 50px;
  position: sticky;
  display: flex;
  flex-direction: column;
  width: 35%;
  height: 0;
  gap: 10px;
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f9fbfd;
  section {
    width: inherit;
    display: flex;
    flex-direction: row;
    gap: 10px;
  }
`;
const Header = styled.div`
  width: inherit;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  h1 {
    margin: 0px;
  }
`;

const SubmitButton = styled.button`
  width: 140px;
  height: 40px;
  border: none;
  border-radius: 5px;
  background-color: green;
  color: white;
  font-size: 14px;
  display: inline-block;
  font-weight: 400;
  line-height: 1.5;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
`;
const HR = styled.hr`
  width: 100%;
`;
