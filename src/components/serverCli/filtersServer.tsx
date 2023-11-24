import React, { Dispatch, SetStateAction } from 'react';

import { Button, Main } from './filterStyles';

interface Props {
  filtro: string;
  setFiltro: Dispatch<SetStateAction<string>>;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  provinciaSelected: any;
  setOpenModalVersao: Dispatch<SetStateAction<boolean>>;
  versaoSelected: any;
  setProvinciaSelected: any;
  setVersaoSelected: any;
  setOnlineFilter: Dispatch<SetStateAction<boolean>>;
  setOfflineFilter: Dispatch<SetStateAction<boolean>>;
}

const FiltersServer: React.FC<Props> = ({
  filtro,
  setFiltro,
  setOpenModal,
  provinciaSelected,
  setOpenModalVersao,
  versaoSelected,
  setProvinciaSelected,
  setVersaoSelected,
  setOnlineFilter,
  setOfflineFilter,
}) => {
  const clearFilters = () => {
    setFiltro('');
    setOpenModal(false);
    setOpenModalVersao(false);
    setProvinciaSelected('');
    setVersaoSelected('');
    setOnlineFilter(false);
    setOfflineFilter(false);
  };

  const activeFilters = () => {
    let count = 0;
    if (provinciaSelected) count++;
    if (versaoSelected) count++;
    if (filtro === 'online' || filtro === 'offline') count++;

    return count;
  };

  return (
    <Main>
      <Button
        className={
          (provinciaSelected && filtro === 'provincia') || activeFilters() > 1
            ? 'active'
            : ''
        }
        onClick={() => {
          setFiltro('provincia');
          setOpenModal(true);
        }}
      >
        {provinciaSelected || filtro === 'provincia'
          ? provinciaSelected
          : 'Província'}
      </Button>
      <Button
        className={
          (versaoSelected && filtro === 'versao') || activeFilters() > 1
            ? 'active'
            : ''
        }
        onClick={() => {
          setFiltro('versao');
          setOpenModalVersao(true);
        }}
      >
        {versaoSelected || filtro === 'versao' ? versaoSelected : 'Versão'}
      </Button>
      <Button
        className={filtro === 'online' ? 'active' : ''}
        onClick={() => {
          setFiltro('online');
          setOnlineFilter(true);
          setOfflineFilter(false);
        }}
      >
        Online
      </Button>
      <Button
        className={filtro === 'offline' ? 'active' : ''}
        onClick={() => {
          setFiltro('offline');
          setOfflineFilter(true);
          setOnlineFilter(false);
        }}
      >
        Offline
      </Button>

      <Button onClick={clearFilters}>Apagar filtros</Button>
    </Main>
  );
};

export default FiltersServer;
