import React from 'react';
import { ModalContainer } from './stylesModal';

interface ModalProps {
  children: React.ReactNode;
  modalRef?: React.MutableRefObject<any>;
}

const Modal: React.FC<ModalProps> = ({ children, modalRef }) => {
  return <ModalContainer ref={modalRef}>{children}</ModalContainer>;
};

export default Modal;
