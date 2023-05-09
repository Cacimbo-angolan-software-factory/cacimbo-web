import React from 'react';
import { IoPersonAddOutline } from 'react-icons/io5';

import { Buttons } from './stylesSingleSoli';
import { useSelector } from 'react-redux';

interface SolicitacaoProps {
  lic_request: any;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Solicitacao: React.FC<SolicitacaoProps> = ({ lic_request, setOpen }) => {
  const { cliente_nome, tipo, cliente_nif, data, parceiro_nome } = lic_request;
  const { user } = useSelector((state: any) => state.user);
  const [interesse, setInteresse] = React.useState(0);

  const incrementInteresse = () => {
    setInteresse(interesse + 1);
  };

  return (
    <>
      <td className='big-text data'>{data}</td>
      <td className='big-text'>{cliente_nome}</td>
      <td className='big-text'>{parceiro_nome}</td>
      <td className='big-text'>{cliente_nif}</td>
      <td>
        <span className='number'>
          <IoPersonAddOutline />
          {interesse}
        </span>
      </td>
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
          <button
            onClick={() => {
              setOpen(true);
            }}
          >
            <IoPersonAddOutline />
            Atribuir
          </button>
        ) : null}

        <button onClick={incrementInteresse}>
          <IoPersonAddOutline />
          Interesse
        </button>
      </Buttons>
    </>
  );
};

export default Solicitacao;
