import React from "react";
import styled from "styled-components";

const ProductItem = () => {
  return (
    <ProjectDetailMain>
      <ProjectButtonBox>
        <ProjectButton />
      </ProjectButtonBox>
    </ProjectDetailMain>
  );
};

export default ProductItem;

const ProjectDetailMain = styled.div`
  width: 1260px;
  margin: 0 auto;
  border: 1px solid red;
`;

const ProjectButtonBox = styled.div`
  display: flex;
`;

const ProjectButton = styled.button`
  width: 4rem;
  height: 2.3rem;
  border-radius: 30px;
  border: 1px solid #e2e2e2;
  background-color: white;
  margin: 20px 10px 0 0;
  &:hover {
    cursor: pointer;
    background-color: black;
    color: white;
  }
`;
