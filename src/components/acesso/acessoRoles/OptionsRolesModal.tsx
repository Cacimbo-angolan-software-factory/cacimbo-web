import React, { Dispatch, SetStateAction } from 'react';
import { IoCreateOutline, IoTrashBinOutline } from 'react-icons/io5';

import { ModalOptions } from './acessoRolesStyles';

interface Props {
  position: { top: number; left: number };
  setOpenMessageModal: Dispatch<SetStateAction<boolean>>;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
}

const OptionsRolesModal: React.FC<Props> = ({
  position,
  setOpenMessageModal,
  setOpenModal,
}) => {
  return (
    <ModalOptions
      style={{ top: `${position.top}px`, left: `${position.left}px` }}
    >
      <button
      // onClick={() => setOpenModal(true)}
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
