import React from 'react';

import { Wrapper } from './sideBarLojaStyles';
import LojaContent from './LojaContent';
import EditarLoja from './EditarLoja';

interface IProps {
  menuRef: any;
  loja: any;
}

const SideBarLoja: React.FC<IProps> = ({ menuRef, loja }) => {
  const [editar, setEditar] = React.useState(false);

  return (
    <Wrapper ref={menuRef}>
      {editar ? (
        <EditarLoja />
      ) : (
        <LojaContent loja={loja} setEditar={setEditar} />
      )}
    </Wrapper>
  );
};

export default SideBarLoja;
