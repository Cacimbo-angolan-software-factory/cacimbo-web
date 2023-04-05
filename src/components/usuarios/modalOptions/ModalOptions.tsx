import React from 'react';

import { Container } from './ModalOptionsStyles';

interface Props {
  setOpenPerfis: (openPerfis: boolean) => void;
  modalRef?: React.MutableRefObject<any>;
}

const ModalOptions: React.FC<Props> = ({ setOpenPerfis, modalRef }) => {
  return (
    <Container ref={modalRef}>
      <p onClick={() => setOpenPerfis(true)}>Perfis</p>
      <p>Editar perfil</p>
      <p>testing</p>
    </Container>
  );
};

export default ModalOptions;
