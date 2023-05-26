import React from 'react';

import { Wrapper } from './modalConcluidoStyles';
import concluido from '../../assets/concluido.svg';

interface Props {
  children: React.ReactNode;
}

const ModalConcluido: React.FC<Props> = ({ children }) => {
  return (
    <Wrapper>
      <img src={concluido} alt='concluido' />
      {children}
    </Wrapper>
  );
};

export default ModalConcluido;
