import React from 'react';
import { IoPersonAddOutline } from 'react-icons/io5';

import { Buttons, Container } from './stylesSingleSoli';

interface SolicitacaoProps {
  lic_request: any;
}

const Solicitacao: React.FC<SolicitacaoProps> = ({ lic_request }) => {
  const { id, cliente_nome, tipo, cliente_nif, data } = lic_request;

  return (
    <Container>
      <h2>{cliente_nome}</h2>
      <p>{id}</p>
      <h2 className='nif'>{cliente_nif}</h2>
      <p>{tipo}</p>
      <p>{data}</p>
      <Buttons>
        <button>
          <IoPersonAddOutline />
          Atribuir
        </button>
        <button>
          <IoPersonAddOutline />
          Interesse
        </button>
      </Buttons>
    </Container>
  );
};

export default Solicitacao;
