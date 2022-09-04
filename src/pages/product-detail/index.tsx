import { useEffect, useState } from "react";
import { getData } from "../../api/product.api";
import { useRecoilState } from "recoil";
import * as S from "./style/product-detail.style";
import SubImgContainer from "./SubImgContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronUp,
  faChevronDown,
  faX,
} from "@fortawesome/free-solid-svg-icons";
const ProductDetailPage = () => {
  const [dropDown, setDropDown] = useState(false);
  const usingDropDown = () => {
    setDropDown(!dropDown);
  };
  return (
    <>
      <S.Container>
        <S.HomePath to="/">Home &gt;</S.HomePath>
        <S.HomePath to="/fruitstore/"> FRUITTE STORE</S.HomePath>
        <S.ProductContainer>
          <S.ProductImgContainer>
            <S.ProductImg src="https://cdn.imweb.me/thumbnail/20220622/86ef7e10d9f73.jpg" />
            <SubImgContainer />
          </S.ProductImgContainer>
          <S.ProductDescriptionContainer>
            <S.DescriptionTitle>블루베리 1kg</S.DescriptionTitle>
            <S.TagContainer>
              <S.DescriptionSaleTag>SALE</S.DescriptionSaleTag>
              <S.DescriptionBestTag>BEST</S.DescriptionBestTag>
              <S.DescriptionMDTag>MD</S.DescriptionMDTag>
              <S.DescriptionWatingTag>판매대기</S.DescriptionWatingTag>
            </S.TagContainer>
            <S.PriceContainer>
              <S.ProductPrice>30000원</S.ProductPrice>
              <S.ProductSalePrice>29000원</S.ProductSalePrice>
            </S.PriceContainer>
            <S.ProductDescription>
              미생물을 이용한 친환경 농법으로 길러 더욱 맛있는 국내산 친환경 생
              아스파라거스
            </S.ProductDescription>
            <S.ProductLocationContainer>
              <S.ProductLocation>
                원산지 <S.ProductData>강원도 화천군</S.ProductData>
              </S.ProductLocation>
              <S.HowToDelivery>
                배송방법 <S.ProductData>택배</S.ProductData>
              </S.HowToDelivery>
              <S.DeliveryFee>
                배송비 <S.ProductData>4000원</S.ProductData>
              </S.DeliveryFee>
              <S.ChoiceTitle>필수선택 *</S.ChoiceTitle>
              <S.ChoiceOptionBox onClick={usingDropDown}>
                필수선택(필수)
                {dropDown ? (
                  <FontAwesomeIcon icon={faChevronDown} />
                ) : (
                  <FontAwesomeIcon icon={faChevronUp} />
                )}
              </S.ChoiceOptionBox>
              {!dropDown ? (
                <S.Option>
                  <S.OptionName>1kg</S.OptionName>
                  <S.OptionPrice>20000원</S.OptionPrice>
                </S.Option>
              ) : (
                ""
              )}
              <S.SelectInfo>
                <S.SelectTitle>
                  1kg{" "}
                  <S.OptionCloseButton>
                    <FontAwesomeIcon icon={faX} />
                  </S.OptionCloseButton>
                </S.SelectTitle>
                <S.SelectQuantity>
                  <S.QuantityContainer>
                    <S.QuantityMinusButton>-</S.QuantityMinusButton>
                    <S.Quantity>1</S.Quantity>
                    <S.QuantityPlusButton>+</S.QuantityPlusButton>
                  </S.QuantityContainer>
                  <S.TotalPrice>30000원</S.TotalPrice>
                </S.SelectQuantity>
              </S.SelectInfo>
            </S.ProductLocationContainer>
          </S.ProductDescriptionContainer>
        </S.ProductContainer>
        <S.ProductDetailContainer>
          <S.Detail>상세정보</S.Detail>
          <S.Detail>구매평(0)</S.Detail>
          <S.Detail>Q&A(0)</S.Detail>
        </S.ProductDetailContainer>
      </S.Container>
    </>
  );
};

export default ProductDetailPage;
