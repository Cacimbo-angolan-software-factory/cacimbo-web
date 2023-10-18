import React, { Dispatch, SetStateAction } from 'react';

import { Button, Main } from './filterStyles';

interface Props {
  filtro: string;
  setFiltro: Dispatch<SetStateAction<string>>;
}

const FiltersServer: React.FC<Props> = ({ filtro, setFiltro }) => {
  return (
    <Main>
      <Button
        className={filtro === 'provincia' ? 'active' : ''}
        onClick={() => setFiltro('provincia')}
      >
        Província
      </Button>
      <Button
        className={filtro === 'versao' ? 'active' : ''}
        onClick={() => setFiltro('versao')}
      >
        Versão
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
