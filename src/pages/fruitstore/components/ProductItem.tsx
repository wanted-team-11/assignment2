import { useNavigate } from "react-router-dom";
import * as S from "./styles/ProductItem.styled";
import { useRecoilValue } from "recoil";
import { productListAtom } from "../store/product.store";

const ProductItem = () => {
  const navigate = useNavigate();
  const products = useRecoilValue(productListAtom);

  const goToDetail = (id: number) => {
    navigate(`/product-detail/${id}`);
  };

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
            <S.ItemsWrapper key={idx}>
              <div
                onClick={() => {
                  goToDetail(el.id);
                }}
              >
                <S.ProductThumbnailWrapper>
                  <S.ProductThumbnail src={el.imageUrls[0]} alt={el.name} />
                </S.ProductThumbnailWrapper>
                <S.ProductDescriptionWrapper>
                  <S.ProductName>{el.name}</S.ProductName>
                </S.ProductDescriptionWrapper>
              </div>
              <S.PriceInfoWrapper>
                <S.DcPrice>{dcPriceWithRegex}원</S.DcPrice>
                <S.OriginalPrice>{origianlPriceWithRegex}원</S.OriginalPrice>
              </S.PriceInfoWrapper>
              <S.ItemTagWrapper>
                {el.tags.map((el, idx) => (
                  <S.ItemTag key={idx} type={el}>
                    {el}
                  </S.ItemTag>
                ))}
              </S.ItemTagWrapper>
            </S.ItemsWrapper>
          );
        })}
      </S.ProductsListContainer>
    </S.ProductsListWrapper>
  );
};

export default ProductItem;
