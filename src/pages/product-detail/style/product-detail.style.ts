import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  margin: 20px 130px;
`;

export const HomePath = styled(NavLink)`
  font-size: 23px;
  color: black;
  text-decoration: none;
  :hover {
    color: gray;
  }
`;

export const ProductContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProductImgContainer = styled.div`
  margin-top: 30px;
  margin-right: 100px;
`;
export const ProductImg = styled.img`
  width: 615px;
  height: 615px;
`;

export const SubImgContainer = styled.div`
  display: flex;
`;

export const ProductSubImg = styled.img`
  margin-top: 15px;
  cursor: pointer;
  width: 50px;
  height: 50px;
`;

export const ProductDescriptionContainer = styled.div`
  margin: 0 0 30px 50px;

  width: 700px;
  height: 615px;
`;

export const DescriptionTitle = styled.div`
  display: flex;
  align-items: center;
  font-size: 25px;
`;

export const TagContainer = styled.div`
  display: flex;
  margin: 20px 10px 10px 0;
`;

export const DescriptionSaleTag = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 25px;
  background-color: red;
  color: white;
  font-size: 13px;
  margin-left: 7px;
`;

export const DescriptionBestTag = styled(DescriptionSaleTag)`
  background-color: white;
  color: red;
  border: 1px solid gray;
`;

export const DescriptionMDTag = styled(DescriptionBestTag)`
  color: black;
`;

export const DescriptionWatingTag = styled(DescriptionBestTag)`
  width: 60px;
  color: black;
`;
export const ProductDetailContainer = styled.div`
  display: flex;

  margin-top: 450px;
`;
export const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #c7c7c7;
  padding-bottom: 20px;
  margin-bottom: 30px;
`;
export const ProductPrice = styled.div`
  margin-right: 10px;
  font-size: 30px;
  color: #80a72e;
`;

export const ProductDescription = styled.div`
  white-space: normal;
  width: 440px;
  height: 50px;
  color: black;
  font-size: 18px;
`;

export const ProductSalePrice = styled.div`
  font-size: 20px;
  text-decoration: line-through;
  color: gray;
`;

export const ProductLocationContainer = styled.div`
  margin-top: 40px;
`;

export const ProductLocation = styled.div`
  margin-right: 10px;
  font-weight: bold;
  font-size: 15px;
`;

export const HowToDelivery = styled.div`
  margin-right: 10px;
  font-weight: bold;
  font-size: 15px;
`;

export const ProductData = styled.span`
  font-weight: 300;
  font-size: 15px;
`;
export const DeliveryFee = styled(HowToDelivery)``;

export const ChoiceTitle = styled(HowToDelivery)`
  margin-bottom: 30px;
`;

export const ChoiceOptionBox = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 450px;
  height: 40px;
  font-size: 18px;
  background-color: white;
  text-align: left;

  cursor: pointer;
`;

export const Option = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 20px;
  width: 430px;
  height: 60px;
  border: 1px solid black;
  padding: 10px;
  :hover {
    background-color: #e1e1e1;
  }
`;

export const OptionName = styled.div`
  font-size: 18px;
`;
export const OptionPrice = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

export const SelectInfo = styled.div`
  margin-top: 20px;
  width: 425px;
  height: 115px;
  background-color: #f2f0ed;
  padding: 15px;
`;

export const OptionCloseButton = styled.button`
  font-size: 20px;
  border: none;
`;
export const SelectTitle = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  padding-bottom: 20px;
  border-bottom: 1px dotted grey;
`;

export const SelectQuantity = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const QuantityContainer = styled.div`
  display: flex;
  margin-top: 20px;
`;

export const QuantityPlusButton = styled.button`
  width: 25px;
  height: 22px;
`;

export const Quantity = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  width: 60px;
  height: 20px;
`;
export const QuantityMinusButton = styled(QuantityPlusButton)``;

export const TotalPrice = styled.div`
  font-size: 20px;
  margin-top: 10px;
`;

export const TotalPriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

export const TotalPriceCounter = styled.div`
  font-size: 20px;
`;

export const LastTotalPrice = styled.div`
  font-size: 20px;
`;
export const Detail = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border: 1px solid #f2f0ed;
  width: 505px;
  height: 40px;
  :hover {
    background-color: #f2f0ed;
  }
`;
