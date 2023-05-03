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
    <>
      <td className='big-text data'>{data}</td>
      <td className='big-text'>{cliente_nome}</td>
      <td className='big-text'>{parceiro_nome}</td>
      <td className='big-text'>{cliente_nif}</td>
      <td>N/A</td>
      <td>
        <span
          className={
            tipo === 'Renovação'
              ? 'renovacao'
              : tipo === 'Padronizar'
              ? 'padronizar'
              : 'comum'
          }
        >
          {tipo}
        </span>
      </td>
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
    </>
  );
};

export default Solicitacao;
