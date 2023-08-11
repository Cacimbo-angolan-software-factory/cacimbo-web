import React from 'react';

import { DeleteWrapper, FooterDiv, SpinnerDiv } from './deleteModal';
import deleteImg from '../../../../assets/delete.svg';
import { useLoja } from '../../hooks/useLoja';
import Spinner from '../../../../components/spinner/Spinner';

interface Props {
  deleteModal: any;
  setDeleteModal: any;
  deleteLoja: any;
  loja: any;
}

const ModalDelete: React.FC<Props> = ({
  deleteModal,
  setDeleteModal,
  deleteLoja,
  loja,
}) => {
  const { deleteInProgress } = useLoja();

  return (
    <DeleteWrapper className={deleteModal ? 'open' : ''}>
      {deleteInProgress === true ? (
        <SpinnerDiv>
          <Spinner />
          <h2>Aguarde um momento...</h2>
        </SpinnerDiv>
      ) : (
        <>
          <img src={deleteImg} alt='delete' />
          <h2>Tem certeza que deseja excluir esta loja?</h2>
        </>
      )}

      <FooterDiv>
        <button onClick={() => setDeleteModal(false)}>Cancelar</button>
        <button onClick={() => deleteLoja(loja.id)}>excluir</button>
      </FooterDiv>
    </DeleteWrapper>
  );
};

export default ModalDelete;
