import React, { Dispatch, SetStateAction, useEffect } from 'react';
import { IoCreateOutline, IoTrashBinOutline } from 'react-icons/io5';

import { ModalOptions } from './acessoRolesStyles';

interface Props {
  position: { top: number; left: number };
  roleSelected: any;
  openMessageModal: boolean;
  setOpenMessageModal: Dispatch<SetStateAction<boolean>>;
}

const OptionsRolesModal: React.FC<Props> = ({
  position,
  roleSelected,
  setOpenMessageModal,
}) => {
  useEffect(() => {
    console.log(roleSelected);
  }, [roleSelected]);

  return (
    <ModalOptions
      style={{ top: `${position.top}px`, left: `${position.left}px` }}
    >
      <button>
        <IoCreateOutline /> Editar função
      </button>
      <button onClick={() => setOpenMessageModal(true)}>
        <IoTrashBinOutline /> Apagar função
      </button>
    </ModalOptions>
  );
};

export default OptionsRolesModal;
