import React, { ReactNode, Dispatch } from "react";
import styled from "styled-components";

type ModalProps = {
  setModalState: Dispatch<boolean>;
  children: ReactNode;
};

const Modal = ({ setModalState, children }: ModalProps) => {
  const onClickCloseModal = () => {
    setModalState(false);
  };

  return (
    <ModalContainer onClick={onClickCloseModal}>
      <ModalBackground>
        <ModalBox>
          <div>{children}</div>
          <button onClick={onClickCloseModal}>X</button>
        </ModalBox>
      </ModalBackground>
    </ModalContainer>
  );
};

export default Modal;

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
`;

const ModalBackground = styled.div`
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.5;
  position: fixed;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
`;

const ModalBox = styled.div`
  text-align: center;
  text-decoration: none;
  padding: 20px 70px;
  background-color: #fff;
`;
