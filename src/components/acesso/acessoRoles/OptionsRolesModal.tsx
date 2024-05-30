import React, { Dispatch, SetStateAction } from 'react';
import { IoCreateOutline, IoTrashBinOutline } from 'react-icons/io5';

import { ModalOptions } from './acessoRolesStyles';

interface Props {
  position: { top: number; left: number };
  setOpenMessageModal: Dispatch<SetStateAction<boolean>>;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  menuRef: any;
  openEdit: boolean;
  setOpenEdit: Dispatch<SetStateAction<boolean>>;
}

const OptionsRolesModal: React.FC<Props> = ({
  position,
  setOpenMessageModal,
  setOpenModal,
  menuRef,
  setOpenEdit,
}) => {
  return (
    <ModalOptions
      ref={menuRef}
      style={{ top: `${position.top}px`, left: `${position.left}px` }}
    >
      <button
        onClick={() => {
          setOpenModal(true);
          setOpenEdit(true);
        }}
      >
        <IoCreateOutline /> Editar função
      </button>
      <button onClick={() => setOpenMessageModal(true)}>
        <IoTrashBinOutline /> Apagar função
      </button>
    </ModalOptions>
  );
};

export default OptionsRolesModal;
