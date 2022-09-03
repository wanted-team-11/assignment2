import { useState } from "react";
import styled from "styled-components";
const AdminUploadPage = () => {
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [name, setName] = useState<string>();
  const [location, setLocation] = useState<string>();
  const [dcPrice, setDcPrice] = useState<number>(0);
  const [originalPrice, setOriginalPrice] = useState<number>(0);
  const [deliveryFee, setDeliveryFee] = useState<number>(0);
  const [freeShippingCondition, setFreeShippingCondition] = useState<number>(0);
  const [visible, setVisible] = useState<boolean>(true);

  return (
    <Container>
      <UploadBox>+</UploadBox>
      <DescribtioniTextArea placeholder="제품 설명" />
      <InfoRegistrationDiv>
        <Input placeholder="제목" />
        <Input placeholder="지역" />
        <Input placeholder="가격" />
        <Input placeholder="할인가" />
        <Input placeholder="옵션" />
        <Input placeholder="배송비" />
        <Input placeholder="무료배송 최소 주문가격" />
        <Input placeholder="수량" />
      </InfoRegistrationDiv>
      <SubmitButton>Submit</SubmitButton>
    </Container>
  );
};
export default AdminUploadPage;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const UploadBox = styled.button`
  background-color: transparent;
  width: 400px;
  height: 200px;
  border-radius: 10px;
  border-color: gray;
  border-style: dashed;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  cursor: pointer;
`;

const Input = styled.input`
  width: 190px;
  height: 40px;
  border: 1px solid gray;
  border-radius: 5px;
`;
const DescribtioniTextArea = styled.textarea`
  min-width: 400px;
  max-width: 400px;
  min-height: 100px;
  max-height: 200px;
`;
const InfoRegistrationDiv = styled.div`
  display: flex;
  width: 400px;
  height: fit-content;
  flex-wrap: wrap;
  gap: 8px;
`;
const SubmitButton = styled.button`
  width: 400px;
  height: 40px;
  border-radius: 5px;
  background-color: green;
  color: white;
  font-size: 2rem;
  font-weight: bold;
  border-style: none;
  cursor: pointer;
`;
