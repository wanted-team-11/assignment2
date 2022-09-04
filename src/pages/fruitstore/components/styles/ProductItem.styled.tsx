import styled from "styled-components";

export const ProductsListWrapper = styled.div`
  width: 1260px;
  margin: 0 auto;
  border: 1px solid red;
`;

export const ProductsListContainer = styled.div`
  display: grid;
  width: inherit;
  grid-template-columns: repeat(5, minmax(10px, auto));
  gap: 20px;
  row-gap: 30px;
`;

export const ProductThumbnailWrapper = styled.div`
  width: 244px;
  height: 244px;
`;

export const ItemsWrapper = styled.div``;

export const ProductThumbnail = styled.img`
  width: inherit;
  height: inherit;
  cursor: pointer;
`;

export const ProductDescriptionWrapper = styled.div``;

export const ProductName = styled.p`
  cursor: pointer;
`;

export const PriceInfoWrapper = styled.div``;

export const OriginalPrice = styled.span`
  margin-left: 40px;
  text-decoration: line-through;
  color: #999999;
`;

export const DcPrice = styled.span``;

export const DescriptionSaleTag = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 25px;
  background-color: red;
  color: white;
  font-size: 13px;
  margin-left: 7px;
`;

export const DescriptionBestTag = styled(DescriptionSaleTag)`
  background-color: white;
  color: red;
  border: 1px solid gray;
`;

export const DescriptionMDTag = styled(DescriptionBestTag)`
  color: black;
`;

export const DescriptionWatingTag = styled(DescriptionBestTag)`
  width: 60px;
  color: black;
`;
