import React from 'react';

import { Wrapper } from './sideBarLojaStyles';
import LojaContent from './LojaContent';

interface IProps {
  menuRef: any;
  loja: any;
  setDeleteModal: any;
  selectedLoja: any;
  setShowModal: any;
}

const SideBarLoja: React.FC<IProps> = ({
  menuRef,
  loja,
  setDeleteModal,
  setShowModal,
}) => {
  return (
    <Wrapper ref={menuRef}>
      <LojaContent
        setShowModal={setShowModal}
        setDeleteModal={setDeleteModal}
        loja={loja}
      />
    </Wrapper>
  );
};

export default SideBarLoja;
