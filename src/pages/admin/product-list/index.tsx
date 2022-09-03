import { useState, useEffect } from "react";
import styled from "styled-components";
import ProductItem from "./ProductItem";

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

const AdminProductListPage = () => {
  const [productList, setProductList] = useState<Product[]>([]);
  const [toggle, setToggle] = useState<boolean>();

  const onRemove = (id: number) => {
    const newList = productList.filter((data: Product) => {
      return data.id !== id;
    });
    setProductList(newList);
  };

  const onBehind = (id: number) => {
    const behindList = productList.filter((data: Product) => {
      return data.id === id;
    });
    setToggle(!!behindList[0].visible);
    console.log(toggle);
  };

  const ChooseRemove = () => {};

  const onAllRemove = () => {
    setProductList([]);
  };

  const onAllBehind = () => {};
  useEffect(() => {
    fetch("http://localhost:3000/mockup-data/products.json", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setProductList(data);
      });
  }, []);

  return (
    <Wrapper>
      <PaddingButton>
        <button
          onClick={() => {
            if (window.confirm(`전체 숨김을 하시겠습니까?`)) {
              onAllBehind();
            }
          }}
        >
          {" "}
          전체 숨김{" "}
        </button>
        <button
          onClick={() => {
            if (window.confirm(`전체 삭제를 하시겠습니까?`)) {
              onAllRemove();
            }
          }}
        >
          {" "}
          전체 삭제{" "}
        </button>
      </PaddingButton>
      <PaddingButton>
        <button> 선택된 항목 숨김 </button>
        <button onClick={ChooseRemove}> 선택된 항목 삭제 </button>
      </PaddingButton>
      <ProductListContainer>
        {productList?.map((product: Product) => {
          console.log(product);
          return (
            <ProductItem
              product={product}
              onRemove={onRemove}
              onBehind={onBehind}
            />
          );
        })}
      </ProductListContainer>
    </Wrapper>
  );
};
export default AdminProductListPage;

const Wrapper = styled.div`
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
`;

const PaddingButton = styled.div`
  display: flex;
  padding: 15px 0px 5px 27px;
  gap: 10px;
`;

const ProductListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
