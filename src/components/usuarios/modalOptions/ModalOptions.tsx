import React from 'react';

import { Container } from './ModalOptionsStyles';

interface Props {
  setOpenPerfis: (openPerfis: boolean) => void;
}

const ModalOptions: React.FC<Props> = ({ setOpenPerfis }) => {
  return (
    <Container>
      <p onClick={() => setOpenPerfis(true)}>Perfis</p>
      <p>Editar perfil</p>
      <p>testing</p>
    </Container>
  );
};

export default ModalOptions;
