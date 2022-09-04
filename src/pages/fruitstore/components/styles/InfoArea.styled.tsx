import styled from "styled-components";

export const LogoAndDescWrapper = styled.div`
  width: 1260px;
  margin: 5rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LogoImage = styled.img`
  width: 32px;
  height: 32px;
`;

export const Title = styled.p`
  font-weight: 700;
  font-size: 1.714rem;
`;

export const DescriptionBox = styled.div`
  width: 1260px;
  margin: 0 auto;
  margin-bottom: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FirstLine = styled.p`
  margin: 0;
`;

export const SecondLine = styled(FirstLine)`
  margin-top: 0.5rem;
`;
