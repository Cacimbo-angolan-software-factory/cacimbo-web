import React from 'react';

import { Button, Main } from './filterStyles';

const FiltersServer: React.FC = () => {
  return (
    <Main>
      <Button>Província</Button>
      <Button>Versão</Button>
      <Button>Online</Button>
      <Button>Offline</Button>
    </Main>
  );
};

export default FiltersServer;
