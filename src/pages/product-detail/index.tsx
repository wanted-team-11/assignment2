import { useState } from "react";
import { useRecoilValue } from "recoil";
import * as S from "./style/product-detail.style";
import ImageContainer from "./ImageContainer";
import { productListAtom } from "../fruitstore/store/product.store";
import { useParams } from "react-router-dom";
import { Product, Tag } from "../order/types";
import Description from "./Description";

const ProductDetailPage = () => {
  const params = useParams();
  const [dropDown, setDropDown] = useState(false);
  const productData: Product[] = useRecoilValue(productListAtom);

  const usingDropDown = () => {
    setDropDown(!dropDown);
  };
  return (
    <>
      <S.Container>
        <S.HomePath to="/">Home &gt;</S.HomePath>
        <S.HomePath to="/fruitstore/"> FRUITTE STORE</S.HomePath>
        <S.ProductContainer>
          {productData.map((item) => {
            return params.id === item.id.toString() ? (
              <ImageContainer
                key={item.id}
                id={item.id}
                imageUrls={item.imageUrls}
                name={item.name}
                originalPrice={item.originalPrice}
                dcPrice={item.dcPrice}
                deliveryFee={item.deliveryFee}
                freeShippingCondition={item.freeShippingCondition}
                likeCount={item.likeCount}
                location={item.location}
                description={item.description}
                options={item.options}
                tags={item.tags}
                visible={item.visible}
              />
            ) : (
              ""
            );
          })}
          <S.ProductDescriptionContainer>
            {productData.map((item) => {
              return params.id === item.id.toString() ? (
                <Description
                  key={item.id}
                  id={item.id}
                  imageUrls={item.imageUrls}
                  name={item.name}
                  originalPrice={item.originalPrice}
                  dcPrice={item.dcPrice}
                  deliveryFee={item.deliveryFee}
                  freeShippingCondition={item.freeShippingCondition}
                  likeCount={item.likeCount}
                  location={item.location}
                  description={item.description}
                  options={item.options}
                  tags={item.tags}
                  visible={item.visible}
                />
              ) : (
                ""
              );
            })}
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
