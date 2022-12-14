import * as S from "./style/product-detail.style";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { selectedOptions } from "../../store/order.store";
import {
  faChevronUp,
  faChevronDown,
  faX,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Options = {
  stockCount: number;
  name: string;
  price: number;
};

type Item = {
  quantity: number;
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
  const [addCart, setAddCart] = useState<Item[]>([]);
  const [, setSelectedItems] = useRecoilState(selectedOptions);
  const navigate = useNavigate();

  const totalCount = addCart.reduce((prev, addedItem) => {
    return prev + addedItem.quantity;
  }, 0);

  const totalPrice = addCart.reduce((prev, addedItem) => {
    return prev + addedItem.price * addedItem.quantity;
  }, 0);

  const totalPriceText = Intl.NumberFormat().format(totalPrice);

  const usingDropDown = () => {
    setDropDown(!dropDown);
  };

  const addToCart = (option: Options) => {
    const { name, price, stockCount } = option;
    const item: Item = {
      quantity: 1,
      stockCount,
      name,
      price,
    };

    setAddCart((prev: Item[]) => {
      const sameOptions = prev.filter(
        (addedItem) => addedItem.name === item.name
      );
      if (sameOptions.length > 0) {
        return prev;
      }
      return [...prev, item];
    });
  };
  const onClickRemove = (item: Item) => {
    setAddCart((prev) =>
      prev.filter((addedItem) => addedItem.name !== item.name)
    );
  };

  const plusQuantity = (item: Item) => {
    setAddCart((prev) => {
      return prev.map((addedItem) => {
        if (addedItem.name === item.name) {
          return { ...addedItem, quantity: addedItem.quantity + 1 };
        } else {
          return addedItem;
        }
      });
    });
  };

  const minusQuantity = (item: Item) => {
    setAddCart((prev) => {
      return prev.map((addedItem) => {
        if (addedItem.name === item.name) {
          if (addedItem.quantity > 1) {
            return { ...addedItem, quantity: addedItem.quantity - 1 };
          } else {
            return addedItem;
          }
        } else {
          return addedItem;
        }
      });
    });
  };

  const purchase = () => {
    const selectedProducts = addCart.map((addedItem) => {
      const { name, stockCount, price, quantity } = addedItem;
      return {
        productId: id,
        selectedOption: {
          stockCount,
          name,
          price,
        },
        count: quantity,
      };
    });

    setSelectedItems(selectedProducts);
    navigate("/order");
  };

  const makeComma = (price: number) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <>
      <S.DescriptionTitle>{name}</S.DescriptionTitle>
      <S.TagContainer>
        {tags.map((el, index) => {
          return (
            <S.ItemTag type={el} key={el + index}>
              {el}
            </S.ItemTag>
          );
        })}
      </S.TagContainer>

      <S.PriceContainer>
        <S.ProductPrice>{makeComma(originalPrice)}???</S.ProductPrice>
        <S.ProductSalePrice>{makeComma(dcPrice)}???</S.ProductSalePrice>
      </S.PriceContainer>
      <S.ProductDescription>{description}</S.ProductDescription>
      <S.ProductLocationContainer>
        <S.ProductLocation>
          ????????? <S.ProductData>{location}</S.ProductData>
        </S.ProductLocation>
        <S.HowToDelivery>
          ???????????? <S.ProductData>??????</S.ProductData>
        </S.HowToDelivery>
        <S.DeliveryFee>
          ????????? <S.ProductData>{makeComma(deliveryFee)}???</S.ProductData>
        </S.DeliveryFee>
        <S.ChoiceTitle>???????????? *</S.ChoiceTitle>
        <S.ChoiceOptionBox onClick={usingDropDown}>
          ????????????(??????)
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
                key={option.name}
              >
                <S.OptionName>{option.name}</S.OptionName>
                <S.OptionPrice>{makeComma(option.price)}???</S.OptionPrice>
              </S.Option>
            );
          })}

        {!except &&
          addCart.map((item) => {
            return (
              <S.SelectInfo key={item.name}>
                <S.SelectTitle>
                  {item.name}
                  <S.OptionCloseButton onClick={() => onClickRemove(item)}>
                    <FontAwesomeIcon icon={faX} />
                  </S.OptionCloseButton>
                </S.SelectTitle>
                <S.SelectQuantity>
                  <S.QuantityContainer>
                    <S.QuantityMinusButton onClick={() => minusQuantity(item)}>
                      -
                    </S.QuantityMinusButton>
                    <S.Quantity>{item.quantity}</S.Quantity>
                    <S.QuantityPlusButton onClick={() => plusQuantity(item)}>
                      +
                    </S.QuantityPlusButton>
                  </S.QuantityContainer>
                  <S.TotalPrice>
                    {makeComma(item.price * item.quantity)}???
                  </S.TotalPrice>
                </S.SelectQuantity>
              </S.SelectInfo>
            );
          })}

        <S.TotalPriceContainer>
          <S.TotalPriceCounter>
            ??? ???????????? ({totalCount})???
          </S.TotalPriceCounter>
          <S.LastTotalPrice>{totalPriceText}???</S.LastTotalPrice>
        </S.TotalPriceContainer>
        <S.ButtonContainer>
          <S.PurchaseButton onClick={purchase}>????????????</S.PurchaseButton>
          <S.CartButton>????????????</S.CartButton>
          <S.LikeButton>
            <FontAwesomeIcon icon={faHeart} /> {likeCount}
          </S.LikeButton>
        </S.ButtonContainer>
      </S.ProductLocationContainer>
    </>
  );
};

export default Description;
