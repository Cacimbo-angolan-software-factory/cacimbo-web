import React, { useEffect, useRef } from 'react';
import { IoTrashOutline, IoEllipsisVertical } from 'react-icons/io5';

import { LojaContainer, Overlay } from './lojasStyles';
import DeleteModal from './DeleteModal';
import SideBarLoja from '../../../components/lojas/sideBarLojas/SideBarLoja';

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
  const [showOptions, setShowOptions] = React.useState(false);
  // const [deleteModal, setDeleteModal] = React.useState(false);
  let menuRef = useRef<any>(null);

  useEffect(() => {
    let handler = (event: any) => {
      if (!menuRef.current?.contains(event.target)) {
        setShowOptions(false);
      }
    };

    document.addEventListener('mousedown', handler);

    return () => {
      document.removeEventListener('mousedown', handler);
    };
  });

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

          <div>
            <span onClick={() => setShowOptions(true)}>
              <IoEllipsisVertical />
            </span>
          </div>
        </section>
      </LojaContainer>

      {showOptions && <SideBarLoja loja={loja} menuRef={menuRef} />}

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
