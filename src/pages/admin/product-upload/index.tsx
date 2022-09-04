import { ChangeEvent, useState } from "react";
import styled from "styled-components";
import AdminThumbNail from "../../../components/AdminThumbNail";
import AdminModal from "../../../components/AdminModal";
import useAdminInput from "../../../hooks/useAdminInput";
import AdminOptionItem from "../../../components/AdminOptionItem";
import { Product } from "../../../types/orderTypes";
import { useNavigate } from "react-router-dom";

interface Option {
  stockCount: number;
  name: string;
  price: number;
}

const AdminUploadPage = () => {
  const navigate = useNavigate();
  const dcPrice = useAdminInput(0);
  const originPrice = useAdminInput(10000);
  const deliveryFee = useAdminInput(0);
  const freeShippingCondition = useAdminInput(0);

  const imgUrl = useAdminInput("");
  const location = useAdminInput("");
  const description = useAdminInput("");
  const productName = useAdminInput("");

  const stockCount = useAdminInput(0);
  const optionName = useAdminInput("");
  const optionPrice = useAdminInput(0);

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

  const onClickUploadProduct = () => {
    const newID = Date.now();
    const productObj: Product = {
      id: newID,
      imageUrls: imgUrlList,
      name: productName.value,
      tags: [],
      dcPrice: dcPrice.value,
      originalPrice: originPrice.value,
      description: description.value,
      likeCount: 0,
      options: optionList,
      location: location.value,
      deliveryFee: deliveryFee.value,
      freeShippingCondition: freeShippingCondition.value,
      visible: visible,
    };
    console.log(productObj);
    navigate("/");
  };

  return (
    <Container>
      <Header>
        <h1>상품 등록</h1>
        <SubmitButton onClick={onClickUploadProduct}>SAVE</SubmitButton>
      </Header>
      <HR />
      <section>
        <StickyContainer>
          <PricingInfoBox>
            <h3>가격 정보</h3>
            <label>원가</label>
            <Input
              type="currency"
              value={originPrice.value.toLocaleString("KR", {
                style: "currency",
                currency: "KRW",
              })}
              onChange={originPrice.onChange}
              placeholder="내용을 입력해주세요"
            />
            <label>할인가</label>
            <Input
              type="currency"
              onChange={dcPrice.onChange}
              placeholder="내용을 입력해주세요"
            />
            <label>배송비</label>
            <Input
              type="currency"
              onChange={deliveryFee.onChange}
              placeholder="내용을 입력해주세요"
            />
            <label>무료배송조건비용</label>
            <Input
              type="currency"
              onChange={freeShippingCondition.onChange}
              placeholder="내용을 입력해주세요"
            />
          </PricingInfoBox>
          <PricingInfoBox>
            <h3>Visible Status</h3>
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
          <h3>기본 정보</h3>
          <label>상품명</label>
          <Input
            type="text"
            value={productName.value}
            onChange={productName.onChange}
            placeholder="내용을 입력해 주세요"
          />
          <label>이미지 업로드</label>
          <span>
            <Input
              type="text"
              value={imgUrl.value}
              onChange={imgUrl.onChange}
              placeholder="내용을 입력해 주세요"
            />
            <AddImgButton onClick={onClickUploadImg}>+</AddImgButton>
          </span>

          <ul>
            {imgUrlList.length ? (
              imgUrlList.map((item, index) => (
                <AdminThumbNail
                  key={`imgUrl-${index}`}
                  item={item}
                  onClickRemoveImg={onClickRemoveImg}
                />
              ))
            ) : (
              <p>이미지를 등록해 주세요</p>
            )}
          </ul>

          <label>원산지</label>
          <Input
            type="text"
            value={location.value}
            onChange={location.onChange}
            placeholder="내용을 입력해 주세요"
          />
          <label>상품설명</label>
          <Input
            type="text"
            value={description.value}
            onChange={description.onChange}
            placeholder="내용을 입력해 주세요"
          />
          <AddOptionButton onClick={onClickAddOptionButton}>
            옵션추가
          </AddOptionButton>
          {optionList.length ? (
            <TableContainer>
              <thead>
                <tr>
                  <TH>옵션명</TH>
                  <TH>옵션가격</TH>
                  <TH>옵션수량</TH>
                  <TH>삭제</TH>
                </tr>
              </thead>
              <tbody>
                {optionList.map((option, index) => (
                  <AdminOptionItem
                    key={`option-${index}`}
                    option={option}
                    onClickRemoveOption={onClickRemoveOption}
                  />
                ))}
              </tbody>
            </TableContainer>
          ) : (
            <OptionText>해당 상품의 옵션이 없습니다.</OptionText>
          )}
        </StaticContainer>
      </section>
      {modalState && (
        <AdminModal setModalState={setModalState}>
          <h3>옵션추가</h3>
          <label>옵션이름</label>
          <Input
            type="text"
            value={optionName.value}
            onChange={optionName.onChange}
            placeholder="내용을 입력해 주세요"
          />
          <label>옵션가격</label>
          <Input
            type="currency"
            value={optionPrice.value.toLocaleString("KR", {
              style: "currency",
              currency: "KRW",
            })}
            onChange={optionPrice.onChange}
            placeholder="내용을 입력해주세요"
          />
          <label>옵션개수</label>
          <Input
            type="number"
            min="1"
            value={stockCount.value}
            onChange={stockCount.onChange}
            placeholder="내용을 입력해 주세요"
          />
          <SubmitButton onClick={onClickAddOption}>추가</SubmitButton>
        </AdminModal>
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
    justify-content: flex-start;
    flex-wrap: wrap;
    width: auto;
    min-height: 200px;

    border: 2px;
    border-radius: 10px;
    border-color: #b9b9b9;
    border-style: dashed;
    p {
      color: #b9b9b9;
      width: 100%;
      line-height: 200px;
      text-align: center;
      margin: 0;
    }
    li {
      margin: 5px;
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

const AddOptionButton = styled(SubmitButton)`
  width: 100%;
  font-weight: bold;
  background-color: #b9b9b9;
`;

const AddImgButton = styled(AddOptionButton)`
  width: 32px;
  height: 32px;
`;

const OptionText = styled.div`
  width: auto;
  min-height: 200px;
  border: 2px;
  border-radius: 10px;
  color: #b9b9b9;
  border-color: #b9b9b9;
  border-style: dashed;
  line-height: 200px;
  text-align: center;
  margin: 0;
`;

const HR = styled.hr`
  width: 100%;
`;

const TableContainer = styled.table`
  width: 100%;
  border-top: 1px solid #444444;
  border-collapse: collapse;
  overflow-x: hidden;
`;

const TH = styled.th`
  border-bottom: 1px solid #444444;
  padding: 10px;
  text-align: center;
`;

const Input = styled.input`
  width: 250px;
  height: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 0;
  margin-bottom: 10px;
`;
