import styled from "styled-components";
import { ReactNode } from "react";

type Props = {
  title: string;
  onCancel: () => void;
  children: ReactNode;
};

const Modal = ({ title, onCancel, children }: Props) => {
  return (
    <S.Overlay onClick={onCancel}>
      <S.Container>
        <S.Header>
          <S.Title>{title}</S.Title>
        </S.Header>
        {children}
      </S.Container>
    </S.Overlay>
  );
};

export default Modal;

const S: any = {};

S.Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.25);
  z-index: 2;
`;

S.Container = styled.div`
  background-color: #ffffff;
  width: 80vw;
  max-width: 500px;
`;

S.Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #f3f3f3;
`;

S.Title = styled.h1`
  font-size: 14px;
`;
