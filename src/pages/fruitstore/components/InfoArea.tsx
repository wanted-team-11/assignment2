import * as S from "./styles/InfoArea.styled";

const InfoArea = () => {
  return (
    <>
      <S.LogoAndDescWrapper>
        <S.LogoImage
          alt=""
          src="https://cdn.imweb.me/upload/S201907022014f7de8adf6/075897ae563f4.png"
        />
        <S.Title>프루떼 [수확배송]</S.Title>
      </S.LogoAndDescWrapper>
      <S.DescriptionBox>
        <S.FirstLine>
          친환경 농가의 맛있고 바른 먹거리를 만났을 때 게릴라로 열리는 프루뗴의
          반짝 스토어
        </S.FirstLine>
        <S.SecondLine>
          가장 알맞게 익었을 때 농장에서 바로! 수확해서 배송해드립니다.
        </S.SecondLine>
      </S.DescriptionBox>
    </>
  );
};

export default InfoArea;
