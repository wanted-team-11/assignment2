import styled from "styled-components";
import * as S from "./style/product-detail.style";

import React from "react";

const SubImgContainer = () => {
  return (
    <div>
      <S.SubImgContainer>
        <S.ProductSubImg />
        <S.ProductSubImg />
        <S.ProductSubImg />
        <S.ProductSubImg />
        <S.ProductSubImg />
        <S.ProductSubImg />
      </S.SubImgContainer>
    </div>
  );
};

export default SubImgContainer;
