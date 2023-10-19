import React, { Dispatch, SetStateAction } from 'react';

import { Button, Main } from './filterStyles';

interface Props {
  filtro: string;
  setFiltro: Dispatch<SetStateAction<string>>;
  setOpenModal: any;
  provinciaSelected: any;
  setOpenModalVersao: any;
  versaoSelected: any;
}

const FiltersServer: React.FC<Props> = ({
  filtro,
  setFiltro,
  setOpenModal,
  provinciaSelected,
  setOpenModalVersao,
  versaoSelected,
}) => {
  return (
    <Main>
      <Button
        className={filtro === 'provincia' ? 'active' : ''}
        onClick={() => {
          setFiltro('provincia');
          setOpenModal(true);
        }}
      >
        {provinciaSelected && filtro === 'provincia'
          ? provinciaSelected
          : 'Província'}
      </Button>
      <Button
        className={filtro === 'versao' ? 'active' : ''}
        onClick={() => {
          setFiltro('versao');
          setOpenModalVersao(true);
        }}
      >
        {versaoSelected && filtro === 'versao' ? versaoSelected : 'versão'}
      </Button>
      <Button
        className={filtro === 'online' ? 'active' : ''}
        onClick={() => setFiltro('online')}
      >
        Online
      </Button>
      <Button
        className={filtro === 'offline' ? 'active' : ''}
        onClick={() => setFiltro('offline')}
      >
        Offline
      </Button>
    </Main>
  );
};

export default FiltersServer;
