import React from 'react';
import { IoTrashOutline } from 'react-icons/io5';

import { LojaContainer, Overlay } from './lojasStyles';
import DeleteModal from './DeleteModal';

interface Props {
  loja: any;
  deleteLoja: any;
  setDeleteModal: any;
  deleteModal: any;
}

const Loja: React.FC<Props> = ({
  loja,
  deleteLoja,
  setDeleteModal,
  deleteModal,
}) => {
  return (
    <>
      <LojaContainer>
        <img src={loja.StoreLogoUrl} alt='loja' />

        <section>
          <div>
            <h1>{loja.StoreName}</h1>
            <p>{loja.StoreSlogan}</p>
            <p>{loja.CompanyID}</p>
          </div>

          {/* <div>
            <span onClick={() => setDeleteModal(true)}>
              <IoTrashOutline />
            </span>
          </div> */}
        </section>
      </LojaContainer>

      {deleteModal && (
        <DeleteModal
          loja={loja.id}
          deleteLoja={deleteLoja}
          deleteModal={deleteModal}
          setDeleteModal={setDeleteModal}
        />
      )}

      {deleteModal && <Overlay onClick={() => setDeleteModal(false)} />}
    </>
  );
};

export default Loja;
