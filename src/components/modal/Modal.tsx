import React from 'react';
import { ModalContainer } from './stylesModal';

interface ModalProps {
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ children }) => {
  return <ModalContainer>{children}</ModalContainer>;
};

export default Modal;
