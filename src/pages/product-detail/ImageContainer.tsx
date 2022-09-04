import * as S from "./style/product-detail.style";
import { Product } from "../order/types";
import React, { useState } from "react";

type ImageContainerProps = {
  id: number;
  imageUrls: string[];
};

const ImageContainer = ({ imageUrls }: ImageContainerProps) => {
  const [imageChange, setImageChange] = useState(0);
  const imageSelect = (id: number) => {
    setImageChange(id);
  };
  return (
    <S.ProductImgContainer>
      <S.ProductImg src={imageUrls[imageChange]} />
      <S.SubImgContainer>
        {imageUrls.map((image, idx) => {
          return (
            <S.ProductSubImg
              onClick={() => {
                imageSelect(idx);
              }}
              key={idx}
              src={image}
            />
          );
        })}
      </S.SubImgContainer>
    </S.ProductImgContainer>
  );
};

export default ImageContainer;
