import * as S from "./styles/ProductItem.styled";
import { useRecoilValue } from "recoil";
import { productListAtom } from "../store/product.store";
import { Product } from "../../order/types";

const ProductItem = () => {
  const products: Product[] = useRecoilValue(productListAtom);

  return (
    <S.ProductsListWrapper>
      <S.ProductsListContainer>
        {products.map((el, idx) => {
          const origianlPriceWithRegex = el.originalPrice
            .toString()
            .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");

          const dcPriceWithRegex = el.dcPrice
            .toString()
            .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");

          return (
            <div>
              <S.ProductThumbnailWrapper key={idx}>
                <S.ProductThumbnail src={el.imageUrls[0]} alt="" />
              </S.ProductThumbnailWrapper>
              <S.ProductDescriptionWrapper>
                <S.ProductName>{el.name}</S.ProductName>
              </S.ProductDescriptionWrapper>
              <S.PriceInfoWrapper>
                <S.DcPrice>{dcPriceWithRegex}원</S.DcPrice>
                <S.OriginalPrice>{origianlPriceWithRegex}원</S.OriginalPrice>
              </S.PriceInfoWrapper>
            </div>
          );
        })}
      </S.ProductsListContainer>
    </S.ProductsListWrapper>
  );
};

export default ProductItem;
