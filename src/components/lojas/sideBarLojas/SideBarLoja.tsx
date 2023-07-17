import React from 'react';

import { Wrapper } from './sideBarLojaStyles';
import LojaContent from './LojaContent';
import EditarLoja from './EditarLoja';

interface IProps {
  menuRef: any;
  loja: any;
  setDeleteModal: any;
}

const SideBarLoja: React.FC<IProps> = ({ menuRef, loja, setDeleteModal }) => {
  const [editar, setEditar] = React.useState(false);

  return (
    <Wrapper ref={menuRef}>
      {editar ? (
        <EditarLoja />
      ) : (
        <LojaContent
          setDeleteModal={setDeleteModal}
          loja={loja}
          setEditar={setEditar}
        />
      )}
    </Wrapper>
  );
};

export default SideBarLoja;
