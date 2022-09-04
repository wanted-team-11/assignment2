import * as S from "./style/product-detail.style";
import { Product } from "../order/types";
import React, { useState } from "react";

const ImageContainer = (props: Product) => {
  const [imageChange, setImageChange] = useState(0);
  const imageSelect = () => {
    setImageChange(1);
  };
  return (
    <S.ProductImgContainer>
      <S.ProductImg src={props.imageUrls[imageChange]} />
      <S.SubImgContainer>
        {props.imageUrls.map((image) => {
          return (
            <S.ProductSubImg onClick={imageSelect} key={image} src={image} />
          );
        })}
      </S.SubImgContainer>
    </S.ProductImgContainer>
  );
};

export default ImageContainer;
