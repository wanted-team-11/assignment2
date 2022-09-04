import * as S from "./style/product-detail.style";
import React from "react";
import { useState } from "react";
import {
  faChevronUp,
  faChevronDown,
  faX,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRecoilState } from "recoil";
import { quantityAtom } from "./store/price.store";

type Options = {
  stockCount: number;
  name: string;
  price: number;
};

type DescriptionProps = {
  id: number;
  name: string;
  originalPrice: number;
  dcPrice: number;
  deliveryFee: number;
  options: Options[];
  tags: string[];
  freeShippingCondition: number;
  likeCount: number;
  location: string;
  visible: boolean;
  description: string;
};

const Description = ({
  id,
  name,
  originalPrice,
  dcPrice,
  deliveryFee,
  options,
  freeShippingCondition,
  likeCount,
  location,
  description,
  visible,
  tags,
}: DescriptionProps) => {
  const [dropDown, setDropDown] = useState(false);
  const [except, setExcept] = useState(false);
  const [addCart, setAddCart] = useState<Options[]>([]);
  const [isDisabled, setIsDisabled] = useState(false);
  const [optionPrice, setOptionPrice] = useState({});
  const [quantity, setQuantity] = useRecoilState(quantityAtom);
  const [values, setValues] = useState({});

  const usingDropDown = () => {
    setDropDown(!dropDown);
  };

  const addToCart = (option: Options) => {
    addCart.push(option);
    console.log(addCart);
  };
  const onClickExcept = () => {
    setExcept(!except);
  };

  console.log(quantity);

  const plusQuantity = () => {
    if (quantity > 0) {
      setIsDisabled(false);
      return setQuantity(quantity + 1);
    }
  };
  const minusQuantity = () => {
    if (quantity === 1) {
      setIsDisabled(true);
      return setQuantity(quantity - 1);
    }
  };

  const makeComma = (price: number) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  return (
    <>
      <S.DescriptionTitle>{name}</S.DescriptionTitle>
      <S.TagContainer>
        {tags.map((el) => {
          return <S.ItemTag type={el}>{el}</S.ItemTag>;
        })}
      </S.TagContainer>

      <S.PriceContainer>
        <S.ProductPrice>{makeComma(originalPrice)}원</S.ProductPrice>
        <S.ProductSalePrice>{makeComma(dcPrice)}원</S.ProductSalePrice>
      </S.PriceContainer>
      <S.ProductDescription>{description}</S.ProductDescription>
      <S.ProductLocationContainer>
        <S.ProductLocation>
          원산지 <S.ProductData>{location}</S.ProductData>
        </S.ProductLocation>
        <S.HowToDelivery>
          배송방법 <S.ProductData>택배</S.ProductData>
        </S.HowToDelivery>
        <S.DeliveryFee>
          배송비 <S.ProductData>{makeComma(deliveryFee)}원</S.ProductData>
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
        {dropDown &&
          options.map((option: Options) => {
            return (
              <S.Option
                onClick={() => {
                  addToCart(option);
                }}
              >
                <S.OptionName>{option.name}</S.OptionName>
                <S.OptionPrice>{makeComma(option.price)}원</S.OptionPrice>
              </S.Option>
            );
          })}

        {!except &&
          options.map((option) => {
            return (
              <S.SelectInfo>
                <S.SelectTitle>
                  {option.name}
                  <S.OptionCloseButton onClick={onClickExcept}>
                    <FontAwesomeIcon icon={faX} />
                  </S.OptionCloseButton>
                </S.SelectTitle>
                <S.SelectQuantity>
                  <S.QuantityContainer>
                    <S.QuantityMinusButton
                      onClick={minusQuantity}
                      disabled={isDisabled}
                    >
                      -
                    </S.QuantityMinusButton>
                    <S.Quantity>{quantity}</S.Quantity>
                    <S.QuantityPlusButton onClick={plusQuantity}>
                      +
                    </S.QuantityPlusButton>
                  </S.QuantityContainer>
                  <S.TotalPrice>{makeComma(dcPrice * quantity)}원</S.TotalPrice>
                </S.SelectQuantity>
              </S.SelectInfo>
            );
          })}

        <S.TotalPriceContainer>
          <S.TotalPriceCounter>총 상품금액 ({quantity})개</S.TotalPriceCounter>
          <S.LastTotalPrice>10000원</S.LastTotalPrice>
        </S.TotalPriceContainer>
        <S.ButtonContainer>
          <S.PurchaseButton>구매하기</S.PurchaseButton>
          <S.CartButton>장바구니</S.CartButton>
          <S.LikeButton>
            <FontAwesomeIcon icon={faHeart} /> {likeCount}
          </S.LikeButton>
        </S.ButtonContainer>
      </S.ProductLocationContainer>
    </>
  );
};

export default Description;
