import React from 'react';

import { Wrapper } from './modalConcluidoStyles';
import concluido from '../../assets/concluido.svg';

const ModalConcluido: React.FC = () => {
  return (
    <Wrapper>
      <img src={concluido} alt='concluido' />
      <h2>Cadastro feito com sucesso! 🎉</h2>
    </Wrapper>
  );
};

export default ModalConcluido;
