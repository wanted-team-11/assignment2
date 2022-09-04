import styled from "styled-components";

type Option = {
  stockCount: number;
  name: string;
  price: number;
};

type Tag = "SALE" | "BEST" | "MD" | "SOLDOUT" | "판매대기";

type Product = {
  id: number;
  imageUrls: string[];
  name: string;
  tags: Tag[];
  dcPrice: number;
  originalPrice: number;
  description: string;
  likeCount: number;
  options: Option[];
  location: string;
  deliveryFee: number;
  freeShippingCondition: number;
  visible: boolean;
};

const ProductItem = ({
  product,
  onRemove,
  onBehind,
}: {
  product: Product;
  onRemove: (id: number) => void;
  onBehind: (id: number) => void;
}) => {
  const { imageUrls, name } = product;
  const img = imageUrls[0];

  return (
    <Wrapper>
      <CheckBox type="checkbox" />
      <Img src={img} alt="상품 이미지" />
      <ProductName>{name}</ProductName>
      <Buttons>
        <Button
          onClick={() => {
            if (window.confirm(`${product.name}를 숨기시겠습니까?`)) {
              onBehind(product.id);
            }
          }}
        >
          숨김
        </Button>
        <Button
          onClick={() => {
            if (window.confirm(`${product.name}를 삭제하시겠습니까?`)) {
              onRemove(product.id);
            }
          }}
        >
          삭제
        </Button>
      </Buttons>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  position: relative;
  width: 100vw;
  height: 80px;
  margin: 30px;
  background-color: lightgray;
`;

const CheckBox = styled.input`
  width: 24px;
  height: 24px;
  margin: 6px 10px 4px;
  position: relative;
  top: 20px;
  cursor: pointer;
`;

const Img = styled.img`
  height: 80px;
  object-fit: cover;
`;

const ProductName = styled.p`
  display: flex;
  align-items: center;
  margin: 10px;
`;

const Buttons = styled.div`
  display: flex;
  position: absolute;
  right: 10px;
  top: 10px;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 4px;
  width: 50px;
  height: 50px;
  border: 0;
  border-radius: 4px;
  background-color: white;
  cursor: pointer;
`;

export default ProductItem;
