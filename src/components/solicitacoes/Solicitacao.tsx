import React from 'react';
import {
  IoBusinessOutline,
  IoCalendarOutline,
  IoDocumentTextOutline,
  IoMailUnreadOutline,
  IoPeopleOutline,
  IoPersonAddOutline,
} from 'react-icons/io5';

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
      <div className='companies'>
        <div>
          <IoPeopleOutline />
          <h3 className='big-text'>{cliente_nome}</h3>
        </div>
        <div>
          <IoBusinessOutline />
          <h3 className='big-text'>{parceiro_nome}</h3>
        </div>
      </div>

      <div className='nif-status'>
        <p className='nif'>
          <IoDocumentTextOutline />
          {cliente_nif}
        </p>
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
      </div>

      <span className='number'>
        <IoPersonAddOutline />
        {interesse}
      </span>
      <p className='date'>
        <IoCalendarOutline />
        {data}
      </p>

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
