import React from "react";
import styled from "styled-components";

const InfoArea = () => {
  return (
    <>
      <LogoAndDescWrapper>
        <LogoImage
          alt=""
          src="https://cdn.imweb.me/upload/S201907022014f7de8adf6/075897ae563f4.png"
        />
        <Title>프루떼 [수확배송]</Title>
      </LogoAndDescWrapper>
      <DescriptionBox>
        <FirstLine>
          친환경 농가의 맛있고 바른 먹거리를 만났을 때 게릴라로 열리는 프루뗴의
          반짝 스토어
        </FirstLine>
        <SecondLine>
          가장 알맞게 익었을 때 농장에서 바로! 수확해서 배송해드립니다.
        </SecondLine>
      </DescriptionBox>
    </>
  );
};

export default InfoArea;

const LogoAndDescWrapper = styled.div`
  width: 1260px;
  margin: 5rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LogoImage = styled.img`
  width: 32px;
  height: 32px;
`;

const Title = styled.p`
  font-weight: 700;
  font-size: 1.714rem;
`;

const DescriptionBox = styled.div`
  width: 1260px;
  margin: 0 auto;
  margin-bottom: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FirstLine = styled.p`
  margin: 0;
`;

const SecondLine = styled(FirstLine)`
  margin-top: 0.5rem;
`;
