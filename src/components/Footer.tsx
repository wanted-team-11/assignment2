import * as S from "./styles/Footer.styled";

const Footer = () => {
  return (
    <S.FooterBackground>
      <S.FooterWrapper>
        <S.ContentContainer content="1">
          <S.Title>About Fruitte</S.Title>
          <S.Subtitle>프루테는</S.Subtitle>
          <S.Paragraph>
            (프루떼는 프로젝트프룻의 새 이름입니다) 프루떼는 안전한 먹거리의
            신념을 지키는 좋은 농장을 발굴하고 소개하는 팜큐레이터입니다. 건강한
            자연을 가까이에서 만날 수 있는 팜큐레이션 서비스를 통하여 농장을
            알고 누리고 맛보는 기쁨을 전합니다. 프루떼를 경험하는 사람들의
            일상에 풍요로움을 더하는 것이 우리가 지향하는 가치입니다.{" "}
          </S.Paragraph>
        </S.ContentContainer>
        <S.ContentContainer content="2">
          <S.NoticeContainer>
            <S.NoticeTitle>문의안내</S.NoticeTitle>
            <div>카카오톡채널: 프루떼</div>
            <div>(주중 9시~18시 채팅 상담 가능)</div>
          </S.NoticeContainer>
          <S.NoticeContainer>
            <S.NoticeTitle>무통장 입금 계좌안내</S.NoticeTitle>
            <div>국민은행 527837-01-004676 주식회사 로컬앤라이프</div>
          </S.NoticeContainer>
        </S.ContentContainer>
        <S.ContentContainer content="3">
          <S.FooterNav>
            <S.PseudoLink>FRUITTE</S.PseudoLink>
            <S.PseudoLink>FRUIT NOW</S.PseudoLink>
            <S.NavLink to="/">FRUIT STORE</S.NavLink>
            <S.PseudoLink>FRUIT PLAY</S.PseudoLink>
            <S.PseudoLink>ABOUT US</S.PseudoLink>
          </S.FooterNav>
        </S.ContentContainer>
      </S.FooterWrapper>
    </S.FooterBackground>
  );
};

export default Footer;
