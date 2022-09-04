import { ReactNode, Dispatch, useRef } from "react";
import styled from "styled-components";
import useOnClickOutside from "../hooks/useOnClickOutside";

interface ModalProps {
  setModalState: Dispatch<boolean>;
  children: ReactNode;
}

const Modal = ({ setModalState, children }: ModalProps) => {
  const ModalRef = useRef<HTMLDivElement>(null);
  const onClickCloseModal = () => {
    setModalState(false);
  };

  useOnClickOutside(ModalRef, () => setModalState(false));

  return (
    <ModalBackground>
      <ModalBox ref={ModalRef}>
        <div>{children}</div>
        <AlertButton onClick={onClickCloseModal}>X</AlertButton>
      </ModalBox>
    </ModalBackground>
  );
};

export default Modal;

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalBox = styled.div`
  position: relative;
  width: 350px;
  height: 350px;
  text-decoration: none;
  border-radius: 8px;
  padding: 10px 100px;
  background-color: #fff;
  div {
    display: flex;
    flex-direction: column;
    input {
      margin-bottom: 20px;
    }
  }
`;

const AlertButton = styled.button`
  position: absolute;
  top: 20px;
  right: 100px;
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 5px;
  background-color: #e0dbdb;
  color: #000;
  font-size: 14px;
  display: inline-block;
  font-weight: 400;
  line-height: 1.5;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
`;
