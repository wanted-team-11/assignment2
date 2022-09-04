import * as S from "./styles/PageButton.styled";

const PageButton = ({
  getNextData,
}: {
  getNextData: (buttonIndex: number) => Promise<void>;
}) => {
  return (
    <S.PageButtonWrapper>
      <S.PaginationButton
        onClick={() => {
          getNextData(0);
        }}
      >
        1
      </S.PaginationButton>
      <S.PaginationButton
        onClick={() => {
          getNextData(1);
        }}
      >
        2
      </S.PaginationButton>
      <S.PaginationButton
        onClick={() => {
          getNextData(2);
        }}
      >
        3
      </S.PaginationButton>
    </S.PageButtonWrapper>
  );
};

export default PageButton;
