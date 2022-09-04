import { useEffect, useState } from "react";
import styled from "styled-components";
import { getData } from "../../api/product.api";
import { useRecoilState } from "recoil";
import { NavLink } from "react-router-dom";

const ProductDetailPage = () => {
  const [productData, setProductData] = useState();
  useEffect(() => {
    getData(1);
  }, []);
  const fetchDate = () => {};
  return (
    <>
      <Container>
        <HomePath to="/">Home &gt;</HomePath>
        <HomePath to="/fruitstore/"> FRUITTE STORE</HomePath>
        <ProductContainer>
          <ProductImgContainer>
            <ProductImg src="https://cdn.imweb.me/thumbnail/20220622/86ef7e10d9f73.jpg" />
            <SubImgContainer>
              <ProductSubImg />
              <ProductSubImg />
              <ProductSubImg />
              <ProductSubImg />
              <ProductSubImg />
              <ProductSubImg />
            </SubImgContainer>
          </ProductImgContainer>

          <ProductDescriptionContainer>
            <DescriptionTitle>
              블루베리 1kg
              <DescriptionSaleTag>SALE</DescriptionSaleTag>
              <DescriptionBestTag>BEST</DescriptionBestTag>
              <DescriptionMDTag>MD</DescriptionMDTag>
              <DescriptionWatingTag>판매대기</DescriptionWatingTag>
            </DescriptionTitle>
            <PriceContainer>
              <ProductPrice>30000원</ProductPrice>
              <ProductSalePrice>29000원</ProductSalePrice>
            </PriceContainer>
          </ProductDescriptionContainer>
        </ProductContainer>
        <ProductDetailContainer>
          <Detail>상세정보</Detail>
          <Detail>구매평(0)</Detail>
          <Detail>Q&A(0)</Detail>
        </ProductDetailContainer>
      </Container>
    </>
  );
};

export default ProductDetailPage;

const S: any = {};

const Container = styled.div`
  margin: 20px 130px;
`;

const HomePath = styled(NavLink)`
  font-size: 23px;
  color: black;
  text-decoration: none;
`;

const ProductContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProductImgContainer = styled.div`
  margin-top: 30px;
  margin-right: 100px;
`;
const ProductImg = styled.img`
  width: 615px;
  height: 615px;
`;

const SubImgContainer = styled.div`
  display: flex;
`;

const ProductSubImg = styled.div`
  margin-top: 15px;
  background-color: coral;
  border: 1px solid black;
  width: 50px;
  height: 50px;
`;

const ProductDescriptionContainer = styled.div`
  margin: 0 0 30px 50px;

  border: 1px solid black;
  width: 700px;
  height: 615px;
`;

const DescriptionTitle = styled.div`
  display: flex;

  align-items: center;
  font-size: 25px;
`;

const DescriptionSaleTag = styled.div`
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

const DescriptionBestTag = styled(DescriptionSaleTag)`
  background-color: white;
  color: red;
  border: 1px solid gray;
`;

const DescriptionMDTag = styled(DescriptionBestTag)`
  color: black;
`;

const DescriptionWatingTag = styled(DescriptionBestTag)`
  width: 60px;
  color: black;
`;
const ProductDetailContainer = styled.div`
  display: flex;
  margin-top: 40px;
`;
const PriceContainer = styled.div`
  display: flex;
  align-items: center;
`;
const ProductPrice = styled.div`
  margin-right: 10px;
  font-size: 30px;
  color: #80a72e;
`;

const ProductSalePrice = styled.div`
  font-size: 20px;
  text-decoration: line-through;
  color: gray;
`;
const Detail = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border: 1px solid #f2f0ed;
  width: 505px;
  height: 40px;
`;
