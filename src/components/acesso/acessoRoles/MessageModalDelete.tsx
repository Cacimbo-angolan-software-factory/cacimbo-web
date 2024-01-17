import React, { Dispatch, SetStateAction } from 'react';

import { Card } from './acessoRolesStyles';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../redux/store';
import {
  deleteRole,
  getRoles,
} from '../../../redux/permissionsFeatures/permissionSlice';

interface IProps {
  setOpenMessageModal: Dispatch<SetStateAction<boolean>>;
  roleSelected: any;
}

const MessageModalDelete: React.FC<IProps> = ({
  setOpenMessageModal,
  roleSelected,
}) => {
  const dispatch = useDispatch<AppDispatch>();

  const deleteRoleAndUpdateList = () => {
    dispatch(deleteRole(roleSelected.id)).finally(() => {
      dispatch(getRoles());
    });
  };

  return (
    <Card>
      <p>Tem certeza que deseja apagar esta função?</p>
      <div>
        <button onClick={() => setOpenMessageModal(false)}>cancelar</button>
        <button onClick={deleteRoleAndUpdateList}>excluir</button>
      </div>
    </Card>
  );
};

export default MessageModalDelete;
