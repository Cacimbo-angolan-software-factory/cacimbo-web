import React from 'react';

import { Tabs } from './stylesSideBars';

const PerfisSideBarContainer: React.FC = () => {
  return (
    <>
      <h1>Gerenciamento de perfis</h1>

      <Tabs>
        <p>Criar perfil</p>
        <p>Editar perfil</p>
      </Tabs>
    </>
  );
};

export default PerfisSideBarContainer;
