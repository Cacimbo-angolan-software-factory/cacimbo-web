import React, { useEffect } from 'react';
import {
  IoBusinessOutline,
  IoCalendarOutline,
  IoDocumentTextOutline,
  IoMailUnreadOutline,
  IoPeopleOutline,
  IoPersonAddOutline,
} from 'react-icons/io5';

import { Buttons, SmallDiv } from './stylesSingleSoli';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import { getModulo } from '../../redux/solicitaçaoFeatures/solicSlice';

interface SolicitacaoProps {
  lic_request: any;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  getModulosId: (id: number) => void;
}

const Solicitacao: React.FC<SolicitacaoProps> = ({ lic_request, setOpen }) => {
  const { cliente_nome, tipo, cliente_nif, data, parceiro_nome, sol_modulos } =
    lic_request;
  const { user } = useSelector((state: any) => state.user);
  const { modulosList } = useSelector((state: any) => state.solicitaçao);
  const dispatch = useDispatch<AppDispatch>();
  const [interesse, setInteresse] = React.useState(0);

  const incrementInteresse = () => {
    setInteresse(interesse + 1);
  };

  useEffect(() => {
    dispatch(getModulo());
  }, []);

  const getModulosId = (modulos: any) => {
    const modulosId = modulosList.filter((modulo: any) =>
      modulos.includes(modulo.id)
    );

    return modulosId.map((obj: any) => <li key={obj.id}>{obj.modulo}</li>);
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

      <SmallDiv>
        <span className='number'>
          <IoPersonAddOutline />
          {interesse}
        </span>

        <ul>{getModulosId(sol_modulos.map((mod: any) => mod.modulo_id))}</ul>
      </SmallDiv>

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
