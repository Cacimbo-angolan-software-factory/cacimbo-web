import React from 'react';
import { IoPersonAddOutline } from 'react-icons/io5';

import { Buttons, Container } from './stylesSingleSoli';
import { useSelector } from 'react-redux';

interface SolicitacaoProps {
  lic_request: any;
}

const Solicitacao: React.FC<SolicitacaoProps> = ({ lic_request }) => {
  const { id, cliente_nome, tipo, cliente_nif, data, parceiro_nome } =
    lic_request;
  const { user } = useSelector((state: any) => state.user);

  return (
    <Container>
      <h2>{cliente_nome}</h2>
      <h3>{parceiro_nome}</h3>
      <p>{id}</p>
      <h2 className='nif'>{cliente_nif}</h2>
      <p>{tipo}</p>
      <p>{data}</p>
      <Buttons>
        {user.user.parceiro_id === 1 ? (
          <button>
            <IoPersonAddOutline />
            Atribuir
          </button>
        ) : null}

        <button>
          <IoPersonAddOutline />
          Interesse
        </button>
      </Buttons>
    </Container>
  );
};

export default Solicitacao;
