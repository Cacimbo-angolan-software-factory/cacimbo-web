import React, { useEffect } from 'react';

import { DeleteWrapper, FooterDiv, Overlay } from './lojasStyles';
import deleteImg from '../../../assets/delete.svg';

interface Props {
  deleteModal: any;
  setDeleteModal: any;
  deleteLoja: any;
  loja: any;
}

const DeleteModal: React.FC<Props> = ({
  deleteModal,
  setDeleteModal,
  deleteLoja,
  loja,
}) => {
  return (
    <DeleteWrapper className={deleteModal ? 'open' : ''}>
      <img src={deleteImg} alt='delete' />
      <h2>Tem certeza que deseja excluir esta loja?</h2>

      <FooterDiv>
        <button onClick={() => setDeleteModal(false)}>Cancelar</button>
        <button onClick={() => deleteLoja(loja)}>excluir</button>
      </FooterDiv>
    </DeleteWrapper>
  );
};

export default DeleteModal;
