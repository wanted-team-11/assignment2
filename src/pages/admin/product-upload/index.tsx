import { ChangeEvent, useCallback, useState } from "react";
import styled from "styled-components";
import ThumbNail from "./components/ThumNail";
import Modal from "./components/Modal";
import useInput from "./hooks/useInput";
import OptionItem from "./components/OptionItem";

interface Option {
  stockCount: number;
  name: string;
  price: number;
}

const AdminUploadPage = () => {
  const dcPrice = useInput(0);
  const originPrice = useInput(10000);
  const deliveryFee = useInput(0);
  const freeShippingCondition = useInput(0);

  const imgUrl = useInput("");
  const location = useInput("");
  const description = useInput("");
  const productName = useInput("");

  const stockCount = useInput(0);
  const optionName = useInput("");
  const optionPrice = useInput(0);

  const [visible, setVisible] = useState<boolean>(true);
  const [modalState, setModalState] = useState<boolean>(false);

  const [imgUrlList, setImgUrlList] = useState<string[]>([]);
  const [optionList, setOptionList] = useState<Option[]>([]);

  const onChangeVisible = (event: ChangeEvent<HTMLInputElement>) => {
    setVisible(event.currentTarget.checked);
  };
  const onClickUploadImg = () => {
    setImgUrlList((prev) => [...prev, imgUrl.value]);
    imgUrl.resetValue();
  };
  const onClickRemoveImg = (url: string) => {
    setImgUrlList((prev) => prev.filter((item) => item !== url));
  };

  const onClickAddOptionButton = () => {
    setModalState(true);
  };

  const onClickAddOption = () => {
    const newOption = {
      stockCount: stockCount.value,
      name: optionName.value,
      price: optionPrice.value,
    };
    setOptionList((prev) => [...prev, newOption]);
    setModalState(false);
    stockCount.resetValue();
    optionName.resetValue();
    optionPrice.resetValue();
  };

  const onClickRemoveOption = (option: Option) => {
    setOptionList((prev) => prev.filter((item) => item.name !== option.name));
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
          <PricingInfoBox>
            <h3>Pricing Info</h3>
            <label>원가</label>
            <input
              type="currency"
              value={originPrice.value.toLocaleString("KR", {
                style: "currency",
                currency: "KRW",
              })}
              onChange={originPrice.onChange}
              placeholder="내용을 입력해주세요"
            />
            <label>할인가</label>
            <input
              type="currency"
              onChange={dcPrice.onChange}
              placeholder="내용을 입력해주세요"
            />
            <label>배송비</label>
            <input
              type="currency"
              onChange={deliveryFee.onChange}
              placeholder="내용을 입력해주세요"
            />
            <label>무료배송조건비용</label>
            <input
              type="currency"
              onChange={freeShippingCondition.onChange}
              placeholder="내용을 입력해주세요"
            />
          </PricingInfoBox>
          <PricingInfoBox>
            <h3>Visibility Status</h3>
            <label>
              <input
                type="checkbox"
                defaultChecked={visible}
                onChange={onChangeVisible}
              />
              visible
            </label>
          </PricingInfoBox>
        </StickyContainer>
        <StaticContainer>
          <h3>Basic Information</h3>
          <label>상품명</label>
          <input
            type="text"
            value={productName.value}
            onChange={productName.onChange}
            placeholder="내용을 입력해 주세요"
          />
          <label>이미지 업로드</label>
          <span>
            <input
              type="text"
              value={imgUrl.value}
              onChange={imgUrl.onChange}
              placeholder="내용을 입력해 주세요"
            />
            <button onClick={onClickUploadImg}>+</button>
          </span>
          {imgUrlList.length ? (
            <ul>
              {imgUrlList.map((item, index) => (
                <ThumbNail
                  key={`imgUrl-${index}`}
                  item={item}
                  onClickRemoveImg={onClickRemoveImg}
                />
              ))}
            </ul>
          ) : (
            <p>이미지를 추가해 주세요</p>
          )}

          <label>원산지</label>
          <input
            type="text"
            value={location.value}
            onChange={location.onChange}
            placeholder="내용을 입력해 주세요"
          />
          <label>상품설명</label>
          <input
            type="text"
            value={description.value}
            onChange={description.onChange}
            placeholder="내용을 입력해 주세요"
          />
          <button onClick={onClickAddOptionButton}>옵션추가</button>
          <ul>
            {optionList.map((option, index) => (
              <OptionItem
                key={`option-${index}`}
                option={option}
                onClickRemoveOption={onClickRemoveOption}
              />
            ))}
          </ul>
        </StaticContainer>
      </section>
      {modalState && (
        <Modal setModalState={setModalState}>
          <h3>옵션추가</h3>
          <label>옵션이름</label>
          <input
            type="text"
            value={optionName.value}
            onChange={optionName.onChange}
            placeholder="내용을 입력해 주세요"
          />
          <label>옵션가격</label>
          <input
            type="currency"
            value={optionPrice.value.toLocaleString("KR", {
              style: "currency",
              currency: "KRW",
            })}
            onChange={optionPrice.onChange}
            placeholder="내용을 입력해주세요"
          />
          <label>옵션개수</label>
          <input
            type="number"
            min="1"
            value={stockCount.value}
            onChange={stockCount.onChange}
            placeholder="내용을 입력해 주세요"
          />
          <SubmitButton onClick={onClickAddOption}>추가</SubmitButton>
        </Modal>
      )}
    </Container>
  );
};
export default AdminUploadPage;

const PricingInfoBox = styled.div`
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
  ul {
    display: flex;
    flex-direction: row;
    overflow-x: scroll;
    gap: 4px;
    li {
      list-style: none;
    }
  }
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
