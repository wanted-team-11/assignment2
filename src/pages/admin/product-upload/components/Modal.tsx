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
        <button onClick={onClickCloseModal}>X</button>
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
  text-align: center;
  text-decoration: none;
  padding: 20px 70px;
  background-color: #fff;
`;
