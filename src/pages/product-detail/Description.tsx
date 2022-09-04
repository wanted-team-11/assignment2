import * as S from "./style/product-detail.style";
import React from "react";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import {
  faChevronUp,
  faChevronDown,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { productListAtom } from "../fruitstore/store/product.store";
import { Product, Tag } from "../order/types";
import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { quantityAtom } from "./store/price.store";

type Options = {
  stockCount: number;
  name: string;
  price: number;
};

const Description = (props: Product) => {
  const productData: Product[] = useRecoilValue(productListAtom);
  const [dropDown, setDropDown] = useState(false);
  const [addCart, setAddCart] = useState<Options>();
  const [optionPrice, setOptionPrice] = useState({});
  const [quantity, setQuantity] = useRecoilState(quantityAtom);
  const params = useParams();

  console.log(quantity);
  const usingDropDown = () => {
    setDropDown(!dropDown);
  };

  const plusQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const minusQuantity = () => {
    setQuantity((prev) => prev - 1);
  };

  const changeQuantity = () => {};
  return (
    <>
      <S.DescriptionTitle>{props.name}</S.DescriptionTitle>
      <S.TagContainer>
        <S.DescriptionSaleTag>SALE</S.DescriptionSaleTag>
        <S.DescriptionBestTag>BEST</S.DescriptionBestTag>
        <S.DescriptionMDTag>MD</S.DescriptionMDTag>
        <S.DescriptionWatingTag>판매대기</S.DescriptionWatingTag>
      </S.TagContainer>
      <S.PriceContainer>
        <S.ProductPrice>{props.originalPrice}원</S.ProductPrice>
        <S.ProductSalePrice>{props.dcPrice}원</S.ProductSalePrice>
      </S.PriceContainer>
      <S.ProductDescription>{props.description}</S.ProductDescription>
      <S.ProductLocationContainer>
        <S.ProductLocation>
          원산지 <S.ProductData>{props.location}</S.ProductData>
        </S.ProductLocation>
        <S.HowToDelivery>
          배송방법 <S.ProductData>택배</S.ProductData>
        </S.HowToDelivery>
        <S.DeliveryFee>
          배송비 <S.ProductData>{props.deliveryFee}원</S.ProductData>
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
        {dropDown
          ? props.options.map((option: Options) => {
              const addToCart = () => {
                setAddCart(option);
              };
              return (
                <S.Option
                  onClick={() => {
                    addToCart();
                  }}
                >
                  <S.OptionName>{option.name}</S.OptionName>
                  <S.OptionPrice>{option.price}원</S.OptionPrice>
                </S.Option>
              );
            })
          : ""}
        {props.options.map((option) => {
          return (
            <S.SelectInfo>
              <S.SelectTitle>
                {option.name}
                <S.OptionCloseButton>
                  <FontAwesomeIcon icon={faX} />
                </S.OptionCloseButton>
              </S.SelectTitle>
              <S.SelectQuantity>
                <S.QuantityContainer>
                  <S.QuantityMinusButton onClick={minusQuantity}>
                    -
                  </S.QuantityMinusButton>
                  <S.Quantity>{quantity}</S.Quantity>
                  <S.QuantityPlusButton onClick={plusQuantity}>
                    +
                  </S.QuantityPlusButton>
                </S.QuantityContainer>
                <S.TotalPrice>{props.dcPrice * quantity}원</S.TotalPrice>
              </S.SelectQuantity>
            </S.SelectInfo>
          );
        })}
        <S.TotalPriceContainer>
          <S.TotalPriceCounter>총 상품금액({quantity})개</S.TotalPriceCounter>
          <S.LastTotalPrice>10000원</S.LastTotalPrice>
        </S.TotalPriceContainer>
      </S.ProductLocationContainer>
    </>
  );
};

export default Description;
